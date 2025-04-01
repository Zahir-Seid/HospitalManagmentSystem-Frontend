<template
  ><div id="webcrumbs">
    <div class="w-full min-h-screen bg-gray-50 flex">
      <div
        class="w-64 bg-white shadow-xl h-screen flex flex-col justify-between overflow-hidden"
      >
        <div class="flex-1 overflow-y-auto">
          <div class="p-4 border-b">
            <h2 class="text-xl font-bold text-emerald-700">Health Manager</h2>
          </div>
          <nav class="py-4">
            <ul>
              <li class="mb-1">
                <a
                  href="#dashboard"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">dashboard</span>
                  Dashboard
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#finance"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">payments</span>
                  Finance
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#attendance"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3"
                    >calendar_month</span
                  >
                  Attendance
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#employees"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">group</span>
                  Employees
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#feedback"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">forum</span>
                  Feedback
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#pricing"
                  class="flex items-center px-4 py-3 text-emerald-900 bg-emerald-50 border-l-4 border-emerald-600 hover:bg-emerald-100 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">sell</span>
                  Pricing
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#messages"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">inbox</span>
                  Messages
                  <span
                    class="ml-auto bg-emerald-600 text-white text-xs px-2 py-1 rounded-full"
                    >3</span
                  >
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#reports"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">summarize</span>
                  Reports
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#settings"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">settings</span>
                  Settings
                </a>
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
      <div class="flex-1 p-8">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-2xl font-bold text-emerald-900">
            Service Pricing Management
          </h1>
          <div class="flex items-center space-x-4">
            <button
              class="p-2 rounded-full hover:bg-emerald-50 transition-all duration-200 relative"
            >
              <span class="material-symbols-outlined text-emerald-700"
                >notifications</span
              >
              <span
                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >5</span
              >
            </button>
            <button
              class="p-2 rounded-full hover:bg-emerald-50 transition-all duration-200"
            >
              <span class="material-symbols-outlined text-emerald-700"
                >settings</span
              >
            </button>
            <details class="relative">
              <summary class="list-none flex items-center cursor-pointer">
                <div
                  class="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 font-bold hover:bg-emerald-300 transition-all duration-200"
                >
                  JD
                </div>
                <div class="ml-2">
                  <p class="font-medium text-sm">John Doe</p>
                  <p class="text-xs text-gray-500">Manager</p>
                </div>
                <span class="material-symbols-outlined text-emerald-700 ml-1"
                  >expand_more</span
                >
              </summary>
              <div
                class="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg z-10 overflow-hidden"
              >
                <ul>
                  <li class="hover:bg-emerald-50 transition-all duration-200">
                    <a
                      href="#profile"
                      class="block px-4 py-2 text-sm text-gray-700"
                      >Profile</a
                    >
                  </li>
                  <li class="hover:bg-emerald-50 transition-all duration-200">
                    <a
                      href="#account"
                      class="block px-4 py-2 text-sm text-gray-700"
                      >Account Settings</a
                    >
                  </li>
                  <li
                    class="hover:bg-emerald-50 transition-all duration-200 border-t"
                  >
                    <a
                      href="#logout"
                      class="block px-4 py-2 text-sm text-red-600"
                      >Logout</a
                    >
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div
            class="col-span-1 lg:col-span-2 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg font-bold text-emerald-900">
                Hospital Services Pricing
              </h2>
              <button
                class="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-200 flex items-center"
                id="showAddServiceModal"
              >
                <span class="material-symbols-outlined mr-2 text-sm">add</span>
                Add Service
              </button>
            </div>
            <div class="mb-4 flex justify-between items-center">
              <div class="relative w-64">
                <span
                  class="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >search</span
                >
                <input
                  type="text"
                  placeholder="Search services..."
                  class="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                />
              </div>
              <details class="relative">
                <summary
                  class="list-none cursor-pointer bg-white border border-emerald-200 text-emerald-700 px-3 py-2 rounded-lg hover:bg-emerald-50 transition-all duration-200 flex items-center"
                >
                  <span class="material-symbols-outlined mr-1 text-sm"
                    >filter_alt</span
                  >
                  Sort by
                  <span class="material-symbols-outlined ml-1 text-sm"
                    >expand_more</span
                  >
                </summary>
                <div
                  class="absolute right-0 mt-1 w-56 bg-white rounded-lg shadow-lg z-10 overflow-hidden"
                >
                  <ul>
                    <li class="hover:bg-emerald-50 transition-all duration-200">
                      <button class="w-full text-left px-4 py-2 text-sm">
                        Name (A-Z)
                      </button>
                    </li>
                    <li class="hover:bg-emerald-50 transition-all duration-200">
                      <button class="w-full text-left px-4 py-2 text-sm">
                        Name (Z-A)
                      </button>
                    </li>
                    <li class="hover:bg-emerald-50 transition-all duration-200">
                      <button class="w-full text-left px-4 py-2 text-sm">
                        Price (Low to High)
                      </button>
                    </li>
                    <li class="hover:bg-emerald-50 transition-all duration-200">
                      <button class="w-full text-left px-4 py-2 text-sm">
                        Price (High to Low)
                      </button>
                    </li>
                    <li class="hover:bg-emerald-50 transition-all duration-200">
                      <button class="w-full text-left px-4 py-2 text-sm">
                        Recently Added
                      </button>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-emerald-50">
                  <tr>
                    <th class="p-4 text-left text-emerald-700">ID</th>
                    <th class="p-4 text-left text-emerald-700">Service Name</th>
                    <th class="p-4 text-left text-emerald-700">Price (ETB)</th>
                    <th class="p-4 text-left text-emerald-700">Last Updated</th>
                    <th class="p-4 text-left text-emerald-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <td class="p-4">001</td>
                    <td class="p-4 font-medium">General Consultation</td>
                    <td class="p-4">350.00</td>
                    <td class="p-4 text-sm text-gray-500">Feb 12, 2025</td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-red-500 hover:text-red-700 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <td class="p-4">002</td>
                    <td class="p-4 font-medium">X-Ray (Single Area)</td>
                    <td class="p-4">750.00</td>
                    <td class="p-4 text-sm text-gray-500">Mar 05, 2025</td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-red-500 hover:text-red-700 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <td class="p-4">003</td>
                    <td class="p-4 font-medium">Blood Test - Complete CBC</td>
                    <td class="p-4">450.00</td>
                    <td class="p-4 text-sm text-gray-500">Jan 28, 2025</td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-red-500 hover:text-red-700 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <td class="p-4">004</td>
                    <td class="p-4 font-medium">Ultrasound Scan</td>
                    <td class="p-4">1,200.00</td>
                    <td class="p-4 text-sm text-gray-500">Feb 18, 2025</td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-red-500 hover:text-red-700 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <td class="p-4">005</td>
                    <td class="p-4 font-medium">Physical Therapy (Session)</td>
                    <td class="p-4">600.00</td>
                    <td class="p-4 text-sm text-gray-500">Mar 10, 2025</td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-red-500 hover:text-red-700 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <td class="p-4">006</td>
                    <td class="p-4 font-medium">Dental Cleaning</td>
                    <td class="p-4">850.00</td>
                    <td class="p-4 text-sm text-gray-500">Mar 02, 2025</td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-red-500 hover:text-red-700 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <td class="p-4">007</td>
                    <td class="p-4 font-medium">Vaccination - Adult</td>
                    <td class="p-4">400.00</td>
                    <td class="p-4 text-sm text-gray-500">Jan 15, 2025</td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-red-500 hover:text-red-700 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-4 flex justify-between items-center">
              <div class="text-sm text-gray-600">
                Showing 1-7 of 24 services
              </div>
              <div class="flex space-x-1">
                <button
                  class="px-3 py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  class="px-3 py-1 rounded bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-200"
                >
                  1
                </button>
                <button
                  class="px-3 py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all duration-200"
                >
                  2
                </button>
                <button
                  class="px-3 py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all duration-200"
                >
                  3
                </button>
                <button
                  class="px-3 py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all duration-200"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <div class="col-span-1 space-y-6">
            <div
              class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h2 class="text-lg font-bold text-emerald-900 mb-4">
                Pricing Overview
              </h2>
              <div class="space-y-4">
                <div
                  class="flex justify-between items-center pb-2 border-b border-emerald-100"
                >
                  <span class="text-gray-600">Total Services</span>
                  <span class="font-bold text-emerald-700">24</span>
                </div>
                <div
                  class="flex justify-between items-center pb-2 border-b border-emerald-100"
                >
                  <span class="text-gray-600">Average Price</span>
                  <span class="font-bold text-emerald-700">ETB 675.50</span>
                </div>
                <div
                  class="flex justify-between items-center pb-2 border-b border-emerald-100"
                >
                  <span class="text-gray-600">Highest Price</span>
                  <span class="font-bold text-emerald-700">ETB 2,500.00</span>
                </div>
                <div
                  class="flex justify-between items-center pb-2 border-b border-emerald-100"
                >
                  <span class="text-gray-600">Lowest Price</span>
                  <span class="font-bold text-emerald-700">ETB 150.00</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Last Updated</span>
                  <span class="text-sm text-gray-500">Mar 10, 2025</span>
                </div>
              </div>
            </div>
            <div
              class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h2 class="text-lg font-bold text-emerald-900 mb-4">
                Price Categories
              </h2>
              <div class="space-y-3">
                <div class="flex items-center">
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      class="bg-emerald-600 h-2.5 rounded-full w-[40%]"
                    ></div>
                  </div>
                  <span class="ml-3 text-sm text-gray-600 w-24"
                    >Basic (40%)</span
                  >
                </div>
                <div class="flex items-center">
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      class="bg-emerald-500 h-2.5 rounded-full w-[30%]"
                    ></div>
                  </div>
                  <span class="ml-3 text-sm text-gray-600 w-24"
                    >Standard (30%)</span
                  >
                </div>
                <div class="flex items-center">
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      class="bg-emerald-400 h-2.5 rounded-full w-[20%]"
                    ></div>
                  </div>
                  <span class="ml-3 text-sm text-gray-600 w-24"
                    >Premium (20%)</span
                  >
                </div>
                <div class="flex items-center">
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      class="bg-emerald-300 h-2.5 rounded-full w-[10%]"
                    ></div>
                  </div>
                  <span class="ml-3 text-sm text-gray-600 w-24"
                    >Special (10%)</span
                  >
                </div>
              </div>
              <button
                class="mt-4 w-full text-emerald-600 text-sm hover:text-emerald-800 transition-all duration-200 flex items-center justify-center"
              >
                <span class="material-symbols-outlined mr-1 text-sm"
                  >analytics</span
                >
                View Detailed Report
              </button>
            </div>
            <div
              class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h2 class="text-lg font-bold text-emerald-900 mb-4">
                Quick Actions
              </h2>
              <div class="space-y-3">
                <button
                  class="w-full bg-emerald-50 text-emerald-700 px-4 py-3 rounded-lg hover:bg-emerald-100 transition-all duration-200 text-left flex items-center"
                >
                  <span class="material-symbols-outlined mr-3"
                    >import_export</span
                  >
                  Export Price List
                </button>
                <button
                  class="w-full bg-emerald-50 text-emerald-700 px-4 py-3 rounded-lg hover:bg-emerald-100 transition-all duration-200 text-left flex items-center"
                >
                  <span class="material-symbols-outlined mr-3">print</span>
                  Print Price List
                </button>
                <button
                  class="w-full bg-emerald-50 text-emerald-700 px-4 py-3 rounded-lg hover:bg-emerald-100 transition-all duration-200 text-left flex items-center"
                >
                  <span class="material-symbols-outlined mr-3">history</span>
                  View Price History
                </button>
                <button
                  class="w-full bg-emerald-50 text-emerald-700 px-4 py-3 rounded-lg hover:bg-emerald-100 transition-all duration-200 text-left flex items-center"
                >
                  <span class="material-symbols-outlined mr-3"
                    >compare_arrows</span
                  >
                  Compare Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-6 w-[600px] max-h-[80vh] overflow-y-auto z-20 opacity-0 pointer-events-none transition-all duration-300 scale-95"
          id="addServiceModal"
        >
          <div class="flex justify-between items-start mb-6">
            <h2 class="text-xl font-bold text-emerald-900">Add New Service</h2>
            <button
              class="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <form class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-emerald-700 mb-1"
                >Service Name*</label
              >
              <input
                type="text"
                class="w-full p-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                placeholder="Enter service name"
                required=""
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-emerald-700 mb-1"
                >Price (ETB)*</label
              >
              <input
                type="number"
                step="0.01"
                min="0"
                class="w-full p-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                placeholder="0.00"
                required=""
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-emerald-700 mb-1"
                >Category</label
              >
              <select
                class="w-full p-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
              >
                <option value="">Select a category</option>
                <option value="consultation">Consultation</option>
                <option value="diagnostics">Diagnostics</option>
                <option value="treatment">Treatment</option>
                <option value="surgery">Surgery</option>
                <option value="maternity">Maternity</option>
                <option value="dental">Dental</option>
                <option value="wellness">Wellness</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-emerald-700 mb-1"
                >Description</label
              >
              <textarea
                class="w-full p-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                rows="3"
                placeholder="Enter service description"
              ></textarea>
            </div>
            <div class="flex justify-end space-x-3 pt-4 border-t">
              <button
                type="button"
                class="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200"
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-6 w-[600px] max-h-[80vh] overflow-y-auto z-20 opacity-0 pointer-events-none transition-all duration-300 scale-95"
          id="editServiceModal"
        >
          <div class="flex justify-between items-start mb-6">
            <h2 class="text-xl font-bold text-emerald-900">Edit Service</h2>
            <button
              class="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <form class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-emerald-700 mb-1"
                >Service ID</label
              >
              <input
                type="text"
                class="w-full p-2 border border-emerald-200 rounded-lg bg-gray-50"
                disabled=""
                value="002"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-emerald-700 mb-1"
                >Service Name*</label
              >
              <input
                type="text"
                class="w-full p-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                required=""
                value="X-Ray (Single Area)"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-emerald-700 mb-1"
                >Price (ETB)*</label
              >
              <input
                type="number"
                step="0.01"
                min="0"
                class="w-full p-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                required=""
                value="750.00"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-emerald-700 mb-1"
                >Category</label
              >
              <select
                class="w-full p-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
              >
                <option value="">Select a category</option>
                <option value="consultation">Consultation</option>
                <option value="diagnostics" selected="">Diagnostics</option>
                <option value="treatment">Treatment</option>
                <option value="surgery">Surgery</option>
                <option value="maternity">Maternity</option>
                <option value="dental">Dental</option>
                <option value="wellness">Wellness</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-emerald-700 mb-1"
                >Description</label
              >
            </div>
          </form>
        </div>
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
  #webcrumbs .pointer-events-none {
    pointer-events: none;
  }
  #webcrumbs .absolute {
    position: absolute;
  }
  #webcrumbs .relative {
    position: relative;
  }
  #webcrumbs .-right-1 {
    right: -4px;
  }
  #webcrumbs .-top-1 {
    top: -4px;
  }
  #webcrumbs .left-1\/2 {
    left: 50%;
  }
  #webcrumbs .left-3 {
    left: 12px;
  }
  #webcrumbs .right-0 {
    right: 0;
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
  #webcrumbs .z-20 {
    z-index: 20;
  }
  #webcrumbs .col-span-1 {
    grid-column: span 1 / span 1;
  }
  #webcrumbs .mb-1 {
    margin-bottom: 4px;
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
  #webcrumbs .ml-1 {
    margin-left: 4px;
  }
  #webcrumbs .ml-2 {
    margin-left: 8px;
  }
  #webcrumbs .ml-3 {
    margin-left: 12px;
  }
  #webcrumbs .ml-auto {
    margin-left: auto;
  }
  #webcrumbs .mr-1 {
    margin-right: 4px;
  }
  #webcrumbs .mr-2 {
    margin-right: 8px;
  }
  #webcrumbs .mr-3 {
    margin-right: 12px;
  }
  #webcrumbs .mt-1 {
    margin-top: 4px;
  }
  #webcrumbs .mt-2 {
    margin-top: 8px;
  }
  #webcrumbs .mt-4 {
    margin-top: 16px;
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
  #webcrumbs .h-10 {
    height: 40px;
  }
  #webcrumbs .h-2\.5 {
    height: 10px;
  }
  #webcrumbs .h-5 {
    height: 20px;
  }
  #webcrumbs .h-screen {
    height: 100vh;
  }
  #webcrumbs .max-h-\[80vh\] {
    max-height: 80vh;
  }
  #webcrumbs .min-h-screen {
    min-height: 100vh;
  }
  #webcrumbs .w-10 {
    width: 40px;
  }
  #webcrumbs .w-24 {
    width: 96px;
  }
  #webcrumbs .w-48 {
    width: 192px;
  }
  #webcrumbs .w-5 {
    width: 20px;
  }
  #webcrumbs .w-56 {
    width: 224px;
  }
  #webcrumbs .w-64 {
    width: 256px;
  }
  #webcrumbs .w-\[10\%\] {
    width: 10%;
  }
  #webcrumbs .w-\[20\%\] {
    width: 20%;
  }
  #webcrumbs .w-\[30\%\] {
    width: 30%;
  }
  #webcrumbs .w-\[40\%\] {
    width: 40%;
  }
  #webcrumbs .w-\[600px\] {
    width: 600px;
  }
  #webcrumbs .w-full {
    width: 100%;
  }
  #webcrumbs .flex-1 {
    flex: 1 1 0%;
  }
  #webcrumbs .-translate-x-1\/2 {
    --tw-translate-x: -50%;
  }
  #webcrumbs .-translate-x-1\/2,
  #webcrumbs .-translate-y-1\/2 {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  #webcrumbs .-translate-y-1\/2 {
    --tw-translate-y: -50%;
  }
  #webcrumbs .scale-95 {
    --tw-scale-x: 0.95;
    --tw-scale-y: 0.95;
  }
  #webcrumbs .scale-95,
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
  #webcrumbs .gap-8 {
    gap: 32px;
  }
  #webcrumbs :is(.space-x-1 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-left: calc(4px * (1 - var(--tw-space-x-reverse)));
    margin-right: calc(4px * var(--tw-space-x-reverse));
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
  #webcrumbs :is(.space-y-3 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-y-reverse: 0;
    margin-bottom: calc(12px * var(--tw-space-y-reverse));
    margin-top: calc(12px * (1 - var(--tw-space-y-reverse)));
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
  #webcrumbs .overflow-hidden {
    overflow: hidden;
  }
  #webcrumbs .overflow-x-auto {
    overflow-x: auto;
  }
  #webcrumbs .overflow-y-auto {
    overflow-y: auto;
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
  #webcrumbs .border-emerald-100 {
    --tw-border-opacity: 1;
    border-color: rgb(209 250 229 / var(--tw-border-opacity));
  }
  #webcrumbs .border-emerald-200 {
    --tw-border-opacity: 1;
    border-color: rgb(167 243 208 / var(--tw-border-opacity));
  }
  #webcrumbs .border-emerald-600 {
    --tw-border-opacity: 1;
    border-color: rgb(5 150 105 / var(--tw-border-opacity));
  }
  #webcrumbs .bg-emerald-200 {
    --tw-bg-opacity: 1;
    background-color: rgb(167 243 208 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-300 {
    --tw-bg-opacity: 1;
    background-color: rgb(110 231 183 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-emerald-400 {
    --tw-bg-opacity: 1;
    background-color: rgb(52 211 153 / var(--tw-bg-opacity));
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
  #webcrumbs .bg-gray-200 {
    --tw-bg-opacity: 1;
    background-color: rgb(229 231 235 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-gray-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-red-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(239 68 68 / var(--tw-bg-opacity));
  }
  #webcrumbs .bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
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
  #webcrumbs .p-8 {
    padding: 32px;
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
  #webcrumbs .py-3 {
    padding-bottom: 12px;
    padding-top: 12px;
  }
  #webcrumbs .py-4 {
    padding-bottom: 16px;
    padding-top: 16px;
  }
  #webcrumbs .pb-2 {
    padding-bottom: 8px;
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
  #webcrumbs .text-gray-400 {
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity));
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
  #webcrumbs .text-red-500 {
    --tw-text-opacity: 1;
    color: rgb(239 68 68 / var(--tw-text-opacity));
  }
  #webcrumbs .text-red-600 {
    --tw-text-opacity: 1;
    color: rgb(220 38 38 / var(--tw-text-opacity));
  }
  #webcrumbs .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  #webcrumbs .opacity-0 {
    opacity: 0;
  }
  #webcrumbs .shadow-2xl {
    --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  }
  #webcrumbs .shadow-2xl,
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
  #webcrumbs .shadow-xl {
    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
      0 8px 10px -6px var(--tw-shadow-color);
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
  #webcrumbs .hover\:scale-105:hover {
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  #webcrumbs .hover\:bg-emerald-100:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(209 250 229 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-300:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(110 231 183 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-50:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(236 253 245 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:bg-emerald-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(4 120 87 / var(--tw-bg-opacity));
  }
  #webcrumbs .hover\:text-emerald-800:hover {
    --tw-text-opacity: 1;
    color: rgb(6 95 70 / var(--tw-text-opacity));
  }
  #webcrumbs .hover\:text-emerald-900:hover {
    --tw-text-opacity: 1;
    color: rgb(6 78 59 / var(--tw-text-opacity));
  }
  #webcrumbs .hover\:text-gray-700:hover {
    --tw-text-opacity: 1;
    color: rgb(55 65 81 / var(--tw-text-opacity));
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
  #webcrumbs .disabled\:cursor-not-allowed:disabled {
    cursor: not-allowed;
  }
  #webcrumbs .disabled\:opacity-50:disabled {
    opacity: 0.5;
  }
  @media (min-width: 1024px) {
    #webcrumbs .lg\:col-span-2 {
      grid-column: span 2 / span 2;
    }
    #webcrumbs .lg\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
