export default ({ $axios }) => ({
  getReservationSettings(boatId) {
    return $axios.get(`/backoffice/boat/${boatId}/reservation`)
  },
  updateReservationSettings(data, boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/reservation`, data)
  },
})
