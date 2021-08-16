<template>
  <div :class="$style['description-item']">
    <div :class="$style['description-item__image']">
      <img
        :src="require(`~/assets/icons/${image}.svg`)"
        height="35"
        width="35"
        :alt="label"
      />
    </div>
    <div :class="$style['description-item__content']">
      <h5 :class="$style['description-item__label']">{{ label }}</h5>
      <p :class="$style['description-item__text']">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: 'yawl',
    },
    label: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped module>
@import '~/assets/scss/partials/breakpoints';

.description-item {
  display: flex;
  flex-direction: column;

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    background: #fff;
    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.07),
      0 15px 35px 0 rgba(50, 50, 93, 0.1);
    border-radius: 100px;
    margin: 20px 0;
    margin-left: 15%;

    @include bp(tablet) {
      margin-left: 0 !important;
    }
  }

  &__content {
    width: 100%;
  }

  &__label {
    margin-bottom: 10px;
    color: var(--primary);
    font-weight: 600;
  }

  &__text {
    line-height: 1.69;
    font-weight: 300;
  }
}
</style>
