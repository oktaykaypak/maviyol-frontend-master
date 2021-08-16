export default ({ $axios }) => ({
  publishBoat(boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/publish`)
  },

  unpublishBoat(boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/unpublish`)
  },
})
