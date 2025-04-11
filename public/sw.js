self.addEventListener('install', (event) => {
    console.log('Service Worker نصب شد ✅');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker فعال شد 🚀');
  });
  
  //self.addEventListener('fetch', (event) => {
    // می‌تونی بعداً کش هم اضافه کنی
 // });
  // sw.js
const CACHE_NAME = 'todo-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/Todo-list-app-pwa/'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});