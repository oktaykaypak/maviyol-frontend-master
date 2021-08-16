<template>
  <img
    :src="require(`~/assets/icons/${icon}.svg`)"
    class="d-flex"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>
