<template>
  <div class="d-flex align-items-center flex-wrap">
    <h1 v-text="getHeading"></h1>
    <span v-if="count" class="h1 pl-lg-1">({{ count }} kiralık tekne)</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      harbour: 'search/getHarbour',
      country: 'search/getCountry',
      count: 'search/getCount',
      type: 'search/getType',
      isAppLoading: 'common/isAppLoading',
    }),
    getHeading() {
      let str = ''
      str +=
        (this.harbour && this.harbour.name) ||
        (this.country && this.country.name)

      str += ' ' + this.$t(this.type)
      str += this.type === 'YACHT' ? ' & Yat Kiralama' : ' Kiralama'
      return str
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

h1,
.h1 {
  font-weight: 600;
  color: var(--dark-blue);
  font-size: 1.6rem;
  margin-bottom: 0;
  white-space: nowrap;

  @include bp(tablet) {
    font-size: 1rem;
  }
}
</style>
