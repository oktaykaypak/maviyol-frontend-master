<template>
  <div class="boat-features">
    <div class="title">
      <fa class="life-ring-icon icon" :icon="['fas', 'life-ring']" />
      <span> {{ $t('boat_detail_features_title') }} </span>
      <small v-if="getIdData">
        Boat ID: <strong>{{ getIdData }}</strong>
      </small>
    </div>
    <table class="boat-features__table">
      <thead></thead>
      <tbody>
        <tr v-if="getHarboursData[0].name">
          <td><fa class="icon" :icon="['fas', 'map-marker-alt']" /></td>
          <td>{{ $t('boat_detail_features_port') }}:</td>
          <td>{{ getHarboursData[0].name }}</td>
        </tr>
        <tr v-if="getCabinCountData">
          <td><fa class="icon" :icon="['fas', 'window-restore']" /></td>
          <td>{{ $t('boat_detail_features_cabin_count') }}:</td>
          <td>
            {{ getCabinCountData }}
          </td>
        </tr>
        <tr v-if="getGuestCapacityData">
          <td><fa class="icon" :icon="['far', 'user']" /></td>
          <td>{{ $t('boat_detail_features_guest') }}:</td>
          <td>{{ getGuestCapacityData }}</td>
        </tr>
        <tr v-if="getShowerCountData">
          <td><fa class="icon" :icon="['fas', 'bath']" /></td>
          <td>{{ $t('boat_detail_features_bathroom') }}:</td>
          <td>{{ getShowerCountData }}</td>
        </tr>
        <tr v-if="getLengthData">
          <td><fa class="icon" :icon="['fas', 'arrows-alt-h']" /></td>
          <td>{{ $t('boat_detail_features_length') }}:</td>
          <td>{{ getLengthData }}</td>
        </tr>

        <tr v-if="getBeamData">
          <td><fa class="icon" :icon="['fas', 'text-width']" /></td>
          <td>{{ $t('boat_detail_features_beam') }}:</td>
          <td>
            {{ getBeamData }}
          </td>
        </tr>
        <tr v-if="getConstructionYearData">
          <td><fa class="icon" :icon="['fas', 'calendar-day']" /></td>
          <td>{{ $t('boat_detail_features_year_production') }}:</td>
          <td>{{ getConstructionYearData }}</td>
        </tr>

        <tr v-if="getCaptainData">
          <td><fa class="icon" :icon="['fab', 'pied-piper-hat']" /></td>
          <td>{{ $t('boat_detail_features_captain') }}:</td>
          <td>
            {{
              getCaptainData === 'WITH_CAPTAIN'
                ? $t('boat_detail_features_with_captain')
                : getCaptainData === 'OPTIONAL'
                ? $t('boat_detail_features_optional')
                : getCaptainData === 'WITHOUT_CAPTAIN'
                ? $t('boat_detail_features_without_captain')
                : ''
            }}
          </td>
        </tr>

        <tr v-if="getCrewIncludedInPriceData">
          <td>
            <fa class="icon" :icon="['fas', 'assistive-listening-systems']" />
          </td>
          <td>{{ $t('boat_detail_features_crew_included_in_price') }}:</td>
          <td>
            {{ getCrewIncludedInPriceData === true ? 'Evet' : 'Hayır' }}
          </td>
        </tr>

        <tr v-if="getRefitData">
          <td><fa class="icon" :icon="['fas', 'calendar-day']" /></td>
          <td>{{ $t('boat_detail_features_refit') }}:</td>
          <td>
            {{ getRefitData }}
          </td>
        </tr>

        <tr v-if="getMinRentalDayData">
          <td><fa class="icon" :icon="['fas', 'hourglass-half']" /></td>
          <td>{{ $t('boat_detail_features_min_rental_day') }}:</td>
          <td>
            {{ getMinRentalDayData }}
          </td>
        </tr>

        <tr v-if="getBunkCabinCountData">
          <td><fa class="icon" :icon="['far', 'window-restore']" /></td>
          <td>{{ $t('boat_detail_features_bunk_cabin_count') }}:</td>
          <td>
            {{ getBunkCabinCountData }}
          </td>
        </tr>

        <tr v-if="getDraftData">
          <td><fa class="icon" :icon="['fab', 'codepen']" /></td>
          <td>{{ $t('boat_detail_features_draft') }}:</td>
          <td>
            {{ getDraftData }}
          </td>
        </tr>

        <tr v-if="getFreshWaterCapacityData">
          <td><fa class="icon" :icon="['fas', 'hand-holding-water']" /></td>
          <td>{{ $t('boat_detail_features_fresh_water_capacity') }}:</td>
          <td>
            {{ getFreshWaterCapacityData }}
          </td>
        </tr>

        <tr v-if="getRecommendedCapacityData">
          <td><fa class="icon" :icon="['fas', 'quote-right']" /></td>
          <td>{{ $t('boat_detail_features_recommended_capacity') }}:</td>
          <td>
            {{ getRecommendedCapacityData }}
          </td>
        </tr>

        <tr v-if="getSaloonCabinCountData">
          <td><fa class="icon" :icon="['fas', 'window-restore']" /></td>
          <td>{{ $t('boat_detail_features_saloon_cabin_count') }}:</td>
          <td>
            {{ getSaloonCabinCountData }}
          </td>
        </tr>

        <tr v-if="getSaloonSingleCountData">
          <td><fa class="icon" :icon="['fas', 'window-restore']" /></td>
          <td>{{ $t('boat_detail_features_saloon_single_count') }}:</td>
          <td>
            {{ getSaloonSingleCountData }}
          </td>
        </tr>

        <tr v-if="getSteeringWheelCountData">
          <td><fa class="icon" :icon="['fas', 'universal-access']" /></td>
          <td>{{ $t('boat_detail_features_steering_wheel_count') }}:</td>
          <td>
            {{ getSteeringWheelCountData }}
          </td>
        </tr>

        <tr v-if="getToiletCountData">
          <td><fa class="icon" :icon="['fas', 'toilet']" /></td>
          <td>{{ $t('boat_detail_features_toilet_count') }}:</td>
          <td>
            {{ getToiletCountData }}
          </td>
        </tr>

        <tr v-if="getAirConditionerAvailableData">
          <td><fa class="icon" :icon="['fas', 'fan']" /></td>
          <td>{{ $t('boat_detail_features_air_conditioner_available') }}:</td>
          <td>
            {{
              getAirConditionerAvailableData === true
                ? $t('boat_detail_features_have')
                : $t('boat_detail_features_dont_have')
            }}
          </td>
        </tr>

        <tr v-if="getAirConditionerAllowedWorkingTimeData">
          <td><fa class="icon" :icon="['fas', 'history']" /></td>
          <td>
            {{
              $t('boat_detail_features_air_conditioner_allowed_working_time')
            }}:
          </td>
          <td>
            {{ $t(changeAllowedWorkingTimeData) }}
          </td>
        </tr>

        <tr v-if="getCaptainCabinCountData">
          <td><fa class="icon" :icon="['fas', 'window-restore']" /></td>
          <td>{{ $t('boat_detail_features_captain_cabin_count') }}:</td>
          <td>
            {{ getCaptainCabinCountData }}
          </td>
        </tr>

        <tr v-if="getMasterCabinCountData">
          <td><fa class="icon" :icon="['fas', 'window-restore']" /></td>
          <td>{{ $t('boat_detail_features_master_cabin_count') }}:</td>
          <td>
            {{ getMasterCabinCountData }}
          </td>
        </tr>

        <tr v-if="getTwinCabinCountData">
          <td><fa class="icon" :icon="['fas', 'window-restore']" /></td>
          <td>{{ $t('boat_detail_features_twin_cabin_count') }}:</td>
          <td>
            {{ getTwinCabinCountData }}
          </td>
        </tr>

        <tr v-if="getVipCabinCountData">
          <td><fa class="icon" :icon="['fas', 'star']" /></td>
          <td>{{ $t('boat_detail_features_vip_cabin_count') }}:</td>
          <td>
            {{ getVipCabinCountData }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    getFeaturesData: {
      type: Object,
      default: () => {},
    },
    getHarboursData: {
      type: Array,
      default: () => [],
    },
    getIdData: {
      type: Number,
      default: 0,
    },
    getGuestCapacityData: {
      type: Number,
      default: null,
    },
    getManufacturerData: {
      type: Object,
      default: () => {},
    },
    getCaptainData: {
      type: String,
      default: null,
    },
    getCrewIncludedInPriceData: {
      type: Boolean,
      default: null,
    },
    getConstructionYearData: {
      type: Number,
      default: null,
    },
    getRefitData: {
      type: Number,
      default: null,
    },
    getMinRentalDayData: {
      type: Number,
      default: null,
    },
    getBeamData: {
      type: Number,
      default: null,
    },
    getBunkCabinCountData: {
      type: Number,
      default: null,
    },
    getDoubleCabinCountData: {
      type: Number,
      default: null,
    },
    getDraftData: {
      type: Number,
      default: null,
    },
    getFreshWaterCapacityData: {
      type: Number,
      default: null,
    },
    getLengthData: {
      type: Number,
      default: null,
    },
    getRecommendedCapacityData: {
      type: Number,
      default: null,
    },
    getSaloonCabinCountData: {
      type: Number,
      default: null,
    },
    getSaloonSingleCountData: {
      type: Number,
      default: null,
    },
    getShowerCountData: {
      type: Number,
      default: null,
    },
    getSteeringWheelCountData: {
      type: Number,
      default: null,
    },
    getToiletCountData: {
      type: Number,
      default: null,
    },
    getAirConditionerAvailableData: {
      type: Boolean,
      default: null,
    },
    getAirConditionerAllowedWorkingTimeData: {
      type: String,
      default: null,
    },
    getCabinCountData: {
      type: Number,
      default: null,
    },
    getCaptainCabinCountData: {
      type: Number,
      default: null,
    },
    getMasterCabinCountData: {
      type: Number,
      default: null,
    },
    getTwinCabinCountData: {
      type: Number,
      default: null,
    },
    getVipCabinCountData: {
      type: Number,
      default: null,
    },
  },
  computed: {
    changeAllowedWorkingTimeData() {
      const data = this.getAirConditionerAllowedWorkingTimeData
      if (data === '1_HOUR_A_DAY') return 'boat_detail_features_one_hour_a_day'
      if (data === '2_HOURS_A_DAY') return 'boat_detail_features_two_hour_a_day'
      if (data === '3_HOURS_A_DAY')
        return 'boat_detail_features_three_hour_a_day'
      if (data === '4_HOURS_A_DAY')
        return 'boat_detail_features_four_hour_a_day'
      if (data === '5_HOURS_A_DAY')
        return 'boat_detail_features_five_hour_a_day'
      if (data === '6_HOURS_A_DAY') return 'boat_detail_features_six_hour_a_day'
      if (data === '7_HOURS_A_DAY')
        return 'boat_detail_features_seven_hour_a_day'
      if (data === '8_HOURS_A_DAY')
        return 'boat_detail_features_eigth_hour_a_day'
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
.boat-features {
  .icon {
    color: #192d4f;
  }

  &__table {
    tr {
      display: block;
      margin-bottom: 27px;
      td:nth-child(1) {
        width: 50px;

        :nth-child(1) {
          margin-left: 6px;
        }
      }

      td:nth-child(2) {
        margin-top: 4px;
        color: #192d4f;
        width: 110px;
      }
      td:nth-child(3) {
        margin-top: 30px;
        font-weight: 700;
        color: #192d4f;
      }
    }
  }

  table {
    margin-top: 20px;
    width: 100%;
  }

  .title {
    display: flex;
    align-items: center;

    .life-ring-icon {
      width: 24px;
      height: 24px;
      margin-right: 21px;
      object-fit: contain;
      margin-top: 1px;
    }

    span {
      font-family: 'Open Sans';
      font-size: 24px;
      font-weight: 600;
      color: #192d4f;
      margin-right: 20px;
    }

    small {
      width: 145px;
      font-family: 'Open Sans';
      font-size: 16px;
      font-weight: normal;
      color: #000000;

      strong {
        font-weight: 600;
      }
    }
  }
}

@media screen and(max-width:768px) {
  .boat-features .title span {
    font-size: 18px;
  }
}
</style>
