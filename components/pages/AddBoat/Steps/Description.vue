<template>
  <div>
    <add-boat-content ref="content" title="Açıklama" @next="handleSubmit">
      <validation-observer ref="form" tag="form" class="py-4">
        <span class="f-14 mb-3 d-block"
          >Arama sonuçlarında görünürlüğünüzü arttırmak için dil ekleyin.
        </span>
        <div class="languages">
          <div
            v-for="(language, index) in languages"
            :key="index"
            class="languages__item"
            :class="{
              'languages__item--active': selected_language === language.code,
            }"
            @click="selectLanguage(language.code)"
          >
            {{ language.label }}
          </div>
        </div>

        <m-form-group>
          <div class="pb-3">
            <span class="font-weight-semibold"
              >Teknenizi tek satırda tanımlayın, örneğin:
            </span>
            <br />
            <span>
              Bodrum’da günübirlik ve haftalık geziler için sevimli özel yapım
              gulet, 6 Kabin ve 10 kişilik kapasite çok özenli ve nazik
              mürettebati ve ihtiyaçlarınızı anlamaya hazır kaptan ile sizde
              aileniz ve sevdikleriniz ile eşsiz Marmaris, Göcek, Bodrum
              koylarını keşfedin.</span
            >
          </div>
          <m-input
            v-model="language_description"
            placeholder="Bir açıklama yazınız..."
            type="textarea"
            variant="classic"
          />
        </m-form-group>
        <validation-provider v-slot="{ errors }" name="Dil" vid="en">
          <span v-if="errors.length" class="error-text">{{ errors[0] }}</span>
        </validation-provider>
        <div class="row">
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.GULET,
                boatTypesEnum.JET_SKI,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.SAILBOAT,
                boatTypesEnum.SPEEDBOAT,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Misafir Kapasitesi"
          >
            <m-input
              v-model="form.guestCapacity"
              variant="classic"
              type="number"
              input-class="text-center"
              :min="0"
              title="Misafir K."
              rules="required"
              name="guestCapacity"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.GULET,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.SAILBOAT,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Önerilen Kapasite"
          >
            <m-input
              v-model="form.recommendedCapacity"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Ö. kapasite"
              name="recommendedCapacity"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.GULET,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.SPEEDBOAT,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Kabin Sayısı"
          >
            <m-input
              v-model="form.cabinCount"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Kabin"
              name="cabinCount"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.GULET,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.SAILBOAT,
                boatTypesEnum.SPEEDBOAT,
              ])
            "
            label="WC Sayısı"
            class="col-lg-3 col-sm-6 col-12"
          >
            <m-input
              v-model="form.toiletCount"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="WC"
              rules="required"
              name="toiletCount"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.GULET,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.SAILBOAT,
                boatTypesEnum.SPEEDBOAT,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Duş Sayısı"
          >
            <m-input
              v-model="form.showerCount"
              variant="classic"
              input-class="text-center"
              type="number"
              title="Duş"
              rules="required"
              name="showerCount"
            />
          </m-form-group>
          <m-form-group
            v-if="isType([boatTypesEnum.CATAMARAN, boatTypesEnum.SPEEDBOAT])"
            label="Draft"
            class="col-lg-3 col-sm-6 col-12"
          >
            <m-input
              v-model="form.draft"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Draft"
              rules="required"
              name="draft"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.SPEEDBOAT,
                boatTypesEnum.GULET,
                boatTypesEnum.SAILBOAT,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Yakıt"
          >
            <m-input
              v-model="form.fuelCapacity"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Yakıt"
              name="fuelCapacity"
              append-text="L/Saat"
            />
          </m-form-group>

          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.GULET,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.SAILBOAT,
                boatTypesEnum.SPEEDBOAT,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Yakıt Tüketimi"
          >
            <m-input
              v-model="form.engineConsumption"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Yakıt Tüketimi"
              rules="required"
              name="engineConsumption"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.GULET,
                boatTypesEnum.SAILBOAT,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Temiz Su Kapasitesi"
          >
            <m-input
              v-model="form.freshWaterCapacity"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="T. Su Kapasitesi"
              rules="required"
              name="freshWaterCapacity"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.GULET,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.SAILBOAT,
                boatTypesEnum.SPEEDBOAT,
                boatTypesEnum.JET_SKI,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Motor Gücü"
          >
            <m-input
              v-model="form.enginePower"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Motor Gücü"
              append-text="HP"
              name="enginePower"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.SAILBOAT,
                boatTypesEnum.SPEEDBOAT,
                boatTypesEnum.JET_SKI,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Motor Sayısı"
          >
            <m-input
              v-model="form.engineCount"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Motor Sayısı"
              name="engineCount"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.GULET,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.SAILBOAT,
                boatTypesEnum.SPEEDBOAT,
                boatTypesEnum.JET_SKI,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Motor Maximum Hız"
          >
            <m-input
              v-model="form.engineMaxSpeed"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Motor Maximum Hız"
              name="engineMaxSpeed"
              append-text="Km"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.GULET,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.SAILBOAT,
                boatTypesEnum.SPEEDBOAT,
                boatTypesEnum.JET_SKI,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Yakıt Tipi"
          >
            <m-select
              v-model="form.engineType"
              :options="engineTypes"
              title="Yakıt Tipi"
              name="engineType"
              placeholder="Lütfen seçiniz."
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.GULET,
                boatTypesEnum.SAILBOAT,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Klima"
          >
            <m-select
              v-model="form.airConditionerAvailable"
              :options="airConditionerAvailableTypes"
              title="Klima"
              name="airConditionerAvailable"
              rules="required"
              placeholder="Lütfen seçiniz."
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.GULET,
                boatTypesEnum.SAILBOAT,
              ]) && form.airConditionerAvailable
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Klima Çalışma Saati"
          >
            <m-select
              v-model="form.airConditionerAllowedWorkingTime"
              :options="airConditionerAllowedWorkingTimeTypes"
              title="Klima Çalışma S."
              name="airConditionerAllowedWorkingTime"
              rules="required"
              placeholder="Lütfen seçiniz."
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.SAILBOAT,
                boatTypesEnum.SPEEDBOAT,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Direksiyon Sayısı"
          >
            <m-input
              v-model="form.steeringWheelCount"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Direksiyon Sayısı"
              rules="required"
              name="steeringWheelCount"
            />
          </m-form-group>
          <m-form-group
            v-if="isType([boatTypesEnum.CATAMARAN, boatTypesEnum.SAILBOAT])"
            class="col-lg-3 col-sm-6 col-12"
            label="Ranza Kabin Sayısı"
          >
            <m-input
              v-model="form.bunkCabinCount"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Ranza Kabin Sayısı"
              rules="required"
              name="bunkCabinCount"
            />
          </m-form-group>
          <m-form-group
            v-if="isType([boatTypesEnum.CATAMARAN, boatTypesEnum.SAILBOAT])"
            class="col-lg-3 col-sm-6 col-12"
            label="Salon Kabin Sayısı"
          >
            <m-input
              v-model="form.saloonCabinCount"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Salon Kabin Sayısı"
              name="saloonCabinCount"
            />
          </m-form-group>
          <m-form-group
            v-if="isType([boatTypesEnum.CATAMARAN, boatTypesEnum.SAILBOAT])"
            class="col-lg-3 col-sm-6 col-12"
            label="Tek Kabin Sayısı"
          >
            <m-input
              v-model="form.saloonSingleCount"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Tek Kabin Sayısı"
              rules="required"
              name="saloonSingleCount"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.SAILBOAT,
                boatTypesEnum.GULET,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Personel Sayısı"
          >
            <m-input
              v-model="form.staffCabinCount"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Personel Sayısı"
              name="staffCabinCount"
            />
          </m-form-group>
          <m-form-group
            v-if="isType([boatTypesEnum.MOTORBOAT, boatTypesEnum.GULET])"
            class="col-lg-3 col-sm-6 col-12"
            label="Master Kabin"
          >
            <m-input
              v-model="form.masterCabinCount"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Master Kabin"
              name="masterCabinCount"
            />
          </m-form-group>
          <m-form-group
            v-if="isType([boatTypesEnum.GULET])"
            class="col-lg-3 col-sm-6 col-12"
            label="Kaptan Kabin"
          >
            <m-input
              v-model="form.captainCabinCount"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Kaptan Kabin"
              name="captainCabinCount"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.GULET,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.CATAMARAN,
                boatTypesEnum.SAILBOAT,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Double Kabin"
          >
            <m-input
              v-model="form.doubleCabinCount"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Double Kabin"
              name="doubleCabinCount"
            />
          </m-form-group>
          <m-form-group
            v-if="isType([boatTypesEnum.GULET, boatTypesEnum.MOTORBOAT])"
            class="col-lg-3 col-sm-6 col-12"
            label="Twin Kabin"
          >
            <m-input
              v-model="form.twinCabinCount"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Twin Kabin"
              name="twinCabinCount"
            />
          </m-form-group>
          <m-form-group
            v-if="isType([boatTypesEnum.GULET])"
            class="col-lg-3 col-sm-6 col-12"
            label="Motor Hızı"
          >
            <m-input
              v-model="form.engineCruisingSpeed"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Motor Hızı"
              name="engineCruisingSpeed"
              append-text="Km"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.GULET,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.SAILBOAT,
                boatTypesEnum.SPEEDBOAT,
                boatTypesEnum.JET_SKI,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Genişlik"
          >
            <m-input
              v-model="form.beam"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Genişlik"
              rules="required"
              name="beam"
              append-text="m"
            />
          </m-form-group>
          <m-form-group
            v-if="
              isType([
                boatTypesEnum.GULET,
                boatTypesEnum.MOTORBOAT,
                boatTypesEnum.SAILBOAT,
                boatTypesEnum.SPEEDBOAT,
                boatTypesEnum.JET_SKI,
              ])
            "
            class="col-lg-3 col-sm-6 col-12"
            label="Uzunluk"
          >
            <m-input
              v-model="form.length"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Uzunluk"
              rules="required"
              name="length"
              append-text="m"
            />
          </m-form-group>
          <m-form-group
            v-if="isType([boatTypesEnum.MOTORBOAT])"
            class="col-lg-3 col-sm-6 col-12"
            label="Vip Kabin Sayısı"
          >
            <m-input
              v-model="form.vipCabinCount"
              variant="classic"
              input-class="text-center"
              type="number"
              :min="0"
              title="Vip Kabin S."
              name="vipCabinCount"
            />
          </m-form-group>
        </div>
      </validation-observer>
    </add-boat-content>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      selected_language: 'tr',
      language_description: '',
      form: {
        de: '',
        en: '',
        fr: '',
        it: '',
        nl: '',
        tr: '',
        guestCapacity: '',
        recommendedCapacity: '',
        cabinCount: '',
        toiletCount: '',
        showerCount: '',
        draft: '',
        fuelCapacity: '',
        freshWaterCapacity: '',
        engineCount: '',
        engineConsumption: '',
        enginePower: '',
        engineMaxSpeed: '',
        engineType: '',
        airConditionerAvailable: '',
        airConditionerAllowedWorkingTime: '',
        steeringWheelCount: '',
        bunkCabinCount: '',
        doubleCabinCount: '',
        saloonCabinCount: '',
        saloonSingleCount: '',
        staffCabinCount: '',
        masterCabinCount: '',
        captainCabinCount: '',
        twinCabinCount: '',
        engineCruisingSpeed: '',
        beam: '',
        length: '',
        vipCabinCount: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      getBoatType: 'add-boat/getBoatType',
      getTransactionId: 'add-boat/getTransactionId',
    }),
    languages() {
      return [
        {
          code: 'tr',
          label: 'Türkçe',
        },
        {
          code: 'en',
          label: 'İngilizce',
        },
        {
          code: 'fr',
          label: 'Fransızca',
        },
        {
          code: 'it',
          label: 'İtalyanca',
        },
        {
          code: 'de',
          label: 'Almanca',
        },
        {
          code: 'ru',
          label: 'Rusça',
        },
        {
          code: 'nl',
          label: 'Flemenkçe',
        },
      ]
    },
    boatTypesEnum() {
      return {
        CATAMARAN: 'CATAMARAN',
        GULET: 'GULET',
        JET_SKI: 'JET_SKI',
        MOTORBOAT: 'MOTORBOAT',
        RIB: 'RIB',
        SAILBOAT: 'SAILBOAT',
        SPEEDBOAT: 'SPEEDBOAT',
      }
    },
    engineTypes() {
      return [
        {
          value: 'DIESEL',
          text: 'Dizel',
        },
        {
          value: 'GASOLINE',
          text: 'Benzin',
        },
      ]
    },
    airConditionerAllowedWorkingTimeTypes() {
      return [
        {
          text: 'Günde 1 saat',
          value: '1_HOUR_A_DAY',
        },
        {
          text: 'Günde 2 saat',
          value: '2_HOURS_A_DAY',
        },
        {
          text: 'Günde 3 saat',
          value: '3_HOURS_A_DAY',
        },
        {
          text: 'Günde 4 saat',
          value: '4_HOURS_A_DAY',
        },
        {
          text: 'Günde 5 saat',
          value: '5_HOURS_A_DAY',
        },
        {
          text: 'Günde 6 saat',
          value: '6_HOURS_A_DAY',
        },
        {
          text: 'Günde 8 saat',
          value: '8_HOURS_A_DAY',
        },
        {
          text: 'Günde 12 saat',
          value: '12_HOURS_A_DAY',
        },
        {
          text: 'Bütün Gün',
          value: 'ALL_DAY',
        },
      ]
    },
    airConditionerAvailableTypes() {
      return [
        {
          value: true,
          text: 'Var',
        },
        {
          value: false,
          text: 'Yok',
        },
      ]
    },
  },
  watch: {
    language_description(value) {
      this.form[this.selected_language] = value
    },
    selected_language(value) {
      this.language_description = this.form[value]
    },
  },
  created() {
    this.getDescription()
  },
  methods: {
    async getDescription() {
      try {
        const res = await this.$repositories.boat.description.getDescription(
          this.getTransactionId
        )
        if (!res.data) return false
        this.form = res.data
        this.language_description = this.form[this.selected_language]
      } catch (error) {
        this.$toast.error('Sunucu hatası.')
      }
    },
    async handleSubmit() {
      const valid = await this.$refs.form.validate()

      if (!valid) {
        this.$validation.focusFirstError()
        return false
      }

      this.$store.commit('add-boat/setUpdating', true)

      const { form } = this
      const newForm = {}
      Object.keys(form).map((key) => {
        if (form[key] || typeof form[key] === 'boolean') {
          if (
            key == 'airConditionerAllowedWorkingTime' &&
            form.airConditionerAvailable == false
          )
            return
          newForm[key] = form[key]
        }
      })

      try {
        const res = await this.$repositories.boat.description.updateDescription(
          newForm,
          this.getTransactionId
        )
        this.$refs.content.next()
      } catch (error) {
        this.$validation.setErrors(this.$refs.form, error)
        this.$validation.focusFirstError()
      }
      this.$store.commit('add-boat/setUpdating', false)
    },
    selectLanguage(code) {
      this.selected_language = code
    },
    isType(types) {
      if (Array.isArray(types)) {
        return types.includes(this.getBoatType)
      } else {
        throw new TypeError('baot types should be array')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.languages {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 30px;

  @include bp(tablet-sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  &__item {
    border: 1px solid #e9ecef;
    padding: 1.25rem;
    cursor: pointer;

    &--active {
      background: var(--primary);
      color: #fff;
    }
  }
}
</style>
