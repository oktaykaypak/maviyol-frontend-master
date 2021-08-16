export default ({ $axios }) => ({
  getBoat(boatId) {
    return $axios.get(`/backoffice/boat/${boatId}`)
  },

  removeBoat(boatId) {
    return $axios.delete(`/backoffice/boat/${boatId}`)
  },

  getBoats(page) {
    return $axios.get(`/backoffice/boat?page=${page}`)
  },

  newBoat(data) {
    return $axios.post('/backoffice/boat/new', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },

  updateBoat(data, boatId) {
    return $axios.post(`/backoffice/boat/${boatId}`, data)
  },
})
