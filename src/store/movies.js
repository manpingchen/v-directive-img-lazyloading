export default {
  namespaced: true,
  state() {
    return {
      loadingMovies: true,
      favourites: [],
      types: [],
      selectedTypes: [],
      filteredAll: [],
      top250: [],
      upcoming: [],
      popular: [],
    };
  },
  mutations: {
    updateAllMovies(state, payload) {
      state[payload.movieType] = payload.movies;
      state.loadingMovies = false;
    },
    updateLoadingState(state, payload) {
      state.loadingMovies = payload;
    },
    updateTypes(state, payload) {
      state.types = payload;
    },
    updateSelectedTypes(state, payload) {
      state.selectedTypes = payload;
    },
  },
  actions: {
    async fetchMovies({ commit, state }, { movieType }) {
      const movies = [];
      const selectedTypes = state.selectedTypes;
      const ifHasType = selectedTypes.length > 0;

      commit("updateLoadingState", true);

      try {

        // To Do: Wire GraphQL To Fetch Movies
        if (!ifHasType) {
          const types = [];

          commit("updateTypes", types);
        }

        commit("updateAllMovies", { movieType, movies });
      } catch (error) {
        console.log("Error getting documents: ", error);
        commit("updateLoadingState", false);
      }
    },

    updateSelectedTypes({ commit }, payload) {
      commit("updateSelectedTypes", payload);
    },
  },
  getters: {
    getLoadingState: (state) => state.loadingMovies,
    getFavourites: (state) => state.favourites,
    getTop250Movies: (state) => state.top250,
    getPopularMovies: (state) => state.popular,
    getUpcomingMovies: (state) => state.upcoming,
    getMovieTypes: (state) => state.types,
    getFilteredMovies: (state) => state.filteredMovies,
  },
};
