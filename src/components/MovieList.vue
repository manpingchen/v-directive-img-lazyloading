<template>
  <div class="movies">
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <div class="movie__image">
        <MoviePoster v-if="movie.image" :src="movie.image" :name="movie.name" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  props: {
    title: {
      type: String,
    },
    movies: {
      type: Array,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    MoviePoster: defineAsyncComponent(() => import("@/components/MoviePoster")),
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: unset;
}

.movies {
  display: flex;
  width: 500px;
  gap: 0.25rem;
  flex-direction: row;
  height: 100%;
  overflow-x: scroll;
  flex-wrap: nowrap;
  padding-bottom: unset;

  .movie {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 50%;
    min-width: $min_width-image;

    &__image {
      position: relative;
      display: block;
      width: 100%;
      padding-top: 145.5%;
      overflow: hidden;
      flex-shrink: 0;
      border: 1px solid #222222;

      figure {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>
