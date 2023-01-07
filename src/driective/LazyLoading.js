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
