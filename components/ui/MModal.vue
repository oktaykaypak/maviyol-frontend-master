<template>
  <div
    v-if="isActive"
    ref="modal"
    class="m-modal"
    :style="isActive && 'overflow: scroll;'"
  >
    <div class="m-modal__overlay" @click="hide" />
    <div class="m-modal__body" :class="bodyClass">
      <div class="m-modal__content">
        <div v-if="!noCard" class="m-modal__card">
          <m-card no-body>
            <div
              v-if="!hideHeader"
              class="m-modal__card-header"
              :class="headerClass"
            >
              <span class="m-modal__title">{{ title }}</span>
              <span class="c-pointer" @click="hide">
                <m-svg icon="close" />
              </span>
            </div>
            <div class="m-modal__card-body">
              <slot />
            </div>
          </m-card>
        </div>
        <slot v-if="noCard" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    name: {
      type: String,
      default: '',
      required: true,
    },
    hideHeader: {
      type: Boolean,
      default: false,
    },
    noCard: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    bodyClass: {
      type: String,
      default: '',
    },
    headerClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters({
      list: 'modal/getList',
    }),
    isActive() {
      return this.list.find((item) => item.name === this.name)?.active
    },
  },
  mounted() {
    this.$modal.add(this.name)
  },
  methods: {
    hide() {
      this.$modal.hide(this.name)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.m-modal {
  z-index: 120;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  &__title {
    font-weight: 300;
  }

  &__card {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #e9ecef;
    }

    &-body {
      padding: 1rem;
    }
  }

  &__body {
    z-index: 120;
    position: relative;
    margin: 4rem auto;
    max-width: 500px;
    @include bp(tablet-sm) {
      margin: 0 !important;
    }
  }

  &__overlay {
    z-index: 119;
    background: rgba(23, 43, 77, 0.6);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
}
</style>
