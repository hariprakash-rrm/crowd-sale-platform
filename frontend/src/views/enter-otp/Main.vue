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
        <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
          <div
            class="my-auto mx-auto bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 md:w-2/4 xl:w-8/12 2xl:w-9/12"
          >
            <h2
              class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
            >
              Enter your OTP
            </h2>
            <div class="intro-x mt-2 text-slate-400">
              We had send 5 digit code to your email. Please check your email.
            </div>

            <form @submit.prevent="onSubmit" class="validate-form py-6">
              <div
                class="input-form relative rounded-lg my-5 h-16 appearance-none label-floating lg:col-span-6"
              >
                <input
                  class="login__input bg-input h-14 form-control w-full py-2 px-4 text-sm 2xl:text-xl font-sans leading-normal rounded-lg"
                  id="otp"
                  type="number"
                  placeholder="*****"
                  required
                  v-model="otp"
                  maxlength="5"
                  minlength="5"
                />
                <i
                  data-lucide="otp"
                  class="ml-auto -mt-10 pt-1 mr-4 cursor-pointer"
                ></i>
              </div>
              <div class="intro-x mt-5 xl:mt-8">
                <button
                  type="submit"
                  class="btn btn-primary py-3 px-4 w-40 text-sm 2xl:text-base float-right rounded-full align-top"
                >
                  Continue
                </button>
              </div>

              <!-- END: Validation Form -->
              <!-- BEGIN: Success Notification Content -->
              <div
                id="success-notification-content"
                class="toastify-content hidden flex"
              >
                <i class="text-success" data-lucide="check-circle"></i>
                <div class="ml-4 mr-4">
                  <div class="font-medium">Registration success!</div>
                  <div class="text-slate-500 mt-1">
                    Please check your e-mail for further info!
                  </div>
                </div>
              </div>
              <!-- END: Success Notification Content -->
              <!-- BEGIN: Notification Content -->
              <div
                id="notification-content"
                class="toastify-content hidden flex"
              >
                <i class="text-success" data-lucide="check-circle"></i>
                <div class="ml-4 mr-4">
                  <div class="font-medium">{{ toaster.title }}</div>
                  <div class="text-slate-500 mt-1">
                    {{ toaster.content }}
                  </div>
                </div>
              </div>
              <!-- END: Notification Content -->
            </form>
          </div>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthUserStore } from "../../stores/auth";
import { mapActions } from "pinia";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
import dom from "@left4code/tw-starter/dist/js/dom";
import Toastify from "toastify-js";
export default {
  components: {
    DarkModeSwitcher,
  },
  data: () => ({
    user_id: "",
    otp: "",
    toaster: {
      title: "",
      content: "",
    },
  }),
  methods: {
    ...mapActions(useAuthUserStore, ["otpVerification"]),
    onSubmit() {
      this.otpVerification({ user_id: this.user_id, otp: "48402" })
        .then((res) => {
          let { data, status } = res.response;
          if (status === 200) {
            this.showToast("Success", "Verification Successful");
          } else {
            this.showToast("error", data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showToast(title = "", content = "") {
      this.toaster = {
        title,
        content,
      };
      setTimeout(() => {
        Toastify({
          node: dom("#notification-content").clone().removeClass("hidden")[0],
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
        }).showToast();
      }, 500);
    },
  },
  mounted() {
    dom("body").removeClass("main").removeClass("error-page").addClass("login");
    let { user_id } = this.$router.currentRoute.value.params;
    this.user_id = user_id;
    this.otp = "";
  },
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
