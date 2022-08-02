<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <!-- <h2 class="text-lg font-medium mr-auto">Accordion</h2> -->
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: General Report -->
      <div class="col-span-12 mb-8">
        <!-- BEGIN: Vertical Bar Chart -->
          
        <!-- END: Vertical Bar Chart -->
        <div class="grid grid-cols-12 gap-6 lg:gap-x-8">
       
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box report-box__right zoom-in">
              <div class="box bg-[#ffffff] p-8">
                <div class="flex items-center">
                  <div>
                    <div class="text-3xl font-semibold leading-9">4.710</div>
                    <div class="text-base text-slate-500 mt-1">
                      Read Contract
                    </div>
                  </div>
                  <div class="ml-auto p-6 rounded-xl bg__icon-1">
                    <LayersIcon class="report-box__icon text-cyan-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box report-box__right zoom-in">
              <div class="box bg-[#ffffff] p-8">
                <div class="flex items-center">
                  <div>
                    <div class="text-3xl font-semibold leading-9">4.710</div>
                    <div class="text-base text-slate-500 mt-1">
                      Write Contract
                    </div>
                  </div>
                  <div class="ml-auto p-6 rounded-xl bg__icon-2">
                    <DollarSignIcon class="report-box__icon text-pink-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box report-box__right zoom-in">
              <div class="box bg-[#ffffff] p-8">
                <div class="flex items-center">
                  <div>
                    <div class="text-3xl font-semibold leading-9">4.710</div>
                    <div class="text-base text-slate-500 mt-1">
                      Read User Data
                    </div>
                  </div>
                  <div class="ml-auto p-6 rounded-xl bg__icon-3">
                    <FolderIcon class="report-box__icon text-violet-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box report-box__right zoom-in">
              <div class="box bg-[#ffffff] p-8">
                <div class="flex items-center">
                  <div>
                    <div class="text-3xl font-semibold leading-9">4.710</div>
                    <div class="text-base text-slate-500 mt-1">
                      Write User Data
                    </div>
                  </div>
                  <div class="ml-auto p-6 rounded-xl bg__icon-4">
                    <FolderIcon class="report-box__icon text-yellow-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

             <div class="col-span-12">
                <PreviewComponent class="intro-y box mt-6">
                  <div
                    class="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
                  >
                    <h2 class="font-medium text-base mr-auto">Vertical Bar Chart</h2>
                  </div>
                  <div class="p-5">
                    <Preview>
                      <VerticalBarChart :height="400" />
                    </Preview>
                  </div>
                </PreviewComponent>
          </div>
        </div>
      </div>
      <!-- END: General Report -->
      <!-- BEGIN: Basic Accordion -->
      <div class="col-span-12 lg:col-span-12">
        <div class="flex items-center justify-cenetr mb-8">
          <ul
            class="nav nav-pills w-3/4 lg:w-3/5 bg-slate-200 dark:bg-black/10 rounded-md mr-auto p-1"
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
            <li
              @click="activeTabFive"
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
                Edit Pool
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

                            <p class="text-black font-normal text-base pt-4">{{ this._isAuthoroziedUser }}</p>
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
                              v-model="this.balanceStakableTokenPid"
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

                           <p class="text-black font-normal text-base pt-4">{{ this._balanceStakableToken }}</p>
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
                              v-model="this.blacklistedAddress"
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

                           <p class="text-black font-normal text-base pt-4">{{ this._blacklisted }}</p>
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
                              v-model="this.getTotalStakedInPoolPid"
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

                          <button type="button"
                            @click="getTotalStakedInPool()"
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Query
                          </button>
                          <p class="text-black font-normal text-base pt-4">{{ this._getTotalStakedInPool }}</p>
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
                              v-model="this.getUserStakedTokenInPoolPid"
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
                              v-model="this.getUserStakedTokenInPoolAddress"
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

                            <p class="text-black font-normal text-base pt-4">{{ this._getUserStakedTokenInPool }}</p>
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
                          <a href="#" class="text-base text-blue-500"
                            >0x92ea94e6880a93810a5e15e171d03dc57f9514ed</a
                          >
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

                          <div class="relative pl-2">
                            <p class="text-black text-base">False</p>
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
                              v-model="this.poolInfoPid"
                              type="text"
                              id="input"
                              class="input__field peer"
                              placeholder=""
                            />
                            <label for="p-id" class="input__label"
                              >uint256</label
                            >
                          </div>
                          <span>{{ this._poolInfo }}</span>
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
                          <div class="relative mt-6">
                            <p class="text-black text-base">
                              0 <em class="text-slate-400">uint256</em>
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
                      <AccordionItem>
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
                              type="text"
                              id="p-id"
                              class="input__field--accordion peer"
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

                          <button type="button"
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Query
                          </button>
                        </AccordionPanel>
                      </AccordionItem>
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
                          class="text-slate-600 dark:text-slate-500 leading-relaxed mt-8"
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
                          <button type="button"
                            class="flex items-center w-24 justify-center text-white text-center bg-primary p-2 px-6 rounded"
                          >
                            Write
                          </button>
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
                                class="absolute input__label--accordion form-label z-10 left-2.5 -top-3 mb-0 pb-0 px-2 bg-[#131c25]"
                                >lp Token</label
                              >
                              <TomSelect
                                id="update-profile-form-2"
                                v-model="select"
                                class="w-full absolute top-2"
                              >
                                <option value="1">Admiralty</option>
                                <option value="2">Aljunied</option>
                                <option value="3">Ang Mo Kio</option>
                                <option value="4">Bartley</option>
                                <option value="5">Beauty World</option>
                              </TomSelect>
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

                            <div class="relative mb-6">
                              <Litepicker
                                v-model="addPoolData.startTime"
                                @input="
                                  handleInput('startTime', $event.target.value)
                                "
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
                                v-model="addPoolData.endTime"
                                @input="
                                  handleInput('endTime', $event.target.value)
                                "
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
                            <label for="accounts" class="input__label"
                              >Accounts</label
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
                          <button type="button"
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
                            <label
                              for="accounts"
                              class="input__label--accordion"
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
                          <button type="button"
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
                            <label for="accounts" class="input__label"
                              >Accounts</label
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
                          <button type="button"
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
                            <label for="accounts" class="input__label"
                              >Accounts</label
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

                          <button type="button"
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
                          <button type="button"
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
                          <button type="button"
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

                            <label
                              for="end-time"
                              class="input__label--accordion"
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
                          <button type="button"
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
                          <button type="button"
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
                          <button type="button"
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
        </div>
        <!-- END: TAB WRITE CONTRACT -->
        <!-- BEGIN: TAB READ USER DATA -->
        <div v-show="tab === 3">
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
                            Read User Data
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
                          <button type="button"
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
                            <label for="input" class="input__label"
                              >Input</label
                            >
                          </div>
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

                          <button type="button"
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
          </div>
        </div>
        <!-- BEGIN: TAB WRITE USER DATA -->
        <div v-show="tab === 4">
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
                            Write User Data
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
                            class="flex items-center w-40 justify-center text-white text-center bg-primary p-2 px-6 mb-8 rounded"
                          >
                            Fetch Data
                          </a>
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

                          <button type="button"
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
          </div>
        </div>
        <!-- END: TAB WRITE USER DATA -->

        <!-- BEGIN: TAB EDIT POOL -->
        <div v-show="tab === 5">
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
                            Edit Pool
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
                          <button type="button"
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
                            <label for="input" class="input__label"
                              >Input</label
                            >
                          </div>
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

                          <button type="button"
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
          </div>
        </div>
        <!-- END: TAB EDIT POOL -->
      </div>
      <!-- END: Basic Accordion -->
    </div>
  </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import { contractABI } from "@/helpers/helper.js";
import { mapActions } from "pinia";
import TextInput from "@/components/reusable/TextInput.vue";
import { usePoolStore } from "@/stores/pool.js";
import VerticalBarChart from "@/components/vertical-bar-chart/Main.vue";

export default {
  components: { VueTimepicker, TextInput, VerticalBarChart },
  data() {
    return {
      addPoolData: {},
      tab: 2,
      Write: "Write",
      contract: "",
      _isAuthoroziedUser: "",
      _balanceStakableToken: "",
      _blacklisted: "",
      _getTotalStakedInPool: "",
      _getUserStakedTokenInPool: "",
      _poolInfo: "",
    };
  },
  async mounted() {
    this.contract = await contractABI();
  },
  methods: {
    ...mapActions(usePoolStore, ["createPool"]),
    handleInput(name, value) {
      this.addPoolData[name] = value;
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
    activeTabFive() {
      this.tab = 5;
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
      console.log(receipt)
      let finalPayload = {
        lpToken: this.addPoolData.lpToken,
        name: this.addPoolData.name,
        symbol: this.addPoolData.symbol,
        startTime: this.addPoolData.startTime,
        endTime: this.addPoolData.endTime,
        minimumContributeAmount: this.addPoolData.minimumContributeAmount,
        poolStakableAmount: this.addPoolData.poolStakableAmount,
        _transactionHash: receipt.transactionHash,
      };
      this.createPool(finalPayload);
    },
    async airDropToken([addresses], [amounts]) {
      await this.contract.methods
        .airDropToken([], [])
        .send({ from: localStorage.getItem("address") })
        .then((receipt) => {
          console.log(receipt);
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
    // async poolInfo() {
    //   await this.contract.methods
    //     .poolInfo(this.poolInfoPid)
    //     .call()
    //     .then((receipt) => {
    //       console.log(receipt);
    //       this._poolInfo = "name" + " : " + receipt.name + "symbol" + " : "+receipt.symbol

    //     })
    //     .catch((err) => {
    //       this._poolInfo = "Please check the Pid Number";
    //       console.log(err);
    //     });
    // },
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
