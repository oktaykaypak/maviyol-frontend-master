<template>
  <div class="photo-upload d-flex flex-column align-items-center">
    <img :src="getProfilePhoto" class="photo-upload__image" />
    <p class="photo-upload__title">Fotoğrafını Değiştir</p>
    <p class="photo-upload__subtitle">Minimum Boyut: ___ X ___</p>
    <m-button variant="primary" class="photo-upload__button" @click="onClick"
      >Fotoğraf Yükle</m-button
    >
    <input ref="fileInput" type="file" hidden @change="upload" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      avatar: 'user/getAvatar',
    }),
    getProfilePhoto() {
      return (
        this.avatar.medium || require('~/assets/icons/empty-avatar.svg?data')
      )
    },
  },
  methods: {
    onClick() {
      this.$refs.fileInput.click()
    },
    async upload(e) {
      const files = e.target.files
      const formData = new FormData()
      formData.append('avatar', files[0])
      try {
        await this.$repositories.account.editAvatar(formData)
        this.$toast.success('Fotoğraf başarıyla yüklendi.')
      } catch {
        this.$toast.error('Fotoğraf yüklemesi başarısız.')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.photo-upload {
  padding: 100px 0;

  &__image {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin-bottom: 30px;
  }

  &__title {
    color: #d3d3d3;
  }

  &__subtitle {
    color: #8898aa;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  &__button {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@include bp(mobile) {
  .photo-upload {
    &__button {
      width: 100%;
    }
  }
}
</style>
