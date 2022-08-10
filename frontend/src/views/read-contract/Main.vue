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
                    <p class="text-black font-semibold text-base">
                      1. Authorized User
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                  >
                    <div class="relative mb-6">
                      <input
                        @keyup.enter="addMessage"
                        v-model="isAuthoroziedUserAddress"
                        type="text"
                        id="input"
                        class="input__field peer"
                        placeholder=""
                      />
                      <!-- @input="handleInput(currentModalId, $event)"
                          :value="payload[currentModalId]"
                          type="number"
                          class="form-control w-56 rounded-md input--rounded box pr-10"
                          placeholder="Enter Amount..."
                          :min="1"
                          required -->
                      <label for="input" class="input__label"
                        >Input</label
                      >
                    </div>

                    <div
                      class="relative px-0 input__field dark:border-darkmode-600 border border-solid rounded-md bg-transparent h-14 mb-6 focus:border focus:border-solid focus:border-primary"
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

                    <button
                      @click="authorizedUser()"
                      class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      Query
                    </button>

                    <p class="text-black font-normal text-base pt-4">
                      {{ _isAuthoroziedUser }}
                    </p>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <Accordion>
                    <p class="text-black font-semibold text-base">
                      2. Balance Stakable Token
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                  >
                    <div class="relative mb-6">
                      <input
                        @keyup.enter="addMessage"
                        v-model="balanceStakableTokenPid"
                        type="text"
                        id="input"
                        class="input__field peer"
                        placeholder=""
                      />
                      <label for="p-id" class="input__label--accordion"
                        >Pid</label
                      >
                    </div>

                    <div
                      class="relative px-0 input__field--accordion dark:border-darkmode-600 border border-solid rounded-md bg-transparent h-14 mb-6 focus:border focus:border-solid focus:border-primary"
                    >
                      <label
                        for="update-profile-form-2"
                        class="absolute input__label--accordion form-label left-2.5 -top-3 mb-0 pb-0 px-2 bg-[#131c25]"
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

                    <button
                      @click="balanceStakableToken()"
                      class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      Query
                    </button>

                    <p class="text-black font-normal text-base pt-4">
                      {{ _balanceStakableToken }}
                    </p>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <Accordion>
                    <p class="text-black font-semibold text-base">
                      3. Blacklisted
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                  >
                    <div class="relative mb-6">
                      <input
                        @keyup.enter="addMessage"
                        v-model="blacklistedAddress"
                        type="text"
                        id="input"
                        class="input__field peer"
                        placeholder=""
                      />
                      <label for="input" class="input__label"
                        >Input</label
                      >
                    </div>

                    <div
                      class="relative px-0 input__field dark:border-darkmode-600 border border-solid rounded-md bg-transparent h-14 mb-6 focus:border focus:border-solid focus:border-primary"
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

                    <button
                      @click="blacklisted()"
                      class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      Query
                    </button>

                    <p class="text-black font-normal text-base pt-4">
                      {{ _blacklisted }}
                    </p>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <Accordion>
                    <p class="text-black font-semibold text-base">
                      4. Get Current Block Time Stamp
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                  >
                    <div
                      class="relative px-0 input__field--accordion dark:border-darkmode-600 border border-solid rounded-md bg-transparent h-14 mb-6 focus:border focus:border-solid focus:border-primary"
                    >
                      <label
                        for="update-profile-form-2"
                        class="absolute input__label--accordion form-label left-2.5 -top-3 mb-0 pb-0 px-2 bg-[#131c25]"
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
                      <p class="text-black text-base">1656330543</p>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <Accordion>
                    <p class="text-black font-semibold text-base">
                      5. Get Total Stake In Pool
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                  >
                    <div class="relative mb-6">
                      <input
                        @keyup.enter="addMessage"
                        v-model="getTotalStakedInPoolPid"
                        type="text"
                        id="input"
                        class="input__field peer"
                        placeholder=""
                      />
                      <label for="p-id" class="input__label">Pid</label>
                    </div>

                    <div
                      class="relative px-0 input__field dark:border-darkmode-600 border border-solid rounded-md bg-transparent h-14 mb-6 focus:border focus:border-solid focus:border-primary"
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

                    <button
                      type="button"
                      @click="getTotalStakedInPool()"
                      class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      Query
                    </button>
                    <p class="text-black font-normal text-base pt-4">
                      {{ _getTotalStakedInPool }}
                    </p>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <Accordion>
                    <p class="text-black font-semibold text-base">
                      6. Get User Staked Token In Pool
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                  >
                    <div class="relative mb-6">
                      <input
                        @keyup.enter="addMessage"
                        v-model="getUserStakedTokenInPoolPid"
                        type="text"
                        id="input"
                        class="input__field peer"
                        placeholder=""
                      />
                      <label for="p-id" class="input__label--accordion"
                        >Pid</label
                      >
                    </div>

                    <div class="relative mb-6">
                      <input
                        @keyup.enter="addMessage"
                        v-model="getUserStakedTokenInPoolAddress"
                        type="text"
                        id="input"
                        class="input__field peer"
                        placeholder=""
                      />
                      <label for="address" class="input__label--accordion"
                        >Address</label
                      >
                    </div>

                    <div
                      class="relative px-0 input__field--accordion dark:border-darkmode-600 border border-solid rounded-md bg-transparent h-14 mb-6 focus:border focus:border-solid focus:border-primary"
                    >
                      <label
                        for="update-profile-form-2"
                        class="absolute input__label--accordion form-label left-2.5 -top-3 mb-0 pb-0 px-2 bg-[#131c25]"
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

                    <a
                      @click="getUserStakedTokenInPool()"
                      class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      Query
                    </a>

                    <p class="text-black font-normal text-base pt-4">
                      {{ _getUserStakedTokenInPool }}
                    </p>
                  </AccordionPanel>
                </AccordionItem>
                <!-- <AccordionItem>
                  <Accordion>
                    <p class="text-black font-semibold text-base">
                      7. Name
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                  >
                    <div class="relative mb-6">
                      <p class="text-black text-base">LaunchPad</p>
                    </div>
                  </AccordionPanel>
                </AccordionItem> -->
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
            <!-- <div class="p-5"> -->
            <Preview>
              <AccordionGroup class="accordion-boxed">
                <AccordionItem>
                  <Accordion>
                    <p class="text-black font-semibold text-base">
                      7. Owner
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed"
                  >
                    <!-- <a href="#" class="text-base text-blue-500"
                      >0x92ea94e6880a93810a5e15e171d03dc57f9514ed</a
                    > -->
                    <div
                      class="relative px-0 input__field dark:border-darkmode-600 border border-solid rounded-md bg-transparent h-14 mt-8 focus:border focus:border-solid focus:border-primary"
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
                    <button
                      @click="isOwner()"
                      class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 mt-6 rounded"
                    >
                      Query
                    </button>
                    <div class="relative pl-2">
                      <p class="text-black text-base">
                        {{ _owner }}
                      </p>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <Accordion>
                    <p class="text-black font-semibold text-base">
                      8. Paused
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                  >
                    <div
                      class="relative px-0 input__field--accordion dark:border-darkmode-600 border border-solid rounded-md bg-transparent h-14 mb-6 focus:border focus:border-solid focus:border-primary"
                    >
                      <label
                        for="update-profile-form-2"
                        class="absolute input__label--accordion form-label left-2.5 -top-3 mb-0 pb-0 px-2 bg-[#131c25]"
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
                    <button
                      @click="isPaused()"
                      class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      Query
                    </button>
                    <div class="relative pl-2">
                      <p class="text-black text-base">
                        {{ _paused }}
                      </p>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
                <!-- <AccordionItem>
                  <Accordion>
                    <p class="text-black font-semibold text-base">
                      10. Pool Info
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                  >
                    <div class="relative mb-6">
                      <input
                        @keyup.enter="addMessage"
                        v-model="poolInfoPid"
                        type="text"
                        id="input"
                        class="input__field peer"
                        placeholder=""
                      />
                      <label for="p-id" class="input__label"
                        >uint256</label
                      >
                    </div>
                    <span>{{ _poolInfo }}</span>
                    <a
                      @click="poolInfo()"
                      class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      Query
                    </a>
                  </AccordionPanel>
                </AccordionItem> -->
                <AccordionItem>
                  <Accordion>
                    <p class="text-black font-semibold text-base">
                      9. Pool Length
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                  >
                    <div
                      class="relative px-0 input__field dark:border-darkmode-600 border border-solid rounded-md bg-transparent h-14 mb-6 focus:border focus:border-solid focus:border-primary"
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
                    <!-- <div class="relative mt-6">
                      <p class="text-black text-base cursor-pointer">
                        0 <em class="text-slate-400">uint256</em>
                      </p>
                    </div> -->
                    <button
                      @click="poolLength()"
                      class="flex items-center w-24 justify-center mt-6 text-white text-center bg-primary p-2 mt-6 px-6 rounded"
                    >
                      Query
                    </button>
                    <div class="relative pl-2">
                      <p class="text-black text-base">
                        {{ _poolLength }}
                      </p>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
                <!-- <AccordionItem>
                  <Accordion>
                    <p class="text-black font-semibold text-base">
                      12. ProxiableUUid
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                  >
                    <div class="relative mb-6">
                      <em class="text-slate-400"> bytes 32</em>
                    </div>
                  </AccordionPanel>
                </AccordionItem> -->
                <!-- <AccordionItem>
                  <Accordion>
                    <p class="text-black font-semibold text-base">
                      10. Total contributed Amount in Pool
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                  >
                    <div class="relative mb-6">
                      <input
                        @keyup.enter="addMessage"
                        v-model="getTotalStakedAmountInPoolAddress"
                        type="text"
                        id="input"
                        class="input__field peer"
                        placeholder=""
                      />
                      <label for="p-id" class="input__label--accordion"
                        >uint256</label
                      >
                    </div>

                    <div
                      class="relative px-0 input__field--accordion dark:border-darkmode-600 border border-solid rounded-md bg-transparent h-14 mb-6 focus:border focus:border-solid focus:border-primary"
                    >
                      <label
                        for="update-profile-form-2"
                        class="absolute input__label--accordion form-label left-2.5 -top-3 mb-0 pb-0 px-2 bg-[#131c25]"
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

                    <button
                      type="button"
                      class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      Query
                    </button>
                  </AccordionPanel>
                </AccordionItem> -->
                <!-- <AccordionItem>
                  <Accordion>
                    <p class="text-black font-semibold text-base">
                      14. User Info
                    </p>
                  </Accordion>
                  <AccordionPanel
                    class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                  >
                    <div class="relative mb-6">
                      <input
                        type="text"
                        id="uint256"
                        class="input__field peer"
                        placeholder=""
                      />
                      <label for="uint256" class="input__label"
                        >uint256</label
                      >
                    </div>
                    <div class="relative mb-6">
                      <input
                        type="text"
                        id="address"
                        class="input__field peer"
                        placeholder=""
                      />
                      <label for="address" class="input__label"
                        >Address</label
                      >
                    </div>

                    <a
                      class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      Query
                    </a>
                  </AccordionPanel>
                </AccordionItem> -->
              </AccordionGroup>
            </Preview>

            <!-- </div> -->
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
      };
      return this.updatedUserData;
    },
    toggleTab(tab) {
      this.searchData = {};
      this.selectedUserData = {};
      this.updatedUserData = {};
      this.tab = tab;
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
