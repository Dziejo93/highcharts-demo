<template>
  <highcharts :options="chartOptions" />
</template>
<script>
export default {
  name: "Chart",
  props: {
    series: { type: Array, required: true }
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: "line",
          height: "700px",
          animation: false,
          zoomType: "xy",
          panning: true,
          panKey: "shift"
        },
        boost: { enabled: true },
        tooltip: {
          formatter() {
            const time = new Date(this.x).toJSON();
            const name = this.series.name;
            return `<b>${name}</b><br />
              value: ${this.y} <br />
              time: ${time}`;
          }
        },
        series: this.series,
        xAxis: {
          type: "datetime"
        },
        yAxis: [
          {
            title: { text: "Current [A]" },
            gridLineWidth: 0.5,
            showEmpty: false
          },
          {
            title: { text: "Voltage [V]" },
            gridLineWidth: 0.5,
            showEmpty: false,
            opposite: true
          }
        ]
      };
    }
  }
};
</script>
