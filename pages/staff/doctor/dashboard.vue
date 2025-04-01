<template
  ><div id="webcrumbs">
    <div class="w-[1280px] flex font-sans">
      <aside
        class="w-64 bg-emerald-900 p-6 flex flex-col justify-between h-screen sticky top-0"
      >
        <nav class="space-y-4">
          <div class="text-white text-xl font-bold mb-8">Doctor Dashboard</div>
          <a
            href="/doctor/appointments"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
            <span
              class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
              >event</span
            >
            Appointments
          </a>
          <a
            href="/doctor/lab-tests"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
            <span
              class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
              >science</span
            >
            Lab Tests
          </a>
          <a
            href="/doctor/prescriptions"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
            <span
              class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
              >medication</span
            >
            Prescriptions
          </a>
          <a
            href="/doctor/referrals"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
            <span
              class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
              >transfer_within_a_station</span
            >
            Patient Referrals
          </a>
          <a
            href="/doctor/chat"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
            <span
              class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
              >chat</span
            >
            Real-Time Chat
            <span
              class="ml-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full group-hover:bg-emerald-500 transition-colors"
              >1</span
            >
          </a>
          <a
            href="/doctor/notifications"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
            <span
              class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
              >notifications</span
            >
            Notifications
          </a>
          <a
            href="/doctor/inbox"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
            <span
              class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
              >inbox</span
            >
            Inbox
          </a>
          <a
            href="/doctor/attendance"
            class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
          >
            <span
              class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
              >schedule</span
            >
            Attendance
          </a>
        </nav>
        <div
          class="text-emerald-200 text-sm text-center mt-auto pt-6 border-t border-emerald-800"
        >
          © 2025 Assosa General Hospital. All rights reserved.
        </div>
      </aside>
      <main class="flex-1 p-6 bg-emerald-50 min-h-screen">
        <header class="mb-6">
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold text-emerald-900">
              Welcome, Dr. Johnson
            </h1>
            <div class="flex items-center space-x-4">
              <button
                class="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <span class="material-symbols-outlined text-emerald-700"
                  >search</span
                >
              </button>
              <button
                class="relative bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <span class="material-symbols-outlined text-emerald-700"
                  >notifications</span
                >
                <span
                  class="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"
                ></span>
              </button>
              <div
                class="flex items-center space-x-2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Profile"
                  class="w-8 h-8 rounded-full"
                />
                <span class="material-symbols-outlined text-emerald-700"
                  >expand_more</span
                >
              </div>
            </div>
          </div>
        </header>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-3">
            <div
              class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div
                class="bg-gradient-to-r from-emerald-100 to-white -m-6 p-6 rounded-t-xl flex justify-between items-center"
              >
                <h3 class="text-xl font-bold text-emerald-900">
                  Today&#x27;s Appointments
                </h3>
                <button
                  class="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors flex items-center"
                >
                  <span class="material-symbols-outlined align-middle mr-2"
                    >add</span
                  >
                  New Appointment
                </button>
              </div>
              <div class="overflow-x-auto mt-6">
                <table class="w-full">
                  <thead class="bg-emerald-50">
                    <tr>
                      <th class="p-4 text-left text-emerald-700">Patient</th>
                      <th class="p-4 text-left text-emerald-700">Time</th>
                      <th class="p-4 text-left text-emerald-700">Reason</th>
                      <th class="p-4 text-left text-emerald-700">Status</th>
                      <th class="p-4 text-left text-emerald-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="border-b border-emerald-100 hover:bg-emerald-50 transition-colors"
                    >
                      <td class="p-4 flex items-center space-x-2">
                        <img
                          src="https://randomuser.me/api/portraits/women/2.jpg"
                          alt="Patient"
                          class="w-8 h-8 rounded-full"
                        />
                        <span>Patient 1001</span>
                      </td>
                      <td class="p-4">09:00 AM</td>
                      <td class="p-4">Annual Checkup</td>
                      <td class="p-4">
                        <span
                          class="px-3 py-1 rounded-full bg-amber-100 text-amber-800"
                          >Pending</span
                        >
                      </td>
                      <td class="p-4">
                        <button
                          class="text-emerald-600 hover:text-emerald-700 p-1 hover:bg-emerald-100 rounded-full transition-colors"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                      </td>
                    </tr>
                    <tr
                      class="border-b border-emerald-100 hover:bg-emerald-50 transition-colors"
                    >
                      <td class="p-4 flex items-center space-x-2">
                        <img
                          src="https://randomuser.me/api/portraits/men/3.jpg"
                          alt="Patient"
                          class="w-8 h-8 rounded-full"
                        />
                        <span>Patient 1002</span>
                      </td>
                      <td class="p-4">10:30 AM</td>
                      <td class="p-4">Diabetes Follow-up</td>
                      <td class="p-4">
                        <span
                          class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800"
                          >Completed</span
                        >
                      </td>
                      <td class="p-4">
                        <button
                          class="text-emerald-600 hover:text-emerald-700 p-1 hover:bg-emerald-100 rounded-full transition-colors"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                      </td>
                    </tr>
                    <tr
                      class="border-b border-emerald-100 hover:bg-emerald-50 transition-colors"
                    >
                      <td class="p-4 flex items-center space-x-2">
                        <img
                          src="https://randomuser.me/api/portraits/women/4.jpg"
                          alt="Patient"
                          class="w-8 h-8 rounded-full"
                        />
                        <span>Patient 1003</span>
                      </td>
                      <td class="p-4">11:45 AM</td>
                      <td class="p-4">Chest Pain</td>
                      <td class="p-4">
                        <span
                          class="px-3 py-1 rounded-full bg-red-100 text-red-800"
                          >Urgent</span
                        >
                      </td>
                      <td class="p-4">
                        <button
                          class="text-emerald-600 hover:text-emerald-700 p-1 hover:bg-emerald-100 rounded-full transition-colors"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="lg:col-span-2">
            <div
              class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div
                class="bg-gradient-to-r from-emerald-100 to-white -m-6 p-6 rounded-t-xl"
              >
                <h3 class="text-xl font-bold text-emerald-900">
                  Order Lab Test
                </h3>
              </div>
              <div class="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-emerald-700 mb-2">Patient ID</label>
                  <input
                    type="number"
                    class="border border-emerald-200 rounded-lg w-full p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label class="block text-emerald-700 mb-2">Test Name</label>
                  <input
                    type="text"
                    class="border border-emerald-200 rounded-lg w-full p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>
                <div class="col-span-2">
                  <label class="block text-emerald-700 mb-2">Notes</label>
                  <textarea
                    class="border border-emerald-200 rounded-lg w-full p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  class="col-span-2 bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors flex items-center justify-center mt-2"
                >
                  <span class="material-symbols-outlined mr-2">send</span>
                  Submit Order
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div
                class="bg-gradient-to-r from-emerald-100 to-white -m-6 p-6 rounded-t-xl"
              >
                <h3 class="text-xl font-bold text-emerald-900">At a Glance</h3>
              </div>
              <div class="mt-6 space-y-4">
                <div
                  class="flex justify-between items-center p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
                >
                  <div class="flex items-center">
                    <span
                      class="material-symbols-outlined text-emerald-600 p-2 bg-white rounded-full mr-3"
                      >people</span
                    >
                    <span>Patients Today</span>
                  </div>
                  <span class="font-bold text-lg">12</span>
                </div>
                <div
                  class="flex justify-between items-center p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
                >
                  <div class="flex items-center">
                    <span
                      class="material-symbols-outlined text-amber-600 p-2 bg-white rounded-full mr-3"
                      >science</span
                    >
                    <span>Lab Results Pending</span>
                  </div>
                  <span class="font-bold text-lg">5</span>
                </div>
                <div
                  class="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div class="flex items-center">
                    <span
                      class="material-symbols-outlined text-blue-600 p-2 bg-white rounded-full mr-3"
                      >inbox</span
                    >
                    <span>Unread Messages</span>
                  </div>
                  <span class="font-bold text-lg">3</span>
                </div>
                <div
                  class="flex justify-between items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <div class="flex items-center">
                    <span
                      class="material-symbols-outlined text-red-600 p-2 bg-white rounded-full mr-3"
                      >warning</span
                    >
                    <span>Urgent Cases</span>
                  </div>
                  <span class="font-bold text-lg">1</span>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-3">
            <div
              class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow h-[600px] flex flex-col"
            >
              <div
                class="bg-gradient-to-r from-emerald-100 to-white -m-6 p-6 rounded-t-xl flex justify-between items-center"
              >
                <h3 class="text-xl font-bold text-emerald-900">Patient Chat</h3>
                <div
                  class="flex items-center bg-white rounded-full px-3 py-1 shadow"
                >
                  <img
                    src="https://randomuser.me/api/portraits/women/4.jpg"
                    alt="Patient"
                    class="w-8 h-8 rounded-full mr-2"
                  />
                  <span class="font-medium">Patient 1003</span>
                  <span class="ml-2 h-2 w-2 bg-green-500 rounded-full"></span>
                </div>
              </div>
              <div class="flex-1 overflow-y-auto p-4 space-y-4">
                <div class="flex">
                  <div class="p-4 rounded-xl max-w-[70%] bg-gray-100">
                    <p>
                      Good morning doctor, I&#x27;m still experiencing chest
                      pain despite the medication you prescribed yesterday.
                    </p>
                    <p class="text-xs text-gray-600 mt-2">09:15 AM</p>
                  </div>
                </div>
                <div class="flex justify-end">
                  <div class="p-4 rounded-xl max-w-[70%] bg-emerald-100">
                    <p>
                      I&#x27;m sorry to hear that. Could you rate the pain on a
                      scale of 1-10 and describe if it&#x27;s constant or comes
                      and goes?
                    </p>
                    <p class="text-xs text-emerald-600 mt-2">09:18 AM</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="p-4 rounded-xl max-w-[70%] bg-gray-100">
                    <p>
                      It&#x27;s about a 7 out of 10, and it&#x27;s constant but
                      gets worse when I try to take a deep breath or lie down.
                    </p>
                    <p class="text-xs text-gray-600 mt-2">09:20 AM</p>
                  </div>
                </div>
                <div class="flex justify-end">
                  <div class="p-4 rounded-xl max-w-[70%] bg-emerald-100">
                    <p>
                      Given these symptoms, I&#x27;d like you to come in right
                      away. I&#x27;ve marked your case as urgent and will see
                      you as soon as you arrive.
                    </p>
                    <p class="text-xs text-emerald-600 mt-2">09:22 AM</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="p-4 rounded-xl max-w-[70%] bg-gray-100">
                    <p>
                      Thank you, doctor. I&#x27;ll be there in about 30 minutes.
                    </p>
                    <p class="text-xs text-gray-600 mt-2">09:24 AM</p>
                  </div>
                </div>
              </div>
              <div class="border-t border-emerald-100 pt-4">
                <div class="flex gap-4">
                  <input
                    type="text"
                    class="border border-emerald-200 rounded-lg flex-1 p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="Type your message..."
                  />
                  <button
                    class="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors flex items-center"
                  >
                    <span class="material-symbols-outlined mr-2">send</span>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div></template
>

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
  #webcrumbs .sticky {
    position: sticky;
  }
  #webcrumbs .right-0 {
    right: 0;
  }
  #webcrumbs .top-0 {
    top: 0;
  }
  #webcrumbs .col-span-2 {
    grid-column: span 2 / span 2;
  }
  #webcrumbs .-m-6 {
    margin: -24px;
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
  #webcrumbs .ml-2 {
    margin-left: 8px;
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
  #webcrumbs .h-2 {
    height: 8px;
  }
  #webcrumbs .h-3 {
    height: 12px;
  }
  #webcrumbs .h-8 {
    height: 32px;
  }
  #webcrumbs .h-\[600px\] {
    height: 600px;
  }
  #webcrumbs .h-screen {
    height: 100vh;
  }
  #webcrumbs .min-h-screen {
    min-height: 100vh;
  }
  #webcrumbs .w-2 {
    width: 8px;
  }
  #webcrumbs .w-3 {
    width: 12px;
  }
  #webcrumbs .w-64 {
    width: 256px;
  }
  #webcrumbs .w-8 {
    width: 32px;
  }
  #webcrumbs .w-\[1280px\] {
    width: 1280px;
  }
  #webcrumbs .w-full {
    width: 100%;
  }
  #webcrumbs .max-w-\[70\%\] {
    max-width: 70%;
  }
  #webcrumbs .flex-1 {
    flex: 1 1 0%;
  }
  #webcrumbs .cursor-pointer {
    cursor: pointer;
  }
  #webcrumbs .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
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
  #webcrumbs .gap-6 {
    gap: 24px;
  }
  #webcrumbs :is(.space-x-2 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-left: calc(8px * (1 - var(--tw-space-x-reverse)));
    margin-right: calc(8px * var(--tw-space-x-reverse));
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
  #webcrumbs .overflow-x-auto {
    overflow-x: auto;
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
  #webcrumbs .rounded-t-xl {
    border-top-left-radius: 36px;
    border-top-right-radius: 36px;
  }
  #webcrumbs .border {
    border-width: 1px;
  }
  #webcrumbs .border-b {
    border-bottom-width: 1px;
  }
  #webcrumbs .border-t {
    border-top-width: 1px;
  }
  #webcrumbs .border-emerald-100 {
    --tw-border-opacity: 1;
    border-color: rgb(209 250 229 / var(--tw-border-opacity));
  }
  #webcrumbs .border-emerald-200 {
    --tw-border-opacity: 1;
    border-color: rgb(167 243 208 / var(--tw-border-opacity));
  }
  #webcrumbs .border-emerald-800 {
    --tw-border-opacity: 1;
    border-color: rgb(6 95 70 / var(--tw-border-opacity));
  }
  #webcrumbs .bg-amber-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(254 243 199 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-amber-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(255 251 235 / var(--tw-bg-opacity));
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
  #webcrumbs .bg-gray-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-green-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(34 197 94 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-red-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(254 226 226 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-red-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(254 242 242 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-red-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(239 68 68 / var(--tw-bg-opacity));
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
  #webcrumbs .p-1 {
    padding: 4px;
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
  #webcrumbs .px-4 {
    padding-left: 16px;
    padding-right: 16px;
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
  #webcrumbs .py-3 {
    padding-bottom: 12px;
    padding-top: 12px;
  }
  #webcrumbs .pt-4 {
    padding-top: 16px;
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
  #webcrumbs .text-amber-600 {
    --tw-text-opacity: 1;
    color: rgb(217 119 6 / var(--tw-text-opacity));
  }
  #webcrumbs .text-amber-800 {
    --tw-text-opacity: 1;
    color: rgb(146 64 14 / var(--tw-text-opacity));
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
  #webcrumbs .shadow-md {
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
      0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
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
  #webcrumbs .transition-transform {
    transition-duration: 0.15s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  #webcrumbs .duration-200 {
    transition-duration: 0.2s;
  }
  #webcrumbs {
    font-family: Open Sans !important;
    font-size: 16px !important;
  }
  #webcrumbs .hover\:bg-amber-100:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(254 243 199 / var(--tw-bg-opacity));
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
  #webcrumbs .hover\:bg-red-100:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(254 226 226 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:text-emerald-700:hover {
    --tw-text-opacity: 1;
    color: rgb(4 120 87 / var(--tw-text-opacity));
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
  #webcrumbs :is(.group:hover .group-hover\:scale-110) {
    --tw-scale-x: 1.1;
    --tw-scale-y: 1.1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  #webcrumbs :is(.group:hover .group-hover\:bg-emerald-500) {
    --tw-bg-opacity: 1;
    background-color: rgb(16 185 129 / var(--tw-bg-opacity));
  }
  @media (min-width: 1024px) {
    #webcrumbs .lg\:col-span-2 {
      grid-column: span 2 / span 2;
    }
    #webcrumbs .lg\:col-span-3 {
      grid-column: span 3 / span 3;
    }
    #webcrumbs .lg\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
