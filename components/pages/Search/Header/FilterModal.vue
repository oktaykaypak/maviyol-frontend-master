<template>
  <transition name="fade">
    <m-modal
      name="filter-modal"
      no-card
      body-class="w-100 h-100 bg-white p-0 filter-modal"
    >
      <div
        class="d-flex justify-content-between align-items-center w-100 header px-4 pt-3"
      >
        <div>
          <span class="h5 text-night-blue font-weight-semibold d-block"
            >Filtreler</span
          >
        </div>
        <div>
          <span class="c-pointer" @click="$modal.hide('filter-modal')">
            <m-svg icon="close" />
          </span>
        </div>
      </div>
      <div class="px-4">
        <div class="mb-4">
          <ListFilter hide-title @reset="$modal.hide('filter-modal')" />
        </div>
        <div class="my-4">
          <RenterAds />
        </div>
        <div class="mb-4">
          <CustomSliderFilter />
          <SliderFilter />
        </div>
      </div>
      <div class="filter-modal__btn">
        <m-button
          class="w-100 text-center font-weight-semibold"
          variant="warning"
          text="Ara"
          @click="onModalFilter"
        />
      </div>
    </m-modal>
  </transition>
</template>

<script>
import filterMixin from '~/mixins/filter'

export default {
  mixins: [filterMixin],
  methods: {
    onModalFilter() {
      this.filter()
      this.$modal.hide('filter-modal')
    },
  },
}
</script>

<style lang="scss">
.filter-modal {
  overflow-y: scroll;
  overflow-x: hidden;
  // padding: 2rem 3rem !important;
  padding-bottom: 70px !important;

  &__btn {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 20;
    width: 100%;
    background: #fff;
    padding: 0 1.5rem;
    height: 70px;
    display: flex;
    align-items: center;
    border-top: 1px solid #e9ecef;
  }

  .card {
    &__body {
      padding: 0 !important;
    }

    &--shadow-soft {
      box-shadow: none !important;
    }
  }
}
</style>
