export default ({ $axios }) => {
  return {
    deleteDocument(boatId) {
      return $axios.delete(`/backoffice/boat/${boatId}/seaworthiness-document`)
    },
  }
}
