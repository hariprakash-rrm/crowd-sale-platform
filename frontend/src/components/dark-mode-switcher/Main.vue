<template>
  <!-- BEGIN: Dark Mode Switcher-->
  <div
    class="dark-mode-switcher bg-[#18212b] border border-[#18212b] border-solid cursor-pointer fixed bottom-0 right-0 rounded-full flex items-center justify-center z-50 mb-10 mr-10"
    @click="switchMode"
  >
    <!-- <div>Dark Mode</div> -->
    <div
      :class="{ 'dark-mode-switcher__toggle--active': darkMode }"
      class="dark-mode-switcher__toggle border"
    ></div>
  </div>
  <!-- END: Dark Mode Switcher-->
</template>

<script setup>
import { computed } from "vue";
import { useDarkModeStore } from "@/stores/dark-mode";
import dom from "@left4code/tw-starter/dist/js/dom";

const darkModeStore = useDarkModeStore();
const darkMode = computed(() => darkModeStore.darkMode);

const setDarkModeClass = () => {
  darkMode.value
    ? dom("html").addClass("dark")
    : dom("html").removeClass("dark");
};

const setVideoForDarkMode = () => {
 if(darkMode.value){
   document.getElementById("video-overlay").style.display="block"
 }else{
      document.getElementById("video-overlay").style.display="none"
 }
};

const switchMode = () => {
  darkModeStore.setDarkMode(!darkMode.value);
  setDarkModeClass();
  setVideoForDarkMode()
};

setDarkModeClass();
setVideoForDarkMode()
</script>
