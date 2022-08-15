<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 lg:col-span-6">
      <PreviewComponent class="intro-y box mt-5">
        <div
          class="p-8 rounded-xl border-b border-slate-200/60 dark:border-darkmode-400"
        >
          <!-- <div class="p-5"> -->
          <Preview>
            <AccordionGroup class="accordion-boxed">
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">Edit Pool</p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                >
                  <div
                    class="relative px-0 input__field dark:border-darkmode-600 border border-solid rounded-md bg-transparent h-14 mb-8 mt-8 focus:border focus:border-solid focus:border-primary"
                  >
                    <label
                      for="update-profile-form-2"
                      class="absolute input__label form-label left-2.5 -top-3 mb-0 pb-0 px-2 bg-[#131c25]"
                      >Network</label
                    >
                    <TomSelect
                      id="update-profile-form-2"
                      v-model="select"
                      class="w-full absolute top-2"
                    >
                      <option value="1">BSC</option>
                      <option value="2">Ethereum</option>
                      <option value="3">Polygon</option>
                    </TomSelect>
                  </div>
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="input"
                      class="input__field peer"
                      placeholder=""
                    />
                    <label for="input" class="input__label">Input</label>
                  </div>
                  <button
                    type="button"
                    class="flex items-center w-40 justify-center text-white text-center bg-primary p-2 px-6 mb-8 rounded"
                  >
                    Query
                  </button>
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="input"
                      class="input__field peer"
                      placeholder=""
                    />
                    <label for="input" class="input__label">Product URL</label>
                  </div>
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="input"
                      class="input__field peer"
                      placeholder=""
                    />
                    <label for="input" class="input__label">Roadmap URL 1</label>
                  </div>
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="input"
                      class="input__field peer"
                      placeholder=""
                    />
                    <label for="input" class="input__label">Team URL</label>
                  </div>
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="input"
                      class="input__field peer"
                      placeholder=""
                    />
                    <label for="input" class="input__label">VC's URl</label>
                  </div>
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="input"
                      class="input__field peer"
                      placeholder=""
                    />
                    <label for="input" class="input__label">Facebook URL</label>
                  </div>
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="input"
                      class="input__field peer"
                      placeholder=""
                    />
                    <label for="input" class="input__label"
                      >Instagram URL</label
                    >
                  </div>
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="input"
                      class="input__field peer"
                      placeholder=""
                    />
                    <label for="input" class="input__label">Linkedin URL</label>
                  </div>

                  <button
                    type="button"
                    class="flex items-center w-40 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                  >
                    Update
                  </button>
                </AccordionPanel>
              </AccordionItem>
            </AccordionGroup>
          </Preview>
        </div>
      </PreviewComponent>
    </div>
    <div class="col-span-12 lg:col-span-6">
      <PreviewComponent class="intro-y box mt-5">
        <div
          class="p-8 rounded-xl border-b border-slate-200/60 dark:border-darkmode-400"
        >
          <Preview>
            <AccordionGroup class="accordion-boxed">
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">Add LP Token</p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                >
                  <form id="add-lp-token" @submit.prevent="addLPTokenData()">
                    <div
                      class="relative px-0 input__field dark:border-darkmode-600 border border-solid rounded-md bg-transparent h-14 mb-6 mt-8 focus:border focus:border-solid focus:border-primary"
                    >
                      <label
                        for="update-profile-form-2"
                        class="absolute input__label form-label left-2.5 -top-3 mb-0 pb-0 px-2 bg-[#131c25]"
                        >Network</label
                      >
                      <TomSelect
                        id="create-lptoken-network"
                        v-model="addLPToken.source"
                        :modelValue="addLPToken.source"
                        @change="handleLPTokenInput"
                        name="source"
                        class="w-full absolute top-2"
                        :required="true"
                      >
                        <option value="BSC">BSC</option>
                        <option value="ETH">Ethereum</option>
                        <option value="3">Polygon</option>
                      </TomSelect>
                    </div>
                    <div class="relative mb-6">
                      <TextInput
                        type="text"
                        id="symbol"
                        name="symbol"
                        label="Token Symbol"
                        :value="addLPToken.symbol"
                        @input="handleLPTokenInput"
                        :required="true"
                      />
                    </div>
                    <div class="relative mb-6">
                      <TextInput
                        type="text"
                        id="lpToken"
                        name="lpToken"
                        label="Token Address"
                        :value="addLPToken.lpToken"
                        @input="handleLPTokenInput"
                        :required="true"
                      />
                    </div>
                    <button
                      type="submit"
                      class="flex items-center w-40 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      Add
                    </button>
                  </form>
                  <div class="mt-4 py-4 mb-3 flex items-center">
                    <div class="font-medium w-2/12 text-base cursor-pointer">
                      Network
                    </div>
                    <div class="ml-4 w-2/12">
                      <div class="font-medium text-base cursor-pointer">
                        Symbol
                      </div>
                    </div>
                    <div class="ml-4 w-6/12">
                      <div class="font-medium text-base cursor-pointer">
                        Address
                      </div>
                    </div>
                  </div>
                  <div
                    class="mt-4 py-4 mb-3 flex items-center"
                    v-for="token in LPTokens"
                    :key="token._id"
                  >
                    <div class="font-medium w-2/12 text-base cursor-pointer">
                      {{ token.source }}
                    </div>
                    <div class="ml-4 w-2/12">
                      <div
                        class="font-medium text-base cursor-pointer"
                        style="overflow: auto"
                      >
                        {{ token.symbol }}
                      </div>
                    </div>
                    <div class="ml-4 w-6/12">
                      <div
                        class="font-medium text-base cursor-pointer"
                        style="overflow: auto"
                      >
                        {{ token.lpToken }}
                      </div>
                    </div>
                    <a
                      class="flex items-center text-danger"
                      @click="deleteLPTokenData(token)"
                      style="cursor: pointer"
                    >
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
                        icon-name="trash-2"
                        data-lucide="trash-2"
                        class="lucide lucide-trash-2 w-4 h-4 mr-1"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path
                          d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
                        ></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                      Delete
                    </a>
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
      addLPToken: {
        source: "BSC",
      },
    };
  },
  computed: {
    ...mapState(usePoolStore, ["LPTokens"]),
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
    this.fetchLPTokens();
    this.resetData();
  },
  methods: {
    ...mapActions(usePoolStore, [
      "addAirDropToken",
      "createPool",
      "fetchLPTokens",
      "createLPToken",
      "deleteLPToken",
    ]),
    ...mapActions(useAuthUserStore, ["readUserData", "updateUserStatus"]),
    handleInput(name, value) {
      this.addPoolData[name] = value;
    },
    handleLPTokenInput(name, value) {
      this.addLPToken[name] = value;
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
    addLPTokenData() {
      let finalPayload = {
        source: this.addLPToken.source,
        lpToken: this.addLPToken.lpToken,
        symbol: this.addLPToken.symbol,
      };
      this.createLPToken(finalPayload);
    },
    deleteLPTokenData(token) {
      this.deleteLPToken({ lpTokenId: token._id });
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
    handleUserBlock(name, value) {
      this.updatedUserData[name] = value;
      this.updateUserStatus({
        isBlocked: value,
        profileID: this.updatedUserData.profileId,
        userId: this.updatedUserData.userId,
      });
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
