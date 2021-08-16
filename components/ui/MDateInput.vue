<template>
  <div>
    <validation-provider
      ref="provider"
      v-slot="{ errors }"
      rules="required"
      name="Doğum Tarihi"
    >
      <div class="m-date-input">
        <div>
          <m-select
            v-model="month.selected"
            :options="month.options"
            placeholder="Ay"
          />
        </div>
        <div>
          <m-select
            v-model="day.selected"
            :options="day.options"
            placeholder="Gün"
          />
        </div>
        <div>
          <m-select
            v-model="year.selected"
            :options="year.options"
            placeholder="Yıl"
          />
        </div>
      </div>
      <span v-if="errors.length > 0" class="error-text">{{ errors[0] }}</span>
    </validation-provider>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
export default {
  props: ['value'],
  data() {
    return {
      year: {
        selected: null,
        options: [],
      },
      day: {
        selected: null,
        options: [],
      },
      month: {
        selected: null,
        options: [],
      },
    }
  },
  computed: {
    allValues() {
      return (
        this.year.selected + ' ' + this.month.selected + ' ' + this.day.selected
      )
    },
  },
  watch: {
    value() {
      const { value } = this
      if (value && typeof value === 'string') {
        const date = new Date(value)
        this.day.selected = date.getDate()
        this.month.selected = date.getMonth() + 1
        this.year.selected = date.getFullYear()
      }
    },
    allValues() {
      this.$emit('input', {
        iso: DateTime.local(
          this.year.selected,
          this.month.selected,
          this.day.selected
        ).toISODate(),
        year: this.year.selected,
        month: this.month.selected,
        day: this.day.selected,
      })
    },
  },
  created() {
    this.year.options = this.makeArray(1940, 2002).reverse()
    this.day.options = this.makeArray(1, 31)

    const months = [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
    ]

    months.forEach((value, index) => {
      this.month.options.push({
        value: ++index,
        text: value,
      })
    })
  },
  mounted() {
    this.$refs.provider.syncValue(this.allValues)
  },
  methods: {
    makeArray(a, b) {
      const v = []
      for (let count = a; count < b; ) {
        count++
        v.push({
          value: count,
          text: count,
        })
      }
      return v
    },
  },
}
</script>

<style lang="scss">
.m-date-input {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 5px;

  select {
    padding-left: 10px !important;
  }
}
</style>
