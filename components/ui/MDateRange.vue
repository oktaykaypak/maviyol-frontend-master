<template>
  <div>
    <v-date-picker
      v-model="range"
      is-range
      :masks="{ input: 'DD-MM-YYYY' }"
      @input="onChange"
    >
      <template v-slot="{ inputValue, inputEvents }">
        <div class="row">
          <validation-provider
            v-slot="{ errors }"
            name="Başlangıç"
            :rules="rules"
            class="col-lg-6"
          >
            <m-form-group label="Başlangıç">
              <div
                class="m-input m-input--v-classic m-input--has-icon"
                style="position: relative"
              >
                <input
                  :value="inputValue.start"
                  variant="classic"
                  style="padding-left: 40px"
                  v-on="inputEvents.start"
                />
                <div class="m-input__icon">
                  <m-svg icon="calendar" />
                </div>
              </div>
              <span v-if="errors.length" class="error-text">
                {{ errors[0] }}</span
              >
            </m-form-group>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Bitiş"
            :rules="rules"
            class="col-lg-6"
          >
            <m-form-group label="Bitiş">
              <div
                class="m-input m-input--v-classic m-input--has-icon"
                style="position: relative"
              >
                <input
                  :value="inputValue.end"
                  variant="classic"
                  style="padding-left: 40px"
                  v-on="inputEvents.end"
                />
                <div class="m-input__icon">
                  <m-svg icon="calendar" />
                </div>
              </div>
              <span v-if="errors.length" class="error-text">
                {{ errors[0] }}</span
              >
            </m-form-group>
          </validation-provider>
        </div>
      </template>
    </v-date-picker>
  </div>
</template>

<script>
export default {
  props: {
    rules: String,
    value: Object,
  },
  data() {
    return {
      range: '',
    }
  },
  watch: {
    value(v) {
      this.range = v
    },
  },
  mounted() {
    this.range = this.value
  },
  methods: {
    onChange(v) {
      this.$emit('input', v)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/input';
</style>
