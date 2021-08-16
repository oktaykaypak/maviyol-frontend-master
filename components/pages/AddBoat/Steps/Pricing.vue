<template>
  <add-boat-content
    ref="content"
    title="Fiyatlandırma"
    class="pricing"
    @next="$refs.content.next()"
  >
    <span class="f-14 text-dusk mb-30 d-block font-weight-semibold"
      >Aylara göre günlük fiyatlarınızı giriniz. .</span
    >
    <validation-observer
      ref="form"
      tag="form"
      class="row"
      @submit.prevent="add"
    >
      <div class="col-lg-6">
        <m-date-range v-model="action.range" />
      </div>
      <m-form-group label="Fiyat" class="col-lg-3">
        <m-input
          v-model="action.price"
          variant="classic"
          append-text="EUR"
          rules="required|numeric|max_value:10000000"
          title="Fiyat"
        />
      </m-form-group>
      <m-form-group label="Minimum Gün" class="col-lg-3">
        <m-input
          v-model="action.minRentalDay"
          min="0"
          type="number"
          variant="classic"
        />
      </m-form-group>
      <div
        class="col-12 d-flex flex-lg-row flex-column justify-content-between mb-30"
      >
        <div class="mb-2 mb-lg-0">
          <span class="font-weight-light f-14">
            Lütfen Maviyolculuk'un komisyonunu ve vergileri fiyata dahil etmeyi
            unutmayın.
          </span>
        </div>
        <m-button
          variant="success"
          class="py-3 px-5 font-weight-bold"
          type="submit"
          :disabled="action.loading"
        >
          Onayla
        </m-button>
      </div>
    </validation-observer>

    <span class="text-dusk f-14 mb-30 d-block font-weight-semibold"
      >Önümüzdeki kullanım dışı tarihlerinizi doldurun</span
    >

    <div class="data__table">
      <div class="data__table-item data__table-head">
        <div class="data__table-row">
          <div class="data__table-col">Başlangıç</div>
          <div class="data__table-col">Bitiş</div>
          <div class="data__table-col">Fiyat</div>
          <div class="data__table-col"></div>
        </div>
      </div>

      <div
        v-for="(day, index) in form.days"
        :key="index"
        class="data__table-item"
      >
        <div class="data__table-row">
          <div class="data__table-col">{{ getFormattedDate(day.start) }}</div>
          <div class="data__table-col">{{ getFormattedDate(day.end) }}</div>
          <div class="data__table-col">{{ day.dailyAmount }} EUR</div>
          <div class="data__table-col">
            <span @click="openEdit(day.id)">
              <m-svg icon="edit" />
            </span>
            <span @click="removeItem(day.id)">
              <m-svg icon="trash-alt" />
            </span>
          </div>
        </div>
        <validation-observer
          v-if="day.toggle"
          ref="update"
          class="data__table-edit"
          tag="form"
          @submit.prevent="update(day.id)"
        >
          <div class="d-flex justify-content-end align-items-center">
            <span class="data__table-edit-close" @click="closeEdit(day.id)">
              <m-svg icon="times-circle" />
            </span>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <m-date-range v-model="edit.range" />
            </div>
            <m-form-group label="Fiyat" class="col-lg-3">
              <m-input
                v-model="edit.price"
                variant="classic"
                append-text="EUR"
                rules="required|numeric|max_value:10000000"
                title="Fiyat"
              />
            </m-form-group>
            <m-form-group label="Minimum Gün" class="col-lg-3">
              <m-input
                v-model="edit.minRentalDay"
                min="0"
                type="number"
                variant="classic"
              />
            </m-form-group>
            <div class="col-12 d-flex justify-content-end">
              <m-button
                variant="success"
                class="py-3 px-5 font-weight-bold"
                type="submit"
              >
                Kaydet
              </m-button>
            </div>
          </div>
        </validation-observer>
      </div>
    </div>
  </add-boat-content>
</template>

<script>
import { mapGetters } from 'vuex'
import { DateTime } from 'luxon'

export default {
  data() {
    return {
      action: {
        price: null,
        range: {
          start: null,
          end: null,
        },
        minRentalDay: '',
        loading: false,
      },
      edit: {
        price: null,
        range: {
          start: null,
          end: null,
        },
        minRentalDay: '',
      },
      form: {
        days: [],
      },
    }
  },
  computed: {
    ...mapGetters({
      getTransactionId: 'add-boat/getTransactionId',
    }),
  },
  mounted() {
    this.getPricing()
  },
  methods: {
    async add() {
      this.action.loading = true
      const validate = await this.$refs.form.validate()

      if (!validate) {
        this.action.loading = false
        return false
      }

      const start = new Date(this.action.range.start)
      const end = new Date(this.action.range.end)
      const payload = {
        start: DateTime.fromJSDate(start).toISODate(),
        end: DateTime.fromJSDate(end).toISODate(),
        dailyAmount: this.action.price,
        minRentalDay: this.action.minRentalDay,
      }
      try {
        await this.$repositories.boat.pricing.newPricing(
          payload,
          this.getTransactionId
        )
        this.action.price = null
        this.action.range = {
          start: null,
          end: null,
        }
        this.$refs.form.reset()
        this.getPricing()
      } catch (error) {
        if (parseInt(error.response && error.response.status) == 409) {
          this.$toast.error('Bu tarih aralığında bir kayıt zaten ekli.')
        } else {
          this.$toast.error('Bir hata meydana geldi.')
        }
      }
      this.action.loading = false
    },
    async update(id) {
      const validate = await this.$refs.update[0].validate()

      if (!validate) return false
      const start = new Date(this.edit.range.start)
      const end = new Date(this.edit.range.end)
      const { price, minRentalDay } = this.edit

      const payload = {
        start: DateTime.fromJSDate(start).toISODate(),
        end: DateTime.fromJSDate(end).toISODate(),
        dailyAmount: price,
        minRentalDay,
      }

      try {
        await this.$repositories.boat.pricing.updatePricing(
          payload,
          id,
          this.getTransactionId
        )
        this.getPricing()
      } catch (error) {
        this.$toast.error('Hata.')
      }
    },
    async getPricing() {
      try {
        const res = await this.$repositories.boat.pricing.getPricing(
          this.getTransactionId
        )
        if (res.data) {
          res.data.map((v) => {
            v.toggle = false
            return v
          })
          this.form.days = res.data
        }
      } catch (error) {
        console.error(error)
      }
    },
    getFormattedDate(v) {
      return DateTime.fromJSDate(new Date(v)).toLocaleString({
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    },
    async removeItem(id) {
      try {
        await this.$repositories.boat.pricing.deletePricing(
          id,
          this.getTransactionId
        )
        this.form.days = this.form.days.filter((v) => v.id !== id)
      } catch (error) {
        this.$toast.error('Silinemedi.')
      }
    },
    openEdit(id) {
      this.form.days.map((v) => {
        if (v.id === id) {
          v.toggle = true
          this.edit = {
            price: v.dailyAmount,
            range: {
              start: v.start,
              end: v.end,
            },
            minRentalDay: v.minRentalDay,
          }
        } else {
          v.toggle = false
        }
        return v
      })
    },
    closeEdit(id) {
      this.form.days.map((v) => {
        if (v.id === id) v.toggle = false
        return v
      })
    },
  },
}
</script>
