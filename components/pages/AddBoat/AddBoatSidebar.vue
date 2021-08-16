<template>
  <div class="add-boat-sidebar" :class="{ 'add-boat-sidebar--edit': isEdit }">
    <h3 class="add-boat-sidebar__header">Hazırsanız Başlayalım!</h3>
    <p class="add-boat-sidebar__explanation">
      Yüz binlerce müşteri seni bekliyor.
    </p>
    <div v-if="!isEdit" class="add-boat-sidebar__progress">
      <div class="d-flex justify-content-between align-items-center w-100 mb-2">
        <span>İlerleme</span>
        <span class="add-boat-sidebar__progress-value">%{{ getProgress }}</span>
      </div>
      <m-progress :value="getProgress" />
    </div>
    <div
      v-for="(link, index) in getSteps"
      :key="index"
      class="add-boat-sidebar__link"
      @click="go(link.step)"
    >
      <m-svg :icon="link.icon" class="add-boat-sidebar__link-image" />
      <p class="add-boat-sidebar__link-title">{{ link.name }}</p>
    </div>
    <p class="add-boat-sidebar__help">Yardım için bizi arayın</p>
    <p class="add-boat-sidebar__number">444 39 57</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isEdit: 'add-boat/isEdit',
      getSteps: 'add-boat/getSteps',
      getProgress: 'add-boat/getProgress',
    }),
  },
  methods: {
    go(step) {
      if (!this.isEdit) return
      this.$store.commit('add-boat/setStep', step)
    },
  },
}
</script>

<style lang="scss" scoped>
.add-boat-sidebar {
  background-color: #fff;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;

  &--edit &__link {
    cursor: pointer;
    transition: all 100ms ease-in-out;

    &:hover {
      background: #f6f9fc;
    }
  }

  &__header {
    font-size: 20px;
    font-weight: bold;
    color: #32325d;
  }

  &__progress {
    padding: 20px;
    border-top: 1px solid #e9ecef;
    border-bottom: 1px solid #e9ecef;
    border-left: 0;
    border-right: 0;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;

    &-value {
      color: #2dce89;
    }
  }

  &__explanation {
    font-size: 13px;
    color: #525f7f;
    margin-bottom: 20px;
  }

  &__link {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 13px 40px;
    user-select: none;

    &-image {
      margin-right: 15px;
      font-weight: bold;
      width: 24px;
      height: 24px;
    }

    &-title {
      color: #172b4d;
      font-weight: bold;
      font-size: 16px;
    }

    &-checked {
      width: 16px;
      height: 12px;
      margin-top: 7px;
      margin-left: 80px;
    }
  }

  &__help {
    font-weight: 300;
    color: #172b4d;
    margin-bottom: 10px;
    margin-top: 100px;
  }

  &__number {
    font-size: 20px;
    font-weight: 700;
    color: #172b4d;
  }
}
</style>
