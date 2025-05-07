<script setup>
import { ref, computed, onMounted } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { usePatients } from '~/composables/usePatients';
import { useDoctors } from '~/composables/useDoctors';
import { useNotifications } from '~/composables/useNotifications';

const { unreadCount } = useNotifications();
const { handleLogout, getUser } = useAuth();
const config = useRuntimeConfig();
const apiBase = config.public.API_BASE;

// Get current user's doctor ID
const currentUser = getUser();
const currentDoctorId = computed(() => currentUser ? currentUser.user_id : null);

// Patients for the current doctor
const { patientData, loading: patientLoading, error: patientError } = usePatients(currentDoctorId.value);

// Doctors list
const { doctors, fetchAllDoctors, loading: doctorLoading, error: doctorError } = useDoctors();

// Cookie utility
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

// Form fields
const selectedPatient = ref('');
const selectedDoctor = ref('');
const reason = ref('');

// Auth headers
const authHeaders = {
  headers: {
    Authorization: `Bearer ${typeof window !== 'undefined' ? getCookie('access_token') : ''}`,
  },
};

// Fetch doctors on mount
onMounted(() => {
  fetchAllDoctors();
});

const filteredDoctors = computed(() =>
  doctors.value?.filter((doctor) => doctor.id !== currentDoctorId.value)
);


// Submit referral
const submitReferral = async () => {
  if (!selectedPatient.value || !selectedDoctor.value || !reason.value.trim()) {
    alert('Please fill in all required fields.');
    return;
  }

  try {
    const payload = {
      patient_id: Number(selectedPatient.value),
      referred_to_id: Number(selectedDoctor.value),
      reason: reason.value.trim(),
    };

    const response = await $fetch(`${apiBase}/patients/refer`, {
      method: 'POST',
      body: payload,
      ...authHeaders,
    });

    alert('Referral submitted successfully!');
    selectedPatient.value = '';
    selectedDoctor.value = '';
    reason.value = '';
  } catch (error) {
    console.error('Referral submission failed:', error);
    alert('Failed to submit referral. Please try again.');
  }
};
</script>

<template
  ><div id="webcrumbs">
    <div class="w-[1440px] flex min-h-screen bg-gray-50">
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
      <main class="flex-1 p-8">
        <div class="mb-8">
          <div class="text-3xl font-bold text-gray-800">Patient Referrals</div>
          <div class="text-gray-600 mt-2">
            Refer patients to specialized doctors and healthcare facilities
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-xl font-semibold text-emerald-800 mb-4">
            Create New Referral
          </h2>
          <form class="space-y-6" @submit.prevent="submitReferral">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Patient Select -->
              <div>
                <label for="patient" class="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <span class="material-symbols-outlined text-gray-400">person</span>
                  </span>
                  <select
                    id="patient"
                    v-model="selectedPatient"
                    class="pl-10 block w-full rounded-md border-gray-300 border py-2 px-3 focus:border-emerald-500 focus:ring-emerald-500 shadow-sm"
                    :disabled="patientLoading"
                  >
                    <option value="">Select Patient</option>
                    <option v-for="patient in patientData" :key="patient.id" :value="patient.id">
                      {{ patient.patient }} (ID: {{ patient.id }})
                    </option>
                  </select>
                  <p v-if="patientLoading" class="mt-2 text-sm text-emerald-500">Loading patients...</p>
                  <p v-if="patientError" class="mt-2 text-sm text-red-500">{{ patientError }}</p>
                </div>
              </div>

              <!-- Doctor Select -->
              <div>
                <label for="referred_to" class="block text-sm font-medium text-gray-700 mb-1">Refer To Doctor</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span class="material-symbols-outlined text-gray-400">medical_services</span>
                  </span>
                  <select
                    id="referred_to"
                    v-model="selectedDoctor"
                    class="pl-10 block w-full rounded-md border-gray-300 border py-2 px-3 focus:border-emerald-500 focus:ring-emerald-500 shadow-sm"
                    :disabled="doctorLoading"
                  >
                    <option value="">Select Doctor</option>
                    <option
                      v-for="doctor in filteredDoctors"
                      :key="doctor.id"
                      :value="doctor.id"
                    >
                      Dr. {{ doctor.full_name }} - {{ doctor.department }}
                    </option>
                  </select>
                  <p v-if="doctorLoading" class="mt-2 text-sm text-emerald-500">Loading doctors...</p>
                  <p v-if="doctorError" class="mt-2 text-sm text-red-500">{{ doctorError }}</p>
                </div>
              </div>
            </div>
            <!-- Reason Textarea -->
            <div>
                <label for="reason" class="block text-sm font-medium text-gray-700 mb-1">Reason for Referral</label>
                <div class="relative">
                <textarea
                    id="reason"
                    v-model="reason"
                    rows="4"
                    placeholder="Enter detailed reason for the referral"
                    class="block w-full rounded-md border-gray-300 border py-2 px-3 focus:border-emerald-500 focus:ring-emerald-500 shadow-sm"
                ></textarea>
                </div>
            </div>

            <!-- Buttons -->
            <div class="flex justify-end space-x-3">
                <button type="button" class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Cancel
                </button>
                <button
                type="submit"
                class="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 flex items-center"
                >
                <span class="material-symbols-outlined mr-1">send</span> Submit Referral
                </button>
            </div>
            </form>
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
  #webcrumbs .pointer-events-none {
    pointer-events: none;
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
  #webcrumbs .inset-y-0 {
    bottom: 0;
    top: 0;
  }
  #webcrumbs .left-0 {
    left: 0;
  }
  #webcrumbs .top-0 {
    top: 0;
  }
  #webcrumbs .mb-1 {
    margin-bottom: 4px;
  }
  #webcrumbs .mb-4 {
    margin-bottom: 16px;
  }
  #webcrumbs .mb-8 {
    margin-bottom: 32px;
  }
  #webcrumbs .mr-1 {
    margin-right: 4px;
  }
  #webcrumbs .mr-2 {
    margin-right: 8px;
  }
  #webcrumbs .mt-2 {
    margin-top: 8px;
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
  #webcrumbs .h-screen {
    height: 100vh;
  }
  #webcrumbs .min-h-screen {
    min-height: 100vh;
  }
  #webcrumbs .w-64 {
    width: 256px;
  }
  #webcrumbs .w-\[1440px\] {
    width: 1440px;
  }
  #webcrumbs .w-full {
    width: 100%;
  }
  #webcrumbs .flex-1 {
    flex: 1 1 0%;
  }
  #webcrumbs .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
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
  #webcrumbs .justify-between {
    justify-content: space-between;
  }
  #webcrumbs .gap-4 {
    gap: 16px;
  }
  #webcrumbs .gap-6 {
    gap: 24px;
  }
  #webcrumbs :is(.space-x-3 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-left: calc(12px * (1 - var(--tw-space-x-reverse)));
    margin-right: calc(12px * var(--tw-space-x-reverse));
  }
  #webcrumbs :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-y-reverse: 0;
    margin-bottom: calc(16px * var(--tw-space-y-reverse));
    margin-top: calc(16px * (1 - var(--tw-space-y-reverse)));
  }
  #webcrumbs :is(.space-y-6 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-y-reverse: 0;
    margin-bottom: calc(24px * var(--tw-space-y-reverse));
    margin-top: calc(24px * (1 - var(--tw-space-y-reverse)));
  }
  #webcrumbs .rounded-lg {
    border-radius: 24px;
  }
  #webcrumbs .rounded-md {
    border-radius: 18px;
  }
  #webcrumbs .border {
    border-width: 1px;
  }
  #webcrumbs .border-t {
    border-top-width: 1px;
  }
  #webcrumbs .border-emerald-800 {
    --tw-border-opacity: 1;
    border-color: rgb(6 95 70 / var(--tw-border-opacity));
  }
  #webcrumbs .border-gray-300 {
    --tw-border-opacity: 1;
    border-color: rgb(209 213 219 / var(--tw-border-opacity));
  }
  #webcrumbs .border-transparent {
    border-color: transparent;
  }
  #webcrumbs .bg-emerald-600 {
    --tw-bg-opacity: 1;
    background-color: rgb(5 150 105 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-800 {
    --tw-bg-opacity: 1;
    background-color: rgb(6 95 70 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(6 78 59 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-gray-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  #webcrumbs .p-2 {
    padding: 8px;
  }
  #webcrumbs .p-6 {
    padding: 24px;
  }
  #webcrumbs .p-8 {
    padding: 32px;
  }
  #webcrumbs .px-3 {
    padding-left: 12px;
    padding-right: 12px;
  }
  #webcrumbs .px-4 {
    padding-left: 16px;
    padding-right: 16px;
  }
  #webcrumbs .py-2 {
    padding-bottom: 8px;
    padding-top: 8px;
  }
  #webcrumbs .pl-10 {
    padding-left: 40px;
  }
  #webcrumbs .pl-3 {
    padding-left: 12px;
  }
  #webcrumbs .pt-6 {
    padding-top: 24px;
  }
  #webcrumbs .text-center {
    text-align: center;
  }
  #webcrumbs .text-3xl {
    font-size: 30px;
    line-height: 36px;
  }
  #webcrumbs .text-sm {
    font-size: 14px;
    line-height: 21px;
  }
  #webcrumbs .text-xl {
    font-size: 20px;
    line-height: 28px;
  }
  #webcrumbs .font-bold {
    font-weight: 700;
  }
  #webcrumbs .font-medium {
    font-weight: 500;
  }
  #webcrumbs .font-semibold {
    font-weight: 600;
  }
  #webcrumbs .text-emerald-200 {
    --tw-text-opacity: 1;
    color: rgb(167 243 208 / var(--tw-text-opacity));
  }
  #webcrumbs .text-emerald-800 {
    --tw-text-opacity: 1;
    color: rgb(6 95 70 / var(--tw-text-opacity));
  }
  #webcrumbs .text-gray-400 {
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity));
  }
  #webcrumbs .text-gray-500 {
    --tw-text-opacity: 1;
    color: rgb(107 114 128 / var(--tw-text-opacity));
  }
  #webcrumbs .text-gray-600 {
    --tw-text-opacity: 1;
    color: rgb(75 85 99 / var(--tw-text-opacity));
  }
  #webcrumbs .text-gray-700 {
    --tw-text-opacity: 1;
    color: rgb(55 65 81 / var(--tw-text-opacity));
  }
  #webcrumbs .text-gray-800 {
    --tw-text-opacity: 1;
    color: rgb(31 41 55 / var(--tw-text-opacity));
  }
  #webcrumbs .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  #webcrumbs .shadow-md {
    --tw-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored:
      0 4px 6px -1px var(--tw-shadow-color),
      0 2px 4px -2px var(--tw-shadow-color);
  }
  #webcrumbs .shadow-md,
  #webcrumbs .shadow-sm {
    box-shadow:
      var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
      var(--tw-shadow);
  }
  #webcrumbs .shadow-sm {
    --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  }
  #webcrumbs .transition-all {
    transition-duration: 0.15s;
    transition-property: all;
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
  #webcrumbs .hover\:bg-emerald-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(4 120 87 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-800:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(6 95 70 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-gray-50:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  }
  #webcrumbs .focus\:border-emerald-500:focus {
    --tw-border-opacity: 1;
    border-color: rgb(16 185 129 / var(--tw-border-opacity));
  }
  #webcrumbs .focus\:outline-none:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  #webcrumbs .focus\:ring-2:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
      var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow:
      var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);
  }
  #webcrumbs .focus\:ring-emerald-500:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(16 185 129 / var(--tw-ring-opacity));
  }
  #webcrumbs .focus\:ring-offset-2:focus {
    --tw-ring-offset-width: 2px;
  }
  #webcrumbs :is(.group:hover .group-hover\:scale-110) {
    --tw-scale-x: 1.1;
    --tw-scale-y: 1.1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  @media (min-width: 768px) {
    #webcrumbs .md\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
