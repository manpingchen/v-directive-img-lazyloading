<template>
  <div class="loading" :style="{ width, height }">
    <template v-if="!isSpinner"> Hold on! just loading... </template>
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "LoadingText",
  props: {
    isTextCentered: {
      type: Boolean,
      default: true,
    },
    isSpinner: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "100%",
    },
    height: { type: String, default: "200px" },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  color: gray;
  text-align: center;
  font-style: italic;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner {
    &:after {
      content: " ";
      display: block;
      width: 16px;
      height: 16px;
      margin: 8px;
      border-radius: 50%;
      border: 3px solid gray;
      border-color: gray transparent gray transparent;
      animation: spin 1.2s linear infinite;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
