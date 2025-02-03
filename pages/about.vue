<template>
    <div id="webcrumbs">
        <div class="w-full min-h-screen bg-gradient-to-br from-emerald-50 to-white"> 
            <nav class="bg-gradient-to-r from-emerald-100 to-white py-4 px-4 md:px-6 shadow-lg"> 
                <div class="flex items-center space-x-2"> 
                    <span class="material-symbols-outlined text-2xl md:text-3xl text-emerald-600">local_hospital</span> 
                    <h1 class="text-xl md:text-2xl font-bold text-emerald-600"><a href="/">Assosa General Hospital</a></h1> 
                </div> </nav> <main class="p-4 md:p-8 max-w-7xl mx-auto"> <section class="mb-12"> 
                    <h2 class="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 text-center">About Our Hospital</h2> 
                    <div class="grid md:grid-cols-2 gap-8"> 
                        <div class="space-y-6"> 
                            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"> 
                                <div class="flex items-center mb-4"> 
                                    <span class="material-symbols-outlined text-3xl text-emerald-600 mr-3">history</span> 
                                    <h3 class="text-xl font-semibold">Our History</h3> 
                                </div> 
                                <p class="text-gray-600 leading-relaxed">Established in 1995, Assosa General Hospital has been serving the community with dedication and excellence in healthcare services for over 25 years.</p> 
                            </div> 
                            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"> 
                                <div class="flex items-center mb-4"> 
                                    <span class="material-symbols-outlined text-3xl text-emerald-600 mr-3">psychology</span> 
                                    <h3 class="text-xl font-semibold">Our Mission</h3> 
                                </div> 
                                <p class="text-gray-600 leading-relaxed">To provide exceptional healthcare services with compassion and integrity, ensuring the well-being of our community through innovative medical solutions.</p> 
                            </div> 
                        </div> 
                        <div class="space-y-6"> 
                            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"> 
                                <div class="flex items-center mb-4"> 
                                    <span class="material-symbols-outlined text-3xl text-emerald-600 mr-3">visibility</span> 
                                    <h3 class="text-xl font-semibold">Our Vision</h3> 
                                </div> 
                                <p class="text-gray-600 leading-relaxed">To be the leading healthcare provider in the region, known for excellence in patient care, medical innovation, and community service.</p> 
                            </div> 
                            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"> 
                                <div class="flex items-center mb-4"> 
                                    <span class="material-symbols-outlined text-3xl text-emerald-600 mr-3">business_center</span> 
                                    <h3 class="text-xl font-semibold">Our Services</h3> 
                                </div> 
                                <ul class="text-gray-600 space-y-2"> 
                                        <li class="flex items-center"> 
                                            <span class="material-symbols-outlined text-emerald-500 mr-2">check_circle</span> Emergency Care 
                                        </li> <li class="flex items-center"> 
                                            <span class="material-symbols-outlined text-emerald-500 mr-2">check_circle</span> Specialized Treatment 
                                        </li> 
                                            <li class="flex items-center"> <span class="material-symbols-outlined text-emerald-500 mr-2">check_circle</span> Modern Facilities 
                                            </li> 
                                        </ul> 
                                    </div> 
                                </div> 
                            </div> 
                        </section> 
                        <section class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"> 
                            <h3 class="text-2xl font-bold text-emerald-800 mb-6 text-center">Our Medical Team</h3> 
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="p-4 text-center"> 
                                <span class="material-symbols-outlined text-5xl text-emerald-600 mb-4">people</span> 
                                <h4 class="text-xl font-semibold mb-2">50+ Doctors</h4> 
                                <p class="text-gray-600">Experienced specialists across various medical fields</p> 
                            </div> 
                            <div class="p-4 text-center"> 
                                <span class="material-symbols-outlined text-5xl text-emerald-600 mb-4">medical_services</span> 
                                <h4 class="text-xl font-semibold mb-2">100+ Nurses</h4> 
                                <p class="text-gray-600">Dedicated nursing staff providing 24/7 care</p> 
                            </div> 
                            <div class="p-4 text-center"> 
                                <span class="material-symbols-outlined text-5xl text-emerald-600 mb-4">health_and_safety</span> 
                                <h4 class="text-xl font-semibold mb-2">20+ Departments</h4> 
                                <p class="text-gray-600">Comprehensive healthcare services under one roof</p> 
                            </div> 
                        </div> 
                    </section> 
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
    #webcrumbs .mb-4 {
      margin-bottom: 16px;
    }
    #webcrumbs .mb-6 {
      margin-bottom: 24px;
    }
    #webcrumbs .mr-2 {
      margin-right: 8px;
    }
    #webcrumbs .mr-3 {
      margin-right: 12px;
    }
    #webcrumbs .flex {
      display: flex;
    }
    #webcrumbs .grid {
      display: grid;
    }
    #webcrumbs .min-h-screen {
      min-height: 100vh;
    }
    #webcrumbs .w-full {
      width: 100%;
    }
    #webcrumbs .max-w-7xl {
      max-width: 80rem;
    }
    #webcrumbs .grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    #webcrumbs .flex-row {
      flex-direction: row;
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
    #webcrumbs .gap-6 {
      gap: 24px;
    }
    #webcrumbs .gap-8 {
      gap: 32px;
    }
    #webcrumbs :is(.space-x-2 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-x-reverse: 0;
      margin-left: calc(8px * (1 - var(--tw-space-x-reverse)));
      margin-right: calc(8px * var(--tw-space-x-reverse));
    }
    #webcrumbs :is(.space-y-2 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-y-reverse: 0;
      margin-bottom: calc(8px * var(--tw-space-y-reverse));
      margin-top: calc(8px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs :is(.space-y-6 > :not([hidden]) ~ :not([hidden])) {
      --tw-space-y-reverse: 0;
      margin-bottom: calc(24px * var(--tw-space-y-reverse));
      margin-top: calc(24px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs .rounded-xl {
      border-radius: 36px;
    }
    #webcrumbs .bg-emerald-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(6 78 59 / var(--tw-bg-opacity));
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
    #webcrumbs .p-4 {
      padding: 16px;
    }
    #webcrumbs .p-6 {
      padding: 24px;
    }
    #webcrumbs .p-8 {
      padding: 32px;
    }
    #webcrumbs .px-4 {
      padding-left: 16px;
      padding-right: 16px;
    }
    #webcrumbs .py-4 {
      padding-bottom: 16px;
      padding-top: 16px;
    }
    #webcrumbs .py-6 {
      padding-bottom: 24px;
      padding-top: 24px;
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
    #webcrumbs .text-5xl {
      font-size: 48px;
      line-height: 52.800000000000004px;
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
    #webcrumbs .leading-relaxed {
      line-height: 1.625;
    }
    #webcrumbs .text-emerald-500 {
      --tw-text-opacity: 1;
      color: rgb(16 185 129 / var(--tw-text-opacity));
    }
    #webcrumbs .text-emerald-600 {
      --tw-text-opacity: 1;
      color: rgb(5 150 105 / var(--tw-text-opacity));
    }
    #webcrumbs .text-emerald-800 {
      --tw-text-opacity: 1;
      color: rgb(6 95 70 / var(--tw-text-opacity));
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
    #webcrumbs {
      font-family: Open Sans !important;
      font-size: 16px !important;
    }
    #webcrumbs .hover\:shadow-xl:hover {
      --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 8px 10px -6px rgba(0, 0, 0, 0.1);
      --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
        0 8px 10px -6px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    @media (min-width: 768px) {
      #webcrumbs .md\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      #webcrumbs .md\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
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
      #webcrumbs .md\:text-4xl {
        font-size: 36px;
        line-height: 41.4px;
      }
    }
    
  </style>