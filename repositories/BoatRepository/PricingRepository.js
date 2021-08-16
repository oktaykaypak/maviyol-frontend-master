export default ({ $axios }) => ({
  getPricing(boatId) {
    return $axios.get(`/backoffice/boat/${boatId}/season`)
  },
  newPricing(data, boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/season/new`, data)
  },
  updatePricing(data, pricingId, boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/season/${pricingId}`, data)
  },
  deletePricing(pricingId, boatId) {
    return $axios.delete(`/backoffice/boat/${boatId}/season/${pricingId}`)
  },
})
