<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-semibold mr-auto">Profile</h2>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Profile Menu -->
      <div
        class="
          col-span-12
          lg:col-span-4
          2xl:col-span-3
          flex
          lg:block
          flex-col-reverse
        "
      >
        <div class="intro-y box mt-5">
          <div class="relative flex items-center p-5">
            <div class="w-12 h-12 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                class="rounded-full"
                :src="$f()[0].photos[0]"
              />
            </div>
            <div class="ml-4 mr-auto">
              <div class="font-semibold text-base">
                {{ $f()[0].users[0].name }}
              </div>
              <!-- <div class="text-slate-500">{{ $f()[0].jobs[0] }}</div> -->
            </div>
            <!-- <Dropdown>
              <DropdownToggle tag="a" class="w-5 h-5 block" href="javascript:;">
                <MoreHorizontalIcon class="w-5 h-5 text-slate-500" />
              </DropdownToggle>
              <DropdownMenu class="w-56">
                <DropdownContent>
                  <DropdownHeader> Export Options</DropdownHeader>
                  <DropdownDivider />
                  <DropdownItem>
                    <ActivityIcon class="w-4 h-4 mr-2" />
                    English
                  </DropdownItem>
                  <DropdownItem>
                    <BoxIcon class="w-4 h-4 mr-2" />
                    Indonesia
                    <div
                      class="
                        text-xs text-white
                        px-1
                        rounded-full
                        bg-danger
                        ml-auto
                      "
                    >
                      10
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                    <LayoutIcon class="w-4 h-4 mr-2" />
                    English
                  </DropdownItem>
                  <DropdownItem>
                    <SidebarIcon class="w-4 h-4 mr-2" />
                    Indonesia
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownFooter>
                    <button type="button" class="btn btn-primary py-1 px-2">
                      Settings
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary py-1 px-2 ml-auto"
                    >
                      View Profile
                    </button>
                  </DropdownFooter>
                </DropdownContent>
              </DropdownMenu>
            </Dropdown> -->
          </div>
          <div
            class="p-5 border-t border-slate-200/60 dark:border-darkmode-400"
          >
            <a @click="activeTabOne"
              class="flex items-center font-medium"
              href="#"
              v-bind:class="{'':true, 'text-primary': tab == 1}"
            >
              <UserIcon class="w-4 h-4 mr-2" /> Personal Information
            </a>
            <a @click="activeTabTwo" class="flex items-center mt-5"
              v-bind:class="{'':true, 'text-primary': tab == 2}" href="#">
              <LockIcon class="w-4 h-4 mr-2" /> Reset Password
            </a>
            <a @click="activeTabThree" class="flex items-center mt-5" 
              v-bind:class="{'':true, 'text-primary': tab == 3}" href="#">
              <UnlockIcon class="w-4 h-4 mr-2" /> Enable 2FA
            </a>
             <a @click="activeTabFour" class="flex items-center mt-5" 
              v-bind:class="{'':true, 'text-primary': tab == 4}" href="#">
              <CreditCardIcon class="w-4 h-4 mr-2" /> Wallet
            </a>
            <a @click="activeTabFive" class="flex items-center mt-5" 
              v-bind:class="{'':true, 'text-primary': tab == 5}" href="#">
              <ActivityIcon class="w-4 h-4 mr-2" /> Notifications
            </a>
            <a @click="activeTabSix" class="flex items-center mt-5" 
              v-bind:class="{'':true, 'text-primary': tab == 6}" href="#">
              <SettingsIcon class="w-4 h-4 mr-2" /> Social Networks
            </a>
          </div>

          <!-- <div
          class="p-5 border-t border-slate-200/60 dark:border-darkmode-400 flex"
        >
          <button type="button" class="btn btn-primary py-1 px-2">
            New Group
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary py-1 px-2 ml-auto"
          >
            New Quick Link
          </button>
        </div> -->
        </div>
      </div>
      <!-- END: Profile Menu -->
      <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
        <!-- BEGIN: Personal Settings -->
        <div v-show="tab === 1" class="intro-y box mt-5" id="personalInformation">
          <div
            class="
              flex
              items-center
              p-6
              border-b border-slate-200/60
              dark:border-darkmode-400
            "
          >
            <h2 class="font-semibold text-base mr-auto px-2">
              Personal Settings
            </h2>
          </div>
          <div class="p-8">
            <div class="flex flex-col-reverse xl:flex-row flex-col">
              <div class="flex-1 mt-6 xl:mt-0">
                <div class="grid grid-cols-12 gap-x-5">
                  <div class="col-span-12 md:col-span-12">
                    <div class="relative mb-6">
                      <input
                        type="text"
                        id="username"
                        class="input__field peer"
                        placeholder=" "
                      />
                      <label for="username" class="input__label"
                        >Username</label
                      >
                    </div>
                    <div class="relative mb-6">
                      <input
                        type="email"
                        id="email"
                        class="input__field peer"
                        placeholder=" "
                      />
                      <label for="email" class="input__label">Email</label>
                    </div>
                    <!-- <div class="relative mb-6">
                      <input
                        type="text"
                        id="telegram"
                        class="input__field peer"
                        placeholder=" "
                      />
                      <label for="telegram" class="input__label"
                        >Telegram</label
                      >
                    </div> -->
                    <!-- <div class="relative mb-6">
                      <input
                        type="number"
                        id="phone-no"
                        class="input__field peer"
                        placeholder=" "
                      />
                      <label for="phone-no" class="input__label"
                        >Mobile Number</label
                      >
                    </div> -->
                    <div class="relative mb-6">
                      <textarea
                        id="update-profile-form-5"
                        placeholder=" "
                        class="input__field peer"
                      ></textarea>
                      <label for="phone-no" class="input__label">Bio</label>
                    </div>

                    <!-- <div
                      class="
                        relative
                        px-0
                        input__field
                        dark:border-darkmode-600
                        border border-solid
                        rounded-md
                        h-14
                        focus:border focus:border-solid focus:border-primary
                      "
                    >
                      <label
                        for="update-profile-form-2"
                        class="
                          absolute
                          input__label
                          form-label
                          z-10
                          left-2.5
                          -top-3
                          mb-0
                          pb-0
                          px-2
                          bg-[#131c25]
                        "
                        >Location</label
                      >
                      <TomSelect
                        id="update-profile-form-2"
                        v-model="select"
                        class="w-full absolute top-2 pl-2"
                      >
                        <option value="1">Admiralty</option>
                        <option value="2">Aljunied</option>
                        <option value="3">Ang Mo Kio</option>
                        <option value="4">Bartley</option>
                        <option value="5">Beauty World</option>
                      </TomSelect>
                    </div> -->

                    <!-- <div class="did-floating-label-content">
                    <select class="did-floating-select" onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                      <option value=""></option>
                      <option value="1">Alabama</option>
                      <option value="2">Boston</option>
                      <option value="3">Ohaio</option>
                      <option value="4">New York</option>
                      <option value="5">Washington</option>
                    </select>
                    <label class="did-floating-label">Select</label>
                  </div> -->
                  </div>
                </div>
                <button
                  type="button"
                  class="
                    btn btn-primary
                    text-sm
                    2xl:text-base
                    w-full
                    xl:w-40
                    py-2
                    px-8
                    rounded-md
                   
                  "
                >
                  Save
                </button>
              </div>
              <div class="w-52 mx-auto xl:mr-0 xl:ml-6">
                <div
                  class="
                    border-2 border-dashed
                    shadow-sm
                    border-slate-200/60
                    dark:border-darkmode-400
                    rounded-md
                    p-5
                  "
                >
                  <div
                    class="
                      h-40
                      relative
                      image-fit
                      cursor-pointer
                      zoom-in
                      mx-auto
                    "
                  >
                    <img
                      class="rounded-md"
                      alt="Midone Tailwind HTML Admin Template"
                      :src="$f()[0].photos[0]"
                    />
                    <Tippy
                      tag="div"
                      content="Remove this profile photo?"
                      class="
                        w-5
                        h-5
                        flex
                        items-center
                        justify-center
                        absolute
                        rounded-full
                        text-white
                        bg-danger
                        right-0
                        top-0
                        -mr-2
                        -mt-2
                      "
                    >
                      <xIcon class="w-4 h-4" />
                    </Tippy>
                  </div>
                  <div class="mx-auto cursor-pointer relative mt-5">
                    <button type="button" class="btn btn-primary w-full">
                      Change Photo
                    </button>
                    <input
                      type="file"
                      class="w-full h-full top-0 left-0 absolute opacity-0"
                    />
                  </div>
                </div>
              </div>
              <div class="w-52 mx-auto xl:mr-0 xl:ml-6">
                <div
                  class="
                    border-2 border-dashed
                    shadow-sm
                    border-slate-200/60
                    dark:border-darkmode-400
                    rounded-md
                    p-5
                  "
                >
                  <div
                    class="
                      h-40
                      relative
                      image-fit
                      cursor-pointer
                      zoom-in
                      mx-auto
                    "
                  >
                    <img
                      class="rounded-md"
                      alt="Midone Tailwind HTML Admin Template"
                      src="@/assets/images/uc/profile-avatar.png"
                    />
                   
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Personal Settings -->

        <!-- BEGIN: Change Password -->
        <div v-show="tab === 2" class="intro-y box mt-5" id="changePassword">
          <div
            class="
              flex
              items-center
              p-6
              border-b border-slate-200/60
              dark:border-darkmode-400
            "
          >
            <h2 class="font-semibold text-base mr-auto px-2">Reset Password</h2>
          </div>
          <div class="p-8">
            <div class="relative mb-6">
              <input
                type="password"
                id="old-password"
                class="input__field peer"
                placeholder=" "
              />
              <label for="old-password" class="input__label"
                >Old Password</label
              >
            </div>
            <div class="relative mb-6">
              <input
                type="password"
                id="new-password"
                class="input__field peer"
                placeholder=" "
              />
              <label for="new-password" class="input__label"
                >New Password</label
              >
            </div>
            <div class="relative mb-6">
              <input
                type="password"
                id="confirm-password"
                class="input__field peer"
                placeholder=" "
              />
              <label for="confirm-password" class="input__label"
                >Confrim Password</label
              >
            </div>

            <button
              type="button"
              class="
                btn btn-primary
                text-sm
                2xl:text-base
                w-full
                xl:w-auto
                py-2
                px-8
                rounded-md
                mt-4
              "
            >
              Reset Password
            </button>
          </div>
        </div>
        <!-- END: Change Password -->

        <!-- BEGIN: Enable 2 factor Authentication -->
        <div v-show="tab === 3" class="intro-y box mt-5" id="enableTwoFactorAuth">
          <div
            class="
              flex
              items-center
              p-6
              border-b border-slate-200/60
              dark:border-darkmode-400
            "
          >
            <h2 class="font-semibold text-base mr-auto px-2">
              Two-Factor Authentication (2FA)
            </h2>
          </div>
          <div class="p-8">
            <p class="text-lg font-regular mb-4">
              Protect your account from potential intruders, and uninvited
              guests. 2FA will provide you that extra layer of security. Next
              time you login to your account you will be asked to provide both
              your password and an authentication code that you will receive
              from your phone.
            </p>
            <button type="button" class="btn btn-primary text-base px-6 mt-4">
              Enable 2FA
            </button>
          </div>
        </div>
        <!-- END: Enable 2 factor Authentication -->

         <!-- BEGIN: Add Wallet -->
        <div  v-show="tab === 4" class="intro-y box mt-5" id="addWallet">
          <div
            class="
              flex
              items-center
              p-6
              border-b border-slate-200/60
              dark:border-darkmode-400
            "
          >
            <h2 class="font-semibold text-base mr-auto px-2">Wallet</h2>
          </div>
          <div class="p-8">
            <div class="relative mb-6">
              <input
                type="text"
                id="add-wallet"
                class="input__field peer"
                placeholder=" "
              />
              <label for="add-wallet" class="input__label"
                >Add Wallet</label
              >
            </div>
          
           

            <button
              type="button"
              class="
                btn btn-primary
                text-sm
                2xl:text-base
                w-full
                xl:w-auto
                py-2
                px-8
                rounded-md
                mt-4
              "
            >
              Remove Wallet
            </button>
          </div>
        </div>
        <!-- END: Add Wallet -->

        <!-- BEGIN: Notification -->
        <div v-show="tab === 5" class="intro-y box mt-5" id="Notification">
          <div
            class="
              flex
              items-center
              p-6
              border-b border-slate-200/60
              dark:border-darkmode-400
            "
          >
            <h2 class="font-semibold text-base mr-auto px-2">Notifications</h2>
          </div>
          <div class="p-8 space-y-8">
            <div class="form-check form-switch flex justify-between">
              <div>
                <label
                  class="form-check-label font-semibold text-base ml-0"
                  for="checkbox-switch-7"
                  >Deal</label
                >
                <p class="font-regular text-base">
                  Get notified when a new deal is available
                </p>
              </div>
              <div class="flex gap-4 gap-x-6">
                <input
                  id="checkbox-switch-7"
                  class="form-check-input"
                  type="checkbox"
                />
                <!-- BEGIN: Notifications -->
                 <Dropdown class="intro-x border-white/[0.08]">
                  <DropdownToggle
                    tag="div"
                    role="button"
                    class="notification notification--bullet cursor-pointer"
                  >
                    <BellIcon class="notification__icon dark:text-slate-500" />
                  </DropdownToggle>
                  <!-- <DropdownMenu class="w-56">
                    <DropdownContent
                      class="
                        bg-primary/80
                        dark:bg-[#16202a]
                        before:block
                        before:absolute
                        before:bg-black
                        before:inset-0
                        before:rounded-md
                        before:z-[-1]
                        text-white
                      "
                    >
                     <router-link to="/notification">
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5">
                        <UserIcon class="w-4 h-4 mr-2" /> Pledge</DropdownItem>
                     </router-link>
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5"
                      >
                        <EditIcon class="w-4 h-4 mr-2" />
                        Contribution</DropdownItem
                      >
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5"
                      >
                        <LockIcon class="w-4 h-4 mr-2" /> Vested
                        Token</DropdownItem
                      >
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5"
                      >
                        <HelpCircleIcon class="w-4 h-4 mr-2" /> UC News &
                        Offers</DropdownItem
                      >
                    </DropdownContent>
                  </DropdownMenu> -->
                </Dropdown> 
                <!-- END: Notifications -->
              </div>
            </div>
            <div class="form-check form-switch flex justify-between">
              <div>
                <label
                  class="form-check-label font-semibold text-base ml-0"
                  for="checkbox-switch-7"
                  >Pledge</label
                >
                <p class="font-regular text-base">
                  Get notified when a new pledge is available
                </p>
              </div>

             <div class="flex gap-4 gap-x-6">
                <input
                  id="checkbox-switch-7"
                  class="form-check-input"
                  type="checkbox"
                />
                <!-- BEGIN: Notifications -->
                <Dropdown class="intro-x border-white/[0.08]">
                  <DropdownToggle
                    tag="div"
                    role="button"
                    class="notification notification--bullet cursor-pointer"
                  >
                    <BellIcon class="notification__icon dark:text-slate-500" />
                  </DropdownToggle>
                  <!-- <DropdownMenu class="w-56">
                    <DropdownContent
                      class="
                        bg-primary/80
                        dark:bg-[#16202a]
                        before:block
                        before:absolute
                        before:bg-black
                        before:inset-0
                        before:rounded-md
                        before:z-[-1]
                        text-white
                      "
                    >
                     <router-link to="/notification">
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5">
                        <UserIcon class="w-4 h-4 mr-2" /> Pledge</DropdownItem>
                     </router-link>
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5"
                      >
                        <EditIcon class="w-4 h-4 mr-2" />
                        Contribution</DropdownItem
                      >
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5"
                      >
                        <LockIcon class="w-4 h-4 mr-2" /> Vested
                        Token</DropdownItem
                      >
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5"
                      >
                        <HelpCircleIcon class="w-4 h-4 mr-2" /> UC News &
                        Offers</DropdownItem
                      >
                    </DropdownContent>
                  </DropdownMenu> -->
                </Dropdown> 
                <!-- END: Notifications -->
              </div>
            </div>
            <div class="form-check form-switch flex justify-between">
              <div>
                <label
                  class="form-check-label font-semibold text-base ml-0"
                  for="checkbox-switch-7"
                  >Event</label
                >
                <p class="font-regular text-base">
                  Get notified when a new event is available
                </p>
              </div>
            <div class="flex gap-4 gap-x-6">
                <input
                  id="checkbox-switch-7"
                  class="form-check-input"
                  type="checkbox"
                />
                <!-- BEGIN: Notifications -->
                <Dropdown class="intro-x border-white/[0.08]">
                  <DropdownToggle
                    tag="div"
                    role="button"
                    class="notification notification--bullet cursor-pointer"
                  >
                    <BellIcon class="notification__icon dark:text-slate-500" />
                  </DropdownToggle>
                  <!-- <DropdownMenu class="w-56">
                    <DropdownContent
                      class="
                        bg-primary/80
                        dark:bg-[#16202a]
                        before:block
                        before:absolute
                        before:bg-black
                        before:inset-0
                        before:rounded-md
                        before:z-[-1]
                        text-white
                      "
                    >
                     <router-link to="/notification">
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5">
                        <UserIcon class="w-4 h-4 mr-2" /> Pledge</DropdownItem>
                     </router-link>
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5"
                      >
                        <EditIcon class="w-4 h-4 mr-2" />
                        Contribution</DropdownItem
                      >
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5"
                      >
                        <LockIcon class="w-4 h-4 mr-2" /> Vested
                        Token</DropdownItem
                      >
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5"
                      >
                        <HelpCircleIcon class="w-4 h-4 mr-2" /> UC News &
                        Offers</DropdownItem
                      >
                    </DropdownContent>
                  </DropdownMenu> -->
                </Dropdown>
                <!-- END: Notifications -->
              </div>
            </div>
            <div class="form-check form-switch flex justify-between">
              <div>
                <label
                  class="form-check-label font-semibold text-base ml-0"
                  for="checkbox-switch-7"
                  >Newsletter</label
                >
                <p class="font-regular text-base">
                  Receive newsletter updates about marketing
                </p>
              </div>
              <div class="flex gap-4 gap-x-6">
                <input
                  id="checkbox-switch-7"
                  class="form-check-input"
                  type="checkbox"
                />
                <!-- BEGIN: Notifications -->
                <Dropdown class="intro-x border-white/[0.08]">
                  <DropdownToggle
                    tag="div"
                    role="button"
                    class="notification notification--bullet cursor-pointer"
                  >
                    <BellIcon class="notification__icon dark:text-slate-500" />
                  </DropdownToggle>
                  <!-- <DropdownMenu class="w-56">
                    <DropdownContent
                      class="
                        bg-primary/80
                        dark:bg-[#16202a]
                        before:block
                        before:absolute
                        before:bg-black
                        before:inset-0
                        before:rounded-md
                        before:z-[-1]
                        text-white
                      "
                    >
                     <router-link to="/notification">
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5">
                        <UserIcon class="w-4 h-4 mr-2" /> Pledge</DropdownItem>
                     </router-link>
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5"
                      >
                        <EditIcon class="w-4 h-4 mr-2" />
                        Contribution</DropdownItem
                      >
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5"
                      >
                        <LockIcon class="w-4 h-4 mr-2" /> Vested
                        Token</DropdownItem
                      >
                      <DropdownItem
                        class="dropdown-item dark:bg-[#16202a] hover:bg-white/5"
                      >
                        <HelpCircleIcon class="w-4 h-4 mr-2" /> UC News &
                        Offers</DropdownItem
                      >
                    </DropdownContent>
                  </DropdownMenu> -->
                </Dropdown> 
                <!-- END: Notifications -->
              </div>
            </div>
          </div>
        </div>
        <!-- END: Notification -->

        <!-- BEGIN: Social Network -->
        <div v-show="tab === 6" class="intro-y box mt-5" id="socialNetworks">
          <div
            class="
              flex
              items-center
              p-6
              border-b border-slate-200/60
              dark:border-darkmode-400
            "
          >
            <h2 class="font-semibold text-base mr-auto px-2">
              Social Networks
            </h2>
          </div>
          <div class="p-8">
            <div class="flex items-center w-full gap-4 mb-6">
              <div class="relative w-full">
                <input
                  type="text"
                  id="twitter"
                  class="input__field peer"
                  placeholder=" "
                />
                <label for="twitter" class="input__label">Twitter</label>
              </div>
              <div
                class="
                  intro-x
                  border
                  hover:border-primary
                  border-solid
                  flex
                  items-center
                  justify-center
                  rounded-md
                  h-14
                  w-14
                "
              >
                <TwitterIcon
                  class="w-6 h-6 m-auto text-slate-400 hover:text-primary"
                />
              </div>
            </div>

            <!-- <div class="flex items-center w-full gap-4 mb-6">
              <div class="relative w-full">
                <input
                  type="text"
                  id="telegram"
                  class="input__field peer"
                  placeholder=" "
                />
                <label for="telegram" class="input__label">Telegram</label>
              </div>
              <div
                class="
                  border
                  hover:border-primary
                  border-solid
                  flex
                  items-center
                  justify-center
                  rounded-md
                  h-14
                  w-14
                "
              >
                <SendIcon
                  class="w-6 h-6 m-auto text-slate-400 hover:text-primary"
                />
              </div>
            </div> -->
            <!-- <div class="relative mb-6">
              <input type="text" id="discord" class="input__field peer" placeholder=" " />
              <label for="discord" class="input__label">Discord</label>
            </div> -->
          </div>
        </div>
        <!-- END: Social Network -->
      </div>
    </div>
  </div>
</template>
<style>
.tom-select .ts-input {
  border: none !important;
  box-shadow: none !important;
}
</style>
<script>
import { ref } from "vue";

const select = ref("1");

export default {
  data() {
    return {
       tab: 1,
    }
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
    activeTabFive() {
      this.tab = 5;
    },
     activeTabSix() {
      this.tab = 6;
    }
  }
}
</script>
<style scoped>
.px-0 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.dark .dropdown-item {
  background-color: rgb(
    var(--color-darkmode-700) / var(--tw-bg-opacity)
  ) !important;
}
</style>
