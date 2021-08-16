<template>
  <div v-if="getHeaderCarouselPhotosData.length != 0" class="boat-header">
    <vue-slick-carousel
      v-if="getResData.w > 768 && getHeaderCarouselPhotosData.length >= 5"
      ref="carousel"
      class="carousel-one"
      v-bind="settings"
    >
      <div v-for="item in getCarouselOne" :key="item.iid" class="item">
        <div class="row no-gutters">
          <div class="col-3 small-area">
            <div class="row image-area no-gutters">
              <img
                v-if="item[0]"
                class="col-12"
                :src="item[0].image.small"
                alt="Coursel Photo"
                @click="index = item[0].iid"
              />
            </div>
            <div class="row image-area no-gutters">
              <img
                v-if="item[1]"
                class="col-12"
                :src="item[1].image.small"
                alt="Coursel Photo"
                @click="index = item[1].iid"
              />
            </div>
          </div>

          <img
            v-if="item[2]"
            class="col-6 big-area"
            :src="item[2].image.medium"
            alt="Coursel Photo"
            @click="index = item[2].iid"
          />

          <div class="col-3 small-area">
            <div class="row image-area no-gutters">
              <img
                v-if="item[3]"
                class="col-12"
                :src="item[3].image.small"
                alt="Coursel Photo"
                @click="index = item[3].iid"
              />
            </div>
            <div class="row image-area no-gutters">
              <img
                v-if="item[4]"
                class="col-12"
                :src="item[4].image.small"
                alt="Coursel Photo"
                @click="index = item[4].iid"
              />
            </div>
          </div>
        </div>
      </div>
    </vue-slick-carousel>

    <vue-slick-carousel
      v-if="getResData.w < 768 || getHeaderCarouselPhotosData.length < 5"
      ref="carousel"
      class="carousel-two"
      v-bind="settings"
      :style="{ height: getResData.w > 768 ? '488px' : '244px' }"
    >
      <img
        v-for="item in getCarouselTwo"
        :key="item.iid"
        :src="item.image.small"
        :style="{ height: getResData.w > 768 ? '488px' : '244px' }"
        @click="index = item.iid"
      />
    </vue-slick-carousel>

    <client-only placeholder="Loading...">
      <VueGallerySlideshow
        :images="getVueGallery"
        :index="index"
        @close="index = null"
      />
    </client-only>

    <div class="absolute-button-two">
      <div class="container">
        <div class="row">
          <div class="col-12 area">
            <div>
              <MButton class="button" variant="light" @click="index = 0">
                {{ $t('boat_detail_header_all_photos') }} ({{
                  getPhotosLength
                }})
              </MButton>
            </div>
            <div v-if="getResData.w > 768">
              <MButton
                class="button mr-2"
                variant="light"
                @click="addFavorite(getFavouriteStatusData)"
              >
                <fa :icon="[getFavouriteStatusData ? 'fas' : 'far', 'heart']" />
                {{ $t('boat_detail_header_favorite') }}</MButton
              >
              <MButton
                class="button"
                variant="light"
                @click="$emit('shareOpenModal', { status: true })"
                ><fa :icon="['fas', 'share-alt']" />
                {{ $t('boat_detail_header_share') }}
              </MButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      v-if="getButtonControl"
      class="absolute-button-one button-prev"
      @click="showPrev"
    >
      <fa style="font-size: 16px" :icon="['fas', 'chevron-left']" />
    </button>

    <button
      v-if="getButtonControl"
      class="absolute-button-one button-next"
      @click="showNext"
    >
      <fa style="font-size: 16px" :icon="['fas', 'chevron-right']" />
    </button>
  </div>
</template>

<script>
// TODO Node Modules
import _ from 'lodash'

// TODO Components
import VueGallerySlideshow from 'vue-gallery-slideshow'

// TODO Mixins
import RespomsiveAnalyze from '@/mixins/reponsive-analyze'

// TODO Export Vue
export default {
  name: 'BoatDetailHeader',
  components: {
    VueGallerySlideshow,
  },
  mixins: [RespomsiveAnalyze],
  props: {
    getHeaderCarouselPhotosData: {
      type: Array,
      default: () => [],
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
  data() {
    return {
      index: null,
      settings: {
        lazyLoad: 'ondemand',
        infinite: true,
        touchMove: false,
      },
    }
  },
  computed: {
    getCarouselOne() {
      const data = this.getHeaderCarouselPhotosData.map((item, index) => {
        return {
          iid: index,
          ...item,
        }
      })

      const size = Math.floor(data.length / 5)

      const newData = _.chunk(data, 5)

      return _.take(newData, size)
    },
    getButtonControl() {
      const data = this.getHeaderCarouselPhotosData

      const size = Math.floor(data.length / 5)

      return size !== 1
    },
    getPhotosLength() {
      return this.getHeaderCarouselPhotosData.length
    },
    getCarouselTwo() {
      const data = this.getHeaderCarouselPhotosData.map((item, index) => {
        return {
          iid: index,
          ...item,
        }
      })
      return data
    },
    getVueGallery() {
      const data = this.getHeaderCarouselPhotosData.map((item, index) => {
        return item.image.large
      })
      return data
    },
  },
  methods: {
    addFavorite(event) {
      if (!this.isLoggedIn) {
        this.$modal.show('login-modal')
      } else {
        this.$emit('addFavorite', event)
      }
    },
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
    popGalery(id) {
      this.index = id
    },
  },
}
</script>

<style lang="scss">
.boat-header {
  position: relative;
  overflow: hidden;
  .carousel-one {
    .item {
      height: 488px;

      .big-area {
        max-height: 488px;
      }

      .small-area {
        .image-area {
          height: 244px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .carousel-two {
    overflow: hidden;
    img {
      position: relative;
      top: 0px;
      margin-bottom: 500px;
      max-width: 100% !important;
      height: auto;
    }
  }

  .absolute-button-one {
    position: absolute;
    top: 34%;
    background-color: #f4f5f7;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: none;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5);
    outline: none;
    &.button-prev {
      left: 15px;
    }
    &.button-next {
      right: 15px;
    }
  }

  .absolute-button-two {
    bottom: 20px;
    left: 0;
    width: 100%;
    position: absolute;

    .area {
      display: flex;
      justify-content: space-between;

      .button {
        color: black;
        font-size: 0.8rem;
        font-weight: bold;
        padding-top: 7px;
        padding-bottom: 7px;
        padding-right: 13px;
        padding-left: 13px;
        color: #172b4d;
        text-align: center;
        font-family: 'Open Sans';
        box-shadow: 0 0 10px rgb(59, 59, 59);
      }
    }
  }
}
</style>
