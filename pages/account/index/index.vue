<template>
  <m-card class="account-page-card">
    <h3 class="account-page-card__title">Genel Bilgiler</h3>
    <AccountWarningBox v-if="!user.avatar" />

    <div class="row mb-3">
      <div v-if="isRenter" class="col-lg-6">
        <AccountInfoBox name="AKTİF İLANLAR" icon="announcement" value="0" />
      </div>
      <div class="col-lg-6">
        <AccountInfoBox
          name="TOPLAM REZERVASYONLAR"
          icon="toplam-rezervasyonlar"
          value="0"
        />
      </div>
      <div class="col-lg-6">
        <AccountInfoBox
          name="ONAY BEKLEYENLER"
          icon="onaybekleyenler"
          value="0"
        />
      </div>
      <div class="col-lg-6">
        <AccountInfoBox name="YENİ MESAJLAR" icon="new-message" value="0" />
      </div>
      <div class="col-lg-6">
        <AccountInfoBox name="REZERVASYON" icon="reservation" value="0" />
      </div>
      <div v-if="isRenter" class="col-lg-6">
        <AccountInfoBox name="EKSİK İLANLAR" icon="eksikilan" value="0" />
      </div>
      <div v-if="isRenter" class="col-lg-6">
        <AccountInfoBox
          name="YETKİ BEKLEYENLER"
          icon="yetkibekleyenler"
          value="0"
        />
      </div>
      <div v-if="isRenter" class="col-lg-6">
        <AccountInfoBox name="TOPLAM SATIŞ" icon="icon-para" value="0" />
      </div>
    </div>
    <div class="add-boat-btn">
      <m-button
        variant="warning"
        class="px-5 py-3 font-weight-bold"
        href="/add-boat?no-cache=1"
        >BİR TEKNE EKLEYİN</m-button
      >
    </div>
  </m-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'user/getUser',
      isRenter: 'user/isRenter',
    }),
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/partials/breakpoints';

.add-boat-btn {
  display: grid;
  place-items: center;

  @include bp(tablet) {
    button {
      width: 100%;
    }
  }
}
</style>
