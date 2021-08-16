<template>
  <div class="product">
    <div
      class="product__picture"
      :style="item.image && `background: url('${item.image.medium}')`"
    >
      <div class="product__info">
        <span class="product__title">{{ item.name }}</span>
        <span
          class="product__status"
          :class="{
            'product__status--danger': getStatus == boatStatusTypes.DRAFT,
            'product__status--disabled':
              getStatus == boatStatusTypes.UNPUBLISHED,
          }"
          >{{ getStatusText }}</span
        >
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <m-button
          variant="primary"
          class="px-4 font-weight-semibold f-14"
          style="letter-spacing: 0.7px"
          @click="$router.push('/edit-boat/' + item.id)"
          >DÜZENLE</m-button
        >
        <m-button class="px-3 f-14 h-100" @click="copyLink(item.id)">
          <fa :icon="['fas', 'link']" />
        </m-button>
      </div>
      <m-switch
        :value="item.status === boatStatusTypes.PUBLISHED"
        @change="$emit('toggle-product', item)"
      />
    </div>
  </div>
</template>

<script>
import boatStatusTypes from '~/types/boatStatusTypes'

export default {
  props: {
    item: Object,
  },
  data() {
    return {
      boatStatusTypes,
    }
  },
  computed: {
    getStatus() {
      return this.item.status
    },
    getStatusText() {
      switch (this.item.status) {
        case boatStatusTypes.PUBLISHED:
          return 'Aktif'
        case boatStatusTypes.UNPUBLISHED:
          return 'Pasif'
        case boatStatusTypes.DRAFT:
          return 'Taslak'
        default:
          return '-'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.product {
  margin-bottom: 30px;

  &__title {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.42);
  }

  &__picture {
    background: lightgray;
    background-size: cover !important;
    background-position: center !important;
    margin-bottom: 15px;
    width: 100%;
    height: 200px;
    position: relative;
  }

  &__info {
    position: absolute;
    left: 0;
    top: 0;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    width: 100%;
  }

  &__status {
    padding: 2px 12px;
    border-radius: 100px;
    color: #fff;
    background: #2dce89;
    font-size: 14px;
    font-weight: 500;

    &--danger {
      background: var(--danger);
    }

    &--disabled {
      background: #343a40;
    }
  }
}
</style>
