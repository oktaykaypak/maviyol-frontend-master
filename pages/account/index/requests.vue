<template>
  <m-card class="account-page-card">
    <h3 class="account-page-card__title">Talepler</h3>
  </m-card>
</template>

<script>
export default {
  middleware: 'renter',
  head() {
    return {
      title: 'Talepler',
    }
  },
}
</script>
