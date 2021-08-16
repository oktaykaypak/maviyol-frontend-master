<template>
  <div class="comment">
    <div class="comment-title">
      <p class="comment-title-name">Kemal Etikan</p>
      <p class="comment-title-point">
        <fa class="comment-title-pointsolid" :icon="['fas', 'star']" />
        <fa class="comment-title-pointsolid" :icon="['fas', 'star']" />
        <fa class="comment-title-pointsolid" :icon="['fas', 'star']" />
        <fa class="comment-title-pointsolid" :icon="['fas', 'star']" />
        <fa class="comment-title-pointregular" :icon="['far', 'star']" />
      </p>
    </div>

    <div class="comment-subtitle">
      <p class="comment-subtitle-job">Meslek : Öğretmen</p>
      <p class="comment-subtitle-tour">Tur : Fethiye</p>
      <p class="comment-subtitle-boat">Tekne : Egenus</p>
    </div>
    <hr class="comment-line" />
    <p class="comment-comment">
      Lorem ipsum dolor sit amet ligula sit donec tempus ante consequatnc
      semper. Tempus tellus sociis justo ante
    </p>
  </div>
</template>

<style lang="scss" scoped>
.comment {
  border: 1px solid #dee2e6;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07),
    0 15px 35px 0 rgba(50, 50, 93, 0.1);
  padding: 22px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  &-title {
    display: flex;
    margin-bottom: 5px;
    justify-content: space-between;
    align-items: center;

    &-name {
      color: #525f7f;
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
    }

    &-point {
      height: 20px;
      width: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &regular,
      &solid {
        color: #ff7f00;
      }
    }
  }

  &-subtitle {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;

    &-tour,
    &-boat,
    &-job {
      width: 50%;
      color: #525f7f;
      font-size: 13px;
      line-height: 20px;
    }
  }

  &-line {
    margin-bottom: 13px;
    width: 100%;
    border: 1px solid #e8ecee;
  }

  &-comment {
    color: #525f7f;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
