<template>
  <div>
    <m-uploader
      v-model="documents"
      :multiple="false"
      name="seaworthinessDocument"
      title="Denize Elverişlilik Belgesi"
      @remove="removeDocuments"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['value'],
  data() {
    return {
      documents: [],
    }
  },
  computed: {
    ...mapGetters({
      getTransactionId: 'add-boat/getTransactionId',
    }),
  },
  watch: {
    documents(value) {
      this.$emit('input', value)
    },
    value: {
      handler(value) {
        if (typeof value === 'string') {
          this.documents = [value]
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    removeDocuments(files) {
      try {
        this.$repositories.boat.document.deleteDocument(this.getTransactionId)
        this.documents = []
      } catch (error) {
        this.$toast.error('Bir hata meydana geldi.')
      }
    },
  },
}
</script>
