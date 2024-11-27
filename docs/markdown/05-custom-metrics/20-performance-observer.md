<!-- .slide: class="two-column with-code " -->

# Performance Observer API

Permet de collecter toutes les données liées à la performance de la page :

- Les métriques standard (LCP, INP, CLS ...)
- Les mesures custom
- Chargements des ressources
- Les événements
- Les tâches longues

<br/><br/>

Fonctionne de manière passive

##--##

<div style="margin-top: 205px;">

```js
const performanceObs = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry.toJSON());
  }
});

performanceObs.observe({ type: '<type-entrée>' });
```

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->

<div>

Pour récupérer les données déjà collectées :

```js
performanceObs.observe({
  type: '<type-entrée>',
  buffered: true,
});
```

</div>
<!-- .element: class="fragment" data-fragment-index="2"-->

##==##

<!-- .slide: class="two-column with-code " -->

# Performance Observer API

Pour connaitre tous les types d'entrées disponibles :<br/>
_PerformanceObserver.supportedEntryTypes_

<img src="./assets/images/05-custom-metrics/obs-supported.png" style="width: 500px; height: auto; display: block; margin-top: 20px;" />

##--##

<div style="margin-top: 205px;">

Exemple :

```js
po.observe({ type: 'largest-contentful-paint', buffered: true });
```

```json
{
  "name": "",
  "entryType": "largest-contentful-paint",
  "startTime": 1098.9000000059605,
  "duration": 0,
  "size": 414619,
  "renderTime": 1098.9000000059605,
  "loadTime": 966.2000000178814,
  "firstAnimatedFrameTime": 0,
  "id": "",
  "url": "https://contents.mediadecathlon.com/s1168808/.jpg?format=auto&f=900x0"
}
```

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->
