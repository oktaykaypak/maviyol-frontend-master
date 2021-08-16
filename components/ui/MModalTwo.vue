<template>
  <div
    v-if="status"
    :id="modalId"
    class="modal"
    @click="modalHidden($event.target)"
  >
    <div
      class="modal__content"
      :style="{
        backgroundColor: bgc,
      }"
    >
      <span v-if="modalClosed" class="close" @click="modalHidden(modalId)"
        >&times;</span
      >
      <span
        id="closeModalBtn"
        style="display: hidden"
        class="close"
        @click="modalHidden(modalId)"
        >&times;</span
      >

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalId: {
      type: String,
      default: '',
    },
    status: {
      type: Boolean,
      default: false,
    },
    closed: {
      type: Boolean,
      default: false,
    },
    bgc: {
      type: String,
      default: 'white',
    },
    vertical: {
      type: Number,
      default: 20,
    },
  },
  computed: {
    modalClosed() {
      return this.closed
    },
  },
  methods: {
    modalHidden(payload) {
      if (this.modalId === payload.id || this.modalId === payload) {
        this.$emit('modal', { id: this.modalId, status: false })
      }
    },
    justTry(asd) {
      console.log('triggered just try', asd)
    },
  },
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  &__content {
    position: relative;
    margin: 10% auto;
    padding: 20px;
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
    border: 1px solid #888;
    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      color: #aaa;
      z-index: 9999999999;
      float: right;
      font-size: 28px;
      font-weight: bold;
      margin-right: 10px;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
}

#shareModal {
  .modal__content {
    width: max-content;
  }
}

#askOfferModal {
  .modal__content {
    width: 50%;
  }

  @media screen and(max-width:1456px) {
    .modal__content {
      width: 60% !important;
    }
  }

  @media screen and(max-width:903px) {
    .modal__content {
      width: 70% !important;
    }
  }

  @media screen and(max-width:419px) {
    .modal__content {
      width: 100% !important;

      margin: 0;
      margin-top: 40px;
      width: 100%;
      border: none;
    }
  }
}
</style>
