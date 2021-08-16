<template>
  <div>
    <span v-if="loading">Yükleniyor...</span>
    <div v-if="!loading">
      <div class="row mb-30">
        <div
          v-for="(language, index) in languages"
          :key="index"
          class="col-md-2 col-lg-4 col-12 mb-3"
        >
          <m-checkbox
            :value="value.includes(language.code)"
            variant="classic"
            @change="selectLanguage(index)"
          >
            {{ language.name }}</m-checkbox
          >
        </div>
      </div>
      <validation-provider
        v-slot="{ errors }"
        ref="languages"
        vid="languages"
        rules="required"
        name="Konuşulan Diller"
      >
        <span v-if="errors.length > 0" class="error-text">{{ errors[0] }}</span>
      </validation-provider>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
    },
  },
  data() {
    return {
      loading: false,
      languages: [],
    }
  },
  watch: {
    value: {
      handler() {
        this.updateData()
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    this.getLocales()
  },
  methods: {
    async getLocales() {
      this.loading = true
      try {
        const { data } = await this.$axios.get('/locales')
        if (!data) return false
        this.languages = Object.keys(data).map((v) => {
          return {
            code: v,
            name: data[v],
            selected: this.value.includes(v),
          }
        })
        setTimeout(this.updateData)
      } catch (error) {
        console.error(error)
      }
      this.loading = false
    },
    selectLanguage(targetIndex) {
      this.$refs.languages.reset()
      const { value, languages } = this
      const language = languages[targetIndex]
      const i = value.findIndex((v) => language.code === v)
      if (i !== -1) {
        value.splice(i, 1)
      } else {
        value.push(language.code)
      }
      this.$emit('input', value)
      this.updateData()
    },
    updateData() {
      if (!this.$refs.languages) return
      if (this.value.length > 0) {
        this.$refs.languages.syncValue(this.value.length)
      } else {
        this.$refs.languages.syncValue('')
      }
    },
  },
}
</script>
