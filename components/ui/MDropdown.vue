<template>
  <div v-click-outside="hide" class="m-dropdown">
    <div @click="toggle">
      <slot name="button" />
    </div>
    <div v-if="show" class="m-dropdown__content" :class="contentClass">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contentClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
    }
  },
  watch: {
    $route() {
      this.show = false
    },
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
    hide() {
      this.show = false
    },
  },
}
</script>

<style lang="scss" scoped>
.m-dropdown {
  position: relative;

  &__content {
    position: absolute;
    right: 0;
    top: 60px;
    z-index: 40;
    border-radius: 4px;
    background: #fff;
    min-width: 10rem;
    box-shadow: 0 3px 10px -1px rgba(0, 0, 0, 0.1),
      0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 6px 10px 0 rgba(0, 0, 0, 0.14);
    color: var(--text-color);
    padding: 1rem 0;

    &::after {
      position: absolute;
      top: -10px;
      right: 20px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #ffff;
      content: '';
    }
  }
}
</style>
