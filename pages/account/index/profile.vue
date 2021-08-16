<template>
  <m-card class="account-page-card">
    <h3 class="account-page-card__title">Profil Ayarları</h3>
    <m-tabs mode="flat">
      <m-tab title="Kişisel Bilgiler" active>
        <AccountProfileEdit />
      </m-tab>
      <m-tab title="Profil Doğrulama" class="verify d-flex">
        <div
          class="verify-left d-flex flex-direction-column align-items-center"
        >
          <div class="verify-left__image">
            <img
              src="~/assets/icons/verify-fail.svg"
              alt=""
              class="verify-left__image-fail"
            />
          </div>
          <p class="verify-left__title">Telefon Doğrulama</p>
          <m-input class="verify-left__input" variant="classic" />
          <m-button variant="primary" class="verify-left__button-approve"
            >Onayla</m-button
          >
          <m-button variant="primary" class="verify-left__button-getcode"
            >Yeni Kod Al</m-button
          >
        </div>
        <div
          class="verify-right d-flex flex-direction-column align-items-center"
        >
          <div class="verify-right__image">
            <img
              src="~/assets/icons/verify-approve.svg"
              alt=""
              class="verify-right__image-success"
            />
          </div>
          <p class="verify-right__title">Mail Doğrulandı</p>
        </div>
      </m-tab>
      <m-tab title="Şifre Değiştir">
        <AccountProfileChangePassword />
      </m-tab>
      <m-tab title="Fotoğraf Yükle" hash="upload-profile-photo">
        <AccountProfilePhotoUpload />
      </m-tab>
    </m-tabs>
  </m-card>
</template>

<script>
export default {
  head() {
    return {
      title: 'Profil Bilgisi',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

// Profil Doğrulama
.verify {
  padding: 100px 0;

  &-left {
    height: 100%;
    flex: 1;
    flex-direction: column;
    padding: 0 50px;

    &__image {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background-color: #fb6340;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }

    &__title {
      font-size: 14px;
      margin-bottom: 10px;
      color: #172b4d;
    }

    &__button-approve {
      width: 100%;
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 5px;
      background-color: #2dce89;
    }

    &__button-getcode {
      background-color: white;
      width: 100%;
      font-size: 14px;
      color: #3282fd;
      font-weight: 400;
    }
  }

  &-right {
    height: 100%;
    flex: 1;
    flex-direction: column;
    padding: 0 50px;

    &__image {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background-color: #2dce89;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }

    &__title {
      font-size: 14px;
      color: #172b4d;
    }
  }
}

@include bp(tablet-sm) {
  .verify {
    flex-direction: column;

    &-right {
      padding-top: 100px;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
