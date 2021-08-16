<template>
  <div class="faq row">
    <div class="col-12">
      <h1 class="title">
        <fa
          class="image"
          style="font-size: 24px; margin-right: 21px"
          :icon="['fa', 'life-ring']"
        />
        Sıkca Sorulan Soru Detayları
      </h1>
      <hr />
      <div v-for="item in getFaqsPageData" :key="item.id" class="items">
        <div class="item-header">
          <h3 class="item-title" @click="openBrac({ id: item.id })">
            {{ item.title }}
          </h3>
          <div class="icon-outline" @click="openBrac({ id: item.id })">
            <fa
              v-if="selected.find((x) => x.id == item.id).status == false"
              style="font-size: 24px"
              :icon="['fa', 'plus']"
            />
            <fa v-else style="font-size: 28px" :icon="['fa', 'times']" />
          </div>
        </div>
        <p
          v-if="selected.find((x) => x.id == item.id).status == true"
          class="item-context"
        >
          {{ item.context }}
        </p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      selected: [],
    }
  },
  computed: {
    ...mapGetters({
      getFaqsPageData: 'boat/getFaqsPageData',
    }),
  },
  created() {
    this.getFaqsPageData.forEach((item) => {
      this.selected.push({ id: item.id, status: false })
    })
  },
  methods: {
    openBrac({ id }) {
      const item = this.selected.findIndex((item) => item.id === id)

      this.selected[item].status = !this.selected[item].status
    },
  },
}
</script>

<style lang="scss" scoped>
.faq {
  h3 {
    margin: 0;
  }

  .title {
    font-family: 'Open Sans';
    font-size: 24px;
    font-weight: 600;
    color: #192d4f;
  }

  .items {
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item-title {
        font-family: 'Open Sans';
        font-size: 18px;
        font-weight: 600;
        color: #0d3d64;
      }

      .icon-outline {
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .item-context {
      margin-top: 10px;
    }
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    opacity: 0.5;
  }
}
@media screen and (max-width: 800px) {
  .faq .title {
    font-size: 18px !important;
  }
  .faq .items .item-header .item-title {
    font-size: 15px;
    font-weight: 600;
  }
  .faq .items .item-context {
    font-size: 14px;
  }
}
</style>
