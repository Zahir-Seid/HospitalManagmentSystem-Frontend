import { ref, onMounted } from "vue";
import { useRuntimeConfig } from '#imports';

export interface Employee {
  id: number;
  phone_number: string;
  email: string;
  username: string;
  role: string;
  address: string;
}

export function useEmployees() {
  const employees = ref<Employee[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);

  const config = useRuntimeConfig();
  const apiBase = config.public.API_BASE;

  // Helper function to get a cookie value by name
  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
    return null;
  };

  // Get token from cookies if in browser environment
  const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;

  const authHeaders = accessToken
    ? {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    : {};

  const fetchEmployees = async () => {
    try {
      const response = await $fetch<Employee[]>(`${apiBase}/Managment/employees/`, {
        ...authHeaders,
      });
      employees.value = response;
    } catch (err) {
      error.value = "Failed to load employees.";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchEmployees);

  return { employees, loading, error };
}
