export default {
  data() {
    return {
      windowHeight: null,
      windowWidth: null,
    }
  },
  computed: {
    getResData() {
      return {
        w: this.windowWidth,
        h: this.windowHeight,
      }
    },
    getResWidthType() {
      const width = this.windowWidth
      return width < '576'
        ? 'xsm'
        : width >= '1200'
        ? 'xl'
        : width >= '992'
        ? 'lg'
        : width >= '768'
        ? 'md'
        : width >= '576'
        ? 'sm'
        : 'none'
    },
  },
  mounted() {
    this.windowHeight = window.innerHeight
    this.windowWidth = window.innerWidth

    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
    })
  },
}
