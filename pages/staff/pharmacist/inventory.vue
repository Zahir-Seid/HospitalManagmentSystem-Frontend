<template
  ><div id="webcrumbs">
    <div class="w-[1280px] font-sans">
      <div class="flex min-h-screen">
        <aside
          class="w-64 bg-emerald-900 p-6 flex flex-col justify-between h-screen sticky top-0"
        >
          <nav class="space-y-4">
            <div class="text-white text-xl font-bold mb-8 flex items-center">
              <span class="material-symbols-outlined mr-2 text-2xl"
                >local_pharmacy</span
              >
              Pharmacy Dashboard
            </div>
            <a
              href="/pharmacy/prescriptions"
              class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
            >
              <span
                class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
                >medication</span
              >
              Prescriptions
            </a>
            <a
              href="/pharmacy/drugs"
              class="flex items-center text-white bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
            >
              <span
                class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
                >vaccines</span
              >
              Drug Inventory
            </a>
            <div class="pt-4 border-t border-emerald-800 mt-4"></div>
            <a
              href="/pharmacy/notifications"
              class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
            >
              <span
                class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
                >notifications</span
              >
              Notifications
              <span
                class="ml-auto bg-emerald-600 text-white text-xs px-2 py-1 rounded-full group-hover:bg-white group-hover:text-emerald-800 transition-colors"
                >3</span
              >
            </a>
            <a
              href="/pharmacy/inbox"
              class="flex items-center text-white hover:bg-emerald-800 p-2 rounded-lg transition-all duration-200 group"
            >
              <span
                class="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform"
                >inbox</span
              >
              Inbox
            </a>
            <a
              href="/pharmacy/attendance"
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
        <main class="flex-1 p-6 bg-gray-50">
          <header class="mb-6">
            <div class="flex justify-between items-center">
              <h1 class="text-2xl font-bold text-emerald-900">
                Drug Inventory Management
              </h1>
              <div class="flex items-center space-x-4">
                <div class="relative group">
                  <button
                    class="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    <span class="material-symbols-outlined text-emerald-600"
                      >notifications</span
                    >
                    <span
                      class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                      >3</span
                    >
                  </button>
                  <div
                    class="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10"
                  >
                    <h4 class="font-bold text-emerald-900 mb-2">
                      Recent Notifications
                    </h4>
                    <div class="space-y-2">
                      <div
                        class="p-2 hover:bg-emerald-50 rounded-lg transition-colors"
                      >
                        <p class="text-sm font-medium">
                          Low stock alert for Amoxicillin
                        </p>
                        <p class="text-xs text-gray-500">10 minutes ago</p>
                      </div>
                      <div
                        class="p-2 hover:bg-emerald-50 rounded-lg transition-colors"
                      >
                        <p class="text-sm font-medium">
                          New prescription from Dr. Chen
                        </p>
                        <p class="text-xs text-gray-500">1 hour ago</p>
                      </div>
                      <div
                        class="p-2 hover:bg-emerald-50 rounded-lg transition-colors"
                      >
                        <p class="text-sm font-medium">
                          Medication expiry reminder
                        </p>
                        <p class="text-xs text-gray-500">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white p-1 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <img
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    alt="User"
                    class="h-8 w-8 rounded-full"
                  />
                </div>
              </div>
            </div>
          </header>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div
              class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 border-l-4 border-emerald-500"
            >
              <div class="flex items-center">
                <div class="p-3 bg-emerald-100 rounded-lg">
                  <span class="material-symbols-outlined text-emerald-600"
                    >vaccines</span
                  >
                </div>
                <div class="ml-4">
                  <p class="text-sm text-gray-500">Total Medications</p>
                  <h3 class="text-2xl font-bold">124</h3>
                </div>
              </div>
            </div>
            <div
              class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 border-l-4 border-amber-500"
            >
              <div class="flex items-center">
                <div class="p-3 bg-amber-100 rounded-lg">
                  <span class="material-symbols-outlined text-amber-600"
                    >inventory</span
                  >
                </div>
                <div class="ml-4">
                  <p class="text-sm text-gray-500">Low Stock Items</p>
                  <h3 class="text-2xl font-bold">7</h3>
                </div>
              </div>
            </div>
            <div
              class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 border-l-4 border-red-500"
            >
              <div class="flex items-center">
                <div class="p-3 bg-red-100 rounded-lg">
                  <span class="material-symbols-outlined text-red-600"
                    >event_busy</span
                  >
                </div>
                <div class="ml-4">
                  <p class="text-sm text-gray-500">Expiring Medications</p>
                  <h3 class="text-2xl font-bold">12</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div
              class="bg-gradient-to-r from-emerald-100 to-white -m-6 p-6 rounded-t-xl mb-6"
            >
              <div class="flex justify-between items-center flex-wrap gap-4">
                <h3 class="text-xl font-bold text-emerald-900">
                  Drug Inventory
                </h3>
                <div class="flex gap-4">
                  <div class="relative">
                    <span
                      class="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >search</span
                    >
                    <input
                      type="text"
                      placeholder="Search medications..."
                      class="border border-emerald-200 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all w-64"
                    />
                  </div>
                  <button
                    class="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors flex items-center"
                  >
                    <span class="material-symbols-outlined align-middle mr-2"
                      >add</span
                    >
                    Add Medication
                  </button>
                </div>
              </div>
            </div>
            <div class="mb-4 flex gap-2">
              <button
                class="px-3 py-1 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors text-emerald-800 bg-emerald-50"
              >
                All
              </button>
              <button
                class="px-3 py-1 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Antibiotics
              </button>
              <button
                class="px-3 py-1 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Antidiabetics
              </button>
              <button
                class="px-3 py-1 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Lipid-lowering
              </button>
              <button
                class="px-3 py-1 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Analgesics
              </button>
              <button
                class="px-3 py-1 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Others
              </button>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-emerald-50">
                  <tr>
                    <th class="p-4 text-left text-emerald-700">
                      Medication Name
                    </th>
                    <th class="p-4 text-left text-emerald-700">Category</th>
                    <th class="p-4 text-left text-emerald-700">
                      Current Stock
                    </th>
                    <th class="p-4 text-left text-emerald-700">Unit Price</th>
                    <th class="p-4 text-left text-emerald-700">Expiry Date</th>
                    <th class="p-4 text-left text-emerald-700">Status</th>
                    <th class="p-4 text-left text-emerald-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-colors"
                  >
                    <td class="p-4 font-semibold">Amoxicillin 500mg</td>
                    <td class="p-4">Antibiotics</td>
                    <td class="p-4">
                      <div class="flex items-center">
                        <div class="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            class="bg-red-500 h-2 rounded-full"
                            style="width: 15%"
                          ></div>
                        </div>
                        <span>15</span>
                      </div>
                    </td>
                    <td class="p-4">$2.50</td>
                    <td class="p-4">Dec 15, 2025</td>
                    <td class="p-4">
                      <span
                        class="px-3 py-1 rounded-full bg-red-100 text-red-800"
                        >Critical</span
                      >
                    </td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-blue-600 hover:text-blue-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined"
                            >add_shopping_cart</span
                          >
                        </button>
                        <button
                          class="text-red-600 hover:text-red-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-colors"
                  >
                    <td class="p-4 font-semibold">Metformin 850mg</td>
                    <td class="p-4">Antidiabetic</td>
                    <td class="p-4">
                      <div class="flex items-center">
                        <div class="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            class="bg-amber-500 h-2 rounded-full"
                            style="width: 30%"
                          ></div>
                        </div>
                        <span>30</span>
                      </div>
                    </td>
                    <td class="p-4">$1.75</td>
                    <td class="p-4">Jul 10, 2026</td>
                    <td class="p-4">
                      <span
                        class="px-3 py-1 rounded-full bg-amber-100 text-amber-800"
                        >Low</span
                      >
                    </td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-blue-600 hover:text-blue-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined"
                            >add_shopping_cart</span
                          >
                        </button>
                        <button
                          class="text-red-600 hover:text-red-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-colors"
                  >
                    <td class="p-4 font-semibold">Atorvastatin 20mg</td>
                    <td class="p-4">Lipid-lowering</td>
                    <td class="p-4">
                      <div class="flex items-center">
                        <div class="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            class="bg-red-500 h-2 rounded-full"
                            style="width: 10%"
                          ></div>
                        </div>
                        <span>10</span>
                      </div>
                    </td>
                    <td class="p-4">$3.25</td>
                    <td class="p-4">Nov 22, 2025</td>
                    <td class="p-4">
                      <span
                        class="px-3 py-1 rounded-full bg-red-100 text-red-800"
                        >Critical</span
                      >
                    </td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-blue-600 hover:text-blue-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined"
                            >add_shopping_cart</span
                          >
                        </button>
                        <button
                          class="text-red-600 hover:text-red-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-colors"
                  >
                    <td class="p-4 font-semibold">Lisinopril 10mg</td>
                    <td class="p-4">Antihypertensive</td>
                    <td class="p-4">
                      <div class="flex items-center">
                        <div class="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            class="bg-emerald-500 h-2 rounded-full"
                            style="width: 80%"
                          ></div>
                        </div>
                        <span>80</span>
                      </div>
                    </td>
                    <td class="p-4">$1.20</td>
                    <td class="p-4">Sep 05, 2026</td>
                    <td class="p-4">
                      <span
                        class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800"
                        >Adequate</span
                      >
                    </td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-blue-600 hover:text-blue-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined"
                            >add_shopping_cart</span
                          >
                        </button>
                        <button
                          class="text-red-600 hover:text-red-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-colors"
                  >
                    <td class="p-4 font-semibold">Paracetamol 500mg</td>
                    <td class="p-4">Analgesic</td>
                    <td class="p-4">
                      <div class="flex items-center">
                        <div class="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            class="bg-emerald-500 h-2 rounded-full"
                            style="width: 95%"
                          ></div>
                        </div>
                        <span>95</span>
                      </div>
                    </td>
                    <td class="p-4">$0.75</td>
                    <td class="p-4">Aug 18, 2026</td>
                    <td class="p-4">
                      <span
                        class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800"
                        >Adequate</span
                      >
                    </td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-blue-600 hover:text-blue-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined"
                            >add_shopping_cart</span
                          >
                        </button>
                        <button
                          class="text-red-600 hover:text-red-700 transition-colors hover:scale-110 transform p-1"
                        >
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex justify-between items-center mt-6">
              <div class="text-sm text-gray-500">
                Showing 5 of 124 medications
              </div>
              <div class="flex space-x-2">
                <button
                  class="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50 transition-colors"
                >
                  <span class="material-symbols-outlined text-sm"
                    >chevron_left</span
                  >
                </button>
                <button
                  class="px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors"
                >
                  1
                </button>
                <button
                  class="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50 transition-colors"
                >
                  2
                </button>
                <button
                  class="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50 transition-colors"
                >
                  3
                </button>
                <button
                  class="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50 transition-colors"
                >
                  4
                </button>
                <button
                  class="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50 transition-colors"
                >
                  5
                </button>
                <button
                  class="px-3 py-1 border border-emerald-200 rounded hover:bg-emerald-50 transition-colors"
                >
                  <span class="material-symbols-outlined text-sm"
                    >chevron_right</span
                  >
                </button>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6">
            <div
              class="bg-gradient-to-r from-emerald-100 to-white -m-6 p-6 rounded-t-xl mb-6"
            >
              <div class="flex justify-between items-center">
                <h3 class="text-xl font-bold text-emerald-900">
                  Add New Medication
                </h3>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Medication Name</label
                  >
                  <input
                    type="text"
                    class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="Enter medication name"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Category</label
                  >
                  <select
                    class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  >
                    <option>Select category</option>
                    <option>Antibiotics</option>
                    <option>Antidiabetic</option>
                    <option>Lipid-lowering</option>
                    <option>Analgesic</option>
                    <option>Antihypertensive</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Description</label
                  >
                  <textarea
                    class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    rows="3"
                    placeholder="Enter medication description"
                  ></textarea>
                </div>
              </div>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Quantity</label
                  >
                  <input
                    type="number"
                    class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="Enter quantity"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Unit Price ($)</label
                  >
                  <input
                    type="number"
                    step="0.01"
                    class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="Enter unit price"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Expiry Date</label
                  >
                  <input
                    type="date"
                    class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Supplier</label
                  >
                  <select
                    class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  >
                    <option>Select supplier</option>
                    <option>MedSupply Inc.</option>
                    <option>Pharma Distributors</option>
                    <option>Global Meds</option>
                    <option>Health Solutions</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="flex justify-end mt-6 space-x-3">
              <button
                class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                class="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Save Medication
              </button>
            </div>
          </div>
        </main>
      </div>
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
  #webcrumbs .invisible {
    visibility: hidden;
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
  #webcrumbs .-right-1 {
    right: -4px;
  }
  #webcrumbs .-top-1 {
    top: -4px;
  }
  #webcrumbs .left-3 {
    left: 12px;
  }
  #webcrumbs .right-0 {
    right: 0;
  }
  #webcrumbs .top-0 {
    top: 0;
  }
  #webcrumbs .top-1\/2 {
    top: 50%;
  }
  #webcrumbs .top-full {
    top: 100%;
  }
  #webcrumbs .z-10 {
    z-index: 10;
  }
  #webcrumbs .-m-6 {
    margin: -24px;
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
  #webcrumbs .ml-4 {
    margin-left: 16px;
  }
  #webcrumbs .ml-auto {
    margin-left: auto;
  }
  #webcrumbs .mr-2 {
    margin-right: 8px;
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
  #webcrumbs .h-5 {
    height: 20px;
  }
  #webcrumbs .h-8 {
    height: 32px;
  }
  #webcrumbs .h-screen {
    height: 100vh;
  }
  #webcrumbs .min-h-screen {
    min-height: 100vh;
  }
  #webcrumbs .w-16 {
    width: 64px;
  }
  #webcrumbs .w-5 {
    width: 20px;
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
  #webcrumbs .flex-1 {
    flex: 1 1 0%;
  }
  #webcrumbs .-translate-y-1\/2 {
    --tw-translate-y: -50%;
  }
  #webcrumbs .-translate-y-1\/2,
  #webcrumbs .transform {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
  #webcrumbs .flex-wrap {
    flex-wrap: wrap;
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
  #webcrumbs .gap-2 {
    gap: 8px;
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
  #webcrumbs :is(.space-x-3 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-left: calc(12px * (1 - var(--tw-space-x-reverse)));
    margin-right: calc(12px * var(--tw-space-x-reverse));
  }
  #webcrumbs :is(.space-x-4 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-left: calc(16px * (1 - var(--tw-space-x-reverse)));
    margin-right: calc(16px * var(--tw-space-x-reverse));
  }
  #webcrumbs :is(.space-y-2 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-y-reverse: 0;
    margin-bottom: calc(8px * var(--tw-space-y-reverse));
    margin-top: calc(8px * (1 - var(--tw-space-y-reverse)));
  }
  #webcrumbs :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-y-reverse: 0;
    margin-bottom: calc(16px * var(--tw-space-y-reverse));
    margin-top: calc(16px * (1 - var(--tw-space-y-reverse)));
  }
  #webcrumbs .overflow-x-auto {
    overflow-x: auto;
  }
  #webcrumbs .rounded {
    border-radius: 12px;
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
  #webcrumbs .border-gray-300 {
    --tw-border-opacity: 1;
    border-color: rgb(209 213 219 / var(--tw-border-opacity));
  }
  #webcrumbs .border-red-500 {
    --tw-border-opacity: 1;
    border-color: rgb(239 68 68 / var(--tw-border-opacity));
  }
  #webcrumbs .bg-amber-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(254 243 199 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-amber-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(245 158 11 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(209 250 229 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(236 253 245 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(16 185 129 / var(--tw-bg-opacity));
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
  #webcrumbs .bg-gray-200 {
    --tw-bg-opacity: 1;
    background-color: rgb(229 231 235 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-gray-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
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
  #webcrumbs .text-gray-400 {
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity));
  }
  #webcrumbs .text-gray-500 {
    --tw-text-opacity: 1;
    color: rgb(107 114 128 / var(--tw-text-opacity));
  }
  #webcrumbs .text-gray-700 {
    --tw-text-opacity: 1;
    color: rgb(55 65 81 / var(--tw-text-opacity));
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
  #webcrumbs .opacity-0 {
    opacity: 0;
  }
  #webcrumbs .shadow-lg {
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
  }
  #webcrumbs .shadow-lg,
  #webcrumbs .shadow-md {
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  #webcrumbs .shadow-md {
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
      0 2px 4px -2px var(--tw-shadow-color);
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
    font-family: Open Sans !important;
    font-size: 16px !important;
  }
  #webcrumbs .hover\:scale-110:hover {
    --tw-scale-x: 1.1;
    --tw-scale-y: 1.1;
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
  #webcrumbs .hover\:bg-gray-50:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:text-blue-700:hover {
    --tw-text-opacity: 1;
    color: rgb(29 78 216 / var(--tw-text-opacity));
  }
  #webcrumbs .hover\:text-emerald-700:hover {
    --tw-text-opacity: 1;
    color: rgb(4 120 87 / var(--tw-text-opacity));
  }
  #webcrumbs .hover\:text-red-700:hover {
    --tw-text-opacity: 1;
    color: rgb(185 28 28 / var(--tw-text-opacity));
  }
  #webcrumbs .hover\:shadow-lg:hover {
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
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
  #webcrumbs :is(.group:hover .group-hover\:visible) {
    visibility: visible;
  }
  #webcrumbs :is(.group:hover .group-hover\:scale-110) {
    --tw-scale-x: 1.1;
    --tw-scale-y: 1.1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  #webcrumbs :is(.group:hover .group-hover\:bg-white) {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  #webcrumbs :is(.group:hover .group-hover\:text-emerald-800) {
    --tw-text-opacity: 1;
    color: rgb(6 95 70 / var(--tw-text-opacity));
  }
  #webcrumbs :is(.group:hover .group-hover\:opacity-100) {
    opacity: 1;
  }
  @media (min-width: 768px) {
    #webcrumbs .md\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    #webcrumbs .lg\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
