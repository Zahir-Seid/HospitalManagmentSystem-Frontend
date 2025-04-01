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

  // Access the API base URL from the Nuxt runtime config
  const config = useRuntimeConfig();
  const apiBase = config.public.API_BASE;  // API Base URL

  // Authorization headers with the Bearer token
  const authHeaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,  // Get the token from local storage
    },
  };

  const fetchEmployees = async () => {
    try {
      // Fetch employees from API with Bearer authentication
      const response = await $fetch<Employee[]>(`${apiBase}/api/Managment/employees/`, {
        ...authHeaders,  // Include the authorization headers in the request
      });
      
      // Assign response data to employees list
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
