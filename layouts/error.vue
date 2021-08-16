<template>
  <div :class="$style['error-page']">
    <h1 :class="$style['error-page__title']">404</h1>
    <h3 :class="$style['error-page__subtitle']">
      Aradığınız sayfaya veya teknelere şuanda ulaşılamıyor.
    </h3>
    <div
      :class="[
        $style['error-page__buttons'],
        'd-flex justify-content-center align-items-center',
      ]"
    >
      <n-link to="/">
        <m-button
          :class="[$style['error-page__button'], 'font-weight-semibold']"
          >ANA SAYFAYA GİT</m-button
        ></n-link
      >
      <m-button class="font-weight-semibold">KİRALIK TEKNELER</m-button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('common/setAppLoading', false)
  },
  head() {
    return {
      title: 'Sayfa Bulunamadı',
    }
  },
}
</script>

<style lang="scss" scoped module>
@import '~/assets/scss/partials/breakpoints';

.error-page {
  background: url('~assets/images/error-bg.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07),
    0 15px 4px 0 rgba(50, 50, 93, 0.01);
  padding-top: 135px;

  @include bp(tablet-sm) {
    height: calc(100vh - 60px);
  }

  @include bp(mobile) {
    padding-top: 50px;

    &__buttons {
      flex-direction: column;
    }

    &__button {
      margin-right: 0 !important;
      margin-bottom: 7px;
    }
  }

  &__button {
    margin-right: 7px;
  }

  &__title {
    font-size: 160px;
    font-weight: 700;
    color: #fff;
  }

  &__subtitle {
    font-size: 24px;
    line-height: 32px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 42px;
    text-align: center;
    padding: 0 2px;
  }
}
</style>
