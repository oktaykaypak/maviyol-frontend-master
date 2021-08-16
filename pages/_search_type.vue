<template>
  <nuxt-child :key="$route.fullPath" />
</template>

<script>
import { mapGetters } from 'vuex'
import localeUrl from '~/types/localeUrl'

export default {
  name: 'SearchType',
  computed: {
    ...mapGetters({
      getList: 'search/getList',
    }),
  },
  /*
    FIXME: we may separate this logic to functions
  */
  asyncData({ params, error, redirect, app, store }) {
    const { location } = params
    const { locale } = app.i18n
    if (!localeUrl[locale]) error({ statusCode: 404 })
    // get current locale's possible urls
    const localeUrls = localeUrl[locale]
    // all possible search types as array of values
    const currentLocaleUrls = Object.values(localeUrls)
    const paramArr = params.search_type.split('-')
    // if splitted text's length is 3, we're getting first index as feature
    const feature = paramArr.length === 3 ? paramArr[0] : ''

    // if feature is exists we're getting 1th and 2th indexes,
    // if is not we're getting only search type slug
    const searchType = feature
      ? paramArr[1] + '-' + paramArr[2]
      : params.search_type

    if (
      !currentLocaleUrls.includes(searchType) ||
      (feature && !currentLocaleUrls.includes(feature)) ||
      (feature && location)
    ) {
      return error({ statusCode: 404 })
    }

    // getting type as code
    const type = Object.keys(localeUrls).find(
      (value) => localeUrls[value] === searchType && value
    )

    store.commit('search/updateType', type)
    if (type !== 'YACHT') {
      store.commit('filter/updateType', type)
    }

    if (feature) {
      const findFeature = Object.keys(localeUrls).find(
        (value) => localeUrls[value] === feature && value
      )
      store.commit('filter/updateCaptain', findFeature)
    }

    // if (!location ) {
    //    redirect(feature ? `/${feature}-${searchType}` : `/${searchType}`)
    // }
  },
}
</script>
