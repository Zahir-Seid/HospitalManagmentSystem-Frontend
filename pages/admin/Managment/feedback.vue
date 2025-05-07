<script setup>
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#imports';
const route = useRoute();

const navItems = [
  { path: '/admin/Managment/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { path: '/admin/Managment/attendance', label: 'Attendance', icon: 'calendar_month' },
  { path: '/admin/Managment/employee', label: 'Employees', icon: 'group' },
  { path: '/admin/Managment/feedback', label: 'Feedback', icon: 'forum' },
  { path: '/admin/Managment/pricing', label: 'Pricing', icon: 'sell' },
  { path: '/admin/Managment/chat', label: 'Messages', icon: 'inbox' },
];
// Function to get a cookie value by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

const getAuthHeaders = () => {
  const token = typeof window !== 'undefined' ? getCookie('access_token') : null;
  return token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {};
};

const config = useRuntimeConfig();
const apiBase = config.public.API_BASE; // API Base URL

// Data refs
const comments = ref([]);
const totalComments = ref(0);
const loading = ref(true);

// Function to format the date (this could be customized as per your needs)
const formatDate = (date) => {
  const d = new Date(date);
  return `${d.toLocaleDateString()} - ${d.toLocaleTimeString()}`;
};

// Fetch patient comments from API
const fetchPatientComments = async () => {
  // Get token from cookies (client-side only)
  const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;  // Retrieve access token from cookies
  const authHeaders = accessToken
    ? {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Get the token from cookies
        },
      }
    : {};

  try {
    loading.value = true;
    const response = await $fetch(`${apiBase}/Managment/patient-comments`, authHeaders);
    comments.value = response; // Assuming response is an array of comments
    totalComments.value = response.length; // Assuming you have the total number of comments
  } catch (error) {
    console.error('Error fetching patient comments:', error);
  } finally {
    loading.value = false;
  }
};

const handleLogout = async () => {
  try {
    const refreshToken = getCookie('refresh_token'); // Read refresh_token from cookies
    if (!refreshToken) {
      console.warn('No refresh token found in cookies.');
      window.location.href = '/admin/login'; // Fallback to login
      return;
    }

    await $fetch(`${apiBase}/user/logout/`, {
      method: 'POST',
      body: { refresh_token: refreshToken },
      ...getAuthHeaders(),
    });

    // Clear cookies (optional: depends if backend does it too)
    document.cookie = 'access_token=; Max-Age=0; path=/';
    document.cookie = 'refresh_token=; Max-Age=0; path=/';

    // Redirect to login page
    window.location.href = '/admin/login';
  } catch (error) {
    console.error('Logout failed:', error);
    alert('Logout failed. Please try again.');
  }
};

// Fetch comments when component is mounted
onMounted(() => {
  fetchPatientComments();
});
</script>

<template
  ><div id="webcrumbs">
    <div class="w-full min-h-screen bg-gray-50 flex">
      <div class="flex">
        <div
          class="w-64 bg-white shadow-xl h-screen flex flex-col justify-between"
        >
          <div class="flex-1 overflow-y-auto">
            <div class="p-4 border-b">
              <h2 class="text-xl font-bold text-emerald-700">Health Manager</h2>
            </div>
            <nav class="py-4">
            <ul>
              <li class="mb-1" v-for="item in navItems" :key="item.path">
                <a
                  :href="item.path"
                  :class="[
                    'flex items-center px-4 py-3 transition-all duration-200',
                    route.path === item.path
                      ? 'text-emerald-900 bg-emerald-50 border-l-4 border-emerald-600'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900'
                  ]"
                >
                  <span class="material-symbols-outlined mr-3">{{ item.icon }}</span>
                  {{ item.label }}
                </a>
              </li>

              <li class="mt-6">
                <button 
                  @click="handleLogout"
                  class="flex items-center w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">logout</span>
                  Logout
                </button>
              </li>
            </ul>
          </nav>
          </div>
          <div class="p-4 border-t mt-auto">
            <p class="text-center text-xs text-gray-500">
              © 2025 Assosa General Hospital. All rights reserved.
            </p>
          </div>
        </div>
        <div class="flex-1 p-6">
          <div class="mb-8">
            <div class="text-2xl font-bold text-emerald-800 mb-6">Feedback</div>
            <div class="bg-white border rounded-lg shadow-sm overflow-hidden">
              <h2 class="text-lg font-semibold text-emerald-800 p-4 border-b">
                Patient Comments
              </h2>
        <div class="divide-y">
          <div
            v-for="(comment, index) in comments"
            :key="comment.id"
            class="p-4 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
          >
            <div class="flex justify-between items-start mb-2">
              <div class="flex items-center">
                <div
                  class="h-10 w-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 flex-shrink-0"
                >
                  <span class="material-symbols-outlined">person</span>
                </div>
                <h3 class="font-medium">Patient ID: {{ comment.patient_id }}</h3>
              </div>
              <span class="text-xs text-gray-500">
                {{ formatDate(comment.created_at) }}
              </span>
            </div>
            <p class="text-gray-700 pl-12">
              {{ comment.message }}
            </p>
          </div>
        </div>
        <div class="p-4 border-t flex justify-between items-center">
          <div class="text-sm text-gray-500">
            Showing {{ comments.length }} of {{ totalComments }} comments
          </div>
          <div class="flex gap-2">
            <button
              class="px-3 py-1 border rounded hover:bg-gray-50 transition-all duration-200"
            >
              Previous
            </button>
            <button
              class="px-3 py-1 bg-emerald-100 text-emerald-700 border border-emerald-300 rounded hover:bg-emerald-200 transition-all duration-200"
            >
              1
            </button>
            <button
              class="px-3 py-1 border rounded hover:bg-gray-50 transition-all duration-200"
            >
              2
            </button>
            <button
              class="px-3 py-1 border rounded hover:bg-gray-50 transition-all duration-200"
            >
              3
            </button>
            <button
              class="px-3 py-1 border rounded hover:bg-gray-50 transition-all duration-200"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
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
  #webcrumbs .mb-1 {
    margin-bottom: 4px;
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
  #webcrumbs .mr-2 {
    margin-right: 8px;
  }
  #webcrumbs .mr-3 {
    margin-right: 12px;
  }
  #webcrumbs .mt-auto {
    margin-top: auto;
  }
  #webcrumbs .flex {
    display: flex;
  }
  #webcrumbs .h-10 {
    height: 40px;
  }
  #webcrumbs .h-screen {
    height: 100vh;
  }
  #webcrumbs .w-10 {
    width: 40px;
  }
  #webcrumbs .w-64 {
    width: 256px;
  }
  #webcrumbs .w-\[1024px\] {
    width: 1024px;
  }
  #webcrumbs .flex-1 {
    flex: 1 1 0%;
  }
  #webcrumbs .flex-shrink-0 {
    flex-shrink: 0;
  }
  #webcrumbs .cursor-pointer {
    cursor: pointer;
  }
  #webcrumbs .flex-row {
    flex-direction: row;
  }
  #webcrumbs .flex-col {
    flex-direction: column;
  }
  #webcrumbs .items-start {
    align-items: flex-start;
  }
  #webcrumbs .items-center {
    align-items: center;
  }
  #webcrumbs .justify-center {
    justify-content: center;
  }
  #webcrumbs .justify-between {
    justify-content: space-between;
  }
  #webcrumbs .gap-2 {
    gap: 8px;
  }
  #webcrumbs .gap-4 {
    gap: 16px;
  }
  #webcrumbs :is(.divide-y > :not([hidden]) ~ :not([hidden])) {
    --tw-divide-y-reverse: 0;
    border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
    border-top-width: calc(1px * (1 - var(--tw-divide-y-reverse)));
  }
  #webcrumbs .overflow-hidden {
    overflow: hidden;
  }
  #webcrumbs .overflow-y-auto {
    overflow-y: auto;
  }
  #webcrumbs .rounded {
    border-radius: 12px;
  }
  #webcrumbs .rounded-full {
    border-radius: 9999px;
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
  #webcrumbs .border-b {
    border-bottom-width: 1px;
  }
  #webcrumbs .border-l-4 {
    border-left-width: 4px;
  }
  #webcrumbs .border-t {
    border-top-width: 1px;
  }
  #webcrumbs .border-emerald-300 {
    --tw-border-opacity: 1;
    border-color: rgb(110 231 183 / var(--tw-border-opacity));
  }
  #webcrumbs .border-emerald-600 {
    --tw-border-opacity: 1;
    border-color: rgb(5 150 105 / var(--tw-border-opacity));
  }
  #webcrumbs .border-gray-300 {
    --tw-border-opacity: 1;
    border-color: rgb(209 213 219 / var(--tw-border-opacity));
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
  #webcrumbs .bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  #webcrumbs .p-4 {
    padding: 16px;
  }
  #webcrumbs .p-6 {
    padding: 24px;
  }
  #webcrumbs .px-3 {
    padding-left: 12px;
    padding-right: 12px;
  }
  #webcrumbs .px-4 {
    padding-left: 16px;
    padding-right: 16px;
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
  #webcrumbs .py-4 {
    padding-bottom: 16px;
    padding-top: 16px;
  }
  #webcrumbs .pl-12 {
    padding-left: 48px;
  }
  #webcrumbs .text-center {
    text-align: center;
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
  #webcrumbs .font-semibold {
    font-weight: 600;
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
  #webcrumbs .text-gray-500 {
    --tw-text-opacity: 1;
    color: rgb(107 114 128 / var(--tw-text-opacity));
  }
  #webcrumbs .text-gray-700 {
    --tw-text-opacity: 1;
    color: rgb(55 65 81 / var(--tw-text-opacity));
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
  #webcrumbs .shadow-sm {
    --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  }
  #webcrumbs .shadow-sm,
  #webcrumbs .shadow-xl {
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  #webcrumbs .shadow-xl {
    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
      0 8px 10px -6px var(--tw-shadow-color);
  }
  #webcrumbs .transition-all {
    transition-duration: 0.15s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  #webcrumbs .duration-200 {
    transition-duration: 0.2s;
  }
  #webcrumbs {
    font-family: Open Sans !important;
    font-size: 16px !important;
  }
  #webcrumbs .hover\:bg-emerald-100:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(209 250 229 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-200:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(167 243 208 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-50:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(236 253 245 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(4 120 87 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-gray-50:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:text-emerald-900:hover {
    --tw-text-opacity: 1;
    color: rgb(6 78 59 / var(--tw-text-opacity));
  }
</style>
