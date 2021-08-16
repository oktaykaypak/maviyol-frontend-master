<template>
  <div>
    <validation-provider
      v-slot="{ errors }"
      :name="title"
      :vid="name"
      :rules="rules"
    >
      <div class="m-checkbox" :class="variant && 'm-checkbox-v--' + variant">
        <input
          ref="input"
          class="m-checkbox__input"
          type="checkbox"
          hidden
          :disabled="disabled"
          @input="$emit('input', !value)"
          @change="$emit('change')"
        />
        <label @click="onClick"
          ><slot />
          <span class="m-checkbox__check">
            <fa :icon="['fas', 'check']" />
          </span>
        </label>
      </div>
      <span v-if="errors.length" class="error-text"> {{ errors[0] }}</span>
    </validation-provider>
  </div>
</template>

<script>
export default {
  props: {
    rules: {
      type: [String, Object],
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
      type: Boolean,
      default: null,
    },
    variant: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value(v) {
      this.$refs.input.checked = v
    },
  },
  mounted() {
    this.$refs.input.checked = this.value
  },
  methods: {
    onClick() {
      this.$emit('click')
      if (!this.disabled) {
        this.$refs.input.click()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.m-checkbox {
  &__check {
    position: absolute;
    left: 0;
    top: 1px;
    width: 20px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    visibility: hidden;

    svg {
      height: 10px;
      display: flex;
    }
  }

  &-v--classic {
    label::before {
      box-shadow: none !important;
      border: solid 1px #979797;
    }
  }

  &-v--sm {
    .m-checkbox__check {
      width: 16px;
    }
    label::before {
      width: 16px !important;
      height: 16px !important;
      border: 2px solid #979797;
      box-shadow: none !important;
    }
  }

  &__input:checked + label {
    &::before {
      background: var(--primary);
      border: 1px solid var(--primary);
    }
    span {
      visibility: visible;
    }
  }

  label {
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;
    padding-left: 30px;

    &::before {
      box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.15),
        0 1px 0 0 rgba(0, 0, 0, 0.02);
      width: 20px;
      height: 20px;
      background: #fff;
      border-radius: 4px;
      display: inline-block;
      margin-right: 10px;
      content: '';
      position: absolute;
      left: 0;
      top: 2px;
    }
  }
}
</style>
