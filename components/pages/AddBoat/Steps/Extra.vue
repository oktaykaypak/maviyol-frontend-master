<template>
  <add-boat-content
    ref="content"
    title="Extralar ve Olanaklar"
    class="extra"
    @next="$refs.content.next()"
  >
    <span class="f-14 d-block mb-30"
      >Tekne ekipmanlarınızı yazmanız müşterilerin sizi tercih etmesindeki
      önemli ayrıcalıklardandır.
    </span>
    <div>
      <suggestion-input
        v-model="extra"
        :request="$repositories.suggestion.equipments"
        placeholder="Ara"
      />
    </div>

    <div class="row mb-4">
      <div v-for="(item, index) in form.extras" :key="index" class="col-lg-12">
        <div class="add-boat__search-item extra__item">
          <div class="d-flex">
            <m-svg
              icon="trash-alt"
              class="add-boat__search-item-remove"
              @click.native="deleteExtra(item.id)"
            />
            <span>{{ item.inventory.name }}</span>
          </div>
          <div>
            <m-input
              v-model="form.extras[index].amount"
              :sm="true"
              placeholder="Fiyat"
              variant="classic"
              custom-class="mb-0"
              input-class="px-2"
              @input="onItemChange(item.id)"
            />
          </div>
          <div>
            <m-select
              v-model="form.extras[index].unit"
              :sm="true"
              :options="types"
              custom-class="mb-0"
              select-class="px-2"
              @input="onItemChange(item.id)"
            />
          </div>
          <div>
            <m-input
              v-model="form.extras[index].comment"
              :sm="true"
              placeholder="Açıklama(isteğe bağlı)"
              variant="classic"
              custom-class="mb-0"
              input-class="px-2"
              @input="onItemChange(item.id)"
            />
          </div>
          <div>
            <m-checkbox
              v-model="form.extras[index].obligatory"
              variant="classic"
              @change="onItemChange(item.id)"
              >Zorunlu</m-checkbox
            >
          </div>
        </div>
      </div>
    </div>
  </add-boat-content>
</template>

<script>
import { mapGetters } from 'vuex'

const types = [
  {
    value: 'DAY',
    text: 'Günlük',
  },
  {
    value: 'WEEK',
    text: 'Haftalık',
  },
  {
    value: 'BOOKING',
    text: 'Saatlik',
  },
  {
    value: 'PERSON',
    text: 'Kişi Sayısı',
  },
]

export default {
  data() {
    return {
      types,
      extra: '',
      form: {
        unit: '',
        extras: [],
      },
    }
  },
  computed: {
    ...mapGetters({
      getTransactionId: 'add-boat/getTransactionId',
    }),
  },
  watch: {
    async extra(value) {
      if (value.id && !this.form.extras.find((v) => value.id === v.id)) {
        const payload = {
          inventory: value.id,
          amount: '',
          comment: '',
          obligatory: false,
          unit: 'BOOKING',
        }

        try {
          const res = await this.$repositories.boat.extra.newExtra(
            payload,
            this.getTransactionId
          )
          this.getExtras()
        } catch (e) {
          this.$toast.error('Bir hata meydana geldi.')
          console.log(e)
        }
        this.extra = ''
      }
    },
  },
  mounted() {
    this.getExtras()
  },
  methods: {
    async deleteExtra(id) {
      try {
        const res = await this.$repositories.boat.extra.deleteExtra(
          id,
          this.getTransactionId
        )
        const n = this.form.extras.filter((v) => v.id !== id)
        this.form.extras = n
      } catch (error) {
        this.$toast.error('Silinemedi')
      }
    },
    async getExtras() {
      try {
        const res = await this.$repositories.boat.extra.getExtras(
          this.getTransactionId
        )
        if (res.data) {
          this.form.extras = res.data
        }
      } catch (e) {
        console.error(e)
      }
    },
    onItemChange(id) {
      if (!this.form.extras.length) return false

      clearTimeout(this.updateCooltime)

      this.updateCooltime = setTimeout(async () => {
        const item = this.form.extras.find((v) => v.id == id)
        if (item) {
          const payload = {
            inventory: item.id,
            amount: item.amount,
            comment: item.comment,
            unit: item.unit,
            obligatory: item.obligatory,
          }

          try {
            await this.$repositories.boat.extra.updateExtra(
              payload,
              id,
              this.getTransactionId
            )
          } catch (error) {
            this.$toast.error('Bir hata meydana geldi.')
            console.error(error)
          }
        }
      }, 200)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.extra {
  &__item {
    display: grid;
    grid-template-columns: 2fr 0.75fr 2fr 2fr 0.75fr;
    gap: 15px;

    @include bp(tablet-sm) {
      grid-template: 1fr / auto;
      padding-bottom: 20px;

      &:not(:last-child) {
        border-bottom: 1px solid #e2e2e2;
      }
    }
  }
}
</style>
