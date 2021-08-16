<template>
  <m-modal ref="modal" name="login-modal" class="auth-modal" no-card>
    <div class="auth-modal__content">
      <div class="auth-modal__header">
        <div class="auth-modal__close" @click="$refs.modal.hide()">
          <img src="~/assets/icons/close.svg" />
        </div>
        <span class="pb-3">Hızlı giriş yapın</span>
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
        <div class="auth-modal__form pb-0">
          <span class="pb-4 pb-2 d-block text-center"
            >ya da kullanıcı bilgilerinizle giriş yapın</span
          >
          <validation-observer ref="form" class="px-4">
            <form @submit.prevent="handleSubmit">
              <m-form-group>
                <m-input
                  v-model="form.email"
                  placeholder="E-Mail"
                  icon-name="envelope"
                  :sm="true"
                  rules="required|email"
                  title="E-Mail"
                />
              </m-form-group>
              <m-form-group>
                <m-input
                  v-model="form.password"
                  type="password"
                  placeholder="Şifre"
                  icon-name="lock"
                  rules="required"
                  title="Şifre"
                  autocomplete="current-password"
                  :sm="true"
                />
              </m-form-group>
              <m-form-group class="mb-3 mt-2">
                <m-checkbox>Beni Hatırla</m-checkbox>
              </m-form-group>
              <div
                class="d-flex align-items-center justify-content-center mb-4"
              >
                <m-button
                  variant="primary"
                  class="px-5 font-weight-semibold"
                  type="submit"
                  :disabled="isLoading"
                  >GİRİŞ</m-button
                >
              </div>
            </form>
          </validation-observer>
        </div>
        <div
          class="d-flex justify-content-between align-items-center px-4 pb-3"
        >
          <div>
            <n-link
              to="/"
              class="text-decoration-none text-dusk font-weight-semibold"
              >Şifremi Unuttum</n-link
            >
          </div>
          <div>
            <a
              class="text-decoration-none text-dusk font-weight-semibold c-pointer"
              @click="$modal.show('register-modal')"
              >Üye Ol</a
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
        email: '',
        password: '',
      },
      isLoading: false,
    }
  },
  methods: {
    async handleSubmit() {
      const form = await this.$refs.form.validate()

      if (!form) return

      this.isLoading = true

      const { email, password } = this.form
      const payload = { email, password }
      try {
        await this.$repositories.auth.login(payload)
        await this.$repositories.account.getUser()
        this.$router.push('/account')
        this.$modal.hide('login-modal')
        Object.assign(this.$data, this.$options.data.apply(this))
      } catch (e) {
        this.isLoading = false
        if (e?.response?.status === 401) {
          this.$validation.setErrors(this.$refs.form, e)
          return
        } else {
          this.$toast.error('Bir hata meydana geldi.')
        }
      }

      this.isLoading = false
    },
  },
}
</script>
