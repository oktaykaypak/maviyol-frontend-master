export default {
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    open() {
      this.isVisible = true
    },
    hide() {
      setTimeout(() => {
        this.isVisible = false
      })
    },
  },
}
