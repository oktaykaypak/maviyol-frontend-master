<template>
  <div class="tab" :class="mode && 'tab--' + mode">
    <ul class="tab__header">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab__item"
        :class="{ 'tab__item--active': tab.isActive }"
        @click="selectTab(tab)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <div class="tab__body" :class="bodyClass">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bodyClass: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      tabs: [],
    }
  },
  mounted() {
    this.tabs = this.$children
    if (window.location.hash) {
      this.tabs.forEach(
        (v) => '#' + v.hash === window.location.hash && this.selectTab(v)
      )
    }
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs = this.tabs.map((tab) => {
        if (tab.title === selectedTab.title) {
          tab.setActive(true)
        } else {
          tab.setActive(false)
        }
        return tab
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.tab {
  &--flat {
    .tab__header {
      padding: 0;
      border-bottom: 1px solid #dee2e6;
    }

    .tab__item {
      margin: 0;
      font-weight: 400;
      &--active::before {
        border-radius: 6px;
      }
    }
  }

  &__header {
    width: 100%;
    padding: 0 1rem;
    border-bottom: 1px solid #e7e7ed;
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__item {
    height: 100%;
    padding: 1rem 1rem;
    margin: 0 10px;
    cursor: pointer;
    position: relative;
    color: #8898aa;
    font-weight: 400;
    font-weight: 300;
    white-space: nowrap;

    &--active {
      color: var(--primary);
      &::before {
        position: absolute;
        bottom: -1px;
        left: 0;
        height: 3px;
        width: 100%;
        border-radius: 6px 6px 0 0;
        background: var(--primary);
        content: '';
      }
    }
  }
}
</style>
