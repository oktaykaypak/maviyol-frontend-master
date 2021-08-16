export const state = () => ({
  isLoggedIn: false,
})

export const actions = {
  async onLoggedIn() {
    try {
      await this.$repositories.product.favoriteBatch(
        this.$favorite.getAllFavorites()
      )
      this.$favorite.resetFavorites()
      await this.$repositories.account.getUser()
    } catch (error) {
      console.error('Favourite batch error: ' + error)
    }
  },
}

export const mutations = {
  setLoggedIn(state, value) {
    state.isLoggedIn = value
  },
}

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
}
