<template>
  <m-modal name="user-modal" :no-card="true" body-class="m-0">
    <div class="user-modal">
      <ul>
        <li>
          <n-link to="/account/profile">
            <fa :icon="['far', 'user-circle']" />
            <span>Profil Bilgileri</span>
          </n-link>
        </li>
        <li>
          <n-link to="/account/reservations">
            <fa :icon="['far', 'calendar-alt']" />
            <span>Rezervasyonlar</span>
          </n-link>
        </li>
        <li>
          <n-link to="/account/messages">
            <fa :icon="['far', 'envelope']" />
            <span>Mesajlaşmalar</span>
          </n-link>
        </li>
        <li>
          <n-link to="/account/favorites">
            <fa :icon="['fas', 'heart']" />
            <span>Favorilerim</span>
          </n-link>
        </li>
        <li>
          <a @click="logout">
            <fa :icon="['fas', 'sign-out-alt']" />
            <span>Çıkış Yap</span>
          </a>
        </li>
      </ul>
    </div>
    <span class="user-modal__close" @click="hide">
      <m-svg icon="close" />
    </span>
  </m-modal>
</template>

<script>
export default {
  watch: {
    $route() {
      this.hide()
    },
  },
  methods: {
    logout() {
      this.$repositories.auth.logout()
      this.$router.replace('/')
      this.hide()
    },
    hide() {
      this.$modal.hide('user-modal')
    },
  },
}
</script>

<style lang="scss" scoped>
.user-modal {
  width: 100vw;
  height: 100vh;
  background: #fff;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;

  &__close {
    position: absolute;
    right: 15px;
    top: 15px;

    img {
      width: 15px;
      height: 15px;
    }
  }

  ul {
    list-style-type: none;

    li {
      padding-bottom: 1rem;
      font-size: 1rem;
      display: flex;
      align-items: center;

      svg {
        color: var(--text-color);
        margin-right: 10px;
        width: 18px;
        height: 18px;
      }

      a {
        font-weight: 300;
        color: var(--text-color);
        text-decoration: none;
      }
    }
  }
}
</style>
