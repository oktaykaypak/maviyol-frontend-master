<template>
  <validation-observer ref="form" class="pt-4 row">
    <m-form-group label="IBAN" class="col-lg-6">
      <m-input
        v-model="form.iban"
        title="IBAN"
        name="iban"
        rules="required|iban"
        variant="classic"
      />
    </m-form-group>
    <m-form-group label="Swift Kodu" class="col-lg-6">
      <m-input
        v-model="form.swiftCode"
        title="Swift Kodu"
        name="swiftCode"
        variant="classic"
      />
    </m-form-group>
    <m-form-group label="Banka Adı" class="col-lg-6">
      <m-input
        v-model="form.name"
        title="Banka Adı"
        name="name"
        rules="required"
        variant="classic"
      />
    </m-form-group>
    <m-form-group label="Hesap Sahibi Adı" class="col-lg-6">
      <m-input
        v-model="form.accountHolderName"
        title="Hesap Sahibi Adı"
        name="accountHolderName"
        rules="required"
        variant="classic"
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
  </validation-observer>
</template>

<script>
export default {
  data() {
    return {
      form: {
        iban: '',
        swiftCode: '',
        name: '',
        accountHolderName: '',
      },
      isLoading: false,
    }
  },
  created() {
    this.getBankAccount()
  },
  methods: {
    async handleSubmit() {
      const valid = await this.$refs.form.validate()
      if (!valid) return false
      this.isLoading = true
      const { iban, swiftCode, name, accountHolderName } = this.form
      const payload = {
        iban,
        swiftCode,
        name,
        accountHolderName,
      }

      try {
        await this.$repositories.account.editBankAccount(payload)
        this.$toast.success('Banka bilgileri başarıyla güncellendi.')
      } catch (error) {
        this.$validation.setErrors(this.$refs.form, error)
      }
      this.isLoading = false
    },
    async getBankAccount() {
      try {
        const res = await this.$repositories.account.getBankAccount()
        this.form = res.data
      } catch {
        this.$toast.error('Banka bilgileri getirilemedi.')
      }
    },
  },
}
</script>
