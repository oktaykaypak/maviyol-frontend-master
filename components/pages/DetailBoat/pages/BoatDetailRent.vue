<template>
  <div class="row">
    <div class="col-12">
      <div class="boatDetailHeading">
        <fa
          style="font-size: 24px; margin-right: 19px"
          :icon="['fa', 'life-ring']"
        />
        <h1>Teslim Alma Detayı</h1>
      </div>

      <div
        v-for="(item, index) in getRentPageData"
        :key="index"
        class="categorie"
      >
        <h3 class="subCategorieTitle">{{ item.title }}</h3>
        <ul class="subCategorie">
          <li v-for="(inItem, inIndex) in item.list" :key="inIndex">
            <fa
              style="font-size: 18px; margin-right: 12px"
              :icon="inItem.icon"
            />
            <span> {{ inItem.body }} </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getRentPageData: 'boat/getRentPageData',
    }),
  },
}
</script>

<style lang="scss" scoped>
.boatDetailHeading {
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  padding-bottom: 19px;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 28px;
  h1 {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 0;
  }
}
.categorie {
  margin-top: 30px;
  &.other {
    margin-top: 34px;
    padding-top: 23px;
    border-top: 1px solid #d8d8d8;
  }
  .subCategorieTitle {
    font-size: 16px;
    font-weight: 700;
  }

  .subCategorie {
    padding-top: 15px;
    padding-bottom: 33px;
    border-bottom: 1px solid #d8d8d8;

    li {
      display: flex;
      align-content: center;
      margin-bottom: 15px;
      span {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}

.receiving {
  margin-top: 33px;
  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  ul {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
      span {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}
</style>
