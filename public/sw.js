let cacheName = "learn";
let cacheFiles = [
 '/',
 'https://learningcurve-11efe.firebaseapp.com/css/style.css',
 'https://learningcurve-11efe.firebaseapp.com/js/app.js',
 'https://learningcurve-11efe.firebaseapp.com/js/mainClass.js',
 'https://learningcurve-11efe.firebaseapp.com/js/firebase.js',
  'https://learningcurve-11efe.firebaseapp.com/js/jquery.min.js',
  'https://learningcurve-11efe.firebaseapp.com//modal.html',
  'https://learningcurve-11efe.firebaseapp.com//manifest.json',
  'https://learningcurve-11efe.firebaseapp.com/images/icons/icon-60x60.png'
   ]
   self.addEventListener("install", function(e) {
    console.log('[ServiceWorker] Installed');
    e.waitUntil(
     caches.open(cacheName).then(function(cache) {
       return cache.addAll(cacheFiles);
         
     })
   );
  });
  self.addEventListener('activated', function(e) {
    console.log("[serviceworker], Activated")
    e.waitUntil(
      caches.keys().then(function(cacheNames){
        return Promise.all(cacheNames.map(function(thisCacheName){
       if (thisCacheName !== cacheName){
         console.log("[Serviceworker] removing cached files from", thisCacheName)
        return caches.delete(thisCacheName);
         }
        }))
      })
    )
  })
   self.addEventListener('fetch', function(e) {
    console.log("[serviceworker]  fetching", e.request.url);
    e.respondWith(
      caches.match(e.request).then(function(response){
        if(response){
          console.log('[serviceworker] found in cache',e.request.url,response);
        return response;
        }
       var requestClone = e.request.clone();
        fetch(requestClone).then(function(response){
           if(!response){
             console.log("serviceworker no response from fetch");
             return response;
           }
           var responseClone = response.clone();
           caches.open(cacheName).then(function(cache) {
            cache.put(e.request, responseClone);
            return response;
           });
         })
         .catch(function(err){
           console.log("[servicework] error fetching & caching new")
         });
      })
    );
  });






