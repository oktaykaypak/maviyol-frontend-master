<template>
  <div class="home-campaigns__item">
    <div class="home-campaigns__item-img"></div>
    <div class="home-campaigns__item-text">
      <span class="font-weight-semibold">Marmaris</span>
      <div class="d-flex justify-content-between">
        <span>8 Gün 7 Gece</span>
        <span class="text-primary font-weight-semibold">780 €</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-campaigns__item {
  width: 100%;
  display: grid;
  grid-template: 1fr 80px / 1fr;
  height: 300px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  overflow: hidden;

  &-img {
    background: url('~assets/images/banner.webp');
    background-size: cover !important;
    background-position: center !important;
  }

  &-text {
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
