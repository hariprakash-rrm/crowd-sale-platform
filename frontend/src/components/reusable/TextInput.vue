<template>
  <div class="text-input">
    <input
      :id="name"
      :type="type"
      :minlength="minlength"
      :maxlength="maxlength"
      class="input__field peer"
      :value="value"
      :name="name"
      v-on:keyup.enter="$emit('onEnter', $event.target.value)"
      :disabled="disabled"
      @input="$emit('input', name, $event.target.value)"
      @change="$emit('change', name, $event.target.value)"
      :class="{ 'is-danger': error }"
      :placeholder="placeholder"
      :style="CSS_Style"
      :onkeydown="onkeydown"
      :autocomplete="autocomplete"
      :required="required"
    />
    <label :for="name" class="input__label--accordion">{{ label }}</label>
    <small class="has-error" v-if="error">{{ error }}</small>
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
    required: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: "",
    },
    name: {
      type: String,
      default: "textInput",
    },
    label: {
      type: String,
      default: "textInput"
    },
    onEnter: {
      type: Function,
      default: () => {
        console.log("Default function triggering in TextInput component");
      },
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
    placeholder: {
      type: String,
      default: "",
    },
    minlength: {
      type: Number,
      default: null,
    },
    maxlength: {
      type: Number,
      default: null,
    },
    CSS_Style: {
      type: String,
      default: "",
    },
    onkeydown: {
      type: String,
      default: "",
    },
    autocomplete: {
      type: String,
      default: "",
    },
  },
};
</script>

