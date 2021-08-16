export default ({ $axios, $cookies, store }, inject) => {
  const func = () =>
    store.commit('common/setWindowInnerWidth', window.innerWidth)
  window.addEventListener('resize', func)
  func()
}
