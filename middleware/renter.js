export default function ({ store, redirect }) {
  if (!store.getters['user/isRenter']) {
    redirect('/account')
  }
}
