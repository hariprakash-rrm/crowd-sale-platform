<template>
  <div class="text-input">
    <textarea
      :id="name"
      :type="type"
      class="input__field peer"
      :value="value"
      :name="name"
      @input="$emit('input', name, $event.target.value)"
      @change="$emit('change', name, $event.target.value)"
      :class="{ 'is-danger': error }"
      :disabled="disabled"
      :maxlength="maxlength"
      :style="CSS_Style"
    />
    <label :for="name" class="input__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "text-input",
  $_veeValidate: {
    // value getter
    value() {
      return this.$el.value;
    },
    // name getter
    name() {
      return this.name;
    },
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "textInput",
    },
    label: {
      type: String,
      default: "textInput",
    },
    input: {
      type: Function,
      default: () => {
        console.log("Default function triggering in select component");
      },
    },
    type: {
      type: String,
      default: "text",
    },
    error: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
      default: null,
    },
    CSS_Style: {
      type: String,
      default: "",
    },
  },
};
</script>
