<template>
  <transition name="fade">
    <m-modal
      name="sort-modal"
      no-card
      body-class="w-100 h-100 bg-white p-0 sort-modal"
    >
      <div
        class="d-flex justify-content-between align-items-center w-100 header"
      >
        <div>
          <span class="h5 text-night-blue font-weight-semibold d-block"
            >Sırala</span
          >
        </div>
        <div>
          <span class="c-pointer" @click="$modal.hide('sort-modal')">
            <m-svg icon="close" />
          </span>
        </div>
      </div>
      <div class="px-4">
        <div class="mb-3">
          <m-radio v-model="sort" name="sort" option="amount-asc">
            Fiyata Göre (En Düşük)
          </m-radio>
        </div>
        <div class="mb-3">
          <m-radio v-model="sort" name="sort" option="amount-desc">
            Fiyata Göre (En Yüksek)
          </m-radio>
        </div>
      </div>
      <div class="apply-btn">
        <m-button
          class="w-100 text-center font-weight-semibold"
          variant="warning"
          text="Uygula"
          @click="setSortType"
        />
      </div>
    </m-modal>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      sort: 'amount-asc',
    }
  },
  methods: {
    setSortType() {
      const splittedValue = this.sort.split('-')
      if (splittedValue.length !== 2) return false
      this.$store.commit('filter/updateSort', splittedValue[0])
      this.$store.commit('filter/updateOrder', splittedValue[1])

      this.$nuxt.$emit('search-boat-list')
      this.$modal.hide('sort-modal')
    },
  },
}
</script>

<style lang="scss" scoped>
.sort-modal {
  .header {
    padding: 1rem 1.5rem;
  }

  .apply-btn {
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
}
</style>
