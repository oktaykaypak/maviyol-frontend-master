<template>
  <div :class="$style['account-info-box']">
    <div :class="$style['account-info-box__image-col']">
      <m-svg :icon="icon" />
    </div>
    <div :class="$style['account-info-box__text-col']">
      <h3 :class="$style['account-info-box__value']">{{ value }}</h3>
      <span :class="$style['account-info-box__label']">{{ name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    icon: String,
    value: String,
  },
}
</script>

<style lang="scss" scoped module>
.account-info-box {
  border: 1px solid #dee2e6;
  border-radius: 4px;
  height: 90px;
  width: 100%;
  display: grid;
  grid-template-columns: 90px 1fr;
  margin-bottom: 30px;

  &__image-col {
    display: grid;
    place-items: center;

    img {
      width: 36px;
      height: 36px;
    }
  }

  &__text-col {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  &__value {
    margin-bottom: 5px;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1;
  }

  &__label {
    font-size: 14px;
  }
}
</style>
