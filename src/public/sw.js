const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  return fetch(request);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/css/index.css",
      "/js/registerSW.js",
      "/js/interactive.js",
      "/js/modal.js",
      "/js/toastify.js",
      "/js/category.js",
      "/js/post.js",
      "/js/app-banner.js",
      "/js/theme.js",
      "/js/tailwind.js",
      "/js/slider/offer-slider.js",
      "/js/slider/card-slider.js",
      "/js/slider/adbanner-slider.js",
      "/js/slider/post-slider.js",
      "/js/slider/category-slider.js",
      "/js/slider/gallery-slider.js",
      "/js/zoom.js",
      "/assets/chest.svg",
      "/assets/lighthouse.png",
      "/assets/logo.svg",
      "/assets/moon.svg",
      "/assets/sun.svg",
      "/assets/snowman.svg",
      "/assets/coin-gold.png",
      "/assets/coin-silver.png",
      "/assets/coin-bronze.png",
      "/assets/coin-tree.png",
      "/assets/lighthouse-coin.svg",
      "/assets/break-dark.png",
      "/assets/break-light.png",
      "/assets/break-summer.png",
      "/assets/break-winter.png",
      "/assets/footer-dark.png",
      "/assets/footer-dark-mobile.png",
      "/assets/footer-summer.png",
      "/assets/footer-summer-mobile.png",
      "/assets/footer-winter.png",
      "/assets/footer-winter-mobile.png",
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
