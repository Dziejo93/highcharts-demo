import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import boost from "highcharts/modules/boost";

Vue.config.productionTip = false;

Vue.use(HighchartsVue);
boost(Highcharts);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
