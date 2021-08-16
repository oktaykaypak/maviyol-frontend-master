<template>
  <div class="m-switch">
    <input
      ref="input"
      type="checkbox"
      hidden
      :checked="value"
      @change="$emit('change')"
    />
    <label @click="$refs.input.click()"></label>
  </div>
</template>

<script>
export default {
  props: {
    value: null,
  },
  data() {
    return {
      checked: false,
    }
  },
  watch: {
    checked() {
      this.$emit('value', this.checked)
    },
    value(v) {
      this.checked = v
    },
  },
}
</script>

<style lang="scss" scoped>
.m-switch {
  input:checked + label {
    background: #d3f8e8;

    &:after {
      transform: translateX(20px);
      background: #2dce89;
    }
  }

  label {
    display: block;
    background-color: #eff5ff;
    height: 16px;
    width: 40px;
    border-radius: 100px;
    position: relative;

    &::after {
      transition: all 200ms ease-in-out;
      position: absolute;
      left: 0;
      top: -4px;
      width: 22px;
      height: 22px;
      border-radius: 100px;
      background: #e9ecef;

      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.34);
      content: '';
    }
  }
}
</style>
