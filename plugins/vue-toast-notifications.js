import Vue from 'vue'
import VueToast from 'vue-toast-notification'
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css'
import '@/assets/scss/toast.scss'
Vue.use(VueToast, {
  position: 'top-right',
})
