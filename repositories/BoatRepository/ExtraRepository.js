export default ({ $axios }) => ({
  getExtras(boatId) {
    return $axios.get(`/backoffice/boat/${boatId}/extra`)
  },
  newExtra(data, boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/extra/new`, data)
  },
  deleteExtra(extraId, boatId) {
    return $axios.delete(`/backoffice/boat/${boatId}/extra/${extraId}`)
  },
  updateExtra(data, extraId, boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/extra/${extraId}`, data)
  },
})
