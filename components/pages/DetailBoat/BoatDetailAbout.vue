<template>
  <div v-if="getDescriptionData[currentLanguage]" class="row mt-5 boat-about">
    <div class="col-12">
      <div class="boatDetailHeading">
        <fa
          style="font-size: 24px; margin-right: 19px"
          :icon="['fa', 'life-ring']"
        />
        <h2>{{ $t('boat_detail_about_about') }}</h2>
      </div>
      <p class="headingAboutExplain">
        {{ boatAboutSmallText }}
      </p>
      <div class="showMoreBtn" @click="showMore">
        <span> {{ $t('boat_detail_about_more') }} </span>
        <fa
          style="font-size: 12px; margin-right: 19px"
          :icon="['fa', 'chevron-down']"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoatAbout',
  props: {
    getDescriptionData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      boatAboutSmallText: '',
    }
  },
  computed: {
    currentLanguage() {
      return this.$i18n.localeProperties.code
    },
  },
  created() {
    if (this.getDescriptionData[this.currentLanguage]) {
      this.boatAboutSmallText =
        this.getDescriptionData[this.currentLanguage].substring(0, 600) + '...'
    }
  },
  methods: {
    showMore() {
      this.boatAboutSmallText = this.getDescriptionData[this.currentLanguage]
      document.querySelector('.showMoreBtn').style.display = 'none'
    },
  },
}
</script>

<style lang="scss" scoped>
.boat-about {
  .boatDetailHeading {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    h2 {
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 0;
    }
  }

  p.headingAboutExplain {
    font-size: 14px;
    line-height: 24px;
    color: #172b4d;
    font-weight: 600;
  }

  .showMoreBtn {
    color: #3182fd;
    margin-top: 21px;
  }
}
@media screen and (max-width: 415px) {
  .boat-about .boatDetailHeading h2 {
    font-size: 20px !important;
    font-weight: 700;
  }
}
</style>
