<script setup>
import { ref, computed, onMounted } from 'vue'
import { useNotifications } from '~/composables/useNotifications'

const { unreadCount } = useNotifications()
const { handleLogout } = useAuth()

// Function to get a cookie value by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}

const invoices = ref([])
const searchQuery = ref('')
const errorMessage = ref('')
const config = useRuntimeConfig()
const apiBase = config.public.API_BASE

// Fetch invoices from backend
const fetchInvoices = async () => {
  try {
    const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;
    
    const response = await fetch(`${apiBase}/billings/logs`, {
      method: 'GET',
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error('Failed to fetch invoices');
    }
    
    if (data && data.length > 0) {
      invoices.value = data;
    } else {
      invoices.value = [];
      errorMessage.value = 'No invoices found.';
    }
  } catch (error) {
    console.error('Error fetching invoices:', error);
    errorMessage.value = 'An error occurred while fetching invoices.';
    invoices.value = [];
  }
};

// Filter invoices based on search query
const filteredInvoices = computed(() => {
  return invoices.value.filter((invoice) =>
    invoice.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// Group invoices by patient username
const groupedInvoices = computed(() => {
  const grouped = {}
  invoices.value.forEach(invoice => {
    if (!grouped[invoice.patient_username]) {
      grouped[invoice.patient_username] = []
    }
    grouped[invoice.patient_username].push(invoice)
  })
  return grouped
})

// Calculate unpaid total for each patient
const getUnpaidAmount = (patientUsername) => {
  return invoices.value
    .filter(invoice =>
      invoice.patient_username === patientUsername &&
      invoice.status?.toLowerCase() !== 'approved'
    )
    .reduce((total, invoice) => total + parseFloat(invoice.amount || 0), 0)
}



const showMore = ref({}) // To toggle visibility of invoices per patient

// Toggle Show More
const toggleShowMore = (patientUsername) => {
  showMore.value[patientUsername] = !showMore.value[patientUsername]
}

onMounted(fetchInvoices)
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
        <main class="flex-1 bg-emerald-50 p-8 overflow-y-auto">
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-emerald-900">Payment History</h1>
        <p class="text-gray-600 mt-2">View and manage patient invoices and payments</p>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
        <!-- Header with Search -->
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
          <div class="flex items-center space-x-3">
            <span class="material-symbols-outlined text-emerald-600">receipt_long</span>
            <h2 class="text-2xl font-semibold">Invoice Records</h2>
          </div>
          <div class="relative">
            <span class="material-symbols-outlined absolute left-3 top-3 text-gray-400">search</span>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search description..."
              class="pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 w-full md:w-64 shadow-sm hover:shadow"
            />
          </div>
        </div>

        <!-- Invoice Groups -->
        <div class="space-y-8" v-if="Object.keys(groupedInvoices).length > 0">
          <div
            v-for="(invoices, patientUsername) in groupedInvoices"
            :key="patientUsername"
            class="border border-gray-100 rounded-xl p-6 hover:border-emerald-200 transition-all duration-300 shadow-sm hover:shadow"
          >
            <!-- Patient Header -->
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div class="flex items-center space-x-3 mb-3 md:mb-0">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span class="material-symbols-outlined text-emerald-600">person</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold">{{ patientUsername }}</h3>
                  <p class="text-gray-500 text-sm">Patient ID: {{ invoices[0].patient_id }}</p>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div class="text-emerald-600 font-bold text-xl">${{ getUnpaidAmount(patientUsername).toFixed(2) }}</div>
                <div class="text-gray-500 text-sm">Total Unpaid</div>
              </div>
            </div>

            <!-- Expandable Invoices -->
            <details class="group cursor-pointer" :open="showMore[patientUsername]">
              <summary
                @click.prevent="toggleShowMore(patientUsername)"
                class="flex items-center text-emerald-600 font-semibold mb-4 hover:text-emerald-700 transition-colors"
              >
                <span
                  class="material-symbols-outlined mr-2 transform transition-transform"
                  :class="{ 'rotate-180': showMore[patientUsername] }"
                >expand_more</span>
                Show Invoices
              </summary>

              <div class="space-y-4 mt-4 pl-2 border-l-2 border-emerald-100">
                <div
                  v-for="invoice in invoices.filter(i => i.description.toLowerCase().includes(searchQuery.toLowerCase()))"
                  :key="invoice.invoice_id"
                  class="bg-emerald-50 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:translate-x-1"
                >
                  <div class="flex justify-between items-center mb-2">
                    <div>
                      <h3 class="text-sm font-medium">{{ invoice.description }}</h3>
                      <p class="text-xs text-gray-500">Invoice ID: #{{ invoice.invoice_id }}</p>
                    </div>
                    <div class="text-emerald-600 font-semibold">${{ parseFloat(invoice.amount).toFixed(2) }}</div>
                  </div>
                  <div class="flex justify-between items-center text-sm">
                    <div class="flex items-center">
                      <span class="material-symbols-outlined mr-1 text-gray-400 text-sm">calendar_today</span>
                      <span class="text-gray-500">{{ new Date(invoice.date).toLocaleDateString() }}</span>
                    </div>
                    <span
                      class="px-3 py-1 rounded-full text-xs font-medium"
                      :class="{
                        'bg-red-100 text-red-600': invoice.status === 'Pending',
                        'bg-emerald-100 text-emerald-600': invoice.status === 'Approved',
                        'bg-gray-100 text-gray-600': invoice.status === 'Paid'
                      }"
                    >
                      {{ invoice.status }}
                    </span>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>

        <!-- Empty/Error Message -->
        <div v-else class="text-center text-gray-500 mt-12">
          {{ errorMessage || 'No invoice data available.' }}
        </div>
      </div>
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
    #webcrumbs .mb-2 {
      margin-bottom: 6px;
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
    #webcrumbs .bg-emerald-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(209 250 229 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-emerald-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(236 253 245 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-emerald-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(6 95 70 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-emerald-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(6 78 59 / var(--tw-bg-opacity));
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
    #webcrumbs .p-4 {
      padding: 12px;
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
    #webcrumbs .text-emerald-200 {
      --tw-text-opacity: 1;
      color: rgb(167 243 208 / var(--tw-text-opacity));
    }
    #webcrumbs .text-emerald-600 {
      --tw-text-opacity: 1;
      color: rgb(5 150 105 / var(--tw-text-opacity));
    }
    #webcrumbs .text-gray-400 {
      --tw-text-opacity: 1;
      color: rgb(156 163 175 / var(--tw-text-opacity));
    }
    #webcrumbs .text-gray-500 {
      --tw-text-opacity: 1;
      color: rgb(107 114 128 / var(--tw-text-opacity));
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
    #webcrumbs .left-3 {
        left: 12px;
    }
    #webcrumbs .top-3 {
        top: 12px;
    }
    #webcrumbs .mx-auto {
        margin-left: auto;
        margin-right: auto;
    }
    #webcrumbs .mb-12 {
        margin-bottom: 48px;
    }
    #webcrumbs .mb-2 {
        margin-bottom: 8px;
    }
    #webcrumbs .mb-3 {
        margin-bottom: 12px;
    }
    #webcrumbs .mb-4 {
        margin-bottom: 16px;
    }
    #webcrumbs .mb-8 {
        margin-bottom: 32px;
    }
    #webcrumbs .ml-2 {
        margin-left: 8px;
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
    #webcrumbs .flex {
        display: flex;
    }
    #webcrumbs .h-12 {
        height: 48px;
    }
    #webcrumbs .h-\[1080px\] {
        height: 1080px;
    }
    #webcrumbs .h-full {
        height: 100%;
    }
    #webcrumbs .w-12 {
        width: 48px;
    }
    #webcrumbs .w-80 {
        width: 320px;
    }
    #webcrumbs .w-\[1280px\] {
        width: 1280px;
    }
    #webcrumbs .w-full {
        width: 100%;
    }
    #webcrumbs .max-w-4xl {
        max-width: 56rem;
    }
    #webcrumbs .flex-1 {
        flex: 1 1 0%;
    }
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
    #webcrumbs .cursor-pointer {
        cursor: pointer;
    }
    #webcrumbs .flex-row {
        flex-direction: row;
    }
    #webcrumbs .flex-col {
        flex-direction: column;
    }
    #webcrumbs .items-end {
        align-items: flex-end;
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
    #webcrumbs :is(.space-x-3 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-x-reverse: 0;
        margin-left: calc(12px * (1 - var(--tw-space-x-reverse)));
        margin-right: calc(12px * var(--tw-space-x-reverse));
    }
    #webcrumbs :is(.space-y-3 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(12px * var(--tw-space-y-reverse));
        margin-top: calc(12px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(16px * var(--tw-space-y-reverse));
        margin-top: calc(16px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs :is(.space-y-8 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(32px * var(--tw-space-y-reverse));
        margin-top: calc(32px * (1 - var(--tw-space-y-reverse)));
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
    #webcrumbs .border {
        border-width: 1px;
    }
    #webcrumbs .border-l-2 {
        border-left-width: 2px;
    }
    #webcrumbs .border-t {
        border-top-width: 1px;
    }
    #webcrumbs .border-emerald-100 {
        --tw-border-opacity: 1;
        border-color: rgb(209 250 229 / var(--tw-border-opacity));
    }
    #webcrumbs .border-emerald-800 {
        --tw-border-opacity: 1;
        border-color: rgb(6 95 70 / var(--tw-border-opacity));
    }
    #webcrumbs .border-gray-100 {
        --tw-border-opacity: 1;
        border-color: rgb(243 244 246 / var(--tw-border-opacity));
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
    #webcrumbs .bg-red-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 226 226 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-white {
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
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
    #webcrumbs .py-1 {
        padding-bottom: 4px;
        padding-top: 4px;
    }
    #webcrumbs .py-3 {
        padding-bottom: 12px;
        padding-top: 12px;
    }
    #webcrumbs .pl-12 {
        padding-left: 48px;
    }
    #webcrumbs .pl-2 {
        padding-left: 8px;
    }
    #webcrumbs .pr-4 {
        padding-right: 16px;
    }
    #webcrumbs .pt-6 {
        padding-top: 24px;
    }
    #webcrumbs .text-center {
        text-align: center;
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
    #webcrumbs .text-3xl {
        font-size: 30px;
        line-height: 36px;
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
    #webcrumbs .text-emerald-200 {
        --tw-text-opacity: 1;
        color: rgb(167 243 208 / var(--tw-text-opacity));
    }
    #webcrumbs .text-emerald-300 {
        --tw-text-opacity: 1;
        color: rgb(110 231 183 / var(--tw-text-opacity));
    }
    #webcrumbs .text-emerald-600 {
        --tw-text-opacity: 1;
        color: rgb(5 150 105 / var(--tw-text-opacity));
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
    #webcrumbs .text-red-600 {
        --tw-text-opacity: 1;
        color: rgb(220 38 38 / var(--tw-text-opacity));
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
    #webcrumbs .shadow-sm {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
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
    #webcrumbs .transition-colors {
        transition-duration: 0.15s;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
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
    #webcrumbs .duration-300 {
        transition-duration: 0.3s;
    }
    #webcrumbs {
        font-family: Open Sans !important;
        font-size: 16px !important;
    }
    #webcrumbs .hover\:translate-x-1:hover {
        --tw-translate-x: 4px;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs .hover\:border-emerald-200:hover {
        --tw-border-opacity: 1;
        border-color: rgb(167 243 208 / var(--tw-border-opacity));
    }
    #webcrumbs .hover\:bg-emerald-800:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(6 95 70 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:text-emerald-700:hover {
        --tw-text-opacity: 1;
        color: rgb(4 120 87 / var(--tw-text-opacity));
    }
    #webcrumbs .hover\:shadow:hover {
        --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    }
    #webcrumbs .hover\:shadow-md:hover,
    #webcrumbs .hover\:shadow:hover {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .hover\:shadow-md:hover {
        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    }
    #webcrumbs .focus\:border-emerald-500:focus {
        --tw-border-opacity: 1;
        border-color: rgb(16 185 129 / var(--tw-border-opacity));
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
    #webcrumbs :is(.group[open] .group-open\:rotate-180) {
        --tw-rotate: 180deg;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs :is(.group:hover .group-hover\:translate-x-1) {
        --tw-translate-x: 4px;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs :is(.group:hover .group-hover\:text-emerald-300) {
        --tw-text-opacity: 1;
        color: rgb(110 231 183 / var(--tw-text-opacity));
    }
    @media (min-width: 768px) {
        #webcrumbs .md\:mb-0 {
            margin-bottom: 0;
        }
        #webcrumbs .md\:w-64 {
            width: 256px;
        }
        #webcrumbs .md\:flex-row {
            flex-direction: row;
        }
        #webcrumbs .md\:items-center {
            align-items: center;
        }
        #webcrumbs :is(.md\:space-y-0 > :not([hidden]) ~ :not([hidden])) {
            --tw-space-y-reverse: 0;
            margin-bottom: calc(0px * var(--tw-space-y-reverse));
            margin-top: calc(0px * (1 - var(--tw-space-y-reverse)));
        }
    }
  </style>