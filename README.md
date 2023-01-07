# vue-image-lazyloading
 
## Directive
Step1, creating a file for your directive

here I named it as Lazyloading.js
```js
export default {
  // ref: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  mounted: (el) => {
    // Responsible for replacing the 'src' value with 'data-url'

    function loadImage() {
      const imageElement = Array.from(el.children).find(
        (el) => el.nodeName === "IMG"
      );
      if (imageElement) {
        imageElement.addEventListener("load", () => {
          setTimeout(() => el.classList.add("loaded"), 100);
        });
        imageElement.addEventListener("error", () => console.log("error"));
        imageElement.src = imageElement.dataset.url;
      }
    }

    // Firing loadImage() when certain condition set by Intersection Observer are met
    // Entries are the elemnets watched by the observer
    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();

          // Remove the image loaded, to prevent it from being repeatedly loaded
          observer.unobserve(el);
        }
      });
    }

    // Create the Intersection Observer and attach it to our element

    function createObserver() {
      const options = {
        root: null,
        threshold: "0",
      };

      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }
  },
};
```

Step2, in main.js, import the directive
```js
import LazyLoading from "@/driective/LazyLoading.js";

const app = createApp(App);

// allow us to use v-lazyload
app.directive("lazyload", LazyLoading);

```

And last, you can now use `v-lazyload` in your component!
```js
 <figure v-lazyload>
    <Loading is-spinner height="100%" />
    <img :data-url="src" :alt="name" width="100" height="150" />
 </figure>
```
