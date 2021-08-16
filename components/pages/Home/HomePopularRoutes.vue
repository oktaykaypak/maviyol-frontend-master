<template>
  <div class="popular-routes">
    <div class="container">
      <h2 class="home__title">{{ $t('home_title') }}</h2>
      <div class="popular-routes__row">
        <div class="popular-routes__col">
          <div>
            <route-location-box />
          </div>
          <div>
            <route-location-box />
          </div>
          <div>
            <route-location-box />
          </div>
        </div>
        <div class="popular-routes__col">
          <div>
            <route-location-box />
          </div>
          <div>
            <route-location-box />
          </div>
          <div>
            <route-location-box />
          </div>
        </div>
        <div class="popular-routes__col">
          <div>
            <route-location-box />
          </div>
          <div>
            <route-location-box />
          </div>
          <div>
            <route-location-box />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <m-button class="text-transform-uppercase px-4 font-weight-bold">
          {{ $t('home_btn_all_routes') }}
        </m-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

/* 
  @refactor
  GRID REFACTOR
*/
.popular-routes {
  &__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    height: 700px;
    margin-bottom: 50px;

    @include bp(tablet) {
      grid-template-columns: 1fr;
    }
  }

  &__col {
    display: grid;
    row-gap: 15px;

    @include bp(tablet) {
      &:nth-child(2),
      &:nth-child(3) {
        display: none !important;
      }
    }

    &:nth-child(1) {
      grid-template-rows: 1.5fr 2fr 2fr;
    }

    &:nth-child(2) {
      grid-template-rows: 2fr 1.5fr 1.5fr;
    }

    &:nth-child(3) {
      grid-template-rows: 1fr 1.5fr 2fr;
    }
  }
}
</style>
