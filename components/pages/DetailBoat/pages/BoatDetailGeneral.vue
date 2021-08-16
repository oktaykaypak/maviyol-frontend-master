<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-md-7">
          <BoatDetailFeatures
            :get-id-data="getIdData"
            :get-features-data="getFeaturesData"
            :get-harbours-data="getHarboursData"
            :get-guest-capacity-data="getGuestCapacityData"
            :get-manufacturer-data="getManufacturerData"
            :get-captain-data="getCaptainData"
            :get-crew-included-in-price-data="getCrewIncludedInPriceData"
            :get-construction-year-data="getConstructionYearData"
            :get-refit-data="getRefitData"
            :get-min-rental-day-data="getMinRentalDayData"
            :get-beam-data="getBeamData"
            :get-bunk-cabin-count-data="getBunkCabinCountData"
            :get-double-cabin-count-data="getDoubleCabinCountData"
            :get-draft-data="getDraftData"
            :get-fresh-water-capacity-data="getFreshWaterCapacityData"
            :get-length-data="getLengthData"
            :get-recommended-capacity-data="getRecommendedCapacityData"
            :get-saloon-cabin-count-data="getSaloonCabinCountData"
            :get-saloon-single-count-data="getSaloonSingleCountData"
            :get-shower-count-data="getShowerCountData"
            :get-steering-wheel-count-data="getSteeringWheelCountData"
            :get-toilet-count-data="getToiletCountData"
            :get-air-conditioner-available-data="getAirConditionerAvailableData"
            :get-air-conditioner-allowed-working-time-data="
              getAirConditionerAllowedWorkingTimeData
            "
            :get-cabin-count-data="getCabinCountData"
            :get-captain-cabin-count-data="getCaptainCabinCountData"
            :get-master-cabin-count-data="getMasterCabinCountData"
            :get-twin-cabin-count-data="getTwinCabinCountData"
            :get-vip-cabin-count-data="getVipCabinCountData"
          ></BoatDetailFeatures>
        </div>
        <div class="col-md-5">
          <BoatDetailGeneralInRight />
        </div>
      </div>
      <BoatDetailEquipment :get-data="getInventoriesData" />
      <BoatDetailAbout :get-description-data="getDescriptionData" />
      <div v-if="false" class="row mt-5">
        <div class="col-12"></div>
        <div class="boatDetailHeading">
          <fa
            style="font-size: 24px; margin-right: 19px"
            :icon="['far', 'clone']"
          />
          <h2>Benzer Tekneler</h2>
        </div>
        <div class="col-12">
          <BoatDetailSimiliar
            :get-similar-carousel-data="getSimilarCarouselData"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BoatGeneralId',
  computed: {
    ...mapGetters({
      getSimilarCarouselData: 'boat/getSimilarCarouselData',
      getIdData: 'boat/getIdData',
      getDescriptionData: 'boat/getDescriptionData',
      getFeaturesData: 'boat/getFeaturesData',
      getGuestCapacityData: 'boat/getGuestCapacityData',
      getInventoriesData: 'boat/getInventoriesData',
      getManufacturerData: 'boat/getManufacturerData',
      getCaptainData: 'boat/getCaptainData',
      getCrewIncludedInPriceData: 'boat/getCrewIncludedInPriceData',
      getConstructionYearData: 'boat/getConstructionYearData',
      getRefitData: 'boat/getRefitData',
      getMinRentalDayData: 'boat/getMinRentalDayData',
      getBeamData: 'boat/getBeamData',
      getBunkCabinCountData: 'boat/getBunkCabinCountData',
      getDoubleCabinCountData: 'boat/getDoubleCabinCountData',
      getDraftData: 'boat/getDraftData',
      getFreshWaterCapacityData: 'boat/getFreshWaterCapacityData',
      getLengthData: 'boat/getLengthData',
      getRecommendedCapacityData: 'boat/getRecommendedCapacityData',
      getSaloonCabinCountData: 'boat/getSaloonCabinCountData',
      getSaloonSingleCountData: 'boat/getSaloonSingleCountData',
      getShowerCountData: 'boat/getShowerCountData',
      getSteeringWheelCountData: 'boat/getSteeringWheelCountData',
      getToiletCountData: 'boat/getToiletCountData',
      getAirConditionerAvailableData: 'boat/getAirConditionerAvailableData',
      getAirConditionerAllowedWorkingTimeData:
        'boat/getAirConditionerAllowedWorkingTimeData',
      getCabinCountData: 'boat/getCabinCountData',
      getCaptainCabinCountData: 'boat/getCaptainCabinCountData',
      getMasterCabinCountData: 'boat/getMasterCabinCountData',
      getTwinCabinCountData: 'boat/getTwinCabinCountData',
      getVipCabinCountData: 'boat/getVipCabinCountData',
      getHarboursData: 'boat/getHarboursData',
    }),
  },
}
</script>
