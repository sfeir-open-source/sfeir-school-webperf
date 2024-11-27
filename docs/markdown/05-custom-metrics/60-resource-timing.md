<!-- .slide: class="two-column with-code " -->

# Resource Timing API

```js [8]
const po = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry.toJSON());
  }
});

po.observe({
  type: 'resource',
  buffered: true,
});
```

Permet de récupérer les informations détaillées sur les chargements de ressources :

- initiatorType : script, link, fetch
- nextHopProtocol: http1, http2, http3
- encodedBodySize / decodedBodySize
- transferSize

##==##

<!-- .slide: class="two-column with-code " -->

# Resource Timing API

Très pratique pour récupérer les informations sur le cache navigateur :

```js
const po = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.transferSize === 0) {
      console.log('CACHE HIT');
    } else {
      console.log('CACHE MISS');
    }
  }
});

po.observe({ type: 'resource', buffered: true });
```
