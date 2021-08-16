<template>
  <div v-click-outside="onClickOutside" class="search-action">
    <div
      v-tooltip.bottom-start="{
        trigger: 'manual',
        content: errorText,
        show: isErrorOpen,
        classes: 'f-14 search-action__warning-tooltip',
      }"
      class="search-action__content h-100"
      :class="{
        'p-0': isInputFocus,
        'search-action__content--active': isInputVisible,
      }"
      @click="onClickConntent"
    >
      <div v-show="!isInputVisible" class="search-action__placeholder">
        <span>{{
          (location && location.name) ||
          $t('boat_detail_breadcrumb_location_turkey')
        }}</span>
      </div>
      <div class="search-action__icon" @click="$refs.input.focus()">
        <m-svg icon="location-mark-icon" width="20" height="20" />
      </div>
      <div v-show="isInputVisible" class="search-action__input">
        <input
          ref="input"
          v-model="keyword"
          type="text"
          :class="inputClass"
          @input="onInput"
          @focus="onFocus"
        />
      </div>
    </div>
    <transition name="fade">
      <div
        v-show="isDropdownOpen"
        class="search-action__dropdown"
        :class="{ 'p-0': keyword }"
      >
        <div v-if="!keyword">
          <span class="pb-2 d-block f-14 font-weight-semibold"
            >Popüler Şehirler</span
          >
          <div class="search-action__popular-locations">
            <div
              v-for="(location, index) in popularLocations"
              :key="index"
              class="search-action__popular-location"
              role="button"
              @click="onSelectLocation(location)"
            >
              {{ location.name }}
            </div>
          </div>
        </div>
        <div v-if="keyword">
          <SelectItem
            v-for="(location, index) in locations"
            :key="index"
            :label="location.name"
            @click.native="onSelectLocation(location)"
          />
        </div>
      </div>
    </transition>

    <DeparturePortInputModal
      v-model="keyword"
      :open="isModalOpen"
      :keyword="keyword"
      :locations="locations"
      :popular-locations="popularLocations"
      :loading="isLoading"
      @input="onInput"
      @hide="isModalOpen = false"
      @select="onSelectLocation"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DeparturePortInputModal from './DeparturePortInputModal'
import countries from '~/types/countries'

export default {
  components: {
    DeparturePortInputModal,
  },
  props: {
    inputClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isInputFocus: false,
      isInputVisible: false,
      popularLocations: [],
      locations: [],
      keyword: '',
      isDropdownOpen: false,
      isLoading: false,
      isModalOpen: false,
      isErrorOpen: false,
      errorText: '',
    }
  },
  computed: {
    ...mapGetters({
      location: 'search/getLocation',
    }),
  },
  watch: {
    keyword: (va) => {
      console.log(va)
    },
  },
  methods: {
    async getLocations() {
      try {
        const result = await this.$repositories.suggestion.location(
          this.keyword
        )
        this.locations = result.data
        if (this.locations.length === 0 && !this.$device.isMobile) {
          this.showError('Aradığınız liman bulunmamaktadır.')
        } else {
          this.isErrorOpen = false
        }
      } catch (error) {
        console.log('Aradığınız lokasyon bulunamadı tooltip.')
      }
      this.isLoading = false
    },
    async getPopularLocations() {
      try {
        const result = await this.$repositories.suggestion.popularHarbours()
        this.popularLocations = result.data
      } catch (error) {
        console.error('POPULAR LOCATIONS.')
      }
    },
    onClickConntent() {
      if (this.$device.isMobile) {
        if (this.popularLocations.length === 0) {
          this.getPopularLocations()
        }
        this.isModalOpen = true
      } else {
        this.isInputVisible = true
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      }
    },
    onInput() {
      console.log(this.keyword)
      this.isLoading = true
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        if (this.keyword) {
          this.getLocations()
        } else if (this.popularLocations.length === 0) {
          this.getPopularLocations()
        }

        if (!this.keyword && this.isErrorOpen) {
          this.isErrorOpen = false
        }
      }, 300)
    },
    onFocus() {
      if (this.popularLocations.length === 0) {
        this.getPopularLocations()
      }
      this.isInputFocus = true
      this.isDropdownOpen = true
    },
    hideAll() {
      this.isInputFocus = false
      this.isInputVisible = false
      this.isDropdownOpen = false
      this.isModalOpen = false
      // this.isErrorOpen = false
    },
    onClickOutside() {
      this.hideAll()
      setTimeout(() => {
        this.keyword = ''
      }, 300)
    },
    showError(text) {
      console.log('this.errorText', this.errorText)
      console.log('this.isErrorOpen', this.isErrorOpen)
      this.errorText = text
      this.isErrorOpen = true
    },
    onSelectLocation(value) {
      // if (this.open) {
      //   this.hideModal()
      // }
      // FIXME: country slug to current locale slug
      value.slug = countries[this.$i18n.locale][value.slug] || value.slug
      this.$store.commit('search/updateLocation', value)
      this.hideAll()
      // FIXME:
      setTimeout(() => {
        this.keyword = ''
      }, 300)
    },
  },
}
</script>

<style lang="scss" scoped>
.search-action {
  &__content {
    display: flex;
    align-items: center;

    &--active {
      border-color: var(--primary);
    }
  }

  &__input {
    height: 100%;
    position: relative;

    input {
      height: 100%;
      border: 0;
      outline: 0;
      font-size: 1rem;
      color: var(--text-color);
      width: 100%;
      height: 100%;
      padding: 0.75rem;
      border-radius: 4px;
      background: transparent;
      padding-right: 50px;
      font-family: inherit;
    }
  }

  &__popular-locations {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }

  &__popular-location {
    border: 1px solid #e7e7ed;
    padding: 5px;
    border-radius: 4px;
    width: 100%;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
  }

  &__dropdown {
    overflow: hidden;
  }
}
</style>
