const CACHVERSION = "cach-v0.0.1";

// A list of local resources we always want to be cached.
const PRECACHE_URLS = ["index.html", "offline.html"];
// The install handler takes care of precaching the resources we always need.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHVERSION)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.filter((key) => {
          if (key !== CACHVERSION) return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      if (r) return r;
      try {
        const response = await fetch(e.request);
        if (!e.request.url.includes("/static/")) return response;
        const cache = await caches.open(CACHVERSION);
        cache.put(e.request, response.clone());
        return response;
      } catch (error) {
        const cache = await caches.open(CACHVERSION);
        const cachedResponse = await cache.match("offline.html");
        return cachedResponse;
      }
    })()
  );
});
