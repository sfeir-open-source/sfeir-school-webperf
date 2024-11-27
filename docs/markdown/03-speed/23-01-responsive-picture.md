# Images responsives - picture

- Gérer des formats d'images différents

<!-- .element: class="fragment" data-fragment-index="1"-->
<div style="margin-top: 50px; margin-bottom: 100px">

```html
<picture>
  <source srcset="img/adorable-otters.avif" type="image/avif" />
  <source srcset="img/adorable-otters.webp" type="image/webp" />
  <img src="img/adorable-otters.jpg" alt="Aborable loutres" />
</picture>
```

</div>
<!-- .element: class="fragment" data-fragment-index="2"-->

- Charger un format différent entre mobile et desktop

<!-- .element: class="fragment" data-fragment-index="3"-->

<div style="margin-top: 50px">

```html
<picture>
  <source media="(max-width: 799px)" srcset="img/adorable-otters-480w-cropped.jpg" width="480" height="400" />
  <source media="(min-width: 800px)" srcset="img/adorable-otters-800w.jpg" width="800" height="400" />
  <img src="img/adorable-otters-800w.jpg" alt="Aborable loutres" />
</picture>
```

</div>

<!-- .element: class="fragment" data-fragment-index="4"-->
