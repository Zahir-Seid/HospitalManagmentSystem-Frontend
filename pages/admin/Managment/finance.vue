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
                  class="flex items-center px-4 py-3 text-emerald-900 bg-emerald-50 border-l-4 border-emerald-600 hover:bg-emerald-100 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3">payments</span>
                  Finance
                </a>
              </li>
              <li class="mb-1">
                <a
                  href="#appointments"
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
                >
                  <span class="material-symbols-outlined mr-3"
                    >calendar_month</span
                  >
                  Appointments
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
                  class="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200"
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
            Finance Management
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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div
            class="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-emerald-700 font-semibold">Total Revenue</h3>
              <span class="material-symbols-outlined text-emerald-600"
                >payments</span
              >
            </div>
            <p class="text-3xl font-bold text-emerald-900">$157,842</p>
            <div class="mt-3 text-sm text-emerald-600 flex items-center">
              <span class="material-symbols-outlined text-sm mr-1"
                >trending_up</span
              >
              <span>+15% from last month</span>
            </div>
            <div class="mt-4 h-2 bg-emerald-100 rounded-full overflow-hidden">
              <div
                class="h-full bg-emerald-600 rounded-full"
                style="width: 85%"
              ></div>
            </div>
            <div class="mt-2 text-xs text-gray-500">85% of annual target</div>
          </div>
          <div
            class="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-emerald-700 font-semibold">Expenses</h3>
              <span class="material-symbols-outlined text-emerald-600"
                >receipt_long</span
              >
            </div>
            <p class="text-3xl font-bold text-emerald-900">$98,254</p>
            <div class="mt-3 text-sm text-red-600 flex items-center">
              <span class="material-symbols-outlined text-sm mr-1"
                >trending_up</span
              >
              <span>+8% from last month</span>
            </div>
            <div class="mt-4 h-2 bg-emerald-100 rounded-full overflow-hidden">
              <div
                class="h-full bg-amber-500 rounded-full"
                style="width: 62%"
              ></div>
            </div>
            <div class="mt-2 text-xs text-gray-500">62% of annual budget</div>
          </div>
          <div
            class="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-emerald-700 font-semibold">Pending Payments</h3>
              <span class="material-symbols-outlined text-emerald-600"
                >pending_actions</span
              >
            </div>
            <p class="text-3xl font-bold text-emerald-900">$12,580</p>
            <div class="mt-3 text-sm text-amber-600 flex items-center">
              <span class="material-symbols-outlined text-sm mr-1"
                >trending_down</span
              >
              <span>-8% from last week</span>
            </div>
            <div class="mt-4 grid grid-cols-3 gap-1">
              <div class="text-center">
                <p class="text-xs text-gray-500">Overdue</p>
                <p class="font-bold text-red-600">$4,250</p>
              </div>
              <div class="text-center">
                <p class="text-xs text-gray-500">Due Today</p>
                <p class="font-bold text-amber-600">$3,180</p>
              </div>
              <div class="text-center">
                <p class="text-xs text-gray-500">Upcoming</p>
                <p class="font-bold text-emerald-600">$5,150</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded-xl shadow-lg p-6 mb-8 hover:shadow-xl transition-all duration-300"
        >
          <div
            class="bg-gradient-to-r from-emerald-100 to-white -m-6 p-6 rounded-t-xl"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-xl font-bold text-emerald-900">
                Financial Reports
              </h3>
              <div class="flex space-x-2">
                <button
                  class="bg-white text-emerald-700 px-3 py-1.5 rounded-lg border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 flex items-center"
                >
                  <span class="material-symbols-outlined mr-1 text-sm"
                    >filter_alt</span
                  >
                  Filter
                </button>
                <button
                  class="bg-emerald-600 text-white px-4 py-1.5 rounded-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-200 flex items-center"
                >
                  <span class="material-symbols-outlined mr-2 text-sm"
                    >download</span
                  >
                  Export
                </button>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <div class="flex justify-between items-center mb-4">
              <p class="text-emerald-700">
                Total Revenue: <span class="font-bold">$157,842</span>
              </p>
              <div class="flex space-x-2">
                <button
                  class="text-emerald-700 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-all duration-200 flex items-center"
                >
                  <span class="material-symbols-outlined mr-1 text-sm"
                    >today</span
                  >
                  This Month
                </button>
                <details class="relative">
                  <summary
                    class="list-none cursor-pointer bg-white border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-all duration-200 flex items-center"
                  >
                    <span class="material-symbols-outlined mr-1 text-sm"
                      >calendar_view_month</span
                    >
                    April 2023
                    <span class="material-symbols-outlined ml-1 text-sm"
                      >expand_more</span
                    >
                  </summary>
                  <div
                    class="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg z-10 overflow-hidden"
                  >
                    <ul>
                      <li
                        class="hover:bg-emerald-50 transition-all duration-200"
                      >
                        <button class="w-full text-left px-4 py-2 text-sm">
                          April 2023
                        </button>
                      </li>
                      <li
                        class="hover:bg-emerald-50 transition-all duration-200"
                      >
                        <button class="w-full text-left px-4 py-2 text-sm">
                          March 2023
                        </button>
                      </li>
                      <li
                        class="hover:bg-emerald-50 transition-all duration-200"
                      >
                        <button class="w-full text-left px-4 py-2 text-sm">
                          February 2023
                        </button>
                      </li>
                      <li
                        class="hover:bg-emerald-50 transition-all duration-200"
                      >
                        <button class="w-full text-left px-4 py-2 text-sm">
                          January 2023
                        </button>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-emerald-50">
                  <tr>
                    <th class="p-4 text-left text-emerald-700">Date</th>
                    <th class="p-4 text-left text-emerald-700">Description</th>
                    <th class="p-4 text-left text-emerald-700">Category</th>
                    <th class="p-4 text-left text-emerald-700">Amount</th>
                    <th class="p-4 text-left text-emerald-700">Status</th>
                    <th class="p-4 text-left text-emerald-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <td class="p-4">Apr 15, 2023</td>
                    <td class="p-4">Outpatient Services</td>
                    <td class="p-4">Medical Services</td>
                    <td class="p-4">$3,580</td>
                    <td class="p-4">
                      <span
                        class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800"
                      >
                        approved
                      </span>
                    </td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined"
                            >visibility</span
                          >
                        </button>
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined"
                            >file_download</span
                          >
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <td class="p-4">Apr 12, 2023</td>
                    <td class="p-4">Laboratory Tests</td>
                    <td class="p-4">Diagnostics</td>
                    <td class="p-4">$1,890</td>
                    <td class="p-4">
                      <span
                        class="px-3 py-1 rounded-full bg-amber-100 text-amber-800"
                      >
                        pending
                      </span>
                    </td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined"
                            >visibility</span
                          >
                        </button>
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined"
                            >file_download</span
                          >
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <td class="p-4">Apr 10, 2023</td>
                    <td class="p-4">Pharmacy Supplies</td>
                    <td class="p-4">Inventory</td>
                    <td class="p-4">$2,450</td>
                    <td class="p-4">
                      <span
                        class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800"
                      >
                        approved
                      </span>
                    </td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined"
                            >visibility</span
                          >
                        </button>
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined"
                            >file_download</span
                          >
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <td class="p-4">Apr 08, 2023</td>
                    <td class="p-4">Equipment Maintenance</td>
                    <td class="p-4">Facilities</td>
                    <td class="p-4">$5,120</td>
                    <td class="p-4">
                      <span
                        class="px-3 py-1 rounded-full bg-red-100 text-red-800"
                      >
                        rejected
                      </span>
                    </td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined"
                            >visibility</span
                          >
                        </button>
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined"
                            >file_download</span
                          >
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-emerald-100 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <td class="p-4">Apr 05, 2023</td>
                    <td class="p-4">Staff Salaries</td>
                    <td class="p-4">HR</td>
                    <td class="p-4">$32,750</td>
                    <td class="p-4">
                      <span
                        class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800"
                      >
                        approved
                      </span>
                    </td>
                    <td class="p-4">
                      <div class="flex space-x-2">
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined"
                            >visibility</span
                          >
                        </button>
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          class="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <span class="material-symbols-outlined"
                            >file_download</span
                          >
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-4 flex justify-between items-center">
              <div class="text-sm text-gray-600">Showing 1-5 of 24 entries</div>
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
        </div>
        <div
          class="bg-white rounded-xl shadow-lg p-6 mb-8 hover:shadow-xl transition-all duration-300"
        >
          <div
            class="bg-gradient-to-r from-emerald-100 to-white -m-6 p-6 rounded-t-xl"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-xl font-bold text-emerald-900">
                Budget Management
              </h3>
              <button
                class="bg-emerald-600 text-white px-4 py-1.5 rounded-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-200 flex items-center"
              >
                <span class="material-symbols-outlined mr-2 text-sm">add</span>
                Create Budget
              </button>
            </div>
          </div>
          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-emerald-50 p-5 rounded-lg">
              <h4 class="text-emerald-800 font-semibold mb-4">
                Department Budget Allocation
              </h4>
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-sm text-emerald-700"
                      >Medical Services</span
                    >
                    <span class="text-sm font-medium text-emerald-900"
                      >$450,000</span
                    >
                  </div>
                  <div class="h-2 bg-white rounded-full overflow-hidden">
                    <div
                      class="h-full bg-emerald-600 rounded-full"
                      style="width: 75%"
                    ></div>
                  </div>
                  <div class="flex justify-between items-center mt-1">
                    <span class="text-xs text-gray-500">Spent: $337,500</span>
                    <span class="text-xs text-emerald-700">75%</span>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-sm text-emerald-700">Administration</span>
                    <span class="text-sm font-medium text-emerald-900"
                      >$120,000</span
                    >
                  </div>
                  <div class="h-2 bg-white rounded-full overflow-hidden">
                    <div
                      class="h-full bg-emerald-600 rounded-full"
                      style="width: 60%"
                    ></div>
                  </div>
                  <div class="flex justify-between items-center mt-1">
                    <span class="text-xs text-gray-500">Spent: $72,000</span>
                    <span class="text-xs text-emerald-700">60%</span>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-sm text-emerald-700"
                      >HR &amp; Training</span
                    >
                    <span class="text-sm font-medium text-emerald-900"
                      >$85,000</span
                    >
                  </div>
                  <div class="h-2 bg-white rounded-full overflow-hidden">
                    <div
                      class="h-full bg-red-500 rounded-full"
                      style="width: 92%"
                    ></div>
                  </div>
                  <div class="flex justify-between items-center mt-1">
                    <span class="text-xs text-gray-500">Spent: $78,200</span>
                    <span class="text-xs text-red-600">92%</span>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-sm text-emerald-700"
                      >Facility Management</span
                    >
                    <span class="text-sm font-medium text-emerald-900"
                      >$180,000</span
                    >
                  </div>
                  <div class="h-2 bg-white rounded-full overflow-hidden">
                    <div
                      class="h-full bg-amber-500 rounded-full"
                      style="width: 85%"
                    ></div>
                  </div>
                  <div class="flex justify-between items-center mt-1">
                    <span class="text-xs text-gray-500">Spent: $153,000</span>
                    <span class="text-xs text-amber-700">85%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-emerald-50 p-5 rounded-lg flex flex-col">
              <h4 class="text-emerald-800 font-semibold mb-4">
                Monthly Budget Overview
              </h4>
              <div
                class="flex-1 bg-white rounded-lg shadow-sm p-4 flex items-center justify-center"
              >
                <div class="text-emerald-700 flex flex-col items-center">
                  <span class="material-symbols-outlined text-5xl mb-2"
                    >insert_chart</span
                  >
                  <p>Budget Trend Chart</p>
                  <button
                    class="mt-4 text-sm bg-emerald-600 text-white px-4 py-1.5 rounded-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-200 flex items-center"
                  >
                    <span class="material-symbols-outlined mr-2 text-sm"
                      >refresh</span
                    >
                    Update Chart
                  </button>
                </div>
              </div>
              <div class="mt-4">
                <div class="flex justify-between">
                  <div class="text-center">
                    <p class="text-xs text-gray-500">Total Budget</p>
                    <p class="font-bold text-emerald-800">$835,000</p>
                  </div>
                  <div class="text-center">
                    <p class="text-xs text-gray-500">Spent</p>
                    <p class="font-bold text-emerald-800">$640,700</p>
                  </div>
                  <div class="text-center">
                    <p class="text-xs text-gray-500">Remaining</p>
                    <p class="font-bold text-emerald-800">$194,300</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
        >
          <h3 class="text-xl font-bold text-emerald-900 mb-4">
            Recent Invoices
          </h3>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-emerald-50">
                <tr>
                  <th class="p-3 text-left text-emerald-700">Invoice #</th>
                  <th class="p-3 text-left text-emerald-700">Patient</th>
                  <th class="p-3 text-left text-emerald-700">Date</th>
                  <th class="p-3 text-left text-emerald-700">Amount</th>
                  <th class="p-3 text-left text-emerald-700">Status</th>
                  <th class="p-3 text-left text-emerald-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b border-emerald-100 hover:bg-emerald-50 transition-all duration-200"
                >
                  <td class="p-3">INV-2023-104</td>
                  <td class="p-3">Sarah Williams</td>
                  <td class="p-3">Apr 18, 2023</td>
                  <td class="p-3">$540</td>
                  <td class="p-3">
                    <span
                      class="px-2 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs"
                    ></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div></div
></template>

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
  #webcrumbs .-right-1 {
    right: -4px;
  }
  #webcrumbs .-top-1 {
    top: -4px;
  }
  #webcrumbs .right-0 {
    right: 0;
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
  #webcrumbs .mb-8 {
    margin-bottom: 32px;
  }
  #webcrumbs .ml-1 {
    margin-left: 4px;
  }
  #webcrumbs .ml-2 {
    margin-left: 8px;
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
  #webcrumbs .mt-3 {
    margin-top: 12px;
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
  #webcrumbs .h-10 {
    height: 40px;
  }
  #webcrumbs .h-2 {
    height: 8px;
  }
  #webcrumbs .h-5 {
    height: 20px;
  }
  #webcrumbs .h-full {
    height: 100%;
  }
  #webcrumbs .h-screen {
    height: 100vh;
  }
  #webcrumbs .min-h-screen {
    min-height: 100vh;
  }
  #webcrumbs .w-10 {
    width: 40px;
  }
  #webcrumbs .w-48 {
    width: 192px;
  }
  #webcrumbs .w-5 {
    width: 20px;
  }
  #webcrumbs .w-64 {
    width: 256px;
  }
  #webcrumbs .w-full {
    width: 100%;
  }
  #webcrumbs .flex-1 {
    flex: 1 1 0%;
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
  #webcrumbs .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
  #webcrumbs .gap-1 {
    gap: 4px;
  }
  #webcrumbs .gap-4 {
    gap: 16px;
  }
  #webcrumbs .gap-6 {
    gap: 24px;
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
  #webcrumbs .p-2 {
    padding: 8px;
  }
  #webcrumbs .p-3 {
    padding: 12px;
  }
  #webcrumbs .p-4 {
    padding: 16px;
  }
  #webcrumbs .p-5 {
    padding: 20px;
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
  #webcrumbs .py-1\.5 {
    padding-bottom: 6px;
    padding-top: 6px;
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
  #webcrumbs .text-5xl {
    font-size: 48px;
    line-height: 52.800000000000004px;
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
  #webcrumbs .text-amber-700 {
    --tw-text-opacity: 1;
    color: rgb(180 83 9 / var(--tw-text-opacity));
  }
  #webcrumbs .text-amber-800 {
    --tw-text-opacity: 1;
    color: rgb(146 64 14 / var(--tw-text-opacity));
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
  #webcrumbs .shadow-sm {
    --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  }
  #webcrumbs .shadow-sm,
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
  }
  #webcrumbs .hover\:scale-105:hover,
  #webcrumbs .hover\:scale-\[1\.02\]:hover {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  #webcrumbs .hover\:scale-\[1\.02\]:hover {
    --tw-scale-x: 1.02;
    --tw-scale-y: 1.02;
  }
  #webcrumbs .hover\:border-emerald-300:hover {
    --tw-border-opacity: 1;
    border-color: rgb(110 231 183 / var(--tw-border-opacity));
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
  #webcrumbs .hover\:shadow-xl:hover {
    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
      0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  #webcrumbs .disabled\:cursor-not-allowed:disabled {
    cursor: not-allowed;
  }
  #webcrumbs .disabled\:opacity-50:disabled {
    opacity: 0.5;
  }
  @media (min-width: 768px) {
    #webcrumbs .md\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    #webcrumbs .md\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
