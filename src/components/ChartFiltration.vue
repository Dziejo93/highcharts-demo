<template>
  <div v-if="series">
    <Chart :series="series" />
  </div>
  <div v-else>
    Data is loading
  </div>
</template>

<script>
import { mapState } from "vuex";
import Chart from "./Chart";

export default {
  name: "ChartFiltration",
  components: { Chart },
  mounted() {
    this.$store.dispatch("fetchData");
  },
  computed: mapState({
    series: state => state.data
  })
};
</script>
