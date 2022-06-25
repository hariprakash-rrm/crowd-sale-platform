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
    <div class="col-span-12 mt-8">
      <div class="intro-y">
        <h2 class="text-2xl font-semibold truncate mr-5">Deals</h2>
        <p class="text-lg text-slate-500 mt-2">Available Deals</p>
      </div>
      <div class="intro-y py-8 rounded-xl overflow-auto lg:overflow-visible">
        <div class="flex items-center justify-between mb-8">
          <ul
            class="
              nav nav-pills
              w-3/4
              lg:w-2/6
              bg-slate-200
              dark:bg-black/10
              rounded-md
              mr-auto
              p-1
            "
            role="tablist"
          >
            <li
              @click="activeTabOne"
              id="active-ongoing-tab"
              class="nav-item flex-1"
              role="presentation"
            >
              <button
                class="nav-link w-full py-1.5 px-2 active"
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
                class="nav-link w-full py-1.5 px-2"
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
                class="nav-link w-full py-1.5 px-2"
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
                class="nav-link w-full py-1.5 px-2"
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
          <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div class="w-64 relative text-slate-500">
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
                class="
                  lucide lucide-search
                  w-4
                  h-4
                  absolute
                  my-auto
                  inset-y-0
                  mr-3
                  right-0
                "
                data-lucide="search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>
        <!-- BEGIN: TAB CONTENT ONGOING -->
        <div v-show="tab === 1">
          <table class="table table-report">
            <thead>
              <tr>
                <th class="whitespace-nowrap">PRODUCT</th>
                <th class="text-center whitespace-nowrap w-72">POOL ID</th>
                <th class="whitespace-nowrap">NAME</th>
                <th class="text-center whitespace-nowrap">SYMBOL</th>
                <th class="text-center whitespace-nowrap">ENDTIME</th>
                <th class="text-center whitespace-nowrap">
                  MAXIMUM CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">
                  ENTER YOUR CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in poolsOngoing" :key="user.id" class="intro-x zoom-in">
              
                <td class="w-20">
                  <div class="flex">
                    <div class="w-16 h-16 image-fit zoom-in">
                      <Tippy
                        tag="img"
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-md"
                        src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  
                  <a href="" class="text-lg font-semibold whitespace-nowrap">{{
                    user.name
                  }}</a>
                  <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                    <div class="flex text-slate-500 text-xs">
                      <div class="mr-auto">Progress</div>
                      <div>20%</div>
                    </div>
                    <div class="progress h-1 mt-2">
                      <div
                        class="progress-bar w-1/4 bg-primary"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </td>
                 <td class="text-center">{{user.id}}</td>
                <td class="text-center">{{ user.symbol }}</td>
                <td class="text-center">{{user.currentlyStaked}}<br>-------<br>{{user.poolStakableAmount}}</td>
                <td class="text-center">{{ user.humanEndTime }}</td>
               

                <td class="w-40">
                  <div class="flex items-center justify-center text-danger">
                    Not Pledged
                  </div>
                </td>
                <td class="text-center">
                  <input
                    type="text"
                    class="
                      form-control
                      w-56
                      rounded-md
                      input--rounded
                      box
                      pr-10
                    "
                    placeholder="Enter Amount..."
                  />
                </td>
                <td class="table-report__action w-40">
                  <div class="flex justify-center gap-4 items-center">
                    <a
                      @click="save"
                      class="
                        flex
                        items-center
                        text-white text-center
                        bg-primary
                        p-2
                        px-6
                        rounded
                      "
                    >
                      Contribute
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- END: TAB CONTENT ONGOING -->

        <!-- BEGIN: TAB CONTENT UPCOMING -->
        <div v-show="tab === 2">
          <table class="table table-report">
            <thead>
              <tr>
                <th class="whitespace-nowrap">PRODUCT</th>
                <th class="text-center whitespace-nowrap w-72">POOL ID</th>
                <th class="whitespace-nowrap">NAME</th>
                <th class="text-center whitespace-nowrap">SYMBOL</th>
                <th class="text-center whitespace-nowrap">ENDTIME</th>
                <th class="text-center whitespace-nowrap">
                  MAXIMUM CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">
                  ENTER YOUR CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="user in poolsUpcoming" :key="user.id" class="intro-x zoom-in">
              
                <td class="w-20">
                  <div class="flex">
                    <div class="w-16 h-16 image-fit zoom-in">
                      <Tippy
                        tag="img"
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-md"
                        src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  
                  <a href="" class="text-lg font-semibold whitespace-nowrap">{{
                    user.name
                  }}</a>
                  <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                    <div class="flex text-slate-500 text-xs">
                      <div class="mr-auto">Progress</div>
                      <div>20%</div>
                    </div>
                    <div class="progress h-1 mt-2">
                      <div
                        class="progress-bar w-1/4 bg-primary"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </td>
                 <td class="text-center">{{user.id}}</td>
                <td class="text-center">{{ user.symbol }}</td>
                <td class="text-center">{{user.currentlyStaked}}<br>-------<br>{{user.poolStakableAmount}}</td>
                <td class="text-center">{{ user.humanEndTime }}</td>
               

                <td class="w-40">
                  <div class="flex items-center justify-center text-danger">
                    Not Pledged
                  </div>
                </td>
                <td class="text-center">
                  <input
                    type="text"
                    class="
                      form-control
                      w-56
                      rounded-md
                      input--rounded
                      box
                      pr-10
                    "
                    placeholder="Enter Amount..."
                  />
                </td>
                <td class="table-report__action w-40">
                  <div class="flex justify-center gap-4 items-center">
                    <a
                      @click="save"
                      class="
                        flex
                        items-center
                        text-white text-center
                        bg-primary
                        p-2
                        px-6
                        rounded
                      "
                    >
                      Contribute
                    </a>
                  </div>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
        <!-- END: TAB CONTENT UPCOMING -->

        <!-- BEGIN: TAB CONTENT COMPLETED -->
        <div v-show="tab === 3">
          <table class="table table-report">
            <thead>
              <tr>
                <th class="whitespace-nowrap">PRODUCT</th>
                <th class="text-center whitespace-nowrap w-72">POOL ID</th>
                <th class="whitespace-nowrap">NAME</th>
                <th class="text-center whitespace-nowrap">SYMBOL</th>
                <th class="text-center whitespace-nowrap">ENDTIME</th>
                <th class="text-center whitespace-nowrap">
                  MAXIMUM CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">
                  ENTER YOUR CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr class="intro-x zoom-in">
                <td class="w-20">
                  <div class="flex">
                    <div class="w-16 h-16 image-fit zoom-in">
                      <Tippy
                        tag="img"
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-md"
                        src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <a href="" class="text-lg font-semibold whitespace-nowrap"
                    >GT Protocol</a
                  >
                  <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                    <div class="flex text-slate-500 text-xs">
                      <div class="mr-auto">Progress</div>
                      <div>20%</div>
                    </div>
                    <div class="progress h-1 mt-2">
                      <div
                        class="progress-bar w-1/4 bg-primary"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </td>
                <td class="text-center">GTP</td>
                <td class="text-center">Private</td>
                <td class="text-center">24/05/2022</td>
                <td class="w-40">
                  <div class="flex items-center justify-center text-danger">
                    Not Pledged
                  </div>
                </td>
                <td class="text-center">
                  <div>
                    <span
                      class="
                        bg-gray-400/20
                        text-gray-600 text-xs
                        m-2
                        px-2
                        py-1
                        rounded
                        z-10
                      "
                      >Closed</span
                    >
                    <span
                      class="
                        bg-green-400/20
                        text-green-600 text-xs
                        m-2
                        px-2
                        py-1
                        rounded
                        z-10
                      "
                      >Live</span
                    >
                  </div>
                </td>
                <td class="table-report__action w-40">
                  <div class="flex justify-center items-center">
                    <a
                      class="
                        flex
                        items-center
                        text-white text-center
                        bg-primary
                        p-2
                        px-6
                        rounded
                      "
                      href=""
                    >
                      Claim
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- END: TAB CONTENT COMPLETED -->

        <!-- BEGIN: TAB CONTENT MYDEALS -->
        <div v-show="tab === 4">
          <table class="table table-report">
            <thead>
              <tr>
                <th class="whitespace-nowrap">PRODUCT</th>
                <th class="text-center whitespace-nowrap w-72">POOL ID</th>
                <th class="whitespace-nowrap">NAME</th>
                <th class="text-center whitespace-nowrap">SYMBOL</th>
                <th class="text-center whitespace-nowrap">ENDTIME</th>
                <th class="text-center whitespace-nowrap">
                  MAXIMUM CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">
                  ENTER YOUR CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr class="intro-x zoom-in">
                <td class="w-20">
                  <div class="flex">
                    <div class="w-16 h-16 image-fit zoom-in">
                      <Tippy
                        tag="img"
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-md"
                        src="http://enigma.left4code.com/dist/images/preview-10.jpg"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <a href="" class="text-lg font-semibold whitespace-nowrap"
                    >GT Protocol</a
                  >
                  <div class="w-full mb-4 mt-2 lg:mb-0 mr-auto">
                    <div class="flex text-slate-500 text-xs">
                      <div class="mr-auto">Progress</div>
                      <div>20%</div>
                    </div>
                    <div class="progress h-1 mt-2">
                      <div
                        class="progress-bar w-1/4 bg-primary"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </td>
                <td class="text-center">GTP</td>
                <td class="text-center">Private</td>
                <td class="text-center">24/05/2022</td>
                <td class="w-40">
                  <div class="flex items-center justify-center text-danger">
                    Not Pledged
                  </div>
                </td>
                <td class="text-center">
                  <div>
                    <span
                      class="
                        bg-gray-400/20
                        text-gray-600 text-xs
                        m-2
                        px-2
                        py-1
                        rounded
                        z-10
                      "
                      >Closed</span
                    >
                    <span
                      class="
                        bg-green-400/20
                        text-green-600 text-xs
                        m-2
                        px-2
                        py-1
                        rounded
                        z-10
                      "
                      >Live</span
                    >
                  </div>
                </td>
                <td class="table-report__action w-40">
                  <div class="flex justify-center items-center">
                    <a
                      class="
                        flex
                        items-center
                        text-white text-center
                        bg-primary
                        p-2
                        px-6
                        rounded
                      "
                      href=""
                    >
                      Claim
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- BEGIN: TAB CONTENT MYDEALS -->
      </div>
    </div>
    <!-- END: Deals Info -->
  </div>
</template>

<script lang="ts">
import { ref, provide } from "vue";
import { ReportLineChart } from "@/components/report-line-chart/Main.vue";
import ReportDonutChart from "@/components/report-donut-chart/Main.vue";
import ReportPieChart from "@/components/report-pie-chart/Main.vue";
import ReportMap from "@/components/report-map/Main.vue";
import ReportDonutChart1 from "@/components/report-donut-chart-1/Main.vue";
import SimpleLineChart1 from "@/components/simple-line-chart-1/Main.vue";
import Web3 from "web3";
import { log } from "util";
export default {
  name: "",
  contractResult: "",

  data() {
    return {
      card: 70,
      poolsOngoing: [],
      poolsUpcoming: [],
      poolsCompleted:[],
      poolsMyDeal:[],
    
      tab: 1,
    };
  },

  mounted() {
    this.loadFromContract();
  },

  methods: {
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

    loadFromContract: async function () {
     

      let web3 = new Web3(window.ethereum);
      let contractAddress = "0x6bBFF77771f303F6a210F5f1b0D08529E98431Af";
      let abi = JSON.parse(
        `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"AccountblacklistUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address[]","name":"accounts","type":"address[]"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"AccountsauthorizedUserUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address[]","name":"accounts","type":"address[]"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"AccountsblacklistUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address[]","name":"_recipients","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"_amount","type":"uint256[]"}],"name":"AirDropStatus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Reward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"StakedToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"UpdatedStakingEndTime","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawAll","type":"event"},{"inputs":[{"internalType":"contract IERC20Upgradeable","name":"rewardToken","type":"address"},{"internalType":"address[]","name":"_recipients","type":"address[]"},{"internalType":"uint256[]","name":"_amount","type":"uint256[]"}],"name":"AirdropdropTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20Upgradeable","name":"_lpToken","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_endTime","type":"uint256"},{"internalType":"uint256","name":"_minimumcontributeAmount","type":"uint256"},{"internalType":"uint256","name":"_poolStakableAmount","type":"uint256"}],"name":"addPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorizedUser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"balanceStakableToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"excludeAllFromauthorizedUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"excludeAllFromblacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getTotalStakedInPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"getUserStakedTokenInPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"includeAllInauthorizedUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"includeAllInblacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20Upgradeable","name":"lpToken","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"poolStakableAmount","type":"uint256"},{"internalType":"uint256","name":"minimumContributeAmount","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxiableUUID","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_endTime","type":"uint256"}],"name":"setPoolStakingEndTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalContributedAmountInPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unPauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"stakingStartTime","type":"uint256"},{"internalType":"uint256","name":"stakingEndTime","type":"uint256"},{"internalType":"bool","name":"hasStaked","type":"bool"},{"internalType":"bool","name":"isStaking","type":"bool"},{"internalType":"uint256","name":"expectedReward","type":"uint256"}],"stateMutability":"view","type":"function"}]`);
      let contract = new web3.eth.Contract(abi, contractAddress);
      let poolLength = await contract.methods
        .poolLength()
        .call({ from: localStorage.getItem("address") });

      let i;

      for (i = 0; i <= poolLength; i++) {
        let set = await contract.methods
          .poolInfo(i)
          .call({ from: localStorage.getItem("address") });
        var myJSON = JSON.stringify(set);
        localStorage.setItem("pools", myJSON);
        // const date = new Date(set.endTime * 1000);
        var currentlyStaked = await contract.methods.getTotalStakedInPool(i).call()
        var newDate = new Date(parseInt(set.endTime * 1000)).toLocaleString();
        set.humanEndTime = newDate;
        set.poolStakableAmount = set.poolStakableAmount/10**18
        set.currentlyStaked = currentlyStaked/10**18
        // await this.pools.push(set);
        var currentTime = Date.now()/1000
        console.log(currentTime)
        if(currentTime>set.endTime){
            this.poolsCompleted.push(set)
            console.log("completed")
        }else if(currentTime < set.endTime){
          this.poolsOngoing.push(set)
          console.log("Ongoing")
        }else if(currentTime < set.startTime){
          this.poolsUpcoming.push(set)
          console.log("upcoming")
        }

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

