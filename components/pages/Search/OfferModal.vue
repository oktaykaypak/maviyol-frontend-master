<template>
  <m-modal
    name="offer-modal"
    :no-card="true"
    body-class="offer-modal__body"
    class="offer-modal"
    :hide-header="true"
  >
    <div class="offer-modal__header">
      <div class="col d-flex justify-content-center align-items-center">
        <h4 class="text-white font-weight-semibold mb-0">Tekne Talebi</h4>
      </div>
      <div class="d-flex c-pointer" @click="$modal.hide('offer-modal')">
        <fa
          class="text-white"
          style="font-size: 22px"
          :icon="['fas', 'times']"
        />
      </div>
    </div>
    <div
      v-if="isSubmitted"
      class="py-5 d-flex flex-column align-items-center justify-content-center w-100"
    >
      <m-svg icon="success-approval" width="60" height="60" class="mb-3" />
      <span class="text-black d-block">Mesajın için teşekkürler!</span>
      <span class="text-black d-block mb-4 w-100 text-center"
        >En kısa zaman içerisinde sizinle iletişime geçeceğiz.
      </span>

      <m-button class="px-5 font-weight-bold" variant="primary" @click="hide"
        >Kapat</m-button
      >
    </div>
    <div v-if="!isSubmitted" class="p-3">
      <validation-observer ref="form">
        <span class="f-14 d-block mb-3">
          Bize hayalenizdeki tekne tatili hakkında daha fazla bilgi verin, size
          uygun kişiselleştirilmiş teklifler göndereceğiz.
        </span>
        <h6 class="mb-3 text-night-blue font-weight-bold">
          İletişim Bilgileri
        </h6>
        <div class="row mb-3">
          <m-form-group class="col-lg-6">
            <m-input
              v-model="form.name"
              rules="required"
              name="name"
              placeholder="Ad Soyad"
              variant="classic"
              title="Ad Soyad"
            />
          </m-form-group>
          <m-form-group class="col-lg-6">
            <m-input
              v-model="form.email"
              rules="required|email"
              name="email"
              placeholder="E-Posta Adresi"
              variant="classic"
              title="E-Posta Adresi"
            />
          </m-form-group>

          <m-form-group class="col-lg-6">
            <v-date-picker
              v-model="form.start"
              :masks="{ input: 'DD-MM-YYYY' }"
              color="indigo"
            >
              <template v-slot="{ inputValue, togglePopover }">
                <m-input
                  interaction-mode="passive"
                  rules="required"
                  placeholder="Başlangıç"
                  variant="classic"
                  title="Başlangıç"
                  :value="inputValue"
                  readonly
                  @focus="togglePopover({ placement: 'bottom', top: 0 })"
                />
              </template>
            </v-date-picker>
          </m-form-group>
          <m-form-group class="col-lg-6">
            <v-date-picker
              v-model="form.end"
              :masks="{ input: 'DD-MM-YYYY' }"
              color="indigo"
            >
              <template v-slot="{ inputValue, togglePopover }">
                <m-input
                  interaction-mode="passive"
                  rules="required"
                  placeholder="Bitiş"
                  title="Bitiş"
                  variant="classic"
                  :value="inputValue"
                  readonly
                  @focus="togglePopover({ placement: 'bottom', top: 0 })"
                />
              </template>
            </v-date-picker>
          </m-form-group>
          <m-form-group class="col-lg-6">
            <m-tel-input
              v-model="form.phone"
              rules="required"
              placeholder="Telefon Numarası"
              variant="classic"
              title="Telefon"
            />
          </m-form-group>
        </div>
        <h6 class="mb-3 text-night-blue font-weight-bold">Gezi Bilgileri</h6>
        <div class="row">
          <div class="col-lg-6">
            <m-checkbox
              v-model="form.needsCaptain"
              variant="classic"
              class="mb-3"
              >Bir kaptana ihtiyacım var.</m-checkbox
            >
          </div>
          <div class="col-12">
            <div class="row">
              <m-form-group class="col-lg-6" label="Liman">
                <suggestion-input
                  v-model="form.harbour"
                  :request="$repositories.suggestion.harbour"
                  rules="required_id"
                  title="Şehir"
                  name="harbour"
                />
              </m-form-group>
              <m-form-group class="col-lg-3" label="Kişi Sayısı">
                <m-select
                  v-model="form.guestCapacity"
                  :options="getPeopleCountOptions"
                  rules="required"
                  title="Kişi"
                  placeholder=""
                />
              </m-form-group>
              <m-form-group class="col-lg-3" label="Kabin Sayısı">
                <m-select
                  v-model="form.cabinCount"
                  :options="getCabinCountOptions"
                  rules="required"
                  title="Kabin"
                  placeholder=""
                />
              </m-form-group>
            </div>
          </div>
          <div class="col-12">
            <m-input
              v-model="form.message"
              type="textarea"
              placeholder="Mesajınız."
              variant="classic"
            />
          </div>
          <div
            class="col-12 d-flex align-items-center justify-content-center mb-3"
          >
            <m-button
              class="px-5 font-weight-bold"
              variant="primary"
              :disabled="isLoading"
              @click="submit"
              >Gönder</m-button
            >
          </div>
        </div>
      </validation-observer>
    </div>
  </m-modal>
</template>

<script>
import { mapGetters } from 'vuex'
import { format } from 'date-fns'

export default {
  data() {
    return {
      isSubmitted: false,
      isLoading: false,
      form: {
        email: '',
        name: '',
        phone: {
          code: '',
          number: '',
        },
        start: '',
        end: '',
        harbour: {
          id: '',
        },
        guestCapacity: '',
        cabinCount: '',
        message: '',
        needsCaptain: false,
      },
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
      isLoggedIn: 'auth/isLoggedIn',
    }),
    getPeopleCountOptions() {
      return Array(12)
        .fill()
        .map((v, i) => ({ value: i + 1, text: i + 1 }))
    },
    getCabinCountOptions() {
      return Array(24)
        .fill()
        .map((v, i) => ({ value: i + 1, text: i + 1 }))
    },
  },
  mounted() {
    if (this.isLoggedIn) {
      this.form.email = this.user.email
      this.form.name = this.user.name
    }
  },
  methods: {
    async submit() {
      const validate = await this.$refs.form.validate()
      if (!validate) {
        this.$validation.focusFirstError()
        return false
      }
      this.isLoading = true
      const payload = {
        ...this.form,
        phoneCode: this.form.phone.code,
        phoneNumber: this.form.phone.number,
        harbour: this.form.harbour.id,
        start: format(new Date(this.form.start), 'yyyy-MM-dd'),
        end: format(new Date(this.form.end), 'yyyy-MM-dd'),
      }

      delete payload.phone
      try {
        await this.$axios.post('/offer-request', payload)
        this.isSubmitted = true
      } catch (error) {
        this.$validation.setErrors(this.$refs.form, error)
      }
      this.isLoading = false
    },
    hide() {
      this.$modal.hide('offer-modal')
      Object.assign(this.$data, this.$options.data())
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/partials/breakpoints';

.offer-modal {
  &__body {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
  }

  &__header {
    display: flex;
    background: var(--primary);
    padding: 1rem;
    align-items: center;
  }
}
</style>
