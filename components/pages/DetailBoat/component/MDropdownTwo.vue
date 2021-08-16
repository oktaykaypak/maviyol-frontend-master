<template>
  <div class="dropdown" @click="toggle">
    <button id="dropdown-btn-offer" :style="{ width: width }" class="dropbtn">
      <span>{{ title }}</span>
      <fa :icon="['fas', 'chevron-down']" />
      <div id="upper-button-offer"></div>
    </button>
    <div
      :id="id"
      :style="{ width: width }"
      class="dropdown-content"
      @click.stop
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Dropdown',
    },
    width: {
      type: String,
      default: '300px',
    },
  },
  methods: {
    toggle() {
      const dropdownContent = document.getElementById('dropcuks')
      const dropdownContentStyle = dropdownContent.style
      const dropdownContentObject = Object.entries(dropdownContentStyle)

      const index = dropdownContentObject.findIndex((item) => {
        return item[0] === 'display'
      })

      const item = dropdownContentObject[index][1] === 'block'

      console.log(item)

      return item
    },
  },
}
</script>

<style lang="scss" scoped>
#dropdown-btn-offer {
  #upper-button-offer {
    z-index: 11;
    background-color: transparent;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}

.dropbtn {
  display: flex;
  justify-content: space-between;
  align-content: center;
  color: #172b4d;
  font-size: 16px;
  height: 53px;
  padding: 15px 12.6px 14px 15px;
  border-radius: 4px;
  border: solid 1px #e9ecef;
  background-color: #ffffff;
  font-family: 'Open Sans';
  outline-color: rgb(82, 95, 127);
}

.dropdown {
  position: relative;
  width: 65%;
  display: inline-block;
}

.dropdown-content {
  padding: 15px 12.6px 14px 15px;
  display: none;
  position: absolute;
  background-color: #f8f8f8;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}
.block {
  display: block;
}
.hide {
  display: none;
}

@media screen and (max-width: 468px) {
  .dropdown {
    width: 100% !important;
  }
}
</style>
