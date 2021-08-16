<template>
  <div class="account-products">
    <m-card class="account-page-card">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div><h3 class="account-page-card__title mb-0">İlanlar</h3></div>
        <div class="d-flex align-items-center">
          <span>Pasif</span>
          <m-switch class="px-3" />
          <span>Aktif</span>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, index) in boats" :key="index" class="col-lg-6">
          <Boat :item="item" @toggle-product="toggleProduct" />
        </div>
      </div>
      <m-pagination
        v-if="boats.length > 0"
        :last-page="last_page"
        @set-page="setPage"
      />
    </m-card>
  </div>
</template>

<script>
import boatStatusTypes from '~/types/boatStatusTypes'
import Boat from '~/components/pages/Account/Boats/Boat'

export default {
  middleware: 'renter',
  components: {
    Boat,
  },
  data() {
    return {
      boats: [],
      last_page: 0,
    }
  },
  mounted() {
    this.getBoats()
  },
  methods: {
    async getBoats(page = 1) {
      try {
        const response = await this.$repositories.boat.general.getBoats(page)
        if (response?.data) {
          this.boats = response.data.data
          this.last_page = response.data.lastPage
        }
      } catch (error) {
        this.$toast.error('Bir hata meydana geldi.')
      }
    },
    async setPage(page) {
      await this.getBoats(page)
      window.scrollTo(0, 0)
    },
    copyLink(id) {
      navigator.clipboard
        .writeText(window.location.origin + '/boat/' + id)
        .then(
          () => {
            this.$toast.success('Link başarıyla kopyalandı.')
          },
          function () {
            this.$toast.error('Hata.')
          }
        )
    },
    async toggleProduct(item) {
      const requestMethod =
        item.status == boatStatusTypes.PUBLISHED &&
        item.status != boatStatusTypes.DRAFT
          ? 'unpublishBoat'
          : 'publishBoat'
      try {
        await this.$repositories.boat.publish[requestMethod](item.id)

        const boatIdx = this.boats.findIndex((v) => v.id == item.id)

        this.boats[boatIdx].status =
          item.status == boatStatusTypes.PUBLISHED
            ? boatStatusTypes.UNPUBLISHED
            : boatStatusTypes.PUBLISHED

        if (requestMethod == 'publishBoat') {
          this.$toast.success('İlan aktif edildi.')
        } else {
          this.$toast.default('İlan pasif hale getirildi.')
        }
      } catch (error) {
        console.log(error)
        this.$toast.error('Bir hata meydana geldi.')
      }
    },
  },
  head() {
    return {
      title: 'İlanlar',
    }
  },
}
</script>
