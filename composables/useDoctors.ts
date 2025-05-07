export interface Doctor {
    id: number;
    first_name: string;
    last_name: string;
    full_name: string;
    department?: string;
    level?: string;
  }
  
  export function useDoctors() {
    const doctors = ref<Doctor[]>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);
  
    const config = useRuntimeConfig();
    const apiBase = config.public.API_BASE;
  
    const getCookie = (name: string): string | null => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
      return null;
    };
  
    const accessToken = typeof window !== "undefined" ? getCookie("access_token") : null;
  
    const authHeaders = accessToken
      ? {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      : {};
  
    const fetchDoctors = async (filterByDepartment: string | null = null) => {
      try {
        const response = await $fetch<Doctor[]>(`${apiBase}/Managment/employees/doctors/`, {
          ...authHeaders,
        });
  
        const enriched = response.map(doctor => ({
          ...doctor,
          full_name: `${doctor.first_name} ${doctor.last_name}`,
        }));
  
        // If filterByDepartment is passed, filter doctors by that department
        doctors.value = filterByDepartment
          ? enriched.filter(doc => doc.department === filterByDepartment)
          : enriched;
      } catch (err) {
        error.value = "Failed to load doctors.";
        console.error(err);
      } finally {
        loading.value = false;
      }
    };
  
    // Function to fetch only General Practitioners
    const fetchGeneralPractitioners = async () => {
      await fetchDoctors("General Practitioner");
    };
  
    // Function to fetch all doctors without any department filter
    const fetchAllDoctors = async () => {
      await fetchDoctors(); // No filter applied
    };
  
    // Initially fetch General Practitioners by default
    onMounted(fetchGeneralPractitioners);
  
    return { doctors, loading, error, fetchGeneralPractitioners, fetchAllDoctors };
  }
  