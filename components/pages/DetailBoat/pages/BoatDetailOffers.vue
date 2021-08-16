<template>
  <div class="row offers">
    <div class="col-12">
      <h1 class="title">
        <fa
          class="image"
          style="font-size: 24px; margin-right: 21px"
          :icon="['fa', 'life-ring']"
        />
        Fiyatlar (TL) <small>Fiyatlar Günlük Olarak Belirtilmiştir</small>
      </h1>
      <hr />
      <line-chart :options="changeGetData" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BoatDetailOffers',
  data() {
    return {
      options: {
        label: 'Fiyatlar',
        labels: [
          'Ocak',
          'Şubat',
          'Mart',
          'Nisan',
          'Mayıs',
          'Haziran',
          'Temmuz',
          'Ağustos',
          'Eylül',
          'Ekim',
          'Kasım',
          'Aralık',
        ],
        bg: '#bfc4cd',
        data: null,
      },
    }
  },
  computed: {
    ...mapGetters({
      getOffersData: 'boat/getOffersData',
    }),
    changeGetData() {
      const newData = this.options
      newData.data = this.getOffersData
      return newData
    },
  },
}
</script>

<style lang="scss" scoped>
.offers {
  .title {
    font-family: 'Open Sans';
    font-size: 24px;
    font-weight: 600;
    color: #192d4f;
    small {
      margin-left: 20px;
      font-size: 1.2rem;
    }
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    opacity: 0.5;
  }
}
@media screen and (max-width: 768px) {
  .offers .title {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
