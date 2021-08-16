<template>
  <div class="join-newsletter">
    <div class="d-flex align-items-center mb-lg-0 mb-3">
      <img
        src="~/assets/icons/envelope-opened.svg"
        class="join-newsletter__icon"
        height="40"
        width="40"
      />
      <h5 class="font-weight-normal m-0 join-newsletter__text">
        <span class="text-primary">İndirimlerden haberdar olmak için</span>
        E-Bülten’e abone ol!
      </h5>
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <m-input
        placeholder="E-Mail"
        icon-name="envelope"
        input-class="f-14"
        custom-class="mb-0"
        class="mr-3"
      />
      <m-button
        variant="outline-primary"
        class="text-transform-uppercase font-weight-semibold f-14"
        >Gönder</m-button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.join-newsletter {
  height: 120px;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__icon {
    margin-right: 1.5rem;
  }

  @include bp(tablet-sm) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: auto;
    padding: 2rem 0;

    &__text {
      font-size: 1rem;
    }
  }
}
</style>
