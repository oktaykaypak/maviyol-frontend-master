<template>
  <div>
    <div
      v-if="$device.isMobile"
      class="header-sm"
      :style="{ marginBottom: isHeaderBottomFixed ? '70px' : '0px' }"
    >
      <SearchBox class="search-box" />
      <div
        :class="{ 'header-sm__bottom--fixed': isHeaderBottomFixed }"
        class="header-sm__bottom"
      >
        <div class="header-sm__bottom-item" @click="$modal.show('sort-modal')">
          <fa :icon="['fas', 'sort-amount-down']" />
          Sırala
        </div>
        <div
          class="header-sm__bottom-item"
          @click="$modal.show('filter-modal')"
        >
          <fa :icon="['fas', 'filter']" />
          Filtrele
        </div>
      </div>
      <!-- FIXME: dynamic import -->
      <filter-modal />
      <sort-modal />

      <!-- <div
        class="header-sm__fixed-info"
        :class="{ 'd-flex': isHeaderBottomFixed }"
      >
        <div class="d-flex flex-column">
          <span class="font-weight-semibold text-primary">{{
            location.name
          }}</span>
          <span class="text-primary f-14">{{
            getReadableDate || 'Her Zaman'
          }}</span>
        </div>
      </div> -->
    </div>
    <div class="container-lg">
      <Breadcrumb />
      <div
        class="d-flex justify-content-between align-items-center"
        style="margin-bottom: 2rem"
      >
        <Heading />
        <Sort />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from './Breadcrumb'
import Heading from './Heading'
import Sort from './Sort'

export default {
  components: {
    Breadcrumb,
    Heading,
    Sort,
  },
  computed: {
    ...mapGetters({
      location: 'search/getLocation',
      getReadableDate: 'search/getReadableDate',
    }),
  },
  data() {
    return {
      isHeaderBottomFixed: false,
      isInfoHeaderVisible: false,
    }
  },
  mounted() {
    document.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      // this.isHeaderBottomFixed = window.scrollY >= 125
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/partials/breakpoints';

.header-sm {
  font-size: 14px;
  background: #fff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07),
    0 15px 4px 0 rgba(50, 50, 93, 0.01) !important;
  display: none;

  @include bp(tablet) {
    display: block;
  }

  &__fixed-info {
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    position: fixed;
    background: #fff;
    z-index: 100;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: none;
  }

  .search-box {
    border-radius: 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: none !important;
    .card__body {
      padding: 0.5rem 0.75rem !important;
    }
  }

  &__bottom {
    padding: 0.5rem;
    display: flex;
    z-index: 100;
    top: 60px;
    width: 100%;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07),
      0 15px 4px 0 rgba(50, 50, 93, 0.01) !important;
    background: #fff;

    &--fixed {
      position: fixed;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    &-item {
      color: var(--primary);
      padding: 0 5px;
      font-weight: 600;
      user-select: none;

      &:first-child {
        padding-left: 0;
      }
    }
  }
}
</style>
