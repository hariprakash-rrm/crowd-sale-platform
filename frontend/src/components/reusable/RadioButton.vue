<template>
  <div class="pl-2">
    <label class="mr-2" :key="index" v-for="(item, index) in options">
      <input
        :id="`${name}-option-${item.id || item}`"
        :checked="value === item.id || value === item.code || value === item"
        type="radio"
        :value="item.id || item"
        :name="name"
        :disabled="disabled || false"
        @input="$emit('change', name, item.id || item)"
      />
      <span class="ml-2">{{ item.label }}</span>
    </label>
    <small class="d-block has-error" v-if="error">{{ error }}</small>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "radio-group",
    },
    value: {
      type: [Object, String, Number, Boolean],
      default: () => "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    error: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showInfo: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
