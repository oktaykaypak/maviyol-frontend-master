<template>
  <div class="container comments">
    <div class="comments__header">
      <div class="comments__header-title">
        <h3>Misafir Yorumları</h3>
        <m-button
          variant="primary"
          class="px-3"
          @click="$modal.show('share-comment')"
          >BİR YORUM PAYLAŞ</m-button
        >
      </div>
      <p class="comments__header-subtitle">
        Your yacht will soon be visible to the largest community of sailors
        interested in peer-to-peer yacht charters. Welcome to maviyyo!
      </p>
      <hr class="comments__header-line" />
    </div>
    <div class="comments__customer">
      <div v-for="x in 3" :key="x" class="comments__customer-col">
        <comment-box />
        <comment-box />
        <comment-box />
      </div>
    </div>
    <div class="comments__seemore">
      <m-button
        variant="outline-primary"
        class="font-weight-bold comments__seemore-btn"
        >DAHA FAZLA GÖSTER</m-button
      >
    </div>
    <share-comment-modal />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Misafir Yorumları',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.comments {
  margin-top: 48px;
  margin-bottom: 124px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07),
    0 15px 4px 0 rgba(50, 50, 93, 0.01);

  &__header {
    display: flex;
    flex-direction: column;

    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;

      h3 {
        color: #32325d;
        font-size: 26px;
        font-weight: bold;
        line-height: 36px;
      }
    }

    &-subtitle {
      color: #525f7f;
      max-width: 550px;
      font-size: 16px;
      letter-spacing: -0.3px;
      line-height: 22px;
      margin-bottom: 30px;
    }

    &-line {
      width: 100%;
      border: 1px solid #dee2e6;
    }
  }

  &__customer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding-top: 34px;
  }

  &__seemore {
    display: grid;
    place-items: center;
    margin-top: 10px;

    &-btn {
      height: 43px;
      width: 250px;
    }
  }
}

@include bp(tablet) {
  .comments {
    &__customer {
      grid-template-columns: 1fr !important;
      gap: 0;
    }

    &__header-title button {
      position: fixed;
      height: 44px;
      width: 100%;
      bottom: 0;
      left: 0;
      border-radius: 0;
    }

    &-subtitle {
      width: 100%;
    }
  }
}
</style>
