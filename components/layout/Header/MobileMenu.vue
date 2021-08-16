<template>
  <!-- FIXME: unused el rendered -->
  <transition name="fade">
    <div v-show="open" class="navbar__mobile-menu">
      <div class="navbar__mobile-menu-overlay" @click="$emit('close')"></div>
      <transition name="show">
        <div v-if="open" class="navbar__mobile-menu-content">
          <div class="navbar__mobile-menu-header">
            <img
              src="~/assets/icons/close.svg"
              class="navbar__mobile-menu-close"
              @click="$emit('close')"
            />
          </div>
          <div v-if="!isLoggedIn" class="navbar__mobile-menu-list">
            <a class="navbar__mobile-menu-item" @click="showLoginModal">
              Giriş Yap
            </a>
            <a class="navbar__mobile-menu-item" @click="showRegisterModal">
              Kayıt Ol
            </a>
            <n-link
              class="navbar__mobile-menu-item"
              :to="isLoggedIn ? '/add-boat?no-cache=1' : ''"
            >
              Teknenizi Kaydedin
            </n-link>
          </div>
          <div v-if="isLoggedIn">
            <div class="navbar__mobile-menu-list">
              <n-link
                class="navbar__mobile-menu-item navbar__mobile-menu-item-angle"
                to="/account"
              >
                <div class="d-flex align-items-center justify-content-center">
                  <div
                    class="navbar__mobile-menu-item-profile"
                    :style="`background: url(${avatar.medium})`"
                  />
                  <span>{{ user.name }}</span>
                </div>
              </n-link>
            </div>
            <div class="navbar__mobile-menu-list">
              <a
                class="navbar__mobile-menu-item navbar__mobile-menu-item-angle"
              >
                Kayıtlı Tekneler
              </a>
            </div>
          </div>
          <div class="navbar__mobile-menu-list">
            <n-link class="navbar__mobile-menu-item" to="">
              Kabin Kiralama
            </n-link>
            <n-link class="navbar__mobile-menu-item" to="/add-boat?no-cache=1">
              Tekne Kiralama
            </n-link>
            <n-link class="navbar__mobile-menu-item" to="">
              Cruise Tutarları
            </n-link>
          </div>
          <div class="navbar__mobile-menu-list">
            <n-link
              class="navbar__mobile-menu-item"
              :to="isLoggedIn ? '/add-boat?no-cache=1' : ''"
            >
              Teknenizi Kaydedin
            </n-link>
          </div>
          <div class="navbar__mobile-menu-footer">
            <img src="~/assets/images/logo-grey.png" />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
      avatar: 'user/getAvatar',
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
  methods: {
    showLoginModal() {
      this.$emit('close')
      this.$modal.show('login-modal')
    },
    showRegisterModal() {
      this.$emit('close')
      this.$modal.show('register-modal')
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar__mobile-menu {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  transition: all 0.3s cubic-bezier(0.32, 0.08, 0.24, 1);

  &-list {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e9ecef;
  }

  &-item {
    padding: 0 1rem;
    margin-bottom: 20px;
    text-decoration: none;
    color: var(--text-color);
    font-weight: 600;
    width: 100%;
    cursor: pointer;

    &-profile {
      width: 40px;
      height: 40px;
      border-radius: 100px;
      background-size: cover !important;
      background-position: center !important;
      margin-right: 10px;
    }

    &-angle {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &::after {
        content: '';
        width: 0.8rem;
        height: 0.5rem;
        background: url('~assets/icons/angle-icon.svg?data');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    }

    &:first-child {
      margin-top: 20px;
    }
  }

  &-close {
    height: 16px;
    width: 16px;
    cursor: pointer;
  }

  &-overlay {
    background: rgba(23, 43, 77, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  &-content {
    width: 80%;
    position: relative;
    height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    transition: all 0.3s cubic-bezier(0.32, 0.08, 0.24, 1);
  }

  &-header {
    padding: 1rem;
  }

  &-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;

    img {
      height: 40px;
      max-width: auto;
    }
  }
}
</style>
