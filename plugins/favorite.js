export default ({ store, $nuxt }, inject) => {
  inject('favorite', {
    toggle(id) {
      let storage = this.getAllFavorites()
      if (storage.includes(id)) {
        storage = storage.filter((v) => v !== id)
      } else {
        storage.push(id)
      }
      store.commit('search/updateFavorites', storage)
      store.commit('user/updateFavouriteCount', storage.length)
      localStorage.setItem('favourites', JSON.stringify(storage))
    },
    getAllFavorites() {
      const storage = JSON.parse(localStorage.getItem('favourites'))
      return storage?.length ? storage : []
    },
    resetFavorites() {
      localStorage.setItem('favourites', JSON.stringify([]))
    },
  })
}
