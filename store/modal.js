export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, value) {
    state.list.push({ name: value, active: false })
  },
  show(state, name) {
    state.list = state.list.map((item) => {
      item.active = item.name === name
      return item
    })
  },
  hide(state, value) {
    state.list = state.list.map((item) => {
      if (item.name === value) {
        item.active = false
      }
      return item
    })
  },
}

export const actions = {
  show({ commit, getters: { getList } }, v) {
    const modal = getList.find((x) => x.name === v)
    if (!modal) {
      console.warn('modal not found')
      return false
    }
    commit('show', v)
  },
}

export const getters = {
  getList: (state) => state.list,
}
