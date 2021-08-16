<template>
  <div class="home-why">
    <div class="container">
      <h2 class="home__title">{{ $t('home_why') }}</h2>
      <h5 class="font-weight-light home-why__subtitle">
        {{ $t('home_why_subtitle') }}
      </h5>
      <div class="home-why__row">
        <HomeDescriptionItem
          image="roman-boat"
          label="Mavi Tur Nedir?"
          text="En güzel rotalara yolculuk"
        />
        <HomeDescriptionItem
          image="captain"
          label="Mürettebat"
          text="En güzel rotalara yolculuk"
        />
        <HomeDescriptionItem
          image="boat-window"
          label="Teknede Yaşam"
          text="En güzel rotalara yolculuk"
        />
        <HomeDescriptionItem
          image="submarine"
          label="Sık Sorulan Sorular"
          text="En güzel rotalara yolculuk"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.home-why {
  padding-bottom: 124px;

  &__subtitle {
    margin-bottom: 56px;
    line-height: 1.5;
  }

  &__row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @include bp(tablet-sm) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
