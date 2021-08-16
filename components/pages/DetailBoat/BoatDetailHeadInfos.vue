<template>
  <div class="boat-head-infos">
    <div class="row controller">
      <div class="col-md-4">
        <div class="boatVariant">
          <h1>{{ getNameData }}</h1>
          <div class="rateBox">
            <span
              style="font-weight: 700; margin-right: 5px; color: #000"
              v-text="
                getBoatCommentScoreData.total > 0
                  ? getBoatCommentScoreData.total
                  : ''
              "
            /><MRateStar :full-star="getBoatCommentScoreData.count" />
            <span style="margin-left: 7.2px; color: #000"
              >({{ getCommentsData.length }})</span
            >
          </div>
        </div>
      </div>
      <div class="col-md-3 mt-3">
        <div class="userInfo">
          <img
            style="border-radius: 50%"
            :src="getRenterData.avatar"
            width="65"
            height="65"
          />
          <div class="infoText mt-2">
            <span class="infoText__text">
              {{ $t('boat_detail_head_infos_boat_owner') }}
            </span>
            <span class="infoText__renterName">{{ getRenterData.name }} </span>
          </div>
        </div>
      </div>
      <div v-if="getResData.w > 768" class="col-3 offset-2">
        <div class="rightArea">
          <p class="rightArea__avaibleStatus">
            Müsaitlik durumu güncellenmedi. Müsaitlik durumunu sorun
          </p>
          <button
            class="rightArea__offerBtn"
            @click="$emit('askOfferOpenModal', { status: true })"
          >
            TEKLİF İSTEYİN <fa :icon="['fas', 'chevron-down']" />
          </button>
        </div>
      </div>

      <div v-else class="favorite-and-share-buttons">
        <button @click="addFavorite(getFavouriteStatusData)">
          <fa
            style="font-size: 13px"
            :icon="[getFavouriteStatusData ? 'fas' : 'far', 'heart']"
          />
          <span>{{ $t('boat_detail_header_favorite') }}</span>
        </button>
        <button @click="buttonShare">
          <fa
            style="font-size: 13px"
            class="icon"
            :icon="['fas', 'share-alt']"
          />
          <span> {{ $t('boat_detail_header_share') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RespomsiveAnalyze from '@/mixins/reponsive-analyze'
export default {
  name: 'BoatHeadInfos',
  mixins: [RespomsiveAnalyze],
  props: {
    getNameData: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    currentUrl: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    getFavouriteStatusData: {
      type: Boolean,
      default: false,
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      getRenterData: 'boat/getRenterData',
      getBoatCommentScoreData: 'boat/getBoatCommentScoreData',
      getCommentsData: 'boat/getCommentsData',
    }),
  },
  methods: {
    buttonShare() {
      if (navigator.share) {
        const shareData = {
          title: this.title,
          text: this.text,
          url: this.currentUrl,
        }
        navigator.share(shareData)
      } else {
        this.$emit('shareOpenModal', { status: true })
      }
    },
    addFavorite(event) {
      if (!this.isLoggedIn) {
        this.$modal.show('login-modal')
      } else {
        this.$emit('addFavorite', event)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.boat-head-infos {
  position: relative;
  .controller {
    display: flex;
    align-items: center;

    .favorite-and-share-buttons {
      position: absolute;
      right: 0;
      bottom: 0;
      flex-direction: column;
      display: flex;

      button {
        outline: none;
        margin-bottom: 10px;
        border-radius: 2.8px;
        border: none;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        box-shadow: 0 3px 10px 5px rgba(50, 50, 93, 0.11),
          0 1px 2px 1px rgba(0, 0, 0, 0.08);
        background-color: #ffffff;
        font-family: 'Open Sans';
        font-size: 12px;
        font-weight: bold;
        color: #172b4d;
        span {
          margin-left: 8px;
        }
      }
    }

    .boatVariant {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .rateBox {
        display: flex;
        align-items: center;
        font-size: 12.5px;
        margin-top: 12px;
      }
      h1 {
        font-size: 30px;
        font-weight: 700;
        color: #000;
      }
    }

    .userInfo {
      display: flex;
      .infoText {
        display: flex;
        flex-direction: column;
        margin-left: 9px;
        &__text {
          color: #192d4f;
          font-size: 14px;
        }
        &__renterName {
          font-weight: 700;
          font-size: 16px;
        }
      }
    }
    .rightArea {
      &__offerBtn {
        background: #fb6340;
        color: #fff;
        letter-spacing: 0.36px;
        border: none;
        width: 100%;
        height: 50px;
        font-size: 16px;
        font-weight: 700;
        border-radius: 4px;
      }

      &__avaibleStatus {
        color: #000;
        font-weight: 500;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
