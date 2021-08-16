import Vue from 'vue'
import VueCharts from 'vue-chartjs'

Vue.component('line-chart', {
  extends: VueCharts.Line,
  props: ['options'],
  mounted() {
    this.renderChart(
      {
        labels: this.options.labels,
        datasets: [
          {
            label: this.options.label,
            backgroundColor: this.options.bg,
            data: this.options.data,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    )
  },
})
