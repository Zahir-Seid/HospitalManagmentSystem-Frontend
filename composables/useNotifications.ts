import { ref, onMounted } from 'vue';

interface Notification {
  id: number;
  message: string;
  created_at: string;
  status: string;
}

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
  return null;
};

export const useNotifications = () => {
  const notifications = ref<Notification[]>([]);
  const unreadCount = ref<number>(0);

  const config = useRuntimeConfig();
  const apiBase = config.public.API_BASE;

  const fetchNotifications = async () => {
    const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;

    const authHeaders = accessToken
      ? {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      : {};

    try {
      const response = await fetch(`${apiBase}/notifications/list`, authHeaders);
      const data: Notification[] = await response.json();

      // Filter only unread notifications
      const unreadNotifications = data.filter((n) => n.status !== 'read');

      notifications.value = unreadNotifications;
      unreadCount.value = unreadNotifications.length;
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  onMounted(() => {
    fetchNotifications();
  });

  return {
    notifications,
    unreadCount,
    fetchNotifications,
  };
};
