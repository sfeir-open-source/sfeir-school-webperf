<!-- .slide: class="two-column with-code" -->
# Fetchpriority

<div>

Ajuster la priorité de chargement d'une ressource déjà définie dans le DOM.

valeur possibles :

- high
- low

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->

<div>

```html
<img src="hero.jpg" fetchpriority="high" alt="Hero image" />
<link href="script.js" as="script" fetchpriority="low" />
```

</div>

<!-- .element: class="fragment" data-fragment-index="2"-->

##--## 

<img src="./assets/images/03-speed/fetchpriority.png" class="03-load" style="width: 1000px; height: auto; margin-top:200px;"  />

<!-- .element: class="fragment" data-fragment-index="3"-->

Notes:

https://web.dev/articles/fetch-priority?hl=fr
