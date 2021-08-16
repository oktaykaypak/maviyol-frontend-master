export default {
  computed: {
    currentLanguage() {
      return this.$i18n.localeProperties.code
    },
  },
}
