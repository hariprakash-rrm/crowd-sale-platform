<template>
   <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 lg:col-span-6">
      <PreviewComponent class="intro-y box mt-5">
        <div
          class="
            p-8
            rounded-xl
            border-b border-slate-200/60
            dark:border-darkmode-400
          "
        >
          <!-- <div class="p-5"> -->
          <Preview>
            <AccordionGroup class="accordion-boxed">
              <AccordionItem>
                <Accordion>
                  <p class="text-black font-semibold text-base">Update Tier</p>
                </Accordion>
                <AccordionPanel
                  class="
                    text-slate-600
                    dark:text-slate-500
                    leading-relaxed
                    mt-8
                  "
                >
                  <div class="relative mb-6">
                    <input
                      type="text"
                      id="input"
                      class="input__field peer"
                      placeholder=""
                    />
                    <label for="input" class="input__label">Email</label>
                  </div>
                  <button
                    type="button"
                    class="
                      flex
                      items-center
                      w-40
                      justify-center
                      text-white text-center
                      bg-primary
                      p-2
                      px-6
                      mb-6
                      rounded
                    "
                  >
                    Query
                  </button>
                    <div class="font-bold text-base cursor-pointer">Label</div>
                     <div
                    class="
                      relative
                      px-0
                      input__field
                      dark:border-darkmode-600
                      border border-solid
                      rounded-md
                      bg-transparent
                      h-14
                      mb-6
                      mt-8
                      focus:border focus:border-solid focus:border-primary
                    "
                  >
                    <label
                      for="update-profile-form-2"
                      class="
                        absolute
                        input__label
                        form-label
                        left-2.5
                        -top-3
                        mb-0
                        pb-0
                        px-2
                        bg-[#131c25]
                      "
                      >Network</label
                    >
                    <TomSelect
                      id="update-profile-form-2"
                      v-model="select"
                      class="w-full absolute top-2"
                    >
                      <option value="1">BSC</option>
                      <option value="2">Ethereum</option>
                      <option value="3">Polygon</option>
                    </TomSelect>
                  </div>
                  <button
                    type="button"
                    class="
                      flex
                      items-center
                      w-40
                      justify-center
                      text-white text-center
                      bg-primary
                      p-2
                      px-6
                      rounded
                    "
                  >
                    Update
                  </button>
                </AccordionPanel>
              </AccordionItem>
            </AccordionGroup>
          </Preview>
        </div>
      </PreviewComponent>
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

    },
};
</script>

