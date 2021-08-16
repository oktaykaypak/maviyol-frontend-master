<template>
  <div class="circle-progress">
    <svg class="progress-ring" height="100" width="100">
      <circle
        ref="circle"
        class="progress-ring__circle"
        stroke="#3282fd"
        stroke-width="8"
        fill="transparent"
        r="45"
        cx="50"
        cy="50"
      />
    </svg>
    <span class="circle-progress__value">%{{ parseInt(progress) }}</span>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      circumference: 0,
    }
  },
  watch: {
    progress(value) {
      this.setProgress(value)
    },
  },
  mounted() {
    const { circle } = this.$refs
    const radius = circle.r.baseVal.value
    this.circumference = radius * 2 * Math.PI
    circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`
    circle.style.strokeDashoffset = `${this.circumference}`
    this.setProgress(this.progress)
  },
  methods: {
    setProgress(percent) {
      this.$refs.circle.style.strokeDashoffset =
        this.circumference - (percent / 100) * this.circumference
    },
  },
}
</script>

<style lang="scss" scoped>
.circle-progress {
  width: 100px;
  margin-bottom: 15px;
  position: relative;
  user-select: none;
  border-radius: 100px;

  &__value {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--night-blue);
  }

  .progress-ring {
    &__circle {
      transition: stroke-dashoffset 0.35s;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }
  }
}
</style>
