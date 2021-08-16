<template>
  <div style="background: #fcfcfc">
    <div
      class="container d-flex justify-content-between align-items-center py-5 flex-lg-row flex-column"
    >
      <div class="d-flex align-items-center mb-lg-0 mb-4">
        <img
          src="~/assets/images/call-center.png"
          height="150"
          width="180"
          alt="Çağrı Merkezi"
          class="mr-3"
        />
        <div>
          <h4 class="text-black mb-2 d-flex align-items-center">
            Üye ekibimiz sizi dinliyor
            <m-svg icon="smile-success" class="ml-3" />
          </h4>
          <p class="text-black">
            iletişim bilgilerinizi bırakın deneyimli üye ekibimiz sizi arasın
          </p>
        </div>
      </div>
      <div class="position-relative callme-input-wrapper">
        <m-input
          style="margin-bottom: -30px"
          icon-class="text-black"
          icon-name="phone-alt"
          placeholder="Telefon Numaranız"
          variant="classic"
          sm
        />
        <span class="callme-btn">Beni Arayın</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.callme-input-wrapper {
  width: 250px;
  @include bp(tablet-sm) {
    width: 100%;
  }
}

.callme-btn {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background: var(--success);
  color: #fff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  padding: 0 6px;
  font-weight: 600;
  white-space: nowrap;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: var(--success-darken);
  }
}
</style>
