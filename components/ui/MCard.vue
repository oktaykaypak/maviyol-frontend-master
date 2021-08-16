<template>
  <div class="card" :class="shadow && 'card--shadow-' + shadow">
    <div v-if="$slots.header" class="card__header">
      <slot name="header" />
    </div>
    <slot v-if="noBody" />
    <div v-else class="card__body" :class="bodyClass">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noBody: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: String,
      default: '',
    },
    bodyClass: {
      type: String,
      defult: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 6px 10px 0 rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  background: #fff;

  &--shadow {
    &-soft {
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07),
        0 15px 4px 0 rgba(50, 50, 93, 0.01) !important;
    }
  }

  &__header {
    padding: 1rem;
    border-bottom: 1px solid #e7e7ed;
  }

  &__body {
    padding: 1rem;
  }
}
</style>
