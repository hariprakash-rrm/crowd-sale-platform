<template>
  <CToaster :position="getToasterPosition">
    <template v-for="toast in getToasters">
      <CToast :class="toast.class" :show="true">{{ toast.message }}</CToast>
    </template>
  </CToaster>
</template>

<script>
import { mapState } from "pinia";
import useToasterStore from "@/stores/toaster.js";
export default {
  computed: {
    ...mapState(useToasterStore, ["toasters", "getToasterPosition"]),
  },
};
</script>
