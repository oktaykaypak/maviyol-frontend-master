<template>
  <div>
    <Header />
    <div v-if="$nuxt.isOffline">
      <div
        class="h-100vh d-flex justify-content-center flex-column align-items-center"
      >
        <h3 class="text-night-blue mb-2 font-weight-semibold text-center">
          İnternet bağlantınızı kontrol ediniz
        </h3>

        <span class="d-block mb-2">veya</span>
        <a
          href="tel:+908504304430"
          class="text-decoration-none d-block mb-2 text-danger"
        >
          <h3 class="font-weight-semibold text-danger">0850 430 4 430</h3>
        </a>
        <h4 class="text-night-blue mb-2 font-weight-semibold">
          Numarasından ulaşabilirsiniz
        </h4>
      </div>
    </div>
    <nuxt v-else />
    <Footer />
    <AppLoading v-if="isAppLoading" />
    <ScrollToUpBtn />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import ScrollToUpBtn from '~/components/layout/ScrollToUpBtn'

export default {
  components: {
    Header,
    Footer,
    ScrollToUpBtn,
  },
  mounted() {
    window.addEventListener('online', (event) => {
      this.$toast.success('İnternet bağlantın tekrar sağlandı.')
    })
    if (!this.isLoggedIn) {
      const favouriteLength = this.$favorite.getAllFavorites().length
      this.$store.commit('user/updateFavouriteCount', favouriteLength)
    }
  },
  computed: {
    ...mapGetters({
      isAppLoading: 'common/isAppLoading',
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
}
</script>
