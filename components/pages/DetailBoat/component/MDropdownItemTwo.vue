<template>
  <div class="dropdownItem">
    <div class="choicePeople">
      <span v-for="(text, index) in option" :key="index" v-text="text" />
    </div>
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
</template>

<script>
export default {
  props: {
    option: {
      type: Array,
      default: () => [],
    },
    id: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  methods: {
    counterChange(value) {
      this.$emit('emitDropdownInfo', { id: this.id, type: value })
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdownItem {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  .choicePeople {
    width: 50%;
    display: flex;
    flex-direction: column;
    span:first-child {
      font-size: 12px;
      font-weight: 700;
    }
    span {
      font-size: 11px;
    }
  }
  .counter {
    width: 30%;
    display: flex;
    justify-content: space-between;
    .minus,
    .plus {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
