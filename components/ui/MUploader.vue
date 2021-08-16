<template>
  <validation-provider
    v-slot="{ errors }"
    ref="provider"
    :name="title"
    :vid="name"
    :rules="rules"
  >
    <div class="m-uploader">
      <span class="m-uploader__btn" @click="$refs.input.click()"
        >Dosya Yükle</span
      >
      <input
        ref="input"
        :hidden="true"
        :multiple="multiple"
        type="file"
        @change="onChange"
      />
      <span v-if="getFilesLength === 0">Yüklenmedi</span>
      <div v-if="getFilesLength > 0">
        <div>
          <span>{{ getFilesLength }} Yüklendi</span> -
          <span class="c-pointer" @click="removeFiles">Sil</span>
        </div>
      </div>
    </div>
    <!-- @refactor - validate -->
    <span v-if="errors.length > 0" class="error-text">{{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
export default {
  props: {
    value: null,
    name: String,
    title: String,
    removeEndpoint: String,
    multiple: {
      type: Boolean,
      default: true,
    },
    rules: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      files: [],
    }
  },
  computed: {
    getFilesLength() {
      const { files } = this
      if (files && typeof files === 'object') {
        return files.length
      }
      return false
    },
  },
  watch: {
    files(newValue, currentValue) {
      this.$emit('input', newValue)
    },
    value: {
      handler(newValue, currentValue) {
        if (!newValue) return

        let files
        if (typeof newValue === 'string') {
          files = [
            {
              id: 1,
              file: newValue,
            },
          ]
        } else {
          files = newValue
        }
        this.files = files
        if (process.client && this.$refs.provider) {
          this.$refs.provider.syncValue(this.files)
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async onChange(e) {
      const {
        target: { files },
      } = e
      if (files.length == 0) return
      const { valid } = await this.$refs.provider.validate(e)
      if (!valid) return
      if (this.files.length > 0) {
        if (!this.multiple) {
          this.files = files
        } else {
          this.files = [...this.files, ...files]
        }
      } else {
        this.files = files
      }
    },
    removeFiles() {
      this.$emit('remove', this.files)
      this.files = []
      setTimeout(() => {
        this.$refs.provider.validate(this.files)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.m-uploader {
  height: 48px;
  display: flex;
  align-items: center;
  color: var(--dusk);
  font-size: 14px;
  margin-bottom: 30px;

  &__btn {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 100px;
    border: solid 1px #ced4da;
    background-color: #f6f9fc;
    font-size: 14px;
    font-weight: 600;
    margin-right: 0.5rem;
    user-select: none;
  }
}
</style>
