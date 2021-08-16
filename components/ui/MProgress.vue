<template>
  <div class="m-progress">
    <div class="m-progress__value" :style="`width: ${value}%`"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.m-progress {
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  background: #e9ecef;
  height: 6px;
  display: flex;

  &__value {
    background: #2dce89;
    display: flex;
    transition: all 0.5s ease-in-out;
  }
}
</style>
