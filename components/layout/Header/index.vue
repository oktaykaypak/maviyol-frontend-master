<template>
  <div :class="{ sticky: stickyAktive }" class="navContainer">
    <nav :class="$style.navbar">
      <MobileMenu :open="isMobileMenuOpen" @close="isMobileMenuOpen = false" />
      <div class="d-flex">
        <n-link :class="$style.navbar__brand" :to="localePath('/')">
          <img
            src="~/assets/images/logo-white.png"
            height="35"
            width="164"
            class="img-fluid"
          />
        </n-link>
      </div>

      <div :class="$style.navbar__right">
        <div :class="[$style.navbar__item, $style.navbar__link, 'p-0']">
          <a
            active-class="-"
            class="rent-a-boat-btn"
            :href="isLoggedIn ? '/add-boat?no-cache=1' : '/tekne-ekle'"
            >Teknenizi Kaydedin</a
          >
        </div>

        <div :class="[$style.navbar__item, 'd-lg-flex', 'd-none']">
          <HeaderCurrency />
        </div>

        <div :class="[$style.navbar__item, 'd-lg-flex', 'd-none']">
          <n-link
            :class="[
              $style.navbar__icon,
              'text-decoration-none',
              'text-white p-0',
            ]"
            :to="isLoggedIn ? '/account/favorites' : ''"
          >
            <fa :icon="['fas', 'heart']" />
            <span
              v-if="getFavouriteCount > 0"
              :class="$style['navbar__icon-count']"
              >{{ getFavouriteCount > 99 ? '99' : getFavouriteCount }}</span
            >
          </n-link>

          <!-- <NotificationsDropdown /> -->
        </div>
        <div class="bells">
          <n-link
            :class="[
              $style.navbar__icon,
              'text-decoration-none',
              'text-white p-0',
            ]"
            :to="isLoggedIn ? '/account/favorites' : ''"
          >
            <fa :icon="['fas', 'bell']" />
            <span
              v-if="getFavouriteCount > 0"
              :class="$style['navbar__icon-count']"
              >{{ getFavouriteCount > 99 ? '99' : getFavouriteCount }}</span
            >
          </n-link>

          <!-- <NotificationsDropdown /> -->
        </div>

        <div
          v-if="isLoggedIn && getUser"
          :class="[$style.navbar__item, ' d-flex']"
        >
          <HeaderAuth />
        </div>

        <div v-if="!isLoggedIn" :class="[$style.navbar__item, 'd-flex']">
          <m-button
            :class="[
              $style.navbar__btn,
              $style['navbar__btn--transparent'],
              $style['navbar__btn--nowrap'],
              'mr-3 px-0 ml-0 f-14',
            ]"
            @click="$modal.show('register-modal')"
            >Kayıt Ol</m-button
          >
          <m-button
            :class="[$style.navbar__btn, $style['navbar__btn--wide'], 'f-14']"
            @click="$modal.show('login-modal')"
            >Giriş</m-button
          >
        </div>
      </div>

      <login-modal />
      <register-modal />
      <user-modal />

      <div :class="$style['navbar__right-sm']">
        <div
          v-if="$route.name.startsWith('search_type')"
          :class="[$style.navbar__item]"
        >
          <span :class="$style.navbar__icon">
            <fa :icon="['fas', 'heart']" />
            <span
              v-if="getFavouriteCount > 0"
              :class="$style['navbar__icon-count']"
              >{{ getFavouriteCount > 99 ? '99' : getFavouriteCount }}</span
            >
          </span>
        </div>

        <div :class="[$style.navbar__item]">
          <span
            :class="$style.navbar__icon"
            @click="$modal.show(isLoggedIn ? 'user-modal' : 'login-modal')"
          >
            <fa :icon="['fas', 'user']" />
          </span>
        </div>

        <div :class="[$style.navbar__item]" @click="showMobileMenu">
          <span :class="$style.navbar__icon">
            <fa :icon="['fas', 'bars']" />
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MobileMenu from './MobileMenu'
import UserModal from './UserModal'

export default {
  components: {
    MobileMenu,
    UserModal,
  },
  data() {
    return {
      isMobileMenuOpen: false,
      stickyAktive: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
      getUser: 'user/getUser',
      getFavouriteCount: 'user/getFavouriteCount',
    }),
  },
  watch: {
    $route() {
      this.isMobileMenuOpen = false
    },
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 700) {
        this.stickyAktive = true
      } else {
        this.stickyAktive = false
      }
    },
    showMobileMenu() {
      // FIXME:
      if (this.$route.matched[0].path === '/account') {
        this.$store.commit('account/setAccountSidebar', true)
      } else {
        this.isMobileMenuOpen = true
      }
    },
  },
}
</script>

<style lang="scss">
@import './auth.scss';
.sticky {
  background: rgba(47, 123, 238, 1);
  transition-duration: 0.5s;
}
.navContainer {
  display: flex;
  backdrop-filter: blur(3px);
  position: fixed;
  width: 100%;
  z-index: 10;
  box-shadow: 0 15px 35px 0 rgba(50, 50, 93, 0.1),
    0 5px 15px 0 rgba(0, 0, 0, 0.07);
  transition-duration: 0.5s;
  transition-duration: 0.5s;
}

.rent-a-boat-btn {
  border: 1px solid;
  padding: 8px;
  border-radius: 50px;
  transition-duration: 0.5s;
}
.rent-a-boat-btn:hover {
  background: #fff;
  color: #3282fd;
}
.bells {
  position: relative;
  margin-left: 1.6rem;
}
</style>

<style module lang="scss">
@import '~/assets/scss/partials/breakpoints';

.navbar {
  font-size: 14px;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  height: 70px;
  color: #fff;
  padding: 0 2.2rem;
  display: flex;
  justify-content: space-between;
  outline: none;
  border-bottom: 1px solid #fff;

  &__menu-icon {
    cursor: pointer;
    margin: 0 1rem;
    display: grid;
    place-items: center;
    display: none;

    img {
      height: 32px;
      width: 32px;
    }
  }

  &__brand {
    margin-right: 1.75rem;
    display: flex;
    align-self: center;

    @include bp(tablet) {
      margin-left: 1rem;
    }

    img {
      height: 35px;
      max-width: unset;

      @include bp(tablet) {
        height: 27px;
        width: 130px;
      }
    }
  }

  &__nav {
    display: flex;
    height: 100%;
  }

  &__list {
    display: flex;
    list-style-type: none;
  }

  &__link {
    padding: 0 20px;
    display: flex;
    text-align: center;

    a {
      text-decoration: none;
      color: #fff;
      font-weight: 300 !important;
      display: grid;
      place-items: center;
      position: relative;
      white-space: nowrap;

      &.nuxt-link-active {
        &::before {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 100%;
          border-radius: 6px 6px 0 0;
          background: #fff;
          content: '';
        }
      }
    }
  }

  &__right {
    padding: 0.5rem 0;
  }

  &__right,
  &__right-sm {
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__right-sm {
    display: none;
    padding: 0 1rem;

    .navbar__item {
      display: flex;
      &:not(:first-child) {
        margin-left: 14px;
      }
      &::after {
        display: none;
      }
    }

    .navbar__item,
    .navbar__icon {
      padding: 0 !important;
    }

    .navbar__icon {
      font-size: 1.3rem;
    }
  }

  &__icon {
    font-size: 1.1rem;
    position: relative;
    cursor: pointer;

    &:first-child {
      padding-right: 1.6rem;
    }

    &-count {
      position: absolute;
      right: -10px;
      top: -5px;
      width: 20px;
      height: 20px;
      display: grid;
      place-items: center;
      color: #fff;
      background: var(--warning);
      border: 2px solid #3282fd;
      font-size: 10px;
      border-radius: 6px;
      font-weight: 600;
      z-index: 10;
    }
  }

  &__item {
    position: relative;
    margin-left: 1.6rem;
    padding-left: 1.6rem;

    &:not(:first-child):after {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 20px;
      width: 1px;
      content: '';
      background: rgba(255, 255, 255, 0.3);
    }
  }

  &__btn {
    &--transparent {
      background: transparent !important;
      color: #fff !important;
      box-shadow: none !important;
      font-weight: 300 !important;
    }

    &--nowrap {
      white-space: nowrap;
    }

    &--wide {
      padding: 0 32px !important;
      font-weight: 600 !important;
    }
  }

  @media (max-width: 1060px) {
    &__link {
      padding: 0 10px !important;
    }
  }

  @media (max-width: 1185px) {
    &__nav {
      display: none !important;
    }
  }

  @media (max-width: 1065px) {
    &__nav {
      display: none !important;
    }
  }

  @include bp(tablet-sm) {
    padding: 0;
    height: 60px;

    &__right {
      display: none !important;
    }

    &__right-sm {
      display: flex !important;
    }

    &__menu-icon {
      display: grid !important;
    }
  }
}
</style>
