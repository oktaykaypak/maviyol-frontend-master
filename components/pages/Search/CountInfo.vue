<template>
  <m-card shadow="soft">
    <div class="f-14 text-night-blue">
      <span class="font-weight-bold">{{
        (harbour && harbour.name) || (country && country.name) || 'Türkiye'
      }}</span>
      kalkışlı
      <strong>{{ count }}</strong>
      kiralık tekne gösteriliyor.
    </div>
  </m-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      country: 'search/getCountry',
      harbour: 'search/getHarbour',
      count: 'search/getCount',
    }),
  },
}
</script>
