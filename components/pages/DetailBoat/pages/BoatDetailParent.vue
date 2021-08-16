<template>
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
</template>

<script>
import BoatDetailGeneral from '@/components/pages/DetailBoat/pages/BoatDetailGeneral'
import BoatDetailComments from '@/components/pages/DetailBoat/pages/BoatDetailComments'
import BoatDetailFaq from '@/components/pages/DetailBoat/pages/BoatDetailFaq'
import BoatDetailOffers from '@/components/pages/DetailBoat/pages/BoatDetailOffers'
import BoatDetailRent from '@/components/pages/DetailBoat/pages/BoatDetailRent'
import BoatDetailRefund from '@/components/pages/DetailBoat/pages/BoatDetailRefund'

export default {
  components: {
    general: BoatDetailGeneral,
    comments: BoatDetailComments,
    faq: BoatDetailFaq,
    offers: BoatDetailOffers,
    rent: BoatDetailRent,
    refund: BoatDetailRefund,
  },
  props: {
    currentComponent: {
      type: String,
      default: 'general',
    },
  },
}
</script>
