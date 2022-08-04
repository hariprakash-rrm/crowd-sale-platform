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
              Enter your 2-Step OTP
            </h2>
            <div class="intro-x mt-2 text-slate-400">
              We had send 5 digit code to your email. Please check your email.
            </div>

            <form
              id="otp-verification"
              @submit.prevent="onSubmit"
              class="validate-form py-6"
            >
              <div
                class="input-form relative rounded-lg my-5 h-16 appearance-none label-floating lg:col-span-6"
              >
                <input
                  class="login__input bg-input h-14 form-control w-full py-2 px-4 text-sm 2xl:text-xl font-sans leading-normal rounded-lg"
                  id="otp"
                  type="number"
                  placeholder="*****"
                  v-model="otp"
                  :minlength="5"
                  required
                />
                <em
                  data-lucide="otp"
                  class="ml-auto -mt-10 pt-1 mr-4 cursor-pointer"
                />
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
    id: "",
    otp: "",
  }),
  methods: {
    ...mapActions(useAuthUserStore, ["verify2stepVerification"]),
    onSubmit() {
      this.verify2stepVerification({ id: this.id, otp: this.otp });
    },
    showToast(type = "success", content = "") {
      this.$toast.show(content, { type: type });
    },
  },
  mounted() {
    dom("body").removeClass("main").removeClass("error-page").addClass("login");
    let { id } = this.$router.currentRoute.value.params;
    this.id = id;
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
