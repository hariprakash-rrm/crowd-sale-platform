<template>
  <div>
    <DarkModeSwitcher />
    <div class="container">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Login Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <a href="" class="-intro-x flex items-center pt-5">
            <img
              alt="unreal-capital"
              style="margin-left: 4rem"
              class="w-64 h-full"
              src="@/assets/images/uc/uc-light.png"
            />
          </a>
          <div class="my-auto">
            <img
              alt="unreal-captital"
              class="-intro-x opacity-5 m-auto ml-20 lg:w-3/5 xl:w-4/5 xl:-ml-24 xl:-mt-12 globe__spin"
              src="@/assets/images/uc/globe-removebg-preview.png"
            />
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="h-screen xl:h-auto flex flex-col py-5 xl:py-0 my-4 xl:my-0">
          <a href="" class="logo -intro-x lg:hidden">
            <img
              alt="unreal-capital"
              class="logo__image w-32 mx-auto"
              src="@/assets/images/uc/uc-light.png"
            />
          </a>
          <div
            class="overflow-y-scroll lg:overflow-hidden my-12 lg:my-auto mx-auto bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 md:w-2/4 xl:w-8/12 2xl:w-9/12"
          >
            <h2
              class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left pb-4"
            >
              Create a New Account
            </h2>
            <form @submit.prevent="onRegister" class="validate-form">
              <div
                class="input-form relative rounded-lg my-5 h-16 appearance-none label-floating"
              >
                <input
                  class="login__input bg-input h-14 form-control w-full py-2 px-4 text-sm 2xl:text-xl font-sans leading-normal rounded-lg"
                  id="name"
                  type="text"
                  placeholder="Enter your Name"
                  required
                  v-model="user.name"
                />
                <em
                  data-lucide="user"
                  class="ml-auto -mt-10 pt-1 mr-4 cursor-pointer"
                />
                <label
                  name="name"
                  class="form-label absolute block text-green-darker font-semibold font-sans w-full px-4 py-2 leading-normal label-float"
                  for="username"
                >
                  Name
                </label>
              </div>
              <div
                class="input-form relative rounded-lg my-5 h-16 appearance-none label-floating"
              >
                <input
                  class="login__input bg-input h-14 form-control w-full py-2 px-4 text-sm 2xl:text-xl font-sans leading-normal rounded-lg"
                  id="userName"
                  type="text"
                  placeholder="Enter your Username"
                  required
                  v-model="user.userName"
                />
                <em
                  data-lucide="user"
                  class="ml-auto -mt-10 pt-1 mr-4 cursor-pointer"
                />
                <label
                  name="name"
                  class="form-label absolute block text-green-darker font-semibold font-sans w-full px-4 py-2 leading-normal label-float"
                  for="username"
                >
                  Username
                </label>
              </div>
              <div
                class="input-form relative rounded-lg mt-5 mb-0 lg:my-5 h-16 appearance-none label-floating"
              >
                <input
                  class="login__input bg-input h-14 form-control w-full py-2 px-4 text-sm 2xl:text-xl font-sans leading-normal rounded-lg"
                  id="username"
                  type="email"
                  placeholder="Email"
                  required
                  v-model="user.email"
                />
                <em
                  data-lucide="mail"
                  class="ml-auto -mt-10 pt-1 mr-4 cursor-pointer"
                />
                <label
                  name="email"
                  class="form-label absolute block text-green-darker font-semibold font-sans w-full px-4 py-2 leading-normal label-float"
                  for="username"
                >
                  Email
                </label>
              </div>
              <div class="grid grid-cols-12 mt-0 lg:-mt-4 gap-4 lg:gap-x-4">
                <div class="col-span-12 lg:col-span-6">
                  <div
                    class="input-form relative rounded-lg mt-5 mb-0 lg:my-5 h-16 appearance-none label-floating"
                  >
                    <input
                      id="password"
                      class="login__input bg-input h-14 form-control cursor-pointer w-full py-2 px-4 text-sm 2xl:text-xl font-sans leading-normal rounded-lg"
                      type="password"
                      placeholder="Password"
                      minlength="8"
                      required
                      v-model="user.password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    />
                    <em
                      data-lucide="eye"
                      id="toggler"
                      class="eye-show ml-auto -mt-10 pt-1 mr-4 cursor-pointer"
                    />
                    <label
                      name="password"
                      class="form-label absolute block text-green-darker font-semibold font-sans w-full px-4 py-2 leading-normal label-float"
                      for="password"
                    >
                      Password
                    </label>
                  </div>
                </div>
                <div class="col-span-12 lg:col-span-6">
                  <div
                    class="input-form relative rounded-lg mb-5 mt-0 lg:my-5 h-16 appearance-none label-floating"
                  >
                    <input
                      class="login__input bg-input h-14 form-control cursor-pointer w-full py-2 px-4 text-sm 2xl:text-xl font-sans leading-normal rounded-lg"
                      id="password_confirmation"
                      type="password"
                      placeholder="Confirm Password"
                      minlength="8"
                      required
                      v-model="user.confirmPassword"
                    />
                    <em
                      data-lucide="eye"
                      id="confirmToggler"
                      class="eye-show ml-auto -mt-10 pt-1 mr-4 cursor-pointer"
                    />
                    <label
                      name="password"
                      class="form-label absolute block text-green-darker font-semibold font-sans w-full px-4 py-2 leading-normal label-float"
                      for="confirmPassword"
                    >
                      Confirm Password
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="intro-x mt-5 xl:mt-8 text-center xl:text-left flex flex-col items-center justify-between lg:flex-row gap-4"
              >
                <div
                  class="intro-x flex items-center text-slate-600 dark:text-slate-500 mt-4 text-xs sm:text-sm 2xl:text-base"
                >
                  <p class="cursor-pointer select-none">Already a Member?</p>
                  <router-link
                    class="text-primary text-sm 2xl:text-base dark:text-slate-200 ml-1"
                    to="/login"
                  >
                    login
                  </router-link>
                </div>
                <div>
                  <button
                    type="submit"
                    class="btn btn-primary text-sm 2xl:text-base w-full py-3 px-8 rounded-full xl:mr-3 align-top"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthUserStore } from "../stores/auth";
import { mapActions } from "pinia";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
import dom from "@left4code/tw-starter/dist/js/dom";
export default {
  components: {
    DarkModeSwitcher,
  },
  data: () => ({
    user: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      userName: "",
    },
    toaster: {
      title: "",
      content: "",
    },
  }),
  methods: {
    ...mapActions(useAuthUserStore, ["userRegistration"]),
    onRegister() {
      if (this.user.password !== this.user.confirmPassword) {
        this.showToast("error", "Passwords do not match");
        return;
      }
      let finalPayload = {
        email: this.user.email,
        password: this.user.password,
        name: this.user.name,
        userName: this.user.userName,
      };
      this.userRegistration(finalPayload).then((res) => {
        let { response, data } = res["data"] || res.response;
        if (response == 200 || data?.response == 200) {
          this.showToast("success", "Please check your email!");
        } else {
          this.showToast("error", data.message);
        }
      });
    },
    showToast(type = "", content = "") {
      this.$toast.show(content, { type: type });
    },
  },
  mounted() {
    dom("body").removeClass("main").removeClass("error-page").addClass("login");
  },
};
</script>
