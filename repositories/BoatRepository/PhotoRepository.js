export default ({ $axios }) => ({
  getPhotos(boatId) {
    return $axios.get(`/backoffice/boat/${boatId}/photo`)
  },
  uploadPhoto(data, boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/photo/new`, data)
  },
  deletePhoto(photoId, boatId) {
    return $axios.delete(`/backoffice/boat/${boatId}/photo/${photoId}`)
  },
  setCover(photoId, boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/photo/${photoId}/cover`)
  },
})
