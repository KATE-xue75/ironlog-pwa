// IronLog PWA — Service Worker v3
// Network-first for fresh content, cache fallback for offline
const CACHE = 'ironlog-v3';

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll([
        '/',
        '/css/style_v3.css',
        '/js/app_v3.js',
        '/js/storage_v3.js',
        '/data/exercises_v3.js',
        '/data/templates_v3.js',
        '/manifest.json'
      ])
    )
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes(self.location.origin)) {
    e.respondWith(
      fetch(e.request).then(resp => {
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return resp;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
