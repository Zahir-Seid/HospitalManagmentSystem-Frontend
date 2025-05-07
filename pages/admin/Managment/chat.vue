<script setup lang="ts">
import { ref } from "vue";
import { useEmployees } from "~/composables/useEmployees";
import type { Employee } from "~/composables/useEmployees";
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

// Use the composable to fetch employees
const { employees, loading, error } = useEmployees();

// Form state
const receiverId = ref<number | null>(null);
const subject = ref<string>("");
const message = ref<string>("");
const statusMessage = ref<string>("");

// Get the API base URL from runtime config
const config = useRuntimeConfig();
const apiBase = config.public.API_BASE;  // API Base URL

// Get token from cookies (client-side only)
const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;  // Retrieve access token from cookies if running in the browser
const authHeaders = accessToken
  ? {
      headers: {
        Authorization: `Bearer ${accessToken}`,  // Get the token from cookies
      },
    }
  : {};

// Function to send message
const sendMessage = async () => {
  if (!receiverId.value || !subject.value || !message.value) {
    statusMessage.value = "All fields are required.";
    return;
  }

  try {
    // Sending the message with Bearer authentication
    await $fetch(`${apiBase}/Managment/send`, {
      method: "POST",
      body: {
        receiver_id: receiverId.value,
        subject: subject.value,
        message: message.value,
      },
      ...authHeaders,  // Include the authorization headers
    });

    statusMessage.value = "Message sent successfully!";
    receiverId.value = null;
    subject.value = "";
    message.value = "";
  } catch (error) {
    statusMessage.value = "Error sending message. Try again.";
    console.error(error);
  }
};

// Function to build auth headers dynamically
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

</script>



<template
  ><div id="webcrumbs">
    <div class="w-full min-h-screen bg-gray-50 flex">
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
      <h1 class="text-2xl font-bold text-emerald-800 mb-6">Messages</h1>

      <!-- Buttons -->
      <div class="flex mb-6 gap-4">
        <button
          class="px-4 py-2 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition-all duration-200 flex items-center"
        >
          <span class="material-symbols-outlined mr-2">add</span> Compose Message
        </button>
      </div>

      <!-- Compose Message Form -->
      <div class="mb-8 bg-white border rounded-lg shadow-sm p-6">
        <h2 class="text-lg font-semibold text-emerald-800 mb-4">Compose Message</h2>

        <form @submit.prevent="sendMessage">
          <!-- Recipient -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-medium mb-2">Recipient</label>
            <select
              v-model="receiverId"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
              required
            >
              <option value="" disabled>Select Employee</option>
              <option v-if="loading" disabled>Loading employees...</option>
              <option v-for="employee in employees" :key="employee.id" :value="employee.id">
                {{ employee.username }} ({{ employee.role }})
              </option>
            </select>
            <p v-if="error" class="text-red-500">{{ error }}</p>
          </div>

          <!-- Subject -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-medium mb-2">Subject</label>
            <input
              v-model="subject"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
              placeholder="Enter subject"
              required
            />
          </div>

          <!-- Message -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-medium mb-2">Message</label>
            <textarea
              v-model="message"
              class="w-full px-3 py-2 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <!-- Status Message -->
          <p v-if="statusMessage" class="text-sm text-green-500">{{ statusMessage }}</p>

          <!-- Submit Button -->
          <div class="flex justify-end">
            <button
              type="submit"
              class="px-4 py-2 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition-all duration-200 flex items-center"
            >
              <span class="material-symbols-outlined mr-2">send</span>
              Send Message
            </button>
          </div>
        </form>
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
  #webcrumbs .mb-4 {
    margin-bottom: 16px;
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
  #webcrumbs .line-clamp-2 {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  #webcrumbs .block {
    display: block;
  }
  #webcrumbs .flex {
    display: flex;
  }
  #webcrumbs .h-10 {
    height: 40px;
  }
  #webcrumbs .h-32 {
    height: 128px;
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
  #webcrumbs .w-full {
    width: 100%;
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
  #webcrumbs .text-gray-600 {
    --tw-text-opacity: 1;
    color: rgb(75 85 99 / var(--tw-text-opacity));
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
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);
  }
  #webcrumbs .focus\:ring-emerald-500:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(16 185 129 / var(--tw-ring-opacity));
  }
  .btn-primary {
  @apply px-4 py-2 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition-all duration-200 flex items-center;
  }
  .btn-secondary {
    @apply px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md shadow hover:bg-gray-50 transition-all duration-200 flex items-center;
  }
</style>
