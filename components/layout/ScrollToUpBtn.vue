<template>
  <transition name="fade">
    <button v-show="visible" class="scroll-to-up-btn" @click="scrollToUp">
      Yukarı Çık <m-svg icon="angle-icon-white" />
    </button>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.visible = window.scrollY >= window.innerHeight / 2
    },
    scrollToUp() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.scroll-to-up-btn {
  position: fixed;
  right: 20px;
  bottom: 40px;
  z-index: 90;
  background: #ff671b;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;

  img {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    transform: rotate(180deg);
  }

  &:focus {
    outline: none;
  }
}
</style>
