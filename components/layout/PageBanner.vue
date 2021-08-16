<template>
  <div class="banner">
    <div class="content">
      <h1
        class="text-white font-weight-bold text-center mb-3"
        style="font-size: 3.3rem"
      >
        {{ title }}
      </h1>
      <ul
        class="font-weight-bold d-flex text-white breadcrumb align-items-center"
      >
        <li>
          <n-link to="/">anasayfa</n-link>
        </li>
        <li>{{ title.toLowerCase() }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.banner {
  background: url('~assets/images/sss-banner.webp') no-repeat center;
  background-size: cover;
  height: 350px;

  .content {
    background: rgba(0, 34, 79, 0.74);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .breadcrumb li {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #fff;
      text-decoration: none;
    }

    &:not(:last-child):after {
      content: '';
      background: url('~assets/icons/chevron-right-solid.svg') no-repeat center;
      display: flex;
      margin: 0 6px;
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
