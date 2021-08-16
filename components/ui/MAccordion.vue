<template>
  <div>
    <div @click="onClickHeading">
      <slot name="heading" :isActive="isActive" />
    </div>
    <transition name="fade">
      <div v-show="isActive">
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    onlyMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: this.onlyMobile && !this.$device.isMobile,
    }
  },
  methods: {
    onClickHeading() {
      if (this.onlyMobile && !this.$device.isMobile) return
      this.isActive = !this.isActive
    },
  },
}
</script>
