<template>
  <div class="boat-similiar-boats">
    <vue-slick-carousel
      ref="carousel"
      class="boat-similiar-boats__carousel"
      v-bind="settings"
    >
      <div
        v-for="item in getSimilarCarouselData"
        :key="item.boatName"
        class="carousel-item"
      >
        <img :src="item.img" alt="" />
        <div class="carousel-itemText">
          <div class="top">
            <span class="boatName">{{ item.boatName }}</span>
            <span>{{ item.choice }}</span>
          </div>
          <div class="bottom">{{ item.price }}'den başlayan fiyatlarla</div>
        </div>
      </div>
    </vue-slick-carousel>
    <button class="customBtn button-prev" @click="showPrev">
      <fa style="font-size: 16px" :icon="['fas', 'chevron-left']" />
    </button>

    <button class="customBtn button-next" @click="showNext">
      <fa style="font-size: 16px" :icon="['fas', 'chevron-right']" />
    </button>

    <NuxtLink to="/">Tüm Marmaris Teknelerini Göster</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    getSimilarCarouselData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      },
    }
  },
  mounted() {
    console.log('GR')
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  },
}
</script>

<style lang="scss">
.boatDetailHeading {
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 0;
  }
}
.boat-similiar-boats {
  position: relative;
  &__carousel {
    .slick-slide {
      margin-right: 10px;
      width: 340px;
      margin-bottom: 40px !important;
    }

    img {
      width: 100%;
    }

    .slick-arrow {
      z-index: 1;
    }

    .slick-next {
      &::before {
        font-size: 35px;
        color: #f4f5f7;
        margin-right: 50px;
      }

      right: 15px;
    }

    .slick-prev {
      left: 10px;
    }
  }

  .carousel-item {
    width: 380px;
    background-color: #f4f5f7;
    outline: none;
    &.item-1 {
      width: 380px;
    }
    .carousel-itemText {
      padding: 9px 17px 13px 19px;
      border: 1px solid #dee2e6;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      .top {
        display: flex;
        justify-content: space-between;
        color: #525f7f;
        font-size: 14px;
        .boatName {
          font-size: 16px;
          line-height: 17px;
          font-weight: 700;
        }
      }
      .bottom {
        padding-top: 9px;
        color: #3282fd;
      }
    }
  }
  .slick-slide {
    margin-right: 50px !important;
  }

  .nuxt-link-active {
    text-decoration: none;
    font-size: 14px;
    color: #3182fd;
    padding: 17px 13px;
    border: 1px solid #3182fd;
    border-radius: 4px;
  }

  .customBtn {
    position: absolute;
    top: 30%;
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
}
</style>
