<template>
  <div class="boot-detail-parent-mobil mt-3">
    <section
      v-for="(component, index) in components"
      :id="component.hash"
      :key="index"
      class="item"
    >
      <div
        class="item-header px-3"
        @click="changeComponent({ is: component.is, hash: component.hash })"
      >
        <h2>{{ $t(component.name) }}</h2>
        <fa
          v-if="currentComponent == component.is"
          style="font-size: 24px"
          :icon="['fas', 'chevron-up']"
        />
        <fa v-else style="font-size: 24px" :icon="['fas', 'chevron-down']" />
      </div>
      <div v-if="currentComponent == component.is" class="item-area p-3">
        <component :is="component.is" />
      </div>
    </section>
  </div>
</template>

<script>
// TODO Components
import BoatDetailGeneral from '@/components/pages/DetailBoat/pages/BoatDetailGeneral'
import BoatDetailComments from '@/components/pages/DetailBoat/pages/BoatDetailComments'
import BoatDetailFaq from '@/components/pages/DetailBoat/pages/BoatDetailFaq'
import BoatDetailOffers from '@/components/pages/DetailBoat/pages/BoatDetailOffers'
import BoatDetailRent from '@/components/pages/DetailBoat/pages/BoatDetailRent'
import BoatDetailRefund from '@/components/pages/DetailBoat/pages/BoatDetailRefund'

// TODO Export
export default {
  components: {
    BoatDetailGeneral,
    BoatDetailComments,
    BoatDetailFaq,
    BoatDetailOffers,
    BoatDetailRent,
    BoatDetailRefund,
  },
  data() {
    return {
      currentComponent: 'BoatDetailGeneral',
      components: [
        {
          hash: 'overview',
          name: 'boat_detail_sidebar_menu_overview',
          is: 'BoatDetailGeneral',
        },
        {
          hash: 'comments',
          name: 'boat_detail_sidebar_menu_comments',
          is: 'BoatDetailComments',
        },
        {
          hash: 'faq',
          name: 'boat_detail_sidebar_menu_faq',
          is: 'BoatDetailFaq',
        },
        {
          hash: 'rent',
          name: 'boat_detail_sidebar_menu_rent',
          is: 'BoatDetailRent',
        },
        {
          hash: 'refund',
          name: 'boat_detail_sidebar_menu_refund',
          is: 'BoatDetailRefund',
        },
        {
          hash: 'offers',
          name: 'boat_detail_sidebar_menu_offers',
          is: 'BoatDetailOffers',
        },
      ],
    }
  },
  methods: {
    changeComponent({ hash, is }) {
      if (this.currentComponent !== is) {
        this.currentComponent !== is && (this.currentComponent = is)
        this.$router.push({ hash })
      } else {
        this.currentComponent = ''
      }
    },
  },
}
</script>

<style lang="scss">
.boot-detail-parent-mobil {
  h2 {
    margin-bottom: 0;
  }

  width: 100%;
  .item {
    background-color: white;
    .item-header {
      display: block;
      width: 100%;
      font-weight: bold;
      border: solid 1px #d8d8d8;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      padding-left: 8px;
      padding-right: 8px;
      h2 {
        color: #525f7f;
        font-size: 1.1rem;
        font-weight: bold;
        font-family: 'Open Sans';
      }
    }
  }

  #faq {
    .item-area {
      .item-header {
        border: 0;
      }
    }
  }

  #comments {
    .boat-detail-comments {
      padding-right: 0 !important;
    }

    .box {
      padding: 14px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }

  #refund {
    .policy {
      h2 {
        margin-bottom: 15px;
      }
      ul {
        li {
          margin-bottom: 10px;
        }
      }
    }
  }

  #overview {
    .boat-equipment {
      h3 {
        margin-bottom: 20px;
      }
      .listContainer {
        flex: 0 0 100% !important;
        max-width: 100% !important;
        margin-top: 40px !important;
      }
    }

    .title {
      span {
        margin-right: 10px !important;
      }
      small {
        text-align: right;
        width: 100px;
      }
    }

    .boat-details-in-right {
      .body {
        display: flex;
        flex-wrap: wrap;
        .grayBox {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 48%;
          margin-right: 5px;
          &:last-child {
            margin-right: 0;
          }
          .innerBox {
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 415px) {
  .boot-detail-parent-mobil #overview .boat-details-in-right .body .grayBox {
    width: 100%;
  }
}
</style>
