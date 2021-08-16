import { mapGetters } from 'vuex'
import localeUrl from '~/types/localeUrl'

export default {
  computed: {
    ...mapGetters({
      searchType: 'search/getType',
      filterType: 'filter/getType',
      location: 'search/getLocation',
      date: 'search/getDate',
      captain: 'filter/getCaptain',
    }),
  },
  methods: {
    makeUrlPath() {
      const { searchType, filterType } = this
      const { locale } = this.$i18n
      let defaultPath

      switch (filterType || searchType) {
        case 'GULET':
          defaultPath = localeUrl[locale].GULET
          break
        case 'SAILBOAT':
          defaultPath = localeUrl[locale].SAILBOAT
          break
        case 'MOTORBOAT':
          defaultPath = localeUrl[locale].MOTORBOAT
          break
        case 'CATAMARAN':
          defaultPath = localeUrl[locale].CATAMARAN
          break
        default:
          defaultPath = localeUrl[locale].YACHT
          break
      }

      // if (this.captain === 'WITH_CAPTAIN') {
      //   defaultPath = `${localeUrl[locale].WITH_CAPTAIN}-${defaultPath}`
      // } else if (this.captain === 'WITHOUT_CAPTAIN') {
      //   defaultPath = `${localeUrl[locale].WITHOUT_CAPTAIN}-${defaultPath}`
      // }

      if (locale !== 'tr') {
        defaultPath = `${locale}/${defaultPath}`
      }

      return defaultPath
    },
    search() {
      const path = this.makeUrlPath()

      if (!path) {
        this.$toast.error('URL belirlenemdi.')
        return false
      }

      if (this.location.slug === this.$route.params.location) {
        this.$nuxt.$emit('search-boat-list')
      } else {
        this.$router.push(
          `/${path}/${
            this.location?.slug ||
            String(this.$t('boat_detail_location_turkey')).toLowerCase()
          }`
        )
      }
    },
  },
}
