# Différence entre preload et prefetch

|                | Preload                                        | Prefetch                                       |
| -------------- | ---------------------------------------------- | ---------------------------------------------- |
| Objectif       | Charger des ressources critiques immédiatement | Charger des ressources pour des besoins futurs |
| Moment d'usage | Lors du rendu initial                          | Lors d'une interaction utilisateur future      |
| Priorité       | Haute                                          | Basse                                          |


<!-- .element: class="fragment" data-fragment-index="1"-->

<br>

```html
<link rel="preload" href="banner.jpg" as="image" />
<link rel="preload" href="critical.css" as="style" />
<link rel="preload" href="script.js" as="script" />
```

<!-- .element: class="fragment" data-fragment-index="2"-->

```html
<link rel="prefetch" href="next-page.html" />

<link rel="prefetch" href="banner.jpg" as="image" />
<link rel="prefetch" href="critical.css" as="style" />
<link rel="prefetch" href="script.js" as="script" />
```

<!-- .element: class="fragment" data-fragment-index="3"-->

Notes:

Attributs essentiels:

- <strong>rel="preload"</strong> : Indique au navigateur de précharger la ressource.
- <strong>as="type"</strong> : Spécifie le type de ressource (image, font, script, etc.) pour optimiser le traitement.
- <strong>crossorigin="anonymous"</strong> : Nécessaire pour les ressources provenant de domaines tiers (comme des polices Google).
