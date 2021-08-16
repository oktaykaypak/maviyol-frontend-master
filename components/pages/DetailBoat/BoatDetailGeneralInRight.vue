<template>
  <div class="boat-details-in-right">
    <div class="body">
      <div class="grayBox">
        <div class="innerBox">
          <fa style="font-size: 16px" :icon="['far', 'credit-card']" />
          <span>%100 Sigortalı ve Doğrulanmış </span>
        </div>
      </div>
      <div class="grayBox">
        <div class="innerBox">
          <fa style="font-size: 16px" :icon="['far', 'copyright']" />
          <span>Gerçek İncelemeler ve İçerikler </span>
        </div>
      </div>
      <div class="grayBox">
        <div class="innerBox">
          <fa style="font-size: 16px" :icon="['far', 'check-circle']" />
          <span>%100 Sigortalı ve Doğrulanmış </span>
        </div>
      </div>
      <div class="grayBox">
        <div class="innerBox">
          <fa style="font-size: 16px" :icon="['fa', 'credit-card']" />
          <span>12 Taksit İmkanı </span>
        </div>
      </div>
      <div v-if="getPetData" class="grayBox">
        <div class="innerBox">
          <fa style="font-size: 16px" :icon="['fa', 'paw']" />
          <span>Hayvan Dostu</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BoatDetailsInRight',
  data() {
    return {
      pet: true,
    }
  },
  computed: {
    ...mapGetters({
      getPetData: 'boat/getPetData',
    }),
  },
}
</script>

<style lang="scss" scoped>
.boat-details-in-right {
  .top-container {
    display: flex;
    align-items: center;
    span {
      font-size: 16px;
      color: #000;
    }
  }
  .body {
    .grayBox {
      display: flex;
      align-items: center;
      background-color: #f4f5f7;
      width: 275px;
      height: 50px;
      padding: 17px 20px;
      border-radius: 4px;
      margin-bottom: 5px;
      span {
        font-weight: 700;
        font-size: 12px;
        color: #525f7f;
        margin-left: 12px;
      }
    }
  }
}
</style>
