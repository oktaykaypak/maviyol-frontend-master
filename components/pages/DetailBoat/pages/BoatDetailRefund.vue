<template>
  <div class="row">
    <div class="col-12">
      <section id="refund">
        <div class="header">
          <fa
            style="font-size: 24px; margin-right: 21px"
            :icon="['fa', 'life-ring']"
          />
          <h1>İptal ve İade Detayları</h1>
        </div>
        <div v-if="false" class="dates">
          <h3>Tarihler</h3>
          <div class="innerDate">
            <span> {{ getRefundPageData.date.start }} </span>
            <img
              src="/icons/right-arrow.svg"
              style="color: #525f7f; margin-left: 10px; margin-right: 10px"
              width="18"
              height="14"
              alt=""
            />

            <span>{{ getRefundPageData.date.end }}</span>
          </div>
        </div>
        <div class="policy">
          <h2>COVID - 19 İptal Politikası</h2>
          <div class="whiteBox">
            <img
              src="/icons/check-circle.svg"
              style="margin-right: 7px"
              alt=""
            />
            <span>Esnek Yeniden. Planlama Seçeneği </span>
          </div>
          <ul>
            <li v-for="(item, index) in getRefundPageData.rules" :key="index">
              <span class="dot" />
              <span>{{ item }} </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getRefundPageData: 'boat/getRefundPageData',
    }),
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding-bottom: 21px;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 30px;
  h1 {
    font-size: 24px;
    margin-bottom: 0;
    font-weight: 700;
    margin-right: 20px;
    color: #192d4f;
  }
}
.dates {
  h3 {
    font-size: 16px;
    font-weight: 700;
    color: #192d4f;
  }

  .innerDate {
    span {
      font-size: 14px;
      font-weight: 700;
    }
  }
}
.policy {
  margin-top: 36px;
  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 9px;
    color: #192d4f;
  }
  .whiteBox {
    background-color: #f4f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 315px;
    height: 50px;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 19px;
  }
  ul {
    li {
      display: flex;
      align-items: center;
      .dot {
        background-color: #3182fd;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-right: 13px;
        line-height: 24px;
        display: block;
      }
      span {
        font-size: 16px;
        color: #192d4f;
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .header h1 {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
