<template>
  <footer class="footer">
    <div class="container">
      <JoinNewsletter />
      <div class="footer__content">
        <div>
          <img
            src="~/assets/images/logo-grey.png"
            class="img-fluid footer__logo"
            height="30"
            width="100"
            alt=""
          />
        </div>
        <div v-for="x in 4" :key="x">
          <m-accordion only-mobile>
            <template v-slot:heading="{ isActive }">
              <h5
                class="footer__label"
                :class="{ 'footer__label--active': isActive }"
              >
                Hizmetler
              </h5>
            </template>
            <template v-slot:content>
              <ul class="footer__list">
                <li>
                  <n-link to="/">Hakkımızda</n-link>
                </li>
                <li>
                  <n-link to="/">Tarihçe</n-link>
                </li>
                <li>
                  <n-link to="/">Nasıl çalışır?</n-link>
                </li>
                <li>
                  <n-link to="/">Sıkça Sorulan Sorular</n-link>
                </li>
                <li>
                  <n-link to="/">Blog</n-link>
                </li>
              </ul>
            </template>
          </m-accordion>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="mb-lg-0 mb-3 text-center">
          <span class="text-dark-blue"
            >©2019 maviyolculuk.net™ Tatil Rehberi Turizm A.Ş.
            iştirakidir.</span
          >
        </div>
        <div class="d-flex">
          <m-button
            class="social-media-btn social-media-btn--twitter"
            to="/"
            aria-label="Twitter"
          >
            <fa :icon="['fab', 'twitter']" />
          </m-button>
          <m-button
            class="social-media-btn social-media-btn--facebook"
            to="/"
            aria-label="Facebook"
          >
            <fa :icon="['fab', 'facebook-square']" />
          </m-button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.footer {
  width: 100%;
  background: #fff;

  @include bp(tablet-sm) {
    &__content {
      grid-template-columns: 1fr !important;
      gap: 10px;
    }

    &__bottom {
      justify-content: center !important;
      flex-direction: column;
      height: auto !important;
      padding: 2rem 0;
    }
  }

  .social-media-btn {
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    &:not(:last-child) {
      margin-right: 10px;
    }

    &--twitter {
      background: #1da1f2;
    }

    &--facebook {
      background: #3b5999;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 150px repeat(4, 1fr);
    padding: 2rem 0;
  }

  &__label {
    display: flex;
    align-items: center;
    font-weight: 600;
    margin: 4px 0 20px 0;

    @include bp(tablet-sm) {
      position: relative;
      margin-bottom: 10px !important;

      &--active::after {
        transform: rotate(180deg);
      }

      &::after {
        transition: transform 0.3s ease-in-out;
        position: absolute;
        content: '';
        right: 0;
        top: 0;
        height: 100%;
        background: url(~assets/icons/angle-icon.svg) no-repeat center;
        background-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;

    li {
      margin-bottom: 10px;

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #dee2e6;
    height: 120px;
  }
}
</style>
