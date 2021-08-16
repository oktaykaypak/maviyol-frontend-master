<template>
  <transition name="fade"
    >as dsadsad
    <div
      v-show="open"
      v-if="$device.isMobile"
      class="departure-port-input-modal"
    >
      <div class="departure-port-input-modal__header">
        <input
          ref="input"
          type="text"
          placeholder="Kalkış Limanı"
          :value="keyword"
          @input="(e) => $emit('input', e.target.value)"
        />
        <div class="close" style="top: -1px" @click="hide">
          <m-svg icon="close" />
        </div>
      </div>
      <div v-if="!keyword" class="departure-port-input-modal__popular">
        <h6>Popüler Aramalar</h6>
        <ul>
          <li
            v-for="(location, index) in popularLocations"
            :key="index"
            @click="$emit('select', location)"
          >
            {{ location.name }}
          </li>
        </ul>
      </div>
      <div
        v-if="locations.length && keyword"
        class="departure-port-input-modal__list"
      >
        <SelectItem
          v-for="(location, index) in locations"
          :key="index"
          :label="location.name"
          @click.native="$emit('select', location)"
        />
      </div>
      <div v-if="locations.length === 0 && keyword && !loading" class="p-2">
        Aradığınız lokasyon bulunmamaktadır.
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    locations: {
      type: Array,
      default: () => [],
    },
    popularLocations: {
      type: Array,
      default: () => [],
    },
    open: {
      type: Boolean,
      default: false,
    },
    keyword: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    open(v) {
      if (v) {
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      }
    },
  },
  methods: {
    hide() {
      this.$refs.input.blur()
      this.$emit('hide')
    },
  },
}
</script>

<style lang="scss" scoped>
.departure-port-input-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 50;

  &__header {
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e9ecef;

    &:focus-within {
      border-bottom-color: var(--primary);
    }

    input {
      outline: none;
      border: none;
      font-size: 1rem;
      color: var(--dusk);
      font-family: 'Open Sans', sans-serif;
      height: 48px;
      padding: 0 0.75rem;
      width: 100%;

      &::placeholder {
        color: rgba(82, 95, 127, 0.5);
      }
    }
  }

  &__popular {
    padding: 1rem;

    h6 {
      font-weight: 600;
      margin-bottom: 15px;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      row-gap: 10px;
      list-style: none;

      li {
        cursor: pointer;
        background: #fff;
        border: 1px solid #e9ecef;
        padding: 6px;
        display: block;
        border-radius: 4px;
      }
    }
  }
}
</style>
