<script setup>
import { ref } from 'vue';
import { useFetch } from '#app';
import { useNotifications } from '~/composables/useNotifications';
import { usePatients } from '~/composables/usePatients';

const { patientData, loading, error } = usePatients();  // Already fetched patient data
const { unreadCount } = useNotifications();
const { handleLogout } = useAuth();

const selectedPatientId = ref(null);  // Store selected patient ID
const amount = ref('');  // Store the entered amount

const config = useRuntimeConfig();
const apiBase = config.public.API_BASE;

// Function to get a cookie value by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

// Function to approve payment
const approvePayment = async () => {
  if (!selectedPatientId.value || !amount.value || isNaN(amount.value)) {
    alert('Patient ID and valid Amount are required');
    return;
  }

  const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;

  try {
    const { data, error } = await useFetch(`${apiBase}/billings/approve/${selectedPatientId.value}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
      body: {
        amount: parseFloat(amount.value),  // Ensure amount is parsed as a float
      },
    });

    if (error.value) {
      alert(`Error: ${error.value.data?.error || 'Something went wrong'}`);
    } else if (data.value) {
      alert(`Payment approved: ${data.value.message}`);
    }
  } catch (err) {
    console.error(err);
    alert('An unexpected error occurred');
  }
};
</script>

<template>
  <div id="webcrumbs">
    <div class="h-[1080px]">
      <div class="flex h-full">
        <!-- Sidebar -->
        <aside class="w-64 bg-emerald-900 p-6 flex flex-col justify-between">
          <nav class="space-y-4">
            <div class="text-white text-xl font-bold mb-8">Cashier Dashboard</div>
            <a
              href="/staff/cashier/approve"
              class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"
            >
              <span class="material-symbols-outlined mr-2">payments</span>
              Approve Payments
            </a>
            <a
              href="/staff/cashier/orderbill"
              class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"
            >
              <span class="material-symbols-outlined mr-2">receipt_long</span>
              Order Bill
            </a>
            <a
              href="/staff/cashier/paymenthistory"
              class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"
            >
              <span class="material-symbols-outlined mr-2">history</span>
              Payment History
            </a>
            <a
              href="/staff/cashier/inbox"
              class="flex items-center text-white bg-emerald-800 p-2 rounded-lg transition-all duration-200"
            >
              <span class="material-symbols-outlined mr-2">inbox</span>
              Inbox
            </a>
            <a
              href="/staff/cashier/attendance"
              class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"
            >
              <span class="material-symbols-outlined mr-2">schedule</span>
              Attendance
            </a>
            <a
              href="/staff/cashier/notifications"
              class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"
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
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
            @click.prevent="handleLogout"
          >
            <span class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform">
              logout
            </span>
            LogOut
          </a>
          </nav>
          <div class="text-emerald-200 text-sm text-center mt-auto pt-6 border-t border-emerald-800">
            © 2025 Assosa General Hospital. All rights reserved.
          </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 p-4 md:p-8 overflow-y-auto">
  <div class="max-w-5xl mx-auto">
    <header class="bg-white rounded-2xl shadow-md p-4 mb-6 flex items-center justify-between">
      <h1 class="text-2xl md:text-3xl font-bold text-emerald-900 flex items-center">
        <span class="material-symbols-outlined text-emerald-600 mr-3">approval</span> Approve Payment
      </h1>
    </header>

    <div class="grid md:grid-cols-3 gap-6">
      <div class="md:col-span-2 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <div class="mb-6">
          <h2 class="text-xl font-semibold text-emerald-800 mb-4 flex items-center">
            <span class="material-symbols-outlined mr-2 text-emerald-600">payments</span>
            Payment Approval
          </h2>
          <p class="text-gray-600 mb-4">
            Select the patient and enter the total amount to approve the payment.
          </p>
          <div class="bg-emerald-50 p-4 rounded-lg mb-6 border-l-4 border-emerald-600">
            <p class="text-sm text-emerald-800">
              <span class="material-symbols-outlined align-middle mr-1">info</span>
              Approved payments cannot be reverted. Please verify all details before approval.
            </p>
          </div>
        </div>

        <!-- Patient Selector -->
        <div class="relative mb-6">
          <label class="block text-emerald-800 font-medium mb-2" for="patient_id">
            Select Patient <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            </span>
            <select v-model="selectedPatientId" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200">
  <option value="" disabled>Select Patient</option>
  <option v-for="patient in patientData" :key="patient.id" :value="patient.id">
    {{ patient.patient }} - {{ patient.username }}
  </option>
</select>

          </div>
        </div>

        <!-- Amount Input -->
        <div class="relative mb-6">
          <label class="block text-emerald-800 font-medium mb-2" for="amount">
            Amount <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <span class="material-symbols-outlined">attach_money</span>
            </span>
            <input
              v-model="amount"
              type="number"
              id="amount"
              class="w-full p-3 pl-10 border border-emerald-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
              placeholder="Enter Amount (e.g., 100.00)"
            />
          </div>
        </div>

        <button
          @click="approvePayment"
          class="w-full bg-emerald-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-[1.01] shadow-md hover:shadow-lg flex items-center justify-center group"
        >
          <span class="material-symbols-outlined mr-2 group-hover:rotate-12 transition-transform">check_circle</span>
          Approve Payment
        </button>
      </div>
    </div>

    <footer class="mt-8 text-center text-sm text-gray-500 p-4">
      <p>Assosa General Hospital Management System © 2025</p>
      <p class="mt-1">Contact IT support at extension 2104 for assistance</p>
    </footer>
  </div>
</main>
      </div>
    </div>
  </div>
</template>

  
  <style scoped>
    @import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);
    
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
        Inter,
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
    #webcrumbs .left-3 {
      left: 9px;
    }
    #webcrumbs .top-2\.5 {
      top: 7.5px;
    }
    #webcrumbs .mx-auto {
      margin-left: auto;
      margin-right: auto;
    }
    #webcrumbs .mb-8 {
      margin-bottom: 24px;
    }
    #webcrumbs .ml-2 {
      margin-left: 6px;
    }
    #webcrumbs .mr-1 {
      margin-right: 3px;
    }
    #webcrumbs .mr-2 {
      margin-right: 6px;
    }
    #webcrumbs .mt-1 {
      margin-top: 3px;
    }
    #webcrumbs .mt-2 {
      margin-top: 6px;
    }
    #webcrumbs .mt-auto {
      margin-top: auto;
    }
    #webcrumbs .flex {
      display: flex;
    }
    #webcrumbs .h-\[1080px\] {
      height: 1080px;
    }
    #webcrumbs .h-full {
      height: 100%;
    }
    #webcrumbs .w-64 {
      width: 192px;
    }
    #webcrumbs .max-w-4xl {
      max-width: 56rem;
    }
    #webcrumbs .flex-1 {
      flex: 1 1 0%;
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
    #webcrumbs .justify-between {
      justify-content: space-between;
    }
    #webcrumbs .gap-4 {
      gap: 12px;
    }
    #webcrumbs :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-y-reverse: 0;
      margin-bottom: calc(12px * var(--tw-space-y-reverse));
      margin-top: calc(12px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs .overflow-y-auto {
      overflow-y: auto;
    }
    #webcrumbs .rounded-full {
      border-radius: 9999px;
    }
    #webcrumbs .rounded-lg {
      border-radius: 8px;
    }
    #webcrumbs .rounded-xl {
      border-radius: 12px;
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
    #webcrumbs .bg-blue-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(219 234 254 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-emerald-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(236 253 245 / var(--tw-bg-opacity));
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
    #webcrumbs .bg-gray-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(243 244 246 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-gray-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(156 163 175 / var(--tw-bg-opacity));
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
    #webcrumbs .p-2 {
      padding: 6px;
    }
    #webcrumbs .p-3 {
      padding: 9px;
    }
    #webcrumbs .p-6 {
      padding: 18px;
    }
    #webcrumbs .p-8 {
      padding: 24px;
    }
    #webcrumbs .px-2 {
      padding-left: 6px;
      padding-right: 6px;
    }
    #webcrumbs .px-3 {
      padding-left: 9px;
      padding-right: 9px;
    }
    #webcrumbs .py-1 {
      padding-bottom: 3px;
      padding-top: 3px;
    }
    #webcrumbs .py-2 {
      padding-bottom: 6px;
      padding-top: 6px;
    }
    #webcrumbs .pl-10 {
      padding-left: 30px;
    }
    #webcrumbs .pr-4 {
      padding-right: 12px;
    }
    #webcrumbs .pt-6 {
      padding-top: 18px;
    }
    #webcrumbs .text-center {
      text-align: center;
    }
    #webcrumbs .text-2xl {
      font-size: 21px;
      line-height: 27.3px;
    }
    #webcrumbs .text-lg {
      font-size: 15.75px;
      line-height: 23.625px;
    }
    #webcrumbs .text-sm {
      font-size: 12.25px;
      line-height: 18.375px;
    }
    #webcrumbs .text-xl {
      font-size: 17.5px;
      line-height: 24.5px;
    }
    #webcrumbs .text-xs {
      font-size: 10.5px;
      line-height: 16.8px;
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
    #webcrumbs .text-blue-600 {
      --tw-text-opacity: 1;
      color: rgb(37 99 235 / var(--tw-text-opacity));
    }
    #webcrumbs .text-emerald-200 {
      --tw-text-opacity: 1;
      color: rgb(167 243 208 / var(--tw-text-opacity));
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
    #webcrumbs .text-white {
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    #webcrumbs .shadow-lg {
      --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -4px rgba(0, 0, 0, 0.1);
      --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
        0 4px 6px -4px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
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
      font-family: Inter !important;
      font-size: 14px !important;
    }
    #webcrumbs .hover\:bg-emerald-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(6 95 70 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:shadow-md:hover {
      --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -2px rgba(0, 0, 0, 0.1);
      --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
        0 2px 4px -2px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
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
    #webcrumbs .fixed {
        position: fixed;
    }
    #webcrumbs .absolute {
        position: absolute;
    }
    #webcrumbs .relative {
        position: relative;
    }
    #webcrumbs .bottom-4 {
        bottom: 16px;
    }
    #webcrumbs .left-3 {
        left: 12px;
    }
    #webcrumbs .right-4 {
        right: 16px;
    }
    #webcrumbs .top-1\/2 {
        top: 50%;
    }
    #webcrumbs .z-50 {
        z-index: 50;
    }
    #webcrumbs .mx-auto {
        margin-left: auto;
        margin-right: auto;
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
    #webcrumbs .mt-4 {
        margin-top: 16px;
    }
    #webcrumbs .mt-6 {
        margin-top: 24px;
    }
    #webcrumbs .mt-8 {
        margin-top: 32px;
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
    #webcrumbs .hidden {
        display: none;
    }
    #webcrumbs .h-10 {
        height: 40px;
    }
    #webcrumbs .h-full {
        height: 100%;
    }
    #webcrumbs .min-h-screen {
        min-height: 100vh;
    }
    #webcrumbs .w-10 {
        width: 40px;
    }
    #webcrumbs .w-64 {
        width: 256px;
    }
    #webcrumbs .w-full {
        width: 100%;
    }
    #webcrumbs .max-w-5xl {
        max-width: 64rem;
    }
    #webcrumbs .flex-1 {
        flex: 1 1 0%;
    }
    #webcrumbs .-translate-y-1\/2 {
        --tw-translate-y: -50%;
    }
    #webcrumbs .-translate-y-1\/2,
    #webcrumbs .transform {
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    @keyframes pulse {
        50% {
            opacity: 0.5;
        }
    }
    #webcrumbs .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
    #webcrumbs .overflow-y-auto {
        overflow-y: auto;
    }
    #webcrumbs .rounded-2xl {
        border-radius: 48px;
    }
    #webcrumbs .rounded-full {
        border-radius: 9999px;
    }
    #webcrumbs .rounded-lg {
        border-radius: 24px;
    }
    #webcrumbs .border {
        border-width: 1px;
    }
    #webcrumbs .border-l-4 {
        border-left-width: 4px;
    }
    #webcrumbs .border-t {
        border-top-width: 1px;
    }
    #webcrumbs .border-emerald-200 {
        --tw-border-opacity: 1;
        border-color: rgb(167 243 208 / var(--tw-border-opacity));
    }
    #webcrumbs .border-emerald-500 {
        --tw-border-opacity: 1;
        border-color: rgb(16 185 129 / var(--tw-border-opacity));
    }
    #webcrumbs .border-emerald-600 {
        --tw-border-opacity: 1;
        border-color: rgb(5 150 105 / var(--tw-border-opacity));
    }
    #webcrumbs .border-emerald-700\/50 {
        border-color: rgba(4, 120, 87, 0.5);
    }
    #webcrumbs .border-yellow-500 {
        --tw-border-opacity: 1;
        border-color: rgb(234 179 8 / var(--tw-border-opacity));
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
    #webcrumbs .bg-emerald-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(16 185 129 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-emerald-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(5 150 105 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-emerald-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(4 120 87 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-white {
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-gradient-to-b {
        background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
    }
    #webcrumbs .bg-gradient-to-br {
        background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    }
    #webcrumbs .from-emerald-50 {
        --tw-gradient-from: #ecfdf5 var(--tw-gradient-from-position);
        --tw-gradient-to: rgba(236, 253, 245, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .from-emerald-700 {
        --tw-gradient-from: #047857 var(--tw-gradient-from-position);
        --tw-gradient-to: rgba(4, 120, 87, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .from-emerald-800 {
        --tw-gradient-from: #065f46 var(--tw-gradient-from-position);
        --tw-gradient-to: rgba(6, 95, 70, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .to-emerald-900 {
        --tw-gradient-to: #064e3b var(--tw-gradient-to-position);
    }
    #webcrumbs .to-teal-50 {
        --tw-gradient-to: #f0fdfa var(--tw-gradient-to-position);
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
    #webcrumbs .px-6 {
        padding-left: 24px;
        padding-right: 24px;
    }
    #webcrumbs .py-1 {
        padding-bottom: 4px;
        padding-top: 4px;
    }
    #webcrumbs .py-4 {
        padding-bottom: 16px;
        padding-top: 16px;
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
    #webcrumbs .text-emerald-200 {
        --tw-text-opacity: 1;
        color: rgb(167 243 208 / var(--tw-text-opacity));
    }
    #webcrumbs .text-emerald-300 {
        --tw-text-opacity: 1;
        color: rgb(110 231 183 / var(--tw-text-opacity));
    }
    #webcrumbs .text-emerald-300\/70 {
        color: rgba(110, 231, 183, 0.7);
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
    #webcrumbs .text-red-500 {
        --tw-text-opacity: 1;
        color: rgb(239 68 68 / var(--tw-text-opacity));
    }
    #webcrumbs .text-white {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    #webcrumbs .shadow-lg {
        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    }
    #webcrumbs .shadow-lg,
    #webcrumbs .shadow-md {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .shadow-md {
        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    }
    #webcrumbs .shadow-xl {
        --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .transition-all {
        transition-duration: 0.15s;
        transition-property: all;
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
    #webcrumbs .duration-300 {
        transition-duration: 0.3s;
    }
    #webcrumbs {
        font-family: Open Sans !important;
        font-size: 16px !important;
    }
    #webcrumbs .hover\:scale-\[1\.01\]:hover {
        --tw-scale-x: 1.01;
        --tw-scale-y: 1.01;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs .hover\:bg-emerald-700:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(4 120 87 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:bg-emerald-800:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(6 95 70 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:bg-red-600:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(220 38 38 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:text-emerald-800:hover {
        --tw-text-opacity: 1;
        color: rgb(6 95 70 / var(--tw-text-opacity));
    }
    #webcrumbs .hover\:underline:hover {
        text-decoration-line: underline;
    }
    #webcrumbs .hover\:shadow-lg:hover {
        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
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
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    }
    #webcrumbs .focus\:ring-emerald-500:focus {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(16 185 129 / var(--tw-ring-opacity));
    }
    #webcrumbs :is(.group:hover .group-hover\:translate-x-1) {
        --tw-translate-x: 4px;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs :is(.group:hover .group-hover\:rotate-12) {
        --tw-rotate: 12deg;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs :is(.group:hover .group-hover\:scale-110) {
        --tw-scale-x: 1.1;
        --tw-scale-y: 1.1;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs :is(.group:hover .group-hover\:text-white) {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    @media (min-width: 768px) {
        #webcrumbs .md\:col-span-1 {
            grid-column: span 1 / span 1;
        }
        #webcrumbs .md\:col-span-2 {
            grid-column: span 2 / span 2;
        }
        #webcrumbs .md\:block {
            display: block;
        }
        #webcrumbs .md\:flex {
            display: flex;
        }
        #webcrumbs .md\:hidden {
            display: none;
        }
        #webcrumbs .md\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        #webcrumbs .md\:p-8 {
            padding: 32px;
        }
        #webcrumbs .md\:text-3xl {
            font-size: 30px;
            line-height: 36px;
        }
    }
    
  </style>