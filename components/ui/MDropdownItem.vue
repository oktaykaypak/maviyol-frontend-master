<template>
  <div class="m-dropdown__item" @click="onClick"><slot /></div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClick(e) {
      const { to } = this
      if (to) {
        this.$router.push(to)
      }
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
.m-dropdown__item {
  color: #212529;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
