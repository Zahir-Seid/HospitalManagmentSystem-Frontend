export interface Patient {
  id: number;
  username: string;
  patient: string;
  doctor: string;
}

export function usePatients(doctorId: number | null = null) {
  const patientData = ref<Patient[]>([]);  // List to store patient data
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

  // Function to fetch patients related to a specific doctor
  const fetchPatientsByDoctor = async () => {
    if (!doctorId) return;

    try {
      const response = await $fetch<Patient[]>(`${apiBase}/appointments/patients/${doctorId}`, {
        ...authHeaders,
      });
      patientData.value = response;
    } catch (err) {
      error.value = "Failed to load patients.";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  // Function to fetch all patients who have at least one appointment
  const fetchAllPatients = async () => {
    try {
      const response = await $fetch<Patient[]>(`${apiBase}/appointments/patient/list`, {
        ...authHeaders,
      });
      patientData.value = response;
    } catch (err) {
      error.value = "Failed to load all patients.";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  // If doctorId is provided, fetch patients related to that doctor, otherwise fetch all patients
  const fetchPatients = doctorId ? fetchPatientsByDoctor : fetchAllPatients;

  onMounted(fetchPatients);

  return { patientData, loading, error };
}
