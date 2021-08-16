export default ({ $axios, store, $cookies }) => ({
  async getUser() {
    try {
      const response = await $axios.get('/user')
      store.commit('auth/setLoggedIn', true)
      store.commit('user/updateUser', response.data)
    } catch (error) {
      await $cookies.remove('token')
    }
  },

  async editAvatar(data) {
    await $axios.post('/account/avatar', data)
    this.getUser()
  },

  editPassword(data) {
    return $axios.post('/account/password', data)
  },

  async editProfile(data) {
    await $axios.post('/account/profile', data)
  },

  getProfile() {
    return $axios.get('/account/profile')
  },

  editCompany(data) {
    return $axios.post('/account/company', data)
  },

  getCompany() {
    return $axios.get('/account/company')
  },

  getBankAccount() {
    return $axios.get('/account/bank')
  },

  editBankAccount(data) {
    return $axios.post('/account/bank', data)
  },

  getExperienceDetail() {
    return $axios.get('/account/experience')
  },

  editExperienceDetail(data) {
    return $axios.post('/account/experience', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },

  getFavorites(page) {
    return $axios.get(`/account/favourite?page=${page}`)
  },
})
