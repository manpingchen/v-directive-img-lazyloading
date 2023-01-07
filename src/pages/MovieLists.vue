<template>
  <LoadingText v-if="loadingMovies" is-spinner />
  <div class="movies__sections" v-else>
    <MovieList title="Top 250" :movies="top250Movies" is-published />
    <MovieList title="Popular Movies" :movies="popularMovies" is-published />
    <MovieList title="Upcoming Movies" :movies="upcomingMovies" />
  </div>
  Information courtesy of IMDb (https://www.imdb.com). Used with permission.
</template>

<script>
import { mapGetters } from "vuex";
import MovieList from "@/components/MovieList";

export default {
  name: "MovieLists",
  computed: {
    ...mapGetters({
      top250Movies: "movies/getTop250Movies",
      upcomingMovies: "movies/getUpcomingMovies",
      popularMovies: "movies/getPopularMovies",
      loadingMovies: "movies/getLoadingState",
    }),
  },
  mounted() {
    this.$store.dispatch("movies/fetchMovies", { movieType: "top250" });
    this.$store.dispatch("movies/fetchMovies", { movieType: "upcoming" });
    this.$store.dispatch("movies/fetchMovies", { movieType: "popular" });
  },
  components: {
    MovieList,
  },
};
</script>

<style lang="scss" scoped>
.movies__sections {
  display: flex;
  flex-direction: column;
  height: unset;
}
</style>
