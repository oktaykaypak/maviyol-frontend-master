<template>
  <m-card shadow="soft" class="text-night-blue" style="margin-bottom: 15px">
    <div class="mb-3">
      <div class="mb-3 d-flex justify-content-between align-items-center">
        <span class="font-weight-bold">Kapasite</span>
        <div class="d-flex">
          <div class="font-weight-bold">
            {{ guestCapacity[0] }} - {{ guestCapacity[1] }}
          </div>
          <span>&nbsp;/&nbsp;Kapasite</span>
        </div>
      </div>
      <vue-slider
        v-model="guestCapacity"
        :min="guestCapacityMinMax[0]"
        :max="guestCapacityMinMax[1]"
        :dot-size="18"
        :lazy="true"
        :height="4"
        @change="onGuestCapacityChange"
      ></vue-slider>
    </div>

    <div>
      <div class="mb-3 d-flex justify-content-between align-items-center">
        <span class="font-weight-bold">Günlük Fiyat</span>
        <div class="d-flex">
          <div class="font-weight-bold">{{ amount[0] }} - {{ amount[1] }}</div>
          <span>&nbsp;/&nbsp;€ </span>
        </div>
      </div>
      <vue-slider
        v-model="amount"
        :min="amountMinMax[0]"
        :max="amountMinMax[1]"
        :dot-size="18"
        :lazy="true"
        :height="4"
        @change="onAmountChange"
      ></vue-slider>
    </div>
  </m-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      amount: [0, 0],
      guestCapacity: [0, 0],
    }
  },
  computed: {
    ...mapGetters({
      filter: 'filter/getFilter',
    }),
    amountMinMax() {
      return [0, 10000]
    },
    guestCapacityMinMax() {
      return [0, 28]
    },
  },
  watch: {
    'filter.guestCapacity'(value) {
      if (value.length === 0) {
        this.guestCapacity = this.guestCapacityMinMax
      }
    },
    'filter.amount'(value) {
      if (value.length === 0) {
        this.amount = this.amountMinMax
      }
    },
  },
  created() {
    this.guestCapacity = this.guestCapacityMinMax
    this.amount = this.amountMinMax
  },
  mounted() {
    this.guestCapacity =
      this.filter.guestCapacity.length > 0
        ? this.filter.guestCapacity
        : this.guestCapacity
    this.amount =
      this.filter.amount.length > 0 ? this.filter.amount : this.amount
  },
  methods: {
    onGuestCapacityChange() {
      this.$store.commit('filter/updateGuestCapacity', this.guestCapacity)
    },
    onAmountChange() {
      this.$store.commit('filter/updateAmount', this.amount)
    },
  },
}
</script>
