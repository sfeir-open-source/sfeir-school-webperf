<!-- .slide: class="two-column with-code" -->

# 7. Le cache HTTP

## Service Worker

##==##

<!-- .slide: class="two-column with-code" -->

# 7. Le cache HTTP

## Service Worker

<img src="./assets/images/03-speed/cache-sw.svg" style="width: 700px; height: auto; display: block;  margin: auto; margin-top: 50px;"  />

##==##

<!-- .slide: class="two-column with-code" -->

# 7. Le cache HTTP

## Service Worker

Exemple :

```javascript
const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1');
  await cache.addAll(resources);
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    addResourcesToCache([
      '/',
      '/index.html',
      '/style.css',
      '/app.js',
      '/image-list.js',
      '/star-wars-logo.jpg',
      '/gallery/bountyHunters.jpg',
      '/gallery/myLittleVader.jpg',
      '/gallery/snowTroopers.jpg',
    ])
  );
});
```
