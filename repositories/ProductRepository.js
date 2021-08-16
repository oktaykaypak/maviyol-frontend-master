export default ({ $axios }) => ({
  checkFavoritesByBoatIds(ids = []) {
    if (ids.length === 0) return
    const formData = new FormData()
    for (const id of ids) {
      formData.append('id[]', id)
    }
    return $axios.get(
      `/favourite-check?` + new URLSearchParams(formData).toString()
    )
  },
  favorite(boatId) {
    return $axios.post(`/boat/${boatId}/favourite`)
  },

  unFavorite(boatId) {
    return $axios.post(`/boat/${boatId}/unfavourite`)
  },
  favoriteBatch(ids) {
    if (ids.length === 0) return
    const formData = new FormData()
    for (const id of ids) {
      formData.append('boat[]', id)
    }
    return $axios.post(
      `/boat/favourite/batch?` + new URLSearchParams(formData).toString()
    )
  },
})
