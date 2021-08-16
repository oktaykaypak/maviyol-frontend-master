<template>
  <div class="boat-detail-outer">
    <div class="boat-detail">
      <div v-if="loading" class="boat-detail-inner">
        <BoatDetailBreadcrumb
          v-if="getHarboursData && getResData.w < 1200"
          :get-name-data="getNameData"
          :get-type-data="getTypeData"
          :get-harbours-data="getHarboursData"
          :get-from-data="getFromData"
          :get-slug-data="getSlugData"
          style="padding-left: 10px; max-height: 35px"
        />
        <BoatDetailHeaderCarousel
          v-if="getHeaderCarouselPhotosData"
          :get-header-carousel-photos-data="getHeaderCarouselPhotosData"
          :get-favourite-status-data="getFavouriteStatusData"
          :is-logged-in="isLoggedIn"
          @addFavorite="addFavorite($event)"
          @shareOpenModal="shareModalStatusChange($event)"
        />
        <div
          class="container boat-detail-container"
          :style="{ marginTop: getResData.w < 1200 && '20px' }"
        >
          <div class="row">
            <div class="col-12">
              <BoatDetailBreadcrumb
                v-if="getHarboursData && getResData.w > 1200"
                :get-name-data="getNameData"
                :get-type-data="getTypeData"
                :get-harbours-data="getHarboursData"
                :get-from-data="getFromData"
                :get-slug-data="getSlugData"
              />
            </div>
            <div class="col-12">
              <BoatDetailHeadInfos
                :get-name-data="getNameData"
                :title="title"
                :current-url="currentUrl"
                :text="text"
                :get-favourite-status-data="getFavouriteStatusData"
                :is-logged-in="isLoggedIn"
                @addFavorite="addFavorite($event)"
                @shareOpenModal="shareModalStatusChange($event)"
                @askOfferOpenModal="askOfferModalStatusChange($event)"
              />
            </div>
            <div v-if="getResData.w > 768" class="col-12 card-detail-area">
              <MCard class="card-main">
                <h1 name="header" class="detail-title">
                  {{ $t('boat_detail_header_title') }}
                </h1>
                <div class="row">
                  <div class="col-md-3">
                    <div class="row">
                      <div class="col-12">
                        <BoatDetailSidebar
                          @changeComponentEmit="changeComponent($event)"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <BoatDetailLocationInfos
                          :get-location-data="getLocationData"
                          :get-harbours-data="getHarboursData"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-9">
                    <BoatDetailParent :current-component="currentComponent" />
                  </div>
                </div>
              </MCard>
            </div>
            <BoatDetailParentMobil v-else />
          </div>
        </div>
        <div class="boat-detail_modal-ask-offer">
          <ClientOnly>
            <MModalTwo
              ref="askOfferModal"
              :width="40"
              :modal-id="'askOfferModal'"
              :status="askOfferModalStatus"
              :closed="true"
              :vertical="15"
              bgc="white"
              @modal="askOfferModalStatusChange($event)"
            >
              <BoatDetailAskOffer
                @closeModal="
                  askOfferModalStatusChange({
                    id: 'askOfferModal',
                    status: false,
                  })
                "
              />
            </MModalTwo>
          </ClientOnly>
        </div>

        <div class="boat-detail__modal-share">
          <ClientOnly>
            <MModalTwo
              :width="40"
              modal-id="shareModal"
              :status="shareModalStatus"
              :vertical="10"
              :closed="true"
              bgc="white"
              @modal="shareModalStatusChange($event)"
            >
              <h2 style="font-size: 22px; letter-spacing: 0.5px">
                {{ $t('boat_detail_share') }}
              </h2>
              <hr
                style="
                  margin: 10px 0;
                  border-color: #525f7f;
                  border-width: 1px;
                  opacity: 0.2;
                "
              />
              <ShareNetwork
                network="facebook"
                :url="currentUrl"
                title="Mavi Yolculuk"
              >
                <MButton
                  style="margin-bottom: 10px"
                  class="button socialButton"
                  variant="light"
                >
                  <fa
                    style="font-size: 20px; color: 3b5998"
                    :icon="['fab', 'facebook-square']"
                  />
                </MButton>
              </ShareNetwork>
              <ShareNetwork
                network="WhatsApp"
                :url="currentUrl"
                title="Mavi Yolculuk"
              >
                <MButton class="button socialButton" variant="light">
                  <fa
                    style="font-size: 20px; color: #25d366"
                    :icon="['fab', 'whatsapp']"
                  />
                </MButton>
              </ShareNetwork>
              <ShareNetwork
                network="Twitter"
                :url="currentUrl"
                title="Mavi Yolculuk"
              >
                <MButton class="button socialButton" variant="light">
                  <fa
                    style="font-size: 20px; color: #1da1f2"
                    :icon="['fab', 'twitter']"
                  />
                </MButton>
              </ShareNetwork>
              <ShareNetwork
                network="Email"
                :url="currentUrl"
                title="Mavi Yolculuk"
              >
                <MButton class="button socialButton" variant="light">
                  <fa
                    style="font-size: 20px; color: #2980b9"
                    :icon="['far', 'envelope']"
                  />
                </MButton>
              </ShareNetwork>
            </MModalTwo>
          </ClientOnly>
        </div>
      </div>
      <div v-else class="loading">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
      </div>
    </div>
    <div v-if="getResData.w < 768" class="ask-offer">
      <div class="content">
        <p>Musaitlik durumu güncellenmedi.</p>
        <p>Musaitlik durumunu sorun</p>
      </div>
      <button class="offer-button" @click="askOfferModalStatus = true">
        <span class="area-one">Teklif İsteyin</span>
        <span class="area-two">
          <fa style="font-size: 18px" :icon="['fas', 'chevron-up']"
        /></span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

// TODO Mixins
import RespomsiveAnalyze from '@/mixins/reponsive-analyze'

export default {
  mixins: [RespomsiveAnalyze],
  async asyncData({ params, store }) {
    try {
      await store.dispatch('boat/fetchGetBoatData', { paramId: params.id })
    } catch (error) {
      throw error
    }
  },
  data() {
    return {
      currentComponent: 'general',
      askOfferModalStatus: false,
      shareModalStatus: false,
      getBoatDetailData: {},
      title: '',
      currentUrl: '',
      loading: false,
      text: 'Maviyyo',
    }
  },
  computed: {
    ...mapGetters({
      getHeaderCarouselPhotosData: 'boat/getHeaderCarouselPhotosData',
      getNameData: 'boat/getNameData',
      getHarboursData: 'boat/getHarboursData',
      getTypeData: 'boat/getTypeData',
      getLocationData: 'boat/getLocationData',
      getFromData: 'boat/getFromData',
      getSlugData: 'boat/getSlugData',
      getFavouriteStatusData: 'boat/getFavouriteStatusData',
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
  mounted() {
    this.currentUrl = document.URL
    this.loading = true
  },
  created() {
    this.title = this.getNameData
  },
  methods: {
    ...mapActions({
      fetchPostBoatFavorite: 'boat/fetchPostBoatFavorite',
    }),
    askOfferModalStatusChange(event) {
      this.askOfferModalStatus = event.status
    },
    shareModalStatusChange(event) {
      this.shareModalStatus = event.status
    },
    changeComponent(event) {
      this.currentComponent = event
    },
    try() {
      console.log('just try this ')
    },
    async getTokens() {
      return await this.$cookies.get('token')
    },
    async addFavorite(event) {
      const token = await this.getTokens()
      const pageId = this.$route.params.id
      await this.fetchPostBoatFavorite({ token, pageId, status: event })
    },
  },
  validate({ params, query, store }) {
    if (params.id) return true
    else return false
  },
  head() {
    return {
      title: this.title + ' - Maviyyo',
    }
  },
  closeModal() {
    console.log(this.$refs.askOfferModal)
  },
}
</script>

<style lang="scss" scoped>
.boat-detail-outer {
  .ask-offer {
    padding-top: 20px;
    padding-bottom: 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0 -4px 22px 10px rgba(187, 187, 187, 0.5);
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    .content {
      margin-bottom: 7px;
      font-family: 'Open Sans';
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      color: #000000;
    }

    .offer-button {
      width: 275px;
      height: 50px;
      margin: 10px;
      border-radius: 4px;
      background-color: #fb6340;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      .area-one {
        margin-right: 12px;
        font-family: 'Open Sans';
        font-size: 16px;
        font-weight: bold;
        text-align: right;
        color: #ffffff;
        text-transform: uppercase;
      }
      .area-two {
        color: white;
      }
    }
  }

  .boat-detail {
    position: relative;

    .boat-detail-inner {
      margin-bottom: 2rem;
      &__modal-share {
        .button {
          color: black;
        }

        h2 {
          color: black;
          font-family: 'Open Sans';
          font-weight: 600;
        }

        hr {
          margin-bottom: 20px;
        }
      }

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

      .boat-detail-container {
        max-width: 1220px !important;
        .card-detail-area {
          margin-top: 30px;
          .card-main {
            padding: 1rem;
          }

          .detail-title {
            color: black;
            font-family: 'Open Sans';
            font-size: 1.5rem;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            margin-bottom: 1rem;
          }
        }
      }
    }

    .loading {
      z-index: 9999999;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      background-color: white;
      width: 100%;
      height: 95vh;
      justify-content: center;
      align-items: center;
      display: flex;

      .spinner {
        width: 40px;
        height: 40px;

        position: relative;
        margin: 100px auto;
      }

      .double-bounce1,
      .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #1170ff;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;

        -webkit-animation: sk-bounce 2s infinite ease-in-out;
        animation: sk-bounce 2s infinite ease-in-out;
      }

      .double-bounce2 {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
      }

      @keyframes spinnerEffect {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @-webkit-keyframes sk-bounce {
        0%,
        100% {
          -webkit-transform: scale(0);
        }
        50% {
          -webkit-transform: scale(1);
        }
      }

      @keyframes sk-bounce {
        0%,
        100% {
          transform: scale(0);
          -webkit-transform: scale(0);
        }
        50% {
          transform: scale(1);
          -webkit-transform: scale(1);
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .content {
    display: none;
  }
}
.socialButton {
  padding: 5px 10px;
}
</style>
