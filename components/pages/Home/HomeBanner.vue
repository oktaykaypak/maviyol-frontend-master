<template>
  <div :class="$style.banner">
    <div class="container" style="padding-top: inherit">
      <div :class="$style.banner__section">
        <h1 :class="$style.banner__title">{{ $t('home_banner_title') }}</h1>
        <h4 :class="$style.banner__subtitle">
          1 numaralı yat kiralama platformundan bir tekne kiralayın
        </h4>
      </div>
      <div>
        <SearchBoat />
      </div>
    </div>
    <div class="supported-company">
      <div class="supported-company-item">
        <img style="width: 100%" src="~assets/images/tursab-logo.png" alt="" />
      </div>
      <div class="supported-company-item dto">
        <img style="width: 100%" src="~assets/images/dto-logo.png" alt="" />
      </div>
      <div class="supported-company-item">
        <img style="width: 100%" src="~assets/images/turkiye-logo.png" alt="" />
      </div>
      <div class="supported-company-item">
        <img style="width: 100%" src="~assets/images/skal-logo.png" alt="" />
      </div>
      <div class="supported-company-item">
        <img style="width: 100%" src="~assets/images/tursab-logo.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.supported-company {
  width: 100%;
  height: 100px;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  &-item {
    width: 150px;
    opacity: 0.75;
  }
  .dto {
    width: 100px !important;
  }
}
</style>
<style module lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.banner {
  height: 770px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0 0 0;
  // background: #172b4d url('~assets/images/banner.webp') no-repeat center;
  background: url('~assets/images/mainpage_boat.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @include bp(tablet) {
    padding: 1rem 0;
    height: auto;

    .container {
      padding: 0;
    }

    &__section {
      padding-bottom: 1rem;
      margin-bottom: 0 !important;
    }

    &__title {
      font-size: 1.25rem;
    }

    &__subtitle {
      font-size: 1rem;
      margin-bottom: 0;
    }

    &__action-btn {
      display: none !important;
    }
  }

  &__action-btn {
    padding: 0;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
  }

  &__section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  &__title {
    color: #fff;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
  }

  &__subtitle {
    color: #fff;
    line-height: 1.5;
    font-weight: 300 !important;
    font-size: 15px;
  }
}
</style>
