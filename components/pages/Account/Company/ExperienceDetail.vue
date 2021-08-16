<template>
  <div ref="form" class="row pt-3">
    <m-form-group label="Hakkımda" class="col-lg-12">
      <m-input
        v-model="form.about"
        title="Hakkımda"
        type="textarea"
        name="about"
        variant="classic"
      />
    </m-form-group>
    <m-form-group label="Yetkinlik Belgesi" class="col-lg-6">
      <m-uploader
        v-model="form.document"
        :multiple="false"
        rules="ext:pdf,png,jpg,jpeg,docx"
        name="document"
        title="Sigorta Belgesi"
      />
    </m-form-group>
    <div class="company col-12 d-flex justify-content-end">
      <m-button
        variant="primary"
        class="px-5 py-3 font-weight-bold"
        :disabled="isLoading"
        @click="handleSubmit"
        >Kaydet</m-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      form: {
        about: '',
        document: '',
      },
    }
  },
  created() {
    this.getExperienceDetails()
  },
  methods: {
    async handleSubmit() {
      this.isLoading = false
      const payload = new FormData()
      this.form.about && payload.append('about', this.form.about)
      this.form.document.length > 0 &&
        payload.append('document', this.form.document[0])
      try {
        await this.$repositories.account.editExperienceDetail(payload)
        this.$toast.success('Yetkinlik bilgileri başarıyla güncellendi.')
      } catch (error) {
        this.$validation.setErrors(this.$refs.form, error)
      }
      this.isLoading = false
    },
    async getExperienceDetails() {
      try {
        const res = await this.$repositories.account.getExperienceDetail()
        this.form = res.data
      } catch {
        this.$toast.error('Bir hata meydana geldi')
      }
    },
  },
}
</script>
