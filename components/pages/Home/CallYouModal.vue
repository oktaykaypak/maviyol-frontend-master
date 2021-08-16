<template>
  <m-modal name="call-you-modal" title="Sizi ne zaman arayalım">
    <div class="row pt-4">
      <m-form-group label="Günü Seçin" class="col-lg-6">
        <v-date-picker v-model="form.date" :masks="{ input: 'DD-MM-YYYY' }">
          <template v-slot="{ inputValue, togglePopover }">
            <m-input
              placeholder="Tarih Seçiniz"
              variant="classic"
              :value="inputValue"
              custom-class="mb-0"
              readonly
              @focus="togglePopover({ placement: 'bottom', top: 0 })"
            />
          </template>
        </v-date-picker>
      </m-form-group>
      <m-form-group label="Saati Seçin" class="col-lg-3">
        <m-select v-model="form.hour" variant="classic" :options="hours" />
      </m-form-group>
      <p class="callyou__content">
        {{ $t('home_callyou_content') }}
      </p>
      <div class="col-12 callyou__footer">
        <div class="callyou__footer-callcenter">
          <p class="callyou__footer-callcenter-header">
            {{ $t('home_callyou_callcenter_header') }}
          </p>
          <p class="callyou__footer-callcenter-content">
            {{ $t('home_callyou_callcenter_content') }}
          </p>
        </div>
        <div>
          <m-button variant="primary" class="px-5 py-3 font-weight-semibold">{{
            $t('home_callyou_callcenter_button')
          }}</m-button>
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
        hour: '',
        date: '',
      },
      hours: [],
    }
  },
  created() {
    this.hours = this.$helpers.makeHourArr()
  },
}
</script>

<style lang="scss" scoped>
.callyou {
  &__content {
    margin-bottom: 40px;
    padding: 0 16px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-callcenter {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &-header {
        color: #8e95af;
        font-weight: 400;
        font-size: 18px;
      }

      &-content {
        color: #515e7c;
        font-weight: bold;
        font-size: 24px;
      }
    }
  }
}
</style>
