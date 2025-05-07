import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  user_id: number;
}

export const useAuth = () => {
  const config = useRuntimeConfig()
  const apiBase = config.public.API_BASE

  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null
    return null
  }

  const getAccessToken = () => {
    return typeof window !== 'undefined' ? getCookie('access_token') : null
  }

  const getAuthHeaders = () => {
    const token = getAccessToken()
    return token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : {}
  }

  const getUser = () => {
    const token = getAccessToken()
    if (!token) return null
    try {
      const decoded = jwtDecode<DecodedToken>(token)
      return decoded
    } catch (err) {
      console.error('Failed to decode token:', err)
      return null
    }
  }

  const handleLogout = async () => {
    try {
      const refreshToken = getCookie('refresh_token')
      if (!refreshToken) {
        console.warn('No refresh token found.')
        window.location.href = '/'
        return
      }

      await $fetch(`${apiBase}/user/logout/`, {
        method: 'POST',
        body: { refresh_token: refreshToken },
        ...getAuthHeaders(),
      })

      document.cookie = 'access_token=; Max-Age=0; path=/'
      document.cookie = 'refresh_token=; Max-Age=0; path=/'
      window.location.href = '/'
    } catch (error) {
      console.error('Logout failed:', error)
      alert('Logout failed. Please try again.')
    }
  }

  return {
    getCookie,
    getAuthHeaders,
    getUser,
    handleLogout,
  }
}
