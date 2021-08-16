import vuescroll from 'vuescroll'
import Vue from 'vue'

Vue.use(vuescroll, {
  ops: {
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: false,
      keepShow: true,
      background: '#525F7F',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: 0,
      size: '3px',
    },
    rail: {
      background: 'none',
      opacity: 1,
      size: '3px',
      specifyBorderRadius: false,
      gutterOfEnds: '15px',
      gutterOfSide: '5px',
      keepShow: false,
    },
  },
})
