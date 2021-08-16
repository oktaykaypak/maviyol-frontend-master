<template>
  <validation-provider
    v-slot="{ errors }"
    ref="boatType"
    name="Tekne Tipi"
    vid="boatType"
    rules="required"
  >
    <div v-if="isLoading">Yükleniyor...</div>
    <div v-if="!isLoading" class="boat-types">
      <div
        v-for="(item, index) in boatTypes"
        :key="index"
        class="boat-types__item"
        :class="{
          'boat-types__item--active':
            // FIXME: - have to use optional chaining operator
            item.code == value.code,
        }"
        @click="$emit('input', item)"
      >
        <span>{{ item.name }}</span>
      </div>
    </div>
    <span v-if="errors.length > 0" class="error-text">{{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      isLoading: false,
      boatTypes: [],
    }
  },
  watch: {
    value() {
      this.updateData()
      this.$refs.boatType.validate()
    },
  },
  mounted() {
    this.updateData()
  },
  created() {
    this.isLoading = true
    this.$axios
      .get('/boat-types')
      .then((res) => {
        if (!res.data) return false
        this.boatTypes = Object.keys(res.data).map((key) => ({
          code: key,
          name: res.data[key],
        }))
      })
      .finally((v) => {
        this.isLoading = false
      })
  },
  methods: {
    updateData() {
      this.$refs.boatType.syncValue(this.value.code)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.boat-types {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  row-gap: 20px;
  margin-bottom: 30px;

  @include bp(desktop-md) {
    grid-template-columns: repeat(4, 1fr);
  }

  @include bp(desktop-sm) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include bp(mobile) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    row-gap: 10px;

    &__item {
      font-size: 14px;
      padding: 1rem !important;
    }
  }

  &__item {
    padding: 1.5rem;
    border: 1px solid #ced4da;
    border-radius: 12px;
    background: #f6f9fc;
    cursor: pointer;
    white-space: nowrap;

    &:hover,
    &:active {
      border: 1px solid var(--primary);
    }

    &--active {
      background: var(--primary);
      color: #fff;
      border: 1px solid var(--primary);
      font-weight: 600;
    }
  }
}
</style>
