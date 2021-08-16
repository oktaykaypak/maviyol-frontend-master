<template>
  <div class="add-boat">
    <div class="add-boat__sidebar">
      <AddBoatSidebar />
    </div>
    <div>
      <component :is="currentStep" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const steps = [
  () => import('~/components/pages/AddBoat/Steps/General/index'),
  () => import('~/components/pages/AddBoat/Steps/Description'),
  () => import('~/components/pages/AddBoat/Steps/Equipment'),
  () => import('~/components/pages/AddBoat/Steps/Photos'),
  () => import('~/components/pages/AddBoat/Steps/Calendar'),
  () => import('~/components/pages/AddBoat/Steps/Pricing'),
  () => import('~/components/pages/AddBoat/Steps/ReservationSettings'),
  () => import('~/components/pages/AddBoat/Steps/Insurance'),
  () => import('~/components/pages/AddBoat/Steps/Extra'),
  () => import('~/components/pages/AddBoat/Steps/Discount'),
]

export default {
  middleware: ['authenticated', 'renter'],
  head() {
    return {
      title: this.isEdit ? 'Düzenle' : 'Teknenizi Kaydedin',
    }
  },
  computed: {
    ...mapGetters({
      step: 'add-boat/getStep',
      isEdit: 'add-boat/isEdit',
      getStep: 'add-boat/getStep',
      getTransactionId: 'add-boat/getTransactionId',
    }),
    currentStep() {
      return steps.find((v, i) => i === this.step) || null
    },
  },
  mounted() {
    this.$store.commit('common/setAppLoading', false)
    this.$store.commit('add-boat/setTotalStep', steps.length)
  },
  async asyncData({ route, store, $cookies, $repositories, error }) {
    if (route.fullPath.includes('edit-boat')) return

    store.commit('add-boat/updateBoat', {})

    const transactionId = $cookies.get('add-boat-transaction-id')

    if (parseInt(route.query['no-cache']) === 1) {
      $cookies.remove('add-boat-transaction-id')
      $cookies.remove('add-boat-last-step')
      return
    }

    if (transactionId) {
      store.commit('add-boat/setTransactionId', transactionId)

      try {
        const res = await $repositories.boat.general.getBoat(transactionId)

        res.data.type = {
          code: res.data.type,
        }
        store.commit('add-boat/updateBoat', res.data)
      } catch (e) {
        $cookies.remove(['add-boat-transaction-id', 'add-boat-last-step'])
        error({ statusCode: 404 })
      }
    }

    store.commit(
      'add-boat/setStep',
      parseInt($cookies.get('add-boat-last-step')) || 0
    )

    store.commit('add-boat/setStatus', '')
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.add-boat {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  padding: 2rem;

  @include bp(tablet) {
    grid-template-columns: 100%;
    padding: 0;

    &__sidebar {
      display: none;
    }
  }
}

@include bp(tablet) {
  .sidebar {
    display: none !important;
  }
}
</style>

<style lang="scss">
@import '~/assets/scss/partials/breakpoints';

.data__table {
  width: 100%;
  display: flex;
  flex-direction: column;

  @include bp(tablet-sm) {
    font-size: 14px;

    &-head {
      display: none;
    }

    &-row {
      grid-template: 1fr / repeat(2, 1fr) !important;
      row-gap: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e2e2e2;
    }

    &-col:nth-child(2) {
      text-align: right;
    }
  }

  &-head &-col {
    font-weight: 600;
    color: var(--dusk);
  }

  &-item {
    margin-bottom: 30px;
  }

  &-row {
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr 0.75rem 1fr;
  }

  &-col {
    white-space: nowrap;

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
      &:first-child {
        margin-right: 10px;
      }
    }
    &:last-child {
      display: flex;
      justify-content: flex-end;
    }
  }

  &-edit {
    border-radius: 6px;
    padding: 30px 20px;
    box-shadow: 0px 0px 3px rgba(33, 37, 41, 0.285129);
    margin-top: 30px;

    &-close {
      cursor: pointer;
      img {
        height: 24px;
        width: 24px;
      }
    }
  }
}

.add-boat {
  &__search-item {
    color: var(--dusk);
    margin-bottom: 15px;
    display: flex;
    align-items: center;

    &:nth-child(1) {
      white-space: nowrap;
    }

    &-remove {
      margin-right: 10px;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
}
</style>
