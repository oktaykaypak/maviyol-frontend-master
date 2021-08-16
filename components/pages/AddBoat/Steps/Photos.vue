<template>
  <add-boat-content
    ref="content"
    title="Fotoğraflar"
    class="photos"
    @next="$refs.content.next()"
  >
    <m-form-group label="Tekne Fotoğrafları" class="mt-30">
      <input
        ref="input"
        type="file"
        hidden
        multiple
        accept="image/*"
        @change="(e) => handlePhotos(e.target.files)"
      />
      <div
        ref="dropArea"
        class="photos__placeholder"
        :class="{ 'photos__placeholder--highlighted': isHighlighted }"
      >
        <m-svg icon="cloud_upload" />
        <div class="mb-30 d-flex flex-column align-items-center">
          <span class="pb-2 text-center f-14"
            >Fotoğraflarınızı buraya sürükleyerek yükleyebilirsiniz.
            <br />
            Lütfen marka gözükmeyen bir fotoğraf yükleyiniz.
          </span>
          <span style="color: #8898aa" class="f-14"
            >Maksimum boyut: 1200x1200px
          </span>
        </div>
        <m-button class="px-5 py3 font-weight-semibold" @click.native="onClick"
          >Fotoğraf Yükle</m-button
        >
        <div v-if="isUploading" class="photos__placeholder__loading">
          <circle-progress :progress="fileProgress" />
        </div>
      </div>
      <div class="photos__list">
        <div v-if="isListLoading" style="grid-column: 1 / 7">
          <m-spinner />
        </div>
        <div
          v-for="(photo, index) in form.files"
          v-else
          :key="index"
          class="photos__list-item"
          :style="photo && 'background: url(' + photo.image.medium + ')'"
        >
          <a
            v-if="index !== 0"
            class="photos__list-item-banner action"
            @click="setCover(photo.id)"
            >Kapak Fotoğrafı Yap</a
          >
          <span v-if="index === 0" class="photos__list-item-banner"
            >Kapak Fotoğrafı</span
          >
          <span class="photos__list-item-number">{{ ++index }}</span>
          <div
            class="photos__list-item-delete c-pointer"
            @click="removePhoto(photo.id)"
          >
            <m-svg icon="delete" />
          </div>
        </div>
      </div>
    </m-form-group>
  </add-boat-content>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isUploading: false,
      isListLoading: false,
      isHighlighted: false,
      fileProgress: 0,
      form: {
        files: [],
      },
    }
  },
  computed: {
    ...mapGetters({
      getTransactionId: 'add-boat/getTransactionId',
    }),
  },
  mounted() {
    const { dropArea } = this.$refs
    ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      dropArea.addEventListener(eventName, (e) => {
        e.preventDefault()
        e.stopPropagation()
      })
    })
    ;['dragenter', 'dragover'].forEach((eventName) => {
      dropArea.addEventListener(eventName, () => {
        this.isHighlighted = true
      })
    })
    ;['dragleave', 'drop'].forEach((eventName) => {
      dropArea.addEventListener(eventName, () => {
        this.isHighlighted = false
      })
    })
    dropArea.addEventListener('drop', (e) => {
      this.handlePhotos(e.dataTransfer.files)
    })
    this.getPhotos()
  },
  methods: {
    onClick() {
      this.$refs.input.click()
    },
    async getPhotos() {
      try {
        const res = await this.$repositories.boat.photo.getPhotos(
          this.getTransactionId
        )
        let formattedList = res.data
        const findCoverIndex = res.data.findIndex((v) => v.cover === true)
        if (findCoverIndex) {
          formattedList.unshift(res.data[findCoverIndex])
          formattedList = formattedList.filter(
            (v, i) => i !== findCoverIndex + 1
          )
        }

        this.form.files = formattedList
        this.files = formattedList
      } catch (e) {
        this.$toast.error('Fotoğraflar getirilemedi.')
      }
    },
    async handlePhotos(files) {
      this.isUploading = true
      let uploadedFile = 0
      for (let index = 0; index < files.length; index++) {
        const formData = new FormData()
        files[index].url = URL.createObjectURL(files[index])
        formData.append('image', files[index])
        try {
          uploadedFile++
          this.fileProgress = uploadedFile * (100 / files.length)
          await this.$repositories.boat.photo.uploadPhoto(
            formData,
            this.getTransactionId
          )
        } catch (e) {
          this.$toast.error('Fotoğraflar yüklenemedi.')
        }
      }
      setTimeout(() => {
        this.getPhotos()
        this.isUploading = false
        this.fileProgress = 0
        this.$toast.success('Fotoğraflar başarıyla yüklendi.')
      }, 300)
    },
    async removePhoto(id) {
      try {
        await this.$repositories.boat.photo.deletePhoto(
          id,
          this.getTransactionId
        )
        this.getPhotos()
      } catch (e) {
        console.error(e)
      }
    },
    async setCover(id) {
      try {
        await this.$repositories.boat.photo.setCover(id, this.getTransactionId)
        await this.getPhotos()
        this.$toast.success('Kapak fotoğrafınız değiştirilmiştir.')
      } catch (e) {
        this.$toast.success('Kapak fotoğrafı değiştirilemedi.')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.photos {
  &__placeholder {
    height: 350px;
    border: solid 1px #979797;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    position: relative;

    &--highlighted {
      border: 3px dashed #979797;
    }

    img {
      height: 56px;
      margin-bottom: 30px;
    }

    &__loading {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(255, 255, 255, 0.7);
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 20px;
    gap: 20px;
    margin-bottom: 30px;

    @include bp(tablet-sm) {
      grid-template-columns: 100%;
    }

    &-item {
      border-radius: 4px;
      background-size: cover !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      height: 125px;
      position: relative;
      box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
        0 1px 3px 0 rgba(0, 0, 0, 0.08);

      &:hover {
        .photos__list-item-banner.action {
          opacity: 1 !important;
        }
      }

      &-banner,
      &-number {
        position: absolute;
        background: var(--warning);
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
          0 1px 3px 0 rgba(0, 0, 0, 0.08);
        user-select: none;
        left: 10px;
      }

      &-banner {
        height: 20px;
        width: auto;
        padding: 0 4px;
        font-size: 11px;
        bottom: 10px;

        &.action {
          left: unset;
          top: 10px;
          right: 10px;
          background: var(--primary);
          font-size: 10px;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2ss ease-in-out;
        }
      }

      &-number {
        top: 10px;
        width: 20px;
        height: 20px;
        font-size: 11px;
      }

      &-delete {
        position: absolute;
        right: 10px;
        bottom: 10px;

        img {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
}
</style>
