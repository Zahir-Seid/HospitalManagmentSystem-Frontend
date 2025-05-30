<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRuntimeConfig } from '#imports'
import { useNotifications } from '~/composables/useNotifications';
import { useAuth } from '~/composables/useAuth';

const {handleLogout} = useAuth();
const { unreadCount } = useNotifications();
// Function to get a cookie value by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

const config = useRuntimeConfig()
const apiBase = config.public.API_BASE  // Correct way to access the runtime config

// Profile data
const profile = ref({
  first_name: '',
  middle_name: '',
  last_name: '',
  region: '',
  town: '',
  kebele: '',
  house_number: '',
  profile_picture: '' // Add profile picture field
})

const errorMessage = ref('')
const isEditing = ref(false) // Add editing state

// API logic for fetching profile data
const fetchProfile = async () => {
  const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;

  const authHeaders = accessToken
    ? {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    : {};

  try {
    const response = await $fetch(`${apiBase}/patients/profile`, authHeaders);
    
    profile.value = {
      first_name: response.user.first_name,       // Or add fields from another source if needed
      middle_name: response.user.middle_name,
      last_name: response.user.last_name,
      profile_picture: response.user.profile_picture,
      region: response.region,
      town: response.town,
      kebele: response.kebele,
      house_number: response.house_number,
      phone_number: response.user.phone_number,
      email: response.user.email,
      username: response.user.username,
      role: response.user.role,
      address: response.user.address,
      id: response.user.id
    }

  } catch (error) {
    errorMessage.value = 'Error fetching profile data.'
    console.error('Error fetching profile:', error)
  }
}


// API logic for updating profile data
const updateProfile = async () => {
  const accessToken = typeof window !== 'undefined' ? getCookie('access_token') : null;

  const authHeaders = accessToken
    ? {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add token from cookies
        },
      }
    : {};

  try {
    await $fetch(`${apiBase}/user/profile/`, {
      method: 'PUT',
      headers: authHeaders.headers,  // Add headers for auth
      body: profile.value,
    })
    alert('Profile updated successfully')
    isEditing.value = false // Exit editing mode
  } catch (error) {
    errorMessage.value = 'Error updating profile.'
    console.error('Error updating profile:', error)
  }
}


// Fetch profile data when component is mounted
onMounted(() => {
  fetchProfile()
})
</script>


<template>
  <div id="webcrumbs">
    <div class="w-full"> <!-- Changed to w-full to take full width -->
      <div class="flex">
        <aside class="w-full md:w-64 bg-emerald-900 p-6 md:h-screen flex flex-col justify-between">
          <nav class="space-y-4">
            <div class="text-white text-xl font-bold mb-8"><a href="/patient/dashboard" >Patient Dashboard </a></div>
            <a href="/patient/profile" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200">
              <span class="material-symbols-outlined mr-2">person</span> Profile
            </a>
            <a href="/patient/appointment" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200">
              <span class="material-symbols-outlined mr-2">event</span> Appointments
            </a>
            <a href="/patient/medicalhistory" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200">
              <span class="material-symbols-outlined mr-2">medical_services</span> Medical History
            </a>
            <a href="/patient/bills" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200">
              <span class="material-symbols-outlined mr-2">receipt</span> Billing
            </a>
            <a href="/patient/notifications" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200">
              <span class="material-symbols-outlined mr-2">notifications</span>
              Notifications
              <span
                v-if="unreadCount > 0"
                class="ml-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full"
              >
                {{ unreadCount }}
              </span>
            </a>
            <a href="/patient/chat" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200">
              <span class="material-symbols-outlined mr-2">chat</span> Chat
            </a>
            <a href="/patient/feedback" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200">
              <span class="material-symbols-outlined mr-2">comment</span> Feedback
            </a>
            <a @click.prevent="handleLogout" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200">
              <span class="material-symbols-outlined mr-2">logout</span> LogOut
            </a>
          </nav>
          <div class="text-emerald-200 text-sm text-center mt-auto pt-6 border-t border-emerald-800">
            © 2025 Assosa General Hospital. All rights reserved.
          </div>
        </aside>
        <main class="flex-1 bg-emerald-50 p-8 overflow-auto"> <!-- Added overflow-auto to handle content overflow -->
          <div class="mb-8 flex items-center justify-between">
            <h1 class="text-3xl font-bold">Patient Profile</h1>
            <div class="flex items-center gap-4">
              <span class="rounded-full bg-emerald-100 px-4 py-1 font-medium text-emerald-700">Active</span>
              <button @click="isEditing = !isEditing" class="rounded-full bg-emerald-600 px-6 py-2 font-medium text-white transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg">
                {{ isEditing ? 'Cancel' : 'Edit Profile' }}
              </button>
            </div>
          </div>
          <div class="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl">
            <div class="-m-6 mb-6 rounded-t-xl bg-gradient-to-r from-emerald-100 to-white p-6">
              <div class="flex items-center gap-6">
                <div class="h-24 w-24 rounded-full bg-emerald-200 overflow-hidden">
                  <img :src="profile.profile_picture || 'https://placehold.co/96x96'" alt="Profile" class="h-full w-full object-cover"/>
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-emerald-900">Profile Information</h2>
                  <div class="mt-2 text-emerald-600">
                    <span class="font-medium">{{ profile.first_name }} {{ profile.middle_name }} {{ profile.last_name }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label v-if="isEditing" class="block text-sm font-medium text-emerald-700">Profile Picture:</label>
                <input v-if="isEditing" type="file" @change="handleFileChange" accept="image/*" class="mt-1 p-2 rounded-lg bg-emerald-50 w-full" />
                  <label class="block text-sm font-medium text-emerald-700">First Name:</label>
                  <input v-if="isEditing" v-model="profile.first_name" class="mt-1 p-2 rounded-lg bg-emerald-50 w-full" />
                  <p v-else class="mt-1 p-2 rounded-lg bg-emerald-50">{{ profile.first_name }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-emerald-700">Middle Name:</label>
                  <input v-if="isEditing" v-model="profile.middle_name" class="mt-1 p-2 rounded-lg bg-emerald-50 w-full" />
                  <p v-else class="mt-1 p-2 rounded-lg bg-emerald-50">{{ profile.middle_name }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-emerald-700">Last Name:</label>
                  <input v-if="isEditing" v-model="profile.last_name" class="mt-1 p-2 rounded-lg bg-emerald-50 w-full" />
                  <p v-else class="mt-1 p-2 rounded-lg bg-emerald-50">{{ profile.last_name }}</p>
                </div>
              </div>
              <div class="pt-4">
                <label class="block text-sm font-medium text-emerald-700">Region:</label>
                <input v-if="isEditing" v-model="profile.region" class="mt-1 p-2 rounded-lg bg-emerald-50 w-full" />
                <p v-else class="mt-1 p-2 rounded-lg bg-emerald-50">{{ profile.region }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-emerald-700">Town:</label>
                <input v-if="isEditing" v-model="profile.town" class="mt-1 p-2 rounded-lg bg-emerald-50 w-full" />
                <p v-else class="mt-1 p-2 rounded-lg bg-emerald-50">{{ profile.town }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-emerald-700">Kebele:</label>
                <input v-if="isEditing" v-model="profile.kebele" class="mt-1 p-2 rounded-lg bg-emerald-50 w-full" />
                <p v-else class="mt-1 p-2 rounded-lg bg-emerald-50">{{ profile.kebele }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-emerald-700">House Number:</label>
                <input v-if="isEditing" v-model="profile.house_number" class="mt-1 p-2 rounded-lg bg-emerald-50 w-full" />
                <p v-else class="mt-1 p-2 rounded-lg bg-emerald-50">{{ profile.house_number }}</p>
              </div>
              <div v-if="isEditing" class="pt-4">
                <button @click="updateProfile" class="rounded-full bg-emerald-600 px-6 py-2 font-medium text-white transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg">Save Changes</button>
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
    #webcrumbs .-m-6 {
      margin: -18px;
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
    #webcrumbs .mt-2 {
      margin-top: 6px;
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
    #webcrumbs .h-24 {
      height: 72px;
    }
    #webcrumbs .h-full {
      height: 100%;
    }
    #webcrumbs .w-24 {
      width: 72px;
    }
    #webcrumbs .w-\[1200px\] {
      width: 1200px;
    }
    #webcrumbs .w-full {
      width: 100%;
    }
    #webcrumbs .flex-1 {
      flex: 1 1 0%;
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
    #webcrumbs .justify-between {
      justify-content: space-between;
    }
    #webcrumbs .gap-4 {
      gap: 12px;
    }
    #webcrumbs .gap-6 {
      gap: 18px;
    }
    #webcrumbs :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-y-reverse: 0;
      margin-bottom: calc(12px * var(--tw-space-y-reverse));
      margin-top: calc(12px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs .overflow-hidden {
      overflow: hidden;
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
    #webcrumbs .rounded-t-xl {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
    #webcrumbs .border-t {
      border-top-width: 1px;
    }
    #webcrumbs .border-emerald-800 {
      --tw-border-opacity: 1;
      border-color: rgb(6 95 70 / var(--tw-border-opacity));
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
    #webcrumbs .bg-emerald-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(6 78 59 / var(--tw-bg-opacity));
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
    #webcrumbs .object-cover {
      object-fit: cover;
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
    #webcrumbs .pt-4 {
      padding-top: 12px;
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
    #webcrumbs .text-3xl {
      font-size: 26.25px;
      line-height: 31.5px;
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
    #webcrumbs .text-emerald-900 {
      --tw-text-opacity: 1;
      color: rgb(6 78 59 / var(--tw-text-opacity));
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
    #webcrumbs .transition {
      transition-duration: 0.15s;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
        backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
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
    #webcrumbs .hover\:-translate-y-0\.5:hover {
      --tw-translate-y: -1.5px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
    @media (min-width: 768px) {
      #webcrumbs .md\:h-screen {
        height: 100vh;
      }
      #webcrumbs .md\:w-64 {
        width: 192px;
      }
    }
    
  </style>