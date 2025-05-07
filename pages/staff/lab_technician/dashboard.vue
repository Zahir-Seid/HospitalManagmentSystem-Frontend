<script setup>
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#imports';
import { useNotifications } from '~/composables/useNotifications';
import { useAuth } from '~/composables/useAuth' 
const { unreadCount } = useNotifications();

const { handleLogout } = useAuth()
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

const config = useRuntimeConfig();
const apiBase = config.public.API_BASE;

const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;
const authHeaders = accessToken
  ? { headers: { Authorization: `Bearer ${accessToken}` } }
  : {};

const labTests = ref([]);
const loading = ref(false);
const searchQuery = ref('');
const updateFormVisible = ref(false);
const selectedTest = ref(null);

const fetchLabTests = async () => {
  loading.value = true;
  try {
    labTests.value = await $fetch(`${apiBase}/lab/list`, { ...authHeaders });
  } catch (err) {
    console.error('Failed to load lab tests:', err);
  } finally {
    loading.value = false;
  }
};

const updateLabTest = async () => {
  try {
    await $fetch(`${apiBase}/lab/update/${selectedTest.value.id}`, {
      method: 'PUT',
      body: {
        status: selectedTest.value.status,
        result: selectedTest.value.result,
      },
      ...authHeaders,
    });
    await fetchLabTests();
    closeForm();
  } catch (err) {
    console.error('Update failed:', err);
  }
};

const openForm = (test) => {
  selectedTest.value = { ...test };
  updateFormVisible.value = true;
};

const closeForm = () => {
  selectedTest.value = null;
  updateFormVisible.value = false;
};

const filteredLabTests = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) return labTests.value;

  return labTests.value.filter((test) => {
    return test.test_name.toLowerCase().includes(query)
      || test.patient.full_name.toLowerCase().includes(query)
      || test.status.toLowerCase().includes(query)
      || (test.result && test.result.toLowerCase().includes(query));
  });
});


onMounted(() => {
  fetchLabTests();
});
</script>



<template
  ><div id="webcrumbs">
    <div class="w-[1800px] flex h-[850px] bg-gray-50">
      <aside class="w-64 bg-emerald-900 p-6 flex flex-col justify-between">
        <nav class="space-y-4">
          <div class="text-white text-xl font-bold mb-8">Lab Dashboard</div>
          <a
            href="/staff/lab_technician/dashboard"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 transform hover:translate-x-1"
          >
            <span class="material-symbols-outlined mr-2">science</span> Lab
            Tests
          </a>
          <a
            href="/staff/lab_technician/notifications"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 transform hover:translate-x-1"
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
            href="/staff/lab_technician/inbox"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 transform hover:translate-x-1"
          >
            <span class="material-symbols-outlined mr-2">inbox</span> Inbox
          </a>
          <a
            href="/staff/lab_technician/attendance"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 transform hover:translate-x-1"
          >
            <span class="material-symbols-outlined mr-2">schedule</span>
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
      <main class="flex-1 p-6 overflow-auto">
        <header class="mb-6">
          <h1 class="text-2xl font-bold text-emerald-900">Laboratory Dashboard</h1>
        </header>

        <!-- Table -->
        <div class="bg-white rounded-xl shadow-lg mb-6">
          <div class="p-6 bg-gradient-to-r from-emerald-100 to-white flex justify-between items-center">
            <h3 class="text-xl font-bold text-emerald-900">Pending Lab Tests</h3>
            <input
              v-model="searchQuery"
              placeholder="Search tests..."
              class="pl-10 pr-4 py-2 rounded-lg border border-emerald-200 focus:ring-emerald-500"
            />
          </div>

          <div class="overflow-x-auto p-6">
            <table class="w-full">
              <thead class="bg-emerald-50">
                <tr>
                  <th class="p-4 text-left text-emerald-700">Test Name</th>
                  <th class="p-4 text-left text-emerald-700">From Dr.</th>
                  <th class="p-4 text-left text-emerald-700">Patient</th>
                  <th class="p-4 text-left text-emerald-700">Status</th>
                  <th class="p-4 text-left text-emerald-700">Result</th>
                  <th class="p-4 text-left text-emerald-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="test in filteredLabTests"
                  :key="test.id"
                  class="border-b hover:bg-emerald-50"
                >
                  <td class="p-4">{{ test.test_name }}</td>
                  <td class="p-4">{{ test.doctor }}</td>
                  <td class="p-4">{{ test.patient }}</td>
                  <td class="p-4">
                    <span
                      :class="{
                        'bg-amber-100 text-amber-800': test.status === 'Pending',
                        'bg-emerald-100 text-emerald-800': test.status === 'Completed',
                        'bg-red-100 text-red-800': test.status === 'Critical',
                      }"
                      class="px-3 py-1 rounded-full"
                    >
                      {{ test.status }}
                    </span>
                  </td>
                  <td class="p-4">{{ test.result || 'Pending' }}</td>
                  <td class="p-4">
                    <button @click="openForm(test)" class="text-emerald-600 hover:text-emerald-700">
                      <span class="material-symbols-outlined">edit</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Edit Modal -->
<div
  v-if="updateFormVisible"
  class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
>
  <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto">
    <h3 class="text-lg font-bold text-emerald-900 mb-4">Update Test Results</h3>
    <form @submit.prevent="updateLabTest">
      <div class="space-y-4">
        <div>
          <label class="block text-emerald-700 mb-2">Status</label>
          <select
            v-model="selectedTest.status"
            class="border border-emerald-200 rounded-lg w-full p-2"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Critical">Critical</option>
          </select>
        </div>
        <div>
          <label class="block text-emerald-700 mb-2">Result</label>
          <textarea
            v-model="selectedTest.result"
            rows="4"
            class="border border-emerald-200 rounded-lg w-full p-2"
          ></textarea>
        </div>
      </div>
      <div class="flex gap-4 mt-6">
        <button
          type="button"
          @click="closeForm"
          class="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  </div>
</div>
<!-- Pagination (optional) -->
<div class="flex justify-between items-center mt-6">
                <div class="text-sm text-gray-500">Showing 1 of 10 Lab tests</div>
                <div class="flex space-x-2">
                  <button class="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50 transition-colors">
                    <span class="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button class="px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors">1</button>
                  <button class="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50 transition-colors">2</button>
                  <button class="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50 transition-colors">3</button>
                  <button class="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50 transition-colors">
                    <span class="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
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
  #webcrumbs .left-1\/2 {
    left: 50%;
  }
  #webcrumbs .left-3 {
    left: 12px;
  }
  #webcrumbs .top-2 {
    top: 8px;
  }
  #webcrumbs .top-20 {
    top: 80px;
  }
  #webcrumbs .z-10 {
    z-index: 10;
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
  #webcrumbs .ml-2 {
    margin-left: 8px;
  }
  #webcrumbs .ml-4 {
    margin-left: 16px;
  }
  #webcrumbs .mr-2 {
    margin-right: 8px;
  }
  #webcrumbs .mr-3 {
    margin-right: 12px;
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
  #webcrumbs .hidden {
    display: none;
  }
  #webcrumbs .h-\[850px\] {
    height: 850px;
  }
  #webcrumbs .w-64 {
    width: 256px;
  }
  #webcrumbs .w-\[1200px\] {
    width: 1200px;
  }
  #webcrumbs .w-full {
    width: 100%;
  }
  #webcrumbs .max-w-md {
    max-width: 28rem;
  }
  #webcrumbs .flex-1 {
    flex: 1 1 0%;
  }
  #webcrumbs .-translate-x-1\/2 {
    --tw-translate-x: -50%;
  }
  #webcrumbs .-translate-x-1\/2,
  #webcrumbs .transform {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
  #webcrumbs .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  #webcrumbs .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
    gap: 16px;
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
  #webcrumbs .overflow-auto {
    overflow: auto;
  }
  #webcrumbs .overflow-x-auto {
    overflow-x: auto;
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
  #webcrumbs .rounded-xl {
    border-radius: 36px;
  }
  #webcrumbs .rounded-r-lg {
    border-bottom-right-radius: 24px;
    border-top-right-radius: 24px;
  }
  #webcrumbs .rounded-t-xl {
    border-top-left-radius: 36px;
    border-top-right-radius: 36px;
  }
  #webcrumbs .rounded-tl-lg {
    border-top-left-radius: 24px;
  }
  #webcrumbs .rounded-tr-lg {
    border-top-right-radius: 24px;
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
  #webcrumbs .border-amber-500 {
    --tw-border-opacity: 1;
    border-color: rgb(245 158 11 / var(--tw-border-opacity));
  }
  #webcrumbs .border-emerald-100 {
    --tw-border-opacity: 1;
    border-color: rgb(209 250 229 / var(--tw-border-opacity));
  }
  #webcrumbs .border-emerald-200 {
    --tw-border-opacity: 1;
    border-color: rgb(167 243 208 / var(--tw-border-opacity));
  }
  #webcrumbs .border-emerald-500 {
    --tw-border-opacity: 1;
    border-color: rgb(16 185 129 / var(--tw-border-opacity));
  }
  #webcrumbs .border-emerald-800 {
    --tw-border-opacity: 1;
    border-color: rgb(6 95 70 / var(--tw-border-opacity));
  }
  #webcrumbs .border-red-500 {
    --tw-border-opacity: 1;
    border-color: rgb(239 68 68 / var(--tw-border-opacity));
  }
  #webcrumbs .bg-amber-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(254 243 199 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-amber-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(255 251 235 / var(--tw-bg-opacity));
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
  #webcrumbs .bg-gray-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-red-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(254 226 226 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-red-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(254 242 242 / var(--tw-bg-opacity));
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
  #webcrumbs .py-2 {
    padding-bottom: 8px;
    padding-top: 8px;
  }
  #webcrumbs .pl-10 {
    padding-left: 40px;
  }
  #webcrumbs .pr-4 {
    padding-right: 16px;
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
  #webcrumbs .text-amber-500 {
    --tw-text-opacity: 1;
    color: rgb(245 158 11 / var(--tw-text-opacity));
  }
  #webcrumbs .text-amber-600 {
    --tw-text-opacity: 1;
    color: rgb(217 119 6 / var(--tw-text-opacity));
  }
  #webcrumbs .text-amber-800 {
    --tw-text-opacity: 1;
    color: rgb(146 64 14 / var(--tw-text-opacity));
  }
  #webcrumbs .text-emerald-200 {
    --tw-text-opacity: 1;
    color: rgb(167 243 208 / var(--tw-text-opacity));
  }
  #webcrumbs .text-emerald-500 {
    --tw-text-opacity: 1;
    color: rgb(16 185 129 / var(--tw-text-opacity));
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
  #webcrumbs .text-gray-700 {
    --tw-text-opacity: 1;
    color: rgb(55 65 81 / var(--tw-text-opacity));
  }
  #webcrumbs .text-red-500 {
    --tw-text-opacity: 1;
    color: rgb(239 68 68 / var(--tw-text-opacity));
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
  #webcrumbs .transition-colors {
    transition-duration: 0.15s;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  #webcrumbs .duration-150 {
    transition-duration: 0.15s;
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
  #webcrumbs .hover\:-translate-y-1:hover {
    --tw-translate-y: -4px;
  }
  #webcrumbs .hover\:-translate-y-1:hover,
  #webcrumbs .hover\:translate-x-1:hover {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  #webcrumbs .hover\:translate-x-1:hover {
    --tw-translate-x: 4px;
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
  #webcrumbs .hover\:bg-gray-200:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(229 231 235 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:text-emerald-700:hover {
    --tw-text-opacity: 1;
    color: rgb(4 120 87 / var(--tw-text-opacity));
  }
  #webcrumbs .hover\:shadow-xl:hover {
    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
      0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  #webcrumbs .focus\:border-transparent:focus {
    border-color: transparent;
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
</style>
