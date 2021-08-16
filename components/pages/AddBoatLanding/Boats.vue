<template>
  <div class="w-100 py-5" style="background: #fcfcfc">
    <div class="container">
      <div class="w-100 d-flex align-items-center flex-column mb-5">
        <h3 class="text-black text-center mb-3">
          Sistemimize Kayıtlı Tekneler
        </h3>
        <p class="text-black text-center w-50">
          “Blueway ile dijital dönüşümlerini başlatan üye teknelerimizi
          görebilirsiniz.Siz de bu listeye katılmak için hemen ön kayıt formunu
          doldurun”
        </p>
      </div>

      <div class="my-5 position-relative">
        <div ref="swiper" v-swiper:swiper="swiperOptions" class="swiper">
          <div class="swiper-wrapper">
            <div
              v-for="x in 10"
              :key="x"
              class="swiper-slide swiper-lazy d-flex flex-column align-items-center"
            >
              <div class="swiper-slide-photo"></div>
              <h6 class="text-black font-weight-semibold">Artemis</h6>
            </div>
          </div>
        </div>
        <i class="slider-arrow left" @click="$refs.swiper.swiper.slidePrev()">
          <m-svg icon="arrow-left-curved" width="30" height="30" />
        </i>
        <i class="slider-arrow right" @click="$refs.swiper.swiper.slideNext()">
          <m-svg icon="arrow-right-curved" width="30" height="30" />
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 5,
        lazy: true,
        breakpoints: {
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 1,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.slider-arrow {
  position: absolute;
  top: 0;
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;

  @include bp(tablet-sm) {
    &.left {
      left: 20px !important;
    }

    &.right {
      right: 20px !important;
    }
  }

  &.right {
    right: -40px;
  }

  &.left {
    left: -40px;
  }
}

.swiper {
  height: 200px;

  &-slide-photo {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background: url('https://i.pinimg.com/originals/7a/a0/12/7aa012476d3e3e40b148d553fd7e327c.jpg');
    height: 150px;
    width: 150px;
    border-radius: 100px;
    margin-bottom: 1rem;
  }

  &-lazy {
    opacity: 0;
  }

  &-lazy-loaded {
    opacity: 1;
  }
}
</style>
