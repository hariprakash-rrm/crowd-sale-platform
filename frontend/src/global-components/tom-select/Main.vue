<template>
  <select
    v-select-directive="{ props, emit, computedOptions }"
    class="tom-select"
  >
    <slot></slot>
  </select>
</template>

<script setup>
import { computed, watch, toRaw } from "vue";
import { setValue, init, updateValue } from "./index";
import dom from "@left4code/tw-starter/dist/js/dom";

const vSelectDirective = {
  mounted(el, { value }) {
    // Clone the select element to prevent tom select remove the original element
    const clonedEl = dom(el).clone().insertAfter(el)[0];
    dom(el).attr("hidden", true);

    // Initialize tom select
    setValue(clonedEl, value.props);
    const allowEmptyOption = value.props.allowEmptyOption;
    const create = value.props.allowEmptyOption ? true : false;
    init(
      el,
      clonedEl,
      value.props,
      value.emit,
      value.computedOptions,
      allowEmptyOption,
      create
    );
  },
  updated(el, { value }) {
    const clonedEl = dom(el).next()[0];
    console.log('updated 1',value.props.modelValue)
    const modelValue = toRaw(value.props.modelValue);
    console.log("updated 2", modelValue)
    const allowEmptyOption = value.props.allowEmptyOption;
    const create = value.props.allowEmptyOption ? true : false;
    updateValue(
      el,
      clonedEl,
      modelValue,
      value.props,
      value.emit,
      value.computedOptions,
      allowEmptyOption,
      create
    );
  },
};

const props = defineProps({
  options: {
    type: Object,
    default() {
      return {};
    },
  },
  modelValue: {
    type: [String, Number, Array],
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  allowEmptyOption: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits();

// Compute all default options
const computedOptions = computed(() => {
  let options = {
    ...props.options,
    plugins: {
      dropdown_input: {},
      ...props.options.plugins,
    },
  };
  console.log('check', Array.isArray(props.modelValue))
  if (Array.isArray(props.modelValue)) {
    console.log('INSIDE ARRAY', props.modelValue)
    options = {
      persist: false,
      create: true,
      onDelete: function (values) {
        return confirm(
          values.length > 1
            ? "Are you sure you want to remove these " +
                values.length +
                " items?"
            : 'Are you sure you want to remove "' + values[0] + '"?'
        );
      },
      ...options,
      plugins: {
        remove_button: {
          title: "Remove this item",
        },
        ...options.plugins,
      },
    };
  }

  return options;
});

// Watch value change
watch(
  computed(() => props.modelValue),
  () => {
    emit("change", props.name, props.modelValue);
  }
);
</script>
