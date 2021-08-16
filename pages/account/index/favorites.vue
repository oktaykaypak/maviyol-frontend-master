<template>
  <m-card class="account-page-card">
    <h3 class="account-page-card__title">Favoriler</h3>
    <div v-if="list.length > 0">
      <div class="row">
        <div v-for="(item, index) in list" :key="index" class="col-lg-6">
          <div class="favorite-product c-pointer">
            <div
              class="favorite-product__image"
              :lazy-background="
                item.photos[0] &&
                ($device.isMobile
                  ? item.photos[0].image.small
                  : item.photos[0].image.medium)
              "
            >
              <span
                class="remove-button c-pointer text-white font-weight-semibold"
                @click="unFavorite(item.id)"
                >Kaldır</span
              >
            </div>
            <div class="favorite-product__content">
              <div class="d-flex mb-1 align-items-center">
                <div
                  v-if="item.guestCapacity > 0"
                  class="d-flex mb-1 align-items-center f-14"
                >
                  <m-svg
                    icon="user-icon"
                    class="mb-1 mr-2"
                    width="18"
                    height="18"
                  />
                  <span class="text-night-blue"
                    >Misafir: {{ item.guestCapacity }}</span
                  >
                </div>
                <div
                  v-if="item.cabinCount > 0"
                  class="d-flex mb-1 align-items-center f-14"
                >
                  <m-svg
                    icon="cabin-icon"
                    class="mb-1 mx-2"
                    width="18"
                    height="18"
                  />
                  <span class="text-night-blue"
                    >Kabin: {{ item.cabinCount }}</span
                  >
                </div>
              </div>
              <div class="d-flex mb-1">
                <div v-if="item.beam" class="d-flex pr-4">
                  <span class="text-primary font-weight-semibold pr-2 f-14"
                    >Liman</span
                  >
                  <span class="f-14">
                    {{ item.harbours.length > 0 && item.harbours[0].city.name }}
                  </span>
                </div>
                <div v-if="item.beam" class="d-flex pr-4">
                  <span class="text-primary font-weight-semibold pr-2 f-14"
                    >Uzunluk</span
                  >
                  <span class="f-14">{{ item.beam }} m</span>
                </div>
              </div>
              <div style="padding-bottom: 8px">
                <ul class="d-flex text-night-blue">
                  <li class="mr-2 font-weight-semibold f-14">760 €</li>
                  <li class="font-weight-semibold f-14">9 Kişilik</li>
                </ul>
              </div>
              <div
                class="w-100 d-flex justify-content-between align-items-center"
              >
                <div class="text-night-blue f-14">
                  {{ item.name }}
                </div>
                <div class="font-weight-semibold f-14">
                  {{ item.harbours.length > 0 && item.harbours[0].city.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <m-pagination :last-page="lastPage" @set-page="getFavorites" />
    </div>
    <span v-if="list.length == 0 && !isLoading">
      Herhangi bir favori tekneniz yok,
      <n-link to="/tekne-kiralama" class="text-primary text-decoration-none"
        >buradan</n-link
      >
      seçebilirsiniz
    </span>
  </m-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Favorites',
  data() {
    return {
      lastPage: 0,
      list: [],
      isLoading: false,
    }
  },
  computed: {
    ...mapGetters({
      getFavouriteCount: 'user/getFavouriteCount',
    }),
  },
  created() {
    this.getFavorites()
  },
  methods: {
    async getFavorites(page = 1) {
      this.isLoading = true
      try {
        const { data } = await this.$repositories.account.getFavorites(page)
        console.log(data)
        this.list = data.data
        this.lastPage = data.lastPage
        window.scrollTo(0, 0)
      } catch (e) {
        this.$nuxt.error({ statusCode: 404 })
      }
      this.isLoading = false
    },
    async unFavorite(productId) {
      try {
        await this.$repositories.product.unFavorite(productId)
        this.$store.commit(
          'user/updateFavouriteCount',
          this.getFavouriteCount - 1
        )

        this.list = this.list.filter((product) => product.id !== productId)
      } catch (error) {
        this.$toast.error('Bir hata meydana geldi.')
      }
    },
  },
  head() {
    return {
      title: 'Favoriler',
    }
  },
}
</script>

<style lang="scss" scoped>
.favorite-product {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
  height: 325px;
  justify-content: space-between;

  .remove-button {
    border: red;
    background-color: #1370fb;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.589);
    padding: 4px 7px;
    border-radius: 10%;
    transition: all ease 0.5s;
    &:hover {
      background-color: #0052cc;
    }
  }

  &__image {
    background: url('~assets/images/default-placeholder-image.png');
    background-size: cover !important;
    background-position: center !important;
    height: 200px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 8px;
  }

  &__content {
    padding: 8px;
  }
}
</style>
