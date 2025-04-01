<script setup>
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();
const apiBase = config.public.API_BASE;

// Data refs
const activePatients = ref(0);
const unreadNotifications = ref(0);
const totalRevenue = ref(0);
const pendingPayments = ref(0);
const chartSrc = ref(''); // Base64 chart image

// Auth headers
const authHeaders = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
};

// Fetch system overview
const fetchSystemOverview = async () => {
  try {
    const response = await $fetch(`${apiBase}/Managment/system/overview`, authHeaders);
    activePatients.value = response.active_patients;
    unreadNotifications.value = response.unread_notifications;
  } catch (error) {
    console.error('Failed to fetch system overview:', error);
  }
};

// Fetch financial summary
const fetchFinancialSummary = async () => {
  try {
    const response = await $fetch(`${apiBase}/Managment/financial/summary`, authHeaders);
    totalRevenue.value = response.total_revenue;
    pendingPayments.value = response.pending_payments;
  } catch (error) {
    console.error('Failed to fetch financial summary:', error);
  }
};

// Fetch most-used services chart
const fetchMostUsedServicesChart = async () => {
  try {
    const response = await $fetch(`${apiBase}/Managment/system/most-used-services-chart`, authHeaders);
    chartSrc.value = response.chart;
  } catch (error) {
    console.error('Failed to fetch chart:', error);
  }
};

// Fetch data on component mount
onMounted(() => {
  fetchSystemOverview();
  fetchFinancialSummary();
  fetchMostUsedServicesChart();
});
</script>

<template
  ><div id="webcrumbs">
    <div class="w-full min-h-screen bg-gray-50 flex">
      <div
        class="w-64 bg-white shadow-xl h-screen absolute left-0 top-0 flex flex-col justify-between"
      >
        <div class="flex-1 overflow-y-auto">
          <div class="p-4 border-b">
            <h2 class="text-xl font-bold text-emerald-700">Health Manager</h2>
          </div>
          <nav class="py-4">
            <ul>
              <li class="mb-1">
                <a
                  href="#dashboard"
                  class="flex items-center px-4 py-3 text-emerald-900 bg-emerald-50 border-l-4 border-emerald-600 hover:bg-emerald-100 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">dashboard</span>
                  Dashboard
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#finance"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">payments</span>
                  Finance
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#appointments"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3"
                    >calendar_month</span
                  >
                  Appointments
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#employees"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">group</span>
                  Employees
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#feedback"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">forum</span>
                  Feedback
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#pricing"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">sell</span>
                  Pricing
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#messages"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">inbox</span>
                  Messages
                  <span
                    class="ml-auto bg-emerald-600 text-white text-xs px-2 py-1 rounded-full"
                    >3</span
                  >
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#reports"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">summarize</span>
                  Reports
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#settings"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">settings</span>
                  Settings
                </a>
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
      <div class="ml-64 p-8 w-full">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-2xl font-bold text-emerald-900">Manager Dashboard</h1>
      <div class="flex items-center space-x-4">
        <details class="relative">
          <summary class="list-none flex items-center cursor-pointer">
            <div class="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 font-bold hover:bg-emerald-300 transition-all duration-200">
              JD
            </div>
            <div class="ml-2">
              <p class="font-medium text-sm">John Doe</p>
              <p class="text-xs text-gray-500">Manager</p>
            </div>
            <span class="material-symbols-outlined text-emerald-700 ml-1">expand_more</span>
          </summary>
          <div class="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg z-10 overflow-hidden">
            <ul>
              <li class="hover:bg-emerald-50 transition-all duration-200">
                <a href="#profile" class="block px-4 py-2 text-sm text-gray-700">Profile</a>
              </li>
              <li class="hover:bg-emerald-50 transition-all duration-200">
                <a href="#account" class="block px-4 py-2 text-sm text-gray-700">Account Settings</a>
              </li>
              <li class="hover:bg-emerald-50 transition-all duration-200 border-t">
                <a href="#logout" class="block px-4 py-2 text-sm text-red-600">Logout</a>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>

    <div class="bg-gradient-to-r from-emerald-100 to-white p-6 rounded-xl mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Active Patients -->
      <div class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <h3 class="text-emerald-700 font-semibold">Active Patients</h3>
        <p class="text-2xl font-bold text-emerald-900">{{ activePatients }}</p>
      </div>

      <!-- Unread Notifications -->
      <div class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <h3 class="text-emerald-700 font-semibold">Unread Notifications</h3>
        <p class="text-2xl font-bold text-emerald-900">{{ unreadNotifications }}</p>
      </div>

      <!-- Pending Payments -->
      <div class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <h3 class="text-emerald-700 font-semibold">Pending Payments</h3>
        <p class="text-2xl font-bold text-emerald-900">${{ pendingPayments }}</p>
      </div>
    </div>

    <!-- Chart Section -->
    <div class="bg-white rounded-xl shadow-lg p-6 mb-8 hover:shadow-xl transition-all duration-300">
      <h3 class="text-emerald-700 font-semibold mb-4">Most Used Services</h3>
      <img v-if="chartSrc" :src="chartSrc" alt="Most Used Services Chart" class="w-full" />
      <p v-else class="text-gray-500">Loading chart...</p>
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
  #webcrumbs .absolute {
    position: absolute;
  }
  #webcrumbs .relative {
    position: relative;
  }
  #webcrumbs .-right-1 {
    right: -4px;
  }
  #webcrumbs .-top-1 {
    top: -4px;
  }
  #webcrumbs .left-0 {
    left: 0;
  }
  #webcrumbs .right-0 {
    right: 0;
  }
  #webcrumbs .top-0 {
    top: 0;
  }
  #webcrumbs .top-full {
    top: 100%;
  }
  #webcrumbs .z-10 {
    z-index: 10;
  }
  #webcrumbs .-m-6 {
    margin: -24px;
  }
  #webcrumbs .-mb-px {
    margin-bottom: -1px;
  }
  #webcrumbs .mb-1 {
    margin-bottom: 4px;
  }
  #webcrumbs .mb-2 {
    margin-bottom: 8px;
  }
  #webcrumbs .mb-4 {
    margin-bottom: 16px;
  }
  #webcrumbs .mb-6 {
    margin-bottom: 24px;
  }
  #webcrumbs .mb-8 {
    margin-bottom: 32px;
  }
  #webcrumbs .ml-1 {
    margin-left: 4px;
  }
  #webcrumbs .ml-2 {
    margin-left: 8px;
  }
  #webcrumbs .ml-64 {
    margin-left: 256px;
  }
  #webcrumbs .ml-auto {
    margin-left: auto;
  }
  #webcrumbs .mr-1 {
    margin-right: 4px;
  }
  #webcrumbs .mr-2 {
    margin-right: 8px;
  }
  #webcrumbs .mr-3 {
    margin-right: 12px;
  }
  #webcrumbs .mt-1 {
    margin-top: 4px;
  }
  #webcrumbs .mt-2 {
    margin-top: 8px;
  }
  #webcrumbs .mt-4 {
    margin-top: 16px;
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
  #webcrumbs .inline-flex {
    display: inline-flex;
  }
  #webcrumbs .grid {
    display: grid;
  }
  #webcrumbs .h-10 {
    height: 40px;
  }
  #webcrumbs .h-5 {
    height: 20px;
  }
  #webcrumbs .h-64 {
    height: 256px;
  }
  #webcrumbs .h-full {
    height: 100%;
  }
  #webcrumbs .h-screen {
    height: 100vh;
  }
  #webcrumbs .min-h-screen {
    min-height: 100vh;
  }
  #webcrumbs .w-10 {
    width: 40px;
  }
  #webcrumbs .w-48 {
    width: 192px;
  }
  #webcrumbs .w-5 {
    width: 20px;
  }
  #webcrumbs .w-64 {
    width: 256px;
  }
  #webcrumbs .w-full {
    width: 100%;
  }
  #webcrumbs .flex-1 {
    flex: 1 1 0%;
  }
  #webcrumbs .cursor-pointer {
    cursor: pointer;
  }
  #webcrumbs .list-none {
    list-style-type: none;
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
  #webcrumbs .flex-wrap {
    flex-wrap: wrap;
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
  #webcrumbs .gap-4 {
    gap: 16px;
  }
  #webcrumbs :is(.space-x-1 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-left: calc(4px * (1 - var(--tw-space-x-reverse)));
    margin-right: calc(4px * var(--tw-space-x-reverse));
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
  #webcrumbs .overflow-hidden {
    overflow: hidden;
  }
  #webcrumbs .overflow-x-auto {
    overflow-x: auto;
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
  #webcrumbs .rounded-xl {
    border-radius: 36px;
  }
  #webcrumbs .rounded-t-lg {
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
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
  #webcrumbs .border-b-2 {
    border-bottom-width: 2px;
  }
  #webcrumbs .border-l-4 {
    border-left-width: 4px;
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
  #webcrumbs .border-emerald-600 {
    --tw-border-opacity: 1;
    border-color: rgb(5 150 105 / var(--tw-border-opacity));
  }
  #webcrumbs .border-transparent {
    border-color: transparent;
  }
  #webcrumbs .bg-amber-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(254 243 199 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(209 250 229 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-200 {
    --tw-bg-opacity: 1;
    background-color: rgb(167 243 208 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(236 253 245 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-600 {
    --tw-bg-opacity: 1;
    background-color: rgb(5 150 105 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-gray-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
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
  #webcrumbs .p-2 {
    padding: 8px;
  }
  #webcrumbs .p-4 {
    padding: 16px;
  }
  #webcrumbs .p-6 {
    padding: 24px;
  }
  #webcrumbs .p-8 {
    padding: 32px;
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
  #webcrumbs .py-1 {
    padding-bottom: 4px;
    padding-top: 4px;
  }
  #webcrumbs .py-1\.5 {
    padding-bottom: 6px;
    padding-top: 6px;
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
  #webcrumbs .text-left {
    text-align: left;
  }
  #webcrumbs .text-center {
    text-align: center;
  }
  #webcrumbs .text-2xl {
    font-size: 24px;
    line-height: 31.200000000000003px;
  }
  #webcrumbs .text-5xl {
    font-size: 48px;
    line-height: 52.800000000000004px;
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
  #webcrumbs .text-amber-600 {
    --tw-text-opacity: 1;
    color: rgb(217 119 6 / var(--tw-text-opacity));
  }
  #webcrumbs .text-amber-800 {
    --tw-text-opacity: 1;
    color: rgb(146 64 14 / var(--tw-text-opacity));
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
  #webcrumbs .text-red-600 {
    --tw-text-opacity: 1;
    color: rgb(220 38 38 / var(--tw-text-opacity));
  }
  #webcrumbs .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  #webcrumbs .shadow-lg {
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
  }
  #webcrumbs .shadow-lg,
  #webcrumbs .shadow-sm {
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  #webcrumbs .shadow-sm {
    --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  }
  #webcrumbs .shadow-xl {
    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
      0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
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
  #webcrumbs .duration-200 {
    transition-duration: 0.2s;
  }
  #webcrumbs .duration-300 {
    transition-duration: 0.3s;
  }
  #webcrumbs {
    font-family: Open Sans !important;
    font-size: 16px !important;
  }
  #webcrumbs .hover\:scale-105:hover {
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
  }
  #webcrumbs .hover\:scale-105:hover,
  #webcrumbs .hover\:scale-\[1\.02\]:hover {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  #webcrumbs .hover\:scale-\[1\.02\]:hover {
    --tw-scale-x: 1.02;
    --tw-scale-y: 1.02;
  }
  #webcrumbs .hover\:border-emerald-300:hover {
    --tw-border-opacity: 1;
    border-color: rgb(110 231 183 / var(--tw-border-opacity));
  }
  #webcrumbs .hover\:bg-emerald-100:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(209 250 229 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-300:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(110 231 183 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-50:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(236 253 245 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(4 120 87 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:text-emerald-800:hover {
    --tw-text-opacity: 1;
    color: rgb(6 95 70 / var(--tw-text-opacity));
  }
  #webcrumbs .hover\:text-emerald-900:hover {
    --tw-text-opacity: 1;
    color: rgb(6 78 59 / var(--tw-text-opacity));
  }
  #webcrumbs .hover\:shadow-md:hover {
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
      0 2px 4px -2px var(--tw-shadow-color);
  }
  #webcrumbs .hover\:shadow-md:hover,
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
  #webcrumbs .disabled\:cursor-not-allowed:disabled {
    cursor: not-allowed;
  }
  #webcrumbs .disabled\:opacity-50:disabled {
    opacity: 0.5;
  }
  @media (min-width: 768px) {
    #webcrumbs .md\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    #webcrumbs .md\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>