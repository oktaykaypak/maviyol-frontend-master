<template>
  <div
    class="m-form-group"
    :class="[{ 'm-form-group--last': last }, labelClass]"
  >
    <label v-if="label">{{ label }}</label>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    last: {
      type: Boolean,
      default: false,
    },
    labelClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.m-form-group {
  display: flex;
  flex-direction: column;
  // margin-bottom: 1.5rem;

  &--last {
    margin-bottom: 1.5rem;
  }

  label {
    white-space: nowrap;
    margin-bottom: 0.5rem;
  }
}
</style>
