<template>
  <div class="add-boat__form">
    <div class="add-boat__form-header">
      <div class="d-flex align-items-center justify-content-center pb-3">
        <span
          v-if="!isEdit || getStep == 0"
          class="add-boat__form-back"
          @click="prev"
          ><fa :icon="['fas', 'chevron-left']"
        /></span>
        <h2 class="add-boat__form-title">{{ title }}</h2>
      </div>

      <span
        v-if="isEdit"
        class="add-boat__form-reset"
        @click="$modal.show('remove-boat')"
        >Sil</span
      >
    </div>
    <div v-show="isEdit" class="add-boat__form-step-select">
      <select v-model="selectedStep" @change="onStepSelected">
        <option v-for="(step, i) in getSteps" :key="i" :value="step.step">
          {{ step.name }}
        </option>
      </select>
      <i>
        <m-svg :icon="getIcon" />
      </i>
      <span class="add-boat__form-step-select-icon">
        <m-svg icon="angle-icon-primary" heigth="15" width="15" />
      </span>
    </div>
    <div class="pb-3">
      <slot ref="stepComponent" />
    </div>
    <div v-if="isEdit" class="d-flex justify-content-end">
      <m-button
        class="font-weight-bold px-5 py-3"
        variant="primary"
        :disabled="isUpdating"
        @click.native="nextHandler"
        >Kaydet</m-button
      >
    </div>
    <div v-else class="d-flex justify-content-between align-items-center">
      <m-button
        variant="primary"
        class="font-weight-bold px-5 py-3"
        :disabled="isFirstStep"
        @click="prev"
        >Geri</m-button
      >

      <m-button
        :disabled="isUpdating"
        :variant="isLastStep ? 'warning' : 'primary'"
        class="font-weight-bold px-5 py-3"
        @click.native="nextHandler"
        >{{ isLastStep ? 'Yayımla' : 'İleri ' }}</m-button
      >
    </div>

    <m-modal name="remove-boat" title="Sil">
      <div class="d-flex justify-content-center align-items-center flex-column">
        <div class="mb-4">
          <p>Tekneyi silmek istediğinizden emin misiniz?</p>
        </div>
        <div class="d-flex">
          <m-button
            variant="primary"
            class="px-4 mr-2 font-weight-semibold"
            @click="$modal.hide('remove-boat')"
            >Hayır</m-button
          >
          <m-button
            :disabled="isRemoving"
            variant="warning"
            class="px-4 font-weight-semibold"
            @click="removeBoat"
            >Evet</m-button
          >
        </div>
      </div>
    </m-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedStep: 0,
      isRemoving: false,
    }
  },
  mounted() {
    this.selectedStep = this.getStep
  },
  computed: {
    ...mapGetters({
      getStep: 'add-boat/getStep',
      isLastStep: 'add-boat/isLastStep',
      isFirstStep: 'add-boat/isFirstStep',
      getGeneral: 'add-boat/getGeneral',
      getSteps: 'add-boat/getSteps',
      isEdit: 'add-boat/isEdit',
      isUpdating: 'add-boat/isUpdating',
      isMobile: 'common/isMobile',
      getTransactionId: 'add-boat/getTransactionId',
    }),
    getIcon() {
      return this.getSteps.find((v) => v.step === this.getStep).icon
    },
  },
  methods: {
    async nextHandler() {
      if (this.isLastStep) {
        const result = await this.publish()
        if (result) {
          this.$toast.success(
            'Tekneniz sisteme eklenmiştir, şimdiden iyi kazançlar dileriz.'
          )
          this.$router.replace('/account/boats')
          return true
        } else {
          this.$toast.error('Bir hata meydana geldi.')
          return false
        }
      }
      this.$emit('next')
    },
    prev() {
      if (this.isFirstStep) {
        this.$router.replace('/account')
      }
      this.$store.commit('add-boat/prev')
      window.scrollTo(0, 0)
    },
    next() {
      if (this.isEdit) {
        this.$toast.success('Bilgiler başarıyla güncellendi.')
        return
      } else {
        this.$store.commit('add-boat/next')
        setTimeout(() => {
          this.$cookies.set('add-boat-last-step', this.getStep)
          if (parseInt(this.$route.query['no-cache']) === 1) {
            this.$router.replace('/add-boat')
          }
        })
      }
      window.scrollTo(0, 0)
    },
    async publish() {
      try {
        await this.$repositories.boat.publish.publishBoat(this.getTransactionId)
        /* localStorage.removeItem('add-boat-transaction-id')
        store.commit('add-boat/setStep', 0)
        store.commit('add-boat/setTransactionId', '')
        store.commit('add-boat/setProgress', 0) */
        return true
      } catch (error) {
        return error
      }
    },
    async removeBoat() {
      this.isRemoving = true
      try {
        await this.$repositories.boat.general.removeBoat(this.getTransactionId)
        this.$modal.hide('remove-boat')
        this.$router.push('/account/boats')
        this.$toast.success('Bot başarıyla silindi.')
      } catch (error) {
        this.$toast.error('Bir hata meydana geldi.')
      }
      this.isRemoving = false
    },
    onStepSelected(e) {
      this.$store.commit('add-boat/setStep', +this.selectedStep)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.add-boat__form {
  background-color: #fff;
  border-radius: 6px;
  padding: 2rem;
  min-height: 100vh;

  &-step-select {
    position: relative;
    margin-bottom: 10px;
    display: none;
    height: 48px;

    &-icon {
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }

    @include bp(tablet) {
      display: block;
    }

    select {
      width: 100%;
      border: solid 1px var(--dusk);
      height: 48px;
      color: var(--night-blue);
      font-weight: 500;
      border-radius: 4px;
      appearance: none;
      outline: none;
      font-weight: 600;
      padding: 0.75rem;
      font-size: 1rem;
      padding-left: 40px;
      background: #fff;
      position: absolute;
      z-index: 20;
      background: transparent;
    }

    i {
      position: absolute;
      left: 0;
      top: 0;
      width: 40px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
    }
  }

  &-header {
    border-bottom: 1px solid #d8d8d8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  &-reset {
    color: var(--danger);
    font-weight: 600;
    cursor: pointer;
    user-select: none;
  }

  &-back {
    color: #32325d;
    padding-right: 10px;
    font-size: 24px;
    cursor: pointer;
  }

  &-title {
    color: #32325d;
    font-weight: 800;
    font-size: 1.8rem;
    display: block;
    margin-bottom: 0;

    @include bp(tablet) {
      font-size: 1.4rem;
      border-bottom: 0;
    }
  }
}
</style>
