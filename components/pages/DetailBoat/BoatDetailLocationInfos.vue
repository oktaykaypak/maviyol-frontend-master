<template>
  <div class="boat-location-infos">
    <h3 class="title">{{ $t('boat_detail_location_title') }}</h3>
    <div class="map">
      <iframe
        :src="getLocationData.frameUrl"
        width="100%"
        height="250"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div class="info">
      <h3>{{ getLocationTitle }}</h3>
      <p>
        {{ getLocationData.body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoatLocationInfos',
  props: {
    getHarboursData: {
      type: Array,
      default: () => [],
    },
    getLocationData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    getLocationTitle() {
      const data = this.getHarboursData[0]
      return `${data.country.name}, ${data.city.name} Limanı`
    },
  },
}
</script>

<style lang="scss" scoped>
.boat-location-infos {
  margin-top: 1.3rem;
  margin-left: 0.2rem;
  margin-right: 0.9rem;

  .title {
    width: 246px;
    height: 24px;
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 700;
    color: #192d4f;
    margin-bottom: 10px;
  }

  .map {
    margin-bottom: 10px;
  }

  .info {
    h3 {
      font-family: 'Open Sans';
      font-size: 18px;
      font-weight: bold;
      color: #192d4f;
    }
    p {
      font-family: 'Open Sans';
      font-size: 14px;
      font-weight: normal;
      color: #192d4f;
    }
  }
}
</style>
