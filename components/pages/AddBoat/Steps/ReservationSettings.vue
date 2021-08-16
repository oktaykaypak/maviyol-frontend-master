<template>
  <add-boat-content
    ref="content"
    title="Rezervasyon Ayarları"
    class="reservation-settings"
    @next="updateSettings"
  >
    <validation-observer ref="form">
      <div class="row mb-30 mt-30">
        <m-form-group class="col-lg-4" label="Giriş Saati">
          <m-select
            v-model="form.check_in"
            :options="hours"
            rules="required"
            title="Giriş saati"
            placeholder="Lüfen seçiniz."
          />
        </m-form-group>
        <m-form-group class="col-lg-4" label="İniş Zamanı">
          <m-select
            v-model="form.check_out"
            :options="hours"
            rules="required"
            title="İniş Saati"
            placeholder="Lüfen seçiniz."
          />
        </m-form-group>
        <m-form-group class="col-lg-4" label="Rezervasyon Ön Ödeme">
          <m-input
            v-model="form.ratio"
            variant="classic"
            append-text="%"
            type="number"
            :min="0"
            rules="required"
            title="Rezervasyon Ön Ödeme"
          />
        </m-form-group>
      </div>

      <div class="mb-30">
        <h5 class="text-night-blue font-weight-semibold mb-3">
          İptal ve İade Koşulları
        </h5>
        <validation-provider
          ref="provider"
          v-slot="{ errors }"
          rules="required"
          name="Tip"
          class="mb-3"
        >
          <div>
            <m-form-group class="mb-2">
              <m-radio
                v-model="form.policy"
                name="policy"
                option="DC_PB_25"
                class="mb-2"
              >
                120 gün ve daha öncesi için yapılan iptallerde ön ödemenin %25'i
              </m-radio>
            </m-form-group>
            <m-form-group class="mb-2">
              <m-radio
                v-model="form.policy"
                name="policy"
                option="DC_PB_50"
                class="mb-2"
              >
                119 - 120 gün ve daha öncesi için yapılan iptallerde ön ödemenin
                %50'i
              </m-radio>
            </m-form-group>

            <m-form-group class="mb-2">
              <m-radio
                v-model="form.policy"
                name="policy"
                option="DC_PB_75"
                class="mb-2"
              >
                89 - 60 gün ve daha öncesi için yapılan iptallerde ön ödemenin
                %75'i
              </m-radio>
            </m-form-group>

            <m-form-group class="mb-2">
              <m-radio
                v-model="form.policy"
                name="policy"
                option="DC_PB_100"
                class="mb-2"
              >
                59 - 0 gün öncesi için yapılan ödemelerde toplam tutarın %100’ü
              </m-radio>
            </m-form-group>

            <m-form-group class="mb-2">
              <m-radio
                v-model="form.policy"
                name="policy"
                option="DC"
                class="mb-2"
              >
                Tarih değişikliği</m-radio
              >
            </m-form-group>
            <m-form-group class="mb-2">
              <m-radio
                v-model="form.policy"
                name="policy"
                option="NO_RETURN"
                class="mb-2"
              >
                İadesiz</m-radio
              >
            </m-form-group>
          </div>
          <span v-if="errors.length > 0" class="error-text">{{
            errors[0]
          }}</span>
        </validation-provider>
      </div>
      <div class="mb-30">
        <h5 class="font-weight-semibold text-night-blue mb-3">
          Günlük Kiralama
        </h5>
        <div class="row">
          <m-form-group
            class="col-lg-6"
            label="Günlük kiralama için giriş saati"
          >
            <m-select
              v-model="form.dailyCheckIn"
              :options="daily_hours"
              title="Giriş saati"
              placeholder="Lüfen seçiniz."
            />
          </m-form-group>
          <m-form-group
            class="col-lg-6"
            label="Günlük kiralama için çıkış saati"
          >
            <m-select
              v-model="form.dailyCheckOut"
              :options="daily_hours"
              title="Giriş saati"
              placeholder="Lüfen seçiniz."
            />
          </m-form-group>
          <!-- <m-form-group class="col-lg-6" label="Şiddetli hava koşullarında">
            <m-select
              v-model="form.severeWheater"
              :options="severeWeatherTypes"
              rules="required"
              title="Giriş saati"
              placeholder="Lüfen seçiniz."
            />
          </m-form-group> -->
        </div>
      </div>

      <div>
        <m-form-group
          label="Kiralamaya Dahil Hizmetler"
          label-class="font-weight-semibold"
        >
          <m-input v-model="form.includes" type="textarea" variant="classic" />
        </m-form-group>
        <m-form-group
          label="Kiralamaya Dahil Olmayanlar"
          label-class="font-weight-semibold"
        >
          <m-input v-model="form.excludes" type="textarea" variant="classic" />
        </m-form-group>
      </div>
    </validation-observer>
  </add-boat-content>
</template>

<script>
import { DateTime } from 'luxon'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      hours: [],
      daily_hours: [],
      form: {
        dailyCheckIn: '',
        dailyCheckOut: '',
        severe_wheater: '',
        check_in: '',
        check_out: '',
        ratio: null,
        policy: null,
        includes: null,
        excludes: null,
      },
    }
  },
  computed: {
    ...mapGetters({
      getTransactionId: 'add-boat/getTransactionId',
    }),
  },
  mounted() {
    this.hours = this.$helpers.makeHourArr()
    this.daily_hours = [
      ...this.$helpers.makeHourArr(),
      {
        text: 'Esnek',
        value: 'esnek',
      },
    ]
    this.getSettings()
  },
  methods: {
    checkDate(date) {
      if (date != 'Invalid DateTime') {
        return date
      } else {
        return ''
      }
    },
    async getSettings() {
      try {
        const res = await this.$repositories.boat.reservation.getReservationSettings(
          this.getTransactionId
        )
        if (res.data) {
          const {
            policy,
            ratio,
            excludes,
            includes,
            checkIn,
            checkOut,
            dailyCheckIn,
            dailyCheckOut,
          } = res.data
          this.form = {
            ...this.form,
            policy,
            ratio,
            excludes,
            includes,
            check_in: this.checkDate(
              DateTime.fromISO(checkIn).toUTC().toFormat('HH:mm')
            ),
            check_out: this.checkDate(
              DateTime.fromISO(checkOut).toUTC().toFormat('HH:mm')
            ),
            dailyCheckOut: this.checkDate(
              DateTime.fromISO(dailyCheckOut).toUTC().toFormat('HH:mm')
            ),
            dailyCheckIn: this.checkDate(
              DateTime.fromISO(dailyCheckIn).toUTC().toFormat('HH:mm')
            ),
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    async updateSettings() {
      const validate = await this.$refs.form.validate()

      if (!validate) {
        this.$validation.focusFirstError()
        return false
      }

      this.$store.commit('add-boat/setUpdating', true)

      const {
        check_in,
        check_out,
        dailyCheckIn,
        dailyCheckOut,
        policy,
        ratio,
        excludes,
        includes,
      } = this.form

      const payload = {
        checkIn: check_in,
        checkOut: check_out,
        dailyCheckOut,
        dailyCheckIn,
        policy,
        ratio,
        excludes: excludes || '',
        includes: includes || '',
      }

      try {
        const res = await this.$repositories.boat.reservation.updateReservationSettings(
          payload,
          this.getTransactionId
        )
        this.$refs.content.next()
      } catch (error) {
        this.$toast.error('Bir hata meydana geldi.')
      }
      this.$store.commit('add-boat/setUpdating', false)
    },
  },
}
</script>

<style lang="scss" scoped></style>
