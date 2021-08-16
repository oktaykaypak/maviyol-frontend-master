<template>
  <div class="container">
    <div class="comments">
      <h2 class="home__title mb-5">{{ $t('home_comments') }}</h2>
      <div class="row mb-3">
        <div class="col-lg-4">
          <CommentBox />
        </div>
        <div class="col-lg-4">
          <CommentBox />
        </div>
        <div class="col-lg-4">
          <CommentBox />
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <n-link
          to="/comments"
          class="text-primary font-weight-semibold text-decoration-none"
          >{{ $t('home_comments_all') }}</n-link
        >
        <div>
          <m-button class="px-4 text-transform-uppercase">
            {{ $t('home_comments_share') }}
          </m-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comments {
}
</style>
