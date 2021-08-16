<template>
  <div
    :style="{ visibility: isLoading ? 'hidden' : 'visible' }"
    class="d-none d-lg-block"
    style="width: 200px"
  >
    <m-select
      v-model="sortType"
      style="background: #fff"
      :sm="true"
      :options="sortTypes"
      custom-class="mb-0 bg-white"
      @input="onSortTypeChange"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      sortType: 'asc',
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'search/getLoading',
      isMobile: 'common/isMobile',
    }),
    sortTypes() {
      return [
        {
          value: 'asc',
          text: 'Fiyata Göre (En Düşük)',
        },
        {
          value: 'desc',
          text: 'Fiyata Göre (En Yüksek)',
        },
      ]
    },
  },
  methods: {
    onSortTypeChange(value) {
      this.$store.commit('filter/updateSort', 'amount')
      this.$store.commit('filter/updateOrder', value)

      this.$nuxt.$emit('search-boat-list')
    },
  },
}
</script>
