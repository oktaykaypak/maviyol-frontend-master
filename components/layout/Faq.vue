<template>
  <div
    class="w-100 d-flex flex-column justify-content-center align-items-center"
  >
    <!-- FIXME: NOT BEST PRACTICE -->
    <PagePharagraph
      v-if="type === 'YACHT' && $route.name.startsWith('search_type-location')"
    />
    <h3 class="text-night-blue font-weight-bold mb-5">Sıkça Sorulan Sorular</h3>
    <div class="mb-3 d-flex justify-content-end w-100">
      <div class="d-flex align-items-center c-pointer">
        <span class="text-primary pr-2 font-weight-semibold" @click="showAll"
          >Tümünü Göster</span
        >
        <m-svg
          icon="angle-icon-primary"
          :style="open && 'transform: rotate(180deg)'"
          style="transition: transform 0.3s ease-in-out"
          height="12"
        />
      </div>
    </div>
    <div class="w-100 flex-column d-flex">
      <FaqItem v-for="x in 5" :key="x" :ref="'faq-item-' + x" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FaqItem from '~/components/layout/FaqItem'
import PagePharagraph from '~/components/layout/PagePharagraph'
export default {
  components: {
    FaqItem,
    PagePharagraph,
  },
  data() {
    return {
      open: false,
    }
  },
  computed: {
    ...mapGetters({
      type: 'search/getType',
    }),
  },
  methods: {
    showAll() {
      const faqItems = Object.keys(this.$refs).filter((v) =>
        v.startsWith('faq-item-')
      )
      for (let i = 0; i < faqItems.length; i++) {
        if (!this.$refs[faqItems[i]].length) continue
        if (this.open) {
          this.$refs[faqItems[i]][0].hide()
        } else {
          this.$refs[faqItems[i]][0].show()
        }
      }
      this.open = !this.open
    },
  },
}
</script>
