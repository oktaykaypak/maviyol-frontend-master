<template>
  <div>
    <div v-click-outside="onBlur" class="m-search-input">
      <m-input
        ref="input"
        v-model="keyword"
        variant="classic"
        autocomplete="new-password"
        v-bind="$attrs"
        :input-class="inputClass"
        @focus="onFocus"
        @input="onInput"
      />
      <div class="m-search-input__dropdown">
        <vue-scroll v-if="open" style="max-height: 300px">
          <select-item
            v-for="(item, index) in list"
            :key="index"
            :label="item.name"
            @click.native="onSelect(item)"
          />
        </vue-scroll>
      </div>
    </div>
    <validation-provider
      v-slot="{ errors }"
      ref="provider"
      :rules="rules"
      :name="title"
      :vid="name"
    >
      <span v-if="errors.length > 0" class="error-text">{{ errors[0] }}</span>
    </validation-provider>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    value: null,
    rules: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    inputClass: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      open: false,
      keyword: '',
    }
  },
  watch: {
    value(value) {
      this.$refs.provider.syncValue(value)
      this.keyword = value?.name || value?.label
      if (value?.name || value?.label) {
        this.$refs.provider.validate()
      }
    },
  },
  created() {
    this.setList()
  },
  mounted() {
    this.$refs.provider.syncValue(this.value)
  },
  methods: {
    onSelect(value) {
      this.$emit('input', value)
      this.onBlur()
    },
    onFocus() {
      this.$emit('focus')
      this.open = true
    },
    onBlur() {
      setTimeout(() => {
        this.$emit('blur')
        this.open = false
      })
    },
    setList(q = '') {
      this.$emit('request', q)
    },
    onInput() {
      clearTimeout(this.interval)
      this.interval = setTimeout(() => {
        this.setList(this.keyword)
      }, 250)
    },
    focus() {
      this.$refs.input.focus()
    },
  },
}
</script>

<style lang="scss">
.m-search-input {
  position: relative;

  &__dropdown {
    max-height: 300px !important;
    position: absolute !important;
    border-radius: 4px;
    background: #fff;
    top: 55px;
    left: 0;
    width: 100%;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
    z-index: 20;
    overflow: hidden;
  }
}
</style>
