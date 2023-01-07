import { createStore } from "vuex";
import movieModule from "@/store/movies";

const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    movies: movieModule,
  },
});

export default store;
