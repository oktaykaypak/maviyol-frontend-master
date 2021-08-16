<template>
  <div>
    <add-boat-content
      ref="content"
      :title="isEdit ? 'Tekne Düzenle' : 'Bir Tekne Ekle'"
      @next="handleSubmit"
    >
      <validation-observer ref="form">
        <m-form-group label="Tekne Tipi">
          <boat-types v-model="form.type" />
        </m-form-group>

        <div class="row">
          <m-form-group label="Tekne Adı" class="col-lg-6">
            <m-input
              v-model="form.name"
              :placeholder="`Tekne adı yazınız ${
                !isGulet ? '(Zorunlu Değil)' : ''
              }`"
              variant="classic"
              :rules="isGulet ? 'required|min:2' : ''"
              title="Tekne Adı"
              name="name"
            />
          </m-form-group>
          <m-form-group class="col-lg-6" label="Şehir">
            <suggestion-input
              v-model="form.city"
              :request="$repositories.suggestion.city"
              rules="required_id"
              title="Şehir"
              name="city"
            />
          </m-form-group>
          <m-form-group
            v-if="isCatamaran || isSailboat || isMotorboat || isJetski"
            class="col-lg-6"
            label="Üretici Firma"
          >
            <suggestion-input
              v-model="form.manufacturer"
              :request="$repositories.suggestion.manufacturer"
              rules="required_id"
              title="Üretici Firma"
              name="city"
            />
          </m-form-group>
          <m-form-group
            v-if="isCatamaran || isSailboat || isMotorboat || isJetski"
            class="col-lg-6"
            label="Marka"
          >
            <suggestion-input
              v-model="form.model"
              :request="$repositories.suggestion.manufacturer"
              :sub-id="form.manufacturer.id"
              :disabled="!form.manufacturer.id"
              title="Marka"
              name="model"
            />
          </m-form-group>
          <m-form-group class="col-lg-6" label="Kaptanlı - Kaptansız">
            <m-select
              v-model="form.captain"
              :options="captainOptions"
              rules="required"
              title="Kaptanlı - Kaptansız"
              placeholder="Lütfen seçiniz."
            />
          </m-form-group>
          <m-form-group class="col-lg-6" label="Yapım Yılı">
            <m-select
              v-model="form.constructionYear"
              :options="years"
              variant="classic"
              title="Yapım Yılı"
              rules="required|numeric"
              name="constructionYear"
              placeholder="Lütfen seçiniz."
            />
          </m-form-group>
          <m-form-group
            v-if="!isSailboat && !isJetski"
            class="col-lg-6"
            label="Yenilenme Yılı"
          >
            <m-select
              v-model="form.refit"
              :options="years"
              variant="classic"
              title="Yenilenme Yılı"
              rules="numeric|greater_equal:@constructionYear"
              name="refit"
              placeholder="Lütfen seçiniz."
            />
          </m-form-group>
          <m-form-group class="col-lg-6" label="Denize Elverişlilik Belgesi">
            <documents v-model="form.seaworthinessDocument" />
          </m-form-group>
          <m-form-group label="Konuşulan Dİller" class="col-12 mb-3">
            <spoken-languages v-model="form.spokenLanguages" />
          </m-form-group>
          <m-form-group class="col-lg-6" label="Evcil Hayvan">
            <m-select
              v-model="form.pets"
              :options="petOptions"
              rules="required"
              title="Evcil Hayvan"
              placeholder="Lütfen seçiniz."
            />
          </m-form-group>
          <m-form-group
            v-if="!isJetski"
            class="col-lg-6"
            label="Mürettebat fiyata dahil mi?"
          >
            <m-select
              v-model="form.crewIncludedInPrice"
              :options="crewIncludedInPriceOptions"
              name="crewIncludedInPrice"
              rules="required"
              title="Evcil Hayvan"
              placeholder="Lütfen seçiniz."
            />
          </m-form-group>
          <m-form-group label="Liman" class="col-lg-6">
            <m-tag-input
              v-model="form.harbours"
              :first-request="$repositories.suggestion.popularHarbours"
              :request="$repositories.suggestion.harbour"
              :max-tag="2"
              name="harbours"
              title="Liman"
              rules="required"
            />
          </m-form-group>
        </div>
      </validation-observer>
    </add-boat-content>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BoatTypes from './BoatTypes'
import SpokenLanguages from './SpokenLanguages'
import Documents from './Documents'

export default {
  components: {
    BoatTypes,
    SpokenLanguages,
    Documents,
  },
  data() {
    return {
      form: {
        type: {
          code: '',
        },
        city: { id: '' },
        manufacturer: { id: '' },
        name: '',
        model: { id: '' },
        captain: '',
        constructionYear: '',
        seaworthinessDocument: [],
        spokenLanguages: [],
        harbours: [],
        pets: '',
        refit: '',
        crewIncludedInPrice: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      isEdit: 'add-boat/isEdit',
      getTransactionId: 'add-boat/getTransactionId',
      getBoat: 'add-boat/getBoat',
    }),
    isCatamaran() {
      return this.form?.type?.code === 'CATAMARAN'
    },
    isGulet() {
      return this.form?.type?.code === 'GULET'
    },
    isJetski() {
      return this.form?.type?.code === 'JET_SKI'
    },
    isSailboat() {
      return this.form?.type?.code === 'SAILBOAT'
    },
    isMotorboat() {
      return this.form?.type?.code === 'MOTORBOAT'
    },
    crewIncludedInPriceOptions() {
      return [
        {
          value: true,
          text: 'Evet',
        },
        {
          value: false,
          text: 'Hayır',
        },
      ]
    },
    captainOptions() {
      return [
        {
          text: 'Kaptanlı',
          value: 'WITH_CAPTAIN',
        },
        {
          text: 'Kaptansız',
          value: 'WITHOUT_CAPTAIN',
        },
      ]
    },
    petOptions() {
      return [
        {
          text: 'Hayır',
          value: false,
        },
        {
          text: 'Evet',
          value: true,
        },
      ]
    },
    years() {
      const v = []
      for (let count = 1900; count < new Date().getFullYear(); ) {
        count++
        v.push({
          value: count,
          text: count,
        })
      }
      return v.reverse()
    },
  },
  created() {
    if (this.getTransactionId && this.getBoat) {
      this.form = this.getBoat
    }
  },
  methods: {
    async handleSubmit() {
      const validate = await this.$refs.form.validate()
      if (!validate) {
        this.$validation.focusFirstError()
        return false
      }
      this.$store.commit('add-boat/setUpdating', true)
      this.$store.commit('common/setAppLoading', true)

      const {
        type,
        city,
        manufacturer,
        name,
        model,
        captain,
        constructionYear,
        seaworthinessDocument,
        spokenLanguages,
        harbours,
        pets,
        refit,
        crewIncludedInPrice,
      } = this.form
      const formData = new FormData()
      formData.append('type', type.code)
      formData.append('city', city.id)

      if (manufacturer?.id) {
        formData.append('manufacturer', manufacturer.id)
      }

      formData.append('name', name)

      if (model?.id) {
        formData.append('model', model.id)
      }

      if (refit) {
        formData.append('refit', refit)
      }

      if (seaworthinessDocument?.length) {
        formData.append('seaworthinessDocument', seaworthinessDocument[0])
      }

      formData.append('captain', captain)
      formData.append('constructionYear', constructionYear)

      spokenLanguages.forEach((item) => {
        formData.append('spokenLanguages[]', item)
      })
      harbours.forEach((item) => {
        formData.append('harbours[]', item.id)
      })
      formData.append('pets', pets)
      formData.append('crewIncludedInPrice', crewIncludedInPrice)

      const isTransactionValid = this.isEdit || this.getTransactionId
      try {
        const res = await this.$repositories.boat.general[
          isTransactionValid ? 'updateBoat' : 'newBoat'
        ](formData, this.getTransactionId)
        if (!res.data) return false
        if (res.data.id) {
          this.$store.commit('add-boat/setTransactionId', res.data.id)
          this.$cookies.set('add-boat-transaction-id', res.data.id)
        }
        this.$store.commit('add-boat/updateBoat', this.form)
        this.$refs.content.next()
      } catch (error) {
        this.$validation.setErrors(this.$refs.form, error)
        this.$validation.focusFirstError()
      }
      this.$store.commit('add-boat/setUpdating', false)
      this.$store.commit('common/setAppLoading', false)
    },
  },
}
</script>
