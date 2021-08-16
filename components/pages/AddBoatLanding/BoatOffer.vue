<template>
  <div class="py-5">
    <div
      class="container d-flex justify-content-center align-items-center flex-column"
    >
      <h3 class="text-black text-center mb-2">
        Farklı tipte bir tekneniz mi var?
      </h3>
      <p class="text-black text-center w-50 mb-5">
        “üzülmeyin yakın zamanda tüm tekne türleri(jet-ski ,zodyak vb.) sisteme
        eklenebilecek.Size haber vermemiz için iletişim bilgilerini
        doldurabilirsiniz)”
      </p>
      <div class="boat-type-form">
        <m-input
          icon-class="text-black"
          :icon-name="['far', 'user']"
          :sm="true"
          variant="classic"
          placeholder="Adınız Soyadınız"
        />
        <m-input
          icon-class="text-black"
          :icon-name="['far', 'envelope']"
          :sm="true"
          variant="classic"
          placeholder="E-Posta Adresiniz"
        />
        <m-input
          icon-class="text-black"
          icon-name="phone-alt"
          :sm="true"
          variant="classic"
          placeholder="Telefon Numaranız"
        />
        <m-button
          variant="warning"
          class="w-100 font-weight-semibold"
          text="Beni Arayın"
          style="height: 50px"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.boat-type-form {
  width: 300px;
}
</style>
