<template>
    <div id="webcrumbs">
      <div class="bg-white"> 
        <div class="flex flex-col md:flex-row"> 
          <aside class="w-full md:w-64 bg-emerald-900 p-6 md:h-screen flex flex-col justify-between"> 
              <nav class="space-y-4"> 
                  <div class="text-white text-xl font-bold mb-8">Patient Dashboard</div> 
                  
                  <a href="/patient/profile" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"> 
                      <span class="material-symbols-outlined mr-2">person</span> Profile 
                  </a> 
                  
                  <a href="/patient/appointments" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"> 
                      <span class="material-symbols-outlined mr-2">event</span> Appointments 
                  </a>
                  
                  <a href="/patient/medical-history" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"> 
                      <span class="material-symbols-outlined mr-2">medical_services</span> Medical History 
                  </a> 
                  
                  <a href="/patient/billing" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"> 
                      <span class="material-symbols-outlined mr-2">receipt</span> Billing 
                  </a> 
                  
                  <a href="/patient/notifications" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"> 
                      <span class="material-symbols-outlined mr-2">notifications</span> Notifications 
                      <span class="ml-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">3</span> 
                  </a> 
                  
                  <a href="/patient/chat" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"> 
                      <span class="material-symbols-outlined mr-2">chat</span> Chat 
                  </a> 
                  
                  <a href="/patient/feedback" class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200"> 
                      <span class="material-symbols-outlined mr-2">comment</span> Feedback 
                  </a> 
              </nav> 
              <div class="text-emerald-200 text-sm text-center mt-auto pt-6 border-t border-emerald-800"> 
                  © 2025 <a href="/">Assosa General Hospital</a>. All rights reserved. 
              </div> 
          </aside>
            <main class="flex-1 p-4 md:p-8 bg-emerald-50"> 
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"> 
                <section class="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-200"> 
                  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6"> 
                    <h2 class="text-lg md:text-xl font-bold mb-4 sm:mb-0">Profile Information</h2> 
                    <button class="w-full sm:w-auto bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-200"> Edit Profile </button> 
                  </div> <div class="space-y-4"> 
                    <div class="flex items-center space-x-4"> 
                      <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-200"> 
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt="Profile" class="w-full h-full object-cover hover:scale-110 transition-all duration-200"/> 
                      </div> 
                      <div> 
                        <h3 class="font-semibold">John Doe</h3> 
                        <p class="text-gray-600">john.doe@email.com</p> 
                      </div> 
                    </div> 
                  </div> 
                </section> 
                <section class="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-200"> 
                  <div class="bg-gradient-to-r from-emerald-100 to-white p-4 rounded-t-xl"> 
                    <h2 class="text-lg md:text-xl font-bold">Medical History</h2> 
                  </div> 
                  <div class="mt-4 overflow-x-auto"> 
                    <table class="w-full"> 
                      <thead> 
                        <tr> 
                          <th class="text-left p-2">Date</th> 
                          <th class="text-left p-2">Type</th> 
                          <th class="text-left p-2">Status</th> 
                        </tr> 
                      </thead> 
                      <tbody> 
                        <tr class="hover:bg-emerald-50"> 
                          <td class="p-2">2024-01-15</td> 
                          <td class="p-2">Check-up</td> 
                          <td class="p-2"> 
                            <span class="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-sm"> Completed </span> 
                          </td> 
                        </tr> 
                      </tbody> 
                    </table> 
                  </div> 
                </section> 
                <section class="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-200"> 
                  <h2 class="text-lg md:text-xl font-bold mb-6">Billing History</h2> 
                  <div class="overflow-x-auto"> 
                    <table class="w-full"> 
                      <thead> 
                        <tr> 
                          <th class="text-left p-2">Invoice</th> <th class="text-left p-2">Amount</th> 
                          <th class="text-left p-2">Status</th> <th class="text-left p-2">Action</th> 
                        </tr> 
                      </thead> 
                      <tbody> 
                        <tr class="hover:bg-emerald-50"> 
                          <td class="p-2">#INV-001</td> 
                          <td class="p-2">$150.00</td> 
                          <td class="p-2"> 
                            <span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm"> Unpaid </span> 
                          </td> 
                          <td class="p-2"> 
                            <button class="bg-emerald-600 text-white px-3 py-1 rounded-lg hover:bg-emerald-700 transition-colors duration-200"> Pay Now </button> 
                          </td> 
                        </tr> 
                      </tbody> 
                    </table> 
                  </div> 
                </section> 
                <section class="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-200 md:col-span-2 lg:col-span-3"> 
                  <h2 class="text-lg md:text-xl font-bold mb-6">Notifications</h2> 
                  <div class="space-y-4"> 
                    <div class="flex items-center p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-200"> 
                      <span class="material-symbols-outlined text-emerald-600 mr-4">calendar_today</span> 
                      <div class="flex-1"> 
                        <h3 class="font-semibold">Appointment Reminder</h3> 
                        <p class="text-sm text-gray-600">Your check-up is scheduled for tomorrow at 10:00 AM</p> 
                        <span class="text-xs text-gray-500">1 hour ago</span> 
                      </div> 
                    </div> 
                    <div class="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"> 
                      <span class="material-symbols-outlined text-blue-600 mr-4">medication</span> <div class="flex-1"> 
                        <h3 class="font-semibold">Prescription Refill</h3> 
                        <p class="text-sm text-gray-600">Your prescription is ready for pickup</p> 
                        <span class="text-xs text-gray-500">3 hours ago</span> 
                      </div> 
                    </div> 
                    <div class="flex items-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-200"> 
                      <span class="material-symbols-outlined text-yellow-600 mr-4">payment</span> 
                      <div class="flex-1"> 
                        <h3 class="font-semibold">Payment Due</h3> 
                        <p class="text-sm text-gray-600">Payment for last visit is due in 3 days</p> 
                        <span class="text-xs text-gray-500">1 day ago</span> 
                      </div> 
                    </div> 
                  </div> 
                </section> 
              </div> 
            </main> 
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
    #webcrumbs .mr-2 {
      margin-right: 8px;
    }
    #webcrumbs .mr-4 {
      margin-right: 16px;
    }
    #webcrumbs .mt-4 {
      margin-top: 16px;
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
    #webcrumbs .h-16 {
      height: 64px;
    }
    #webcrumbs .h-full {
      height: 100%;
    }
    #webcrumbs .w-16 {
      width: 64px;
    }
    #webcrumbs .w-full {
      width: 100%;
    }
    #webcrumbs .flex-1 {
      flex: 1 1 0%;
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
    #webcrumbs .justify-between {
      justify-content: space-between;
    }
    #webcrumbs .gap-4 {
      gap: 16px;
    }
    #webcrumbs :is(.space-x-4 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-x-reverse: 0;
      margin-left: calc(16px * (1 - var(--tw-space-x-reverse)));
      margin-right: calc(16px * var(--tw-space-x-reverse));
    }
    #webcrumbs :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-y-reverse: 0;
      margin-bottom: calc(16px * var(--tw-space-y-reverse));
      margin-top: calc(16px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs .overflow-hidden {
      overflow: hidden;
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
    #webcrumbs .rounded-xl {
      border-radius: 36px;
    }
    #webcrumbs .rounded-t-xl {
      border-top-left-radius: 36px;
      border-top-right-radius: 36px;
    }
    #webcrumbs .border-2 {
      border-width: 2px;
    }
    #webcrumbs .border-t {
      border-top-width: 1px;
    }
    #webcrumbs .border-emerald-200 {
      --tw-border-opacity: 1;
      border-color: rgb(167 243 208 / var(--tw-border-opacity));
    }
    #webcrumbs .border-emerald-800 {
      --tw-border-opacity: 1;
      border-color: rgb(6 95 70 / var(--tw-border-opacity));
    }
    #webcrumbs .bg-blue-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(239 246 255 / var(--tw-bg-opacity));
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
    #webcrumbs .bg-red-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 226 226 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-white {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }
    #webcrumbs .bg-yellow-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 252 232 / var(--tw-bg-opacity));
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
      padding: 8px;
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
    #webcrumbs .pt-6 {
      padding-top: 24px;
    }
    #webcrumbs .text-left {
      text-align: left;
    }
    #webcrumbs .text-center {
      text-align: center;
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
    #webcrumbs .text-emerald-800 {
      --tw-text-opacity: 1;
      color: rgb(6 95 70 / var(--tw-text-opacity));
    }
    #webcrumbs .text-gray-500 {
      --tw-text-opacity: 1;
      color: rgb(107 114 128 / var(--tw-text-opacity));
    }
    #webcrumbs .text-gray-600 {
      --tw-text-opacity: 1;
      color: rgb(75 85 99 / var(--tw-text-opacity));
    }
    #webcrumbs .text-red-800 {
      --tw-text-opacity: 1;
      color: rgb(153 27 27 / var(--tw-text-opacity));
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
    #webcrumbs .hover\:border-emerald-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(52 211 153 / var(--tw-border-opacity));
    }
    #webcrumbs .hover\:bg-blue-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(219 234 254 / var(--tw-bg-opacity));
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
    #webcrumbs .hover\:bg-yellow-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(254 249 195 / var(--tw-bg-opacity));
    }
    #webcrumbs .hover\:shadow-xl:hover {
      --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 8px 10px -6px rgba(0, 0, 0, 0.1);
      --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
        0 8px 10px -6px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    @media (min-width: 640px) {
      #webcrumbs .sm\:mb-0 {
        margin-bottom: 0;
      }
      #webcrumbs .sm\:w-auto {
        width: auto;
      }
      #webcrumbs .sm\:flex-row {
        flex-direction: row;
      }
      #webcrumbs .sm\:items-center {
        align-items: center;
      }
    }
    @media (min-width: 768px) {
      #webcrumbs .md\:col-span-2 {
        grid-column: span 2 / span 2;
      }
      #webcrumbs .md\:h-screen {
        height: 100vh;
      }
      #webcrumbs .md\:w-64 {
        width: 256px;
      }
      #webcrumbs .md\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      #webcrumbs .md\:flex-row {
        flex-direction: row;
      }
      #webcrumbs .md\:gap-8 {
        gap: 32px;
      }
      #webcrumbs .md\:p-6 {
        padding: 24px;
      }
      #webcrumbs .md\:p-8 {
        padding: 32px;
      }
      #webcrumbs .md\:text-xl {
        font-size: 20px;
        line-height: 28px;
      }
    }
    @media (min-width: 1024px) {
      #webcrumbs .lg\:col-span-3 {
        grid-column: span 3 / span 3;
      }
      #webcrumbs .lg\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
    
  </style>