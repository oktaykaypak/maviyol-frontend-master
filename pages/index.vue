<template>
  <div class="home">
    <HomeBanner />
    <main class="home__main">
      <!-- <section class="home__section">
        <HomeCampaigns />
      </section> -->
      <section class="home__section">
        <HomeDescription />
      </section>
      <section class="home__section">
        <HomePopularRoutes />
      </section>
      <section class="home__section d-lg-flex d-none">
        <HomeVideo />
      </section>
      <section class="home__section">
        <HomeWhy />
      </section>
      <section class="mb-5">
        <PopularDestinations />
      </section>
      <section class="container mb-5">
        <Faq />
      </section>
    </main>
  </div>
</template>

<script>
import PopularDestinations from '~/components/layout/PopularDestinations'

export default {
  name: 'Home',
  components: {
    PopularDestinations,
  },
}
</script>

<style lang="scss">
.home {
  &__title {
    font-weight: 800;
    font-size: 2.25rem;
    margin-bottom: 24px;
  }

  &__section {
    padding: 40px 0;
    &:last-child {
      padding-bottom: 0;
    }
  }
}
</style>
