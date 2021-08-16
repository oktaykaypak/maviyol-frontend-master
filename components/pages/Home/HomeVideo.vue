<template>
  <div class="highlights">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <img
        src="~/assets/icons/play-circle-filled-white-24-px.svg"
        height="72"
        width="72"
        class="img-fluid mb-3 c-pointer"
        alt=""
        @click="isPlayerShow = true"
      />
      <h2 class="mb-3 text-white font-weight-semibold">
        {{ $t('home_video') }}
      </h2>
      <h5 class="font-weight-light text-white text-center">
        {{ $t('home_video_content') }}
        <br />
        {{ $t('home_video_content2') }}
      </h5>
    </div>
    <div v-if="isPlayerShow" class="highlights__content">
      <div class="highlights__overlay" @click="isPlayerShow = false" />
      <div class="highlights__video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/WKmPlZHakQo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlayerShow: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';
.highlights {
  height: 420px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: url('~assets/images/banner.webp');
  background: #172b4d;
  background-size: cover;
  // padding-bottom: 75px;

  &__content,
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__overlay {
    z-index: 119;
    background: rgba(23, 43, 77, 0.6);
  }

  &__content {
    display: grid;
    place-items: center;
  }

  &__video {
    height: 600px;
    width: 900px;
    box-shadow: 0 15px 35px 0 rgba(50, 50, 93, 0.1),
      0 5px 15px 0 rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    overflow: hidden;
    z-index: 120;

    @include bp(tablet) {
      width: 95%;
    }
  }
}
</style>
