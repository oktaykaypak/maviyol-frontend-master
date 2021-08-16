<template>
  <div class="mb-3">
    <ul class="breadcrumb">
      <li v-for="(item, index) in breadcrumb" :key="index">
        <span v-if="index + 1 === breadcrumb.length">{{ item.name }}</span>
        <a v-else :href="item.url">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import countries from '~/types/countries'
import localeUrl from '~/types/localeUrl'
import location from '~/mixins/location'
export default {
  mixins: [location],
  computed: {
    ...mapGetters({
      type: 'search/getType',
      harbour: 'search/getHarbour',
      country: 'search/getCountry',
    }),
  },
  data() {
    return {
      localeUrl,
      breadcrumb: [],
    }
  },
  created() {
    this.breadcrumb = this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      const defaultUrl =
        this.currentLanguage === 'tr'
          ? `/${localeUrl[this.$i18n.locale][this.type]}`
          : `/en/${localeUrl[this.$i18n.locale][this.type]}`
      const list = []
      list.push({
        url: this.currentLanguage === 'tr' ? '/' : '/en',
        name: this.$t('boat_detail_breadcrumb_home_page'),
      })
      list.push({
        url: defaultUrl,
        name: this.$t('boat_filter_' + String(this.type).toLowerCase()),
      })
      if (this.country && this.country.name && this.$route.params.location) {
        list.push({
          url: `${defaultUrl}/${
            countries[this.$i18n.locale][this.country.slug] || this.country.slug
          }`,
          name: this.$t('boat_detail_breadcrumb_location_turkey'),
        })
      }
      if (this.harbour && this.harbour.name) {
        list.push({ url: '', name: this.harbour.name })
      }
      return list
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';
.breadcrumb {
  display: flex;
  list-style-type: none;
  margin-bottom: 1rem;

  @include bp(tablet) {
    margin-top: 20px;
    width: 100%;
    overflow-x: scroll;
    padding-bottom: 10px;

    li {
      a,
      span {
        font-size: 12px;
        color: var(--dusk) !important;
      }

      &:not(:last-child)::after {
        margin: 0 5px !important;
      }
    }
  }

  li {
    display: flex;
    align-items: center;
    font-size: 14px;

    span,
    a {
      color: var(--dark-blue);
      font-weight: 500;
      white-space: nowrap;
    }

    a {
      text-decoration: none;
    }

    &:not(:last-child)::after {
      content: '';
      background: url('~assets/icons/angle-icon.svg') no-repeat center;
      background-size: cover;
      display: flex;
      margin: 0 10px;
      width: 11px;
      height: 8px;
      transform: rotate(-90deg);
    }
  }
}
</style>
