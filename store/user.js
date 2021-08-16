import { DateTime } from 'luxon'

export const state = () => ({
  user: {
    favouriteCount: 0,
  },
})

export const mutations = {
  updateUser(state, value) {
    state.user = value
  },
  updateAvatar(state, value) {
    state.user.avatar = value
  },
  updateFavouriteCount(state, value) {
    state.user.favouriteCount = !value ? 0 : value
  },
  resetState(oldState) {
    Object.assign(oldState, state())
  },
}

const userTypeEnum = Object.freeze({
  CHARTER: 'CHARTER',
  BROKER: 'BROKER',
  USER: 'USER',
})

export const getters = {
  getUser: (state) => state.user,
  getAvatar: (state) => {
    /*
      @refactor
      default profile picture needs to come from server
    */
    const photo = require('~/assets/images/example-user.png')
    return (
      state.user.avatar || {
        medium: photo,
      }
    )
  },
  getBirthday: (state) => {
    const { c } = DateTime.fromISO(state.user.birthday)

    if (!c) {
      return null
    }

    return {
      year: c.year,
      month: c.month,
      day: c.day,
    }
  },
  isRenter: (state) => {
    return (
      state.user.type === userTypeEnum.CHARTER ||
      state.user.type === userTypeEnum.BROKER
    )
  },
  isUser: (state) => {
    return state.user.type === userTypeEnum.USER
  },
  getFavouriteCount: (state, getters) => {
    return state.user.favouriteCount
  },
}
