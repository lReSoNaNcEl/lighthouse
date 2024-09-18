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
      "/",
      "/index.css",
      "/registerSW.js",
      "/category.js",
      "/app-banner.js",
      "/theme.js",
      "/menu.js",
      "/swiper.js",
      "/zoom.js",
      "/particles.js",
      "/search.js",
      "/assets/call.svg",
      "/assets/chest.svg",
      "/assets/copy.svg",
      "/assets/ground.svg",
      "/assets/lighthouse.png",
      "/assets/lighthouse-coin.svg",
      "/assets/lighthouse-small.png",
      "/assets/location.svg",
      "/assets/logo.svg",
      "/assets/mini-arrow.svg",
      "/assets/moon.svg",
      "/assets/clock.svg",
      "/assets/coin-gold.png",
      "/assets/coin-silver.png",
      "/assets/coin-bronze.png",
      "/assets/coin-tree.png",
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
