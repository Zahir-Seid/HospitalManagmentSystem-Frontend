<script setup>
import { ref } from 'vue';
import { useRuntimeConfig } from '#imports';

// Form fields
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const firstName = ref('');
const middleName = ref('');
const lastName = ref('');
const phoneNumber = ref('');
const gender = ref('');
const dateOfBirth = ref('');
const address = ref('');
const region = ref('');
const town = ref('');
const kebele = ref('');
const ssn = ref('');
const houseNumber = ref('');
const profilePicture = ref(null); // For profile picture upload

// Form state
const agreeToTerms = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const activeTab = ref('personal'); // Track which tab is active
const personalInfoValid = ref(false);
const accountInfoValid = ref(false);

// Validation helpers
const isValidPhoneNumber = (phone) => /^\d{10}$/.test(phone);
const isValidDate = (date) => !isNaN(Date.parse(date));
const isValidPassword = (password) => password.length >= 8;
const isNotEmpty = (value) => value.trim() !== '';

// Validate personal info
const validatePersonalInfo = () => {
  personalInfoValid.value =
    isNotEmpty(firstName.value) &&
    isNotEmpty(lastName.value) &&
    isNotEmpty(region.value) &&
    isNotEmpty(town.value) &&
    isNotEmpty(kebele.value) &&
    isNotEmpty(houseNumber.value) &&
    isValidPhoneNumber(phoneNumber.value) &&
    isNotEmpty(gender.value) &&
    isValidDate(dateOfBirth.value) &&
    isNotEmpty(address.value);
};

// Validate account info
const validateAccountInfo = () => {
  accountInfoValid.value =
    isNotEmpty(username.value) &&
    isValidPassword(password.value) &&
    password.value === confirmPassword.value;
};

// Handle profile picture selection
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    profilePicture.value = file;
  }
};

// Handle signup
const handleSignup = async () => {
  validatePersonalInfo();
  validateAccountInfo();

  if (!personalInfoValid.value) {
    errorMessage.value = "Please fill out all required personal information correctly.";
    successMessage.value = '';
    return;
  }

  if (!accountInfoValid.value) {
    errorMessage.value = "Please fill out all required account details correctly.";
    successMessage.value = '';
    return;
  }

  if (!agreeToTerms.value) {
    errorMessage.value = "You must agree to the terms and conditions.";
    successMessage.value = '';
    return;
  }

  try {
    const apiBase = useRuntimeConfig().public.API_BASE;

    // Create FormData object
    const formData = new FormData();
    formData.append('username', username.value);
    formData.append('email', email.value);
    formData.append('password', password.value);
    formData.append('first_name', firstName.value);
    formData.append('middle_name', middleName.value);
    formData.append('last_name', lastName.value);
    formData.append('phone_number', phoneNumber.value);
    formData.append('gender', gender.value);
    formData.append('date_of_birth', dateOfBirth.value);
    formData.append('address', address.value);
    formData.append('region', region.value);
    formData.append('town', town.value);
    formData.append('kebele', kebele.value);
    formData.append('ssn', ssn.value);
    formData.append('house_number', houseNumber.value);
    if (profilePicture.value) {
      formData.append('profile_picture', profilePicture.value); // Append the file
    }

    // Send FormData instead of JSON
    const response = await $fetch(`${apiBase}/user/signup/`, {
      method: 'POST',
      body: formData, // FormData is sent as multipart/form-data
    });

    successMessage.value = response.message;
    errorMessage.value = '';
  } catch (error) {
    console.error("Signup Error:", error);
    errorMessage.value = error.data?.error || "Signup failed. Please try again.";
    successMessage.value = '';
  }
};
</script>

<template>
  <div id="webcrumbs">
    <div class="w-full min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      <nav class="bg-gradient-to-r from-emerald-100 to-white py-4 px-4 md:px-6 shadow-lg">
        <div class="flex items-center space-x-2">
          <span class="material-symbols-outlined text-2xl md:text-3xl text-emerald-600">local_hospital</span>
          <h1 class="text-xl md:text-2xl font-bold text-emerald-600"><a href="/">Assosa General Hospital</a></h1>
        </div>
      </nav>

      <main class="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div class="flex justify-center mb-6">
            <span class="material-symbols-outlined text-4xl text-emerald-600">health_and_safety</span>
          </div>

          <div class="flex gap-4 justify-center mb-8">
            <button class="px-6 py-2 rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition-all hover:scale-105">
              <a href="/signin">Sign In</a>
            </button>
            <button class="px-6 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all hover:scale-105">
              Sign Up
            </button>
          </div>

          <!-- Signup Form -->
          <form @submit.prevent="handleSignup" class="space-y-4">
            <!-- Progress Indicator -->
            <div class="flex items-center justify-center space-x-4 mb-6">
              <div class="flex items-center space-x-2">
                <span :class="activeTab === 'personal' 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-emerald-100 text-emerald-600'"
                  class="w-8 h-8 rounded-full flex items-center justify-center font-medium">
                  1
                </span>
                <span class="text-sm font-medium">Personal Information</span>
              </div>
              
              <div class="w-16 h-0.5 bg-emerald-200"></div>
              
              <div class="flex items-center space-x-2">
                <span :class="activeTab === 'account' 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-emerald-100 text-emerald-600'"
                  class="w-8 h-8 rounded-full flex items-center justify-center font-medium">
                  2
                </span>
                <span class="text-sm font-medium">Account Details</span>
              </div>
            </div>

            <!-- Personal Info Tab -->
            <div v-show="activeTab === 'personal'" class="space-y-4">
              <!-- Profile Picture Upload -->
              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">Profile Picture</label>
                <input type="file" @change="handleFileChange" accept="image/*" 
                  class="w-full p-2 rounded-lg bg-emerald-50 border border-emerald-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all hover:border-emerald-400" />
              </div>

              <!-- Name Fields -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block mb-2 text-sm font-medium text-emerald-700">First Name</label>
                  <input v-model="firstName" @input="validatePersonalInfo" type="text" required
                    class="w-full p-3 rounded-lg border"
                    :class="{'border-red-500': !isNotEmpty(firstName) && showErrors, 'border-emerald-200': isNotEmpty(firstName) || !showErrors}"
                    placeholder="Enter first name"
                  />
                  <p v-if="!isNotEmpty(firstName) && showErrors" class="text-red-500 text-sm mt-1">First name is required.</p>
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-emerald-700">Middle Name</label>
                  <input v-model="middleName" type="text"
                    class="w-full p-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all hover:border-emerald-400"
                    placeholder="Enter middle name"
                  />
                </div>
                <div class="col-span-2">
                  <label class="block mb-2 text-sm font-medium text-emerald-700">Last Name</label>
                  <input v-model="lastName" @input="validatePersonalInfo" type="text" required
                    class="w-full p-3 rounded-lg border"
                    :class="{'border-red-500': !isNotEmpty(lastName) && showErrors, 'border-emerald-200': isNotEmpty(lastName) || !showErrors}"
                    placeholder="Enter last name"
                  />
                  <p v-if="!isNotEmpty(lastName) && showErrors" class="text-red-500 text-sm mt-1">Last name is required.</p>
                </div>
              </div>

              <!-- Contact Info -->
              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">Phone Number</label>
                <input v-model="phoneNumber" @input="validatePersonalInfo" type="text"
                  class="w-full p-3 rounded-lg border"
                  :class="{'border-red-500': !isValidPhoneNumber(phoneNumber) && showErrors, 'border-emerald-200': isValidPhoneNumber(phoneNumber) || !showErrors}"
                  placeholder="Enter phone number"
                />
                <p v-if="!isValidPhoneNumber(phoneNumber) && showErrors" class="text-red-500 text-sm mt-1">Invalid phone number.</p>
              </div>

              <!-- Personal Details -->
              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">Gender</label>
                <select v-model="gender" @change="validatePersonalInfo"
                  class="w-full p-3 rounded-lg border"
                  :class="{'border-red-500': !isNotEmpty(gender) && showErrors, 'border-emerald-200': isNotEmpty(gender) || !showErrors}">
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <p v-if="!isNotEmpty(gender) && showErrors" class="text-red-500 text-sm mt-1">Gender is required.</p>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">Date of Birth</label>
                <input v-model="dateOfBirth" @input="validatePersonalInfo" type="date"
                  class="w-full p-3 rounded-lg border"
                  :class="{'border-red-500': !isValidDate(dateOfBirth) && showErrors, 'border-emerald-200': isValidDate(dateOfBirth) || !showErrors}"
                />
                <p v-if="!isValidDate(dateOfBirth) && showErrors" class="text-red-500 text-sm mt-1">Invalid date of birth.</p>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">Address</label>
                <textarea v-model="address" @input="validatePersonalInfo" rows="3"
                  class="w-full p-3 rounded-lg border"
                  :class="{'border-red-500': !isNotEmpty(address) && showErrors, 'border-emerald-200': isNotEmpty(address) || !showErrors}"
                  placeholder="Enter address"
                ></textarea>
                <p v-if="!isNotEmpty(address) && showErrors" class="text-red-500 text-sm mt-1">Address is required.</p>
              </div>

              <!-- Address Fields (Patient Profile) -->
              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">Region</label>
                <input  v-model="region" type="text"
                  class="w-full p-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all hover:border-emerald-400" />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">Town</label>
                <input v-model="town" type="text"
                  class="w-full p-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all hover:border-emerald-400" />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">Kebele</label>
                <input v-model="kebele" type="text"
                  class="w-full p-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all hover:border-emerald-400" />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">SSN</label>
                <input v-model="ssn" type="text"
                  class="w-full p-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all hover:border-emerald-400" />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">House Number</label>
                <input v-model="houseNumber" type="text"
                  class="w-full p-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all hover:border-emerald-400" />
              </div>

              <button
              type="button"
              @click="activeTab = 'account'"
              :disabled="!personalInfoValid"
              :class="[
                'w-full px-6 py-3 rounded-full text-white transition-all hover:scale-105 disabled:bg-emerald-300 disabled:text-white',
                personalInfoValid 
                  ? 'bg-emerald-600 hover:bg-emerald-700 cursor-pointer' 
                  : 'bg-emerald-300 cursor-not-allowed'
              ]"
            >
              Next: Account Details
            </button>
            </div>  

            <!-- Account Info Tab -->
            <div v-show="activeTab === 'account'" class="space-y-4">
              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">Username</label>
                <input v-model="username" type="text" placeholder="Enter your username" required 
                  class="w-full p-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all hover:border-emerald-400" />
              </div>

              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">Email</label>
                <input v-model="email" type="email" placeholder="Enter your email" required 
                  class="w-full p-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all hover:border-emerald-400" />
              </div>

              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">Password</label>
                <input v-model="password" type="password" placeholder="••••••••" required 
                  class="w-full p-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all hover:border-emerald-400" />
              </div>

              <div>
                <label class="block mb-2 text-sm font-medium text-emerald-700">Confirm Password</label>
                <input v-model="confirmPassword" type="password" placeholder="••••••••" required 
                  class="w-full p-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-600 outline-none transition-all hover:border-emerald-400" />
              </div>

              <!-- Back and Submit Buttons -->
              <div class="flex gap-4">
                <button type="submit" class="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-all hover:scale-105">
                  Create Account
                </button>
              </div>
              <button
                  type="button"
                  @click="activeTab = 'personal'"
                  class="w-1/2 bg-emerald-100 text-emerald-600 py-3 rounded-lg hover:bg-emerald-200 transition-all"
                >
                  Back
                </button>
            </div>

            <!-- Agreement Checkbox -->
            <div v-show="activeTab === 'account'" class="flex items-center space-x-2 pt-4">
              <input v-model="agreeToTerms" type="checkbox" required 
                class="w-4 h-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500" />
              <span class="text-sm">I agree to the Terms of Service and Privacy Policy</span>
            </div>

            <!-- Error/Success Messages -->
            <div>
              <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>
              <p v-if="successMessage" class="text-green-500 text-sm mt-2">{{ successMessage }}</p>
            </div>
          </form>
        </div>
      </main>

      <footer class="bg-emerald-900 text-white py-6 px-4 md:px-6">
        <p class="text-center">© 2025 Assosa General Hospital. All rights reserved.</p>
      </footer>
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
    #webcrumbs .mb-2 {
      margin-bottom: 8px;
    }
    #webcrumbs .mb-6 {
      margin-bottom: 24px;
    }
    #webcrumbs .mb-8 {
      margin-bottom: 32px;
    }
    #webcrumbs .block {
      display: block;
    }
    #webcrumbs .flex {
      display: flex;
    }
    #webcrumbs .h-4 {
      height: 16px;
    }
    #webcrumbs .min-h-\[calc\(100vh-80px\)\] {
      min-height: calc(100vh - 80px);
    }
    #webcrumbs .min-h-screen {
      min-height: 100vh;
    }
    #webcrumbs .w-4 {
      width: 16px;
    }
    #webcrumbs .w-full {
      width: 100%;
    }
    #webcrumbs .max-w-md {
      max-width: 28rem;
    }
    #webcrumbs .flex-row {
      flex-direction: row;
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
    #webcrumbs .rounded {
      border-radius: 12px;
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
    #webcrumbs .border-2 {
      border-width: 2px;
    }
    #webcrumbs .border-emerald-200 {
      --tw-border-opacity: 1;
      border-color: rgb(167 243 208 / var(--tw-border-opacity));
    }
    #webcrumbs .border-emerald-300 {
      --tw-border-opacity: 1;
      border-color: rgb(110 231 183 / var(--tw-border-opacity));
    }
    #webcrumbs .border-emerald-600 {
      --tw-border-opacity: 1;
      border-color: rgb(5 150 105 / var(--tw-border-opacity));
    }
    #webcrumbs .bg-emerald-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(5 150 105 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-white {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-gradient-to-br {
      background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    }
    #webcrumbs .bg-gradient-to-r {
      background-image: linear-gradient(to right, var(--tw-gradient-stops));
    }
    #webcrumbs .from-emerald-100 {
      --tw-gradient-from: #d1fae5 var(--tw-gradient-from-position);
      --tw-gradient-to: rgba(209, 250, 229, 0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .from-emerald-50 {
      --tw-gradient-from: #ecfdf5 var(--tw-gradient-from-position);
      --tw-gradient-to: rgba(236, 253, 245, 0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .to-white {
      --tw-gradient-to: #fff var(--tw-gradient-to-position);
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
    #webcrumbs .px-4 {
      padding-left: 16px;
      padding-right: 16px;
    }
    #webcrumbs .px-6 {
      padding-left: 24px;
      padding-right: 24px;
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
    #webcrumbs .text-2xl {
      font-size: 24px;
      line-height: 31.200000000000003px;
    }
    #webcrumbs .text-4xl {
      font-size: 36px;
      line-height: 41.4px;
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
    #webcrumbs .text-emerald-600 {
      --tw-text-opacity: 1;
      color: rgb(5 150 105 / var(--tw-text-opacity));
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
    #webcrumbs .outline-none {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    #webcrumbs .transition-all {
      transition-duration: 0.15s;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    #webcrumbs {
      font-family: Open Sans !important;
      font-size: 16px !important;
    }
    #webcrumbs .hover\:scale-105:hover {
      --tw-scale-x: 1.05;
      --tw-scale-y: 1.05;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs .hover\:border-emerald-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(52 211 153 / var(--tw-border-opacity));
    }
    #webcrumbs .hover\:bg-emerald-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(236 253 245 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:bg-emerald-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(4 120 87 / var(--tw-bg-opacity));
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
    #webcrumbs .focus\:ring-emerald-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(5 150 105 / var(--tw-ring-opacity));
    }
    @media (min-width: 768px) {
      #webcrumbs .md\:p-8 {
        padding: 32px;
      }
      #webcrumbs .md\:px-6 {
        padding-left: 24px;
        padding-right: 24px;
      }
      #webcrumbs .md\:text-2xl {
        font-size: 24px;
        line-height: 31.200000000000003px;
      }
      #webcrumbs .md\:text-3xl {
        font-size: 30px;
        line-height: 36px;
      }
    }
    
  </style>