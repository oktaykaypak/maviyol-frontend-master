<template>
  <div class="home-campaigns">
    <div class="container">
      <div class="d-flex">
        <m-button variant="primary" class="home-campaigns__category-btn">{{
          $t('campaing_category_btn_primary')
        }}</m-button>
        <m-button class="home-campaigns__category-btn">{{
          $t('campaing_category_btn')
        }}</m-button>
        <m-button class="home-campaigns__category-btn">{{
          $t('campaing_category_btn')
        }}</m-button>
        <m-button class="home-campaigns__category-btn">{{
          $t('campaing_category_btn')
        }}</m-button>
      </div>
      <div class="pt-4">
        <div class="campaing">
          <div class="campaing__header">
            <div class="campaing__header-list">
              <div class="list__item selected__item">
                Bodrum <span>00 Sonuç</span>
              </div>
              <div class="list__item">Fethiye <span>00 Sonuç</span></div>
              <div class="list__item">Marmaris <span>00 Sonuç</span></div>
              <div class="list__item">Göcek <span>00 Sonuç</span></div>
              <div class="list__item">Kekova <span>00 Sonuç</span></div>
              <div class="list__item">Marmaris <span>00 Sonuç</span></div>
            </div>
            <p class="campaing__header-seeall">
              {{ $t('campaing_header_seeall') }}
            </p>
          </div>
          <div class="campaing__boats">
            <div class="boat">
              <div class="boat__image"></div>
              <p class="boat__title">Zekioğlu</p>
              <div class="boat__details">
                <p class="boat__details-location">Bozburun</p>
                <p class="boat__details-price">1.250 TL</p>
              </div>
            </div>
            <div class="boat">
              <div class="boat__image"></div>
              <p class="boat__title">Zekioğlu</p>
              <div class="boat__details">
                <p class="boat__details-location">Bozburun</p>
                <p class="boat__details-price">1.250 TL</p>
              </div>
            </div>
            <div class="boat">
              <div class="boat__image"></div>
              <p class="boat__title">Zekioğlu</p>
              <div class="boat__details">
                <p class="boat__details-location">Bozburun</p>
                <p class="boat__details-price">1.250 TL</p>
              </div>
            </div>
            <div class="boat">
              <div class="boat__image"></div>
              <p class="boat__title">Zekioğlu</p>
              <div class="boat__details">
                <p class="boat__details-location">Bozburun</p>
                <p class="boat__details-price">1.250 TL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        cellAlign: 'left',
      },
    }
  },
}
</script>

<style lang="scss">
.selected__item {
  font-weight: bold;
  color: #3a3e49;
}

.campaing {
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 0 50px 0 0;
    margin-bottom: 20px;

    &-list {
      display: flex;
      justify-content: space-between;
      flex: 5;

      .list__item {
        color: #a5abbb;
        cursor: pointer;

        span {
          margin-left: 5px;
        }
      }
    }

    &-seeall {
      flex: 1;
      color: #3282fd;
      display: flex;
      font-weight: bold;
      justify-content: flex-end;
    }
  }

  &__boats {
    display: flex;
    justify-content: flex-start;

    .boat:hover {
      background-color: #3282fd;
    }

    .boat:hover .boat__title,
    .boat:hover .boat__details-location,
    .boat:hover .boat__details-price {
      color: #fff;
    }

    .boat {
      margin-right: 20px;
      width: 300px;
      height: 355px;
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      background-color: #fff;

      &__image {
        height: 280px;
        width: 100%;
        background-image: url('~assets/images/banner.webp');
        background-position: center;
        background-size: cover;
        margin-bottom: 20px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }

      &__title {
        font-weight: bold;
        padding: 0 15px;
      }

      &__details {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;

        &-price {
          font-weight: bold;
          color: #3282fd;
        }
      }
    }
  }
}
</style>
