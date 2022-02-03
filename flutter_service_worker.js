'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1f647972a27be8d1bf3b20c9b53ac57c",
"assets/assets/images/ara-1.jpg": "555a2776caa10768f87d7b2fe841d0ba",
"assets/assets/images/ara-10.jpg": "c1f3484abb0354650810cfdced06fbbd",
"assets/assets/images/ara-2.jpg": "1144227414a0bbf187864e1957bf9271",
"assets/assets/images/ara-3.jpg": "12aa0c4eeefe5248f93deaff9bc3e42b",
"assets/assets/images/ara-4.jpg": "70e2e8c843ab86d8465b4823fe2762eb",
"assets/assets/images/ara-5.jpg": "7a838135216db19946f07531601628df",
"assets/assets/images/ara-6.jpg": "b0b954e4f5a5d8e5064af01b753ceb9a",
"assets/assets/images/ara-7.jpg": "a2bf9c4858b625bc0c07930405e91699",
"assets/assets/images/ara-8.jpg": "8fc9e0dab1357a9bd0923610b4c60d51",
"assets/assets/images/ara-9.jpg": "41db1492f1d4346b756575af11d3bb27",
"assets/assets/images/level-0.jpg": "9aedd78cb46eb1f065747b0ccaea687e",
"assets/assets/images/level-1.jpg": "fcba71e13df683add34aae609b9ca646",
"assets/assets/images/level-2.jpg": "aa448fbfb6c52cd4a874b41a9011e754",
"assets/assets/images/level-3.jpg": "5abcd26f800f1d3bac78728fe1fbe2dc",
"assets/assets/images/level-4.jpg": "07374666f2c617d3886580866368eb0f",
"assets/assets/images/level-5.jpg": "d64488de87fd37c17b0964222b005d0a",
"assets/assets/images/ora-1.jpg": "a649cb07fa0b6b92d352ac5a5f5e9d8e",
"assets/assets/images/ora-10.jpg": "4634b5363a9192288ea2cd193f307c4d",
"assets/assets/images/ora-2.jpg": "72d63975867172ac903fc7b4ba9e23be",
"assets/assets/images/ora-3.jpg": "65779d2a47311d64dd5b9b773912d815",
"assets/assets/images/ora-4.jpg": "c6ea7d54e163108874820df2b431961b",
"assets/assets/images/ora-5.jpg": "f59ae9cfc67dbece9d884ae9c48b7cbe",
"assets/assets/images/ora-6.jpg": "87fde0a0aa39ccdb82c084efad1ced20",
"assets/assets/images/ora-7.jpg": "379fb3a4647cf9410c2e957ac325630b",
"assets/assets/images/ora-8.jpg": "96d518b224e82582d386919e60878dcb",
"assets/assets/images/ora-9.jpg": "29a57ec3d7b63a59ede4b07160d86dce",
"assets/assets/images/user.png": "1300018473cc0038187aaa0e2604fa27",
"assets/assets/svg/bell.svg": "4a86ba9c8da0ed9146d7ba88e89d7780",
"assets/assets/svg/chat_off.svg": "a509a570599f2a832ff56b5a07a72c45",
"assets/assets/svg/chat_on.svg": "b38bd3269638336d595b4edda2079f83",
"assets/assets/svg/heart_off.svg": "7746f5e4d82a2cf71a3d1f30fdef6ace",
"assets/assets/svg/heart_on.svg": "0f0a056e8d5201f34189fc50f0566f97",
"assets/assets/svg/home_off.svg": "6f087f95ffc4946f72d8d4e7513ca13e",
"assets/assets/svg/home_on.svg": "8b41ca2e4953bb7e8cc248acee31994a",
"assets/assets/svg/location_off.svg": "5e0e38c20f2cde867f98302dfafa784c",
"assets/assets/svg/location_on.svg": "bb11aea1ef27667cd60630eedcf17c79",
"assets/assets/svg/notes_off.svg": "7db858ae65179a91e873cc755e906572",
"assets/assets/svg/notes_on.svg": "cbe4df50863e83bdbc77300af09479cc",
"assets/assets/svg/user_off.svg": "7de5e5f7d3fbd734c8d9328cc6806365",
"assets/assets/svg/user_on.svg": "47be60baa8a7281a95b735338d2d4b18",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "51ade99bee4444c89b9705f5f5bf5bfa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "db5e7db702ef97d344b4cbf0de243a76",
"/": "db5e7db702ef97d344b4cbf0de243a76",
"main.dart.js": "db5f8cb11b85500a6ac4361fbb5d184e",
"manifest.json": "674270e073147e643df5899488cb92a3",
"version.json": "80a2e3f9da753b61efdf273f190ede46"
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
