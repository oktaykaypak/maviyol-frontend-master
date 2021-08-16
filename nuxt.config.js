export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  server: {
    host: '0.0.0.0',
    port: '3000',
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Maviyyo',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Maviyyo',
      },
      {
        name: 'robots',
        content: 'noindex',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/scss/fonts.scss', '~/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/helpers.js',
    '~/plugins/vue-toast-notifications.js',
    '~/plugins/axios',
    '~/plugins/modal',
    '~/plugins/repository.js',
    '~/plugins/v-click-outside.client.js',
    '~/plugins/vee-validate.js',
    '~/plugins/vue-flickity.client.js',
    '~/plugins/vuescroll.client.js',
    '~/plugins/vue-tel-input.client.js',
    '~/plugins/v-calendar.client.js',
    '~/plugins/vue-slider-component.client.js',
    '~/plugins/reactive-size.client.js',
    '~/plugins/vue-awesome-swiper.client.js',
    '~/plugins/v-tooltip.client.js',
    '~/plugins/favorite.js',
    '~/plugins/vue-slick-carousel.js',
    '~/plugins/vue-chart.js',
    '~/plugins/v-select.js',
    '~/plugins/vuelidate.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/svg',
    '@nuxtjs/pwa',
    '@nuxtjs/device',

    // 'nuxt-purgecss',
  ],

  purgeCSS: {
    whitelistPatterns: [/svg.*/],
    purgeCSSInDev: true,
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faChevronUp',
        'faChevronRight',
        'faHeart',
        'faBell',
        'faEnvelope',
        'faStar',
        'faLock',
        'faUser',
        'faChevronDown',
        'faAngleDown',
        'faCheck',
        'faLink',
        'faChevronLeft',
        'faSignOutAlt',
        'faExclamationCircle',
        'faTimes',
        'faPaw',
        'faFilter',
        'faSortAmountDown',
        'faBars',
        'faPhoneAlt',
        'faKey',
        'faLifeRing',
        'faMapMarkerAlt',
        'faBath',
        'faArrowsAltH',
        'faCalendarDay',
        'faShareAlt',
        'faArrowLeft',
        'faPlus',
        'faCreditCard',
        'faMinus',
        'faAssistiveListeningSystems',
        'faHourglassHalf',
        'faTextWidth',
        'faHandHoldingWater',
        'faRulerHorizontal',
        'faQuoteRight',
        'faWindowRestore',
        'faUniversalAccess',
        'faToilet',
        'faFan',
        'faHistory',
      ],
      brands: [
        'faTwitter',
        'faFacebookSquare',
        'faPiedPiperHat',
        'faCodepen',
        'faWhatsapp',
      ],
      regular: [
        'faStar',
        'faUserCircle',
        'faCalendarAlt',
        'faEnvelope',
        'faHeart',
        'faUser',
        'faClone',
        'faWindowRestore',
        'faCreditCard',
        'faCopyright',
        'faCheckCircle',
      ],
    },
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    'vue-social-sharing/nuxt',
    [
      'nuxt-lazy-load',
      {
        directiveOnly: true,
      },
    ],
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_and_default',
        defaultLocale: 'tr',
        lazy: true,
        parsePages: false,
        pages: {
          'tekne/_id': {
            en: '/boat/:id',
          },
        },
        langDir: 'locales/',
        locales: [
          {
            code: 'en',
            name: 'English',
            file: 'en-US.js',
          },
          {
            code: 'tr',
            name: 'Türkçe',
            file: 'tr-TR.js',
          },
        ],
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://64.227.123.170',
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */

  build: {
    // babel: {
    //   plugins: ['@babel/plugin-proposal-optional-chaining'],
    // },

    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[hash:base64:4]',
        },
      },
    },

    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },

    transpile: ['vee-validate/dist/rules'],

    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : 'app.[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : 'chunk.[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : 'main.[contenthash].css'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]'),
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]',
    },
  },

  loading: {
    color: '#fff',
  },

  manifest: {
    name: 'Maviyyo',
    short_name: 'Maviyyo',
    lang: 'tr',
    display: 'standalone',
  },
}
