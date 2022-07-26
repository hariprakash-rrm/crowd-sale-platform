<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-semibold mr-auto">Profile</h2>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Profile Menu -->
      <div
        class="col-span-12 lg:col-span-4 2xl:col-span-3 flex lg:block flex-col-reverse"
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
                {{ getUserName }}
              </div>
            </div>
          </div>
          <div
            class="p-5 border-t border-slate-200/60 dark:border-darkmode-400"
          >
            <a
              @click="updateTabURL(1)"
              class="flex items-center font-medium"
              href="#"
              v-bind:class="{ '': true, 'text-primary': tab == 1 }"
            >
              <UserIcon class="w-4 h-4 mr-2" /> Personal Information
            </a>
            <a
              @click="updateTabURL(2)"
              class="flex items-center mt-5"
              v-bind:class="{ '': true, 'text-primary': tab == 2 }"
              href="#"
            >
              <LockIcon class="w-4 h-4 mr-2" /> Reset Password
            </a>
            <a
              @click="updateTabURL(3)"
              class="flex items-center mt-5"
              v-bind:class="{ '': true, 'text-primary': tab == 3 }"
              href="#"
            >
              <UnlockIcon class="w-4 h-4 mr-2" /> Enable 2FA
            </a>
            <a
              @click="updateTabURL(4)"
              class="flex items-center mt-5"
              v-bind:class="{ '': true, 'text-primary': tab == 4 }"
              href="#"
            >
              <CreditCardIcon class="w-4 h-4 mr-2" /> Wallet
            </a>
            <a
              @click="updateTabURL(5)"
              class="flex items-center mt-5"
              v-bind:class="{ '': true, 'text-primary': tab == 5 }"
              href="#"
            >
              <ActivityIcon class="w-4 h-4 mr-2" /> Notifications
            </a>
            <a
              @click="updateTabURL(6)"
              class="flex items-center mt-5"
              v-bind:class="{ '': true, 'text-primary': tab == 6 }"
              href="#"
            >
              <SettingsIcon class="w-4 h-4 mr-2" /> Social Networks
            </a>
          </div>
        </div>
      </div>
      <!-- END: Profile Menu -->
      <div
        class="col-span-12 lg:col-span-8 2xl:col-span-9"
        v-if="fetchUserData"
      >
        <!-- BEGIN: Personal Settings -->
        <div
          v-show="tab === 1"
          class="intro-y box mt-5"
          id="personalInformation"
        >
          <div
            class="flex items-center p-6 border-b border-slate-200/60 dark:border-darkmode-400"
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
                      <TextInput
                        name="name"
                        label="Name"
                        :value="profile.name"
                        @input="handleInput"
                      />
                    </div>
                    <div class="relative mb-6">
                      <TextInput
                        label="Email"
                        name="mail"
                        :value="profile.email"
                        @input="handleInput"
                        :disabled="true"
                      />
                    </div>
                    <div class="relative mb-6">
                      <TextAreaInput
                        label="Bio"
                        name="bio"
                        :value="profile.bio"
                        @input="handleInput"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-primary text-sm 2xl:text-base w-full xl:w-40 py-2 px-8 rounded-md"
                  @click="updateProfile()"
                >
                  Save
                </button>
              </div>
              <div class="w-52 mx-auto xl:mr-0 xl:ml-6">
                <div
                  class="border-2 border-dashed shadow-sm border-slate-200/60 dark:border-darkmode-400 rounded-md p-5"
                >
                  <div
                    class="h-40 relative image-fit cursor-pointer zoom-in mx-auto"
                  >
                    <img
                      class="rounded-md"
                      alt="Midone Tailwind HTML Admin Template"
                      :src="$f()[0].photos[0]"
                      @error="
                        $event.src = '@/assets/images/uc/profile-avatar.png'
                      "
                    />
                    <Tippy
                      tag="div"
                      content="Remove this profile photo?"
                      class="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"
                    >
                      <xIcon class="w-4 h-4" />
                    </Tippy>
                  </div>
                  <div class="mx-auto cursor-pointer relative mt-5">
                    <button
                      type="button"
                      class="btn btn-primary w-full"
                      style="cursor: pointer"
                    >
                      Change Photo
                    </button>
                    <input
                      type="file"
                      class="w-full h-full top-0 left-0 absolute opacity-0"
                      ref="fileref"
                      name="profileImage"
                      accept="image/*"
                      @change="selectedFile"
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
            class="flex items-center p-6 border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <h2 class="font-semibold text-base mr-auto px-2">Reset Password</h2>
          </div>
          <div class="p-8">
            <div class="relative mb-6">
              <TextInput
                type="password"
                name="oldPassword"
                label="Old Password"
                :value="profile.oldPassword"
                @input="handleInput"
              />
            </div>
            <div class="relative mb-6">
              <TextInput
                type="password"
                name="newPassword"
                label="New Password"
                :value="profile.newPassword"
                @input="handleInput"
              />
            </div>
            <div class="relative mb-6">
              <TextInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                :value="profile.confirmPassword"
                @input="handleInput"
              />
            </div>

            <button
              type="button"
              class="btn btn-primary text-sm 2xl:text-base w-full xl:w-auto py-2 px-8 rounded-md mt-4"
              @click="updatePassword"
            >
              Reset Password
            </button>
          </div>
        </div>
        <!-- END: Change Password -->

        <!-- BEGIN: Enable 2 factor Authentication -->
        <div
          v-show="tab === 3"
          class="intro-y box mt-5"
          id="enableTwoFactorAuth"
        >
          <div
            class="flex items-center p-6 border-b border-slate-200/60 dark:border-darkmode-400"
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
        <div v-show="tab === 4" class="intro-y box mt-5" id="addWallet">
          <div
            class="flex items-center p-6 border-b border-slate-200/60 dark:border-darkmode-400"
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
              <label for="add-wallet" class="input__label">Add Wallet</label>
            </div>

            <button
              type="button"
              class="btn btn-primary text-sm 2xl:text-base w-full xl:w-auto py-2 px-8 rounded-md mt-4"
            >
              Remove Wallet
            </button>
          </div>
        </div>
        <!-- END: Add Wallet -->

        <!-- BEGIN: Notification -->
        <div v-show="tab === 5" class="intro-y box mt-5" id="Notification">
          <div
            class="flex items-center p-6 border-b border-slate-200/60 dark:border-darkmode-400"
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
                  id="isDeal"
                  name="isDeal"
                  class="form-check-input"
                  :value="notificationSettings.isDeal || false"
                  :checked="notificationSettings.isDeal || false"
                  @change="
                    handleNotificationSettings('isDeal', $event.target.checked)
                  "
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
                  id="isPledge"
                  name="isPledge"
                  class="form-check-input"
                  :value="notificationSettings.isPledge || false"
                  :checked="notificationSettings.isPledge || false"
                  @change="
                    handleNotificationSettings(
                      'isPledge',
                      $event.target.checked
                    )
                  "
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
                  id="isEvent"
                  name="isEvent"
                  class="form-check-input"
                  :value="notificationSettings.isEvent || false"
                  :checked="notificationSettings.isEvent || false"
                  @change="
                    handleNotificationSettings('isEvent', $event.target.checked)
                  "
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
                  id="isNewsLetter"
                  name="isNewsLetter"
                  class="form-check-input"
                  :value="notificationSettings.isNewsLetter || false"
                  :checked="notificationSettings.isNewsLetter || false"
                  @change="
                    handleNotificationSettings(
                      'isNewsLetter',
                      $event.target.checked
                    )
                  "
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
            class="flex items-center p-6 border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <h2 class="font-semibold text-base mr-auto px-2">
              Social Networks
            </h2>
          </div>
          <div class="p-8">
            <div class="flex items-center w-full gap-4 mb-6">
              <div class="relative w-full">
                <TextInput
                  name="socialTwitterUrl"
                  label="Twitter"
                  :value="profile.socialTwitterUrl"
                  @input="handleInput"
                />
              </div>
              <div
                class="intro-x border hover:border-primary border-solid flex items-center justify-center rounded-md h-14 w-14"
              >
                <TwitterIcon
                  @click="updateTwitterLink()"
                  class="w-6 h-6 m-auto text-slate-400 hover:text-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- END: Social Network -->
      </div>
    </div>
  </div>
</template>
<script>
import { useAuthUserStore } from "../stores/auth";
import { mapState, mapActions } from "pinia";
import TextInput from "@/components/reusable/TextInput.vue";
import TextAreaInput from "@/components/reusable/TextAreaInput.vue";
import CheckBox from "@/components/reusable/CheckBox.vue";

export default {
  components: {
    TextInput,
    TextAreaInput,
    CheckBox,
  },
  data() {
    return {
      tab: 1,
      profile: {},
      payload: {},
      notificationSettings: {},
      fileData: null,
      isFileError: false,
    };
  },
  computed: {
    ...mapState(useAuthUserStore, ["user"]),
    fetchUserData() {
      if (Object.keys(this.user)?.length) {
        this.setProfileData(this.user);
      }
      return true;
    },
    getUserName() {
      return this.user?.profile?.name || "";
    },
  },
  methods: {
    ...mapActions(useAuthUserStore, [
      "updateUser",
      "uploadPhoto",
      "resetPassword",
      "updateSocialLink",
      "updateNotificationSettings",
    ]),
    setProfileData(data) {
      this.profile = { ...data.profile, ...data.user };
      this.notificationSettings = { ...data.notificationSettings } || {};
      return this.profile;
    },
    handleInput(name, value) {
      this.profile[name] = value;
      this.payload[name] = value;
    },
    handleNotificationSettings(name, value) {
      this.notificationSettings[name] = value;
      let finalPayload = {
        isDeal: this.notificationSettings.isDeal,
        isPledge: this.notificationSettings.isPledge,
        isEvent: this.notificationSettings.isEvent,
        isNewsLetter: this.notificationSettings.isNewsLetter,
      };
      this.updateNotificationSettings(finalPayload);
    },
    updatePassword() {
      let finalPayload = {
        oldPassword: this.payload.oldPassword,
        newPassword: this.payload.newPassword,
      };
      this.resetPassword(finalPayload);
    },
    updateProfile() {
      let finalPayload = {
        name: this.profile?.name,
        bio: this.profile?.bio,
      };
      this.updateUser(finalPayload);
    },
    updateTwitterLink() {
      let finalPayload = {
        socialTwitterUrl: this.profile?.socialTwitterUrl,
      };
      this.updateSocialLink(finalPayload);
    },
    resetForm() {
      this.payload = {};
      this.setProfileData(this.user);
    },
    updateTabURL(tab_id) {
      this.resetForm();
      this.$router.push({
        query: {
          tab_id: tab_id,
        },
      });
    },
    checkAndUpdateTab() {
      let {
        query: { tab_id },
      } = this.$route;
      if (!tab_id) tab_id = 1;
      this.tab = parseInt(tab_id);
    },
    selectedFile(event) {
      const size = event.target.files[0].size;
      if (Math.round(size / (1024 * 1024)) <= 2) {
        this.isFileError = false;
        const file = event.target.files[0];
        this.fileData = file;
        this.uploadPhoto(file);
      } else {
        this.$refs.fileref.value = "";
        this.isFileError = true;
      }
    },
  },
  watch: {
    "$route.query": function () {
      this.checkAndUpdateTab();
    },
  },
  created() {
    this.checkAndUpdateTab();
  },
};
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
