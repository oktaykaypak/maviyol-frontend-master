<template>
  <m-dropdown
    ref="notificationDropdown"
    class="notifications-dropdown"
    content-class="notifications-dropdown__content"
  >
    <template v-slot:button>
      <div style="font-size: 1.1rem" class="'pr-0'">
        <fa :icon="['fas', 'bell']" />
        <!-- <i class="navbar__icon-count">2</i> -->
      </div>
    </template>

    <div class="notifications-dropdown__list">
      <vue-scroll>
        <div class="notifications-dropdown__item unread">
          <span class="notifications-dropdown__item-label">Yeni Bildirim</span>
          <span class="notifications-dropdown__item-desc"
            >Lorem ipsum dolor sit amet lorem ipsum dolor dolor sit amet</span
          >
        </div>
        <div v-for="x in 10" :key="x" class="notifications-dropdown__item">
          <span class="notifications-dropdown__item-label">Yeni Bildirim</span>
          <span class="notifications-dropdown__item-desc"
            >Lorem ipsum dolor sit amet lorem ipsum dolor dolor sit amet</span
          >
        </div>
      </vue-scroll>
    </div>
  </m-dropdown>
</template>

<style lang="scss">
.notifications-dropdown {
  &__content {
    min-width: 22rem !important;
    padding: 0 !important;
    overflow: hidden;
  }

  &__list {
    display: flex;
    flex-direction: column;
    height: 376px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #dee2e6;
    cursor: pointer;
    position: relative;
    height: 94px;

    &:hover {
      background: #f4f5f7;
    }

    &.unread {
      &::after {
        content: '';
        top: 20px;
        left: 10px;
        width: 6px;
        height: 6px;
        background: var(--warning);
        border-radius: 100px;
        position: absolute;
      }

      .notifications-dropdown__item-label {
        color: var(--warning);
      }
    }

    &-label {
      font-size: 0.95rem;
      padding-bottom: 5px;
    }

    &-desc {
      font-size: 0.85rem;
      color: #8898aa;
      font-weight: 300;
    }
  }
}
</style>
