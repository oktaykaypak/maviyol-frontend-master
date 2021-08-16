export default ({ $axios }) => ({
  getEquipments(boatId) {
    return $axios.get(`/backoffice/boat/${boatId}/inventory`)
  },
  getEquipmentsAsGroup() {
    return $axios.get(`/inventories/group`)
  },
  newEquipment(equipmentId, boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/inventory/new`, {
      inventory: equipmentId,
    })
  },
  deleteEquipment(equipmentId, boatId) {
    return $axios.delete(`/backoffice/boat/${boatId}/inventory/${equipmentId}`)
  },
})
