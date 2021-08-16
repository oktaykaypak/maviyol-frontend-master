<template>
  <m-card
    shadow="soft"
    class="request-warning"
    body-class="d-flex flex-column flex-lg-row justify-content-between align-items-center"
  >
    <div class="mb-lg-0 mb-4">
      <h5
        class="text-white font-weight-semibold"
        style="margin-bottom: 0.25rem !important"
      >
        Aradığınız tekneyi bulamadınız mı?
      </h5>
      <span class="text-white mb-0 font-weight-light"
        >Tatil danışmanlarımızın size en uygun tekneyi bulabilmesi için
        iletişime geçin!</span
      >
    </div>
    <div>
      <m-button
        class="text-warning font-weight-bold px-4 f-14"
        @click="$modal.show('offer-modal')"
        >TALEP OLUŞTUR</m-button
      >
    </div>
    <OfferModal />
  </m-card>
</template>

<script>
import OfferModal from './OfferModal'
export default {
  components: {
    OfferModal,
  },
}
</script>

<style lang="scss" scoped>
.request-warning {
  background: var(--warning);
  margin-bottom: 30px;
  padding: 8px;
}
</style>
