<template>
  <div id="webcrumbs">
    <div class="w-full relative">
      <a href="#"><button class="absolute bottom-8 right-8 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-all hover:scale-110 z-50">
        <span class="material-symbols-outlined">arrow_upward</span>
      </button> </a>
    <nav class="bg-gradient-to-r from-emerald-100 to-white py-4 px-4 md:px-6 shadow-lg">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div class="flex items-center space-x-2">
          <span class="material-symbols-outlined text-2xl md:text-3xl text-emerald-600">local_hospital</span>
          <h1 class="text-xl md:text-2xl font-bold text-emerald-600"><a href="/">Assosa General Hospital</a></h1>
        </div>
        <div class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <details class="relative w-full md:w-auto">
            <summary class="list-none hover:text-emerald-600 cursor-pointer transition-colors">Services</summary>
            <div class="absolute bg-white shadow-xl rounded-lg p-4 w-full md:w-48 z-10">
              <a class="block py-2 px-4 hover:bg-emerald-50 rounded transition-colors">General Checkups</a>
              <a class="block py-2 px-4 hover:bg-emerald-50 rounded transition-colors">Surgery</a>
              <a class="block py-2 px-4 hover:bg-emerald-50 rounded transition-colors">Emergency Care</a>
              <a class="block py-2 px-4 hover:bg-emerald-50 rounded transition-colors">Pediatrics</a>
            </div>
          </details>
          <a class="w-full md:w-auto hover:text-emerald-600 transition-colors" href="/about">About</a>
          <a href="#appointment-form"><button class="w-full md:w-auto bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors transform hover:scale-105"> Make Appointment </button></a>
          <a href="/signin" class="w-full md:w-auto border-2 border-emerald-600 px-6 py-2 rounded-full hover:bg-emerald-50 transition-colors">Sign In</a>
        </div>
      </div>
    </nav>

    <header class="relative h-[400px] md:h-[500px] bg-gradient-to-r from-emerald-50 to-white">
      <img src="assets\imgs\image1.png" class="absolute right-0 h-full w-full md:w-1/2 object-cover opacity-20 md:opacity-100"/>
      <div class="absolute left-0 top-0 h-full w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Welcome to Assosa General Hospital</h2>
        <p class="text-base md:text-lg mb-8">Providing world-class healthcare services to the community of Assosa City and beyond.</p>
        <a href="#appointment-form"><button class="bg-emerald-600 text-white w-full md:w-48 py-3 rounded-full hover:bg-emerald-700 transition-colors transform hover:scale-105"> Book an Appointment </button></a>
      </div>
    </header>

    <main class="py-8 md:py-12 px-4 md:px-6">
      <section class="mb-12 md:mb-16">
        <h3 class="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Our Services</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span class="material-symbols-outlined text-3xl md:text-4xl text-emerald-600 mb-4">medical_services</span>
            <h4 class="text-lg md:text-xl font-semibold mb-2">Emergency Care</h4>
            <p>Professional healthcare services provided by experienced medical staff.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span class="material-symbols-outlined text-3xl md:text-4xl text-emerald-600 mb-4">medical_services</span>
            <h4 class="text-lg md:text-xl font-semibold mb-2">Surgery</h4>
            <p>Professional healthcare services provided by experienced medical staff.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span class="material-symbols-outlined text-3xl md:text-4xl text-emerald-600 mb-4">medical_services</span>
            <h4 class="text-lg md:text-xl font-semibold mb-2">Pediatrics</h4>
            <p>Professional healthcare services provided by experienced medical staff.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <span class="material-symbols-outlined text-3xl md:text-4xl text-emerald-600 mb-4">medical_services</span>
            <h4 class="text-lg md:text-xl font-semibold mb-2">Laboratory</h4>
            <p>Professional healthcare services provided by experienced medical staff.</p>
          </div>
        </div>
      </section>

      <section class="bg-emerald-50 rounded-2xl p-6 md:p-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
          <div class="w-full md:w-1/2" id="appointment-form">
            <h3 class="text-xl md:text-2xl font-bold mb-4">How to Make an Appointment</h3>
            <p class="text-base md:text-lg mb-4">To book an appointment with one of our specialists, please follow these steps:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>1. <strong>Log in</strong> to your account.</li>
              <li>2. <strong>Select a service</strong> from the available options (e.g., General Checkup, Surgery, Pediatrics, etc.).</li>
              <li>3. <strong>Choose a doctor</strong> based on the service you require.</li>
              <li>4. <strong>Pick a date and time</strong> that works for you from the available slots.</li>
              <li>5. <strong>Provide a reason</strong> for your visit in the provided text area.</li>
              <li>6. <strong>Submit the appointment</strong> for approval and confirmation.</li>
            </ul>
            <p class="mt-4">Please <a href="/signin" class="text-emerald-600 font-semibold hover:underline">log in</a> to proceed with booking an appointment.</p>
            <p class="mt-4">Don't have an account? <a href="/signup" class="text-emerald-600 font-semibold hover:underline">Sign up</a> to create one.</p>
          </div>
          <img src="assets\imgs\image2.png" class="w-full md:w-1/3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" alt="Friendly doctor with stethoscope"/>
        </div>
      </section>
    </main>

    <footer class="bg-emerald-900 text-white py-6 px-4 md:px-6 mt-8 md:mt-12">
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
    #webcrumbs .absolute {
      position: absolute;
    }
    #webcrumbs .relative {
      position: relative;
    }
    #webcrumbs .bottom-8 {
      bottom: 32px;
    }
    #webcrumbs .left-0 {
      left: 0;
    }
    #webcrumbs .right-0 {
      right: 0;
    }
    #webcrumbs .right-8 {
      right: 32px;
    }
    #webcrumbs .top-0 {
      top: 0;
    }
    #webcrumbs .z-10 {
      z-index: 10;
    }
    #webcrumbs .z-50 {
      z-index: 50;
    }
    #webcrumbs .mb-12 {
      margin-bottom: 48px;
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
    #webcrumbs .mt-8 {
      margin-top: 32px;
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
    #webcrumbs .h-32 {
      height: 128px;
    }
    #webcrumbs .h-\[400px\] {
      height: 400px;
    }
    #webcrumbs .h-full {
      height: 100%;
    }
    #webcrumbs .w-full {
      width: 100%;
    }
    #webcrumbs .transform {
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
    #webcrumbs :is(.space-y-6 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-y-reverse: 0;
      margin-bottom: calc(24px * var(--tw-space-y-reverse));
      margin-top: calc(24px * (1 - var(--tw-space-y-reverse)));
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
    #webcrumbs .rounded-xl {
      border-radius: 36px;
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
    #webcrumbs .border-emerald-600 {
      --tw-border-opacity: 1;
      border-color: rgb(5 150 105 / var(--tw-border-opacity));
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
    #webcrumbs .from-emerald-50 {
      --tw-gradient-from: #ecfdf5 var(--tw-gradient-from-position);
      --tw-gradient-to: rgba(236, 253, 245, 0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .to-white {
      --tw-gradient-to: #fff var(--tw-gradient-to-position);
    }
    #webcrumbs .object-cover {
      object-fit: cover;
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
    #webcrumbs .py-6 {
      padding-bottom: 24px;
      padding-top: 24px;
    }
    #webcrumbs .py-8 {
      padding-bottom: 32px;
      padding-top: 32px;
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
    #webcrumbs .text-base {
      font-size: 16px;
      line-height: 25.6px;
    }
    #webcrumbs .text-lg {
      font-size: 18px;
      line-height: 27px;
    }
    #webcrumbs .text-xl {
      font-size: 20px;
      line-height: 28px;
    }
    #webcrumbs .font-bold {
      font-weight: 700;
    }
    #webcrumbs .font-semibold {
      font-weight: 600;
    }
    #webcrumbs .text-emerald-600 {
      --tw-text-opacity: 1;
      color: rgb(5 150 105 / var(--tw-text-opacity));
    }
    #webcrumbs .text-white {
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    #webcrumbs .opacity-20 {
      opacity: 0.2;
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
    #webcrumbs .hover\:scale-110:hover {
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs .hover\:scale-110:hover {
      --tw-scale-x: 1.1;
      --tw-scale-y: 1.1;
    }
    #webcrumbs .hover\:bg-emerald-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(236 253 245 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:bg-emerald-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(4 120 87 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:text-emerald-600:hover {
      --tw-text-opacity: 1;
      color: rgb(5 150 105 / var(--tw-text-opacity));
    }
    #webcrumbs .hover\:shadow-xl:hover {
      --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 8px 10px -6px rgba(0, 0, 0, 0.1);
      --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
        0 8px 10px -6px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .focus\:ring-2:focus {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
        var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
        calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
        var(--tw-shadow, 0 0 #0000);
    }
    #webcrumbs .focus\:ring-emerald-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(5 150 105 / var(--tw-ring-opacity));
    }
    @media (min-width: 768px) {
      #webcrumbs .md\:mb-16 {
        margin-bottom: 64px;
      }
      #webcrumbs .md\:mb-8 {
        margin-bottom: 32px;
      }
      #webcrumbs .md\:mt-12 {
        margin-top: 48px;
      }
      #webcrumbs .md\:h-\[500px\] {
        height: 500px;
      }
      #webcrumbs .md\:w-1\/2 {
        width: 50%;
      }
      #webcrumbs .md\:w-1\/3 {
        width: 33.333333%;
      }
      #webcrumbs .md\:w-48 {
        width: 192px;
      }
      #webcrumbs .md\:w-auto {
        width: auto;
      }
      #webcrumbs .md\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      #webcrumbs .md\:flex-row {
        flex-direction: row;
      }
      #webcrumbs .md\:items-center {
        align-items: center;
      }
      #webcrumbs .md\:justify-between {
        justify-content: space-between;
      }
      #webcrumbs .md\:gap-6 {
        gap: 24px;
      }
      #webcrumbs :is(.md\:space-x-6 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-x-reverse: 0;
        margin-left: calc(24px * (1 - var(--tw-space-x-reverse)));
        margin-right: calc(24px * var(--tw-space-x-reverse));
      }
      #webcrumbs :is(.md\:space-y-0 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(0px * var(--tw-space-y-reverse));
        margin-top: calc(0px * (1 - var(--tw-space-y-reverse)));
      }
      #webcrumbs .md\:p-8 {
        padding: 32px;
      }
      #webcrumbs .md\:px-12 {
        padding-left: 48px;
        padding-right: 48px;
      }
      #webcrumbs .md\:px-6 {
        padding-left: 24px;
        padding-right: 24px;
      }
      #webcrumbs .md\:py-12 {
        padding-bottom: 48px;
        padding-top: 48px;
      }
      #webcrumbs .md\:text-2xl {
        font-size: 24px;
        line-height: 31.200000000000003px;
      }
      #webcrumbs .md\:text-3xl {
        font-size: 30px;
        line-height: 36px;
      }
      #webcrumbs .md\:text-4xl {
        font-size: 36px;
        line-height: 41.4px;
      }
      #webcrumbs .md\:text-lg {
        font-size: 18px;
        line-height: 27px;
      }
      #webcrumbs .md\:text-xl {
        font-size: 20px;
        line-height: 28px;
      }
      #webcrumbs .md\:opacity-100 {
        opacity: 1;
      }
    }
    @media (min-width: 1024px) {
      #webcrumbs .lg\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }
    
  </style>