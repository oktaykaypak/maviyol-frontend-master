<template>
  <m-card shadow="soft" class="faq-item" body-class="faq-item__body">
    <div class="faq-item__icon-col">?</div>
    <div class="faq-item__text-col">
      <span class="font-weight-semibold text-night-blue"
        >Tekne nasıl kiralanır?</span
      >
      <transition name="fade">
        <p v-show="open" class="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
          sapiente, similique? At doloremque, dolorum eligendi eum hic impedit
          incidunt iste minima nostrum nulla provident, quas repellendus sed
          sunt vel! Earum?
          <br />
          Dolorum eligendi eum hic impedit incidunt iste minima nostrum nulla
          provident, quas repellendus sed sunt vel! Earum?
        </p>
      </transition>
    </div>
    <div
      class="faq-item__toggle-col"
      :class="{ 'faq-item__toggle-col--open': open }"
    >
      <span class="c-pointer" @click="open = !open">
        <m-svg icon="angle-icon" height="12" />
      </span>
    </div>
  </m-card>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {
    show() {
      this.open = true
    },
    hide() {
      this.open = false
    },
  },
}
</script>

<style lang="scss">
.faq-item {
  margin-bottom: 30px;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  &__body {
    display: flex;
    flex-direction: row;
  }

  &__icon-col {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__text-col {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__toggle-col {
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;

    &--open {
      transform: rotate(180deg);
    }
  }
}
</style>
