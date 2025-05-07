<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuth } from '~/composables/useAuth' 
import { useNotifications } from '~/composables/useNotifications';
const { unreadCount } = useNotifications();

const { handleLogout } = useAuth()
// Function to get a cookie value by name
const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

const config = useRuntimeConfig();
const apiBase = config.public.API_BASE;

interface Notification {
  id: number;
  message: string;
  created_at: string;
  read: boolean;
}

const notifications = ref<Notification[]>([]);
const selectedNotifications = ref<number[]>([]);

// Fetch notifications
const fetchNotifications = async () => {
  // Get token from cookies
  const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;

  const authHeaders = accessToken
    ? {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add token from cookies
        },
      }
    : {};

  try {
    const response = await fetch(`${apiBase}/notifications/list`, authHeaders);
    const data = await response.json();
    notifications.value = data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
  }
};

// Mark all notifications as read
const markAllRead = async () => {
  try {
    await Promise.all(notifications.value.map((notification) => markAsRead(notification.id)));
  } catch (error) {
    console.error('Error marking all as read:', error);
  }
};

// Mark selected notifications as read
const markSelectedRead = async () => {
  try {
    await Promise.all(selectedNotifications.value.map((id) => markAsRead(id)));
  } catch (error) {
    console.error('Error marking selected as read:', error);
  }
};

// Helper method to mark a single notification as read
const markAsRead = async (notificationId: number) => {
  // Get token from cookies
  const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;

  const authHeaders = accessToken
    ? {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add token from cookies
        },
      }
    : {};

  try {
    await fetch(`${apiBase}/notifications/mark-read/${notificationId}`, {
      method: 'PUT',
      headers: authHeaders.headers, // Add headers for auth
    });
    notifications.value = notifications.value.map((notification) =>
      notification.id === notificationId ? { ...notification, read: true } : notification
    );
  } catch (error) {
    console.error('Error marking notification as read:', error);
  }
};

// Delete selected notifications
const deleteSelected = async () => {
  try {
    await Promise.all(selectedNotifications.value.map((id) => deleteNotification(id)));
    notifications.value = notifications.value.filter(
      (notification) => !selectedNotifications.value.includes(notification.id)
    );
    selectedNotifications.value = [];
  } catch (error) {
    console.error('Error deleting selected notifications:', error);
  }
};

// Helper method to delete a notification
const deleteNotification = async (notificationId: number) => {
  // Get token from cookies
  const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;

  const authHeaders = accessToken
    ? {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add token from cookies
        },
      }
    : {};

  try {
    await fetch(`${apiBase}/notifications/delete/${notificationId}`, {
      method: 'DELETE',
      headers: authHeaders.headers, // Add headers for auth
    });
  } catch (error) {
    console.error('Error deleting notification:', error);
  }
};

onMounted(() => {
  fetchNotifications();
});
</script>
<template>
  <div id="webcrumbs">
    <div class="h-[1080px]">
      <div class="flex h-full">
        <aside class="w-64 bg-emerald-900 p-6 flex flex-col justify-between">
          <nav class="space-y-4">
            <div class="text-white text-xl font-bold mb-8">Record Officer Dashboard</div>
            <a
              href="/staff/record_officer/patient_registrar"
              class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"
            >
              <span class="material-symbols-outlined mr-2">person_add</span>
              Pending Registrations
            </a>
            <a
              href="/staff/record_officer/patient_record"
              class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"
            >
              <span class="material-symbols-outlined mr-2">folder_supervised</span>
              Patient Records
            </a>
            <a
              href="/staff/record_officer/notifications"
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
              href="/staff/record_officer/inbox"
              class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"
            >
              <span class="material-symbols-outlined mr-2">inbox</span>
              Inbox
            </a>
            <a
              href="/staff/record_officer/attendance"
              class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"
            >
              <span class="material-symbols-outlined mr-2">schedule</span>
              Attendance
            </a>
            <a
              href="/staff/record_officer/assignroom"
              class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"
            >
              <span class="material-symbols-outlined mr-2">meeting_room</span>
              Assign Room
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
        <main class="flex-1 bg-emerald-50 p-8 overflow-y-auto">
          <div class="bg-gradient-to-r from-emerald-100 to-white p-6 rounded-xl mb-8 flex flex-col md:flex-row justify-between items-center">
            <h2 class="text-2xl font-bold text-emerald-900 mb-4 md:mb-0">Notifications</h2>
            <div class="flex space-x-4">
              <button @click="markAllRead" class="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all duration-300 hover:scale-105 flex items-center">
                <span class="material-symbols-outlined mr-2">done_all</span> Mark All as Read
              </button>
              <button @click="markSelectedRead" class="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all duration-300 hover:scale-105 flex items-center">
                <span class="material-symbols-outlined mr-2">mark_email_read</span> Mark Selected as Read
              </button>
              <button @click="deleteSelected" class="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 flex items-center">
                <span class="material-symbols-outlined mr-2">delete</span> Delete Selected
              </button>
            </div>
          </div>
          <div class="space-y-4">
            <div v-for="notification in notifications" :key="notification.id" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-start space-x-4">
                <input type="checkbox" v-model="selectedNotifications" :value="notification.id" class="mt-1.5 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"/>
                <div class="flex items-start space-x-4 flex-1">
                  <div class="bg-emerald-100 p-3 rounded-full">
                    <span class="material-symbols-outlined text-emerald-600">calendar_today</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-emerald-900">
                      {{ notification.message.slice(0, 50) }}{{ notification.message.length > 50 ? '...' : '' }}
                    </h3>
                    <p class="text-gray-600 mt-1">{{ notification.message }}</p>
                    <p class="text-sm text-gray-500 mt-2">{{ notification.created_at }}</p>
                  </div>
                </div>
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
    #webcrumbs .mb-6 {
      margin-bottom: 18px;
    }
    #webcrumbs .mb-8 {
      margin-bottom: 24px;
    }
    #webcrumbs .ml-2 {
      margin-left: 6px;
    }
    #webcrumbs .mr-2 {
      margin-right: 6px;
    }
    #webcrumbs .mt-1 {
      margin-top: 3px;
    }
    #webcrumbs .mt-auto {
      margin-top: auto;
    }
    #webcrumbs .flex {
      display: flex;
    }
    #webcrumbs .grid {
      display: grid;
    }
    #webcrumbs .h-12 {
      height: 36px;
    }
    #webcrumbs .h-\[1080px\] {
      height: 1080px;
    }
    #webcrumbs .h-full {
      height: 100%;
    }
    #webcrumbs .w-12 {
      width: 36px;
    }
    #webcrumbs .w-64 {
      width: 192px;
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
    #webcrumbs .justify-center {
      justify-content: center;
    }
    #webcrumbs .justify-between {
      justify-content: space-between;
    }
    #webcrumbs .gap-2 {
      gap: 6px;
    }
    #webcrumbs .gap-4 {
      gap: 12px;
    }
    #webcrumbs :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-y-reverse: 0;
      margin-bottom: calc(12px * var(--tw-space-y-reverse));
      margin-top: calc(12px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs :is(.space-y-6 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-y-reverse: 0;
      margin-bottom: calc(18px * var(--tw-space-y-reverse));
      margin-top: calc(18px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs :is(.space-x-4 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-x-reverse: 0;
      margin-left: calc(12px * (1 - var(--tw-space-x-reverse)));
      margin-right: calc(12px * var(--tw-space-x-reverse));
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
    #webcrumbs .border-l-4 {
      border-left-width: 4px;
    }
    #webcrumbs .border-t {
      border-top-width: 1px;
    }
    #webcrumbs .border-blue-500 {
      --tw-border-opacity: 1;
      border-color: rgb(59 130 246 / var(--tw-border-opacity));
    }
    #webcrumbs .border-emerald-800 {
      --tw-border-opacity: 1;
      border-color: rgb(6 95 70 / var(--tw-border-opacity));
    }
    #webcrumbs .border-red-500 {
      --tw-border-opacity: 1;
      border-color: rgb(239 68 68 / var(--tw-border-opacity));
    }
    #webcrumbs .border-yellow-500 {
      --tw-border-opacity: 1;
      border-color: rgb(234 179 8 / var(--tw-border-opacity));
    }
    #webcrumbs .bg-blue-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(219 234 254 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-emerald-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(236 253 245 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-emerald-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(16 185 129 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-emerald-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(6 95 70 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-emerald-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(6 78 59 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-red-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 226 226 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-red-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(239 68 68 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-white {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-yellow-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 249 195 / var(--tw-bg-opacity));
    }
    #webcrumbs .p-2 {
      padding: 6px;
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
    #webcrumbs .px-4 {
      padding-left: 12px;
      padding-right: 12px;
    }
    #webcrumbs .py-1 {
      padding-bottom: 3px;
      padding-top: 3px;
    }
    #webcrumbs .py-2 {
      padding-bottom: 6px;
      padding-top: 6px;
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
    #webcrumbs .text-red-600 {
      --tw-text-opacity: 1;
      color: rgb(220 38 38 / var(--tw-text-opacity));
    }
    #webcrumbs .text-white {
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    #webcrumbs .text-yellow-600 {
      --tw-text-opacity: 1;
      color: rgb(202 138 4 / var(--tw-text-opacity));
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
    #webcrumbs .transition-shadow {
      transition-duration: 0.15s;
      transition-property: box-shadow;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    #webcrumbs .duration-200 {
      transition-duration: 0.2s;
    }
    #webcrumbs .duration-300 {
      transition-duration: 0.3s;
    }
    #webcrumbs {
      font-family: Inter !important;
      font-size: 14px !important;
    }
    #webcrumbs .hover\:bg-emerald-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(5 150 105 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:bg-emerald-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(6 95 70 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:text-gray-600:hover {
      --tw-text-opacity: 1;
      color: rgb(75 85 99 / var(--tw-text-opacity));
    }
    #webcrumbs .hover\:shadow-xl:hover {
      --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 8px 10px -6px rgba(0, 0, 0, 0.1);
      --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
        0 8px 10px -6px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .absolute {
      position: absolute;
    }
    #webcrumbs .relative {
      position: relative;
    }
    #webcrumbs .left-0 {
      left: 0;
    }
    #webcrumbs .z-50 {
      z-index: 50;
    }
    #webcrumbs .mb-4 {
      margin-bottom: 12px;
    }
    #webcrumbs .mb-8 {
      margin-bottom: 24px;
    }
    #webcrumbs .ml-2 {
      margin-left: 6px;
    }
    #webcrumbs .ml-auto {
      margin-left: auto;
    }
    #webcrumbs .mr-1 {
      margin-right: 3px;
    }
    #webcrumbs .mr-2 {
      margin-right: 6px;
    }
    #webcrumbs .mr-3 {
      margin-right: 9px;
    }
    #webcrumbs .mt-1 {
      margin-top: 3px;
    }
    #webcrumbs .mt-1\.5 {
      margin-top: 4.5px;
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
    #webcrumbs .h-4 {
      height: 12px;
    }
    #webcrumbs .h-\[1080px\] {
      height: 1080px;
    }
    #webcrumbs .h-full {
      height: 100%;
    }
    #webcrumbs .max-h-64 {
      max-height: 192px;
    }
    #webcrumbs .w-4 {
      width: 12px;
    }
    #webcrumbs .w-64 {
      width: 192px;
    }
    #webcrumbs .w-72 {
      width: 216px;
    }
    #webcrumbs .flex-1 {
      flex: 1 1 0%;
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
    #webcrumbs .justify-between {
      justify-content: space-between;
    }
    #webcrumbs .gap-4 {
      gap: 12px;
    }
    #webcrumbs :is(.space-x-3 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-x-reverse: 0;
      margin-left: calc(9px * (1 - var(--tw-space-x-reverse)));
      margin-right: calc(9px * var(--tw-space-x-reverse));
    }
    #webcrumbs :is(.space-x-4 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-x-reverse: 0;
      margin-left: calc(12px * (1 - var(--tw-space-x-reverse)));
      margin-right: calc(12px * var(--tw-space-x-reverse));
    }
    #webcrumbs :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-y-reverse: 0;
      margin-bottom: calc(12px * var(--tw-space-y-reverse));
      margin-top: calc(12px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs .overflow-hidden {
      overflow: hidden;
    }
    #webcrumbs .overflow-y-auto {
      overflow-y: auto;
    }
    #webcrumbs .rounded {
      border-radius: 4px;
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
    #webcrumbs .border-b {
      border-bottom-width: 1px;
    }
    #webcrumbs .border-t {
      border-top-width: 1px;
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
    #webcrumbs .bg-blue-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(219 234 254 / var(--tw-bg-opacity));
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
    #webcrumbs .bg-red-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(239 68 68 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-red-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(220 38 38 / var(--tw-bg-opacity));
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
      padding: 6px;
    }
    #webcrumbs .p-3 {
      padding: 9px;
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
    #webcrumbs .px-6 {
      padding-left: 18px;
      padding-right: 18px;
    }
    #webcrumbs .py-1 {
      padding-bottom: 3px;
      padding-top: 3px;
    }
    #webcrumbs .py-2 {
      padding-bottom: 6px;
      padding-top: 6px;
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
    #webcrumbs .text-emerald-600 {
      --tw-text-opacity: 1;
      color: rgb(5 150 105 / var(--tw-text-opacity));
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
    #webcrumbs .text-gray-800 {
      --tw-text-opacity: 1;
      color: rgb(31 41 55 / var(--tw-text-opacity));
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
    #webcrumbs .transition-colors {
      transition-duration: 0.15s;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
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
      font-family: Inter !important;
      font-size: 14px !important;
    }
    #webcrumbs .hover\:scale-105:hover {
      --tw-scale-x: 1.05;
      --tw-scale-y: 1.05;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
    #webcrumbs .hover\:bg-red-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(185 28 28 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:text-emerald-700:hover {
      --tw-text-opacity: 1;
      color: rgb(4 120 87 / var(--tw-text-opacity));
    }
    #webcrumbs .hover\:text-red-700:hover {
      --tw-text-opacity: 1;
      color: rgb(185 28 28 / var(--tw-text-opacity));
    }
    #webcrumbs .hover\:shadow-xl:hover {
      --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 8px 10px -6px rgba(0, 0, 0, 0.1);
      --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
        0 8px 10px -6px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .focus\:ring-emerald-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(16 185 129 / var(--tw-ring-opacity));
    }
    #webcrumbs :is(.group[open] .group-open\:rotate-180) {
      --tw-rotate: 180deg;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    @media (min-width: 768px) {
      #webcrumbs .md\:mb-0 {
        margin-bottom: 0;
      }
      #webcrumbs .md\:flex-row {
        flex-direction: row;
      }
    }
  </style>