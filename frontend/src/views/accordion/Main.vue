<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <!-- <h2 class="text-lg font-medium mr-auto">Accordion</h2> -->
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Basic Accordion -->
      <div class="col-span-12 lg:col-span-12">
        <div class="flex items-center justify-cenetr mb-8">
          <ul
            class="nav nav-pills w-3/4 lg:w-2/5 bg-slate-200 dark:bg-black/10 rounded-md mr-auto p-1"
            role="tablist"
          >
            <li
              @click="activeTabOne"
              id="active-read-contract-tab"
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
                Read Contract
              </button>
            </li>
            <li
              @click="activeTabTwo"
              id="inactive-write-contract-tab"
              class="nav-item flex-1"
              role="presentation"
            >
              <button
                class="nav-link w-full py-1.5 px-2 active"
                data-tw-toggle="pill"
                data-tw-target="#inactive-users"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Write Contract
              </button>
            </li>
            <li
              @click="activeTabThree"
              id="inactive-read-user-tab"
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
                Read User Data
              </button>
            </li>
            <li
              @click="activeTabFour"
              id="inactive-write-user-tab"
              class="nav-item flex-1"
              role="presentation"
            >
              <button
                class="nav-link w-full py-1.5 px-2"
                data-tw-toggle="pill"
                data-tw-target="#active-users"
                type="button"
                role="tab"
                aria-controls="active-users"
                aria-selected="true"
              >
                Write User Data
              </button>
            </li>
          </ul>
        </div>

        <!-- BEGIN: TAB READ CONTRACT -->
        <div v-show="tab === 1">
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
                              type="text"
                              id="input"
                              class="input__field peer"
                              placeholder=""
                            />
                            <label for="input" class="input__label"
                              >Input</label
                            >
                          </div>

                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Query
                          </a>
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
                              type="text"
                              id="p-id"
                              class="input__field peer"
                              placeholder=""
                            />
                            <label for="p-id" class="input__label">Pid</label>
                          </div>

                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Query
                          </a>
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
                              type="text"
                              id="input"
                              class="input__field peer"
                              placeholder=""
                            />
                            <label for="input" class="input__label"
                              >Input</label
                            >
                          </div>

                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Query
                          </a>
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
                          <div class="relative mb-6">
                            <p class="text-black text-base">1656330543</p>
                          </div>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          <p class="text-black font-semibold text-base">
                            5.Get Total Stake In Pool
                          </p>
                        </Accordion>
                        <AccordionPanel
                          class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                        >
                          <div class="relative mb-6">
                            <input
                              type="text"
                              id="p-id"
                              class="input__field peer"
                              placeholder=""
                            />
                            <label for="p-id" class="input__label">Pid</label>
                          </div>

                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Query
                          </a>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          <p class="text-black font-semibold text-base">
                            6.Get User Staked Token In Pool
                          </p>
                        </Accordion>
                        <AccordionPanel
                          class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                        >
                          <div class="relative mb-6">
                            <input
                              type="text"
                              id="p-id"
                              class="input__field peer"
                              placeholder=""
                            />
                            <label for="p-id" class="input__label">Pid</label>
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
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          <p class="text-black font-semibold text-base">
                            4. Name
                          </p>
                        </Accordion>
                        <AccordionPanel
                          class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                        >
                          <div class="relative mb-6">
                            <p class="text-black text-base">LaunchPad</p>
                          </div>
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
                            Pause Contract
                          </p>
                        </Accordion>
                        <AccordionPanel
                          class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                        >
                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          <p class="text-black font-semibold text-base">
                            Renounce Ownership
                          </p>
                        </Accordion>
                        <AccordionPanel
                          class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                        >
                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          <p class="text-black font-semibold text-base">
                            Set Pool Staking End Time
                          </p>
                        </Accordion>
                        <AccordionPanel
                          class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                        >
                          <div class="relative mb-6">
                            <input
                              type="text"
                              id="p-id"
                              class="input__field peer"
                              placeholder=""
                            />
                            <label for="p-id" class="input__label">Pid</label>
                          </div>
                          <div class="relative mb-6">
                            <input
                              type="text"
                              id="end-time"
                              class="input__field peer"
                              placeholder=""
                            />
                            <label for="end-time" class="input__label"
                              >End Time</label
                            >
                          </div>
                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          <p class="text-black font-semibold text-base">
                            Stake Tokens
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
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          <p class="text-black font-semibold text-base">
                            Transfer Ownership
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

                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          <p class="text-black font-semibold text-base">
                            Un Pause Contract
                          </p>
                        </Accordion>
                        <AccordionPanel
                          class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                        >
                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
                        </AccordionPanel>
                      </AccordionItem>
                    </AccordionGroup>
                  </Preview>

                  <!-- </div> -->
                </div>
              </PreviewComponent>
            </div>
          </div>
        </div>
        <!-- END: TAB READ CONTRACT -->
        <!-- BEGIN: TAB WRITE CONTRACT -->
        <div v-show="tab === 2">
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
                            1. Airdropdrop Tokens
                          </p>
                        </Accordion>
                        <AccordionPanel
                          class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8 mt-8"
                        >
                          <div class="relative mb-6">
                            <input
                              type="text"
                              id="reward-tokens"
                              class="input__field peer"
                              placeholder=""
                            />
                            <label for="reward-tokens" class="input__label"
                              >Reward Tokens</label
                            >
                          </div>
                          <div class="relative mb-6">
                            <input
                              type="text"
                              id="receipients"
                              class="input__field peer"
                              placeholder=""
                            />
                            <label for="receipients" class="input__label"
                              >Recipients</label
                            >
                          </div>
                          <div class="relative mb-6">
                            <input
                              type="text"
                              id="amount"
                              class="input__field peer"
                              placeholder=""
                            />
                            <label for="amount" class="input__label"
                              >Amount</label
                            >
                          </div>
                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          <p class="text-black font-semibold text-base">
                            2. Add Pool
                          </p>
                        </Accordion>
                        <AccordionPanel
                          class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                        >
                          <form
                            @submit.prevent="addPool()"
                            class="validate-form pt-4"
                          >
                            <div class="relative mb-6">
                              <input
                                type="url"
                                id="image-url"
                                class="input__field--accordion peer"
                                placeholder=""
                                :v-model="addPoolData.image"
                                @input="handleInput('image', $event)"
                              />
                              <label
                                for="image-url"
                                class="input__label--accordion"
                                >Product Url</label
                              >
                            </div>
                              <div class="relative mb-6">
                              <input
                                type="url"
                                id="image-url"
                                class="input__field--accordion peer"
                                placeholder=""
                                :v-model="addPoolData._name"
                                @input="handleInput('_name', $event)"
                              />
                              <label
                                for="image-url"
                                class="input__label--accordion"
                                >_name</label
                              >
                            </div>
                              <div class="relative mb-6">
                              <input
                                type="url"
                                id="image-url"
                                class="input__field--accordion peer"
                                placeholder=""
                                :v-model="addPoolData._symbol"
                                @input="handleInput('_symbol', $event)"
                              />
                              <label
                                for="image-url"
                                class="input__label--accordion"
                                >_symbol</label
                              >
                            </div>
                            <div class="relative mb-6">
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
                            </div>
                            <div class="relative mb-6">
                              <Litepicker
                                v-model="addPoolData._startTime"
                                @input="handleInput('_startTime', $event)"
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
                              <label
                                for="start-time"
                                class="input__label--accordion"
                                >Start Time</label
                              >
                            </div>

                            <div class="relative mb-6">
                              <Litepicker
                                v-model="addPoolData._endTime"
                                @input="handleInput('_endTime', $event)"
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

                              <label
                                for="end-time"
                                class="input__label--accordion"
                                >End Time</label
                              >
                            </div>
                            <div class="relative mb-6">
                              <input
                                type="text"
                                id="pool-stable-amount"
                                class="input__field--accordion peer"
                                placeholder=""
                                :value="addPoolData._poolStakableAmount"
                                @input="
                                  handleInput('_poolStakableAmount', $event)
                                "
                                required
                              />
                              <label
                                for="pool-stable-amount"
                                class="input__label--accordion"
                                >Pool Stakable Amount</label
                              >
                            </div>
                            <div class="relative mb-6">
                              <input
                                type="text"
                                id="minimum-contribuition"
                                class="input__field--accordion peer"
                                placeholder=""
                                :v-model="addPoolData._minimumcontributeAmount"
                                @input="
                                  handleInput(
                                    '_minimumcontributeAmount',
                                    $event
                                  )
                                "
                                required
                              />
                              <label
                                for="minimum-contribuition"
                                class="input__label--accordion"
                                >Minimum Contribution</label
                              >
                            </div>
                            <div class="relative mb-6">
                              <input
                                type="url"
                                id="roadmap"
                                class="input__field--accordion peer"
                                placeholder=""
                                :v-model="addPoolData.roadmap"
                                @input="handleInput('roadmap', $event)"
                              />
                              <label
                                for="roadmap"
                                class="input__label--accordion"
                                >Roadmap Url</label
                              >
                            </div>
                            <div class="relative mb-6">
                              <input
                                type="url"
                                id="team"
                                class="input__field--accordion peer"
                                placeholder=""
                                :value="addPoolData.team_url"
                                @input="handleInput('team_url', $event)"
                              />
                              <label for="team" class="input__label--accordion">
                                Team Url
                              </label>
                            </div>
                            <div class="relative mb-6">
                              <input
                                type="url"
                                id="vcs"
                                class="input__field--accordion peer"
                                placeholder=""
                              />
                              <label for="vcs" class="input__label--accordion"
                                >VCS Url</label
                              >
                            </div>

                            <div class="relative mb-6">
                              <input
                                type="url"
                                id="facebook-url"
                                class="input__field--accordion peer"
                                placeholder=""
                                :value="addPoolData.facebook_url"
                                @input="handleInput('facebook_url', $event)"
                              />
                              <label
                                for="facebook-url"
                                class="input__label--accordion"
                                >Facebook Url</label
                              >
                            </div>

                            <div class="relative mb-6">
                              <input
                                type="url"
                                id="instagram-url"
                                class="input__field--accordion peer"
                                placeholder=""
                                :value="addPoolData.instagram_url"
                                @input="handleInput('instagram_url', $event)"
                              />
                              <label
                                for="instagram-url"
                                class="input__label--accordion"
                                >Instagram Url</label
                              >
                            </div>
                            <div class="relative mb-6">
                              <input
                                type="url"
                                id="linkedin-url"
                                class="input__field--accordion peer"
                                placeholder=""
                                :value="addPoolData.linkedin_url"
                                @input="handleInput('linkedin_url', $event)"
                              />
                              <label
                                for="linkedin-url"
                                class="input__label--accordion"
                                >Linkedin Url</label
                              >
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
                            <label for="accounts" class="input__label"
                              >Accounts</label
                            >
                          </div>
                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
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
                            <label
                              for="accounts"
                              class="input__label--accordion"
                              >Accounts</label
                            >
                          </div>
                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
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
                            <label for="accounts" class="input__label"
                              >Accounts</label
                            >
                          </div>
                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
                        </AccordionPanel>
                      </AccordionItem>
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
                              class="input__field--accordion peer"
                              placeholder=""
                            />
                            <label
                              for="accounts"
                              class="input__label--accordion"
                              >Accounts</label
                            >
                          </div>
                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
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
                            7. Pause Contract
                          </p>
                        </Accordion>
                        <AccordionPanel
                          class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                        >
                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
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
                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
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
                              class="input__field peer"
                              placeholder=""
                            />
                            <label for="p-id" class="input__label">Pid</label>
                          </div>
                          <div class="relative mb-6">
                            <input
                              type="text"
                              id="end-time"
                              class="input__field peer"
                              placeholder=""
                            />
                            <label for="end-time" class="input__label"
                              >End Time</label
                            >
                          </div>
                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
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
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          <p class="text-black font-semibold text-base">
                            11. Transfer Ownership
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

                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          <p class="text-black font-semibold text-base">
                            12. Un Pause Contract
                          </p>
                        </Accordion>
                        <AccordionPanel
                          class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
                        >
                          <a
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </a>
                        </AccordionPanel>
                      </AccordionItem>
                    </AccordionGroup>
                  </Preview>

                  <!-- </div> -->
                </div>
              </PreviewComponent>
            </div>
          </div>
        </div>
        <!-- END: TAB WRITE CONTRACT -->
        <div v-show="tab === 3"></div>
        <!-- BEGIN: TAB WRITE USER DATA -->
        <div v-show="tab === 4"></div>
        <!-- END: TAB WRITE USER DATA -->
      </div>
      <!-- END: Basic Accordion -->
    </div>
  </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import { contractABI } from "@/helpers/helper.js";
import { mapActions } from "pinia";

export default {
  components: { VueTimepicker },
  data() {
    return {
      addPoolData: {},
      tab: 2,
      
    };
  },

  methods: {
    ...mapActions("useWeb3DealsStore", ["createPool"]),
    handleInput(name, e) {
      this.addPoolData[name] = e.target.value;
      console.log(this.addPoolData)
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
    async addPool() {
      let contract = await contractABI();
      await contract.methods
        .addPool(
          this.addPoolData._lpToken,
          this.addPoolData._name,
          this.addPoolData._symbol,
          this.addPoolData._startTime = Math.floor(new Date(this.addPoolData._startTime).getTime() / 1000),
          this.addPoolData._endTime=Math.floor(new Date(this.addPoolData._endTime).getTime() / 1000),
          BigInt(this.addPoolData._minimumcontributeAmount *10**18),
          BigInt(this.addPoolData._poolStakableAmount *10**18)
        )
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
        });
    },
  },
};
</script>
<style>
.accordion-item:nth-child(even) {
  background: #ebf0f5;
}
</style>
