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
  