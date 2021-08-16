<template>
  <m-card shadow="soft" body-class="p-0 h-100 w-100" class="product-card">
    <div v-if="loading" class="product-card__content">
      <div class="product-card__picture h-lg-100">
        <div class="ssc-square h-100"></div>
      </div>
      <div class="product-card__info h-100">
        <div class="w-100">
          <div
            class="mb-2 d-lg-block d-flex align-items-center justify-content-center"
          >
            <div class="ssc-head-line w-50"></div>
          </div>
          <div class="ssc-line mb-lg-0 mb-2" style="width: 30%"></div>
        </div>
        <div>
          <div
            class="d-flex justify-content-lg-between align-items-lg-end align-items-center justify-content-center flex-lg-row flex-column"
          >
            <div class="d-flex flex-column w-100">
              <div class="mb-4">
                <div class="ssc-line mb-2" style="width: 152px"></div>
                <div class="ssc-line mb-2" style="width: 200px"></div>
              </div>
              <div class="d-flex mb-lg-auto mb-2">
                <div
                  class="ssc-square mr-2 w-r-lg-50"
                  style="width: 150px; height: 30px; border-radius: 4px"
                ></div>
                <div
                  class="ssc-square w-r-lg-50"
                  style="width: 150px; height: 30px; border-radius: 4px"
                ></div>
              </div>
            </div>
            <div class="d-flex align-items-end flex-column w-r-lg-100">
              <div
                class="ssc-square mb-2 w-r-lg-100"
                style="width: 150px; height: 32px; border-radius: 4px"
              ></div>
              <div
                class="ssc-square w-r-lg-100"
                style="width: 100px; height: 40px; border-radius: 4px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="product-card__content">
      <div class="product-card__picture">
        <div
          ref="swiper"
          v-swiper:swiper="swiperOptions"
          class="swiper"
          style="border-radius: 4px; position: relative"
        >
          <i
            class="product-card__arrow left"
            @click="$refs.swiper.swiper.slidePrev()"
          ></i>
          <i
            class="product-card__arrow right"
            @click="$refs.swiper.swiper.slideNext()"
          ></i>

          <div class="d-lg-none product-card__favorite-mobile">
            <fa
              class="c-pointer"
              :class="{ 'text-warning': isFavorited }"
              :icon="[isFavorited ? 'fas' : 'far', 'heart']"
              @click="onCLickFavoriteIcon"
            />
          </div>
          <div class="swiper-wrapper">
            <div
              v-for="(photo, index) in product.photos"
              :key="index"
              class="swiper-slide swiper-lazy"
              :data-background="
                isMobile ? photo.image.small : photo.image.medium
              "
            ></div>
          </div>
          <div
            v-show="product.photos.length > 0"
            class="swiper-pagination-overlay"
          >
            <div slot="pagination" class="swiper-pagination"></div>
          </div>
        </div>
      </div>

      <div class="product-card__info">
        <div>
          <div
            class="d-flex align-items-center flex-lg-row flex-column justify-content-lg-between justify-content-start mb-lg-1"
          >
            <div class="d-flex align-items-center flex-lg-row flex-column">
              <span class="product-card__title mb-lg-0 mb-2">{{
                product.name
              }}</span>
              <m-badge
                v-if="product.from === 'CHARTER'"
                variant="light-night"
                class="font-weight-semibold ml-lg-3"
                :size="$device.isMobile ? 'xsm' : 'sm'"
              >
                Sahibinden</m-badge
              >
            </div>
            <div
              class="d-flex flex-lg-row justify-content-center flex-row-reverse mb-lg-0 mb-2"
            >
              <!-- <div
              class="d-flex flex-column align-items-lg-end align-items-start mr-2"
            >
              <fa :icon="['fas', 'star']" class="product-card__star" />
              <span class="font-weight-semibold text-night-blue f-14"
                >868 Değerlendirme</span
              >
            </div>
            <span class="product-card__rate mr-2 mr-lg-0">9,0</span> -->
              <div
                style="color: black"
                class="d-lg-flex d-none justify-content-center align-items-center pl-2 h5"
              >
                <fa
                  class="c-pointer"
                  :class="{ 'text-warning': isFavorited }"
                  :icon="[isFavorited ? 'fas' : 'far', 'heart']"
                  @click="onCLickFavoriteIcon"
                />
              </div>
            </div>
          </div>
          <div class="d-flex f-14 mb-2">
            <m-svg icon="location-mark-primary" class="mr-1" />
            <span class="text-primary mr-1 font-weight-semibold">Liman:</span>
            <span
              v-for="(harbour, index) in product.harbours"
              :key="index"
              class="text-night-blue"
              >{{
                harbour.name +
                (product.harbours.length - 1 != index ? ',&nbsp;' : '')
              }}
            </span>
          </div>
          <div class="product-card__features">
            <div v-if="product.guestCapacity > 0" class="product-card__feature">
              <m-svg icon="user-icon" />
              <span class="text-night-blue"
                >Misafir: {{ product.guestCapacity }}</span
              >
            </div>
            <div v-if="product.cabinCount > 0" class="product-card__feature">
              <m-svg icon="cabin-icon" />
              <span class="text-night-blue"
                >Kabin: {{ product.cabinCount }}</span
              >
            </div>
            <div v-if="product.showerCount > 0" class="product-card__feature">
              <m-svg icon="shower-icon" />
              <span class="text-night-blue"
                >Banyo: {{ product.showerCount }}</span
              >
            </div>
            <div
              v-if="product.staffCabinCount > 0"
              class="product-card__feature"
            >
              <m-svg icon="captain-icon" />
              <span class="text-night-blue"
                >Mürettebat: {{ product.staffCabinCount }}</span
              >
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex justify-content-between mb-2 align-items-end">
            <div class="d-flex flex-column">
              <span class="font-weight-semibold text-night-blue d-block mb-1"
                >Teknenin Özellikleri</span
              >
              <div class="d-flex f-14">
                <div v-if="product.beam" class="d-flex pr-4">
                  <span class="text-primary font-weight-semibold pr-2"
                    >Uzunluk</span
                  >
                  <span>{{ product.beam }} m</span>
                </div>
                <div class="d-flex">
                  <span class="text-primary font-weight-semibold pr-2"
                    >Yıl</span
                  >
                  <span>{{ product.constructionYear }}</span>
                </div>
              </div>
            </div>
            <div v-if="!isSmall" class="d-flex flex-column align-items-end">
              <m-badge v-if="false" variant="dusk" class="mb-2" size="xsm"
                >15% İndirimli</m-badge
              >
              <div v-if="product.amount" class="product-card__price mb-2">
                <span class="product-card__price-time">Gün /</span>
                <span class="product-card__price-value"
                  >{{ product.amount }} EUR</span
                >
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-between flex-column flex-lg-row align-items-lg-end align-items-center"
          >
            <div class="mb-3 mb-lg-0 d-flex flex-wrap">
              <div class="d-flex">
                <div class="product-card__property">
                  <fa :icon="['fas', 'paw']" class="mr-1" />
                  <span>Hayvan dostu</span>
                </div>
                <div class="product-card__property">
                  <fa :icon="['far', 'calendar-alt']" class="mr-1" />
                  <span>En az 5 gün süreli kiralama</span>
                </div>
              </div>
              <div
                v-if="isSmall"
                class="d-flex align-items-center justify-content-center flex-column"
              >
                <m-badge v-if="false" variant="dusk" class="mb-2" size="xsm"
                  >15% İndirimli</m-badge
                >
                <!-- <div v-if="product.amount" class="product-card__price mb-2">
                  <span class="product-card__price-time">Gün /</span>
                  <span class="product-card__price-value"
                    >{{ product.amount }} EUR</span
                  >
                </div> -->
              </div>
            </div>
            <div class="product-card__btn-wrapper">
              <m-button
                variant="warning"
                class="font-weight-semibold product-card__btn"
                :class="
                  isSmall &&
                  'f-14 d-flex justify-content-end align-items-center px-3 position-relative'
                "
                :to="
                  this.localePath({
                    name: 'tekne-id',
                    params: { id: product.id },
                  })
                "
              >
                <span v-if="isSmall && product.amount">
                  <span class="product-card__btn-price"
                    >Gün / {{ product.amount }} EUR</span
                  >
                  <span>SEÇ > </span>
                </span>
                <span v-if="isSmall && !product.amount"> Teklif Alınız > </span>
                <span v-if="!isSmall"> SEÇ </span>
              </m-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </m-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object,
      default: () => ({
        name: '',
        photos: [],
      }),
    },
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
      },
    }
  },
  computed: {
    ...mapGetters({
      getWindowInnerWidth: 'common/getWindowInnerWidth',
      isMobile: 'common/isMobile',
      isLoggedIn: 'auth/isLoggedIn',
      favorites: 'search/getFavorites',
      getFavouriteCount: 'user/getFavouriteCount',
    }),
    isSmall() {
      return this.getWindowInnerWidth <= 750
    },
    isFavorited() {
      return this.favorites.includes(this.product.id)
    },
  },
  methods: {
    async favorite() {
      try {
        await this.$repositories.product.favorite(this.product.id)
        this.favorites.push(this.product.id)
        this.$store.commit('search/updateFavorites', this.favorites)

        if (this.isLoggedIn) {
          this.$store.commit(
            'user/updateFavouriteCount',
            this.getFavouriteCount + 1
          )
        }
      } catch (error) {
        this.$toast.error('Favorilere eklenemedi.')
      }
    },
    async unFavorite() {
      try {
        await this.$repositories.product.unFavorite(this.product.id)
        this.$store.commit(
          'search/updateFavorites',
          this.favorites.filter((id) => id !== this.product.id)
        )
        if (this.isLoggedIn) {
          this.$store.commit(
            'user/updateFavouriteCount',
            this.getFavouriteCount - 1
          )
        }
      } catch (error) {
        this.$toast.error('Bir hata meydana geldi.')
      }
    },
    onCLickFavoriteIcon() {
      if (!this.isLoggedIn) {
        // this.$modal.show('register-modal')
        this.$favorite.toggle(this.product.id)
        return
      }
      if (this.isFavorited) {
        this.unFavorite()
      } else {
        this.favorite()
      }
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/partials/_breakpoints.scss';

.product-card {
  margin-bottom: 15px;
  height: 240px;
  display: flex;

  @include bp(tablet) {
    height: auto !important;

    &__content {
      flex-direction: column;
      padding: 0.75rem !important;
    }

    &__picture {
      width: 100% !important;
      height: 300px;
      margin-right: 0px !important;
      margin-bottom: 0.75rem;
    }

    &__btn {
      width: 100% !important;
    }

    &__features {
      flex-wrap: wrap;
    }

    &__feature {
      width: 50%;
      margin-bottom: 6px;
      margin-right: 0 !important;
    }

    &__btn,
    &__btn-wrapper {
      width: 100%;
    }
  }

  &__favorite-mobile {
    color: var(--dusk);
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
    font-size: 17px;
    background: #fff;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
  }

  &__content {
    padding: 10px !important;
    display: flex;
    height: 100%;
  }

  &__features {
    display: flex;
    margin-bottom: 0.5rem;
  }

  &__feature {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-right: 0.5rem;

    img {
      width: 18px;
      height: 18px;
      margin-right: 0.5rem;
    }
  }

  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #0d3d64;
  }

  &__star {
    color: #f4bb4e;
  }

  &__btn {
    padding: 0.75rem 2.25rem;

    &-price {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__rate {
    background: #204382;
    color: #fff;
    flex: 1;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    font-weight: 600;
  }

  &__price {
    line-height: 1;
    &-value {
      color: #163459;
      font-size: 1.5rem;
      font-weight: bold;
    }
    &-time {
      padding-right: 10px;
      font-size: 14px;
      font-weight: 600;
      color: var(--night-blue);
    }
  }

  &__property {
    color: #687189;
    background: #f4f5f7;
    margin-right: 5px;
    font-weight: 600;
    font-size: 12px;
    padding: 6px;
    border-radius: 4px;
    display: flex;
    align-items: center;
  }

  &__arrow {
    border: solid #fff;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 8px;
    position: absolute;
    top: calc(50% - 13px);
    z-index: 10;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    &.right {
      transform: rotate(-45deg);
      right: 10px;
    }

    &.left {
      transform: rotate(135deg);
      left: 10px;
    }
  }

  &__picture {
    margin-right: 10px;
    flex-shrink: 0 !important;
  }

  &__picture,
  .swiper {
    width: 275px;
  }

  .swiper {
    height: 100%;

    &-lazy {
      opacity: 0;
    }

    &-lazy-loaded {
      opacity: 1;
    }

    &:hover .product-card__arrow {
      opacity: 1;
    }

    &-slide {
      background-size: cover !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      transition: opacity 200ms ease-in-out;
    }

    @include bp(tablet) {
      width: 100%;
    }
    &-pagination-overlay {
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    &-pagination {
      height: 20px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 20px;

      &-bullet {
        width: 11px;
        height: 11px;
        border-radius: 100px;
        opacity: 0.7;
        background: #fff;
        margin: 0 2px;
        flex-shrink: 0;
        transition: all 0.3s ease-in-out;
        box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);

        &-active {
          opacity: 1;
        }
      }
    }

    &-wrapper {
      background: url('~assets/images/default-placeholder-image.png') no-repeat
        center;
      background-size: cover;
    }
  }
}
</style>
