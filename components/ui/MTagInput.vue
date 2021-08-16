<template>
  <div>
    <div v-click-outside="hide" class="m-tag-input">
      <div class="m-tag-input__content" @click="onClick">
        <div
          v-for="(tag, index) in value"
          :key="index"
          class="m-tag-input__item"
        >
          <span>{{ tag.name }}</span>
          <m-svg icon="close-circle-icon" @click.native="removeTag(tag.id)" />
        </div>
        <input
          ref="input"
          v-model="keyword"
          type="text"
          @input="onInput"
          @focus="onInput"
        />
      </div>
      <div class="m-tag-input__dropdown">
        <vue-scroll v-if="isVisible" style="max-height: 300px">
          <select-item
            v-for="(item, index) in searchResults"
            :key="index"
            :label="item.name"
            @click.native="onSelect(item)"
          />
        </vue-scroll>
      </div>
    </div>
    <validation-provider
      ref="provider"
      v-slot="{ errors }"
      :name="title"
      :vid="name"
      :rules="rules"
    >
      <span v-if="errors.length > 0" class="error-text">{{ errors[0] }}</span>
    </validation-provider>
  </div>
</template>

<script>
import toggleMixin from '~/mixins/toggle'
export default {
  mixins: [toggleMixin],
  props: {
    value: Array,
    firstRequest: {
      type: Function,
      default: () => null,
    },
    request: {
      type: Function,
      required: true,
    },
    maxTag: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchResults: [],
      keyword: '',
    }
  },
  watch: {
    value(v) {
      this.$refs.provider.syncValue(v.length > 0 ? v.length : '')
    },
  },
  mounted() {
    this.$refs.provider.syncValue(
      this.value.length > 0 ? this.value.length : ''
    )
  },
  methods: {
    onClick() {
      if (this.$refs.input && this.maxTag !== this.value.length) {
        this.$refs.input.focus()
      }
    },
    onSelect(item) {
      this.$refs.provider.reset()
      this.$emit('input', this.value)
      this.keyword = ''
      this.hide()
      const i = this.value.findIndex((v) => v.id === item.id)
      if (i !== -1) return
      if (this.maxTag == this.value.length) {
        this.$refs.provider.setErrors([
          'Sadece 2 liman ekleyebilirsiniz fazlası için müşteri temsilcileri ile iletişime geçiniz.',
        ])
        return
      }
      this.value.push(item)
      this.$emit('input', this.value)
      this.$refs.input.blur()
    },
    removeTag(id) {
      this.$refs.input.blur()
      this.hide()
      const i = this.value.findIndex((v) => v.id === id)
      this.value.splice(i, 1)
      this.$emit('input', this.value)
    },
    async search(q) {
      let result
      if (!q && this.firstRequest) {
        result = await this.firstRequest()
      } else {
        result = await this.request(q)
      }
      this.searchResults = result.data
    },
    onInput() {
      clearTimeout(this.interval)
      this.interval = setTimeout(() => {
        this.open()
        this.search(this.keyword)
      }, 250)
    },
  },
}
</script>

<style lang="scss">
.m-tag-input {
  position: relative;

  &__content {
    background: #fff;
    border: 1px solid #ced4da;
    border-radius: 4px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 0.75rem;
    margin-bottom: 30px;
    width: 100%;
    height: 48px;
    scrollbar-width: 0px;
    overflow: hidden;
    overflow-x: scroll;
    cursor: text;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  input {
    border: none;
    outline: none;
    font-size: 1rem;
    color: var(--dusk);
    width: 100px;
  }

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

  &__item {
    background: #f6f9fc;
    border-radius: 4px;
    color: var(--dusk);
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 3px 8px;
    font-size: 14px;
    margin-right: 5px;
    white-space: nowrap;

    span {
      margin-right: 5px;
    }

    img {
      height: 14px;
      cursor: pointer;
    }
  }
}
</style>
