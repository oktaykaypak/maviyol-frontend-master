<template>
  <m-search-input
    v-model="content"
    :list="list"
    :placeholder="placeholder"
    :rules="rules"
    :name="name"
    :title="title"
    v-bind="$attrs"
    @request="getList"
  />
</template>

<script>
export default {
  props: {
    value: null,
    subId: null,
    request: Function,
    placeholder: {
      type: String,
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
    name: {
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
      list: [],
      content: '-',
    }
  },
  // FIXME: not best practice
  watch: {
    content(v) {
      this.$emit('input', v)
    },
    value(a) {
      this.content = a
    },
  },
  mounted() {
    this.content = this.value
  },
  methods: {
    async getList(q) {
      const res = await this.request(q, this.subId)
      this.list = res.data
    },
  },
}
</script>
