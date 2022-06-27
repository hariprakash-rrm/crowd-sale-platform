<template>
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
                class="nav-link w-full py-1.5 px-2"
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
                class="nav-link w-full py-1.5 px-2 active"
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
      <div  v-show="tab === 1">

      </div>
      <div  v-show="tab === 2">

      </div>
      <div  v-show="tab === 3">

      </div>
      <!-- BEGIN: TAB WRITE USER DATA -->
      <div  v-show="tab === 4">
          <PreviewComponent class="intro-y box mt-5">
        <div
          class="p-8 rounded-xl border-b border-slate-200/60 dark:border-darkmode-400"> 
          <!-- <div class="p-5"> -->
          <Preview>
            <AccordionGroup class="accordion-boxed">
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">Airdropdrop Tokens</p>
                  
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-6"
                >
                   <div class="relative mb-6">
                      <input
                        type="text"
                        id="reward-tokens"
                        class="input__field peer"
                        placeholder=" "
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
                        placeholder=" "
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
                        placeholder=" "
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
                 <p class="text-black font-semibold text-base"> Add Pool</p>
                
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed"
                >
                  <div class="relative mb-6">
                      <input
                        type="text"
                        id="ip-token"
                        class="input__field peer"
                        placeholder=" "
                      />
                      <label for="ip-token" class="input__label"
                        >Ip Token</label
                      >
                  </div>
                  <div class="relative mb-6">
                      <input
                        type="text"
                        id="start-time"
                        class="input__field peer"
                        placeholder="start-time"
                      />
                      <label for="start-time" class="input__label"
                        >Star Time</label
                      >
                  </div>
                  <div class="relative mb-6">
                      <input
                        type="text"
                        id="end-time"
                        class="input__field peer"
                        placeholder="end-time"
                      />
                      <label for="start-time" class="input__label"
                        >End Time</label
                      >
                  </div>
                  <div class="relative mb-6">
                      <input
                        type="text"
                        id="pool-stable-amount"
                        class="input__field peer"
                        placeholder="pool-stable-amount"
                      />
                      <label for="start-time" class="input__label"
                        >Pool Stakable Amount</label
                      >
                  </div>
                  <div class="relative mb-6">
                      <input
                        type="text"
                        id="minimum-contribuition"
                        class="input__field peer"
                        placeholder="minimum-contribuition"
                      />
                      <label for="start-time" class="input__label"
                        >Minimum Contribuition</label
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
                   <p class="text-black font-semibold text-base">Exclude all from Authorized User </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed"
                >
                 <div class="relative mb-6">
                      <input
                        type="text"
                        id="accounts"
                        class="input__field peer"
                        placeholder="accounts"
                      />
                      <label for="start-time" class="input__label"
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
                   <p class="text-black font-semibold text-base">Exclude all from Blacklist </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed"
                >
                 <div class="relative mb-6">
                      <input
                        type="text"
                        id="accounts"
                        class="input__field peer"
                        placeholder="accounts"
                      />
                      <label for="start-time" class="input__label"
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
                   <p class="text-black font-semibold text-base">Include All in Authorized User </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed"
                >
                 <div class="relative mb-6">
                      <input
                        type="text"
                        id="accounts"
                        class="input__field peer"
                        placeholder="accounts"
                      />
                      <label for="start-time" class="input__label"
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
                   <p class="text-black font-semibold text-base">Include All in Blacklist </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed"
                >
                 <div class="relative mb-6">
                      <input
                        type="text"
                        id="accounts"
                        class="input__field peer"
                        placeholder="accounts"
                      />
                      <label for="start-time" class="input__label"
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
                   <p class="text-black font-semibold text-base">Pause Contract </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed"
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
                   <p class="text-black font-semibold text-base">Renounce Ownership </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed"
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
                  <p class="text-black font-semibold text-base">Set Pool Staking End Time</p>
                  
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-6"
                >
                   <div class="relative mb-6">
                      <input
                        type="text"
                        id="p-id"
                        class="input__field peer"
                        placeholder=" "
                      />
                      <label for="p-id" class="input__label"
                        >Pid</label
                      >
                    </div>
                    <div class="relative mb-6">
                      <input
                        type="text"
                        id="end-time"
                        class="input__field peer"
                        placeholder=" "
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
                  <p class="text-black font-semibold text-base">Stake Tokens</p>
                  
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-6"
                >
                   <div class="relative mb-6">
                      <input
                        type="text"
                        id="p-id"
                        class="input__field peer"
                        placeholder=" "
                      />
                      <label for="p-id" class="input__label"
                        >Pid</label
                      >
                    </div>
                    <div class="relative mb-6">
                      <input
                        type="number"
                        id="amount"
                        class="input__field peer"
                        placeholder=" "
                      />
                      <label for="amount" class="input__label"
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
                  <p class="text-black font-semibold text-base">Transfer Ownership</p>
                  
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed mt-6"
                >
                   <div class="relative mb-6">
                      <input
                        type="text"
                        id="new-owner"
                        class="input__field peer"
                        placeholder=" "
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
                   <p class="text-black font-semibold text-base">Un Pause Contract </p>
                </Accordion>
                <AccordionPanel
                  class="text-slate-600 dark:text-slate-500 leading-relaxed"
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
      <!-- END: TAB WRITE USER DATA -->
    
    </div>
    <!-- END: Basic Accordion -->
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: 4
      }
    },

    methods : {
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
      }
    }
  }
</script>
