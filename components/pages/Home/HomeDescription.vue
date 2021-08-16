<template>
  <div class="description">
    <div class="container">
      <div class="description__info">
        <HomeDescriptionItem
          image="yawl"
          label="En İyi Fiyat Garantisi"
          text="Komisyon yok , Ücretsiz ekstra bir ücret ödemezsiniz, gördüğünüz fiyat ödediğiniz fiyattır."
        />

        <HomeDescriptionItem
          image="mermaid"
          label="Ücretsiz İptal Garantisi"
          text="Rezervasyon sonrasında 2 günlük ücretsiz iptal süresi"
        />

        <HomeDescriptionItem
          image="mermaid"
          label="En büyük Avantaj"
          text="İsteğe Bağlı kaptanlı ve kaptansız sigortalı ve doğrulanmış tekneler."
        />

        <HomeDescriptionItem
          image="sailing-wheel"
          label="7/24 Müşteri Hizmetleri"
          text="Tekne Tatil ekiplerinden oluşan çok dilli ekip."
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.description {
  margin-bottom: 40px;

  &__subtitle {
    font-weight: 300;
    display: flex;
    flex-direction: row;

    @include bp(tablet) {
      flex-direction: column;

      div {
        padding: 10px 0 !important;
      }
    }

    div {
      padding: 0 4px;
      span {
        text-decoration: underline;
      }
    }
  }

  &__info {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @include bp(tablet) {
      grid-template-columns: 1fr !important;
    }
  }
}
</style>
