<template>
  <m-card shadow="soft" class="d-flex flex-column">
    <div class="mb-2 mb-lg-3">
      <DeparturePortInput input-class="f-14" style="height: 47px" />
    </div>
    <div class="mb-0">
      <DateInput :date-picker-columns="{ default: 1 }" />
    </div>
  </m-card>
</template>

<script>
import { mapGetters } from 'vuex'
import searchMixin from '~/mixins/search'
export default {
  mixins: [searchMixin],
  computed: {
    ...mapGetters({
      location: 'search/getLocation',
    }),
  },
  watch: {
    'location.slug'() {
      if (this.$device.isMobile) {
        this.search()
      }
    },
  },
}
</script>
