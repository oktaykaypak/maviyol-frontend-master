<template>
  <div class="bg-white">
    <PageBanner title="Teknenizi Kiralayalım" />
    <Banner />
    <HowCanIBook />
    <Info />
    <Presentation />
    <Faq />
    <Boats />
    <BoatOffer />
    <CallCenter />
  </div>
</template>

<script>
import PageBanner from '~/components/layout/PageBanner'
import Banner from '~/components/pages/AddBoatLanding/Banner'
import HowCanIBook from '~/components/pages/AddBoatLanding/HowCanIBook'
import Info from '~/components/pages/AddBoatLanding/Info'
import Presentation from '~/components/pages/AddBoatLanding/Presentation'
import Boats from '~/components/pages/AddBoatLanding/Boats'
import BoatOffer from '~/components/pages/AddBoatLanding/BoatOffer'
import CallCenter from '~/components/pages/AddBoatLanding/CallCenter'
import Faq from '~/components/pages/AddBoatLanding/Faq'

export default {
  components: {
    PageBanner,
    Banner,
    HowCanIBook,
    Info,
    Presentation,
    Boats,
    CallCenter,
    BoatOffer,
    Faq,
  },
}
</script>

<style lang="scss">
.properties-heading {
  line-height: 30px;
}

strong {
  font-weight: 600;
}
</style>
