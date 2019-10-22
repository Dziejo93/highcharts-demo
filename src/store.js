import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const RESET_ERROR = null;
const generateSeries = data => {
  return Object.keys(data).map(attribute => {
    return {
      type: "line",
      boostThreshold: 1,
      turboThreshold: 0,
      animation: false,
      name: attribute,
      data: data[attribute],
      marker: { enabled: true, radius: 3 },
      states: { hover: { lineWidthPlus: 0 } }
    };
  });
};
export default new Vuex.Store({
  state: {
    data: null,
    error: null
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = generateSeries(data);
    },
    SET_ERROR(state, error) {
      state.error = error;
    }
  },
  actions: {
    async fetchData({ commit }) {
      commit("SET_ERROR", RESET_ERROR);

      axios
        .get("/test.json")
        .then(res => {
          commit("SET_DATA", res.data);
        })
        .catch(err => {
          commit("SET_ERROR", err);
        });
    }
  }
});
