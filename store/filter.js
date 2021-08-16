// if you want to send min-max value, you have to set an array
// search method will replace to minCabin and maxCabin

const state = () => ({
  cabin: [],
  amount: [],
  length: [],
  constructionYear: [],
  guestCapacity: [],
  captain: '',
  renter: '',
  type: '',
  sort: '',
  order: '',
  isFiltered: false,
})

const mutations = {
  updateCaptain(state, value) {
    state.captain = value
  },
  updateCabin(state, value) {
    state.cabin = value
  },
  updateAmount(state, value) {
    state.amount = value
  },
  updateConstructionYear(state, value) {
    state.constructionYear = value
  },
  updateLength(state, value) {
    state.length = value
  },
  updateRenter(state, value) {
    state.renter = value
  },
  updateType(state, value) {
    state.type = value
  },
  updateIsFiltered(state, value) {
    state.isFiltered = value
  },
  updateGuestCapacity(state, value) {
    state.guestCapacity = value
  },
  updateSort(state, value) {
    state.sort = value
  },
  updateOrder(state, value) {
    state.order = value
  },
  resetState(oldState) {
    Object.assign(oldState, state())
  },
}

const getters = {
  getCabin: (state) => state.cabin,
  getCaptain: (state) => state.captain,
  getFilter: (state) => state,
  getRenter: (state) => state.renter,
  getType: (state) => state.type,
  isFiltered: (state) => state.isFiltered,
}

export default {
  state,
  mutations,
  getters,
}
