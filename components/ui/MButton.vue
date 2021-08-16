<template>
  <button
    class="m-btn"
    :class="[
      variant && `m-btn--${variant}`,
      {
        'm-btn--block': block,
      },
    ]"
    v-bind="$attrs"
    @click="onClick"
  >
    <slot />
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: '',
    },
    block: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClick() {
      const { to, href } = this
      if (to) {
        this.$router.push(to)
      } else if (href) {
        window.location.href = href
      }
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss">
.m-btn {
  box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
    0 1px 3px 0 rgba(0, 0, 0, 0.08);
  font-weight: 500;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  border: 0;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:disabled {
    opacity: 0.65;
    pointer-events: none;
  }

  &--block {
    display: block;
    width: 100%;
  }

  &,
  &--light {
    background: #fff;
    color: var(--primary);
  }

  &--outline-primary {
    box-shadow: none;
    border: 1px solid var(--primary);
  }

  &--primary {
    color: #fff;
    background: var(--primary);
    &:hover {
      background: var(--primary-darken);
    }
  }

  &--warning {
    color: #fff;
    background: var(--warning);
    &:hover {
      background: var(--warning-darken);
    }
  }

  &--success {
    background: #2dce89;
    color: #fff;
    &:hover {
      background: #29bd7e;
    }
  }

  &--dusk {
    background: var(--dusk);
    color: #fff;
    &:hover {
      background: var(--dusk-darken);
    }
  }
}
</style>
