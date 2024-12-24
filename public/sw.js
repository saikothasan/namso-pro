const CACHE_NAME = 'testing-tools-cache-v1';
const urlsToCache = [
  '/',
  '/credit-card-generator',
  '/user-generator',
  '/card-validator',
  '/bin-checker',
  '/about',
  '/faq'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

