<template>
  <div v-if="isActive"><slot /></div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    hash: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isActive: '',
    }
  },
  mounted() {
    this.isActive = this.active
  },
  methods: {
    setActive(status) {
      this.isActive = status
    },
  },
}
</script>
