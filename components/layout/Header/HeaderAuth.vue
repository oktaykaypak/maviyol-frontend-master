<template>
  <m-dropdown ref="userDropdown">
    <template v-slot:button>
      <div class="navbar__user pr-3">
        <div class="d-flex align-items-center">
          <div
            :style="`background: url(${getAvatar.medium})`"
            class="navbar__user-pp"
            alt=""
          />
          <div class="mr-2">
            {{ user.name }}
          </div>
        </div>
        <div>
          <fa :icon="['fas', 'chevron-down']" />
        </div>
      </div>
    </template>
    <m-dropdown-item to="/account">Profil</m-dropdown-item>
    <m-dropdown-item to="/account/reservations">Rezervasyonlar</m-dropdown-item>
    <m-dropdown-item to="/account/messages">Mesajlar</m-dropdown-item>
    <m-dropdown-item to="/account/favorites">Favorilerim</m-dropdown-item>
    <m-dropdown-item to="/account/boats">İlanlarım</m-dropdown-item>
    <m-dropdown-item @click="logout">Çıkış Yap</m-dropdown-item>
  </m-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'user/getUser',
      getAvatar: 'user/getAvatar',
    }),
  },
  methods: {
    logout() {
      this.$repositories.auth.logout()
      if (this.$route.path !== '/') this.$router.replace('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar__user {
  min-width: 175px;
  border-radius: 100px;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.1s cubic-bezier(0.32, 0.08, 0.24, 1);

  &:hover {
    background-color: #286cd8;
  }

  white-space: nowrap;

  &-pp {
    height: 38px;
    width: 38px;
    border: 1.5px solid #fff;
    border-radius: 100px;
    margin-right: 0.5rem;
    background-size: cover !important;
    background-position: center !important;
  }
}
</style>
