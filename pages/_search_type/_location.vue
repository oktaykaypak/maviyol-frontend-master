<template>
  <div class="search-page">
    <Header />
    <div class="container-lg">
      <div class="search-page__row">
        <Sidebar v-if="!$device.isMobile" />
        <Content />
      </div>
    </div>
    <div class="container-lg">
      <PopularDestinations />
      <Faq />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import countries from '~/types/countries'

import Sidebar from '~/components/pages/Search/Sidebar'
import Content from '~/components/pages/Search/Content'
import Header from '~/components/pages/Search/Header/index'

import Faq from '~/components/layout/Faq'
import PopularDestinations from '~/components/layout/PopularDestinations'

export default {
  name: 'Location',
  components: {
    Sidebar,
    Content,
    Faq,
    Header,
    PopularDestinations,
  },
  async asyncData({ params, app, $repositories, error, store }) {
    const { location } = params
    const { locale } = app.i18n
    const country = Object.keys(countries[locale]).find(
      (key) => countries[locale][key] === location
    )

    try {
      const { data } = await $repositories.search.getLocation(
        // default turkey
        countries.en[country] || location || 'turkey'
      )

      // FIXME: country slug to current locale slug
      if (data.country && data.country.slug) {
        data.country.slug = countries.en[country]
      }

      if (data.type === 'HARBOUR') {
        store.commit('search/updateHarbour', data.harbour)
        store.commit('search/updateCountry', data.harbour.country)
        store.commit('search/updateLocation', data.harbour)
      } else if (data.type === 'COUNTRY') {
        store.commit('search/updateHarbour', {})
        store.commit('search/updateCountry', data.country)
        // FIXME: it causes infinite search request because of listener of country
        // store.commit('search/updateLocation', data.country)
      }

      store.commit('search/updateLocationType', data.type)

      return {
        title: data.title,
        description: data.description,
      }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  data() {
    return {
      title: '',
      description: '',
    }
  },
  mounted() {
    this.$nuxt.$on('search-boat-list', this.search)
    this.search()
  },
  beforeDestroy() {
    this.$nuxt.$off('search-boat-list')
  },
  computed: {
    ...mapGetters({
      filter: 'filter/getFilter',
      list: 'search/getList',
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
  methods: {
    async search(page = 1) {
      this.$store.commit('search/updateLoading', true)
      const {
        harbour,
        type,
        country,
        locationType,
        date: { start, end },
      } = this.$store.state.search

      const payload = {
        page,
        start,
        end,
      }

      if (locationType === 'COUNTRY') {
        payload.country = country.slug
      } else if (locationType === 'HARBOUR') {
        payload.harbour = harbour.slug
      }

      if (type !== 'YACHT') {
        payload.type = type
      }

      const { filter } = this
      Object.keys(filter).map((key) => {
        if (!filter[key]) return

        if (Array.isArray(filter[key]) && filter[key].length === 2) {
          const camelCaseKey = key.charAt(0).toUpperCase() + key.slice(1)
          payload['min' + camelCaseKey] = filter[key][0]
          payload['max' + camelCaseKey] = filter[key][1]
        } else if (filter[key]?.length) {
          payload[key] = filter[key]
        }
      })

      try {
        const result = await this.$repositories.search.searchBoats(payload)
        this.$store.commit('search/updateList', result.data.data)
        this.$store.commit('search/updateLastPage', result.data.lastPage)
        this.$store.commit('search/updateCount', result.data.count)

        if (this.isLoggedIn) {
          this.checkFavorites()
        } else {
          this.$store.commit(
            'search/updateFavorites',
            this.$favorite.getAllFavorites()
          )
        }

        window.scrollTo(0, 0)
      } catch (e) {
        this.$nuxt.error({ statusCode: 404 })
      }

      this.$store.commit('search/updateLoading', false)
    },
    async checkFavorites() {
      const ids = this.list.map((v) => v.id)
      if (ids.length === 0) return
      try {
        const result = await this.$repositories.product.checkFavoritesByBoatIds(
          ids
        )
        this.$store.commit(
          'search/updateFavorites',
          Object.keys(result.data)
            .filter((v) => result.data[v] === true)
            .map(Number)
        )
      } catch (error) {
        console.error('checkFavorites: ' + error)
      }
    },
  },
  head() {
    return {
      title: this.title,
      description: this.description,
    }
  },
}
</script>

<style lang="scss">
.search-page {
  &__card-title {
    font-size: 1.1rem;
    color: var(--night-blue);
    font-weight: bold;
  }
}
.container-lg {
  @media (max-width: 1200px) {
    max-width: 100% !important;
  }

  @media (min-width: 1200px) {
    max-width: 1170px !important;
  }
}
</style>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.search-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 30px;
  padding-top: 1.5rem;

  @include bp(tablet) {
    padding-top: 0;
  }

  &__row {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 15px;
    margin-bottom: 50px;
  }

  @media (max-width: 1000px) {
    &__row {
      grid-template-columns: 100% !important;

      .search-page__filters {
        display: none;
      }
    }
  }
}
</style>
