<template>
  <div class="pt-4">
    <div class="pb-3">
      <span>Charter yapıyorsanız, bu bilgileri doldurmanızda fayda var.</span>
    </div>
    <validation-observer ref="form" class="row">
      <m-form-group class="col-lg-6" label="Şirket Ünvanı">
        <m-input
          v-model="form.name"
          name="name"
          variant="classic"
          rules="required"
          title="Şirket Ünvanı"
        />
      </m-form-group>
      <m-form-group label="Vergi Dairesi" class="col-lg-6">
        <m-input
          v-model="form.taxAdministration"
          variant="classic"
          name="taxAdministration"
          rules="required"
          title="Vergi Dairesi"
        />
      </m-form-group>
      <m-form-group label="Vergi Numarası" class="col-lg-6">
        <m-input
          v-model="form.taxNumber"
          variant="classic"
          name="taxNumber"
          rules="required"
          title="Vergi Numarası"
        />
      </m-form-group>
      <m-form-group label="Web Sitesi" class="col-lg-6">
        <m-input
          v-model="form.website"
          variant="classic"
          name="website"
          rules="required"
          title="Web Sitesi"
        />
      </m-form-group>
      <m-form-group label="Şehir" class="col-lg-6">
        <suggestion-input
          v-model="form.city"
          :request="$repositories.suggestion.city"
          rules="required"
          name="Şehir"
        />
      </m-form-group>
      <m-form-group label="Posta Kodu" class="col-lg-6">
        <m-input
          v-model="form.postalCode"
          variant="classic"
          rules="required|numeric"
          title="Posta Kodu"
        />
      </m-form-group>
      <m-form-group label="Adres" class="col-12">
        <m-input
          v-model="form.address"
          type="textarea"
          variant="classic"
          title="Adres"
          rules="required"
        />
      </m-form-group>
      <div class="company col-12 d-flex justify-content-end">
        <m-button
          variant="primary"
          class="company__button px-5 py-3 font-weight-bold"
          :disabled="isLoading"
          @click="onSubmit"
          >Kaydet</m-button
        >
      </div>
    </validation-observer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        city: {
          id: '',
        },
        name: '',
        taxAdministration: '',
        taxNumber: '',
        address: '',
        postalCode: '',
        website: '',
      },
      isLoading: false,
    }
  },
  created() {
    this.getCompany()
  },
  methods: {
    async onSubmit() {
      const valid = await this.$refs.form.validate()
      if (!valid) return

      this.isLoading = true
      try {
        const {
          city,
          name,
          taxAdministration,
          taxNumber,
          postalCode,
          address,
          website,
        } = this.form
        const payload = {
          city: city.id,
          name,
          taxAdministration,
          taxNumber,
          postalCode,
          address,
          website,
        }
        await this.$repositories.account.editCompany(payload)
        this.$toast.success('Şirket bilgileri başarıyla kaydedildi.')
      } catch (error) {
        this.$validation.setErrors(this.$refs.form, error)
      }
      this.isLoading = false
    },
    async getCompany() {
      try {
        const response = await this.$repositories.account.getCompany()
        if (response.data) {
          this.form = {
            ...this.form,
            ...response.data,
          }
        }
      } catch (error) {
        console.error(error)
        this.$toast.error('Bir hata meydana geldi')
      }
    },
  },
}
</script>
