<template>
  <transition name="fade">
    <div v-if="open" class="date-input-modal">
      <div class="date-input-modal__header">
        <div>
          {{ range.start ? getStartDate : 'Her Zaman' }}
        </div>
        <div v-if="range.end">
          {{ getEndDate }}
        </div>
      </div>
      <div class="date-input-modal__content">
        <v-date-picker
          ref="datePicker"
          v-model="range"
          :is-inline="true"
          :is-range="true"
          color="indigo"
          :rows="12"
          class="w-100"
          :disable-page-swipe="true"
        />
      </div>
      <div class="date-input-modal__footer">
        <div>
          <span v-if="getDayDiff > 0" class="font-weight-semibold f-14"
            >{{ getDayDiff }} Gece</span
          >
        </div>
        <div>
          <span class="text-dusk mr-2 font-weight-semibold f-14" @click="reset"
            >Sıfırla</span
          >
          <span class="text-primary font-weight-semibold f-14" @click="submit"
            >Bitti</span
          >
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { format, differenceInCalendarDays } from 'date-fns'
import { tr } from 'date-fns/locale'

export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    value: null,
  },
  data() {
    return {
      range: {
        start: null,
        end: null,
      },
    }
  },
  computed: {
    getStartDate() {
      return format(new Date(this.range.start), 'dd MMMM iiii', { locale: tr })
    },
    getEndDate() {
      return format(new Date(this.range.end), 'dd MMMM iiii', { locale: tr })
    },
    getDayDiff() {
      return parseInt(
        differenceInCalendarDays(
          new Date(this.range.end),
          new Date(this.range.start)
        )
      )
    },
  },
  watch: {
    value(v) {
      this.range = v
    },
    open(v) {
      document.body.style.overflow = v ? 'hidden' : 'auto'
    },
  },
  mounted() {
    this.range = this.value
  },
  methods: {
    submit() {
      this.$emit('input', this.range)
      this.$emit('close')
    },
    reset() {
      this.range = {
        start: null,
        end: null,
      }
    },
  },
}
</script>

<style lang="scss">
.date-input-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 200;
  background: #fff;

  &__header {
    width: 100%;
    height: 50px;
    display: flex;
    font-size: 14px;
    border-bottom: 1px solid #e9ecef;

    > div {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 0 1rem;
      white-space: nowrap;
      font-size: 13px;

      &:first-child {
        border-right: 1px solid #e9ecef;
      }
    }
  }

  &__content {
    height: 100%;
    padding: 0 1.75rem;
    padding-bottom: 200px;
    overflow-y: scroll;

    .vc-arrows-container .vc-arrow {
      display: none !important;
    }
  }

  &__footer {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    border-top: 1px solid #e9ecef;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: 10;
  }
}
</style>
