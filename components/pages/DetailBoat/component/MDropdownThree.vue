<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ value > 0 ? value + ' Kabin' : 'Kabin' }}
      <fa style="color: #172b4d" :icon="['fas', 'chevron-down']" />
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div class="counter">
        <span class="minus" @click="counterChange('-')"
          ><fa style="font-size: 12px" :icon="['fas', 'minus']" />
        </span>
        <span>{{ value }}</span>
        <span class="plus" @click="counterChange('+')">
          <fa style="font-size: 12px" :icon="['fas', 'plus']"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      open: false,
      value: 0,
    }
  },
  mounted() {
    this.$emit('input', this.selected)
  },
  methods: {
    counterChange(val) {
      if (val === '+' && this.value < 14) {
        this.value++
      } else if (val === '-') {
        this.value > 0 && this.value--
      }
      this.$emit('emitCabinMethod', this.value)
    },
  },
}
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid rgb(206, 212, 218);
  color: #172b4d;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.custom-select .selected.open {
  border: 1px solid rgb(206, 212, 218);
  border-radius: 6px 6px 0px 0px;
}

.custom-select .items {
  color: #172b4d;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid rgb(206, 212, 218);
  border-left: 1px solid rgb(206, 212, 218);
  border-bottom: 1px solid rgb(206, 212, 218);
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #172b4d;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.selectHide {
  display: none;
}
.counter {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
