<template>
  <div v-click-outside="hideDropdown" class="search-action date-input">
    <component
      :is="dateInputModal"
      v-model="range"
      :open="modalOpen"
      @input="onInputMobile"
      @close="modalOpen = false"
    />
    <div
      class="search-action__content"
      :class="{ 'search-action__content--focus': dropdownOpen }"
      @click="open"
    >
      <span class="search-action__placeholder">{{ getReadableDate }}</span>
      <div class="search-action__icon">
        <m-svg icon="calendar-small" width="20" height="20" />
      </div>
    </div>

    <div v-if="dropdownOpen" class="search-action__dropdown">
      <v-date-picker
        ref="datePicker"
        v-model="range"
        :is-inline="true"
        :is-range="true"
        :columns="$screens(datePickerColumns)"
        :min-date="new Date()"
        color="indigo"
        @drag="onDrag"
      />
      <div class="search-action__dropdown-footer">
        <div>
          <span v-show="getDayDiff > 0" class="font-weight-semibold"
            >{{ getDayDiff }} Gece</span
          >
        </div>
        <div class="d-flex">
          <span
            class="d-block mr-3 c-pointer font-weight-semibold"
            :style="!range.end && !range.start && 'opacity: 0.7;cursor:auto;'"
            @click="resetDates"
            >Sıfırla</span
          >
          <span
            class="text-primary c-pointer font-weight-semibold"
            @click="hideDatepickerPopover"
            >Bitti</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { differenceInCalendarDays } from 'date-fns'
import { mapGetters } from 'vuex'
import { DateTime } from 'luxon'

export default {
  props: {
    datePickerColumns: {
      type: Object,
      default: () => ({
        default: 1,
        lg: 2,
      }),
    },
  },
  data() {
    return {
      modalOpen: false,
      dropdownOpen: false,
      isContentFocused: false,
      range: {
        start: '',
        end: '',
      },
    }
  },
  mounted() {
    const { getStartDate, getEndDate } = this
    if (getStartDate && getEndDate) {
      this.range.start = new Date(this.getStartDate)
      this.range.end = new Date(this.getEndDate)
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'common/isMobile',
      startDate: 'search/getStartDate',
      endDate: 'search/getEndDate',
      getStartDate: 'search/getStartDate',
      getEndDate: 'search/getEndDate',
      getReadableDate: 'search/getReadableDate',
    }),
    getDayDiff() {
      return parseInt(
        differenceInCalendarDays(
          new Date(this.range.end),
          new Date(this.range.start)
        )
      )
    },
    dateInputModal() {
      return this.$device.isMobile ? () => import('./DateInputModal') : ''
    },
  },
  watch: {
    'range.start'(v) {
      this.$store.commit(
        'search/updateStartDate',
        DateTime.fromJSDate(v).toISODate()
      )
    },
    'range.end'(v) {
      this.$store.commit(
        'search/updateEndDate',
        DateTime.fromJSDate(v).toISODate()
      )
    },
  },
  methods: {
    onInputMobile() {
      this.$nuxt.$emit('search-boat-list')
    },
    onDrag({ start }) {
      if (start) {
        this.range.start = start
      }
    },
    open() {
      if (this.$device.isMobile) {
        this.modalOpen = true
      } else {
        this.dropdownOpen = true
      }
    },
    hideModal() {
      this.modalOpen = false
    },
    hideDropdown() {
      setTimeout(() => {
        this.dropdownOpen = false
      })
    },
    hideDatepickerPopover() {
      this.dropdownOpen = false
    },
    resetDates() {
      if (!this.range?.start && !this.range?.end) return
      this.range = {
        start: null,
        end: null,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.search-action__dropdown {
  width: unset;
  padding: 8px;

  &-footer {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    padding: 0 0.75rem 0.75rem 0;
    margin-top: -12px;
    z-index: 20;
    user-select: none;
  }
}
.date-input {
  &__header {
    position: relative;
    height: 48px;
    border-bottom: 1px solid #e9ecef;
  }

  &__content {
    padding: 0.75rem;
    overflow-y: scroll;
  }

  &__gap {
    margin-bottom: 15px;

    h6 {
      color: var(--night-blue);
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    li {
      margin: 0 10px 10px 0;
      span {
        cursor: pointer;
        background: #fff;
        border: 1px solid #e9ecef;
        font-size: 13px;
        padding: 6px;
        display: block;
        border-radius: 4px;
      }
    }
  }
}
</style>
