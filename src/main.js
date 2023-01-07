import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import store from "@/store/index";
import LazyLoading from "@/directive/LazyLoading.js";
import './registerServiceWorker'

const app = createApp(App);

// allow us to use v-lazyload
app.directive("lazyload", LazyLoading);

app.use(router);
app.use(store);
app.mount("#app");
