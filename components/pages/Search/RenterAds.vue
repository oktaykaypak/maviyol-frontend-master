<template>
  <m-card shadow="soft" body-class="py-3 ">
    <div class="d-flex justify-content-between">
      <span class="mb-0 font-weight-bold text-night-blue"
        >Sahibinden İlanlar</span
      >

      <div>
        <m-switch :value="isCharter" @change="changeRenter" />
      </div>
    </div>
  </m-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      renter: 'filter/getRenter',
    }),
    isCharter() {
      return this.renter === 'CHARTER'
    },
  },
  methods: {
    changeRenter() {
      const newRenter = this.renter === 'CHARTER' ? 'BROKER' : 'CHARTER'
      this.$store.commit('filter/updateRenter', newRenter)
    },
  },
}
// default BROKER
// checked CHARTER
</script>
