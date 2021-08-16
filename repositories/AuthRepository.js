export default ({ $axios, $cookies, store }) => ({
  async login(credentials) {
    const res = await $axios.post('/login', credentials)
    const { status, token } = res.data

    if (!status || !token) {
      throw new Error('Response is not valid.')
    }

    if (status) {
      await $cookies.set('token', token)
      store.commit('auth/setLoggedIn', true)
      store.dispatch('auth/onLoggedIn')
    }
  },
  async register(credentials, type) {
    const request = type === 'user' ? '/register' : '/register/renter'
    const res = await $axios.post(request, credentials)
    const { status, token } = res.data

    if (!status || !token) {
      throw new Error('Response is not valid.')
    }

    if (status) {
      await $cookies.remove('token')
      await $cookies.set('token', token)
      store.commit('auth/setLoggedIn', true)
    }
  },
  logout() {
    $cookies.remove('token')
    store.commit('auth/setLoggedIn', false)
    store.commit('user/resetState')
  },
})
