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
                    BSC
                  </div>
                </div>
                <div class="ml-auto p-4 rounded-xl bg__icon-bnb">
                  <!-- <LayersIcon class="report-box__icon text-cyan-600" /> -->
                  <img src="@/assets/images/uc/bnb.png" class="w-12 h-12" alt="">
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
                    Ethereum
                  </div>
                </div>
                <div class="ml-auto p-4 rounded-xl bg__icon-eth">
                 <img src="@/assets/images/uc/eth.png" class="w-12 h-12" alt="">
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
                    Polygon
                  </div>
                </div>
                <div class="ml-auto p-4 rounded-xl bg__icon-polygon">
                  <img src="@/assets/images/uc/polygon.png" class="w-12 h-12" alt="">
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
    <div class="intro-y col-span-12">
      <!-- BEGIN: NETWORK TAB -->
      <!-- <div
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
      </div> -->
      <!-- END: NETWORK TAB -->

      <!-- BEGIN: NETWORK TAB CONTENT -->
      <div class="intro-y rounded-xl overflow-auto lg:overflow-visible">
        <!-- BEGIN: TAB CONTENT BSC -->

        <!-- BEGIN: SINGLE NETWORK TAB SECTION -->
        <div class="pb-8">
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
                    <th class="text-center whitespace-nowrap">END TIME</th>
                    <th class="text-center whitespace-nowrap">NETWORK</th>
                    <th class="text-center whitespace-nowrap">CONTRIBUTION</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="user in poolsOngoing"
                    :key="user.id"
                    class="intro-x zoom-in"
                  >
                    <td class="">
                      <div class="flex">
                        <div
                          @click="
                            bscOngoingLargeModal(
                              user.id,
                              user.name,
                              user.symbol
                            )
                          "
                          class="w-16 h-16 image-fit"
                        >
                          <img
                            tag="img"
                            alt="unreal-capital"
                            class="rounded-md"
                            src="https://media.istockphoto.com/photos/tree-picture-id543052538?k=20&m=543052538&s=612x612&w=0&h=X3m-COQRykkX19_LAJRVEZ902bA4M_qbkMtWCO3IHRw="
                            content=""
                          />
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <a class="font-semibold text-lg">{{ user.id }}</a>
                      <br />
                      <a
                        href="#"
                        @click="
                          bscOngoingLargeModal1(user.id, user.name, user.symbol)
                        "
                        class="underline text-primary pt-4"
                        >View Details</a
                      >
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
                    <td class="text-center text-base font-bold">
                      <div class="bnb"></div>
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
              <ModalBody class="text-center">
                <TabGroup>
                  <!-- BEGIN: Profile Info -->
                  <div class="intro-y mt-5">
                    <div class="grid grid-cols-12 gap-4">
                      <div
                        class="col-span-12 md:col-span-8 box h-[35rem] overflow-y-scroll relative"
                      >
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
                                  alt="unreal-capital"
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
                                    Name - {{ this.currentModalName }}
                                    <span
                                      class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                      >SymBol -
                                      {{ this.currentModalSymbol }}</span
                                    >
                                    <span
                                      class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                      >Project Id -
                                      {{ this.currentModalId }}</span
                                    >
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul
                            class="nav nav-link-tabs w-full lg:w-2/4 rounded-md"
                            role="tablist"
                          >
                            <li
                              @click="activeSinglePoolTabOne"
                              id="active-bsc-tab"
                              class="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                class="nav-link cursor-pointer flex items-center justify-center text-sm lg:text-base w-full py-5 px-2 active"
                                data-tw-toggle="pill"
                                data-tw-target="#active-network"
                                type="button"
                                role="tab"
                                aria-controls="active-network"
                                aria-selected="true"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </button>
                            </li>
                            <li
                              @click="activeSinglePoolTabTwo"
                              id="inactive-eth-tab"
                              class="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                class="nav-link flex items-center justify-center text-sm lg:text-base w-full py-5 px-2"
                                data-tw-toggle="pill"
                                data-tw-target="#inactive-network"
                                type="button"
                                role="tab"
                                aria-selected="false"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </button>
                            </li>
                            <li
                              @click="activeSinglePoolTabThree"
                              id="inactive-polygon-tab"
                              class="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                class="nav-link flex items-center justify-center text-sm lg:text-base w-full py-5 px-2"
                                data-tw-toggle="pill"
                                data-tw-target="#inactive-network"
                                type="button"
                                role="tab"
                                aria-selected="false"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </button>
                            </li>
                          </ul>
                          <div class="my-6" v-show="singlePooldetailTab === 1">
                            <div class="grid grid-cols-12 gap-4 lg:gap-8">
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="https://thumbs.dreamstime.com/b/upper-management-meeting-four-board-members-electronic-tablet-business-new-modern-office-conference-room-76284245.jpg"
                                />
                              </div>
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="@/assets/images/uc/profile-avatar.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="my-6" v-show="singlePooldetailTab === 2">
                            <div class="grid grid-cols-12 gap-4 lg:gap-8">
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="https://thumbs.dreamstime.com/b/upper-management-meeting-four-board-members-electronic-tablet-business-new-modern-office-conference-room-76284245.jpg"
                                />
                              </div>
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="@/assets/images/uc/profile-avatar.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="my-6" v-show="singlePooldetailTab === 3">
                            <div class="grid grid-cols-12 gap-4 lg:gap-8">
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="https://thumbs.dreamstime.com/b/upper-management-meeting-four-board-members-electronic-tablet-business-new-modern-office-conference-room-76284245.jpg"
                                />
                              </div>
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="@/assets/images/uc/profile-avatar.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="flex items-center justify-center bottom-4 right-[28.5rem] border bg-primary animate-bounce rounded-md w-12 h-12 fixed scroll-to-down"
                        >
                          <div class="text-center">
                            <ArrowDownIcon class="text-white" />
                          </div>
                        </div>
                      </div>
                      <div class="col-span-12 md:col-span-4">
                        <form
                          id="contribute-form-logo"
                          @submit.prevent="finalContribute()"
                        >
                          <div
                            class="p-6 mb-8 shadow-lg rounded-xl w-full bg-[#d1a5651c]"
                          >
                            <p class="text-base pb-1 text-left">Pay</p>

                            <div class="text-left">
                              <input
                                @input="handleInput(currentModalId, $event)"
                                :value="payload[currentModalId]"
                                type="number"
                                class="form-control w-56 rounded-md input--rounded box pr-10"
                                placeholder="Enter Amount..."
                                :min="1"
                                required
                              />
                            </div>
                            <p class="text-base mt-1 text-left">
                              Minimum Amount : <strong>50</strong>
                            </p>
                          </div>
                          <div
                            class="my-6 p-3 rounded-md flex items-center justify-between border-[#d1a565] border border-solid"
                          >
                            <p class="text-sm text-slate-500 font-bold">
                              Your Balance
                            </p>
                            <p class="text-red-600 font-bold text-sm">
                              {{ insufficientFund }}
                            </p>
                            <div class="flex items-center gap-2">
                              <img
                                src="@/assets/images/uc/tether.png"
                                class="w-5 h-5"
                                alt=""
                              />
                              <p class="text-black font-bold text-sm">
                                <span>{{ currentTokenBalance }} USDT</span>
                              </p>
                            </div>
                          </div>

                          <div class="mb-6 bg-[#f8f8f8]">
                            <div
                              class="px-6 py-3 flex justify-between border-b border-[#E7E7E7] border-solid"
                            >
                              <p class="text-sm">Amount With Fee</p>
                              <div class="flex items-center gap-2">
                                <img
                                  src="@/assets/images/uc/tether.png"
                                  class="w-5 h-5"
                                  alt=""
                                />
                                <p class="text-black font-bold text-sm">
                                  {{ this.amountIncludeFee }} USDT
                                </p>
                              </div>
                            </div>
                            <div class="px-6 py-3 flex justify-between">
                              <p class="text-sm">FEE</p>
                              <div class="flex items-center gap-2">
                                <img
                                  src="@/assets/images/uc/tether.png"
                                  class="w-5 h-5"
                                  alt=""
                                />
                                <p class="text-black font-bold text-sm">
                                  <span class="text-yellow-600"> 2 USDT</span>
                                  or
                                  <span class="text-yellow-600"
                                    >{{ currentModalFee }}%</span
                                  >
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="form-check mt-5">
                            <input
                              id="vertical-form-3"
                              class="form-check-input"
                              type="checkbox"
                              :value="isAgree"
                              v-model="isAgree"
                              :checked="isAgree"
                              required
                            />
                            <label
                              class="form-check-label"
                              for="vertical-form-3"
                              >I AGREE with all statements.</label
                            >
                          </div>

                          <div class="pt-8 text-center">
                            <button
                              type="submit"
                              class="btn btn-primary w-full"
                              :disabled="inSufficientButtonStatus"
                            >
                              Contribute
                            </button>
                          </div>
                        </form>
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
                    <th class="text-center whitespace-nowrap">NETWORK</th>
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
                        <div
                          @click="bscUpcomingModal = true"
                          class="w-16 h-16 image-fit zoom-in"
                        >
                          <img
                            tag="img"
                            alt="unreal-capital"
                            class="rounded-md"
                            src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                            content=""
                          />
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <a class="font-semibold text-lg">{{ user.id }}</a>
                      <br />
                      <a
                        href="#"
                        @click="bscUpcomingModal = true"
                        class="underline text-primary pt-4"
                        >View Details</a
                      >
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
                      {{ user.poolStakableAmount }}
                    </td>
                    <td class="text-center text-base font-bold">
                      <div class="eth"></div>
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
                      <div
                        class="col-span-12 box h-[35rem] overflow-y-scroll relative"
                      >
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
                                  alt="unreal-capital"
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
                                    Name - {{ this.currentModalName }}
                                    <span
                                      class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                      >SymBol -
                                      {{ this.currentModalSymbol }}</span
                                    >
                                    <span
                                      class="p-2 px-4 font-semibold text-sm btn-secondary rounded text-slate-500 ml-2"
                                      >Project Id -
                                      {{ this.currentModalId }}</span
                                    >
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul
                            class="nav nav-link-tabs w-full lg:w-2/4 rounded-md"
                            role="tablist"
                          >
                            <li
                              @click="activeSinglePoolTabOne"
                              id="active-bsc-tab"
                              class="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                class="nav-link cursor-pointer flex items-center justify-center text-sm lg:text-base w-full py-5 px-2 active"
                                data-tw-toggle="pill"
                                data-tw-target="#active-network"
                                type="button"
                                role="tab"
                                aria-controls="active-network"
                                aria-selected="true"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </button>
                            </li>
                            <li
                              @click="activeSinglePoolTabTwo"
                              id="inactive-eth-tab"
                              class="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                class="nav-link flex items-center justify-center text-sm lg:text-base w-full py-5 px-2"
                                data-tw-toggle="pill"
                                data-tw-target="#inactive-network"
                                type="button"
                                role="tab"
                                aria-selected="false"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </button>
                            </li>
                            <li
                              @click="activeSinglePoolTabThree"
                              id="inactive-polygon-tab"
                              class="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                class="nav-link flex items-center justify-center text-sm lg:text-base w-full py-5 px-2"
                                data-tw-toggle="pill"
                                data-tw-target="#inactive-network"
                                type="button"
                                role="tab"
                                aria-selected="false"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </button>
                            </li>
                          </ul>
                          <div class="my-6" v-show="singlePooldetailTab === 1">
                            <div class="grid grid-cols-12 gap-4 lg:gap-8">
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="https://thumbs.dreamstime.com/b/upper-management-meeting-four-board-members-electronic-tablet-business-new-modern-office-conference-room-76284245.jpg"
                                />
                              </div>
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="@/assets/images/uc/profile-avatar.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="my-6" v-show="singlePooldetailTab === 2">
                            <div class="grid grid-cols-12 gap-4 lg:gap-8">
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="https://thumbs.dreamstime.com/b/upper-management-meeting-four-board-members-electronic-tablet-business-new-modern-office-conference-room-76284245.jpg"
                                />
                              </div>
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="@/assets/images/uc/profile-avatar.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="my-6" v-show="singlePooldetailTab === 3">
                            <div class="grid grid-cols-12 gap-4 lg:gap-8">
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="https://thumbs.dreamstime.com/b/upper-management-meeting-four-board-members-electronic-tablet-business-new-modern-office-conference-room-76284245.jpg"
                                />
                              </div>
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="@/assets/images/uc/profile-avatar.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- <div class="flex items-center justify-center absolute bottom-4 right-4 border bg-primary animate-bounce rounded-md w-12 h-12"> -->
                        <div
                          class="flex items-center justify-center bottom-4 right-[28.5rem] border bg-primary animate-bounce rounded-md w-12 h-12 fixed scroll-to-down"
                        >
                          <div class="text-center">
                            <ArrowDownIcon class="text-white" />
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
                    <th class="text-center whitespace-nowrap">NETWORK</th>
                    <th class="text-center whitespace-nowrap">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="user in poolsCompleted"
                    :key="user.id"
                    class="intro-x zoom-in"
                  >
                    <td class="">
                      <div class="flex">
                        <div
                          @click="bscCompletedModal = true"
                          class="w-16 h-16 image-fit zoom-in"
                        >
                          <img
                            tag="img"
                            alt="unreal-capital"
                            class="rounded-md"
                            src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                            content=""
                          />
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <a class="font-semibold text-lg">{{ user.id }}</a>
                      <br />
                      <a
                        href="#"
                        @click="bscCompletedModal = true"
                        class="underline text-primary pt-4"
                        >View Details</a
                      >
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
                    <td class="text-center text-base font-bold">
                      <div class="eth"></div>
                    </td>
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
              <ModalBody class="p-10 pt-0 text-center">
                <TabGroup>
                  <!-- BEGIN: Profile Info -->
                  <div class="intro-y mt-5">
                    <div class="grid grid-cols-12 gap-4">
                      <div
                        class="col-span-12 box h-[35rem] overflow-y-scroll relative"
                      >
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
                                  alt="unreal-capital"
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

                          <ul
                            class="nav nav-link-tabs w-full lg:w-2/4 rounded-md"
                            role="tablist"
                          >
                            <li
                              @click="activeSinglePoolTabOne"
                              id="active-bsc-tab"
                              class="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                class="nav-link cursor-pointer flex items-center justify-center text-sm lg:text-base w-full py-5 px-2 active"
                                data-tw-toggle="pill"
                                data-tw-target="#active-network"
                                type="button"
                                role="tab"
                                aria-controls="active-network"
                                aria-selected="true"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </button>
                            </li>
                            <li
                              @click="activeSinglePoolTabTwo"
                              id="inactive-eth-tab"
                              class="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                class="nav-link flex items-center justify-center text-sm lg:text-base w-full py-5 px-2"
                                data-tw-toggle="pill"
                                data-tw-target="#inactive-network"
                                type="button"
                                role="tab"
                                aria-selected="false"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </button>
                            </li>
                            <li
                              @click="activeSinglePoolTabThree"
                              id="inactive-polygon-tab"
                              class="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                class="nav-link flex items-center justify-center text-sm lg:text-base w-full py-5 px-2"
                                data-tw-toggle="pill"
                                data-tw-target="#inactive-network"
                                type="button"
                                role="tab"
                                aria-selected="false"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </button>
                            </li>
                          </ul>
                          <div class="my-6" v-show="singlePooldetailTab === 1">
                            <div class="grid grid-cols-12 gap-4 lg:gap-8">
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="https://thumbs.dreamstime.com/b/upper-management-meeting-four-board-members-electronic-tablet-business-new-modern-office-conference-room-76284245.jpg"
                                />
                              </div>
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="@/assets/images/uc/profile-avatar.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="my-6" v-show="singlePooldetailTab === 2">
                            <div class="grid grid-cols-12 gap-4 lg:gap-8">
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="https://thumbs.dreamstime.com/b/upper-management-meeting-four-board-members-electronic-tablet-business-new-modern-office-conference-room-76284245.jpg"
                                />
                              </div>
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="@/assets/images/uc/profile-avatar.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="my-6" v-show="singlePooldetailTab === 3">
                            <div class="grid grid-cols-12 gap-4 lg:gap-8">
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="https://thumbs.dreamstime.com/b/upper-management-meeting-four-board-members-electronic-tablet-business-new-modern-office-conference-room-76284245.jpg"
                                />
                              </div>
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="@/assets/images/uc/profile-avatar.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- <div class="flex items-center justify-center absolute bottom-4 right-4 border bg-primary animate-bounce rounded-md w-12 h-12"> -->
                        <div
                          class="flex items-center justify-center bottom-4 right-12 border bg-primary animate-bounce rounded-md w-12 h-12 fixed scroll-to-down"
                        >
                          <div class="text-center">
                            <ArrowDownIcon class="text-white" />
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
                    <th class="text-center whitespace-nowrap">NETWORK</th>
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
                        <div
                          @click="bscMydealsModal = true"
                          class="w-16 h-16 image-fit zoom-in"
                        >
                          <img
                            tag="img"
                            alt="unreal-capital"
                            class="rounded-md"
                            src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                            content=""
                          />
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <a class="font-semibold text-lg">{{ user.id }}</a>
                      <br />
                      <a
                        href="#"
                        @click="bscMydealsModal = true"
                        class="underline text-primary pt-4"
                        >View Details</a
                      >
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
                    <td class="text-center text-base font-bold">
                      <div class="pgn"></div>
                    </td>
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
              <ModalBody class="p-10 pt-0 text-center">
                <TabGroup>
                  <!-- BEGIN: Profile Info -->
                  <div class="intro-y mt-5">
                    <div class="grid grid-cols-12 gap-4">
                      <div
                        class="col-span-12 box h-[35rem] overflow-y-scroll relative"
                      >
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
                                  alt="unreal-capital"
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

                          <ul
                            class="nav nav-link-tabs w-full lg:w-2/4 rounded-md"
                            role="tablist"
                          >
                            <li
                              @click="activeSinglePoolTabOne"
                              id="active-bsc-tab"
                              class="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                class="nav-link cursor-pointer flex items-center justify-center text-sm lg:text-base w-full py-5 px-2 active"
                                data-tw-toggle="pill"
                                data-tw-target="#active-network"
                                type="button"
                                role="tab"
                                aria-controls="active-network"
                                aria-selected="true"
                              >
                                <UserIcon class="w-4 h-4 mr-2" /> Roadmap
                              </button>
                            </li>
                            <li
                              @click="activeSinglePoolTabTwo"
                              id="inactive-eth-tab"
                              class="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                class="nav-link flex items-center justify-center text-sm lg:text-base w-full py-5 px-2"
                                data-tw-toggle="pill"
                                data-tw-target="#inactive-network"
                                type="button"
                                role="tab"
                                aria-selected="false"
                              >
                                <ShieldIcon class="w-4 h-4 mr-2" /> Team
                              </button>
                            </li>
                            <li
                              @click="activeSinglePoolTabThree"
                              id="inactive-polygon-tab"
                              class="nav-item flex-1"
                              role="presentation"
                            >
                              <button
                                class="nav-link flex items-center justify-center text-sm lg:text-base w-full py-5 px-2"
                                data-tw-toggle="pill"
                                data-tw-target="#inactive-network"
                                type="button"
                                role="tab"
                                aria-selected="false"
                              >
                                <SettingsIcon class="w-4 h-4 mr-2" /> VCs
                              </button>
                            </li>
                          </ul>
                          <div class="my-6" v-show="singlePooldetailTab === 1">
                            <div class="grid grid-cols-12 gap-4 lg:gap-8">
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="https://thumbs.dreamstime.com/b/upper-management-meeting-four-board-members-electronic-tablet-business-new-modern-office-conference-room-76284245.jpg"
                                />
                              </div>
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="@/assets/images/uc/profile-avatar.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="my-6" v-show="singlePooldetailTab === 2">
                            <div class="grid grid-cols-12 gap-4 lg:gap-8">
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="https://thumbs.dreamstime.com/b/upper-management-meeting-four-board-members-electronic-tablet-business-new-modern-office-conference-room-76284245.jpg"
                                />
                              </div>
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="@/assets/images/uc/profile-avatar.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="my-6" v-show="singlePooldetailTab === 3">
                            <div class="grid grid-cols-12 gap-4 lg:gap-8">
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="https://thumbs.dreamstime.com/b/upper-management-meeting-four-board-members-electronic-tablet-business-new-modern-office-conference-room-76284245.jpg"
                                />
                              </div>
                              <div class="col-span-12 lg:col-span-6">
                                <img
                                  class="rounded-xl h-60 object-cover w-full"
                                  src="@/assets/images/uc/profile-avatar.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- <div class="flex items-center justify-center absolute bottom-4 right-4 border bg-primary animate-bounce rounded-md w-12 h-12"> -->
                        <div
                          class="flex items-center justify-center bottom-4 right-12 border bg-primary animate-bounce rounded-md w-12 h-12 fixed scroll-to-down"
                        >
                          <div class="text-center">
                            <ArrowDownIcon class="text-white" />
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
              :show="bscContributeModal"
              @hidden="bscContributeModal = false"
            >
              <div
                class="flex justify-between items-center px-6 border-b border-slate-200 border-solid border-t-2xl"
              >
                <div class="text-xl font-semibold py-5">Contribution</div>
                <a
                  @click="bscContributeModal = false"
                  class="absolute right-0 top-0 mt-5 mr-3"
                  href="javascript:;"
                >
                  <XIcon class="w-6 h-6 text-slate-400" />
                </a>
              </div>

              <ModalBody class="p-6">
                <form id="contribute-form" @submit.prevent="finalContribute()">
                  <div class="grid grid-cols-12 gap-4 lg:gap-8">
                    <div class="col-span-12 md:col-span-5">
                      <div
                        class="p-6 rounded-xl w-full bg-[#d1a5651c] min-h-[9.5rem] flex flex-col justify-between"
                      >
                        <div class="flex justfy-between items-center">
                          <h6 class="font-semibold text-xs md:text-sm w-2/4">
                            ID
                          </h6>
                          <p
                            class="font-bold text-xs md:text-sm lg:text-lg truncate text-black w-2/4 text-right"
                          >
                            {{ currentModalId }}
                          </p>
                        </div>
                        <div class="flex justfy-between items-center">
                          <h6 class="font-semibold text-xs md:text-sm w-2/4">
                            Name
                          </h6>
                          <p
                            class="font-bold text-xs md:text-sm lg:text-lg truncate text-black w-2/4 text-right"
                          >
                            {{ currentModalName }}
                          </p>
                        </div>
                        <div class="flex justfy-between items-center">
                          <h6 class="font-semibold text-xs md:text-sm w-2/4">
                            Symbol
                          </h6>
                          <p
                            class="font-bold text-xs md:text-sm lg:text-lg truncate text-black w-2/4 text-right"
                          >
                            {{ currentModalSymbol }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-span-12 md:col-span-7">
                      <div class="p-6 rounded-xl w-full bg-[#d1a5651c]">
                        <p class="text-base pb-1">Pay</p>
                        <td class="text-center">
                          <input
                            @input="handleInput(currentModalId, $event)"
                            :value="payload[currentModalId]"
                            type="number"
                            class="form-control w-56 rounded-md input--rounded box pr-10"
                            placeholder="Enter Amount..."
                            :min="1"
                            required
                          />
                        </td>
                        <p class="text-base mt-1">
                          Minimum Amount : <strong>50</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="my-6 p-3 rounded-md flex items-center justify-between border-[#d1a565] border border-solid"
                  >
                    <p class="text-sm text-slate-500 font-bold">Your Balance</p>
                    <p class="text-red-600 font-bold text-sm">
                      {{ insufficientFund }}
                    </p>
                    <div class="flex items-center gap-2">
                      <img
                        src="@/assets/images/uc/tether.png"
                        class="w-5 h-5"
                        alt=""
                      />
                      <p class="text-black font-bold text-sm">
                        <span>{{ currentTokenBalance }} USDT</span>
                      </p>
                    </div>
                  </div>

                  <div class="mb-6 bg-[#f8f8f8]">
                    <div
                      class="px-6 py-3 flex justify-between border-b border-[#E7E7E7] border-solid"
                    >
                      <p class="text-sm">Amount With Fee</p>
                      <div class="flex items-center gap-2">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-5 h-5"
                          alt=""
                        />
                        <p class="text-black font-bold text-sm">
                          {{ this.amountIncludeFee }} USDT
                        </p>
                      </div>
                    </div>
                    <div class="px-6 py-3 flex justify-between">
                      <p class="text-sm">FEE</p>
                      <div class="flex items-center gap-2">
                        <img
                          src="@/assets/images/uc/tether.png"
                          class="w-5 h-5"
                          alt=""
                        />
                        <p class="text-black font-bold text-sm">
                          <span class="text-yellow-600"> 2 USDT</span>
                          or
                          <span class="text-yellow-600"
                            >{{ currentModalFee }}%</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="form-check mt-5">
                    <input
                      id="vertical-form-3"
                      class="form-check-input"
                      type="checkbox"
                      :value="isAgree"
                      v-model="isAgree"
                      :checked="isAgree"
                      required
                    />
                    <label class="form-check-label" for="vertical-form-3"
                      >I AGREE with all statements.</label
                    >
                  </div>

                  <div class="pt-8 text-center">
                    <button
                      type="submit"
                      class="btn btn-primary w-full"
                      :disabled="inSufficientButtonStatus"
                    >
                      Contribute
                    </button>
                  </div>
                </form>
              </ModalBody>
            </Modal>
            <!-- END: CONTRIBUTE MODAL -->
          </div>
          <!-- END: SINGLE NETWORK CONTENT TAB -->
        </div>
        <!-- END: SINGLE NETWORK TAB SECTION -->
      </div>
      <!-- END: NETWORK TAB CONTENT -->
    </div>
    <!-- END: Deals Info -->
  </div>
  <Modal
              :show="successModalPreview"
              @hidden="successModalPreview = false"
            >
              <ModalBody class="p-0">
                <div class="p-5 text-center">
                  <CheckCircleIcon
                    class="w-16 h-16 text-success mx-auto mt-3"
                  />
                  <div class="text-3xl mt-5">{{this.modalMessage}}</div>
                  <div class="text-slate-500 mt-2"><button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processing...
    </button></div>
                </div>
                <div class="px-5 pb-8 text-center">
                  <!-- <button
                    type="button"
                    @click="successModalPreview = false"
                    class="btn btn-primary w-24"
                  >
                    Ok
                  </button> -->
                </div>
              </ModalBody>
            </Modal>
</template>

<script>
import { ref, provide } from "vue";
import { useWeb3DealsStore } from "@/stores/web3Deals.js";
import { useContributionStore } from "@/stores/contribution.js";
import { mapActions, mapState } from "pinia";
import { contractABI, approveContract } from "@/helpers/helper.js";
const largeModalSizePreview = ref(false);
const bscOngoingModal = ref(false);
const successModalPreview = ref(false);
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
const bscContributeModal = ref(false);
const ethContributeModal = ref(false);
const polygonContributeModal = ref(false);

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
      singlePooldetailTab: 1,
      largeModalSizePreview: false,
      bscContributeModal: false,
      ethContributeModal: false,
      polygonContributeModal: false,
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
      currentModalAmount: 0,
      currentModalName: "",
      currentModalSymbol: "",
      currentModalFee: 0,
      currentModalFeeAmount: 0,
      amountIncludeFee: 0,
      inSufficientButtonStatus: false,
      currentTokenBalance: "",
      inSufficientcurrentTokenBalance: "",
      insufficientFund: "",
      lpToken: "",
      isAgree: false,
      successModalPreview: false,
      modalMessage:''
    };
  },

  async mounted() {
    
   
    await this.fetchDeals();
    await this.reversePool();
     
  },
  computed: {
    ...mapState(useWeb3DealsStore, ["dealsData"]),
    getDeals() {
      this.poolsOngoing = this.dealsData.poolsOngoing || [];
      this.poolsUpcoming = this.dealsData.poolsUpcoming || [];
      this.poolsCompleted = this.dealsData.poolsCompleted || [];
      this.poolsMyDeal = this.dealsData.poolsMyDeal || [];
      console.log(this.dealsData);
      
      return true;
    },
  },

  methods: {
    ...mapActions(useWeb3DealsStore, ["fetchDeals"]),
    ...mapActions(useContributionStore, ["createContribution"]),
    handleInput(id, event) {
      let value = event.target.value;
      this.payload[id] = value;
      this.currentModalAmount = value;
      this.amountIncludeFee =
        parseInt(this.currentModalAmount) +
        (value * this.currentModalFee) / 100 +
        0;
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
    activeSinglePoolTabOne() {
      this.singlePooldetailTab = 1;
    },
    activeSinglePoolTabTwo() {
      this.singlePooldetailTab = 2;
    },
    activeSinglePoolTabThree() {
      this.singlePooldetailTab = 3;
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
    async bscOngoingLargeModal(id, name, symbol) {
      await this.mainBscOngoingLargeModal(id, name, symbol);
    },
    async bscOngoingLargeModal1(id, name, symbol) {
      await this.mainBscOngoingLargeModal(id, name, symbol);
    },
    async mainBscOngoingLargeModal(id, name, symbol) {
      console.log(id);
      this.currentModalId = id;
      this.currentModalFee = 2;
      this.currentModalName = name;
      this.currentModalSymbol = symbol;
      let approveToken = approveContract();
      let from = localStorage.getItem("address");
      console.log(typeof from);
      await approveToken.methods
        .balanceOf(localStorage.getItem("address"))
        .call()
        .then((receipt) => {
          this.currentTokenBalance = receipt / 10 ** 18;
        });
      if (this.amountIncludeFee > this.currentTokenBalance) {
        this.insufficientFund = "insufficient Fund";
      } else {
        this.insufficientFund = "";
      }
      console.log(id, this.payload);
      this.bscOngoingModal = true;
    },

    async contribute(id, name, symbol) {
      // Default setting agree checkbox to false
      this.isAgree = false;
      this.currentModalId = id;
      this.currentModalFee = 2;
      this.currentModalName = name;
      this.currentModalSymbol = symbol;
      this.bscContributeModal = true;
      let approveToken = approveContract();
      await approveToken.methods
        .balanceOf(localStorage.getItem("address"))
        .call()
        .then((receipt) => {
          this.currentTokenBalance = receipt / 10 ** 18;
        });
      if (this.amountIncludeFee > this.currentTokenBalance) {
        this.insufficientFund = "insufficient Fund";
      } else {
        this.insufficientFund = "";
      }
      
    },

    async finalContribute() {
      this.successModalPreview = true;
      this.currentModalAmount = this.payload[this.currentModalId];
      this.currentModalFeeAmount = await ((this.currentModalAmount *
        this.currentModalFee) /
        100);
      this.totalCurrentModalAmount = await parseInt(this.currentModalAmount);
      this.amountIncludeFee =
        this.totalCurrentModalAmount + this.currentModalFeeAmount;
      this.insufficientFund = "Approving Please wait(D)";
      let contract = contractABI();
      let approveToken = approveContract();
      let totalAmountToContribute = BigInt(
        (this.totalCurrentModalAmount + this.currentModalFeeAmount) * 10 ** 18
      );
      let getTokenAddres = await contract.methods
        .poolInfo(this.currentModalId - 1)
        .call();
      let Atoken = "0x336a7847E0e8C8456814d6eAC54a5E90610e2628";
       this.successModalPreview = true
       this.modalMessage = "Approving Please Wait"
      await approveToken.methods
        .approve(Atoken, totalAmountToContribute)
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          this.modalMessage = "Approve Successful & now contributing "
         
        });
      await contract.methods
        .stakeTokens(this.currentModalId - 1, totalAmountToContribute)
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log("receipt", receipt);
          this.saveContribution(receipt);
           this.modalMessage = "Contribution Successfull"
        })
        .catch((err) => {
          console.log(err.message);
          console.log(err.transactionHash)
          return err;
        });
    },

    async reversePool() {
      this.poolsOngoing = this.poolsOngoing.reverse();
      this.poolsUpcoming = this.poolsUpcoming.reverse();
      this.poolsCompleted = this.poolsCompleted.reverse();
      this.poolsMyDeal = this.poolsMyDeal.reverse();
    },
    saveContribution(receipt) {
      let { transactionHash, blockNumber, contractAddress, status } = receipt;
      if (status) {
        let contribute = {
          transactionHash,
          blockNumber,
          contractAddress,
          status,
          poolId: this.currentModalId,
          amount: this.totalCurrentModalAmount,
          fee: this.amountIncludeFee,
        };
        console.log(contribute);
        this.createContribution(contribute);
      }
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
.bg__icon-bnb {
  background: linear-gradient(
    50.1deg,
    #f3ba2f5e 0%,
    #f3ba2f29 124.36%
  );
}
.bg__icon-eth {
  background: linear-gradient(
    45.57deg,
    #ecf0f1 2.44%,
    #ecf0f1 99.99%
  );
}
.bg__icon-polygon {
  background: linear-gradient(
    45.57deg,
    #7b3fe447 2.44%,
    #7b3fe424 100%
  );
}
.bg__icon-4 {
  background: linear-gradient(45.57deg, #d1a565bf 2.44%, #d1a5654f 100%);
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
.bnb::before,
.bnb::after,
.bnb {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.bnb {
  width: 40px;
  height: 40px;
  margin: auto 14.25rem auto auto;
  background: url("@/assets/images/uc/bnb.png") no-repeat 50%/80%;
  color: #f3ba2f;
  box-shadow: inset 0 0 0 1px rgba(243, 186, 47, 0.5);
}
.bnb::before,
.bnb::after {
  content: "";
  z-index: 1;
  margin: -9.9999%;
  box-shadow: inset 0 0 0 2px;
  animation: clipMe 8s linear infinite;
}
.bnb::before {
  animation-delay: -4s;
}
/* .bnb:hover::after, .bnb:hover::before {
  background-color: rgba(255, 0, 0, 0.3);
} */
/* ETH */
.eth::before,
.eth::after,
.eth {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.eth {
  width: 40px;
  height: 40px;
  margin: auto 19.5rem auto auto;
  background: url("@/assets/images/uc/eth.png") no-repeat 50%/80%;
  color: #3c3c3d;
  box-shadow: inset 0 0 0 1px rgba(60, 60, 61, 0.5);
}
.eth::before,
.eth::after {
  content: "";
  z-index: 1;
  margin: -9.9999%;
  box-shadow: inset 0 0 0 2px;
  animation: clipMe 8s linear infinite;
}
.eth::before {
  animation-delay: -4s;
}
/* .eth:hover::after, .eth:hover::before {
  background-color: rgba(255, 0, 0, 0.3);
} */
/* Polygon */
.pgn::before,
.pgn::after,
.pgn {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.pgn {
  width: 40px;
  height: 40px;
  margin: auto 17.25rem auto auto;
  background: url("@/assets/images/uc/polygon.png") no-repeat 50%/80%;
  color: rgb(130, 71, 229);
  box-shadow: inset 0 0 0 1px rgba(130, 71, 229, 0.5);
}
.pgn::before,
.pgn::after {
  content: "";
  z-index: 1;
  margin: -9.9999%;
  box-shadow: inset 0 0 0 2px;
  animation: clipMe 8s linear infinite;
}
.pgn::before {
  animation-delay: -4s;
}
/* .eth:hover::after, .eth:hover::before {
  background-color: rgba(255, 0, 0, 0.3);
} */

@keyframes clipMe {
  0%,
  100% {
    clip: rect(0px, 47.99992px, 2px, 0px);
  }
  25% {
    clip: rect(0px, 2px, 47.99992px, 0px);
  }
  50% {
    clip: rect(45.99992px, 47.99992px, 47.99992px, 0px);
  }
  75% {
    clip: rect(0px, 47.99992px, 47.99992px, 45.99992px);
  }
}
</style>
