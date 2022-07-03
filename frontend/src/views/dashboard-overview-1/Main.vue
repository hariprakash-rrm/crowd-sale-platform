<template>
  <div class="grid grid-cols-12 gap-6">
    <!-- BEGIN: General Report -->
    <!-- END: General Report -->

    <!-- BEGIN: General Report -->
    <div class="col-span-12 mt-8">
      <div class="grid grid-cols-12 gap-6 lg:gap-x-8">
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
          <div class="report-box report-box__right zoom-in">
            <div class="box bg-[#ffffff] p-8">
              <div class="flex items-center">
                <div>
                  <div class="text-3xl font-semibold leading-9">4.710</div>
                  <div class="text-base text-slate-500 mt-1">
                    Project Invested
                  </div>
                </div>
                <div class="ml-auto p-6 rounded-xl bg__icon-1">
                  <LayersIcon class="report-box__icon text-cyan-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
          <div class="report-box report-box__right zoom-in">
            <div class="box bg-[#ffffff] p-8">
              <div class="flex items-center">
                <div>
                  <div class="text-3xl font-semibold leading-9">4.710</div>
                  <div class="text-base text-slate-500 mt-1">
                    Amount Contributed
                  </div>
                </div>
                <div class="ml-auto p-6 rounded-xl bg__icon-2">
                  <DollarSignIcon class="report-box__icon text-pink-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
          <div class="report-box report-box__right zoom-in">
            <div class="box bg-[#ffffff] p-8">
              <div class="flex items-center">
                <div>
                  <div class="text-3xl font-semibold leading-9">4.710</div>
                  <div class="text-base text-slate-500 mt-1">
                    UC Wallet Balance
                  </div>
                </div>
                <div class="ml-auto p-6 rounded-xl bg__icon-3">
                  <FolderIcon class="report-box__icon text-violet-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: General Report -->

    <!-- BEGIN: Deals Info -->
    <div class="intro-y col-span-12 mt-12">
      <h2 class="text-2xl font-semibold truncate mr-5">Deals</h2>
      <p class="text-lg text-slate-500 mt-2">Available Deals</p>
    </div>
    <div class="intro-y box col-span-12">
      <!-- BEGIN: NETWORK TAB -->
      <div
        class="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 items-center justify-between mb-4 lg:mb-8"
      >
        <ul
          class="nav nav-link-tabs w-full lg:w-2/4 rounded-md mx-auto"
          role="tablist"
        >
          <li
            @click="activeNetworkTabOne"
            id="active-bsc-tab"
            class="nav-item flex-1"
            role="presentation"
          >
            <button
              class="nav-link cursor-pointer text-sm lg:text-base w-full py-5 px-2 active"
              data-tw-toggle="pill"
              data-tw-target="#active-network"
              type="button"
              role="tab"
              aria-controls="active-network"
              aria-selected="true"
            >
              BSC
            </button>
          </li>
          <li
            @click="activeNetworkTabTwo"
            id="inactive-eth-tab"
            class="nav-item flex-1"
            role="presentation"
          >
            <button
              class="nav-link text-sm lg:text-base w-full py-5 px-2"
              data-tw-toggle="pill"
              data-tw-target="#inactive-network"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Ethereum
            </button>
          </li>
          <li
            @click="activeNetworkTabThree"
            id="inactive-polygon-tab"
            class="nav-item flex-1"
            role="presentation"
          >
            <button
              class="nav-link text-sm lg:text-base w-full py-5 px-2"
              data-tw-toggle="pill"
              data-tw-target="#inactive-network"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Polygon
            </button>
          </li>
        </ul>
      </div>
      <!-- END: NETWORK TAB -->

      <!-- BEGIN: NETWORK TAB CONTENT -->
      <div class="intro-y rounded-xl overflow-auto lg:overflow-visible">
        <!-- BEGIN: TAB CONTENT BSC -->

        <div v-show="networkTab === 1">
          <!-- BEGIN: SINGLE NETWORK TAB SECTION -->
          <div class="mx-8 pb-8">
            <!-- BEGIN: SINGLE NETWORK TAB -->
            <div
              class="flex flex-col lg:flex-row items-center justify-between mb-4 lg:mb-8"
            >
              <ul
                class="nav nav-pills w-full lg:w-2/6 bg-slate-200 dark:bg-black/10 rounded-md mr-auto p-1"
                role="tablist"
              >
                <li
                  @click="activeTabOne"
                  id="active-ongoing-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link text-xs lg:text-sm w-full py-1.5 px-2 active"
                    data-tw-toggle="pill"
                    data-tw-target="#active-users"
                    type="button"
                    role="tab"
                    aria-controls="active-users"
                    aria-selected="true"
                  >
                    Ongoing
                  </button>
                </li>
                <li
                  @click="activeTabTwo"
                  id="inactive-upcoming-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link text-xs lg:text-sm w-full py-1.5 px-2"
                    data-tw-toggle="pill"
                    data-tw-target="#inactive-users"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Upcoming
                  </button>
                </li>
                <li
                  @click="activeTabThree"
                  id="inactive-completed-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link text-xs lg:text-sm w-full py-1.5 px-2"
                    data-tw-toggle="pill"
                    data-tw-target="#inactive-users"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Completed
                  </button>
                </li>
                <li
                  @click="activeTabFour"
                  id="inactive-mydeals-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link text-xs lg:text-sm w-full py-1.5 px-2"
                    data-tw-toggle="pill"
                    data-tw-target="#inactive-users"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    My Deals
                  </button>
                </li>
              </ul>
              <div class="w-full sm:w-auto mt-6 sm:mt-0 sm:ml-auto md:ml-0">
                <div class="ml-auto w-56 lg:w-64 relative text-slate-500">
                  <input
                    type="text"
                    class="form-control w-64 rounded-md input--rounded box pr-10"
                    placeholder="Search..."
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    icon-name="search"
                    class="lucide lucide-search w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
                    data-lucide="search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
            </div>
            <!-- END: SINGLE NETWORK TAB -->
            <!-- BEGIN: SINGLE NETWORK CONTENT TAB -->
            <div class="intro-y rounded-xl overflow-auto lg:overflow-visible">
              <!-- BEGIN: TAB CONTENT ONGOING -->
              <div v-show="tab === 1">
                <table class="table table-report" v-if="getDeals">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">PRODUCT</th>
                      <th class="text-center whitespace-nowrap">POOL ID</th>
                      <th class="whitespace-nowrap w-72">NAME</th>
                      <th class="text-center whitespace-nowrap">SYMBOL</th>

                      <th class="text-center whitespace-nowrap">PERCENTAGE</th>
                      <th class="text-center whitespace-nowrap">ENDTIME</th>
                      <th class="text-center whitespace-nowrap">
                        ENTER YOUR CONTRIBUTION
                      </th>
                      <th class="text-center whitespace-nowrap">
                        CONTRIBUTION
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      v-for="user in poolsOngoing"
                      :key="user.id"
                      class="intro-x zoom-in"
                    >
                      <td
                        class="w-20 border-l-4 border-primary dark:border-primary pl-4"
                      >
                        <div class="flex">
                          <div class="w-16 h-16 image-fit zoom-in">
                            <Tippy
                              tag="img"
                              alt="Midone Tailwind HTML Admin Template"
                              class="rounded-md"
                              src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                              content=""
                            />
                          </div>
                        </div>
                      </td>
                      <td class="text-center">
                       <a class="font-semibold text-lg">{{ user.id }}</a> 
                        <br>
                        <a href="#" @click="bscOngoingModal = true" class="underline text-primary pt-4">View Details</a>
                        <div class="mt-2"></div>
                      </td>
                      <td>
                        <a
                          href=""
                          class="text-lg font-semibold capitalize whitespace-nowrap"
                          >{{ user.name }}</a
                        >
                        <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                          <div class="flex gap-4 text-slate-500 text-xs">
                            <div class="mr-auto font-semibold">
                              Total contribution
                            </div>
                            <div>
                              {{ user.currentlyStaked }} /
                              {{ user.poolStakableAmount }}
                            </div>
                          </div>
                          <div class="progress h-1 mt-2">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              :style="`width:${user.currentPercentage}%`"
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td class="text-center">{{ user.symbol }}</td>
                      <td class="text-center">{{ user.currentPercentage }}%</td>
                      <td class="text-center">{{ user.humanEndTime }}</td>
                      <td class="text-center">
                        <input
                          @input="handleInput(user.id, $event)"
                          :value="payload[user.id]"
                          type="number"
                          class="form-control w-56 rounded-md input--rounded box pr-10"
                          placeholder="Enter Amount..."
                          :min="1"
                        />
                      </td>
                      <td class="table-report__action w-40">
                        <div class="flex justify-center gap-4 items-center">
                          <a
                            @click="contribute(user.id, user.name, user.symbol)"
                            class="flex items-center text-white text-center bg-primary p-2 px-6 rounded"
                            >Contribute
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- END: TAB CONTENT ONGOING -->

              <!-- BEGIN: BSC ONGOING MODAL -->
              <Modal
                size="modal-xl"
                :show="bscOngoingModal"
                @hidden="bscOngoingModal = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">Bsc Ongoing</div>
                  <a
                    @click="bscOngoingModal = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>
                <ModalBody class="p-10 text-center">
                  <TabGroup>
                    <!-- BEGIN: Profile Info -->
                    <div class="intro-y mt-5">
                      <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-8 box">
                          <div class="intro-y px-5 mt-5">
                            <div class="flex flex-col justify-between mx-auto">
                              <div
                                style="
                                  background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                                "
                                class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                              ></div>
                              <div class="flex items-center justify-between">
                                <div
                                  class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md"
                                >
                                  <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    class="rounded-md w-40 h-40 shadow-xl object-cover"
                                    src="@/assets/images/uc/gt-protocol.jpg"
                                  />
                                </div>
                                <div
                                  class="flex flex-wrap items-center gap-4 my-8 float-right"
                                >
                                  <button
                                    class="btn btn-facebook p-3 rounded-full"
                                  >
                                    <FacebookIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-twitter p-3 rounded-full"
                                  >
                                    <TwitterIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-instagram p-3 rounded-full"
                                  >
                                    <InstagramIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-linkedin p-3 rounded-full"
                                  >
                                    <LinkedinIcon class="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-12">
                              <div class="col-span-12">
                                <div
                                  class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                                >
                                  <div>
                                    <h2 class="font-semibold text-xl pt-6">
                                      GT- Protocol
                                      <span
                                        class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                        >GTP</span
                                      >
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TabList
                              class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                            >
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </Tab>
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </Tab>

                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </Tab>
                            </TabList>
                          </div>
                        </div>
                        <div class="col-span-4">
                          <div class="intro-y box col-span-12 lg:col-span-6">
                            <div
                              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                            >
                              <h2
                                class="font-semibold text-base py-2 px-5 mr-auto"
                              >
                                Details
                              </h2>

                              <button
                                class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                              >
                                Closed
                              </button>
                            </div>
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Tier Access
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    Public Offering
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Price Per
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    1 GTP = 0.15 USDC
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Total Offering
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    733,333 GTP
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Global Cap
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    110,000 USDC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Profile Info -->
                   
                   
                  </TabGroup>
                </ModalBody>
              </Modal>
              <!-- END: BSC ONGOING MODAL -->

              <!-- BEGIN: TAB CONTENT UPCOMING -->
              <div v-show="tab === 2">
                <table class="table table-report">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">PRODUCT</th>
                      <th class="text-center whitespace-nowrap">POOL ID</th>
                      <th class="whitespace-nowrap w-72">NAME</th>
                      <th class="text-center whitespace-nowrap">SYMBOL</th>

                      <th class="text-center whitespace-nowrap">
                        MAXIMUM CONTRIBUTION
                      </th>
                      <th class="text-center whitespace-nowrap">START TIME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="user in poolsUpcoming"
                      :key="user.id"
                      class="intro-x zoom-in"
                    >
                      <td class="w-20">
                        <div class="flex">
                          <div class="w-16 h-16 image-fit zoom-in">
                            <Tippy
                              tag="img"
                              alt="Midone Tailwind HTML Admin Template"
                              class="rounded-md"
                              src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                              content=""
                            />
                          </div>
                        </div>
                      </td>
                     <td class="text-center">
                       <a class="font-semibold text-lg">{{ user.id }}</a> 
                        <br>
                        <a href="#" @click="bscUpcomingModal = true" class="underline text-primary pt-4">View Details</a>
                        <div class="mt-2"></div>
                      </td>
                      <td>
                        <a
                          href=""
                          class="text-lg font-semibold whitespace-nowrap"
                          >{{ user.name }}</a
                        >
                        <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                          <div class="flex text-slate-500 text-xs">
                            <div class="mr-auto font-semibold">
                              Total contribution
                            </div>
                            <div>
                              {{ user.currentlyStaked }} /
                              {{ user.poolStakableAmount }}
                            </div>
                          </div>
                          <div class="progress h-1 mt-2">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              :style="`width:${user.currentPercentage}%`"
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td class="text-center">{{ user.symbol }}</td>
                      <td class="text-center">
                        {{ user.poolStakableAmount }} {{ user.symbol }}
                      </td>
                      <td class="text-center">{{ user.humanEndTime }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- END: TAB CONTENT UPCOMING -->

              <!-- BEGIN: BSC UPCOMING MODAL -->
              <Modal
                size="modal-xl"
                :show="bscUpcomingModal"
                @hidden="bscUpcomingModal = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">BSC Upcoming</div>
                  <a
                    @click="bscUpcomingModal = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>
                <ModalBody class="p-10 text-center">
                  <TabGroup>
                    <!-- BEGIN: Profile Info -->
                    <div class="intro-y mt-5">
                      <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-8 box">
                          <div class="intro-y px-5 mt-5">
                            <div class="flex flex-col justify-between mx-auto">
                              <div
                                style="
                                  background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                                "
                                class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                              ></div>
                              <div class="flex items-center justify-between">
                                <div
                                  class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md"
                                >
                                  <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    class="rounded-md w-40 h-40 shadow-xl object-cover"
                                    src="@/assets/images/uc/gt-protocol.jpg"
                                  />
                                </div>
                                <div
                                  class="flex flex-wrap items-center gap-4 my-8 float-right"
                                >
                                  <button
                                    class="btn btn-facebook p-3 rounded-full"
                                  >
                                    <FacebookIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-twitter p-3 rounded-full"
                                  >
                                    <TwitterIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-instagram p-3 rounded-full"
                                  >
                                    <InstagramIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-linkedin p-3 rounded-full"
                                  >
                                    <LinkedinIcon class="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-12">
                              <div class="col-span-12">
                                <div
                                  class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                                >
                                  <div>
                                    <h2 class="font-semibold text-xl pt-6">
                                      GT- Protocol
                                      <span
                                        class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                        >GTP</span
                                      >
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TabList
                              class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                            >
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </Tab>
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </Tab>

                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </Tab>
                            </TabList>
                          </div>
                        </div>
                        <div class="col-span-4">
                          <div class="intro-y box col-span-12 lg:col-span-6">
                            <div
                              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                            >
                              <h2
                                class="font-semibold text-base py-2 px-5 mr-auto"
                              >
                                Details
                              </h2>

                              <button
                                class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                              >
                                Closed
                              </button>
                            </div>
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Tier Access
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    Public Offering
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Price Per
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    1 GTP = 0.15 USDC
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Total Offering
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    733,333 GTP
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Global Cap
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    110,000 USDC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Profile Info -->
                 
                  </TabGroup>
                </ModalBody>
              </Modal>
              <!-- END: BSC UPCOMING MODAL -->

              <!-- BEGIN: TAB CONTENT COMPLETED -->
              <div v-show="tab === 3">
                <table class="table table-report">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">PRODUCT</th>
                      <th class="text-center whitespace-nowrap">POOL ID</th>
                      <th class="whitespace-nowrap w-72">NAME</th>
                      <th class="text-center whitespace-nowrap">SYMBOL</th>

                      <th class="text-center whitespace-nowrap">
                        TOTAL CONTRIBUTION
                      </th>
                      <th class="text-center whitespace-nowrap">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="user in poolsCompleted"
                      :key="user.id"
                      class="intro-x zoom-in"
                    >
                      <td
                        class="w-20 border-l-[3px] border-primary dark:border-primary pl-4"
                      >
                        <div class="flex">
                          <div class="w-16 h-16 image-fit zoom-in">
                            <Tippy
                              tag="img"
                              alt="Midone Tailwind HTML Admin Template"
                              class="rounded-md"
                              src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                              content=""
                            />
                          </div>
                        </div>
                      </td>
                      <td class="text-center">
                       <a class="font-semibold text-lg">{{ user.id }}</a> 
                        <br>
                        <a href="#" @click="bscCompletedModal = true" class="underline text-primary pt-4">View Details</a>
                        <div class="mt-2"></div>
                      </td>
                      <td>
                        <a
                          href=""
                          class="text-lg font-semibold whitespace-nowrap"
                          >{{ user.name }}</a
                        >
                        <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                          <div class="flex text-slate-500 text-xs">
                            <div class="mr-auto font-semibold">
                              Total contribution
                            </div>
                            <div>
                              {{ user.currentlyStaked }} /
                              {{ user.poolStakableAmount }}
                            </div>
                          </div>
                          <div class="progress h-1 mt-2">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              :style="`width:${user.currentPercentage}%`"
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td class="text-center">{{ user.symbol }}</td>
                      <td class="text-center">{{ user.currentPercentage }}%</td>
                      <td class="text-center">
                        <span
                          class="bg-gray-400/20 text-gray-600 text-sm m-2 px-2 py-1 rounded z-10"
                          >Sale Ended</span
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- END: TAB CONTENT COMPLETED -->

              <!-- BEGIN: BSC COMPLETED MODAL -->
              <Modal
                size="modal-xl"
                :show="bscCompletedModal"
                @hidden="bscCompletedModal = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">BSC Completed</div>
                  <a
                    @click="bscCompletedModal = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>
                <ModalBody class="p-10 text-center">
                  <TabGroup>
                    <!-- BEGIN: Profile Info -->
                    <div class="intro-y mt-5">
                      <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-8 box">
                          <div class="intro-y px-5 mt-5">
                            <div class="flex flex-col justify-between mx-auto">
                              <div
                                style="
                                  background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                                "
                                class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                              ></div>
                              <div class="flex items-center justify-between">
                                <div
                                  class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md"
                                >
                                  <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    class="rounded-md w-40 h-40 shadow-xl object-cover"
                                    src="@/assets/images/uc/gt-protocol.jpg"
                                  />
                                </div>
                                <div
                                  class="flex flex-wrap items-center gap-4 my-8 float-right"
                                >
                                  <button
                                    class="btn btn-facebook p-3 rounded-full"
                                  >
                                    <FacebookIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-twitter p-3 rounded-full"
                                  >
                                    <TwitterIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-instagram p-3 rounded-full"
                                  >
                                    <InstagramIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-linkedin p-3 rounded-full"
                                  >
                                    <LinkedinIcon class="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-12">
                              <div class="col-span-12">
                                <div
                                  class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                                >
                                  <div>
                                    <h2 class="font-semibold text-xl pt-6">
                                      GT- Protocol
                                      <span
                                        class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                        >GTP</span
                                      >
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TabList
                              class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                            >
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </Tab>
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </Tab>

                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </Tab>
                            </TabList>
                          </div>
                        </div>
                        <div class="col-span-4">
                          <div class="intro-y box col-span-12 lg:col-span-6">
                            <div
                              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                            >
                              <h2
                                class="font-semibold text-base py-2 px-5 mr-auto"
                              >
                                Details
                              </h2>

                              <button
                                class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                              >
                                Closed
                              </button>
                            </div>
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Tier Access
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    Public Offering
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Price Per
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    1 GTP = 0.15 USDC
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Total Offering
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    733,333 GTP
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Global Cap
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    110,000 USDC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Profile Info -->
                    
                  </TabGroup>
                </ModalBody>
              </Modal>
              <!-- END: BSC COMPLETED MODAL -->

              <!-- BEGIN: TAB CONTENT MYDEALS -->
              <div v-show="tab === 4">
                <table class="table table-report">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">PRODUCT</th>
                      <th class="text-center whitespace-nowrap">POOL ID</th>
                      <th class="whitespace-nowrap w-72">NAME</th>
                      <th class="text-center whitespace-nowrap">SYMBOL</th>

                      <th class="text-center whitespace-nowrap">
                        MAXIMUM CONTRIBUTION
                      </th>
                      <th class="text-center whitespace-nowrap">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="user in poolsMyDeal"
                      :key="user.id"
                      class="intro-x zoom-in"
                    >
                      <td class="w-20">
                        <div class="flex">
                          <div class="w-16 h-16 image-fit zoom-in">
                            <Tippy
                              tag="img"
                              alt="Midone Tailwind HTML Admin Template"
                              class="rounded-md"
                              src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                              content=""
                            />
                          </div>
                        </div>
                      </td>
                      <td class="text-center">
                       <a class="font-semibold text-lg">{{ user.id }}</a> 
                        <br>
                        <a href="#" @click="bscMydealsModal = true" class="underline text-primary pt-4">View Details</a>
                        <div class="mt-2"></div>
                      </td>
                      <td>
                        <a
                          href=""
                          class="text-lg font-semibold whitespace-nowrap"
                          >{{ user.name }}</a
                        >
                        <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                          <div class="flex text-slate-500 text-xs">
                            <div class="mr-auto font-semibold">
                              Total contribution
                            </div>
                            <div>
                              {{ user.currentlyStaked }} /
                              {{ user.poolStakableAmount }}
                            </div>
                          </div>
                          <div class="progress h-1 mt-2">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              :style="`width:${user.currentPercentage}%`"
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td class="text-center">{{ user.symbol }}</td>
                      <td class="text-center">{{ user.currentPercentage }}%</td>
                      <td class="text-center">{{ user.poolsStatus }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- END: TAB CONTENT MYDEALS -->

              <!-- BEGIN: BSC MY DEALS MODAL -->
              <Modal
                size="modal-xl"
                :show="bscMydealsModal"
                @hidden="bscMydealsModal = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">BSC My Deals</div>
                  <a
                    @click="bscMydealsModal = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>
                <ModalBody class="p-10 text-center">
                  <TabGroup>
                    <!-- BEGIN: Profile Info -->
                    <div class="intro-y mt-5">
                      <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-8 box">
                          <div class="intro-y px-5 mt-5">
                            <div class="flex flex-col justify-between mx-auto">
                              <div
                                style="
                                  background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                                "
                                class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                              ></div>
                              <div class="flex items-center justify-between">
                                <div
                                  class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md"
                                >
                                  <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    class="rounded-md w-40 h-40 shadow-xl object-cover"
                                    src="@/assets/images/uc/gt-protocol.jpg"
                                  />
                                </div>
                                <div
                                  class="flex flex-wrap items-center gap-4 my-8 float-right"
                                >
                                  <button
                                    class="btn btn-facebook p-3 rounded-full"
                                  >
                                    <FacebookIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-twitter p-3 rounded-full"
                                  >
                                    <TwitterIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-instagram p-3 rounded-full"
                                  >
                                    <InstagramIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-linkedin p-3 rounded-full"
                                  >
                                    <LinkedinIcon class="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-12">
                              <div class="col-span-12">
                                <div
                                  class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                                >
                                  <div>
                                    <h2 class="font-semibold text-xl pt-6">
                                      GT- Protocol
                                      <span
                                        class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                        >GTP</span
                                      >
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TabList
                              class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                            >
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </Tab>
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </Tab>

                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </Tab>
                            </TabList>
                          </div>
                        </div>
                        <div class="col-span-4">
                          <div class="intro-y box col-span-12 lg:col-span-6">
                            <div
                              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                            >
                              <h2
                                class="font-semibold text-base py-2 px-5 mr-auto"
                              >
                                Details
                              </h2>

                              <button
                                class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                              >
                                Closed
                              </button>
                            </div>
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Tier Access
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    Public Offering
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Price Per
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    1 GTP = 0.15 USDC
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Total Offering
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    733,333 GTP
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Global Cap
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    110,000 USDC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Profile Info -->
                    
                  </TabGroup>
                </ModalBody>
              </Modal>
              <!-- END: BSC MY DEALS MODAL -->

              <!-- BEGIN: CONTRIBUTE MODAL -->
              <Modal
                size="modal-lg"
                :show="largeModalSizePreview"
                @hidden="largeModalSizePreview = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">Contribution</div>
                  <a
                    @click="largeModalSizePreview = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>

                <ModalBody class="p-6">
                  <!-- <div class="rounded-xl"> -->

                  <div class="flex justify-between gap-6">
                    <div class="p-6 rounded-xl w-full bg-[#d1a5651c]">
                      <p class="text-base">Pay</p>

                      <p class="text-black">{{ currentModalId }}</p>
                      <p>{{ currentModalName }}</p>
                      <p>{{ currentModalSymbol }}</p>

                      <div class="flex items-center my-2 gap-4">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-10 h-10"
                          alt=""
                        />
                        <span class="text-black font-bold text-2xl"
                          >5 USDT</span
                        >
                      </div>
                      <p class="text-base">Include Fees</p>
                    </div>
                  </div>
                  <!-- </div> -->

                  <div class="my-6 bg-[#f8f8f8]">
                    <div
                      class="px-6 py-3 flex justify-between border-b border-[#E7E7E7] border-solid"
                    >
                      <p class="text-sm">Amount</p>
                      <div class="flex items-center gap-2">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-5 h-5"
                          alt=""
                        />
                        <p class="text-black font-bold text-sm">
                          {{ currentModalAmount }} {{ currentModalSymbol }}
                        </p>
                      </div>
                    </div>
                    <div
                      class="px-6 py-3 flex justify-between border-b border-[#E7E7E7] border-solid"
                    >
                      <p class="text-sm">FEE</p>
                      <div class="flex items-center gap-2">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-5 h-5"
                          alt=""
                        />
                        <p class="text-black font-bold text-sm">
                          <span class="text-yellow-600">0.05 USDT</span> or
                          <span class="text-yellow-600">1%</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="form-check mt-5">
                    <input
                      id="vertical-form-3"
                      class="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label class="form-check-label" for="vertical-form-3"
                      >I AGREE with all statements.</label
                    >
                  </div>

                  <div class="pt-8 text-center">
                    <button
                      type="button"
                      @click="finalContribute()"
                      class="btn btn-primary w-full"
                      :disabled="inSufficientButtonStatus"
                    >
                      Final Contribute
                    </button>
                    <div class="mt-2 py-3 flex items-center justify-between">
                      <p class="text-sm">Your Balance</p>
                      <p class="text-red-600 font-bold text-sm">
                        Insufficient Funds
                      </p>
                      <div class="flex items-center gap-2">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-5 h-5"
                          alt=""
                        />
                        <p class="text-black font-bold text-sm">
                          <span class="text-red-600">0 USDT</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </ModalBody>
              </Modal>
              <!-- END: CONTRIBUTE MODAL -->
            </div>
            <!-- END: SINGLE NETWORK CONTENT TAB -->
          </div>
          <!-- END: SINGLE NETWORK TAB SECTION -->
        </div>

        <!-- END: TAB CONTENT BSC -->

        <!-- BEGIN: TAB CONTENT ETHEREUM -->
        <div v-show="networkTab === 2">
          <!-- BEGIN: SINGLE NETWORK TAB SECTION -->
          <div class="mx-8 pb-8">
            <!-- BEGIN: SINGLE NETWORK TAB -->
            <div
              class="flex flex-col lg:flex-row items-center justify-between mb-4 lg:mb-8"
            >
              <ul
                class="nav nav-pills w-full lg:w-2/6 bg-slate-200 dark:bg-black/10 rounded-md mr-auto p-1"
                role="tablist"
              >
                <li
                  @click="activeTabOne"
                  id="active-ongoing-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link text-xs lg:text-sm w-full py-1.5 px-2 active"
                    data-tw-toggle="pill"
                    data-tw-target="#active-users"
                    type="button"
                    role="tab"
                    aria-controls="active-users"
                    aria-selected="true"
                  >
                    Ongoing
                  </button>
                </li>
                <li
                  @click="activeTabTwo"
                  id="inactive-upcoming-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link text-xs lg:text-sm w-full py-1.5 px-2"
                    data-tw-toggle="pill"
                    data-tw-target="#inactive-users"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Upcoming
                  </button>
                </li>
                <li
                  @click="activeTabThree"
                  id="inactive-completed-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link text-xs lg:text-sm w-full py-1.5 px-2"
                    data-tw-toggle="pill"
                    data-tw-target="#inactive-users"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Completed
                  </button>
                </li>
                <li
                  @click="activeTabFour"
                  id="inactive-mydeals-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link text-xs lg:text-sm w-full py-1.5 px-2"
                    data-tw-toggle="pill"
                    data-tw-target="#inactive-users"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    My Deals
                  </button>
                </li>
              </ul>
              <div class="w-full sm:w-auto mt-6 sm:mt-0 sm:ml-auto md:ml-0">
                <div class="ml-auto w-56 lg:w-64 relative text-slate-500">
                  <input
                    type="text"
                    class="form-control w-64 rounded-md input--rounded box pr-10"
                    placeholder="Search..."
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    icon-name="search"
                    class="lucide lucide-search w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
                    data-lucide="search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
            </div>
            <!-- END: SINGLE NETWORK TAB -->
            <!-- BEGIN: SINGLE NETWORK CONTENT TAB -->
            <div class="intro-y rounded-xl overflow-auto lg:overflow-visible">
              <!-- BEGIN: TAB CONTENT ONGOING -->
                <div v-show="tab === 1">
                  <table class="table table-report">
                    <thead>
                      <tr>
                        <th class="whitespace-nowrap">PRODUCT</th>
                        <th class="text-center whitespace-nowrap">POOL ID</th>
                        <th class="whitespace-nowrap w-72">NAME</th>
                        <th class="text-center whitespace-nowrap">SYMBOL</th>

                        <th class="text-center whitespace-nowrap">
                          PERCENTAGE
                        </th>
                        <th class="text-center whitespace-nowrap">ENDTIME</th>
                        <th class="text-center whitespace-nowrap">
                          ENTER YOUR CONTRIBUTION
                        </th>
                        <th class="text-center whitespace-nowrap">
                          CONTRIBUTION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="user in poolsOngoing"
                        :key="user.id"
                        class="intro-x zoom-in"
                      >
                        <td
                          class="w-20 border-l-4 border-primary dark:border-primary pl-4"
                        >
                          <div class="flex">
                            <div class="w-16 h-16 image-fit zoom-in">
                              <Tippy
                                tag="img"
                                alt="Midone Tailwind HTML Admin Template"
                                class="rounded-md"
                                src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                                content=""
                              />
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                       <a class="font-semibold text-lg">{{ user.id }}</a> 
                        <br>
                        <a href="#" @click="ethOngoingModal = true" class="underline text-primary pt-4">View Details</a>
                        <div class="mt-2"></div>
                      </td>
                        <td>
                          <a
                            href=""
                            class="text-lg font-semibold capitalize whitespace-nowrap"
                            >{{ user.name }}</a
                          >
                          <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                            <div class="flex gap-4 text-slate-500 text-xs">
                              <div class="mr-auto font-semibold">
                                Total contribution
                              </div>
                              <div>
                                {{ user.currentlyStaked }} /
                                {{ user.poolStakableAmount }}
                              </div>
                            </div>
                            <div class="progress h-1 mt-2">
                              <div
                                class="progress-bar bg-primary"
                                role="progressbar"
                                aria-valuenow="0"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                :style="`width:${user.currentPercentage}%`"
                              ></div>
                            </div>
                          </div>
                        </td>

                        <td class="text-center">{{ user.symbol }}</td>
                        <td class="text-center">
                          {{ user.currentPercentage }}%
                        </td>
                        <td class="text-center">{{ user.humanEndTime }}</td>
                        <td class="text-center">
                          <input
                            @input="handleInput(user.id, $event)"
                            :value="payload[user.id]"
                            type="number"
                            class="form-control w-56 rounded-md input--rounded box pr-10"
                            placeholder="Enter Amount..."
                            :min="1"
                          />
                        </td>
                        <td class="table-report__action w-40">
                          <div class="flex justify-center gap-4 items-center">
                            <a
                              @click="largeModalSizePreview = true"
                              class="flex items-center text-white text-center bg-primary p-2 px-6 rounded"
                              >Contribute
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              <!-- END: TAB CONTENT ONGOING -->

              <!-- BEGIN: ETH ONGOING MODAL -->
              <Modal
                size="modal-xl"
                :show="ethOngoingModal"
                @hidden="ethOngoingModal = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">ETH Ongoing</div>
                  <a
                    @click="ethOngoingModal = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>
                <ModalBody class="p-10 text-center">
                  <TabGroup>
                    <!-- BEGIN: Profile Info -->
                    <div class="intro-y mt-5">
                      <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-8 box">
                          <div class="intro-y px-5 mt-5">
                            <div class="flex flex-col justify-between mx-auto">
                              <div
                                style="
                                  background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                                "
                                class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                              ></div>
                              <div class="flex items-center justify-between">
                                <div
                                  class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md"
                                >
                                  <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    class="rounded-md w-40 h-40 shadow-xl object-cover"
                                    src="@/assets/images/uc/gt-protocol.jpg"
                                  />
                                </div>
                                <div
                                  class="flex flex-wrap items-center gap-4 my-8 float-right"
                                >
                                  <button
                                    class="btn btn-facebook p-3 rounded-full"
                                  >
                                    <FacebookIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-twitter p-3 rounded-full"
                                  >
                                    <TwitterIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-instagram p-3 rounded-full"
                                  >
                                    <InstagramIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-linkedin p-3 rounded-full"
                                  >
                                    <LinkedinIcon class="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-12">
                              <div class="col-span-12">
                                <div
                                  class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                                >
                                  <div>
                                    <h2 class="font-semibold text-xl pt-6">
                                      GT- Protocol
                                      <span
                                        class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                        >GTP</span
                                      >
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TabList
                              class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                            >
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </Tab>
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </Tab>

                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </Tab>
                            </TabList>
                          </div>
                        </div>
                        <div class="col-span-4">
                          <div class="intro-y box col-span-12 lg:col-span-6">
                            <div
                              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                            >
                              <h2
                                class="font-semibold text-base py-2 px-5 mr-auto"
                              >
                                Details
                              </h2>

                              <button
                                class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                              >
                                Closed
                              </button>
                            </div>
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Tier Access
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    Public Offering
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Price Per
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    1 GTP = 0.15 USDC
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Total Offering
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    733,333 GTP
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Global Cap
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    110,000 USDC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Profile Info -->
                    
                  </TabGroup>
                </ModalBody>
              </Modal>
              <!-- END: ETH ONGOING MODAL -->

              <!-- BEGIN: TAB CONTENT UPCOMING -->
              <div v-show="tab === 2">
                <table class="table table-report">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">PRODUCT</th>
                      <th class="text-center whitespace-nowrap">POOL ID</th>
                      <th class="whitespace-nowrap w-72">NAME</th>
                      <th class="text-center whitespace-nowrap">SYMBOL</th>

                      <th class="text-center whitespace-nowrap">
                        MAXIMUM CONTRIBUTION
                      </th>
                      <th class="text-center whitespace-nowrap">START TIME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="user in poolsUpcoming"
                      :key="user.id"
                      class="intro-x zoom-in"
                    >
                      <td class="w-20">
                        <div class="flex">
                          <div class="w-16 h-16 image-fit zoom-in">
                            <Tippy
                              tag="img"
                              alt="Midone Tailwind HTML Admin Template"
                              class="rounded-md"
                              src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                              content=""
                            />
                          </div>
                        </div>
                      </td>
                     <td class="text-center">
                       <a class="font-semibold text-lg">{{ user.id }}</a> 
                        <br>
                        <a href="#" @click="ethUpcomingModal = true" class="underline text-primary pt-4">View Details</a>
                        <div class="mt-2"></div>
                      </td>
                      <td>
                        <a
                          href=""
                          class="text-lg font-semibold whitespace-nowrap"
                          >{{ user.name }}</a
                        >
                        <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                          <div class="flex text-slate-500 text-xs">
                            <div class="mr-auto font-semibold">
                              Total contribution
                            </div>
                            <div>
                              {{ user.currentlyStaked }} /
                              {{ user.poolStakableAmount }}
                            </div>
                          </div>
                          <div class="progress h-1 mt-2">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              :style="`width:${user.currentPercentage}%`"
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td class="text-center">{{ user.symbol }}</td>
                      <td class="text-center">
                        {{ user.poolStakableAmount }} {{ user.symbol }}
                      </td>
                      <td class="text-center">{{ user.humanEndTime }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- END: TAB CONTENT UPCOMING -->

              <!-- BEGIN: ETH UPCOMING MODAL -->
              <Modal
                size="modal-xl"
                :show="ethUpcomingModal"
                @hidden="ethUpcomingModal = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">ETH Upcoming</div>
                  <a
                    @click="ethUpcomingModal = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>
                <ModalBody class="p-10 text-center">
                  <TabGroup>
                    <!-- BEGIN: Profile Info -->
                    <div class="intro-y mt-5">
                      <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-8 box">
                          <div class="intro-y px-5 mt-5">
                            <div class="flex flex-col justify-between mx-auto">
                              <div
                                style="
                                  background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                                "
                                class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                              ></div>
                              <div class="flex items-center justify-between">
                                <div
                                  class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md"
                                >
                                  <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    class="rounded-md w-40 h-40 shadow-xl object-cover"
                                    src="@/assets/images/uc/gt-protocol.jpg"
                                  />
                                </div>
                                <div
                                  class="flex flex-wrap items-center gap-4 my-8 float-right"
                                >
                                  <button
                                    class="btn btn-facebook p-3 rounded-full"
                                  >
                                    <FacebookIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-twitter p-3 rounded-full"
                                  >
                                    <TwitterIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-instagram p-3 rounded-full"
                                  >
                                    <InstagramIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-linkedin p-3 rounded-full"
                                  >
                                    <LinkedinIcon class="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-12">
                              <div class="col-span-12">
                                <div
                                  class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                                >
                                  <div>
                                    <h2 class="font-semibold text-xl pt-6">
                                      GT- Protocol
                                      <span
                                        class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                        >GTP</span
                                      >
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TabList
                              class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                            >
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </Tab>
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </Tab>

                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </Tab>
                            </TabList>
                          </div>
                        </div>
                        <div class="col-span-4">
                          <div class="intro-y box col-span-12 lg:col-span-6">
                            <div
                              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                            >
                              <h2
                                class="font-semibold text-base py-2 px-5 mr-auto"
                              >
                                Details
                              </h2>

                              <button
                                class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                              >
                                Closed
                              </button>
                            </div>
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Tier Access
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    Public Offering
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Price Per
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    1 GTP = 0.15 USDC
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Total Offering
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    733,333 GTP
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Global Cap
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    110,000 USDC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Profile Info -->
                    
                  </TabGroup>
                </ModalBody>
              </Modal>
              <!-- END: ETH UPCOMING MODAL -->

              <!-- BEGIN: TAB CONTENT COMPLETED -->
              <div v-show="tab === 3">
                <table class="table table-report">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">PRODUCT</th>
                      <th class="text-center whitespace-nowrap">POOL ID</th>
                      <th class="whitespace-nowrap w-72">NAME</th>
                      <th class="text-center whitespace-nowrap">SYMBOL</th>

                      <th class="text-center whitespace-nowrap">
                        TOTAL CONTRIBUTION
                      </th>
                      <th class="text-center whitespace-nowrap">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="user in poolsCompleted"
                      :key="user.id"
                      class="intro-x zoom-in"
                    >
                      <td class="w-20">
                        <div class="flex">
                          <div class="w-16 h-16 image-fit zoom-in">
                            <Tippy
                              tag="img"
                              alt="Midone Tailwind HTML Admin Template"
                              class="rounded-md"
                              src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                              content=""
                            />
                          </div>
                        </div>
                      </td>
                     <td class="text-center">
                       <a class="font-semibold text-lg">{{ user.id }}</a> 
                        <br>
                        <a href="#" @click="ethCompletedModal = true" class="underline text-primary pt-4">View Details</a>
                        <div class="mt-2"></div>
                      </td>
                      <td>
                        <a
                          href=""
                          class="text-lg font-semibold whitespace-nowrap"
                          >{{ user.name }}</a
                        >
                        <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                          <div class="flex text-slate-500 text-xs">
                            <div class="mr-auto font-semibold">
                              Total contribution
                            </div>
                            <div>
                              {{ user.currentlyStaked }} /
                              {{ user.poolStakableAmount }}
                            </div>
                          </div>
                          <div class="progress h-1 mt-2">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              :style="`width:${user.currentPercentage}%`"
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td class="text-center">{{ user.symbol }}</td>
                      <td class="text-center">{{ user.currentPercentage }}%</td>
                      <td class="text-center">
                        <span
                          class="bg-gray-400/20 text-gray-600 text-sm m-2 px-2 py-1 rounded z-10"
                          >Sale Ended</span
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- END: TAB CONTENT COMPLETED -->

              <!-- BEGIN: ETH COMPLETED MODAL -->
              <Modal
                size="modal-xl"
                :show="ethCompletedModal"
                @hidden="ethCompletedModal = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">ETH Completed</div>
                  <a
                    @click="ethCompletedModal = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>
                <ModalBody class="p-10 text-center">
                  <TabGroup>
                    <!-- BEGIN: Profile Info -->
                    <div class="intro-y mt-5">
                      <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-8 box">
                          <div class="intro-y px-5 mt-5">
                            <div class="flex flex-col justify-between mx-auto">
                              <div
                                style="
                                  background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                                "
                                class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                              ></div>
                              <div class="flex items-center justify-between">
                                <div
                                  class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md"
                                >
                                  <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    class="rounded-md w-40 h-40 shadow-xl object-cover"
                                    src="@/assets/images/uc/gt-protocol.jpg"
                                  />
                                </div>
                                <div
                                  class="flex flex-wrap items-center gap-4 my-8 float-right"
                                >
                                  <button
                                    class="btn btn-facebook p-3 rounded-full"
                                  >
                                    <FacebookIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-twitter p-3 rounded-full"
                                  >
                                    <TwitterIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-instagram p-3 rounded-full"
                                  >
                                    <InstagramIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-linkedin p-3 rounded-full"
                                  >
                                    <LinkedinIcon class="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-12">
                              <div class="col-span-12">
                                <div
                                  class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                                >
                                  <div>
                                    <h2 class="font-semibold text-xl pt-6">
                                      GT- Protocol
                                      <span
                                        class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                        >GTP</span
                                      >
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TabList
                              class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                            >
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </Tab>
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </Tab>

                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </Tab>
                            </TabList>
                          </div>
                        </div>
                        <div class="col-span-4">
                          <div class="intro-y box col-span-12 lg:col-span-6">
                            <div
                              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                            >
                              <h2
                                class="font-semibold text-base py-2 px-5 mr-auto"
                              >
                                Details
                              </h2>

                              <button
                                class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                              >
                                Closed
                              </button>
                            </div>
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Tier Access
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    Public Offering
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Price Per
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    1 GTP = 0.15 USDC
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Total Offering
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    733,333 GTP
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Global Cap
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    110,000 USDC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Profile Info -->
                    
                  </TabGroup>
                </ModalBody>
              </Modal>
              <!-- END: ETH COMPLETED MODAL -->

              <!-- BEGIN: TAB CONTENT MYDEALS -->
              <div v-show="tab === 4">
                <table class="table table-report">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">PRODUCT</th>
                      <th class="text-center whitespace-nowrap">POOL ID</th>
                      <th class="whitespace-nowrap w-72">NAME</th>
                      <th class="text-center whitespace-nowrap">SYMBOL</th>

                      <th class="text-center whitespace-nowrap">
                        MAXIMUM CONTRIBUTION
                      </th>
                      <th class="text-center whitespace-nowrap">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="user in poolsMyDeal"
                      :key="user.id"
                      class="intro-x zoom-in"
                    >
                      <td class="w-20">
                        <div class="flex">
                          <div class="w-16 h-16 image-fit zoom-in">
                            <Tippy
                              tag="img"
                              alt="Midone Tailwind HTML Admin Template"
                              class="rounded-md"
                              src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                              content=""
                            />
                          </div>
                        </div>
                      </td>
                     <td class="text-center">
                       <a class="font-semibold text-lg">{{ user.id }}</a> 
                        <br>
                        <a href="#" @click="ethMydealsModal = true" class="underline text-primary pt-4">View Details</a>
                        <div class="mt-2"></div>
                      </td>
                      <td>
                        <a
                          href=""
                          class="text-lg font-semibold whitespace-nowrap"
                          >{{ user.name }}</a
                        >
                        <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                          <div class="flex text-slate-500 text-xs">
                            <div class="mr-auto font-semibold">
                              Total contribution
                            </div>
                            <div>
                              {{ user.currentlyStaked }} /
                              {{ user.poolStakableAmount }}
                            </div>
                          </div>
                          <div class="progress h-1 mt-2">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              :style="`width:${user.currentPercentage}%`"
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td class="text-center">{{ user.symbol }}</td>
                      <td class="text-center">{{ user.currentPercentage }}%</td>
                      <td class="text-center">{{ user.status }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- END: TAB CONTENT MYDEALS -->

              <!-- BEGIN: ETH MY DEALS MODAL -->
              <Modal
                size="modal-xl"
                :show="ethMydealsModal"
                @hidden="ethMydealsModal = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">ETH MY DEALS</div>
                  <a
                    @click="ethMydealsModal = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>
                <ModalBody class="p-10 text-center">
                  <TabGroup>
                    <!-- BEGIN: Profile Info -->
                    <div class="intro-y mt-5">
                      <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-8 box">
                          <div class="intro-y px-5 mt-5">
                            <div class="flex flex-col justify-between mx-auto">
                              <div
                                style="
                                  background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                                "
                                class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                              ></div>
                              <div class="flex items-center justify-between">
                                <div
                                  class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md"
                                >
                                  <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    class="rounded-md w-40 h-40 shadow-xl object-cover"
                                    src="@/assets/images/uc/gt-protocol.jpg"
                                  />
                                </div>
                                <div
                                  class="flex flex-wrap items-center gap-4 my-8 float-right"
                                >
                                  <button
                                    class="btn btn-facebook p-3 rounded-full"
                                  >
                                    <FacebookIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-twitter p-3 rounded-full"
                                  >
                                    <TwitterIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-instagram p-3 rounded-full"
                                  >
                                    <InstagramIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-linkedin p-3 rounded-full"
                                  >
                                    <LinkedinIcon class="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-12">
                              <div class="col-span-12">
                                <div
                                  class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                                >
                                  <div>
                                    <h2 class="font-semibold text-xl pt-6">
                                      GT- Protocol
                                      <span
                                        class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                        >GTP</span
                                      >
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TabList
                              class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                            >
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </Tab>
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </Tab>

                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </Tab>
                            </TabList>
                          </div>
                        </div>
                        <div class="col-span-4">
                          <div class="intro-y box col-span-12 lg:col-span-6">
                            <div
                              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                            >
                              <h2
                                class="font-semibold text-base py-2 px-5 mr-auto"
                              >
                                Details
                              </h2>

                              <button
                                class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                              >
                                Closed
                              </button>
                            </div>
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Tier Access
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    Public Offering
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Price Per
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    1 GTP = 0.15 USDC
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Total Offering
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    733,333 GTP
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Global Cap
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    110,000 USDC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Profile Info -->
                    
                  </TabGroup>
                </ModalBody>
              </Modal>
              <!-- END: ETH MY DEALS MODAL -->

              <!-- BEGIN: ETHEREUM CONTRIBUTE MODAL -->
              <Modal
                size="modal-lg"
                :show="largeModalSizePreview"
                @hidden="largeModalSizePreview = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">Contribution</div>
                  <a
                    @click="largeModalSizePreview = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>

                <ModalBody class="p-6">
                  <!-- <div class="rounded-xl"> -->
                  <div class="flex justify-between gap-6">
                    <div class="p-6 rounded-xl w-full bg-[#d1a5651c]">
                      <p class="text-black">{{ currentModalId }}</p>
                      <p>{{ currentModalName }}</p>
                      <p>{{ currentModalSymbol }}</p>
                      <p class="text-base">Pay</p>
                      <div class="flex items-center my-2 gap-4">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-10 h-10"
                          alt=""
                        />
                        <span class="text-black font-bold text-2xl"
                          >5 USDT</span
                        >
                      </div>
                      <p class="text-base">Include Fees</p>
                    </div>
                  </div>
                  <!-- </div> -->

                  <div class="my-6 bg-[#f8f8f8]">
                    <div
                      class="px-6 py-3 flex justify-between border-b border-[#E7E7E7] border-solid"
                    >
                      <p class="text-sm">Amount</p>
                      <div class="flex items-center gap-2">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-5 h-5"
                          alt=""
                        />
                        <p class="text-black font-bold text-sm">
                          {{ currentModalAmount }}
                        </p>
                      </div>
                    </div>
                    <div
                      class="px-6 py-3 flex justify-between border-b border-[#E7E7E7] border-solid"
                    >
                      <p class="text-sm">FEE</p>
                      <div class="flex items-center gap-2">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-5 h-5"
                          alt=""
                        />
                        <p class="text-black font-bold text-sm">
                          <span class="text-yellow-600">0.05 USDT</span> or
                          <span class="text-yellow-600">1%</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="form-check mt-5">
                    <input
                      id="vertical-form-3"
                      class="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label class="form-check-label" for="vertical-form-3"
                      >I AGREE with all statements.</label
                    >
                  </div>

                  <div class="pt-8 text-center">
                    <button
                      type="button"
                      @click="finalContribute()"
                      class="btn btn-primary w-full"
                      :disabled="inSufficientButtonStatus"
                    >
                      Final Contribute
                    </button>
                    <div class="mt-2 py-3 flex items-center justify-between">
                      <p class="text-sm">Your Balance</p>
                      <p class="text-red-600 font-bold text-sm">
                        Insufficient Funds
                      </p>
                      <div class="flex items-center gap-2">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-5 h-5"
                          alt=""
                        />
                        <p class="text-black font-bold text-sm">
                          <span class="text-red-600">0 USDT</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </ModalBody>
              </Modal>
              <!-- END: ETHEREUM CONTRIBUTE MODAL -->
            </div>
            <!-- END: SINGLE NETWORK CONTENT TAB -->
          </div>
          <!-- END: SINGLE NETWORK TAB SECTION -->
        </div>
        <!-- END: TAB CONTENT ETHEREUM -->

        <!-- BEGIN: TAB CONTENT POLYGON -->
        <div v-show="networkTab === 3">
          <!-- BEGIN: SINGLE NETWORK TAB SECTION -->
          <div class="mx-8 pb-8">
            <!-- BEGIN: SINGLE NETWORK TAB -->
            <div
              class="flex flex-col lg:flex-row items-center justify-between mb-4 lg:mb-8"
            >
              <ul
                class="nav nav-pills w-full lg:w-2/6 bg-slate-200 dark:bg-black/10 rounded-md mr-auto p-1"
                role="tablist"
              >
                <li
                  @click="activeTabOne"
                  id="active-ongoing-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link text-xs lg:text-sm w-full py-1.5 px-2 active"
                    data-tw-toggle="pill"
                    data-tw-target="#active-users"
                    type="button"
                    role="tab"
                    aria-controls="active-users"
                    aria-selected="true"
                  >
                    Ongoing
                  </button>
                </li>
                <li
                  @click="activeTabTwo"
                  id="inactive-upcoming-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link text-xs lg:text-sm w-full py-1.5 px-2"
                    data-tw-toggle="pill"
                    data-tw-target="#inactive-users"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Upcoming
                  </button>
                </li>
                <li
                  @click="activeTabThree"
                  id="inactive-completed-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link text-xs lg:text-sm w-full py-1.5 px-2"
                    data-tw-toggle="pill"
                    data-tw-target="#inactive-users"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Completed
                  </button>
                </li>
                <li
                  @click="activeTabFour"
                  id="inactive-mydeals-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link text-xs lg:text-sm w-full py-1.5 px-2"
                    data-tw-toggle="pill"
                    data-tw-target="#inactive-users"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    My Deals
                  </button>
                </li>
              </ul>
              <div class="w-full sm:w-auto mt-6 sm:mt-0 sm:ml-auto md:ml-0">
                <div class="ml-auto w-56 lg:w-64 relative text-slate-500">
                  <input
                    type="text"
                    class="form-control w-64 rounded-md input--rounded box pr-10"
                    placeholder="Search..."
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    icon-name="search"
                    class="lucide lucide-search w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
                    data-lucide="search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
            </div>
            <!-- END: SINGLE NETWORK TAB -->
            <!-- BEGIN: SINGLE NETWORK CONTENT TAB -->
            <div class="intro-y rounded-xl overflow-auto lg:overflow-visible">
              <!-- BEGIN: TAB CONTENT ONGOING -->
                <div v-show="tab === 1">
                  <table class="table table-report">
                    <thead>
                      <tr>
                        <th class="whitespace-nowrap">PRODUCT</th>
                        <th class="text-center whitespace-nowrap">POOL ID</th>
                        <th class="whitespace-nowrap w-72">NAME</th>
                        <th class="text-center whitespace-nowrap">SYMBOL</th>

                        <th class="text-center whitespace-nowrap">
                          PERCENTAGE
                        </th>
                        <th class="text-center whitespace-nowrap">ENDTIME</th>
                        <th class="text-center whitespace-nowrap">
                          ENTER YOUR CONTRIBUTION
                        </th>
                        <th class="text-center whitespace-nowrap">
                          CONTRIBUTION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="user in poolsOngoing"
                        :key="user.id"
                        class="intro-x zoom-in"
                      >
                        <td
                          class="w-20 border-l-4 border-primary dark:border-primary pl-4"
                        >
                          <div class="flex">
                            <div class="w-16 h-16 image-fit zoom-in">
                              <Tippy
                                tag="img"
                                alt="Midone Tailwind HTML Admin Template"
                                class="rounded-md"
                                src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                                content=""
                              />
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                        <a class="font-semibold text-lg">{{ user.id }}</a> 
                          <br>
                          <a href="#" @click="polygonOngoingModal = true" class="underline text-primary pt-4">View Details</a>
                          <div class="mt-2"></div>
                        </td>
                        <td>
                          <a
                            href=""
                            class="text-lg font-semibold capitalize whitespace-nowrap"
                            >{{ user.name }}</a
                          >
                          <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                            <div class="flex gap-4 text-slate-500 text-xs">
                              <div class="mr-auto font-semibold">
                                Total contribution
                              </div>
                              <div>
                                {{ user.currentlyStaked }} /
                                {{ user.poolStakableAmount }}
                              </div>
                            </div>
                            <div class="progress h-1 mt-2">
                              <div
                                class="progress-bar bg-primary"
                                role="progressbar"
                                aria-valuenow="0"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                :style="`width:${user.currentPercentage}%`"
                              ></div>
                            </div>
                          </div>
                        </td>

                        <td class="text-center">{{ user.symbol }}</td>
                        <td class="text-center">
                          {{ user.currentPercentage }}%
                        </td>
                        <td class="text-center">{{ user.humanEndTime }}</td>
                        <td class="text-center">
                          <input
                            @input="handleInput(user.id, $event)"
                            :value="payload[user.id]"
                            type="number"
                            class="form-control w-56 rounded-md input--rounded box pr-10"
                            placeholder="Enter Amount..."
                            :min="1"
                          />
                        </td>
                        <td class="table-report__action w-40">
                          <div class="flex justify-center gap-4 items-center">
                            <a
                              @click="largeModalSizePreview = true"
                              class="flex items-center text-white text-center bg-primary p-2 px-6 rounded"
                              >Contribute
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              <!-- END: TAB CONTENT ONGOING -->

              <!-- BEGIN: POLYGON ONGOING MODAL -->
              <Modal
                size="modal-xl"
                :show="polygonOngoingModal"
                @hidden="polygonOngoingModal = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">POLYGOIN ONGOING</div>
                  <a
                    @click="polygonOngoingModal = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>
                <ModalBody class="p-10 text-center">
                  <TabGroup>
                    <!-- BEGIN: Profile Info -->
                    <div class="intro-y mt-5">
                      <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-8 box">
                          <div class="intro-y px-5 mt-5">
                            <div class="flex flex-col justify-between mx-auto">
                              <div
                                style="
                                  background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                                "
                                class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                              ></div>
                              <div class="flex items-center justify-between">
                                <div
                                  class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md"
                                >
                                  <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    class="rounded-md w-40 h-40 shadow-xl object-cover"
                                    src="@/assets/images/uc/gt-protocol.jpg"
                                  />
                                </div>
                                <div
                                  class="flex flex-wrap items-center gap-4 my-8 float-right"
                                >
                                  <button
                                    class="btn btn-facebook p-3 rounded-full"
                                  >
                                    <FacebookIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-twitter p-3 rounded-full"
                                  >
                                    <TwitterIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-instagram p-3 rounded-full"
                                  >
                                    <InstagramIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-linkedin p-3 rounded-full"
                                  >
                                    <LinkedinIcon class="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-12">
                              <div class="col-span-12">
                                <div
                                  class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                                >
                                  <div>
                                    <h2 class="font-semibold text-xl pt-6">
                                      GT- Protocol
                                      <span
                                        class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                        >GTP</span
                                      >
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TabList
                              class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                            >
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </Tab>
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </Tab>

                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </Tab>
                            </TabList>
                          </div>
                        </div>
                        <div class="col-span-4">
                          <div class="intro-y box col-span-12 lg:col-span-6">
                            <div
                              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                            >
                              <h2
                                class="font-semibold text-base py-2 px-5 mr-auto"
                              >
                                Details
                              </h2>

                              <button
                                class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                              >
                                Closed
                              </button>
                            </div>
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Tier Access
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    Public Offering
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Price Per
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    1 GTP = 0.15 USDC
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Total Offering
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    733,333 GTP
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Global Cap
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    110,000 USDC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Profile Info -->
                    
                  </TabGroup>
                </ModalBody>
              </Modal>
              <!-- END: POLYGON ONGOING MODAL -->

              <!-- BEGIN: TAB CONTENT UPCOMING -->
              <div v-show="tab === 2">
                <table class="table table-report">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">PRODUCT</th>
                      <th class="text-center whitespace-nowrap">POOL ID</th>
                      <th class="whitespace-nowrap w-72">NAME</th>
                      <th class="text-center whitespace-nowrap">SYMBOL</th>

                      <th class="text-center whitespace-nowrap">
                        MAXIMUM CONTRIBUTION
                      </th>
                      <th class="text-center whitespace-nowrap">START TIME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="user in poolsUpcoming"
                      :key="user.id"
                      class="intro-x zoom-in"
                    >
                      <td class="w-20">
                        <div class="flex">
                          <div class="w-16 h-16 image-fit zoom-in">
                            <Tippy
                              tag="img"
                              alt="Midone Tailwind HTML Admin Template"
                              class="rounded-md"
                              src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                              content=""
                            />
                          </div>
                        </div>
                      </td>
                      <td class="text-center">
                        <a class="font-semibold text-lg">{{ user.id }}</a> 
                          <br>
                          <a href="#" @click="polygonUpcomingModal = true" class="underline text-primary pt-4">View Details</a>
                          <div class="mt-2"></div>
                        </td>
                      <td>
                        <a
                          href=""
                          class="text-lg font-semibold whitespace-nowrap"
                          >{{ user.name }}</a
                        >
                        <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                          <div class="flex text-slate-500 text-xs">
                            <div class="mr-auto font-semibold">
                              Total contribution
                            </div>
                            <div>
                              {{ user.currentlyStaked }} /
                              {{ user.poolStakableAmount }}
                            </div>
                          </div>
                          <div class="progress h-1 mt-2">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              :style="`width:${user.currentPercentage}%`"
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td class="text-center">{{ user.symbol }}</td>
                      <td class="text-center">
                        {{ user.poolStakableAmount }} {{ user.symbol }}
                      </td>
                      <td class="text-center">{{ user.humanEndTime }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- END: TAB CONTENT UPCOMING -->

              <!-- BEGIN: POLYGON ONGOING MODAL -->
              <Modal
                size="modal-xl"
                :show="polygonUpcomingModal"
                @hidden="polygonUpcomingModal = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">POLYGON UPCOMING</div>
                  <a
                    @click="polygonUpcomingModal = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>
                <ModalBody class="p-10 text-center">
                  <TabGroup>
                    <!-- BEGIN: Profile Info -->
                    <div class="intro-y mt-5">
                      <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-8 box">
                          <div class="intro-y px-5 mt-5">
                            <div class="flex flex-col justify-between mx-auto">
                              <div
                                style="
                                  background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                                "
                                class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                              ></div>
                              <div class="flex items-center justify-between">
                                <div
                                  class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md"
                                >
                                  <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    class="rounded-md w-40 h-40 shadow-xl object-cover"
                                    src="@/assets/images/uc/gt-protocol.jpg"
                                  />
                                </div>
                                <div
                                  class="flex flex-wrap items-center gap-4 my-8 float-right"
                                >
                                  <button
                                    class="btn btn-facebook p-3 rounded-full"
                                  >
                                    <FacebookIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-twitter p-3 rounded-full"
                                  >
                                    <TwitterIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-instagram p-3 rounded-full"
                                  >
                                    <InstagramIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-linkedin p-3 rounded-full"
                                  >
                                    <LinkedinIcon class="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-12">
                              <div class="col-span-12">
                                <div
                                  class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                                >
                                  <div>
                                    <h2 class="font-semibold text-xl pt-6">
                                      GT- Protocol
                                      <span
                                        class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                        >GTP</span
                                      >
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TabList
                              class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                            >
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </Tab>
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </Tab>

                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </Tab>
                            </TabList>
                          </div>
                        </div>
                        <div class="col-span-4">
                          <div class="intro-y box col-span-12 lg:col-span-6">
                            <div
                              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                            >
                              <h2
                                class="font-semibold text-base py-2 px-5 mr-auto"
                              >
                                Details
                              </h2>

                              <button
                                class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                              >
                                Closed
                              </button>
                            </div>
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Tier Access
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    Public Offering
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Price Per
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    1 GTP = 0.15 USDC
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Total Offering
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    733,333 GTP
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Global Cap
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    110,000 USDC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Profile Info -->
                    
                  </TabGroup>
                </ModalBody>
              </Modal>
              <!-- END: POLYGON ONGOING MODAL -->

              <!-- BEGIN: TAB CONTENT COMPLETED -->
              <div v-show="tab === 3">
                <table class="table table-report">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">PRODUCT</th>
                      <th class="text-center whitespace-nowrap">POOL ID</th>
                      <th class="whitespace-nowrap w-72">NAME</th>
                      <th class="text-center whitespace-nowrap">SYMBOL</th>

                      <th class="text-center whitespace-nowrap">
                        TOTAL CONTRIBUTION
                      </th>
                      <th class="text-center whitespace-nowrap">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="user in poolsCompleted"
                      :key="user.id"
                      class="intro-x zoom-in"
                    >
                      <td class="w-20">
                        <div class="flex">
                          <div class="w-16 h-16 image-fit zoom-in">
                            <Tippy
                              tag="img"
                              alt="Midone Tailwind HTML Admin Template"
                              class="rounded-md"
                              src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                              content=""
                            />
                          </div>
                        </div>
                      </td>
                      <td class="text-center">
                        <a class="font-semibold text-lg">{{ user.id }}</a> 
                          <br>
                          <a href="#" @click="polygonCompletedModal = true" class="underline text-primary pt-4">View Details</a>
                          <div class="mt-2"></div>
                        </td>
                     
                      <td>
                        <a
                          href=""
                          class="text-lg font-semibold whitespace-nowrap"
                          >{{ user.name }}</a
                        >
                        <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                          <div class="flex text-slate-500 text-xs">
                            <div class="mr-auto font-semibold">
                              Total contribution
                            </div>
                            <div>
                              {{ user.currentlyStaked }} /
                              {{ user.poolStakableAmount }}
                            </div>
                          </div>
                          <div class="progress h-1 mt-2">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              :style="`width:${user.currentPercentage}%`"
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td class="text-center">{{ user.symbol }}</td>
                      <td class="text-center">{{ user.currentPercentage }}%</td>
                      <td class="text-center">
                        <span
                          class="bg-gray-400/20 text-gray-600 text-sm m-2 px-2 py-1 rounded z-10"
                          >Sale Ended</span
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- END: TAB CONTENT COMPLETED -->

              <!-- BEGIN: POLYGON COMPLETED MODAL -->
              <Modal
                size="modal-xl"
                :show="polygonCompletedModal"
                @hidden="polygonCompletedModal = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">POLYGON COMPLETED</div>
                  <a
                    @click="polygonCompletedModal = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>
                <ModalBody class="p-10 text-center">
                  <TabGroup>
                    <!-- BEGIN: Profile Info -->
                    <div class="intro-y mt-5">
                      <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-8 box">
                          <div class="intro-y px-5 mt-5">
                            <div class="flex flex-col justify-between mx-auto">
                              <div
                                style="
                                  background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                                "
                                class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                              ></div>
                              <div class="flex items-center justify-between">
                                <div
                                  class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md"
                                >
                                  <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    class="rounded-md w-40 h-40 shadow-xl object-cover"
                                    src="@/assets/images/uc/gt-protocol.jpg"
                                  />
                                </div>
                                <div
                                  class="flex flex-wrap items-center gap-4 my-8 float-right"
                                >
                                  <button
                                    class="btn btn-facebook p-3 rounded-full"
                                  >
                                    <FacebookIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-twitter p-3 rounded-full"
                                  >
                                    <TwitterIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-instagram p-3 rounded-full"
                                  >
                                    <InstagramIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-linkedin p-3 rounded-full"
                                  >
                                    <LinkedinIcon class="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-12">
                              <div class="col-span-12">
                                <div
                                  class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                                >
                                  <div>
                                    <h2 class="font-semibold text-xl pt-6">
                                      GT- Protocol
                                      <span
                                        class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                        >GTP</span
                                      >
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TabList
                              class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                            >
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </Tab>
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </Tab>

                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </Tab>
                            </TabList>
                          </div>
                        </div>
                        <div class="col-span-4">
                          <div class="intro-y box col-span-12 lg:col-span-6">
                            <div
                              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                            >
                              <h2
                                class="font-semibold text-base py-2 px-5 mr-auto"
                              >
                                Details
                              </h2>

                              <button
                                class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                              >
                                Closed
                              </button>
                            </div>
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Tier Access
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    Public Offering
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Price Per
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    1 GTP = 0.15 USDC
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Total Offering
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    733,333 GTP
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Global Cap
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    110,000 USDC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Profile Info -->
                    
                  </TabGroup>
                </ModalBody>
              </Modal>
              <!-- END: POLYGON COMPLETED MODAL -->

              <!-- BEGIN: TAB CONTENT MYDEALS -->
              <div v-show="tab === 4">
                <table class="table table-report">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap">PRODUCT</th>
                      <th class="text-center whitespace-nowrap">POOL ID</th>
                      <th class="whitespace-nowrap w-72">NAME</th>
                      <th class="text-center whitespace-nowrap">SYMBOL</th>

                      <th class="text-center whitespace-nowrap">
                        MAXIMUM CONTRIBUTION
                      </th>
                      <th class="text-center whitespace-nowrap">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="user in poolsMyDeal"
                      :key="user.id"
                      class="intro-x zoom-in"
                    >
                      <td class="w-20">
                        <div class="flex">
                          <div class="w-16 h-16 image-fit zoom-in">
                            <Tippy
                              tag="img"
                              alt="Midone Tailwind HTML Admin Template"
                              class="rounded-md"
                              src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                              content=""
                            />
                          </div>
                        </div>
                      </td>
                      <td class="text-center">
                       <a class="font-semibold text-lg">{{ user.id }}</a> 
                        <br>
                        <a href="#" @click="polygonMydealsModal = true" class="underline text-primary pt-4">View Details</a>
                        <div class="mt-2"></div>
                      </td>
                      <td>
                        <a
                          href=""
                          class="text-lg font-semibold whitespace-nowrap"
                          >{{ user.name }}</a
                        >
                        <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                          <div class="flex text-slate-500 text-xs">
                            <div class="mr-auto font-semibold">
                              Total contribution
                            </div>
                            <div>
                              {{ user.currentlyStaked }} /
                              {{ user.poolStakableAmount }}
                            </div>
                          </div>
                          <div class="progress h-1 mt-2">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              :style="`width:${user.currentPercentage}%`"
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td class="text-center">{{ user.symbol }}</td>
                      <td class="text-center">{{ user.currentPercentage }}%</td>
                      <td class="text-center">{{ user.status }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- END: TAB CONTENT MYDEALS -->

               <!-- BEGIN: POLYGON COMPLETED MODAL -->
              <Modal
                size="modal-xl"
                :show="polygonMydealsModal"
                @hidden="polygonMydealsModal = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">POLYGON MYDEALS</div>
                  <a
                    @click="polygonMydealsModal = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>
                <ModalBody class="p-10 text-center">
                  <TabGroup>
                    <!-- BEGIN: Profile Info -->
                    <div class="intro-y mt-5">
                      <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-8 box">
                          <div class="intro-y px-5 mt-5">
                            <div class="flex flex-col justify-between mx-auto">
                              <div
                                style="
                                  background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                                "
                                class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                              ></div>
                              <div class="flex items-center justify-between">
                                <div
                                  class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md"
                                >
                                  <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    class="rounded-md w-40 h-40 shadow-xl object-cover"
                                    src="@/assets/images/uc/gt-protocol.jpg"
                                  />
                                </div>
                                <div
                                  class="flex flex-wrap items-center gap-4 my-8 float-right"
                                >
                                  <button
                                    class="btn btn-facebook p-3 rounded-full"
                                  >
                                    <FacebookIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-twitter p-3 rounded-full"
                                  >
                                    <TwitterIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-instagram p-3 rounded-full"
                                  >
                                    <InstagramIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-linkedin p-3 rounded-full"
                                  >
                                    <LinkedinIcon class="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-12">
                              <div class="col-span-12">
                                <div
                                  class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                                >
                                  <div>
                                    <h2 class="font-semibold text-xl pt-6">
                                      GT- Protocol
                                      <span
                                        class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                        >GTP</span
                                      >
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TabList
                              class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                            >
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </Tab>
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </Tab>

                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </Tab>
                            </TabList>
                          </div>
                        </div>
                        <div class="col-span-4">
                          <div class="intro-y box col-span-12 lg:col-span-6">
                            <div
                              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                            >
                              <h2
                                class="font-semibold text-base py-2 px-5 mr-auto"
                              >
                                Details
                              </h2>

                              <button
                                class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                              >
                                Closed
                              </button>
                            </div>
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Tier Access
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    Public Offering
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Price Per
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    1 GTP = 0.15 USDC
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Total Offering
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    733,333 GTP
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Global Cap
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    110,000 USDC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Profile Info -->
                    
                  </TabGroup>
                </ModalBody>
              </Modal>
              <!-- END: POLYGON COMPLETED MODAL -->

              

              <!-- BEGIN: Large Modal Content -->
              <Modal
                size="modal-lg"
                :show="largeModalSizePreview"
                @hidden="largeModalSizePreview = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">Contribution</div>
                  <a
                    @click="largeModalSizePreview = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>

                <ModalBody class="p-6">
                  <!-- <div class="rounded-xl"> -->
                  <div class="flex justify-between gap-6">
                    <div class="p-6 rounded-xl w-full bg-[#d1a5651c]">
                      <p class="text-base">Pay</p>
                      <p class="text-black">{{ currentModalId }}</p>
                      <p>{{ currentModalName }}</p>
                      <p>{{ currentModalSymbol }}</p>
                      <div class="flex items-center my-2 gap-4">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-10 h-10"
                          alt=""
                        />
                        <span class="text-black font-bold text-2xl"
                          >5 USDT</span
                        >
                      </div>
                      <p class="text-base">Include Fees</p>
                    </div>
                  </div>
                  <!-- </div> -->

                  <div class="my-6 bg-[#f8f8f8]">
                    <div
                      class="px-6 py-3 flex justify-between border-b border-[#E7E7E7] border-solid"
                    >
                      <p class="text-sm">Amount</p>
                      <div class="flex items-center gap-2">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-5 h-5"
                          alt=""
                        />
                        <p class="text-black font-bold text-sm">
                          {{ currentModalAmount }}
                        </p>
                      </div>
                    </div>
                    <div
                      class="px-6 py-3 flex justify-between border-b border-[#E7E7E7] border-solid"
                    >
                      <p class="text-sm">FEE</p>
                      <div class="flex items-center gap-2">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-5 h-5"
                          alt=""
                        />
                        <p class="text-black font-bold text-sm">
                          <span class="text-yellow-600">0.05 USDT</span> or
                          <span class="text-yellow-600">1%</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="form-check mt-5">
                    <input
                      id="vertical-form-3"
                      class="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label class="form-check-label" for="vertical-form-3"
                      >I AGREE with all statements.</label
                    >
                  </div>

                  <div class="pt-8 text-center">
                    <button
                      type="button"
                      @click="finalContribute()"
                      class="btn btn-primary w-full"
                      :disabled="inSufficientButtonStatus"
                    >
                      Final Contribute
                    </button>
                    <div class="mt-2 py-3 flex items-center justify-between">
                      <p class="text-sm">Your Balance</p>
                      <p class="text-red-600 font-bold text-sm">
                        Insufficient Funds
                      </p>
                      <div class="flex items-center gap-2">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-5 h-5"
                          alt=""
                        />
                        <p class="text-black font-bold text-sm">
                          <span class="text-red-600">0 USDT</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </ModalBody>
              </Modal>
              <!-- END: Large Modal Content -->

              <!-- BEGIN: Super Large Modal Content -->
              <Modal
                size="modal-xl"
                :show="superlargeModalSizePreview"
                @hidden="superlargeModalSizePreview = false"
              >
                <div
                  class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
                >
                  <div class="text-xl font-semibold py-5">Single Deal</div>
                  <a
                    @click="superlargeModalSizePreview = false"
                    class="absolute right-0 top-0 mt-5 mr-3"
                    href="javascript:;"
                  >
                    <XIcon class="w-6 h-6 text-slate-400" />
                  </a>
                </div>
                <ModalBody class="p-10 text-center">
                  <TabGroup>
                    <!-- BEGIN: Profile Info -->
                    <div class="intro-y mt-5">
                      <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-8 box">
                          <div class="intro-y px-5 mt-5">
                            <div class="flex flex-col justify-between mx-auto">
                              <div
                                style="
                                  background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                                "
                                class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                              ></div>
                              <div class="flex items-center justify-between">
                                <div
                                  class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md"
                                >
                                  <img
                                    alt="Midone Tailwind HTML Admin Template"
                                    class="rounded-md w-40 h-40 shadow-xl object-cover"
                                    src="@/assets/images/uc/gt-protocol.jpg"
                                  />
                                </div>
                                <div
                                  class="flex flex-wrap items-center gap-4 my-8 float-right"
                                >
                                  <button
                                    class="btn btn-facebook p-3 rounded-full"
                                  >
                                    <FacebookIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-twitter p-3 rounded-full"
                                  >
                                    <TwitterIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-instagram p-3 rounded-full"
                                  >
                                    <InstagramIcon class="w-5 h-5" />
                                  </button>
                                  <button
                                    class="btn btn-linkedin p-3 rounded-full"
                                  >
                                    <LinkedinIcon class="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-12">
                              <div class="col-span-12">
                                <div
                                  class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                                >
                                  <div>
                                    <h2 class="font-semibold text-xl pt-6">
                                      GT- Protocol
                                      <span
                                        class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                        >GTP</span
                                      >
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TabList
                              class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                            >
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </Tab>
                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </Tab>

                              <Tab
                                :fullWidth="false"
                                class="py-4 flex items-center cursor-pointer"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </Tab>
                            </TabList>
                          </div>
                        </div>
                        <div class="col-span-4">
                          <div class="intro-y box col-span-12 lg:col-span-6">
                            <div
                              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                            >
                              <h2
                                class="font-semibold text-base py-2 px-5 mr-auto"
                              >
                                Details
                              </h2>

                              <button
                                class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                              >
                                Closed
                              </button>
                            </div>
                            <div class="p-5">
                              <div class="flex items-center">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Tier Access
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    Public Offering
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Price Per
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    1 GTP = 0.15 USDC
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Total Offering
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    733,333 GTP
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center mt-5">
                                <div class="ml-4">
                                  <div
                                    class="font-medium text-base text-left"
                                    href=""
                                  >
                                    Global Cap
                                  </div>
                                  <div
                                    class="text-slate-500 text-lg font-semibold mt-0.5"
                                  >
                                    110,000 USDC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Profile Info -->
                  
                  </TabGroup>
                </ModalBody>
              </Modal>
              <!-- END: Super Large Modal Content -->
            </div>
            <!-- END: SINGLE NETWORK CONTENT TAB -->
          </div>
          <!-- END: SINGLE NETWORK TAB SECTION -->
        </div>
        <!-- END: TAB CONTENT POLYGON -->

        <!-- BEGIN: Large Modal Content -->
        <Modal
          size="modal-lg"
          :show="largeModalSizePreview"
          @hidden="largeModalSizePreview = false"
        >
          <div
            class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
          >
            <div class="text-xl font-semibold py-5">Contribution</div>
            <a
              @click="largeModalSizePreview = false"
              class="absolute right-0 top-0 mt-5 mr-3"
              href="javascript:;"
            >
              <XIcon class="w-6 h-6 text-slate-400" />
            </a>
          </div>

          <ModalBody class="p-6">
            <!-- <div class="rounded-xl"> -->
            <div class="flex justify-between gap-6">
              <div class="p-6 rounded-xl w-full bg-[#d1a5651c]">
                <p class="text-base">Pay</p>
                <p class="text-black">{{ currentModalId }}</p>
                <p>{{ currentModalName }}</p>
                <p>{{ currentModalSymbol }}</p>
                <div class="flex items-center my-2 gap-4">
                  <img
                    src="@/assets/images/uc/tether.png"
                    class="w-10 h-10"
                    alt=""
                  />
                  <span class="text-black font-bold text-2xl">5 USDT</span>
                </div>
                <p class="text-base">Include Fees</p>
              </div>
            </div>
            <!-- </div> -->

            <div class="my-6 bg-[#f8f8f8]">
              <div
                class="px-6 py-3 flex justify-between border-b border-[#E7E7E7] border-solid"
              >
                <p class="text-sm">Amount</p>
                <div class="flex items-center gap-2">
                  <img
                    src="@/assets/images/uc/tether.png"
                    class="w-5 h-5"
                    alt=""
                  />
                  <p class="text-black font-bold text-sm">
                    {{ currentModalAmount }}
                  </p>
                </div>
              </div>
              <div
                class="px-6 py-3 flex justify-between border-b border-[#E7E7E7] border-solid"
              >
                <p class="text-sm">FEE</p>
                <div class="flex items-center gap-2">
                  <img
                    src="@/assets/images/uc/tether.png"
                    class="w-5 h-5"
                    alt=""
                  />
                  <p class="text-black font-bold text-sm">
                    <span class="text-yellow-600">0.05 USDT</span> or
                    <span class="text-yellow-600">1%</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="form-check mt-5">
              <input
                id="vertical-form-3"
                class="form-check-input"
                type="checkbox"
                value=""
              />
              <label class="form-check-label" for="vertical-form-3"
                >I AGREE with all statements.</label
              >
            </div>

            <div class="pt-8 text-center">
              <button
                type="button"
                @click="finalContribute()"
                class="btn btn-primary w-full"
                :disabled="inSufficientButtonStatus"
              >
                Final Contribute
              </button>
              <div class="mt-2 py-3 flex items-center justify-between">
                <p class="text-sm">Your Balance</p>
                <p class="text-red-600 font-bold text-sm">Insufficient Funds</p>
                <div class="flex items-center gap-2">
                  <img
                    src="@/assets/images/uc/tether.png"
                    class="w-5 h-5"
                    alt=""
                  />
                  <p class="text-black font-bold text-sm">
                    <span class="text-red-600">0 USDT</span>
                  </p>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
        <!-- END: Large Modal Content -->

        <!-- BEGIN: Super Large Modal Content -->
        <Modal
          size="modal-xl"
          :show="superlargeModalSizePreview"
          @hidden="superlargeModalSizePreview = false"
        >
          <div
            class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
          >
            <div class="text-xl font-semibold py-5">Single Deal</div>
            <a
              @click="superlargeModalSizePreview = false"
              class="absolute right-0 top-0 mt-5 mr-3"
              href="javascript:;"
            >
              <XIcon class="w-6 h-6 text-slate-400" />
            </a>
          </div>
          <ModalBody class="p-10 text-center">
            <TabGroup>
              <!-- BEGIN: Profile Info -->
              <div class="intro-y mt-5">
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-8 box">
                    <div class="intro-y px-5 mt-5">
                      <div class="flex flex-col justify-between mx-auto">
                        <div
                          style="
                            background-image: url(https://app.gains-associates.com/assets/images/baner/BANNER.png);
                          "
                          class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                        ></div>
                        <div class="flex items-center justify-between">
                          <div class="w-56 md:w-40 h-32 mx-8 -mt-24 rounded-md">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              class="rounded-md w-40 h-40 shadow-xl object-cover"
                              src="@/assets/images/uc/gt-protocol.jpg"
                            />
                          </div>
                          <div
                            class="flex flex-wrap items-center gap-4 my-8 float-right"
                          >
                            <button class="btn btn-facebook p-3 rounded-full">
                              <FacebookIcon class="w-5 h-5" />
                            </button>
                            <button class="btn btn-twitter p-3 rounded-full">
                              <TwitterIcon class="w-5 h-5" />
                            </button>
                            <button class="btn btn-instagram p-3 rounded-full">
                              <InstagramIcon class="w-5 h-5" />
                            </button>
                            <button class="btn btn-linkedin p-3 rounded-full">
                              <LinkedinIcon class="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="grid grid-cols-12">
                        <div class="col-span-12">
                          <div
                            class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 p-5"
                          >
                            <div>
                              <h2 class="font-semibold text-xl pt-6">
                                GT- Protocol
                                <span
                                  class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                  >GTP</span
                                >
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <TabList
                        class="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
                      >
                        <Tab
                          :fullWidth="false"
                          class="py-4 flex items-center cursor-pointer"
                        >
                          <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                        </Tab>
                        <Tab
                          :fullWidth="false"
                          class="py-4 flex items-center cursor-pointer"
                        >
                          <ShieldIcon class="w-4 h-4 mr-2" /> Team
                        </Tab>

                        <Tab
                          :fullWidth="false"
                          class="py-4 flex items-center cursor-pointer"
                        >
                          <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                        </Tab>
                      </TabList>
                    </div>
                  </div>
                  <div class="col-span-4">
                    <div class="intro-y box col-span-12 lg:col-span-6">
                      <div
                        class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
                      >
                        <h2 class="font-semibold text-base py-2 px-5 mr-auto">
                          Details
                        </h2>

                        <button
                          class="bg-gray-400/20 text-gray-600 text-xs m-2 px-2 py-1 rounded z-10"
                        >
                          Closed
                        </button>
                      </div>
                      <div class="p-5">
                        <div class="flex items-center">
                          <div class="ml-4">
                            <div
                              class="font-medium text-base text-left"
                              href=""
                            >
                              Tier Access
                            </div>
                            <div
                              class="text-slate-500 text-lg font-semibold mt-0.5"
                            >
                              Public Offering
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center mt-5">
                          <div class="ml-4">
                            <div
                              class="font-medium text-base text-left"
                              href=""
                            >
                              Price Per
                            </div>
                            <div
                              class="text-slate-500 text-lg font-semibold mt-0.5"
                            >
                              1 GTP = 0.15 USDC
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center mt-5">
                          <div class="ml-4">
                            <div
                              class="font-medium text-base text-left"
                              href=""
                            >
                              Total Offering
                            </div>
                            <div
                              class="text-slate-500 text-lg font-semibold mt-0.5"
                            >
                              733,333 GTP
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center mt-5">
                          <div class="ml-4">
                            <div
                              class="font-medium text-base text-left"
                              href=""
                            >
                              Global Cap
                            </div>
                            <div
                              class="text-slate-500 text-lg font-semibold mt-0.5"
                            >
                              110,000 USDC
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Profile Info -->
             
            </TabGroup>
          </ModalBody>
        </Modal>
        <!-- END: Super Large Modal Content -->
      </div>
      <!-- END: NETWORK TAB CONTENT -->
    </div>
    <!-- END: Deals Info -->
  </div>
</template>

<script>
import { ref, provide } from "vue";
import { useWeb3DealsStore } from "@/stores/web3Deals.js";
import { mapActions, mapGetters } from "pinia";
import Web3 from "web3";
import { contractABI, approveContract } from "@/helpers/helper.js";
const largeModalSizePreview = ref(false);
const bscOngoingModal = ref(false);
const bscUpcomingModal = ref(false);
const bscCompletedModal = ref(false);
const bscMydealsModal = ref(false);
const ethOngoingModal = ref(false);
const ethUpcomingModal = ref(false);
const ethCompletedModal = ref(false);
const ethMydealsModal = ref(false);
const polygonOngoingModal = ref(false);
const polygonUpcomingModal = ref(false);
const polygonCompletedModal = ref(false);
const polygonMydealsModal = ref(false);
const superlargeModalSizePreview = ref(false);

export default {
  name: "",
  contractResult: "",

  data() {
    return {
      poolsOngoing: [],
      poolsUpcoming: [],
      poolsCompleted: [],
      poolsMyDeal: [],
      payload: {},
      tab: 1,
      networkTab: 1,
      largeModalSizePreview: false,
      bscOngoingModal: false,
      bscUpcomingModal: false,
      bscCompletedModal: false,
      bscMydealsModal: false,
      ethOngoingModal: false,
      ethUpcomingModal: false,
      ethCompletedModal: false,
      ethMydealsModal: false,
      polygonOngoingModal: false,
      polygonUpcomingModal: false,
      polygonCompletedModal: false,
      polygonMydealsModal: false,
      currentModalId: "",
      currentModalAmount: "",
      currentModalName: "",
      currentModalSymbol: "",
      inSufficientButtonStatus: false,
    };
  },

  async mounted() {
    await this.fetchDeals();
    this.reversePool();
  },
  computed: {
    ...mapGetters(useWeb3DealsStore, ["getDealsData"]),
    getDeals() {
      this.poolsOngoing = this.getDealsData.poolsOngoing || [];
      this.poolsUpcoming = this.getDealsData.poolsUpcoming || [];
      this.poolsCompleted = this.getDealsData.poolsCompleted || [];
      this.poolsMyDeal = this.getDealsData.poolsMyDeal || [];
      console.log(this.getDealsData);
      return true;
    },
  },

  methods: {
    ...mapActions(useWeb3DealsStore, ["fetchDeals"]),
    handleInput(id, event) {
      let value = event.target.value;
      this.payload[id] = value;
      console.log(this.payload);
    },
    activeNetworkTabOne() {
      this.networkTab = 1;
    },
    activeNetworkTabTwo() {
      this.networkTab = 2;
    },
    activeNetworkTabThree() {
      this.networkTab = 3;
    },

    activeTabOne() {
      this.tab = 1;
    },
    activeTabTwo() {
      this.tab = 2;
    },
    activeTabThree() {
      this.tab = 3;
    },
    activeTabFour() {
      this.tab = 4;
    },

    async contribute(id, name, symbol) {
      console.log(id, this.payload);
      this.currentModalId = id;
      this.currentModalAmount = this.payload[id];
      this.currentModalName = name;
      this.currentModalSymbol = symbol;
      this.largeModalSizePreview = true;
    },

    async finalContribute() {
      let contract = contractABI();
      let approveToken = approveContract();
      let getTokenAddres = await contract.methods
        .poolInfo(this.currentModalId - 1)
        .call();
      let token = "0x5E19B6469ea1FD6870EB19FB9911D8ceb7D9CCc2"
      console.log(token);
      let approveNow = await approveToken.methods
        .approve(token, BigInt(this.currentModalAmount * 10 ** 18))
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
        });
      let callContract = await contract.methods
        .stakeTokens(
          this.currentModalId - 1,
          BigInt(this.currentModalAmount * 10 ** 18)
        )
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
        });
    },

    async reversePool() {
      this.poolsOngoing = this.poolsOngoing.reverse();
      this.poolsUpcoming = this.poolsUpcoming.reverse();
      this.poolsCompleted = this.poolsCompleted.reverse();
      this.poolsMyDeal = this.poolsMyDeal.reverse();
    },
  },
};

const salesReportFilter = ref();
const importantNotesRef = ref();

provide("bind[importantNotesRef]", (el) => {
  importantNotesRef.value = el;
});

const prevImportantNotes = () => {
  const el = importantNotesRef.value;
  el.tns.goTo("prev");
};

const nextImportantNotes = () => {
  const el = importantNotesRef.value;
  el.tns.goTo("next");
};
</script>
<style>
.report-box__dashboard:before {
  width: 96% !important;
}
.report-box__right:before {
  width: 100% !important;
  margin-left: 12px !important;
  border-radius: 0.675rem !important;
}
/* .bg-report-box-1 {
    background: linear-gradient(50.1deg, rgba(69, 145, 178, 0.6) 0%, rgba(211, 220, 251, 0.6) 124.36%) !important;
  } */
.bg__icon-1 {
  background: linear-gradient(
    50.1deg,
    rgb(69 145 178 / 53%) 0%,
    rgba(211, 220, 251, 0.6) 124.36%
  );
}
.bg__icon-2 {
  background: linear-gradient(
    45.57deg,
    rgb(178 69 121 / 53%) 2.44%,
    rgba(251, 211, 233, 0.6) 99.99%
  );
}
.bg__icon-3 {
  background: linear-gradient(
    45.57deg,
    rgb(101 78 163 / 47%) 2.44%,
    rgba(251, 211, 233, 0.6) 100%
  );
}
.table td {
  padding-top: 1.25rem !important;
  padding-bottom: 1.25rem !important;
}
.input--rounded {
  border-radius: 0.5rem !important;
}
.table th {
  font-weight: 600 !important;
}
</style>
