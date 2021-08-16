import { DateTime } from 'luxon'

const state = () => ({
  date: {
    start: null,
    end: null,
    iso: '',
  },
  location: {
    id: '',
    slug: '',
    name: '',
  },
  harbour: {
    id: '',
    slug: '',
    name: '',
  },
  country: {
    id: '',
    name: '',
    slug: '',
  },
  list: [],
  type: '',
  lastPage: '',
  count: '',
  isLoading: true,
  // HARBOUR - COUNTRY
  locationType: null,
  favorites: [],
})

const mutations = {
  updateType(state, value) {
    state.type = value
  },
  updateLocation(state, value) {
    state.location = value
  },
  updateList(state, value) {
    state.list = value
  },
  updateStartDate(state, value) {
    state.date.start = value
  },
  updateEndDate(state, value) {
    state.date.end = value
  },
  updateDateIso(state, value) {
    state.date.iso = value
  },
  updateLastPage(state, value) {
    state.lastPage = value
  },
  updateCount(state, value) {
    state.count = value
  },
  updateHarbour(state, value) {
    state.harbour = value
  },
  updateCountry(state, value) {
    state.country = value
  },
  updateLoading(state, value) {
    state.isLoading = value
  },
  resetState(oldState) {
    Object.assign(oldState, state())
  },
  updateLocationType(state, value) {
    state.locationType = value
  },
  updateFavorites(state, value) {
    state.favorites = value
  },
}

const getters = {
  getType: (state) => state.type,
  getLocation: (state) => state.location,
  getList: (state) => state.list,
  getStartDate: (state) => state.date.start,
  getEndDate: (state) => state.date.end,
  getIsoDate: (state) => state.date.iso,
  getLastPage: (state) => state.lastPage,
  getCount: (state) => state.count,
  getHarbour: (state) => state.harbour,
  getCountry: (state) => state.country,
  getLoading: (state) => state.isLoading,
  getFavorites: (state) => state.favorites,
  getReadableDate: (state) => {
    const { start, end } = state.date
    if (!start && !end) return 'Her Zaman'
    let startStr = ''
    let endStr = ''
    let yearStr = ''

    const startDate = new Date(start)
    const endDate = new Date(end)

    if (start) {
      startStr = DateTime.fromJSDate(startDate).day
      if (end && startDate.getMonth() !== endDate.getMonth()) {
        startStr += ' ' + DateTime.fromJSDate(startDate).monthShort
      }
    }

    if (end) {
      endStr +=
        endDate.getDate() + ' ' + DateTime.fromJSDate(endDate).monthShort
    }

    if (endDate.getFullYear() === startDate.getFullYear()) {
      yearStr = startDate.getFullYear()
    }

    return startStr + ' - ' + endStr + ' ' + yearStr
  },
}

export default {
  state,
  mutations,
  getters,
}
