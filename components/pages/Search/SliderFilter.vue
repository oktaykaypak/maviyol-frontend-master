<template>
  <div>
    <m-card shadow="soft" class="text-night-blue">
      <div class="mb-3">
        <div class="mb-3 d-flex justify-content-between align-items-center">
          <span class="font-weight-bold">Kabin</span>
          <div class="d-flex">
            <div class="font-weight-bold">{{ cabin[0] }} - {{ cabin[1] }}</div>
            <span>&nbsp;/&nbsp;Kabin</span>
          </div>
        </div>
        <vue-slider
          v-model="cabin"
          :min="cabinMinMax[0]"
          :max="cabinMinMax[1]"
          :dot-size="18"
          :lazy="true"
          :height="4"
          @change="onCabinChange"
        ></vue-slider>
      </div>

      <div class="mb-3">
        <div class="mb-3 d-flex justify-content-between align-items-center">
          <span class="font-weight-bold">Tekne Uzunluğu</span>
          <div class="d-flex">
            <div class="font-weight-bold">
              {{ length[0] }} - {{ length[1] }}
            </div>
            <span>&nbsp;/&nbsp;Metre</span>
          </div>
        </div>
        <vue-slider
          v-model="length"
          :min="lengthMinMax[0]"
          :max="lengthMinMax[1]"
          :dot-size="18"
          :lazy="true"
          :height="4"
          @change="onLengthChange"
        ></vue-slider>
      </div>

      <div class="mb-3">
        <div class="mb-3 d-flex justify-content-between align-items-center">
          <span class="font-weight-bold">Yıl</span>
          <div class="d-flex">
            <div class="font-weight-bold">
              {{ constructionYear[0] }} - {{ constructionYear[1] }}
            </div>
            <span>&nbsp;/&nbsp;Yıl</span>
          </div>
        </div>
        <vue-slider
          v-model="constructionYear"
          :dot-size="18"
          :max="constructionYearMinMax[1]"
          :min="constructionYearMinMax[0]"
          :lazy="true"
          :height="4"
          @change="onConstructionYearChange"
        ></vue-slider>
      </div>
    </m-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      length: [0, 0],
      constructionYear: [0, 0],
      cabin: [0, 0],
    }
  },
  computed: {
    ...mapGetters({
      filter: 'filter/getFilter',
    }),
    lengthMinMax() {
      return [0, 60]
    },
    cabinMinMax() {
      return [0, 12]
    },
    constructionYearMinMax() {
      return [1950, 2023]
    },
  },
  watch: {
    'filter.cabin'(value) {
      if (value.length === 0) {
        this.cabin = this.cabinMinMax
      }
    },
    'filter.constructionYear'(value) {
      if (value.length === 0) {
        this.constructionYear = this.constructionYearMinMax
      }
    },
    'filter.length'(value) {
      if (value.length === 0) {
        this.length = this.lengthMinMax
      }
    },
  },
  created() {
    this.cabin = this.cabinMinMax
    this.length = this.lengthMinMax
    this.constructionYear = this.constructionYearMinMax
  },
  mounted() {
    this.cabin = this.filter.cabin.length > 0 ? this.filter.cabin : this.cabin
    this.length =
      this.filter.length.length > 0 ? this.filter.length : this.length
    this.constructionYear =
      this.filter.constructionYear.length > 0
        ? this.filter.constructionYear
        : this.constructionYear
  },
  methods: {
    onCabinChange() {
      this.$store.commit('filter/updateCabin', this.cabin)
    },
    onLengthChange() {
      this.$store.commit('filter/updateLength', this.length)
    },
    onConstructionYearChange() {
      this.$store.commit('filter/updateConstructionYear', this.constructionYear)
    },
  },
}
</script>

<style lang="scss">
.vue-slider {
  &-process {
    background-color: #3182fd !important;
  }

  &-dot-handle {
    border: 2px solid #3182fd;
  }

  &:hover {
    &-process {
      background-color: #3182fd !important;
    }
    &-dot-handle {
      border: 2px solid #3182fd !important;
    }
  }
}

.vue-slider-dot-handle {
}
</style>
