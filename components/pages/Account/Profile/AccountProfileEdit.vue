<template>
  <validation-observer ref="form" tag="form" class="row pt-3">
    <m-form-group label="Ad" class="col-lg-6">
      <m-input
        v-model="form.name"
        variant="classic"
        rules="required|min:2"
        title="Ad"
      />
    </m-form-group>
    <m-form-group label="Doğum Tarihiniz" class="col-lg-6">
      <m-date-input v-model="form.birthday" />
    </m-form-group>
    <m-form-group label="E-Posta" class="col-lg-6">
      <m-input
        v-model="form.email"
        variant="classic"
        rules="required|email"
        title="E-Posta"
      />
    </m-form-group>
    <m-form-group label="Şehir" class="col-lg-6">
      <suggestion-input
        v-model="form.city"
        rules="required"
        name="Şehir"
        :request="$repositories.suggestion.city"
      />
    </m-form-group>

    <m-form-group label="Telefon" class="col-lg-6">
      <m-tel-input v-model="form.phone" name="phoneCode" />
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
        variant="classic"
        rules="required"
        title="Adres"
      />
    </m-form-group>

    <m-form-group label="Konuşulan Diller" class="col-lg-12">
      <spoken-languages v-model="form.spokenLanguages" />
    </m-form-group>
    <div class="col-12 d-flex justify-content-end">
      <m-button
        class="px-5 font-weight-semibold"
        variant="primary"
        :disabled="isLoading"
        @click="handleSubmit"
        >KAYDET</m-button
      >
    </div>
  </validation-observer>
</template>

<script>
import { mapGetters } from 'vuex'
import SpokenLanguages from '~/components/pages/AddBoat/Steps/General/SpokenLanguages'

export default {
  components: {
    SpokenLanguages,
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
    }),
  },
  data() {
    return {
      form: {
        name: '',
        birthday: '',
        email: '',
        phone: {},
        postalCode: '',
        address: '',
        city: { id: '' },
        spokenLanguages: [],
      },
      isLoading: false,
    }
  },
  mounted() {
    this.getProfile()
  },
  methods: {
    async handleSubmit() {
      const { form } = this.$refs
      const validate = await form.validate()
      if (!validate) {
        this.$validation.focusFirstError()
        return false
      }
      this.isLoading = true
      const {
        phone,
        city,
        email,
        birthday,
        name,
        postalCode,
        address,
        spokenLanguages,
      } = this.form
      const payload = {
        name,
        phoneCode: phone.code,
        phoneNumber: phone.number,
        city: city.id,
        birthday: birthday.iso,
        email,
        postalCode,
        address,
        spokenLanguages,
      }
      try {
        await this.$repositories.account.editProfile(payload)
        this.$toast.success('Profil başarıyla güncellendi.')
      } catch (error) {
        this.$validation.setErrors(this.$refs.form, error)
      }
      this.isLoading = false
    },
    async getProfile() {
      try {
        const result = await this.$repositories.account.getProfile()
        if (result.data) {
          const {
            address,
            birthday,
            city,
            email,
            name,
            postalCode,
            phoneCode,
            phoneNumber,
            spokenLanguages,
          } = result.data
          this.form = {
            name,
            email,
            address,
            birthday,
            city,
            phone: {
              code: phoneCode || '',
              number: phoneNumber || '',
            },
            postalCode,
            spokenLanguages,
          }
        }
      } catch (error) {
        this.$toast.error('Kullanıcı bilgileri çekilemedi.')
      }
    },
  },
}
</script>
