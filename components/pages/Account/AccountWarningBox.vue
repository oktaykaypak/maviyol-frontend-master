<template>
  <div class="account-warning d-flex flex-column flex-lg-row">
    <div class="account-warning-left d-flex flex-column mb-lg-0 mb-2">
      <p class="account-warning-left-title">Profil Fotoğrafı Ekleyin</p>
      <p class="account-warning-left-subtitle">
        Bu kullanıcıların sizi daha kolay tanımasını sağlar.
      </p>
    </div>
    <div class="account-warning-right d-flex">
      <img
        class="account-warning-right-mobile"
        src="~/assets/icons/arrow-point-to-right.png"
        alt="Mobile"
      />
      <n-link to="/account/profile#upload-profile-photo" class="w-100">
        <m-button variant="outline-primary" class="account-warning-right-button"
          >Fotoğraf Ekle</m-button
        >
      </n-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.account-warning {
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 22px 0 22px 36px;
  margin-bottom: 30px;

  &-right {
    flex: 1;
    align-items: center;
    padding-right: 30px;

    &-button {
      width: 100%;
      background: #2dce89;
      border: 1px solid #2dce89;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08),
        0px 4px 6px rgba(50, 50, 93, 0.11);
      font-weight: bold;
      font-size: 14px;
      line-height: 19px;
      padding: 0;
      text-align: center;
      color: #ffffff;
      height: 43px;
    }

    &-mobile {
      display: none;
    }
  }

  &-left {
    flex: 2;

    &-title {
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      color: #172b4d;
      margin-bottom: 9px;
    }

    &-subtitle {
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      color: #172b4d;
    }
  }
}
</style>
