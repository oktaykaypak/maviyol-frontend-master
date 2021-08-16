<template>
  <m-modal ref="modal" name="register-modal" class="auth-modal" no-card>
    <div class="auth-modal__content">
      <div class="auth-modal__header">
        <div class="auth-modal__close" @click="$refs.modal.hide()">
          <img src="~/assets/icons/close.svg" />
        </div>
        <span class="pb-3">Hızlı kayıt olun</span>
        <div class="d-flex">
          <m-button
            class="mr-2 p-3 auth-modal__auth-btn auth-modal__auth-btn--facebook"
          >
            <img
              src="~/assets/images/facebook-logo.png"
              alt="Facebook ile giriş yap"
            />
            <span>Facebook</span>
          </m-button>
          <m-button
            class="p-3 auth-modal__auth-btn auth-modal__auth-btn--google"
          >
            <img
              src="~/assets/images/google-logo.png"
              alt="Facebook ile giriş yap"
            />
            <span>Google</span>
          </m-button>
        </div>
      </div>
      <div class="auth-modal__body">
        <div class="auth-modal__form">
          <span class="pb-4 d-block text-center"
            >ya da kullanıcı bilgilerinizle giriş yapın</span
          >
          <validation-observer ref="form">
            <form
              autocomplete="off"
              class="px-4"
              @submit.prevent="handleSubmit"
            >
              <m-form-group>
                <m-input
                  v-model="form.name"
                  placeholder="Ad Soyad"
                  name="name"
                  title="Ad Soyad"
                  icon-name="user"
                  rules="required|max:32"
                  sm
                />
              </m-form-group>
              <m-form-group>
                <m-input
                  v-model="form.email"
                  name="email"
                  placeholder="E-Mail"
                  title="E-Mail"
                  icon-name="envelope"
                  rules="required|max:255|email"
                  sm
                />
              </m-form-group>
              <m-form-group>
                <m-input
                  v-model="form.password"
                  name="password"
                  type="password"
                  title="Şifre"
                  placeholder="Şifre"
                  icon-name="lock"
                  rules="required|min:6"
                  autocomplete="current-password"
                  sm
                />
              </m-form-group>
              <m-form-group v-if="type == 'renter'">
                <m-tel-input v-model="form.phone" variant="shadow" sm />
              </m-form-group>
              <m-form-group class="mb-30">
                <div class="d-flex">
                  <m-radio v-model="type" class="mr-2" name="type" option="user"
                    >Kullanıcı</m-radio
                  >
                  <m-radio v-model="type" name="type" option="renter"
                    >Kiralayıcı</m-radio
                  >
                </div>
              </m-form-group>
              <m-form-group class="mb-4">
                <m-checkbox
                  v-model="form.confirmed"
                  name="confirmed"
                  rules="checked"
                  title="Bu"
                  >Gizlilik politikalarını kabul ediyorum.</m-checkbox
                >
              </m-form-group>
              <div
                class="d-flex align-items-center justify-content-center mb-4"
              >
                <m-button
                  variant="primary"
                  class="px-5 font-weight-semibold"
                  type="submit"
                  :disabled="isLoading"
                  >KAYIT OL</m-button
                >
              </div>
            </form>
          </validation-observer>
          <div class="w-100 font-weight-semibold text-center">
            <span class="text-black"> Zaten üye misiniz? </span>
            <span
              class="c-pointer text-primary"
              @click="$modal.show('login-modal')"
              >Giriş Yapın</span
            >
          </div>
        </div>
      </div>
    </div>
  </m-modal>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        phone: {
          code: '',
          number: '',
        },
        confirmed: false,
      },
      type: 'user',
      isLoading: false,
    }
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()

      if (!isValid) return
      this.isLoading = true

      const { name, email, password, phone } = this.form
      let payload
      if (this.type === 'user') {
        payload = {
          name,
          email,
          password,
        }
      } else if (this.type === 'renter') {
        payload = {
          name,
          email,
          password,
          phoneCode: phone.code,
          phoneNumber: phone.number,
        }
      }

      try {
        await this.$repositories.auth.register(payload, this.type)
        await this.$repositories.account.getUser()
        this.$modal.hide('register-modal')
        Object.assign(this.$data, this.$options.data.apply(this))
      } catch (error) {
        this.$validation.setErrors(this.$refs.form, error)
      }
      this.isLoading = false
    },
  },
}
</script>
