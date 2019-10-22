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
          redraw: true,
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
        }
      };
    }
  }
};
</script>
