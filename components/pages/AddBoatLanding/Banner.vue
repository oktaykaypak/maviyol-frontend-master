<template>
  <div class="container banner">
    <div class="row py-5">
      <div class="col-lg-6 py-5 info-col">
        <h1 class="text-black mb-4 font-weight-bold">
          Teknenizi Sitemizde Yayınlayın..
        </h1>
        <div class="pr-5">
          <p class="mb-3">
            Siz de tekne veya acenta sahibiyseniz, gemi adamı veya mavi yolculuk
            sektörünün herhangi bir alanında çalışıyorsanız ücretsiz üye
            olabilirsiniz.
          </p>
          <p>
            Geniş kitlelelere çok etkin bir şekilde Teknenizi tanıtmak
            istiyorsanız işte size fırsat hemen bugün Kayıt Olun
          </p>
        </div>
      </div>
      <div class="col-lg-6 py-5 form-col">
        <h3 class="text-black mb-4 font-weight-semibold">Hemen Kayıt Olun</h3>
        <div>
          <m-input
            icon-class="text-black"
            :icon-name="['far', 'user']"
            variant="classic"
            placeholder="Adınız Soyadınız"
            sm
          />
          <m-input
            icon-class="text-black"
            :icon-name="['far', 'envelope']"
            variant="classic"
            placeholder="E-Posta Asresiniz"
            sm
          />
          <m-input
            icon-class="text-black"
            icon-name="phone-alt"
            variant="classic"
            placeholder="Telefon Numaranız"
            sm
          />
          <m-input
            icon-class="text-black"
            icon-name="key"
            variant="classic"
            placeholder="Şifre Giriniz"
            sm
          />
          <m-button
            variant="warning"
            class="font-weight-semibold w-100"
            text="Kayıt Ol"
            style="height: 45px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';
.banner {
  @include bp(tablet-sm) {
    .info-col {
      padding-right: 15px !important;
      border-right: 0 !important  ;
    }

    .form-col {
      padding-left: 15px !important;
    }
  }

  .info-col {
    padding-right: 20px;
    border-right: 1px solid #aeaeae;
  }

  .form-col {
    padding-left: 40px;
  }
}
</style>
