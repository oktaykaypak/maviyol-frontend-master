export const state = () => ({
  isAccountSidebarOpen: false,
})

export const mutations = {
  setAccountSidebar(state, value) {
    state.isAccountSidebarOpen = value
  },
}

export const getters = {
  isAccountSidebarOpen: (state) => state.isAccountSidebarOpen,
}
