<template>
  <add-boat-content ref="content" title="Sigorta" @next="handleSubmit">
    <validation-observer ref="form">
      <div class="mt-30 mb-30">
        <div class="f-14 mb-2">
          Tekne sigortası kapsamını ve belgesini yükleyin
        </div>
        <div class="row">
          <m-form-group label="Tekne Sigortası" class="col-lg-6">
            <m-select
              v-model="form.type"
              :options="insuranceOptions"
              title="Tekne Sigortası"
              rules="required"
              placeholder="Lütfen seçiniz."
            />
          </m-form-group>
          <m-form-group
            v-if="form.type == 'PARTIALLY' || form.type == 'COMPLETELY'"
            label="Sigorta Belgesi"
            class="col-lg-6"
          >
            <m-uploader
              v-model="form.document"
              :multiple="false"
              rules="required|ext:pdf,png,jpg,jpeg,docx"
              name="document"
              title="Sigorta Belgesi"
            />
          </m-form-group>
        </div>
      </div>
    </validation-observer>
  </add-boat-content>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      insuranceOptions: [
        {
          value: 'NOPE',
          text: 'Yok',
        },
        {
          value: 'PARTIALLY',
          text: 'Var',
        },
        {
          value: 'COMPLETELY',
          text: 'Tamamen',
        },
      ],
      form: {
        type: '',
        document: [],
      },
    }
  },
  computed: {
    ...mapGetters({
      getTransactionId: 'add-boat/getTransactionId',
    }),
  },
  watch: {
    'form.type'(v) {
      if (v == 'NOPE') {
        this.form.document = []
      }
    },
  },
  mounted() {
    this.getInsurance()
  },
  methods: {
    async handleSubmit() {
      const validate = await this.$refs.form.validate()

      if (!validate) return false

      this.$store.commit('add-boat/setUpdating', true)

      const { document, type } = this.form
      const formData = new FormData()
      if (document.length) {
        formData.append('document', document[0])
      }
      formData.append('type', type)

      try {
        await this.$repositories.boat.insurance.updateInsurance(
          formData,
          this.getTransactionId
        )
        this.$refs.content.next()
      } catch (error) {
        this.$validation.setErrors(this.$refs.form, error)
        this.$toast.error('Bir hata meydana geldi.')
      }
      this.$store.commit('add-boat/setUpdating', false)
    },
    async getInsurance() {
      try {
        const res = await this.$repositories.boat.insurance.getInsurance(
          this.getTransactionId
        )
        if (res.data) {
          this.form = res.data
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
