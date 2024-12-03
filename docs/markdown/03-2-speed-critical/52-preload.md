<!-- .slide: class="two-column with-code" -->

# Le chemin critique

## Pré-charger les ressources critiques

<div>
- font

```html
<link rel="preload" href="fonts/my-font.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
```

</div>

<!-- .element: class="fragment" data-fragment-index="1"-->

<div>
- image

```html
<link rel="preload" href="banner.jpg" as="image" />
```

</div>
<!-- .element: class="fragment" data-fragment-index="2"-->
<div>
- js et css critiques

```html
<link rel="preload" href="critical.css" as="style" /> <link rel="preload" href="script.js" as="script" />
```

</div>
<!-- .element: class="fragment" data-fragment-index="4"-->
<div>
- video

```html
<link rel="preload" href="video.mp4" as="video" type="video/mp4" />
```

</div>
<!-- .element: class="fragment" data-fragment-index="5"-->
