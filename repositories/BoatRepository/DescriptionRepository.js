export default ({ $axios }) => ({
  getDescription(boatId) {
    return $axios.get(`/backoffice/boat/${boatId}/description`)
  },

  updateDescription(data, boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/description`, data)
  },
})
