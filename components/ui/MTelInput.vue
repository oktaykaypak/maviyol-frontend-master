<template>
  <div>
    <vue-tel-input
      ref="test"
      v-model="number"
      placeholder=""
      :enabled-country-code="true"
      :default-country="defaultCountry"
      :class="`m-tel-input-v--${variant} ${sm ? 'm-tel-input--sm' : ''}`"
      class="m-tel-input"
      @input="input"
    >
      <template v-slot:arrow-icon>
        <div
          class="vti__angle"
          v-html="require('~/assets/icons/angle-icon.svg?raw')"
        />
      </template>
    </vue-tel-input>
    <validation-provider
      v-slot="{ errors }"
      ref="provider"
      :name="title"
      :vid="name"
      :rules="rules"
      tag="div"
    >
      <span v-if="errors.length" class="error-text"> {{ errors[0] }}</span>
    </validation-provider>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        code: '',
        number: '',
      }),
    },
    variant: {
      type: String,
      default: 'classic',
    },
    sm: {
      type: Boolean,
      default: false,
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
      defaultCountry: '',
      number: '',
    }
  },
  watch: {
    'value.code'(newVal) {
      /*
        // FIXME

        country code cannot be change. it has to be directly change from this component.
      */
      setTimeout(() => {
        const code = newVal.replace('+', '')
        const newCode = this.$refs.test.sortedCountries.find(
          (v) => v.dialCode === code
        )

        this.$refs.test.choose(newCode.iso2)
      }, 1000)
    },
  },
  created() {
    this.unwatchValueProp = this.$watch('value', (newVal) => {
      if (newVal) {
        this.number = newVal.number
        this.$refs.provider.syncValue(newVal.number)
        this.unwatchValueProp()
      }
    })
  },
  methods: {
    input(number, obj) {
      this.$emit('input', {
        code: '+' + obj.country.dialCode,
        number: obj.number.significant,
      })
      this.$refs.provider.syncValue(number)
    },
  },
}
</script>

<style lang="scss">
.m-tel-input {
  &-v--classic {
    border: 1px solid #ced4da !important;
    box-shadow: none !important;
  }

  &--sm {
    height: 43px !important;

    input {
      font-size: 14px !important;
    }
  }

  &-v--shadow {
    $shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.15), 0 1px 0 0 rgba(0, 0, 0, 0.02);
    border: none !important;
    box-shadow: $shadow;

    &:focus-within {
      box-shadow: $shadow !important;
    }
  }
}
.vue-tel-input {
  border-radius: 4px;

  height: 45px;
  margin-bottom: 30px;
  position: relative;

  .vti__dropdown {
    outline: none;
    padding: 0 10px;
    position: unset;

    &-item strong {
      font-weight: 400;
    }

    &-list {
      &.below {
        top: 55px !important;
      }

      &.above {
        bottom: 55px !important;
        top: auto !important;
      }
      width: 100%;
      border: none;
      border-radius: 4px;
      box-shadow: 0 3px 10px -1px rgba(0, 0, 0, 0.1),
        0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 6px 10px 0 rgba(0, 0, 0, 0.14);
    }

    &:hover {
      background: inherit;
    }
  }

  .vti__country-code {
    padding-right: 5px;
  }

  .vti__angle {
    display: flex;
    svg {
      width: 12px;
      height: 12px;
    }
  }

  input {
    font-size: 1rem;
    color: var(--dusk);
  }
}
</style>
