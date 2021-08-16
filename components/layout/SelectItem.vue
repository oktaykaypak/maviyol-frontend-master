<template>
  <div class="departure-port-item">
    <div class="departure-port-item__icon">
      <img src="~/assets/icons/location-mark-icon.svg" />
    </div>
    <div class="departure-port-item__text">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.departure-port-item {
  height: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 60px 1fr;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #f6f9fc;
  }

  &__icon {
    opacity: 0.6;
    display: grid;
    place-items: center;

    img {
      width: 16px;
      height: 16px;
    }
  }

  &__text {
    display: flex;
    align-items: center;
  }
}
</style>
