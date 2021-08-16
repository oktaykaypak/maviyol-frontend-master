<template>
  <div class="rent-boat">
    <div class="rent-boat__row">
      <div>
        <DeparturePortInput ref="departurePortInput" />
      </div>
      <div>
        <DateInput />
      </div>
      <div>
        <BoatTypeInput />
      </div>
      <div>
        <m-button
          :block="true"
          variant="warning"
          class="py-3 font-weight-bold text-transform-uppercase"
          @click="searchBoat"
          >{{ submitText }}</m-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import searchMixin from '~/mixins/search'
export default {
  mixins: [searchMixin],
  props: {
    submitText: {
      type: String,
      default: 'Hemen Bul',
    },
  },
  computed: {
    ...mapGetters({
      location: 'search/getLocation',
    }),
  },
  created() {
    this.$store.commit('search/resetState')
    this.$store.commit('filter/resetState')
  },
  methods: {
    searchBoat() {
      this.search()
    },
  },
}
</script>

<style lang="scss" scss>
@import '~/assets/scss/partials/breakpoints';
.rent-boat {
  &__row {
    display: grid;
    grid-template-columns: 6fr 6fr 4fr 4fr;
    gap: 15px;
    align-items: center;
    padding: 1.25rem;

    @include bp(tablet) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
