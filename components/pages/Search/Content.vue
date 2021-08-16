<template>
  <div class="search-page__content">
    <div v-if="list.length > 0 && !isLoading">
      <ProductCard
        v-for="(product, index) in list"
        :key="index"
        :product="product"
      />
    </div>
    <div v-if="isLoading">
      <div v-for="x in 3" :key="x">
        <ProductCard :loading="true" />
      </div>
    </div>
    <NotFound v-if="!isLoading && list.length === 0" />
    <RequestWarning v-if="list.length !== 0" />
    <m-pagination
      v-if="list.length > 0 && getWindowInnerWidth"
      class="mb-30"
      :last-page="lastPage"
      @set-page="setPage"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RequestWarning from '~/components/pages/Search/RequestWarning'

export default {
  components: {
    RequestWarning,
  },
  computed: {
    ...mapGetters({
      list: 'search/getList',
      isAppLoading: 'common/isAppLoading',
      getWindowInnerWidth: 'common/getWindowInnerWidth',
      lastPage: 'search/getLastPage',
      isLoading: 'search/getLoading',
    }),
  },
  methods: {
    setPage(page) {
      this.$nuxt.$emit('search-boat-list', page)
    },
  },
}
</script>
