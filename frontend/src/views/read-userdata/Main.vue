<template>
  <div class="grid grid-cols-10 gap-4">
    <div class="col-span-10 lg:col-span-10">
      <PreviewComponent class="intro-y box mt-5">
        <div
          class="
            p-8
            rounded-xl
            border-b border-slate-200/60
            dark:border-darkmode-400
          "
        >
          <!-- <div class="p-5"> -->
          <Preview>
            <AccordionGroup class="accordion-boxed">
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">
                    Read User Data
                  </p>
                </Accordion>
                <AccordionPanel
                  class="
                    text-slate-600
                    dark:text-slate-500
                    leading-relaxed
                    mt-8
                  "
                >
                  <form
                    id="read-profile-form"
                    @submit.prevent="searchUser(searchData.email)"
                  >
                    <div class="relative mb-6">
                      <input
                        type="email"
                        id="write-user-data-email"
                        class="input__field peer"
                        placeholder=""
                        v-model="searchData.email"
                        required
                      />
                      <label for="input" class="input__label">Email</label>
                    </div>
                    <button
                      type="submit"
                      class="
                        flex
                        items-center
                        w-40
                        justify-center
                        text-white text-center
                        bg-primary
                        p-2
                        px-6
                        mb-8
                        rounded
                      "
                    >
                      Fetch User
                    </button>
                  </form>
                  <div v-if="fetchUserData">
                    <!-- User Data: {{ updatedUserData }} -->
                    <div
                      class="
                        overflow-x-auto
                        relative
                        shadow-md
                        sm:rounded-lg
                        p-2
                      "
                    >
                      <div class="p-4 rounded-lg md:p-3 dark:bg-gray-800 mb-2">
                        <h3
                          class="
                            mb-3
                            text-2xl
                            font-extrabold
                            tracking-tight
                            text-gray-900
                            dark:text-white
                          "
                        >
                          User Details
                        </h3>

                        <div class="p-8 mb-2">
                          <div class="grid gap-4 grid-cols-2">
                            <div>
                              <div class="grid gap-4 grid-cols-2">
                                <div><b>NAME</b></div>
                                <div>
                                  {{ updatedUserData?.profile?.name || "-" }}
                                </div>
                              </div>
                            </div>

                            <div>
                              <div class="grid gap-4 grid-cols-2">
                                <div><b>MOBILE</b></div>
                                <div>
                                  {{ updatedUserData?.profile?.mobile || "-" }}
                                </div>
                              </div>
                            </div>

                            <div>
                              <div class="grid gap-4 grid-cols-2">
                                <div><b>USER NAME</b></div>
                                <div>
                                  {{
                                    updatedUserData?.profile?.userName || "-"
                                  }}
                                </div>
                              </div>
                            </div>

                            <div>
                              <div class="grid gap-4 grid-cols-2">
                                <div><b>BIO</b></div>
                                <div>
                                  {{ updatedUserData?.profile?.bio || "-" }}
                                </div>
                              </div>
                            </div>

                            <div>
                              <div class="grid gap-4 grid-cols-2">
                                <div><b>PERSONAL TELEGRAM URL</b></div>
                                <div>
                                  {{
                                    updatedUserData?.profile?.telegramUrl || "-"
                                  }}
                                </div>
                              </div>
                            </div>

                            <div>
                              <div class="grid gap-4 grid-cols-2">
                                <div><b>TELEGRAM URL</b></div>
                                <div>
                                  {{
                                    updatedUserData?.profile
                                      ?.socialTelegramUrl || "-"
                                  }}
                                </div>
                              </div>
                            </div>

                            <div>
                              <div class="grid gap-4 grid-cols-2">
                                <div><b>TWITTER URL</b></div>
                                <div>
                                  {{
                                    updatedUserData?.profile
                                      ?.socialTwitterUrl || "-"
                                  }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="p-4 rounded-lg md:p-3 dark:bg-gray-800 mb-4">
                        <h3
                          class="
                            mb-3
                            text-2xl
                            font-extrabold
                            tracking-tight
                            text-gray-900
                            dark:text-white
                          "
                        >
                          Contributions
                          <span class="text-right" style="float: right">
                            <span
                              class="sm:w-auto mt-1 sm:mt-0 sm:ml-auto md:ml-0"
                            >
                              <span
                                class="
                                  ml-auto
                                  w-56
                                  lg:w-64
                                  relative
                                  text-slate-500
                                "
                              >
                                <input
                                  v-model="searchText"
                                  type="text"
                                  class="
                                    form-control
                                    w-64
                                    rounded-md
                                    input--rounded
                                    box
                                    pr-10
                                  "
                                  placeholder="Search..."
                                  @change="filterContribution"
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
                                  <line
                                    x1="21"
                                    y1="21"
                                    x2="16.65"
                                    y2="16.65"
                                  ></line>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </h3>

                        <table
                          class="
                            w-full
                            text-sm text-left text-gray-500
                            dark:text-gray-400
                          "
                        >
                          <thead
                            class="
                              text-xs text-gray-700
                              uppercase
                              bg-gray-100
                              dark:bg-gray-700 dark:text-gray-400
                            "
                          >
                            <th scope="col" class="py-3 px-6">S. No</th>
                            <th scope="col" class="py-3 px-6">Deal Id</th>
                            <th scope="col" class="py-3 px-6">Deal Name</th>
                            <th scope="col" class="py-3 px-6">Symbol</th>
                            <th scope="col" class="py-3 px-6">Network</th>
                            <th scope="col" class="py-3 px-6">Amount</th>
                            <th scope="col" class="py-3 px-6">Fee</th>
                            <th scope="col" class="py-3 px-6">Created At</th>
                          </thead>
                          <tbody>
                            <tr
                              class="
                                bg-white
                                border-b
                                dark:bg-gray-900 dark:border-gray-700
                              "
                              v-for="(
                                item, index
                              ) in updatedUserData?.contributions"
                              :key="item._id"
                            >
                              <td class="py-4 px-6">{{ index || "-" }}</td>
                              <td class="py-4 px-6">
                                {{ item.poolId || "-" }}
                              </td>
                              <td class="py-4 px-6">
                                {{ item.poolName || "-" }}
                              </td>
                              <td class="py-4 px-6">
                                {{ item.symbol || "-" }}
                              </td>
                              <td class="py-4 px-6">
                                {{ item.source || "-" }}
                              </td>
                              <td class="py-4 px-6">
                                {{ item.amount || "-" }}
                              </td>
                              <td class="py-4 px-6">{{ item.fee || "-" }}</td>
                              <td class="py-4 px-6">
                                {{ getDate(item.createdAt) || "-" }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </AccordionGroup>
          </Preview>
        </div>
      </PreviewComponent>
    </div>
  </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import { contractABI } from "@/helpers/helper.js";
import { mapActions, mapState, mapWritableState } from "pinia";
import TextInput from "@/components/reusable/TextInput.vue";
import { usePoolStore } from "@/stores/pool.js";
import { useAuthUserStore } from "@/stores/auth";
import VerticalBarChart from "@/components/vertical-bar-chart/Main.vue";
import TextAreaInput from "@/components/reusable/TextAreaInput.vue";

export default {
  components: { VueTimepicker, TextInput, VerticalBarChart, TextAreaInput },
  data() {
    return {
      addPoolData: {},
      tab: 2,
      Write: "Write",
      contract: "",
      airdrop_token: {},
      _balanceStakableToken: "",
      _blacklisted: "",
      _getTotalStakedInPool: "",
      _getUserStakedTokenInPool: "",
      _poolInfo: "",
      _paused: "",
      _owner: "",
      _poolLength: "",
      isAuthoroziedUserAddress: "",
      _isAuthoroziedUser: "",
      searchData: {},
      updatedUserData: {},
      searchText: "",
    };
  },
  computed: {
    // ...mapState(useAuthUserStore, ["selectedUserData"]),
    ...mapWritableState(useAuthUserStore, ["selectedUserData"]),
    fetchUserData() {
      if (Object.keys(this.selectedUserData)?.length) {
        this.setProfileData(this.selectedUserData);
        return true;
      }
      return false;
    },
  },
  async mounted() {
    this.contract = await contractABI();
    this.resetData();
  },
  methods: {
    ...mapActions(usePoolStore, ["addAirDropToken", "createPool"]),
    ...mapActions(useAuthUserStore, ["readUserData", "updateUserStatus"]),
    handleInput(name, value) {
      this.addPoolData[name] = value;
    },
    handleUserDataInput(name, value) {
      this.updatedUserData[name] = value;
    },
    setProfileData(data) {
      this.updatedUserData = {
        userId: data.user._id,
        profileId: data.profile._id,
        ...data.profile,
        ...data.user,
        ...data,
      };
      return this.updatedUserData;
    },
    resetData() {
      this.searchData = {};
      this.selectedUserData = {};
      this.updatedUserData = {};
    },
    async addPool() {
      await this.contract.methods
        .addPool(
          this.addPoolData.lpToken,
          this.addPoolData.name,
          this.addPoolData.symbol,
          (this.addPoolData.startTime = await Math.floor(
            new Date(this.addPoolData.startTime).getTime() / 1000
          )),
          (this.addPoolData.endTime = await Math.floor(
            new Date(this.addPoolData.endTime).getTime() / 1000
          )),
          BigInt(this.addPoolData.minimumContributeAmount * 10 ** 18),
          BigInt(this.addPoolData.poolStakableAmount * 10 ** 18)
        )
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
          this.addPoolToDB(receipt);
          this.Write = "Write Successful";
        });
    },
    addPoolToDB(receipt) {
      console.log(receipt);
      let finalPayload = {
        lpToken: this.addPoolData.lpToken,
        name: this.addPoolData.name,
        symbol: this.addPoolData.symbol,
        startTime: this.addPoolData.startTime,
        endTime: this.addPoolData.endTime,
        minimumContributeAmount: this.addPoolData.minimumContributeAmount,
        poolStakableAmount: this.addPoolData.poolStakableAmount,
        // _transactionHash: receipt.transactionHash,
      };
      this.createPool(finalPayload);
    },
    async airDropToken() {
      await this.contract.methods
        .AirdropdropTokens(
          this.airdrop_token._airDropTokenToken,
          [this.airdrop_token._airDropTokenReceiver],
          [this.airdrop_token._airDropTokenAmount]
        )
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
          // this.addAirDropToken(receipt);
          this.Write = "Write Successful";
        });
    },
    async excludeAllFromauthorizedUser([addresses]) {
      await this.contract.methods
        .excludeAllFromauthorizedUser([])
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
          this.Write = "Write Successful";
        });
    },

    async excludeAllFromblacklist([addresses]) {
      await this.contract.methods
        .excludeAllFromblacklist([])
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
          this.Write = "Write Successful";
        });
    },

    async excludeAllInauthorizedUser([addresses]) {
      await this.contract.methods
        .excludeAllInauthorizedUser([])
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
          this.Write = "Write Successful";
        });
    },

    async includeAllInblacklist([addresses]) {
      await this.contract.methods
        .includeAllInblacklist([])
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
          this.Write = "Write Successful";
        });
    },

    async pauseContract() {
      await this.contract.methods
        .pauseContract()
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
          this.Write = "Write Successful";
        });
    },

    async setPoolStakingEndTime(_pid, _time) {
      await this.contract.methods
        .setPoolStakingEndTime("_pid", "_time")
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
          this.Write = "Write Successful";
        });
    },

    async transferOwnership(_address) {
      await this.contract.methods
        .transferOwnership(_address)
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
          this.Write = "Write Successful";
        });
    },
    async unPauseContract() {
      await this.contract.methods
        .unPauseContract()
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
          this.Write = "Write Successful";
        });
    },
    // <---- Write Contract web3 function ---->End

    // <---- Read Contract web3 function ---->Start
    async authorizedUser() {
      await this.contract.methods
        .authorizedUser(this.isAuthoroziedUserAddress)
        .call()
        .then((receipt) => {
          console.log(receipt);
          this._isAuthoroziedUser = "Bool" + " : " + receipt;
        });
    },
    async balanceStakableToken() {
      await this.contract.methods
        .balanceStakableToken(this.balanceStakableTokenPid)
        .call()
        .then((receipt) => {
          console.log(receipt);
          this._balanceStakableToken = "Amount" + " : " + receipt / 10 ** 18;
        })
        .catch((err) => {
          this._balanceStakableToken = "Please check the Pid Number";
          console.log(err);
        });
    },
    async blacklisted() {
      await this.contract.methods
        .blacklisted(this.blacklistedAddress)
        .call()
        .then((receipt) => {
          console.log(receipt);
          this._blacklisted = "Bool" + " : " + receipt;
        })
        .catch((err) => {
          this._blacklisted = "Please check the address";
          console.log(err);
        });
    },
    async getTotalStakedInPool() {
      await this.contract.methods
        .getTotalStakedInPool(this.getTotalStakedInPoolPid)
        .call()
        .then((receipt) => {
          console.log(receipt);
          this._getTotalStakedInPool = "Amount" + " : " + receipt / 10 ** 18;
        })
        .catch((err) => {
          this._getTotalStakedInPool = "Please check the Pid Number";
          console.log(err);
        });
    },
    async getUserStakedTokenInPool() {
      await this.contract.methods
        .getUserStakedTokenInPool(
          this.getUserStakedTokenInPoolPid,
          this.getUserStakedTokenInPoolAddress
        )
        .call()
        .then((receipt) => {
          console.log(receipt);
          this._getUserStakedTokenInPool =
            "Amount" + " : " + receipt / 10 ** 18;
        })
        .catch((err) => {
          this._getUserStakedTokenInPool = "Please check the Pid Number";
          console.log(err);
        });
    },
    async isPaused() {
      await this.contract.methods
        .paused()
        .call()
        .then((receipt) => {
          console.log(receipt);
          this._paused = "Bool" + " : " + receipt;
        })
        .catch((err) => {
          this._paused = err;
          console.log(err);
        });
    },
    async isOwner() {
      await this.contract.methods
        .owner()
        .call()
        .then((receipt) => {
          console.log(receipt);
          this._owner = receipt;
        })
        .catch((err) => {
          this._owner = err;
          console.log(err);
        });
    },
    async poolLength() {
      await this.contract.methods
        .poolLength()
        .call()
        .then((receipt) => {
          console.log(receipt);
          this._poolLength = "Length" + " : " + receipt;
        })
        .catch((err) => {
          this._poolLength = err;
          console.log(err);
        });
    },
    searchUser(email) {
      this.readUserData({ email: email });
    },
    filterContribution() {
      this.readUserData({
        email: this.searchData.email,
        search: this.searchText,
      });
    },
    handleUserBlock(name, value) {
      this.updatedUserData[name] = value;
      this.updateUserStatus({
        isBlocked: value,
        profileID: this.updatedUserData.profileId,
        userId: this.updatedUserData.userId,
      });
    },

    getDate(datetime) {
      let date = new Date(datetime);

      let dateString = `${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()}  `;

      return dateString;
    },
  },
};
</script>

<style>
.accordion-item:nth-child(even) {
  background: #ebf0f5;
}
.items.ts-input.full.has-items {
  background-color: transparent !important;
  border-width: 0px !important;
  padding: 7.5px 0px 7.5px 0px !important;
  z-index: 99999 !important;
}
.tom-select .ts-dropdown {
  background: #ebf0f5 !important;
  z-index: 99999 !important;
}
.tom-select .ts-input {
  background-position: center right 0.2rem !important;
  z-index: 99999 !important;
  box-shadow: none !important;
}

.ts-control.tom-select.w-full.absolute.top-2.pl-2.single.plugin-dropdown_input {
  padding-left: 0 !important;
}
.ts-dropdown.single.tom-select.w-full.absolute.top-2.plugin-dropdown_input {
  z-index: 999999 !important;
}
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

.bg__icon-4 {
  background: linear-gradient(45.57deg, #d1a565bf 2.44%, #d1a5654f 100%);
}
/* .tom-select .ts-input {
  background: transparent !important;
  box-shadow: none !important;
} */
</style>
