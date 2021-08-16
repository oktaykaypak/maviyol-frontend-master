<template>
  <div class="search-page__filters">
    <div v-if="count" class="search-page__box">
      <CountInfo />
    </div>
    <div class="search-page__box">
      <SearchBox />
    </div>
    <div class="search-page__box">
      <CustomSliderFilter />
    </div>
    <div class="search-page__box">
      <ListFilter />
    </div>
    <div class="search-page__box">
      <RenterAds />
    </div>
    <div>
      <div class="search-page__box">
        <SliderFilter />
      </div>
      <div class="search-page__box">
        <StarCount />
      </div>
    </div>
    <div
      class="search-page__box"
      style="position: sticky; bottom: 0px; z-index: 80"
    >
      <m-card shadow="soft">
        <m-button
          variant="warning"
          :block="true"
          class="font-weight-semibold"
          text="Ara"
          @click="filter"
        />
      </m-card>
    </div>
    <div class="search-page__box">
      <BoatAgent />
    </div>
    <div class="search-page__box">
      <m-card shadow="soft" body-class="d-flex align-items-center">
        <m-svg icon="phone-night-blue" width="30" height="30" class="mr-3" />
        <div>
          <h6 class="font-weight-semibold text-night-blue mb-1">444 3 851</h6>
          <span class="text-night-blue">Sorularınız için bizi arayın</span>
        </div>
      </m-card>
    </div>
    <div class="search-page__box">
      <m-card shadow="soft" body-class="d-flex align-items-center">
        <m-svg icon="verified-checked" width="30" height="30" class="mr-3" />
        <div>
          <h6 class="font-weight-semibold text-night-blue mb-1">444 3 851</h6>
          <span class="text-night-blue">Sorularınız için bizi arayın</span>
        </div>
      </m-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CountInfo from '~/components/pages/Search/CountInfo'
import ListFilter from '~/components/pages/Search/ListFilter'
import RenterAds from '~/components/pages/Search/RenterAds'
import StarCount from '~/components/pages/Search/StarCount'
import SearchBox from '~/components/pages/Search/SearchBox'
import BoatAgent from '~/components/pages/Search/BoatAgent'
import CustomSliderFilter from '~/components/pages/Search/CustomSliderFilter'
import filterMixin from '~/mixins/filter'
export default {
  components: {
    CountInfo,
    ListFilter,
    RenterAds,
    StarCount,
    SearchBox,
    BoatAgent,
    CustomSliderFilter,
  },
  mixins: [filterMixin],
  computed: {
    ...mapGetters({
      count: 'search/getCount',
    }),
  },
}
</script>

<style lang="scss" scoped>
.search-page__box {
  font-size: 14px !important;
  margin-bottom: 15px;
}
</style>
