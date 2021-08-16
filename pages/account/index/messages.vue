<template>
  <m-card class="account-page-card">
    <h3 class="account-page-card__title">Mesajlar</h3>
    <span>Yeni gelen mesaj yok.</span>
    <m-tabs v-if="false" class="messages__tabs">
      <m-tab class="messages__tabs-all" title="Tüm Mesajlar (1)" active>
        <div class="messages__box">
          <div class="messages__box-header d-flex">
            <div
              class="header__image"
              :style="`background: url(${require('~/assets/images/banner.webp')})`"
            ></div>
            <div class="header__title">
              <p class="header__title-main">Aqua Marin Lüx Tekne</p>
              <p class="header__title-date">Bugün 17.54</p>
            </div>
          </div>
          <div class="messages__box-content">
            <p class="content__title">Merhab...</p>
            <p class="content__user">
              Ebru <span class="content__user-tag">(Misafir)</span>
            </p>
          </div>
        </div>
      </m-tab>
    </m-tabs>
  </m-card>
</template>

<style lang="scss" scoped>
.messages {
  display: flex;
  flex-direction: column;

  &__box:first-child {
    margin-top: 30px;
  }

  &__box:last-child {
    margin-bottom: 70px !important;
  }

  .messages__readed {
    background-color: #fff !important;
    border: 1px solid #fff !important;

    p,
    h3,
    span {
      color: #8898aa;
    }
  }

  &__box {
    background: #eff5ff;
    padding: 20px;
    width: 100%;
    height: 120px;
    margin-bottom: 10px;
    border: 1px solid transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    transition: all 0.3s ease-in-out;

    &:hover {
      border: 1px solid var(--primary);
    }

    &-header {
      flex: 1;

      .header__image {
        width: 50px;
        height: 50px;
        background-size: cover !important;
        background-position: center !important;
        border-radius: 4px;
      }

      .header__title {
        flex: 5;
        padding-left: 20px;

        &-main {
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          color: #32325d;
          margin-bottom: 4px;
        }
        &-date {
          font-size: 12px;
          line-height: 16px;
          color: #32325d;
        }
      }
    }
    &-content {
      display: flex;
      justify-content: space-between;

      .content__title {
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #32325d;
      }

      .content__user {
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        color: #32325d;
      }
    }
  }
}
</style>
