<script setup>
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#imports';
import { useAuth } from '~/composables/useAuth' // Adjust the path if needed
import { usePatients } from '~/composables/usePatients';  // Import usePatients composable
import { useNotifications } from '~/composables/useNotifications';

const { unreadCount } = useNotifications();
const { getUser } = useAuth()
const { doctors, fetchAllDoctors } = useDoctors()
const appointments = ref([]);

const defaultAvatar = '/assets/imgs/download.png'; // fallback image in case none exists
const currentUser = getUser()
const currentDoctor = computed(() => {
  if (!currentUser || !doctors.value.length) return null
  return doctors.value.find(doc => doc.id === currentUser.user_id) || null
})

// Fetching patients for the current doctor
const currentDoctorId = computed(() => currentDoctor.value?.id || 0);
const { patientData, loading, error } = usePatients(currentDoctorId.value);

// Function to get a cookie value by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

const config = useRuntimeConfig();
const apiBase = config.public.API_BASE;

// Auth headers with token from cookies
const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;
const authHeaders = {
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : '',
    'Content-Type': 'application/json',
  },
};

// Fetch appointments for logged-in doctor
const fetchAppointments = async () => {
  try {
    const response = await fetch(`${apiBase}/appointments/list`, authHeaders);
    if (!response.ok) throw new Error('Failed to fetch appointments');
    const data = await response.json();
    appointments.value = data;
  } catch (error) {
    console.error('Error fetching appointments:', error);
  }
};


const showEditModal = ref(false);
const editForm = ref({
  id: null,
  date: '',
  time: '',
  status: 'Pending', // default value
});


const openEditModal = (appointment) => {
  editForm.value = {
    id: appointment.id,
    date: appointment.date,
    time: appointment.time,
    status: appointment.status || 'Pending'
  };
  showEditModal.value = true;
};


const updateAppointment = async () => {
  try {
    const response = await fetch(`${apiBase}/appointments/update/${editForm.value.id}`, {
      method: 'PUT',
      headers: authHeaders.headers,
      body: JSON.stringify({
        date: editForm.value.date,
        time: editForm.value.time,
        status: editForm.value.status, // include status
      }),
    });

    if (!response.ok) throw new Error('Update failed');

    showEditModal.value = false;
    await fetchAppointments(); // refresh data
  } catch (error) {
    console.error('Update error:', error);
  }
};



onMounted(() => {
  fetchAppointments();
  fetchAllDoctors();
});
</script>

<template
  ><div id="webcrumbs">
    <div class="w-[1280px] flex font-sans">
      <aside
        class="w-64 bg-emerald-900 p-6 flex flex-col justify-between h-screen sticky top-0"
      >
      <nav class="space-y-4">
          <div class="text-white text-xl font-bold mb-8"><a href="/staff/doctor/dashboard">Doctor Dashboard</a></div>
          <a href="/staff/doctor/appointment" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"> 
                      <span class="material-symbols-outlined mr-2">event</span> Appointments 
          </a>
          <a
            href="/staff/doctor/prescriptions"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
            <span
              class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
              >medication</span
            >
            Prescriptions
          </a>
          <a
            href="/staff/doctor/referrals"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
            <span
              class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
              >transfer_within_a_station</span
            >
            Patient Referrals
          </a>
          <a
            href="/staff/doctor/chat"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
            <span
              class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
              >chat</span
            >
            Chat
          </a>
          <a
            href="/staff/doctor/notifications"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
          <span class="material-symbols-outlined mr-2">notifications</span>
              Notifications
              <span
                v-if="unreadCount > 0"
                class="ml-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full"
              >
                {{ unreadCount }}
              </span>
          </a>
          <a
            href="/staff/doctor/inbox"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
            <span
              class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
              >inbox</span
            >
            Inbox
          </a>
          <a
            href="/staff/doctor/attendance"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
            <span
              class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
              >schedule</span
            >
            Attendance
          </a>
          <a
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
            @click.prevent="handleLogout"
          >
            <span class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform">
              logout
            </span>
            LogOut
          </a>
        </nav>
        <div
          class="text-emerald-200 text-sm text-center mt-auto pt-6 border-t border-emerald-800"
        >
          © 2025 Assosa General Hospital. All rights reserved.
        </div>
      </aside>
      <main class="flex-1 p-6 bg-emerald-50 min-h-screen">
        <header class="mb-6">
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold text-emerald-900">Welcome, Dr. {{ currentDoctor?.full_name || 'Doctor' }}</h1>
          </div>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Appointments Section -->
          <div class="lg:col-span-3">
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div class="bg-gradient-to-r from-emerald-100 to-white -m-6 p-6 rounded-t-xl flex justify-between items-center">
                <h3 class="text-xl font-bold text-emerald-900">Appointments</h3>
              </div>

              <div class="overflow-x-auto mt-6">
                <table class="w-full">
                  <thead class="bg-emerald-50">
                    <tr>
                      <th class="p-4 text-left text-emerald-700">Patient</th>
                      <th class="p-4 text-left text-emerald-700">Time</th>
                      <th class="p-4 text-left text-emerald-700">Reason</th>
                      <th class="p-4 text-left text-emerald-700">Status</th>
                      <th class="p-4 text-left text-emerald-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="appointment in appointments"
                      :key="appointment.id"
                      class="border-b border-emerald-100 hover:bg-emerald-50 transition-colors"
                    >
                      <td class="p-4 flex items-center space-x-2">
                        <img
                        :src="appointment.patient_profile_picture || defaultAvatar"
                        alt="Patient"
                        class="w-8 h-8 rounded-full object-cover"
                        />
                        <span>{{ appointment.patient || 'Patient #' + appointment.id }}</span>
                      </td>
                      <td class="p-4">{{ appointment.time }}</td>
                      <td class="p-4">{{ appointment.reason }}</td>
                      <td class="p-4">
                        <span class="px-3 py-1 rounded-full"
                          :class="{
                            'bg-amber-100 text-amber-800': appointment.status === 'Pending',
                            'bg-emerald-100 text-emerald-800': appointment.status === 'Confirmed',
                          }"
                        >
                          {{ appointment.status }}
                        </span>
                      </td>
                      <td class="p-4">
                        <button
                          class="text-emerald-600 hover:text-emerald-700 p-1 hover:bg-emerald-100 rounded-full transition-colors"
                          @click="openEditModal(appointment)"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <dialog v-if="showEditModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div class="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                    <h2 class="text-lg font-bold mb-4">Edit Appointment</h2>
                    
                    <label class="block mb-2">Date</label>
                    <input type="date" v-model="editForm.date" class="w-full mb-4 border rounded px-3 py-2" />

                    <label class="block mb-2">Time</label>
                      <input type="time" v-model="editForm.time" class="w-full mb-4 border rounded px-3 py-2" />

                      <label class="block mb-2">Status</label>
                      <select v-model="editForm.status" class="w-full mb-4 border rounded px-3 py-2">
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                      </select>
                    <div class="flex justify-end space-x-2">
                    <button @click="showEditModal = false" class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancel</button>
                    <button @click="updateAppointment" class="px-4 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700">Save</button>
                    </div>
                </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
  @import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
  @import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
  @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);

  /*! tailwindcss v3.4.11 | MIT License | https://tailwindcss.com*/
  *,
  :after,
  :before {
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
  }
  :after,
  :before {
    --tw-content: "";
  }
  :host,
  html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    font-family:
      Open Sans,
      ui-sans-serif,
      system-ui,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol,
      Noto Color Emoji;
    font-feature-settings: normal;
    font-variation-settings: normal;
    -moz-tab-size: 4;
    tab-size: 4;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    line-height: inherit;
    margin: 0;
  }
  hr {
    border-top-width: 1px;
    color: inherit;
    height: 0;
  }
  abbr:where([title]) {
    text-decoration: underline dotted;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  pre,
  samp {
    font-family:
      ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      Liberation Mono,
      Courier New,
      monospace;
    font-feature-settings: normal;
    font-size: 1em;
    font-variation-settings: normal;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    border-collapse: collapse;
    border-color: inherit;
    text-indent: 0;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 100%;
    font-variation-settings: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  input:where([type="button"]),
  input:where([type="reset"]),
  input:where([type="submit"]) {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }
  :-moz-focusring {
    outline: auto;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  progress {
    vertical-align: baseline;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  summary {
    display: list-item;
  }
  blockquote,
  dd,
  dl,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  p,
  pre {
    margin: 0;
  }
  fieldset {
    margin: 0;
  }
  fieldset,
  legend {
    padding: 0;
  }
  menu,
  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  dialog {
    padding: 0;
  }
  textarea {
    resize: vertical;
  }
  input::placeholder,
  textarea::placeholder {
    color: #9ca3af;
    opacity: 1;
  }
  [role="button"],
  button {
    cursor: pointer;
  }
  :disabled {
    cursor: default;
  }
  audio,
  canvas,
  embed,
  iframe,
  img,
  object,
  svg,
  video {
    display: block;
    vertical-align: middle;
  }
  img,
  video {
    height: auto;
    max-width: 100%;
  }
  [hidden] {
    display: none;
  }
  *,
  :after,
  :before {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    --tw-contain-size: ;
    --tw-contain-layout: ;
    --tw-contain-paint: ;
    --tw-contain-style: ;
  }
  ::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    --tw-contain-size: ;
    --tw-contain-layout: ;
    --tw-contain-paint: ;
    --tw-contain-style: ;
  }
  #webcrumbs .absolute {
    position: absolute;
  }
  #webcrumbs .relative {
    position: relative;
  }
  #webcrumbs .sticky {
    position: sticky;
  }
  #webcrumbs .right-0 {
    right: 0;
  }
  #webcrumbs .top-0 {
    top: 0;
  }
  #webcrumbs .col-span-2 {
    grid-column: span 2 / span 2;
  }
  #webcrumbs .-m-6 {
    margin: -24px;
  }
  #webcrumbs .mb-2 {
    margin-bottom: 8px;
  }
  #webcrumbs .mb-6 {
    margin-bottom: 24px;
  }
  #webcrumbs .mb-8 {
    margin-bottom: 32px;
  }
  #webcrumbs .ml-2 {
    margin-left: 8px;
  }
  #webcrumbs .mr-2 {
    margin-right: 8px;
  }
  #webcrumbs .mr-3 {
    margin-right: 12px;
  }
  #webcrumbs .mt-2 {
    margin-top: 8px;
  }
  #webcrumbs .mt-6 {
    margin-top: 24px;
  }
  #webcrumbs .mt-auto {
    margin-top: auto;
  }
  #webcrumbs .block {
    display: block;
  }
  #webcrumbs .flex {
    display: flex;
  }
  #webcrumbs .grid {
    display: grid;
  }
  #webcrumbs .h-2 {
    height: 8px;
  }
  #webcrumbs .h-3 {
    height: 12px;
  }
  #webcrumbs .h-8 {
    height: 32px;
  }
  #webcrumbs .h-\[600px\] {
    height: 600px;
  }
  #webcrumbs .h-screen {
    height: 100vh;
  }
  #webcrumbs .min-h-screen {
    min-height: 100vh;
  }
  #webcrumbs .w-2 {
    width: 8px;
  }
  #webcrumbs .w-3 {
    width: 12px;
  }
  #webcrumbs .w-64 {
    width: 256px;
  }
  #webcrumbs .w-8 {
    width: 32px;
  }
  #webcrumbs .w-\[1280px\] {
    width: 1280px;
  }
  #webcrumbs .w-full {
    width: 100%;
  }
  #webcrumbs .max-w-\[70\%\] {
    max-width: 70%;
  }
  #webcrumbs .flex-1 {
    flex: 1 1 0%;
  }
  #webcrumbs .cursor-pointer {
    cursor: pointer;
  }
  #webcrumbs .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  #webcrumbs .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  #webcrumbs .flex-row {
    flex-direction: row;
  }
  #webcrumbs .flex-col {
    flex-direction: column;
  }
  #webcrumbs .items-center {
    align-items: center;
  }
  #webcrumbs .justify-end {
    justify-content: flex-end;
  }
  #webcrumbs .justify-center {
    justify-content: center;
  }
  #webcrumbs .justify-between {
    justify-content: space-between;
  }
  #webcrumbs .gap-4 {
    gap: 16px;
  }
  #webcrumbs .gap-6 {
    gap: 24px;
  }
  #webcrumbs :is(.space-x-2 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-left: calc(8px * (1 - var(--tw-space-x-reverse)));
    margin-right: calc(8px * var(--tw-space-x-reverse));
  }
  #webcrumbs :is(.space-x-4 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-left: calc(16px * (1 - var(--tw-space-x-reverse)));
    margin-right: calc(16px * var(--tw-space-x-reverse));
  }
  #webcrumbs :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-y-reverse: 0;
    margin-bottom: calc(16px * var(--tw-space-y-reverse));
    margin-top: calc(16px * (1 - var(--tw-space-y-reverse)));
  }
  #webcrumbs .overflow-x-auto {
    overflow-x: auto;
  }
  #webcrumbs .overflow-y-auto {
    overflow-y: auto;
  }
  #webcrumbs .rounded-full {
    border-radius: 9999px;
  }
  #webcrumbs .rounded-lg {
    border-radius: 24px;
  }
  #webcrumbs .rounded-xl {
    border-radius: 36px;
  }
  #webcrumbs .rounded-t-xl {
    border-top-left-radius: 36px;
    border-top-right-radius: 36px;
  }
  #webcrumbs .border {
    border-width: 1px;
  }
  #webcrumbs .border-b {
    border-bottom-width: 1px;
  }
  #webcrumbs .border-t {
    border-top-width: 1px;
  }
  #webcrumbs .border-emerald-100 {
    --tw-border-opacity: 1;
    border-color: rgb(209 250 229 / var(--tw-border-opacity));
  }
  #webcrumbs .border-emerald-200 {
    --tw-border-opacity: 1;
    border-color: rgb(167 243 208 / var(--tw-border-opacity));
  }
  #webcrumbs .border-emerald-800 {
    --tw-border-opacity: 1;
    border-color: rgb(6 95 70 / var(--tw-border-opacity));
  }
  #webcrumbs .bg-amber-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(254 243 199 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-amber-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(255 251 235 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-blue-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(239 246 255 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(209 250 229 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(236 253 245 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-600 {
    --tw-bg-opacity: 1;
    background-color: rgb(5 150 105 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(6 78 59 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-gray-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-green-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(34 197 94 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-red-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(254 226 226 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-red-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(254 242 242 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-red-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(239 68 68 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-gradient-to-r {
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
  }
  #webcrumbs .from-emerald-100 {
    --tw-gradient-from: #d1fae5 var(--tw-gradient-from-position);
    --tw-gradient-to: rgba(209, 250, 229, 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  }
  #webcrumbs .to-white {
    --tw-gradient-to: #fff var(--tw-gradient-to-position);
  }
  #webcrumbs .p-1 {
    padding: 4px;
  }
  #webcrumbs .p-2 {
    padding: 8px;
  }
  #webcrumbs .p-3 {
    padding: 12px;
  }
  #webcrumbs .p-4 {
    padding: 16px;
  }
  #webcrumbs .p-6 {
    padding: 24px;
  }
  #webcrumbs .px-2 {
    padding-left: 8px;
    padding-right: 8px;
  }
  #webcrumbs .px-3 {
    padding-left: 12px;
    padding-right: 12px;
  }
  #webcrumbs .px-4 {
    padding-left: 16px;
    padding-right: 16px;
  }
  #webcrumbs .px-6 {
    padding-left: 24px;
    padding-right: 24px;
  }
  #webcrumbs .py-1 {
    padding-bottom: 4px;
    padding-top: 4px;
  }
  #webcrumbs .py-2 {
    padding-bottom: 8px;
    padding-top: 8px;
  }
  #webcrumbs .py-3 {
    padding-bottom: 12px;
    padding-top: 12px;
  }
  #webcrumbs .pt-4 {
    padding-top: 16px;
  }
  #webcrumbs .pt-6 {
    padding-top: 24px;
  }
  #webcrumbs .text-left {
    text-align: left;
  }
  #webcrumbs .text-center {
    text-align: center;
  }
  #webcrumbs .align-middle {
    vertical-align: middle;
  }
  #webcrumbs .font-sans {
    font-family:
      Open Sans,
      ui-sans-serif,
      system-ui,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol,
      Noto Color Emoji;
  }
  #webcrumbs .text-2xl {
    font-size: 24px;
    line-height: 31.200000000000003px;
  }
  #webcrumbs .text-lg {
    font-size: 18px;
    line-height: 27px;
  }
  #webcrumbs .text-sm {
    font-size: 14px;
    line-height: 21px;
  }
  #webcrumbs .text-xl {
    font-size: 20px;
    line-height: 28px;
  }
  #webcrumbs .text-xs {
    font-size: 12px;
    line-height: 19.200000000000003px;
  }
  #webcrumbs .font-bold {
    font-weight: 700;
  }
  #webcrumbs .font-medium {
    font-weight: 500;
  }
  #webcrumbs .text-amber-600 {
    --tw-text-opacity: 1;
    color: rgb(217 119 6 / var(--tw-text-opacity));
  }
  #webcrumbs .text-amber-800 {
    --tw-text-opacity: 1;
    color: rgb(146 64 14 / var(--tw-text-opacity));
  }
  #webcrumbs .text-blue-600 {
    --tw-text-opacity: 1;
    color: rgb(37 99 235 / var(--tw-text-opacity));
  }
  #webcrumbs .text-emerald-200 {
    --tw-text-opacity: 1;
    color: rgb(167 243 208 / var(--tw-text-opacity));
  }
  #webcrumbs .text-emerald-600 {
    --tw-text-opacity: 1;
    color: rgb(5 150 105 / var(--tw-text-opacity));
  }
  #webcrumbs .text-emerald-700 {
    --tw-text-opacity: 1;
    color: rgb(4 120 87 / var(--tw-text-opacity));
  }
  #webcrumbs .text-emerald-800 {
    --tw-text-opacity: 1;
    color: rgb(6 95 70 / var(--tw-text-opacity));
  }
  #webcrumbs .text-emerald-900 {
    --tw-text-opacity: 1;
    color: rgb(6 78 59 / var(--tw-text-opacity));
  }
  #webcrumbs .text-gray-600 {
    --tw-text-opacity: 1;
    color: rgb(75 85 99 / var(--tw-text-opacity));
  }
  #webcrumbs .text-red-600 {
    --tw-text-opacity: 1;
    color: rgb(220 38 38 / var(--tw-text-opacity));
  }
  #webcrumbs .text-red-800 {
    --tw-text-opacity: 1;
    color: rgb(153 27 27 / var(--tw-text-opacity));
  }
  #webcrumbs .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  #webcrumbs .shadow {
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px -1px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),
      0 1px 2px -1px var(--tw-shadow-color);
  }
  #webcrumbs .shadow,
  #webcrumbs .shadow-lg {
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  #webcrumbs .shadow-lg {
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
  }
  #webcrumbs .shadow-md {
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
      0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  #webcrumbs .outline-none {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  #webcrumbs .transition-all {
    transition-duration: 0.15s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  #webcrumbs .transition-colors {
    transition-duration: 0.15s;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  #webcrumbs .transition-shadow {
    transition-duration: 0.15s;
    transition-property: box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  #webcrumbs .transition-transform {
    transition-duration: 0.15s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  #webcrumbs .duration-200 {
    transition-duration: 0.2s;
  }
  #webcrumbs {
    font-family: Open Sans !important;
    font-size: 16px !important;
  }
  #webcrumbs .hover\:bg-amber-100:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(254 243 199 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-blue-100:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(219 234 254 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-100:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(209 250 229 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-50:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(236 253 245 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(4 120 87 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-800:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(6 95 70 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-red-100:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(254 226 226 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:text-emerald-700:hover {
    --tw-text-opacity: 1;
    color: rgb(4 120 87 / var(--tw-text-opacity));
  }
  #webcrumbs .hover\:shadow-lg:hover {
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
  }
  #webcrumbs .hover\:shadow-lg:hover,
  #webcrumbs .hover\:shadow-xl:hover {
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  #webcrumbs .hover\:shadow-xl:hover {
    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
      0 8px 10px -6px var(--tw-shadow-color);
  }
  #webcrumbs .focus\:border-emerald-500:focus {
    --tw-border-opacity: 1;
    border-color: rgb(16 185 129 / var(--tw-border-opacity));
  }
  #webcrumbs .focus\:ring-2:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
      var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);
  }
  #webcrumbs .focus\:ring-emerald-500:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(16 185 129 / var(--tw-ring-opacity));
  }
  #webcrumbs :is(.group:hover .group-hover\:scale-110) {
    --tw-scale-x: 1.1;
    --tw-scale-y: 1.1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  #webcrumbs :is(.group:hover .group-hover\:bg-emerald-500) {
    --tw-bg-opacity: 1;
    background-color: rgb(16 185 129 / var(--tw-bg-opacity));
  }
  @media (min-width: 1024px) {
    #webcrumbs .lg\:col-span-2 {
      grid-column: span 2 / span 2;
    }
    #webcrumbs .lg\:col-span-3 {
      grid-column: span 3 / span 3;
    }
    #webcrumbs .lg\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>