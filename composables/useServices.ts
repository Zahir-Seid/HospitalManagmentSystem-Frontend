import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#imports';

export function useServiceNamesAndPrices() {
  const services = ref([]);
  const errorMessage = ref('');

  const config = useRuntimeConfig();
  const apiBase = config.public.API_BASE;

  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
    return null;
  };

  const fetchServices = async () => {
    const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;

    const authHeaders = accessToken
      ? {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      : {};

    try {
      const response = await fetch(`${apiBase}/Managment/services`, authHeaders);
      if (!response.ok) throw new Error('Failed to fetch services');
      const data = await response.json();

      // Only keep service_name and price
      services.value = data.map(({ service_name, price }) => ({ service_name, price }));
    } catch (error) {
      errorMessage.value = error.message;
    }
  };

  onMounted(fetchServices);

  return {
    services,
    errorMessage,
  };
}
