<template>
  <add-boat-content
    ref="content"
    title="Müsaitlik Takvimi"
    class="calendar"
    @next="$refs.content.next()"
  >
    <span class="f-14 text-dusk mb-30 d-block font-weight-semibold"
      >Dolu günlerinizi seçerek müşterilerinize yardımcı olun</span
    >
    <validation-observer
      ref="form"
      tag="form"
      class="row"
      @submit.prevent="add"
    >
      <div class="col-lg-8">
        <m-date-range v-model="action.range" rules="required" />
      </div>
      <m-form-group label="Neden?" class="col-lg-4">
        <m-select
          v-model="action.reason"
          :options="reasonOptions"
          rules="required"
          title="Neden"
        />
      </m-form-group>
      <div class="col-12 d-flex justify-content-end mb-30">
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
          <div class="data__table-col">Durum</div>
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
          <div class="data__table-col">{{ getReason(day.type) }}</div>
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
            <m-form-group label="Neden?" class="col-lg-4">
              <m-select v-model="edit.reason" :options="reasonOptions" />
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

const reasons = [
  {
    value: 'BREAKDOWN',
    text: 'Arızalı',
  },
  {
    value: 'RESERVED',
    text: 'Dış Rezervasyon',
  },
  {
    value: 'UNAVAILABLE',
    text: 'Kış Bakımında',
  },
]

export default {
  data() {
    return {
      action: {
        reason: null,
        range: {
          start: null,
          end: null,
        },
        loading: false,
      },
      edit: {
        reason: null,
        range: {
          start: null,
          end: null,
        },
      },
      form: {
        days: [],
      },
      reasonOptions: reasons,
    }
  },
  computed: {
    ...mapGetters({
      getTransactionId: 'add-boat/getTransactionId',
    }),
  },
  mounted() {
    this.getDates()
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
      const reason = this.action.reason

      const payload = {
        start: DateTime.fromJSDate(start).toISODate(),
        end: DateTime.fromJSDate(end).toISODate(),
        type: reason,
      }

      try {
        const res = await this.$repositories.boat.calendar.newCalendar(
          payload,
          this.getTransactionId
        )
        console.log(res)
        this.action.reason = ''
        this.action.range = {
          start: '',
          end: '',
        }

        this.$refs.form.reset()

        this.getDates()
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
      const reason = this.edit.reason

      const payload = {
        start: DateTime.fromJSDate(start).toISODate(),
        end: DateTime.fromJSDate(end).toISODate(),
        type: reason,
      }

      try {
        await this.$repositories.boat.calendar.updateCalendar(
          payload,
          id,
          this.getTransactionId
        )
        this.getDates()
      } catch (error) {
        this.$toast.error('Hata.')
      }
    },
    async getDates() {
      try {
        const res = await this.$repositories.boat.calendar.getCalendar(
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
    getReason(i) {
      return reasons.find((v) => v.value === i).text
    },
    async removeItem(id) {
      try {
        const res = await this.$repositories.boat.calendar.deleteCalendar(
          id,
          this.getTransactionId
        )
        this.form.days = this.form.days.filter((v) => v.id !== id)
      } catch (error) {
        this.$toast.error('Silinemedi.')
      }
    },
    openEdit(id) {
      // FIXME: bad code (⊙_◎)
      this.form.days.map((v) => {
        if (v.id === id) {
          v.toggle = true
          this.edit = {
            reason: v.type,
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
