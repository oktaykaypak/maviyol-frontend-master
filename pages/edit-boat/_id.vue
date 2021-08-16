<template>
  <AddBoat />
</template>

<script>
import AddBoat from '~/pages/add-boat'
export default {
  components: {
    AddBoat,
  },
  async asyncData({ params, store, error, $repositories }) {
    const { id } = params
    if (!id) {
      error({ statusCode: 404 })
      return
    }
    store.commit('common/setAppLoading', true)
    store.commit('add-boat/setStep', 0)
    store.commit('add-boat/setTransactionId', id)

    try {
      const res = await $repositories.boat.general.getBoat(id)

      res.data.type = {
        code: res.data.type,
      }
      store.commit('add-boat/setStatus', 'edit')
      store.commit('add-boat/updateBoat', res.data)
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
}
</script>
