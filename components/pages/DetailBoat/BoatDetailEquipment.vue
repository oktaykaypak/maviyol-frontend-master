<template>
  <div class="row mt-4 boat-equipment">
    <div class="col-12">
      <div class="equipment">
        <fa style="font-size: 24px" :icon="['fa', 'life-ring']" />
        <h2>{{ $t('boat_detail_equipment_title') }}</h2>
      </div>
    </div>
    <div
      v-for="(itemOne, indexOne) in getData"
      v-if="itemOne.data.length != 0"
      :key="indexOne"
      class="col-3 mb-3 listContainer"
    >
      <h3>{{ $t(itemOne.name) }}</h3>
      <ul>
        <li
          v-for="(itemTwo, indexTwo) in itemOne.data"
          v-if="itemTwo.status"
          :key="indexTwo"
        >
          <span class="dot"></span>
          <span> {{ itemTwo.body[currentLanguage] }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// TODO Mixins
import Location from '@/mixins/location'

// TODO Export Module
export default {
  name: 'BoatEquipment',
  mixins: [Location],
  props: {
    getData: {
      type: Object,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.boat-equipment {
  .equipment {
    display: flex;
    align-items: center;
    h2 {
      font-size: 24px;
      margin-left: 21px;
      margin-bottom: 0;
      font-weight: 700;
    }
  }

  .listContainer {
    margin-top: 20px;
    h3 {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 33px;
    }
    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
      span {
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
      }
    }
    .dot {
      width: 6px;
      height: 6px;
      display: inline-block;
      background-color: #3182fd;
      border-radius: 50%;
      margin-right: 13px;
    }
  }
}
@media screen and(max-width:456px) {
  .boat-equipment .equipment h2 {
    font-size: 20px;
  }
  .boat-about .boatDetailHeading h2 {
    font-size: 20px;
  }
}
</style>
