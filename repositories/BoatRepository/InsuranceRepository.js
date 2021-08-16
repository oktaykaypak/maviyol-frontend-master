export default ({ $axios }) => ({
  updateInsurance(data, boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/insurance`, data)
  },
  getInsurance(boatId) {
    return $axios.get(`/backoffice/boat/${boatId}/insurance`)
  },
})
