<template>
  <m-card shadow="soft" class="list-filter">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <span v-if="hideTitle === false" class="search-page__card-title"
        >Filtreler</span
      >
      <span
        v-if="isFiltered"
        class="text-primary c-pointer"
        @click="resetFilter"
        >Sıfırla</span
      >
    </div>
    <div class="mb-3">
      <span class="font-weight-bold pb-3 d-block text-night-blue"
        >Tekne Tipi</span
      >
      <div
        v-for="(item, index) in boatTypes"
        :key="index"
        class="list-filter__item"
      >
        <m-radio
          variant="sm"
          name="boat-type"
          :value="type"
          :option="item.code"
          @click.native="selectType(item.code)"
          >{{ item.name }}</m-radio
        >
      </div>
    </div>
    <div class="mb-3">
      <span class="font-weight-bold pb-3 d-block text-night-blue"
        >Mürettebat</span
      >
      <m-form-group>
        <m-select
          custom-class="mb-0"
          :sm="true"
          :value="captain"
          :options="captainOptions"
          placeholder="Kaptanlı & Kaptansız"
          @input="onCaptainChange"
        />
      </m-form-group>
    </div>
  </m-card>
</template>

<script>
import { mapGetters } from 'vuex'
import boatTypes from '~/types/boatTypes'
import searchMixin from '~/mixins/search'
export default {
  mixins: [searchMixin],
  props: {
    hideTitle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    boatTypes() {
      return boatTypes
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
    ...mapGetters({
      type: 'filter/getType',
      captain: 'filter/getCaptain',
      isFiltered: 'filter/isFiltered',
    }),
  },
  methods: {
    selectType(value) {
      this.$store.commit('filter/updateType', value)
    },
    onCaptainChange(value) {
      this.$store.commit('filter/updateCaptain', value)
    },
    resetFilter() {
      this.$store.commit('search/updateType', '')
      this.$store.commit('filter/updateType', '')
      this.$store.commit('filter/updateIsFiltered', false)
      this.$store.commit('filter/resetState')
      this.$emit('reset')
      this.search()
    },
  },
}
</script>

<style lang="scss" scoped>
.list-filter {
  &__item {
    margin-bottom: 10px;
  }
}
</style>
