'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "242d490bad60365821ec261f4ff74f34",
"assets/assets/brand1.png": "f3a3a0de79048e1f14aac62ec76609b8",
"assets/assets/brand2.png": "91c6d8820e35e10e39757e0de6ac4345",
"assets/assets/brand3.png": "c0915a84744f3481a2105c5aea6727e0",
"assets/assets/brand4.png": "e9441e9a5d26e508f592aa31b9febff6",
"assets/assets/brand5.png": "fc57e9a9ff95830ea207e2452ffd4bd6",
"assets/assets/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/female.png": "29c52b49d99a5de88d34ab04aafe3f59",
"assets/assets/images/backdrop1.png": "bda02a5b9dd083a37b9c62b16a66aae0",
"assets/assets/images/backdrop2.png": "82f8f2004683898b6c2a165f80d3ca74",
"assets/assets/images/background.jpg": "b00b76e74c8cd31ebb27f9b5577cbca7",
"assets/assets/images/logo.png": "f75d15efebdd04b4b2532e3299341afd",
"assets/assets/images/product1.png": "b4a2f51febaf890ee356564d814c4389",
"assets/assets/images/product10.png": "9085e92933fb9a29d1fb2a6bfc96fa6b",
"assets/assets/images/product11.png": "df379d27143e220ba51d095f09219b76",
"assets/assets/images/product12.png": "944f3a3d72aa9a83b33fb2b1eb6df233",
"assets/assets/images/product2.png": "1cc576fc46634c00f60571bca455b300",
"assets/assets/images/product3.png": "89b0fc16db40ec5fe9a0914acef9eed0",
"assets/assets/images/product4.png": "bdc401a2cb78d004aab9f24074889224",
"assets/assets/images/product5.png": "ea25ecf97a450f805a1ef346d83c2c77",
"assets/assets/images/product6.png": "bebe15a2320b6278209d368fb37bd05a",
"assets/assets/images/product7.png": "7d7e6194f283e91347e719e189b9bf79",
"assets/assets/images/product8.png": "302fddf930372670dbd91e2faafd46d3",
"assets/assets/images/product9.png": "2402a0fdf3e95a7a2c52f7b8326a18a5",
"assets/assets/ios.png": "49f79e21da11e96b8cf0e3b8bef6616c",
"assets/assets/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/male.png": "a687ddbf4597360c3b9e293a58b1d829",
"assets/assets/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/person.png": "5b6ba176416812aa5448c6704d31caa0",
"assets/assets/person_small.png": "6f780d058150543096d7bd3060db4ac4",
"assets/assets/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/whatsapp.png": "426617ad28567da23a2346566d84b5a6",
"assets/assets/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/FontManifest.json": "183abc6e4056dc464e2662dc701ab7e3",
"assets/fonts/dancing_script/DancingScript-Regular.ttf": "406a55ec77746aedcad7c64f57849855",
"assets/fonts/karla/Karla-Regular.ttf": "8f456584c855750cf2eb1c28f39753e5",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/rosarivo/Rosarivo-Regular.ttf": "84bb2b8a1ad264d0de609db9adc953de",
"assets/NOTICES": "1665d03bcc612625b4673cad4d87a750",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/feather_icons/fonts/feather.ttf": "ad5435302c3c2d1f23f275d0f22d36c6",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ce89c66f770be10ace9205634f3ffa35",
"/": "ce89c66f770be10ace9205634f3ffa35",
"loader.css": "f61841a48de5b79316184d950976284a",
"main.dart.js": "0403e71947908e92aac6da1181ddc35f",
"manifest.json": "33f800ebfef064613f8dec323b266c5b",
"version.json": "bd341ba74d38c530da636604a427deda"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
