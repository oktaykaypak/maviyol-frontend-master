<template>
  <div class="boat-breadcrumb">
    <fa class="icon" :icon="['fas', 'arrow-left']" @click="goBack" />
    <p class="back" @click="goBack">{{ $t('boat_detail_breadcrumb_back') }}</p>
    <p class="location">
      <nuxt-link
        v-for="(item, index) in endPrintData"
        :key="index"
        :to="item.to"
      >
        {{ $t(item.lang) }}
        {{ endPrintData.length - 1 === index ? '' : '>' }}
      </nuxt-link>
    </p>
  </div>
</template>

<script>
// TODO Mixins
import RespomsiveAnalyze from '@/mixins/reponsive-analyze'
import Location from '@/mixins/location'

// TODO Types
import TypesBreadcrumb from '@/types/TypesBreadcrumb'

export default {
  name: 'BoatBreadcrumb',
  mixins: [Location, RespomsiveAnalyze],
  props: {
    getHarboursData: {
      type: Array,
      default: () => [],
    },
    getTypeData: {
      type: String,
      default: '',
    },
    getFromData: {
      type: String,
      default: '',
    },
    getSlugData: {
      type: String,
      default: '',
    },
    getNameData: {
      type: String,
      default: '',
    },
  },
  computed: {
    computedGetHarboursData() {
      const data = this.getHarboursData[0]
      return data || []
    },
    currentLanguage() {
      return this.$i18n.localeProperties.code
    },
    endPrintData() {
      const data = []

      const goHomePageUrl = this.currentLanguage === 'en' ? '/en/' : '/'
      data.push({
        lang: 'boat_detail_breadcrumb_home_page',
        to: goHomePageUrl,
      })

      const yachtType = TypesBreadcrumb[this.getTypeData]
        ? TypesBreadcrumb[this.getTypeData]
        : TypesBreadcrumb.DETAULT
      data.push({
        lang: yachtType.title,
        to: yachtType.urls[this.currentLanguage],
      })

      const locationTurkey =
        String(yachtType.urls[this.currentLanguage]) +
        String(this.currentLanguage === 'tr' ? '/turkiye' : '/turkey')

      data.push({
        lang: 'boat_detail_breadcrumb_location_turkey',
        to: locationTurkey,
      })

      const cityCatchUrl =
        String(yachtType.urls[this.currentLanguage]) +
        String('/' + this.computedGetHarboursData.slug)

      data.push({
        lang: this.computedGetHarboursData.name,
        to: cityCatchUrl,
      })

      return data
    },
  },
  methods: {
    goBack() {
      window.history.back()
    },
  },
}
</script>

<style lang="scss" scoped>
.boat-breadcrumb {
  height: 50px;
  display: flex;
  align-items: center;

  a {
    color: #2e3a59;
    text-decoration: none;
  }

  .icon {
    width: 16px;
    height: 12px;
    color: #2e3a59;
    cursor: pointer;
  }

  .back {
    cursor: pointer;
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: bold;
    color: #172b4d;
    margin-left: 5px;
    margin-right: 15px;
  }

  .location {
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: 600;
    color: #172b4d;
  }
}
</style>
