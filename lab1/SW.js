self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches
      .open("our-app")
      .then((cache) => cache.addAll(["index.html", "style.css", "main.js"]))
  );
});

self.addEventListener("activate", (event) => {});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
