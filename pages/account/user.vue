<template>
  <div class="container panel d-flex flex-column">
    <h3 class="panel__title">Kullanıcı Paneli</h3>
    <m-tabs class="panel__tabs">
      <m-tab
        class="panel__tabs-profile d-flex flex-column"
        title="Profil"
        active
      >
        <h3 class="profile__title">Kişisel Bilgiler</h3>
        <div class="row">
          <div class="col-lg-6">
            <m-form-group label="İsim">
              <m-input placeholder="İsim" variant="classic"></m-input>
            </m-form-group>
          </div>
          <div class="col-lg-6">
            <m-form-group label="Soyisim">
              <m-input placeholder="Soyisim" variant="classic"></m-input>
            </m-form-group>
          </div>
          <div class="col-lg-6">
            <m-form-group label="Telefon">
              <m-input placeholder="Telefon" variant="classic"></m-input>
            </m-form-group>
          </div>
          <div class="col-lg-6">
            <m-form-group label="E-Mail">
              <m-input placeholder="E-Mail" variant="classic"></m-input>
            </m-form-group>
          </div>
          <div class="col-lg-12">
            <m-button
              variant="outline-primary"
              class="profile__submit font-weight-bold"
              >Bilgileri Kaydet</m-button
            >
          </div>
        </div>
      </m-tab>
      <m-tab class="panel__tabs-changepw" title="Şifre Değiştir">
        <h3 class="changepw__title">Şifre Bilgileri</h3>
        <div class="row">
          <div class="col-lg-6">
            <m-form-group label="Eski Şifre">
              <m-input placeholder="Eski Şifre" variant="classic"></m-input>
            </m-form-group>
          </div>
          <div class="col-lg-6">
            <m-form-group label="Şifre Tekrar">
              <m-input placeholder="Şifre Tekrar" variant="classic"></m-input>
            </m-form-group>
          </div>
          <div class="col-lg-12">
            <m-button
              variant="outline-primary"
              class="changepw__submit font-weight-bold"
              >Bilgileri Kaydet</m-button
            >
          </div>
        </div>
      </m-tab>
    </m-tabs>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.panel {
  padding: 50px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07),
    0 15px 4px 0 rgba(50, 50, 93, 0.01);
  margin-top: 50px;
  margin-bottom: 120px;

  &__title {
    color: #32325d;
    font-size: 26px;
    font-weight: bold;
    line-height: 36px;
  }
}

.changepw,
.profile {
  &__title {
    margin: 40px 0 24px 0;
    color: #172b4d;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
  }
}

.col-lg-12 {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
  margin-top: 60px;
  padding: 0 !important;

  .changepw__submit,
  .profile__submit {
    background-color: var(--primary);
    color: #fff;
  }
}

@include bp(mobile) {
  .changepw__submit,
  .profile__submit {
    width: 100%;
  }

  .panel {
    margin-top: 0 !important;
    margin-bottom: 60px !important;
    padding: 20px !important;
  }
}
</style>
