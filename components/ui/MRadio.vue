<template>
  <div class="m-radio">
    <input
      :id="`${name}-${option}`"
      type="radio"
      :name="name"
      :checked="checked"
      hidden
      @change="$emit('input', option)"
    />
    <label :for="`${name}-${option}`"><slot /></label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    option: {
      type: String,
      default: '',
    },
  },
  computed: {
    checked() {
      const { value, option } = this
      return value === option && 'checked'
    },
  },
}
</script>

<style lang="scss" scoped>
.m-radio {
  position: relative;

  label {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 22px;

    &:before {
      display: block;
      width: 1rem;
      height: 1rem;
      content: '';
      border-radius: 100px;
      margin-right: 8px;
      border: 2px solid #8898aa;
    }

    &::after {
      position: absolute;
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      left: 0.25rem;
      border-radius: 100px;
      transition: all 0.3s cubic-bezier(0.32, 0.08, 0.24, 1);
      display: flex;
      justify-self: center;
      align-self: center;
      background: #3282fd;
      transform: scale(0);
    }

    &:before {
      position: absolute;
      top: 4px;
      left: 0;
    }

    &::after {
      top: 8px;
    }
  }

  input:checked {
    & + label:before {
      border-color: #3282fd;
    }

    & + label:after {
      transform: scale(1) !important;
    }
  }
}
</style>
