<template>
  <CToaster :position="getToasterPosition">
    <template v-for="toast in getToasters">
      <!-- <CToast :key="'toast' + toast.id" :class="toast.class" :show="true">{{ toast.message }}</CToast> -->
    </template>
  </CToaster>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getToasters", "getToasterPosition"]),
  },
};
</script>
