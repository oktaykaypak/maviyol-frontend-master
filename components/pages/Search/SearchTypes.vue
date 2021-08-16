<template>
  <client-only>
    <div v-if="getWindowInnerWidth">
      <ul v-if="isSmall" class="search-types--sm">
        <li>
          <span>En Uygun</span>
        </li>
        <li>
          <span>İndirimdekiler</span>
        </li>

        <li>
          <span>Önerilenler</span>
        </li>
      </ul>
      <div v-if="!isSmall" class="search-types">
        <div
          v-for="(item, index) in types"
          :key="index"
          class="search-types__item"
          :class="{ 'search-types__item--active': index == 0 }"
        >
          <span>{{ item }}</span>
          <div>
            <span class="search-types__price">500 € </span>
            <span class="search-types__time">Günlük</span>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      types: ['Önerilenler', 'Ucuzdan Pahalıya', 'İndirimdekiler'],
    }
  },
  computed: {
    ...mapGetters({
      getWindowInnerWidth: 'common/getWindowInnerWidth',
    }),
    isSmall() {
      return this.getWindowInnerWidth <= 530
    },
  },
}
</script>

<style lang="scss" scoped>
.search-types--sm {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;

  li {
    flex: 1;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 10px;
    }

    span {
      display: block;
      width: 100%;
      border-radius: 100px;
      padding: 10px 12px;
      background: #fff;
      border: solid 1px #d8d8d8;
      color: var(--dusk);
      font-size: 14px;
      white-space: nowrap;
    }
  }
}

.search-types {
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  border: 1px solid #e0e4e8;
  background: #fff;
  border-radius: 4px;
  height: 75px;
  margin-bottom: 30px;

  &__time {
    font-size: 14px;
  }

  &__price {
    font-weight: bold;
  }

  &__item {
    cursor: pointer;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--dark-blue);
    font-size: 15px;
    position: relative;

    &--active {
      color: var(--primary);

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        margin-left: 15px;
        width: calc(100% - 30px);
        border-radius: 6px 6px 0 0;
        background: var(--primary);
        content: '';
      }
    }

    &:not(:last-child) {
      border-right: 1px solid #e0e4e8;
    }
  }
}
</style>
