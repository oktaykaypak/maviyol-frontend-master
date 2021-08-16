<template>
  <add-boat-content title="İndirimler" class="discount">
    <span class="f-14 text-dusk mb-30 d-block font-weight-semibold"
      >Kampanya dönemlerinizi özelleştirin.
      <br />
      Belirtmiş olduğunuz tarihlerde sistem otomatik olarak indirim uygular,
      ileri dönem düşük sezonlarda indirim yaparak ilgi çekebilirsiniz!
    </span>
    <validation-observer
      ref="form"
      tag="form"
      class="row"
      @submit.prevent="add"
    >
      <div class="col-lg-8">
        <m-date-range v-model="action.range" rules="required" />
      </div>
      <m-form-group label="İndirim Oranı" class="col-lg-4">
        <m-input
          v-model="action.ratio"
          rules="required|numeric|max_value:10000000"
          append-text="%"
          variant="classic"
          title="İ. Oranı"
        />
      </m-form-group>
      <div class="col-lg-8"></div>
      <div class="col-lg-4 d-flex justify-content-end mb-30">
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
          <div class="data__table-col">İndirim</div>
          <div class="data__table-col">Kampanya Adı</div>
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
          <div class="data__table-col">{{ day.ratio }}%</div>
          <!-- <div class="data__table-col">-</div> -->
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
            <div class="col-lg-8">
              <m-date-range v-model="edit.range" />
            </div>
            <m-form-group label="İndirim Oranı" class="col-lg-4">
              <m-input
                v-model="edit.ratio"
                rules="required|numeric|max_value:10000000"
                append-text="%"
                variant="classic"
                title="İndirim Oranı"
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
        ratio: null,
        range: {
          start: null,
          end: null,
        },
        loading: false,
      },
      edit: {
        ratio: null,
        range: {
          start: null,
          end: null,
        },
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
    this.getDiscount()
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
      const { ratio } = this.action

      const payload = {
        start: DateTime.fromJSDate(start).toISODate(),
        end: DateTime.fromJSDate(end).toISODate(),
        ratio,
      }

      try {
        const res = await this.$repositories.boat.discount.newDiscount(
          payload,
          this.getTransactionId
        )
        console.log(res)
        this.action.ratio = null
        this.action.range = {
          start: null,
          end: null,
        }

        this.$refs.form.reset()

        this.getDiscount()
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

      const formData = new FormData()
      const start = new Date(this.edit.range.start)
      const end = new Date(this.edit.range.end)
      const { ratio } = this.edit

      const payload = {
        start: DateTime.fromJSDate(start).toISODate(),
        end: DateTime.fromJSDate(end).toISODate(),
        ratio,
      }

      try {
        const res = await this.$repositories.boat.discount.updateDiscount(
          payload,
          id,
          this.getTransactionId
        )
        this.getDiscount()
      } catch (error) {
        this.$toast.error('Hata.')
      }
    },
    async getDiscount() {
      try {
        const res = await this.$repositories.boat.discount.getDiscount(
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
        const res = await this.$repositories.boat.discount.deleteDiscount(
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
            ratio: v.ratio,
            range: {
              start: v.start,
              end: v.end,
            },
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

<style lang="scss" scoped>
.discount {
  .data__table-row {
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  }
}
</style>
