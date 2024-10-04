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
      "/js/app-banner.js",
      "/js/theme.js",
      "/js/slider/offer-slider.js",
      "/js/slider/card-images-slider.js",
      "/js/slider/ad-banners-slider.js",
      "/js/slider/posts-slider.js",
      "/js/slider/categories-slider.js",
      "/js/zoom.js",
      "/js/particles.js",
      "/assets/call.svg",
      "/assets/chest.svg",
      "/assets/copy.svg",
      "/assets/ground.svg",
      "/assets/lighthouse.png",
      "/assets/location.svg",
      "/assets/logo.svg",
      "/assets/mini-arrow.svg",
      "/assets/moon.svg",
      "/assets/clock.svg",
      "/assets/coin-gold.png",
      "/assets/coin-silver.png",
      "/assets/coin-bronze.png",
      "/assets/coin-tree.png",
      "/assets/lighthouse-coin.svg",
      "/assets/lighthouse-small.png",
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
