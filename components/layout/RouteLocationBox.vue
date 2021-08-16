<template>
  <n-link to="" class="route-location-box">
    <div class="route-location-box__content">
      <span class="route-location-box__title">Fethiye</span>
    </div>
  </n-link>
</template>

<style lang="scss">
.route-location-box {
  padding: 16px;
  border-radius: 4px;
  background: lightgray;
  // background: #172b4d url('~assets/images/banner.webp') no-repeat center;
  background-size: cover !important;
  height: 100%;
  position: relative;
  text-decoration: none;
  display: block;
  overflow: hidden;

  &__content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 0, 0, 0.4)
    );
    padding: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  &__title {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
