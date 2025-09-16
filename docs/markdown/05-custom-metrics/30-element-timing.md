<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Element Timing API

Permet de collecter les informations de chargement d'éléments identifiés sur la page :

```html
<!-- LCP, déjà collecté -->
<img src="/banner.jpg" alt="banner" />

<!-- élément important, non collecté : -->
<p>Je suis un paragraphe très important</p>
```

<div>

Solution :

```html
<p elementtiming="paragraphe-important">Je suis un paragraphe très important</p>
```

```js [7]
const performanceObs = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry.toJSON());
  }
});

performanceObs.observe({ type: 'element' });
```

</div>

<!-- .element: class="fragment" data-fragment-index="1"-->
##++##
##++##

<div style="margin-top: 205px;">

Exemple de retour :

```json
{
  "name": "text-paint",
  "entryType": "element",
  "startTime": 1673448.800000012,
  "duration": 0,
  "renderTime": 1673448.800000012,
  "loadTime": 0,
  "intersectionRect": {
    "x": 0,
    "y": 1,
    "width": 83,
    "height": 15,
    "top": 1,
    "right": 83,
    "bottom": 16,
    "left": 0
  },
  "identifier": "important-paragraph",
  "naturalWidth": 0,
  "naturalHeight": 0,
  "id": "",
  "url": ""
}
```

</div>
<!-- .element: class="fragment" data-fragment-index="2"-->
##++##
