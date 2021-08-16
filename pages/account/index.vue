<template>
  <div :class="$style['account-page']">
    <div :class="['container', $style['account-page__container']]">
      <div :class="$style['account-page__content']">
        <div :class="$style['account-page__sidebar']">
          <AccountSidebar />
        </div>
        <div><nuxt-child /></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: 'authenticated',
  head() {
    return {
      title: 'Genel Bilgiler',
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'common/isMobile',
    }),
  },
  beforeRouteLeave(to, from, next) {
    if (this.isMobile && to.path === '/add-boat') {
      this.$store.commit('account/setAccountSidebar', false)
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }
    next()
  },
}
</script>

<style lang="scss">
.account-page-card {
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.07),
    0px 15px 4px rgba(50, 50, 93, 0.01) !important;
  padding: 1.75rem;
  margin-bottom: 2rem;

  .card__body {
    padding: 0 !important;
  }

  &__title {
    font-weight: bold;
    font-size: 26px;
    color: #32325d;
    margin-bottom: 20px;
  }
}
</style>

<style lang="scss" scoped module>
@import '~/assets/scss/partials/breakpoints';

.account-page {
  @include bp(tablet) {
    padding: 0 15px;

    &__container {
      padding-top: 0 !important;
    }
  }

  &__container {
    min-height: 100vh;
    padding: 50px 0;
  }

  &__content {
    display: grid;
    grid-template-columns: 2.5fr 6fr;
    gap: 30px;

    @include bp(tablet) {
      grid-template-columns: 100%;
    }
  }
}
</style>
