<template>
  <div class="d-flex p-3 justify-content-center align-items-center flex-column">
    <div class="mb-4">
      <fa
        :icon="['fas', 'exclamation-circle']"
        class="text-primary"
        style="font-size: 3.5rem"
      />
    </div>
    <div class="mb-4">
      <span class="text-night-blue">
        Hata! İsteklerinize göre sistemimiz aradığınız yat kiralama hizmetini
        bulamıyor. Ancak, tekne tatil ihtiyaçlarınıza en iyi şekilde uyacak
        ücretsiz, özelleştirilmiş bir teklif için lütfen Tatil Planlama
        Uzmanlarımızdan biriyle iletişime geçin.
      </span>
    </div>
    <OfferModal />
    <m-button
      text="Teklif İste"
      class="px-5 py-3 font-weight-semibold"
      variant="warning"
      @click="$modal.show('offer-modal')"
    />
  </div>
</template>

<script>
import OfferModal from './OfferModal'
export default {
  components: {
    OfferModal,
  },
}
</script>
