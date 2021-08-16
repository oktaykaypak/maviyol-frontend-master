<template>
  <div v-if="lastPage > 0" class="m-pagination">
    <span
      class="m-pagination__item"
      :class="{ 'm-pagination__item--disabled': current_page === 1 }"
      @click="prevPage"
    >
      <m-svg icon="long-arrow-alt-left" />
    </span>
    <span
      v-for="page in lastPage"
      :key="page"
      class="m-pagination__item"
      :class="{ 'm-pagination__item--active': page === current_page }"
      @click="setPage(page)"
    >
      {{ page }}
    </span>
    <span
      class="m-pagination__item"
      :class="{ 'm-pagination__item--disabled': current_page === lastPage }"
      @click="nextPage"
    >
      <m-svg icon="long-arrow-alt-right" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    lastPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      current_page: 1,
    }
  },
  methods: {
    prevPage() {
      if (this.current_page > 1) {
        this.$emit('set-page', --this.current_page)
      }
    },
    nextPage() {
      if (this.current_page < this.lastPage) {
        this.$emit('set-page', ++this.current_page)
      }
    },
    setPage(page) {
      this.current_page = page
      this.$emit('set-page', page)
    },
  },
}
</script>

<style lang="scss" scoped>
.m-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  flex-wrap: wrap;

  &__item {
    border: 1px solid #e9e9e9;
    background: #fff;
    border-radius: 100px;
    width: 56px;
    height: 36px;
    display: grid;
    place-items: center;
    font-weight: bold;
    cursor: pointer;
    color: var(--dark-blue);
    margin: 0 5px 5px 0;

    &--disabled {
      cursor: default;
      opacity: 0.7;
    }

    &--active {
      background: var(--primary);
      border: 1px solid transparent;
      color: #fff;
    }

    img {
      height: 26px;
      display: flex;
    }
  }
}
</style>
