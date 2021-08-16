export const state = () => ({
  windowInnerWidth: 0,
  isAppLoading: false,
})

export const mutations = {
  setWindowInnerWidth(state, value) {
    state.windowInnerWidth = value
  },
  setAppLoading(state, value) {
    state.isAppLoading = value
  },
}

export const getters = {
  isMobileLg: (state) => state.windowInnerWidth <= 993,
  isMobile: (state) => state.windowInnerWidth <= 575,
  getWindowInnerWidth: (state) => state.windowInnerWidth,
  isAppLoading: (state) => state.isAppLoading,
}
