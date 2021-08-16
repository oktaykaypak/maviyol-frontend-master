<template>
  <div class="m-rate-star">
    <span class="m-rate-star__icon">
      <fa
        v-for="x in fullStar"
        :key="x"
        class="faico"
        :icon="['fas', 'star']"
      /><fa
        v-for="x in totalStar"
        :key="x"
        class="faico empty"
        :icon="['far', 'star']"
      />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    fullStar: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    totalStar() {
      return 5 - this.fullStar
    },
  },
}
</script>

<style lang="scss" scoped>
.m-rate-star {
  display: flex;

  &__icon {
    color: var(--warning);
    font-size: 0.9rem;
    .faico {
      margin-right: 3px;
    }
  }
}
</style>
