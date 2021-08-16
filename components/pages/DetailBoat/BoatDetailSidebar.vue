<template>
  <ul id="detail-list">
    <li
      v-for="(item, index) in list"
      :key="index"
      @click="changeComponent(item.body)"
    >
      <div class="item-name">{{ $t(item.name) }}</div>
      <fa class="icon" :icon="['fas', 'chevron-right']" />
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: 'boat_detail_sidebar_menu_overview', body: 'general' },
        { name: 'boat_detail_sidebar_menu_comments', body: 'comments' },
        { name: 'boat_detail_sidebar_menu_faq', body: 'faq' },
        { name: 'boat_detail_sidebar_menu_rent', body: 'rent' },
        { name: 'boat_detail_sidebar_menu_refund', body: 'refund' },
        { name: 'boat_detail_sidebar_menu_offers', body: 'offers' },
      ],
    }
  },
  methods: {
    changeComponent(payload) {
      this.$emit('changeComponentEmit', payload)
    },
  },
}
</script>

<style lang="scss" scoped>
#detail-list {
  display: flex;
  flex-direction: column;

  li {
    width: 245px;
    height: 53px;
    margin: 6px 0;
    padding: 15px 14px 14px 17px;
    border-radius: 4px;
    border: solid 1px #e9ecef;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item-name {
      margin: 0 40px 0 0;
      font-family: 'Open Sans';
      font-size: 15px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #525f7f;
    }

    i {
      color: #525f7f;
    }
  }

  .nuxt-link-active {
    border: solid 1px #fb6340;
    .item-name {
      color: #fb6340;
    }

    .icon {
      color: #fb6340;
    }
  }
}
</style>
