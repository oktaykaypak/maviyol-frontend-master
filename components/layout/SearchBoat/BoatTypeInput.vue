<template>
  <div class="search-action">
    <div
      class="search-action__content"
      :class="{ 'search-action__content--focus': open }"
    >
      <span class="search-action__placeholder">{{ getSelectedType }}</span>
      <div class="search-action__icon">
        <m-svg icon="boat" width="20" height="20" />
      </div>

      <select
        ref="select"
        v-model="boatType"
        v-click-outside="hide"
        class="search-action__select"
        @change="hide"
        @click="open = true"
      >
        <option value="">Tümünü Göster</option>
        <option v-for="(type, index) in types" :key="index" :value="type.code">
          {{ type.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import boatTypes from '~/types/boatTypes'
export default {
  data() {
    return {
      open: false,
      boatType: null,
      types: boatTypes,
    }
  },
  computed: {
    getSelectedType() {
      return (
        this.types.find((c) => this.boatType == c.code)?.name || 'Tümünü Göster'
      )
    },
    ...mapGetters({
      type: 'search/getType',
    }),
  },
  watch: {
    boatType(v) {
      this.$store.commit('search/updateType', v)
    },
  },
  methods: {
    hide() {
      setTimeout(() => {
        this.open = false
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.search-action {
  &__boat-type:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  &__select {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 0;
    border: 0;
    opacity: 0;
    font-size: 1rem;
  }
}
</style>
