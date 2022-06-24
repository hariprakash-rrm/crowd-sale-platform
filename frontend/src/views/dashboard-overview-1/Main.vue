<template>
  <div class="grid grid-cols-12 gap-6">
    <!-- BEGIN: General Report -->
    <div class="col-span-12 grid grid-cols-12 gap-6 mt-8">
      <div class="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
        <div class="box p-5 zoom-in bg-[#ffffff]">
          <div class="flex items-center">
            <div class="w-2/4 flex-none">
              <!-- <div class="text-lg font-medium truncate"></div> -->
              <div class="text-lg font-semibold truncate">
                0% Allocation Share
              </div>
              <div class="text-slate-500 mt-1">Tier Level</div>
            </div>
            <div class="flex-none ml-auto relative">
              <ReportDonutChart1 :width="90" :height="90" />
              <div
                class="
                  font-medium
                  absolute
                  w-full
                  h-full
                  flex
                  items-center
                  justify-center
                  top-0
                  left-0
                "
              >
                20%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
        <div class="box p-5 zoom-in bg-[#ffffff]">
          <div class="flex items-center">
            <div class="w-2/4 flex-none">
              <!-- <div class="text-lg font-medium truncate"></div> -->
              <div class="text-lg font-semibold truncate">0</div>
              <div class="text-slate-500 mt-1">UC Staked</div>
            </div>
            <div class="flex-none ml-auto relative">
              <ReportDonutChart1 :width="90" :height="90" />
              <div
                class="
                  font-medium
                  absolute
                  w-full
                  h-full
                  flex
                  items-center
                  justify-center
                  top-0
                  left-0
                "
              >
                20%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
        <div class="box p-5 zoom-in bg-[#ffffff]">
          <div class="flex items-center">
            <div class="w-2/4 flex-none">
              <div class="text-lg font-semibold truncate">0.14 USD</div>
              <div class="text-slate-500 mt-1">Current Token Price</div>
            </div>
            <div class="flex-none ml-auto relative">
              <ReportDonutChart1 :width="90" :height="90" />
              <div
                class="
                  font-medium
                  absolute
                  w-full
                  h-full
                  flex
                  items-center
                  justify-center
                  top-0
                  left-0
                "
              >
                45%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
        <div class="box p-5 zoom-in bg-[#ffffff]">
          <div class="flex items-center">
            <div class="w-2/4 flex-none">
              <div class="text-lg font-semibold truncate">4,810,009 USD</div>
              <div class="text-slate-500 mt-1">Market Capitalization</div>
            </div>
            <div class="flex-none ml-auto relative">
              <ReportDonutChart1 :width="90" :height="90" />
              <div
                class="
                  font-medium
                  absolute
                  w-full
                  h-full
                  flex
                  items-center
                  justify-center
                  top-0
                  left-0
                "
              >
                45%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
            2xl:w-1/6
            bg-slate-200
            dark:bg-black/10
            rounded-md
            mr-auto
            p-1 
          "
          role="tablist"
        >
          <li id="active-users-tab" class="nav-item flex-1" role="presentation">
            <button
              class="nav-link w-full py-1.5 px-2 active"
              data-tw-toggle="pill"
              data-tw-target="#active-users"
              type="button"
              role="tab"
              aria-controls="active-users"
              aria-selected="true"
            >
             All Deals
            </button>
          </li>
          <li
            id="inactive-users-tab"
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
                    <input type="text" class="form-control w-64 rounded-md input--rounded box pr-10" placeholder="Search...">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="search" class="lucide lucide-search w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
            </div>
        </div>
       
        <table class="table table-report">
          <thead>
            <tr>
              <th class="whitespace-nowrap">IMAGES</th>
              <th class="whitespace-nowrap">PRODUCT NAME</th>
              <th class="text-center whitespace-nowrap">TICKER</th>
              <th class="text-center whitespace-nowrap">ROUND</th>
              <th class="text-center whitespace-nowrap">CONTRIBUTION</th>
              <th class="text-center whitespace-nowrap">STATUS</th>
              <th class="text-center whitespace-nowrap">ACTIVITY STATUS</th>
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
                  <a @click="save"
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
                  >ArtFi</a
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
              <td class="text-center">ATF</td>
              <td class="text-center">Seed</td>
              <td class="text-center">24/05/2022</td>
              <td class="w-40">
                <div class="flex items-center justify-center text-success">
                  Pledged
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
                  >ArtFi</a
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
              <td class="text-center">ATF</td>
              <td class="text-center">Seed</td>
              <td class="text-center">24/05/2022</td>
              <td class="w-40">
                <div class="flex items-center justify-center text-success">
                  Pledged
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
    </div>
    <!-- END: Deals Info -->
  </div>
</template>

<script lang="ts">

import { ref, provide } from "vue";
import {ReportLineChart} from "@/components/report-line-chart/Main.vue";
import ReportDonutChart from "@/components/report-donut-chart/Main.vue";
import ReportPieChart from "@/components/report-pie-chart/Main.vue";
import ReportMap from "@/components/report-map/Main.vue";
import ReportDonutChart1 from "@/components/report-donut-chart-1/Main.vue";
import SimpleLineChart1 from "@/components/simple-line-chart-1/Main.vue";
import Web3 from "web3";
export default {
  name: "app",
  contractResult: "",
 
  methods: {
    save:async function() {
      // web3wallet.title;/

      let web3 = new Web3(window.ethereum);
      let contractAddress = "0x22b3928ef5a2c7dAb63Ed12FC5985595489B1018";
      let abi = JSON.parse(`[
	{
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newName",
				"type": "string"
			}
		],
		"name": "setName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]`);
      let contract = new web3.eth.Contract(abi, contractAddress);

      let set = await contract.methods
        .setName("hari")
        .send({ from: localStorage.getItem('address') })
        .then (result => (this.contractResult = result));
      await console.log(set);
      
    }
  }
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
  border-radius: .5rem !important;
}
.table th  {
  font-weight: 600 !important;
}
</style>

