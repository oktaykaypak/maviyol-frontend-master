export default ({ $axios }) => ({
  getDiscount(boatId) {
    return $axios.get(`/backoffice/boat/${boatId}/discount`)
  },
  newDiscount(data, boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/discount/new`, data)
  },
  updateDiscount(data, discountId, boatId) {
    return $axios.post(
      `/backoffice/boat/${boatId}/discount/${discountId}`,
      data
    )
  },
  deleteDiscount(discountId, boatId) {
    return $axios.delete(`/backoffice/boat/${boatId}/discount/${discountId}`)
  },
})
