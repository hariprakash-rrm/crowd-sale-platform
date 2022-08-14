<template>
  <div>
    <div class="col-span-12 mt-8">
      <div class="grid grid-cols-12 gap-6 lg:gap-x-8">
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
          <div class="report-box report-box__right zoom-in">
            <div class="box bg-[#313131] p-8">
              <div class="flex items-center">
                <div>
                  <div class="text-3xl font-semibold leading-9 text-white">4.710</div>
                  <div class="text-base text-white mt-1">BSC</div>
                </div>
                <div class="ml-auto p-4 rounded-xl bg__icon-bnb">
                  <!-- <LayersIcon class="report-box__icon text-cyan-600" /> -->
                  <img
                    src="@/assets/images/uc/bnb.png"
                    class="w-12 h-12"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
          <div class="report-box report-box__right zoom-in">
            <div class="box bg-[#313131] p-8">
              <div class="flex items-center">
                <div>
                  <div class="text-3xl font-semibold leading-9 text-white">4.710</div>
                  <div class="text-base text-white mt-1">Ethereum</div>
                </div>
                <div class="ml-auto p-4 rounded-xl bg__icon-eth">
                  <img
                    src="@/assets/images/uc/eth.png"
                    class="w-12 h-12"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
          <div class="report-box report-box__right zoom-in">
            <div class="box bg-[#313131] p-8">
              <div class="flex items-center">
                <div>
                  <div class="text-3xl font-semibold leading-9 text-white">4.710</div>
                  <div class="text-base text-white mt-1">Polygon</div>
                </div>
                <div class="ml-auto p-4 rounded-xl bg__icon-polygon">
                  <img
                    src="@/assets/images/uc/polygon.png"
                    class="w-12 h-12"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: General Report -->
      <div class="col-span-12 mb-8">
        <div class="grid grid-cols-12 gap-6 lg:gap-x-8">
     

          <div class="col-span-12">
            <PreviewComponent class="intro-y box mt-6">
              <div
                class="flex flex-col sm:flex-row items-center p-5 border-b border-[#444] dark:border-darkmode-400"
              >
                <h2 class="font-medium text-white text-base mr-auto">
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
