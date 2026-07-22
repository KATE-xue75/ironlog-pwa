const CACHE_NAME = 'ironlog-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/storage.js',
  '/js/card.js',
  '/js/templates.js',
  '/data/exercises.js',
  '/data/templates.js',
  '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Network-first for exercise GIFs (they're large, cache on access)
  if (e.request.url.includes('exercisedb.dev') || e.request.url.includes('gif')) {
    e.respondWith(
      caches.match(e.request).then(cached =>
        cached || fetch(e.request).then(resp => {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return resp;
        })
      )
    );
    return;
  }
  // Stale-while-revalidate for everything else
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchPromise = fetch(e.request).then(resp => {
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, resp.clone()));
        return resp;
      });
      return cached || fetchPromise;
    })
  );
});
