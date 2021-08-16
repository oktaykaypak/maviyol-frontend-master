<template>
  <validation-provider
    v-slot="{ errors }"
    ref="provider"
    :name="title"
    :vid="name"
    :rules="rules"
  >
    <div
      class="m-input m-input--v-classic"
      :class="[customClass, sm && 'm-input--sm']"
    >
      <div>
        <select
          ref="select"
          :value="value"
          :class="selectClass"
          @change="onSelect"
        >
          <option
            v-for="(option, index) in getOptions"
            :key="index"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
    <span v-if="errors.length" class="error-text"> {{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    selected: [String, Object],
    placeholder: String,
    value: {
      type: null,
      default: null
    },
    rules: null,
    title: null,
    customClass: {
      type: String,
      default: ''
    },
    selectClass: {
      type: String,
      default: ''
    },
    sm: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
  },
  computed: {
    getOptions() {
      const { options, placeholder } = this
      if (placeholder) {
        return [
          {
            value: null,
            text: placeholder
          },
          ...options
        ]
      }
      return options
    }
  },
  methods: {
    onSelect(e) {
      let selectedIndex = e.target.selectedIndex
      if (this.placeholder) {
        selectedIndex--
      }
      let selected = this.options.find((v, i) => i == selectedIndex)
      if (typeof selected === 'object') {
        this.$emit('input', selected.value)
        return true
      }
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/input';

.m-input {
  position: relative;
  height: 48px;

  select {
    height: 48px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: transparent;
  }

  // TODO: - change triangle to border version
  &::before {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    height: 100%;
    content: '▼';
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 1rem;
    font-size: 0.8rem;
  }
}
</style>
