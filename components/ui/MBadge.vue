<template>
  <span
    class="m-badge"
    :class="[variant && 'm-badge--v-' + variant, size && 'm-badge--s-' + size]"
  >
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'light-night',
    },
    size: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.m-badge {
  border-radius: 100px;
  padding: 4px 12px;

  &--v-light-night {
    background: #eef0fc;
    color: #32335c;
  }

  &--v-dusk {
    background: #53607e;
    color: #fff;
  }

  &--s-xsm {
    font-size: 11px;
  }

  &--s-sm {
    font-size: 13px;
  }
}
</style>
