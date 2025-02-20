const CACHE_NAME = "shopping-app-cache-v1";
const urlsToCache = [
  "/",
  "./about.webp",
  "./Animation - 1739881882213.gif",
  "./contact.webp",
  "./e-commerce.svg",
  "./landing_image.webp",
  "./manifest.json",
  "./shopping-bags.svg",
  "./static/js/bundle.js",
  "./static/js/main.chunk.js",
  "./static/js/0.chunk.js",
  "./static/css/main.css",
  "../src/styles.css",
];

// Install Service Worker and cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch resources from cache or network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Activate Service Worker and clear old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
