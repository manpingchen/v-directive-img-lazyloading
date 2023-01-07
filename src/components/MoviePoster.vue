<template>
  <figure v-lazyload>
    <Loading is-spinner height="100%" />
    <img :data-url="smallVersionImgSrc" :alt="name" width="100" height="150" />
  </figure>
</template>

<script>
import Loading from "@/components/Loading";

export default {
  name: "MoviePoster",
  props: {
    src: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
  },
  components: {
    Loading,
  },
  computed: {
    smallVersionImgSrc() {
      const breaker = "_V1_";
      const src = this.src.split(breaker)[0];
      const extension = this.src.split(breaker)[1];
      const smallVersionCode = "_V1_QL75_UX300";
      return src + smallVersionCode + extension;
    },
  },
};
</script>

<style lang="scss" scoped>
figure {
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    display: block;
    display: none;
  }

  &.loaded {
    .loading {
      display: none;
    }
    img {
      display: block;
    }
  }
}
</style>
