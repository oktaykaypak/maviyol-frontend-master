export default (ctx, inject) => {
  const { store } = ctx.app
  const modal = {
    add(name) {
      store.commit('modal/add', name)
    },
    show(target) {
      document.body.style.overflow = 'hidden'
      store.dispatch('modal/show', target)
    },
    hide(target) {
      document.body.style.overflow = 'auto'
      store.commit('modal/hide', target)
    },
  }
  inject('modal', modal)
}
