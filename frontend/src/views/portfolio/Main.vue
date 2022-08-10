<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <!-- <h2 class="text-lg font-medium mr-auto">Accordion</h2> -->
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: General Report -->
      <div class="col-span-12 mb-8">
        <div class="grid grid-cols-12 gap-6 lg:gap-x-8">
     

          <div class="col-span-12">
            <PreviewComponent class="intro-y box mt-6">
              <div
                class="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
              >
                <h2 class="font-medium text-base mr-auto">
                  Vertical Bar Chart
                </h2>
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
    </div>
  </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import TextInput from "@/components/reusable/TextInput.vue";
import VerticalBarChart from "@/components/vertical-bar-chart/Main.vue";
import TextAreaInput from "@/components/reusable/TextAreaInput.vue";

export default {
  components: { VueTimepicker, TextInput, VerticalBarChart, TextAreaInput },
  data() {
    return {

    };
  },
 

methods: {

}
};
</script>
<style>
</style>
