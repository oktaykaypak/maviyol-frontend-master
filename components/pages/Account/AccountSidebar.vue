<template>
  <div>
    <div
      v-click-outside="hide"
      :class="[
        $style['account-sidebar'],
        isAccountSidebarOpen && $style['account-sidebar--open'],
      ]"
    >
      <div :class="$style['account-sidebar__header']">
        <img :src="getAvatar.medium" />
        <span class="account-sidebar__name">{{ user.name }}</span>
      </div>

      <n-link to="/account" :class="$style['account-sidebar__item']">
        <m-svg
          icon="dashboard-icon"
          :class="$style['account-sidebar__item-icon']"
        />
        <span :class="$style['account-sidebar__item-label']"
          >Genel Bilgiler</span
        >
      </n-link>

      <n-link to="/account/profile" :class="$style['account-sidebar__item']">
        <m-svg
          icon="profile-square"
          :class="$style['account-sidebar__item-icon']"
        />
        <span :class="$style['account-sidebar__item-label']"
          >Profil Bilgisi</span
        >
      </n-link>

      <n-link to="/account/messages" :class="$style['account-sidebar__item']">
        <m-svg
          icon="message-icon"
          :class="$style['account-sidebar__item-icon']"
        />
        <span :class="$style['account-sidebar__item-label']">Mesajlarım</span>
      </n-link>

      <n-link
        to="/account/reservations"
        :class="$style['account-sidebar__item']"
      >
        <m-svg
          icon="checklist-icon"
          :class="$style['account-sidebar__item-icon']"
        />
        <span :class="$style['account-sidebar__item-label']"
          >Rezervasyonlarım</span
        >
      </n-link>

      <n-link to="/account/favorites" :class="$style['account-sidebar__item']">
        <m-svg
          icon="rounded-square-icon"
          :class="$style['account-sidebar__item-icon']"
        />
        <span :class="$style['account-sidebar__item-label']">Favoriler</span>
      </n-link>

      <n-link
        v-if="isRenter"
        to="/add-boat"
        :class="$style['account-sidebar__item']"
      >
        <m-svg
          icon="forward-boat-icon"
          :class="$style['account-sidebar__item-icon']"
        />
        <span :class="$style['account-sidebar__item-label']">Tekne Ekle</span>
      </n-link>

      <n-link
        v-if="isRenter"
        to="/account/boats"
        :class="$style['account-sidebar__item']"
      >
        <m-svg
          icon="announcement-icon"
          :class="$style['account-sidebar__item-icon']"
        />
        <span :class="$style['account-sidebar__item-label']">İlanlar</span>
      </n-link>

      <n-link
        v-if="isRenter"
        to="/account/requests"
        :class="$style['account-sidebar__item']"
      >
        <m-svg
          icon="user-request-icon"
          :class="$style['account-sidebar__item-icon']"
        />
        <span :class="$style['account-sidebar__item-label']">Talepler</span>
      </n-link>

      <n-link
        v-if="isRenter"
        to="/account/company"
        :class="$style['account-sidebar__item']"
      >
        <m-svg
          icon="handbag-icon"
          :class="$style['account-sidebar__item-icon']"
        />
        <span :class="$style['account-sidebar__item-label']"
          >Şirket Profili</span
        >
      </n-link>

      <a :class="$style['account-sidebar__item']" @click="logout">
        <m-svg
          icon="close-circle-icon"
          :class="$style['account-sidebar__item-icon']"
        />
        <span :class="$style['account-sidebar__item-label']">Çıkış</span>
      </a>
      <span
        :class="['c-pointer', $style['account-sidebar__close']]"
        @click="hide"
      >
        <m-svg icon="close" />
      </span>
    </div>
    <div
      :class="[
        $style['account-sidebar__overlay'],
        isAccountSidebarOpen && $style['account-sidebar__overlay--open'],
      ]"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isRenter: 'user/isRenter',
      user: 'user/getUser',
      getAvatar: 'user/getAvatar',
      isAccountSidebarOpen: 'account/isAccountSidebarOpen',
    }),
  },
  watch: {
    $route() {
      this.setBodyScroll('auto')
      this.hide()
    },
    isAccountSidebarOpen(v) {
      if (v) {
        this.setBodyScroll('hidden')
      }
    },
  },
  methods: {
    logout() {
      this.$repositories.auth.logout()
      this.$router.replace('/')
    },
    hide() {
      this.$store.commit('account/setAccountSidebar', false)
      this.setBodyScroll('auto')
    },
    setBodyScroll(value) {
      document.getElementsByTagName('body')[0].style.overflow = value
    },
  },
}
</script>

<style lang="scss" scoped module>
@import '~/assets/scss/partials/breakpoints';

$transition: 0.36s cubic-bezier(0.32, 0.08, 0.24, 1);

// FIXME:
.account-sidebar__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(23, 43, 77, 0.6);
  content: '';
  z-index: 90;
  opacity: 0;
  left: -100vw;
  transition: opacity $transition;
  display: none;
}

.account-sidebar {
  background: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.07),
    0px 15px 4px rgba(50, 50, 93, 0.01);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  min-height: 100vh;

  @include bp(tablet) {
    position: fixed;
    height: 100vh;
    top: 0;
    left: calc(-100vw + 20vw);
    transition: left $transition;
    z-index: 100;
    overflow-y: scroll;
    padding-bottom: 130px;
    width: 80vw;
    border-radius: 0;

    &__close {
      display: block !important;
    }

    &__header {
      align-items: flex-start !important;
      padding-left: 30px !important;
      margin-bottom: 0 !important;

      span {
        padding-bottom: 0;
      }

      img {
        width: 80px !important;
        height: 80px !important;
        margin-bottom: 1rem;
      }
    }

    &__name {
      font-size: 14px;
    }

    &__item {
      font-size: 14px;
      padding-left: 2rem !important;

      &:not(:last-child) {
        padding-bottom: 0.5rem;
      }
    }
  }

  &__close {
    position: absolute;
    left: 15px;
    top: 20px;
    display: none;

    img {
      width: 15px;
      height: 15px;
    }
  }

  &--open {
    left: 0;
  }

  &__header {
    padding: 1rem 0;
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;

    img {
      border: 4px solid #dee2e6;
      width: 100px;
      height: 100px;
      border-radius: 100px;
    }
  }

  &__name {
    padding: 14px 0;
    color: var(--dark-blue);
    font-size: 1.1rem;
  }

  &__item {
    padding: 1rem 3rem;
    cursor: pointer;
    transition: background 100ms ease-in-out;
    color: var(--dark-blue);
    display: flex;
    font-weight: 600;
    text-decoration: none;
    align-items: center;

    &:hover {
      background: #f6f9fc;
    }

    &-notification {
      margin-left: 15px;
      height: 18px;
      width: 18px;
      background: var(--warning);
      font-weight: 600;
      color: #fff;
      display: grid;
      place-items: center;
      font-size: 12px;
      border-radius: 4px;
    }

    &-icon {
      width: 20px;
      height: 20px;
      margin-right: 16px;
    }
  }
}
</style>
