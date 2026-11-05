const CACHE_NAME = 'Sudoke';
const cacheList = [
    "vue.min.js",
    "reset.min.css",
    "Montserrat-Regular.ttf",
    "index.min.js",
    "index.html",
    "index.css",
    "images/block.png",
    "images/blockp.png",
    "images/cross.png",
    "images/delete.png",
    "images/favicon.png",
    "images/home.png",
    "images/menu.svg",
    "images/ray.png",
    "images/row.png",
    "images/tip.png"
];
this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(cacheList);
        })
    );
});

const CACHE_PREFIX = 'Sudoke2';

this.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key.indexOf(CACHE_PREFIX) === 0 && key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

this.addEventListener('fetch', function (event) {
    if (
        event.request.method !== 'GET' ||
        event.request.url.indexOf('http://') === 0 ||
        event.request.url.indexOf('an.yandex.ru') !== -1
    ) {
        return;
    }
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
