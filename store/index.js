export const actions = {
  async nuxtServerInit(context, { app: { $repositories } }) {
    await $repositories.account.getUser()
  },
}
// FIXME:
export const strict = false
