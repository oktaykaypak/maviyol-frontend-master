import Vue from 'vue'
import VCalendar from 'v-calendar'
import '~/assets/scss/partials/_date-picker.scss'

Vue.use(VCalendar, {
  screens: {
    bigxl: '1540px',
  },
})
