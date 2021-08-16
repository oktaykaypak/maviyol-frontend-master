<template>
  <validation-provider
    v-slot="{ errors }"
    :mode="interactionMode"
    :name="title"
    :vid="name"
    :rules="rules"
    tag="div"
  >
    <div
      class="m-input"
      :class="[
        {
          'm-input--has-icon': iconName,
          'm-input--sm': sm,
          'm-input--has-append-text': appendText,
        },
        variant && 'm-input--v-' + variant,
        customClass,
      ]"
    >
      <div class="m-input__content">
        <textarea
          v-if="$attrs.type === 'textarea'"
          :value="value"
          v-bind="$attrs"
          @input="onInput"
        ></textarea>
        <input
          v-else
          ref="input"
          :value="value"
          :class="inputClass"
          v-bind="$attrs"
          @input="onInput"
          @focus="$emit('focus')"
          @blur="$emit('blur')"
          @keypress="$emit('keypress')"
          @change="onChange"
        />
        <div v-if="iconName" class="m-input__icon" :class="iconClass">
          <fa :icon="iconName" />
        </div>
        <div v-if="appendText" class="m-input__append-text">
          {{ appendText }}
        </div>
      </div>
    </div>
    <span v-if="errors.length" class="error-text"> {{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
export default {
  props: {
    // shadow - classic
    variant: {
      type: String,
      default: '',
    },
    iconName: {
      type: [String, Array],
      default: '',
    },
    iconClass: {
      type: String,
      default: '',
    },
    customClass: {
      type: String,
      default: '',
    },
    inputClass: {
      type: String,
      default: '',
    },
    sm: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    appendText: {
      type: String,
      default: '',
    },
    interactionMode: {
      type: String,
      default: 'lazy',
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    onChange() {
      this.$emit('change')
    },
    focus() {
      this.$refs.input.focus()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/input';
</style>
