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
            class="nav nav-pills w-3/4 lg:w-2/6 bg-slate-200 dark:bg-black/10 rounded-md mr-auto p-1"
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
                class="lucide lucide-search w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
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
                <th class="text-center whitespace-nowrap">POOL ID</th>
                <th class="whitespace-nowrap w-72">NAME</th>
                <th class="text-center whitespace-nowrap">SYMBOL</th>

                <th class="text-center whitespace-nowrap">
                  MAXIMUM CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">ENDTIME</th>
                <th class="text-center whitespace-nowrap">
                  ENTER YOUR CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="pool in poolsOngoing"
                :key="pool.id"
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
                <td class="text-center">{{ pool.id }}</td>
                <td>
                  <a href="" class="text-lg font-semibold whitespace-nowrap">{{
                    pool.name
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

                <td class="text-center">{{ pool.symbol }}</td>
                <td class="text-center">{{ pool.currentPercentage }}%</td>
                <td class="text-center">{{ pool.humanEndTime }}</td>

                <!-- <td class="w-40">
                  <div class="flex items-center justify-center text-danger">
                    Not Pledged
                  </div>
                </td> -->
                <td class="text-center">
                  <input
                    @input="handleInput(pool.id, $event)"
                    :value="payload[pool.id]"
                    type="number"
                    class="form-control w-56 rounded-md input--rounded box pr-10"
                    placeholder="Enter Amount..."
                    :min="1"
                  />
                </td>
                <td class="table-report__action w-40">
                  <div class="flex justify-center gap-4 items-center">
                    <a
                      @click="contribute(pool.id)"
                      class="flex items-center text-white text-center bg-primary p-2 px-6 rounded"
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
                <th class="text-center whitespace-nowrap">POOL ID</th>
                <th class="whitespace-nowrap w-72">NAME</th>
                <th class="text-center whitespace-nowrap">SYMBOL</th>

                <th class="text-center whitespace-nowrap">
                  MAXIMUM CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">ENDTIME</th>
                <th class="text-center whitespace-nowrap">
                  ENTER YOUR CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">ACTIONS</th>
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
                <td class="text-center">{{ user.id }}</td>
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

                <td class="text-center">{{ user.symbol }}</td>
                <td class="text-center">{{ user.currentPercentage }}%</td>
                <td class="text-center">{{ user.humanEndTime }}</td>

                <!-- <td class="w-40">
                  <div class="flex items-center justify-center text-danger">
                    Not Pledged
                  </div>
                </td> -->
                <td class="text-center">
                  <input
                    type="text"
                    class="form-control w-56 rounded-md input--rounded box pr-10"
                    placeholder="Enter Amount..."
                  />
                </td>
                <td class="table-report__action w-40">
                  <div class="flex justify-center gap-4 items-center">
                    <a
                      @click="save"
                      class="flex items-center text-white text-center bg-primary p-2 px-6 rounded"
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
                <th class="text-center whitespace-nowrap">POOL ID</th>
                <th class="whitespace-nowrap w-72">NAME</th>
                <th class="text-center whitespace-nowrap">SYMBOL</th>

                <th class="text-center whitespace-nowrap">
                  MAXIMUM CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">ENDTIME</th>
                <th class="text-center whitespace-nowrap">
                  ENTER YOUR CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">ACTIONS</th>
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
                <td class="text-center">{{ user.id }}</td>
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

                <td class="text-center">{{ user.symbol }}</td>
                <td class="text-center">{{ user.currentPercentage }}%</td>
                <td class="text-center">{{ user.humanEndTime }}</td>

                <!-- <td class="w-40">
                  <div class="flex items-center justify-center text-danger">
                    Not Pledged
                  </div>
                </td> -->
                <td class="text-center">
                  <input
                    type="text"
                    class="form-control w-56 rounded-md input--rounded box pr-10"
                    placeholder="Enter Amount..."
                  />
                </td>
                <td class="table-report__action w-40">
                  <div class="flex justify-center gap-4 items-center">
                    <a
                      @click="save"
                      class="flex items-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      Contribute
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
                <th class="text-center whitespace-nowrap">POOL ID</th>
                <th class="whitespace-nowrap w-72">NAME</th>
                <th class="text-center whitespace-nowrap">SYMBOL</th>

                <th class="text-center whitespace-nowrap">
                  MAXIMUM CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">ENDTIME</th>
                <th class="text-center whitespace-nowrap">
                  ENTER YOUR CONTRIBUTION
                </th>
                <th class="text-center whitespace-nowrap">ACTIONS</th>
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
                <td class="text-center">{{ user.id }}</td>
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

                <td class="text-center">{{ user.symbol }}</td>
                <td class="text-center">{{ user.currentPercentage }}%</td>
                <td class="text-center">{{ user.humanEndTime }}</td>

                <!-- <td class="w-40">
                  <div class="flex items-center justify-center text-danger">
                    Not Pledged
                  </div>
                </td> -->
                <td class="text-center">
                  <input
                    type="text"
                    class="form-control w-56 rounded-md input--rounded box pr-10"
                    placeholder="Enter Amount..."
                  />
                </td>
                <td class="table-report__action w-40">
                  <div class="flex justify-center gap-4 items-center">
                    <a
                      @click="save"
                      class="flex items-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      Contribute
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

<script>
import { ref, provide } from "vue";
import Web3 from "web3";
import { contractABI } from "@/helpers/helper.js"
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
    };
  },

  mounted() {
    this.loadFromContract();
  },

  methods: {
    handleInput(id, event) {
      let value = event.target.value;
      this.payload[id] = value;
      console.log(this.payload)
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
    async loadFromContract() {
      let contract = contractABI()
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
        var currentlyStaked = await contract.methods
          .getTotalStakedInPool(i)
          .call();
        var newDate = new Date(parseInt(set.endTime * 1000)).toLocaleString();
        set.humanEndTime = newDate;
        set.poolStakableAmount = set.poolStakableAmount / 10 ** 18;
        set.currentlyStaked = currentlyStaked / 10 ** 18;
        var currentPercentage =
          (set.currentlyStaked * 100) / set.poolStakableAmount;
        set.currentPercentage = currentPercentage;
        var stakedAmount = await contract.methods
          .getUserStakedTokenInPool(i, localStorage.getItem("address"))
          .call();
        // await this.pools.push(set);
        var currentTime = await Math.floor(Date.now() / 1000);
        console.log(currentTime);
        console.log(set.endTime);
        if (currentTime > set.endTime && currentTime > set.startTime) {
          this.poolsCompleted.push(set);
          console.log("completed");
        } else if (currentTime < set.startTime && currentTime < set.endTime) {
          this.poolsUpcoming.push(set);
          console.log("upcoming");
        } else if (currentTime < set.endTime && currentTime > set.startTime) {
          this.poolsOngoing.push(set);
          console.log("Ongoing");
        }
        if (stakedAmount > 0) {
          this.poolsMyDeal.push(set);
        }
      }
    },
    async contribute(id) {
      // if(!this.payload[id]) {
      //   return
      // }
      let contract = contractABI()
      var callContract = await contract.methods.stakeTokens(id-1,  BigInt(this.payload[id]*10**18)).send({ from: localStorage.getItem("address") }).then(receipt=> {consol.log(receipt)})
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
