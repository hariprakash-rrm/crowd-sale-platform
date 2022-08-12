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
                    1. Airdrop Tokens
                  </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                >
                  <form id="airdrop_token" @submit.prevent="airDropToken()">
                    <div class="relative mb-6">
                      <input
                        @keyup.enter="addMessage"
                        v-model="airdrop_token._airDropTokenToken"
                        type="text"
                        id="input"
                        class="input__field peer"
                        placeholder=""
                        required
                      />
                      <label for="reward-tokens" class="input__label"
                        >Reward Tokens</label
                      >
                    </div>
                    <div class="relative mb-6">
                      <input
                        @keyup.enter="addMessage"
                        v-model="airdrop_token._airDropTokenReceiver"
                        type="text"
                        id="input"
                        class="input__field peer"
                        placeholder=""
                        multiple
                        required
                      />
                      <label for="receipients" class="input__label"
                        >Recipients</label
                      >
                    </div>
                    <div class="relative mb-6">
                      <input
                        @keyup.enter="addMessage"
                        v-model="airdrop_token._airDropTokenAmount"
                        type="text"
                        id="input"
                        class="input__field peer"
                        placeholder=""
                        multiple
                        required
                      />
                      <label for="amount" class="input__label">Amount</label>
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
                        <option value="">Select a network...</option>
                        <option value="1">BSC</option>
                        <option value="2">Ethereum</option>
                        <option value="3">Polygon</option>
                      </TomSelect>
                    </div>
                    <button
                      type="submit"
                      class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      Write
                    </button>
                  </form>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">2. Add Pool</p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                >
                  <form @submit.prevent="addPool()" class="validate-form pt-4">
                    <div class="relative mb-6">
                      <TextInput
                        type="url"
                        name="image"
                        label="Product Url"
                        :value="addPoolData.image"
                        @input="handleInput"
                        :required="true"
                      />
                    </div>
                    <div class="relative mb-6">
                      <TextInput
                        type="text"
                        name="name"
                        label="name"
                        :value="addPoolData.name"
                        @input="handleInput"
                        :required="true"
                      />
                    </div>
                    <div class="relative mb-6">
                      <TextInput
                        type="text"
                        name="symbol"
                        label="symbol"
                        :value="addPoolData.symbol"
                        @input="handleInput"
                        :required="true"
                      />
                    </div>
                    <!-- <div class="relative mb-6">
                            <input
                            type="text"
                            id="ip-token"
                            class="input__field--accordion peer"
                            placeholder=""
                            :v-model="addPoolData._lpToken"
                            @input="handleInput('_lpToken', $event)"
                            required
                            />
                            <label
                            for="ip-token"
                            class="input__label--accordion"
                            >lp Token</label
                            >
                        </div> -->

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
                        v-model="addPoolData._network"
                        :modelValue="addPoolData._network"
                        @change="handleSelect"
                        name="_network"
                        class="w-full absolute top-2"
                      >
                        <option value="">Select a network...</option>
                        <option value="BSC">BSC</option>
                        <option value="ETH">Ethereum</option>
                        <option value="3">Polygon</option>
                      </TomSelect>
                    </div>

                    <div
                      class="relative px-0 input__field--accordion dark:border-darkmode-600 border border-solid rounded-md bg-transparent h-14 mb-6 focus:border focus:border-solid focus:border-primary"
                    >
                      <label
                        for="update-profile-form-3"
                        class="absolute input__label--accordion form-label z-10 left-2.5 -top-3 mb-0 pb-0 px-2 bg-[#131c25]"
                        >lp Token</label
                      >
                      <TomSelect
                        id="update-profile-form-3"
                        v-model="addPoolData.lpToken"
                        :modelValue="addPoolData.lpToken"
                        @change="handleSelect"
                        name="_lpToken"
                        class="w-full absolute top-2"
                      >
                        <option value="">Select a token...</option>
                        <option
                          :value="lpToken"
                          v-for="{ lpToken } in options.lpToken"
                          :key="lpToken"
                        >
                          {{ lpToken }}
                        </option>
                      </TomSelect>
                    </div>

                    <div class="relative mb-6">
                      <Litepicker
                        v-model="addPoolData.startTime"
                        @input="handleInput('startTime', $event.target.value)"
                        :options="{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }"
                        class="input__field--accordion peer"
                      />
                      <label for="start-time" class="input__label--accordion"
                        >Start Time</label
                      >
                    </div>

                    <div class="relative mb-6">
                      <Litepicker
                        v-model="addPoolData.endTime"
                        @input="handleInput('endTime', $event.target.value)"
                        :options="{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }"
                        class="input__field--accordion peer"
                      />

                      <label for="end-time" class="input__label--accordion"
                        >End Time</label
                      >
                    </div>
                    <div class="relative mb-6">
                      <TextInput
                        type="number"
                        id="pool-stable-amount"
                        name="poolStakableAmount"
                        label="Pool Stakable Amount"
                        :value="addPoolData.poolStakableAmount"
                        @input="handleInput"
                        :required="true"
                      />
                    </div>
                    <div class="relative mb-6">
                      <TextInput
                        type="number"
                        id="minimum-contribution"
                        name="minimumContributeAmount"
                        label="Minimum Contribution"
                        :value="addPoolData.minimumContributeAmount"
                        @input="handleInput"
                        :required="true"
                      />
                    </div>
                    <div class="relative mb-6">
                      <TextInput
                        type="url"
                        id="roadMap"
                        name="roadMap"
                        label="Road map Url"
                        :value="addPoolData.roadMap"
                        @input="handleInput"
                        :required="true"
                      />
                    </div>
                    <div class="relative mb-6">
                      <TextInput
                        type="url"
                        id="team"
                        name="team"
                        label="Team Url"
                        :value="addPoolData.team"
                        @input="handleInput"
                        :required="true"
                      />
                    </div>
                    <div class="relative mb-6">
                      <TextInput
                        type="url"
                        id="vcs"
                        name="vcs"
                        label="VCS Url"
                        :value="addPoolData.vcs"
                        @input="handleInput"
                        :required="true"
                      />
                    </div>

                    <div class="relative mb-6">
                      <TextInput
                        type="url"
                        id="facebook-url"
                        name="faceBookUrl"
                        label="Facebook Url"
                        :value="addPoolData.faceBookUrl"
                        @input="handleInput"
                        :required="true"
                      />
                    </div>

                    <div class="relative mb-6">
                      <TextInput
                        type="url"
                        id="instagram-url"
                        name="instagramUrl"
                        label="Instagram Url"
                        :value="addPoolData.instagramUrl"
                        @input="handleInput"
                        :required="true"
                      />
                    </div>
                    <div class="relative mb-6">
                      <TextInput
                        type="url"
                        id="linkedin-url"
                        name="linkedInUrl"
                        label="Linkedin Url"
                        :value="addPoolData.linkedInUrl"
                        @input="handleInput"
                        :required="true"
                      />
                    </div>

                    <button
                      type="submit"
                      class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                    >
                      {{ Write }}
                    </button>
                  </form>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">
                    3. Exclude all from Authorized User
                  </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                >
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="accounts"
                      class="input__field peer"
                      placeholder=""
                    />
                    <label for="accounts" class="input__label">Accounts</label>
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
                    class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                  >
                    Write
                  </button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">
                    4. Exclude all from Blacklist
                  </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                >
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="accounts"
                      class="input__field--accordion peer"
                      placeholder=""
                    />
                    <label for="accounts" class="input__label--accordion"
                      >Accounts</label
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
                    Write
                  </button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">
                    5. Include All in Authorized User
                  </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                >
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="accounts"
                      class="input__field peer"
                      placeholder=""
                    />
                    <label for="accounts" class="input__label">Accounts</label>
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
                    class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                  >
                    Write
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
          <!-- <div class="p-5"> -->
          <Preview>
            <AccordionGroup class="accordion-boxed">
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">
                    6. Include All in Blacklist
                  </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                >
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="accounts"
                      class="input__field peer"
                      placeholder=""
                    />
                    <label for="accounts" class="input__label">Accounts</label>
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
                    class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                  >
                    Write
                  </button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">
                    7. Pause Contract
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
                    type="button"
                    class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                  >
                    Write
                  </button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">
                    8. Renounce Ownership
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
                  <button
                    type="button"
                    class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                  >
                    Write
                  </button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">
                    9. Set Pool Staking End Time
                  </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                >
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="p-id"
                      class="input__field--accordion peer"
                      placeholder=""
                    />
                    <label for="p-id" class="input__label--accordion"
                      >Pid</label
                    >
                  </div>
                  <!-- <div class="relative mb-6">
                        <input
                            type="text"
                            id="end-time"
                            class="input__field--accordion peer"
                            placeholder=""
                        />
                        <label for="end-time" class="input__label--accordion"
                            >End Time</label
                        >
                        </div> -->
                  <div class="relative mb-6">
                    <Litepicker
                      :options="{
                        autoApply: false,
                        showWeekNumbers: true,
                        dropdowns: {
                          minYear: 1990,
                          maxYear: null,
                          months: true,
                          years: true,
                        },
                      }"
                      class="input__field--accordion peer"
                    />

                    <label for="end-time" class="input__label--accordion"
                      >End Time</label
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
                    Write
                  </button>
                </AccordionPanel>
              </AccordionItem>
              <!-- <AccordionItem>
                    <Accordion>
                        <p class="text-black font-semibold text-base">
                        10. Stake Tokens
                        </p>
                    </Accordion>
                    <AccordionPanel
                        class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                    >
                        <div class="relative mb-6">
                        <input
                            type="text"
                            id="p-id"
                            class="input__field--accordion peer"
                            placeholder=""
                        />
                        <label for="p-id" class="input__label--accordion"
                            >Pid</label
                        >
                        </div>
                        <div class="relative mb-6">
                        <input
                            type="number"
                            id="amount"
                            class="input__field--accordion peer"
                            placeholder=""
                        />
                        <label for="amount" class="input__label--accordion"
                            >End Time</label
                        >
                        </div>
                        <a
                        class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                        >
                        Write
                        </a>
                    </AccordionPanel>
                    </AccordionItem> -->
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">
                    10. Transfer Ownership
                  </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                >
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="new-owner"
                      class="input__field peer"
                      placeholder=""
                    />
                    <label for="new-owner" class="input__label"
                      >New Owner</label
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
                    type="button"
                    class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                  >
                    Write
                  </button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">
                    11. Un Pause Contract
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
                    type="button"
                    class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                  >
                    Write
                  </button>
                </AccordionPanel>
              </AccordionItem>
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
    ...mapState(usePoolStore, ["LPTokens"]),
    fetchUserData() {
      if (Object.keys(this.selectedUserData)?.length) {
        this.setProfileData(this.selectedUserData);
        return true;
      }
      return false;
    },
    options() {
      return {
        lpToken:
          this.LPTokens?.filter(
            (val) => val.source == this.addPoolData._network
          ) || [],
      };
    },
  },
  async mounted() {
    this.contract = await contractABI();
    this.fetchLPTokens();
    this.resetData()
  },
  methods: {
    ...mapActions(usePoolStore, [
      "addAirDropToken",
      "createPool",
      "fetchLPTokens",
    ]),
    ...mapActions(useAuthUserStore, ["readUserData", "updateUserStatus"]),
    handleInput(name, value) {
      this.addPoolData[name] = value;
    },
    handleSelect(name, value) {
      this.addPoolData[name] = value;
    },
    handleAirdropSelect(name, value) {
      console.log(name, value);
      this.airdrop_token[name] = value;
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
