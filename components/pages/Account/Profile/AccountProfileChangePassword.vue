<template>
  <div>
    <validation-observer
      ref="form"
      tag="form"
      autocomplete="off"
      @submit.prevent="handleSubmit"
    >
      <div class="change-pw">
        <div class="row pt-3">
          <m-form-group label="Eski Şifre" class="col-lg-4">
            <m-input
              v-model="oldPassword"
              variant="classic"
              type="password"
              rules="required"
              title="Eski Şifre"
              autocomplete="off"
            />
          </m-form-group>
          <m-form-group label="Yeni Şifre" class="col-lg-4">
            <m-input
              v-model="newPassword"
              variant="classic"
              type="password"
              rules="required|min:6"
              title="Yeni Şifre"
              name="password"
              autocomplete="off"
            />
          </m-form-group>
          <m-form-group label="Yeni Şifre(Tekrar)" class="col-lg-4">
            <m-input
              v-model="newPasswordAgain"
              variant="classic"
              type="password"
              rules="required|confirmed:password"
              title="Yeni Şifre(Tekrar)"
              autocomplete="off"
            />
          </m-form-group>
        </div>
        <div class="change-pw__buttonarea">
          <m-button
            type="submit"
            variant="primary"
            class="font-weight-bold px-4 py-3"
            >ŞİFREYİ KAYDET</m-button
          >
        </div>
      </div>
    </validation-observer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      newPasswordAgain: '',
    }
  },
  methods: {
    async handleSubmit() {
      const validate = await this.$refs.form.validate()

      if (!validate) return false
      const { account } = this.$repositories
      const data = new FormData()
      data.append('oldPassword', this.oldPassword)
      data.append('newPassword', this.newPassword)

      try {
        await account.editPassword(data)

        // FIXME:
        this.oldPassword = ''
        this.newPassword = ''
        this.newPasswordAgain = ''
        this.$refs.form.reset()

        this.$toast.success('Başarıyla değiştirildi.')
      } catch {
        this.$toast.error('Bir hata meydana geldi.')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.change-pw {
  display: flex;
  flex-direction: column;

  &__buttonarea {
    display: flex;
    justify-content: flex-end;

    &-save {
      padding-right: 2rem;
      padding-left: 2rem;
      text-transform: uppercase;
      font-weight: 500;
    }
  }

  @include bp(tablet-sm) {
    &__buttonarea-save {
      width: 100%;
    }
  }
}
</style>
