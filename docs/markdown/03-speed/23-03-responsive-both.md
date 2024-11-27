# Images responsives - Combinaison des deux

- `picture` pour gérer les formats d’image.

<!-- .element: class="fragment" data-fragment-index="1"-->

- `srcset` dans les balises `<source>` pour gérer les résolutions.

<!-- .element: class="fragment" data-fragment-index="2"-->

<div style="margin-top: 50px; margin-bottom: 100px">

```html
<picture>
  <source
    srcset="adorable-otters-large.avif 1024w, adorable-otters-medium.avif 768w, adorable-otters-small.avif 480w"
    type="image/avif"
    sizes="(max-width: 799px) 100vw, 
           (min-width: 800px) 50vw"
  />
  <source
    srcset="adorable-otters-large.webp 1024w, adorable-otters-medium.webp 768w, adorable-otters-small.webp 480w"
    type="image/webp"
    sizes="(max-width: 799px) 100vw, 
           (min-width: 800px) 50vw"
  />
  <img src="adorable-otters-fallback.jpg" alt="Aborable loutres" />
</picture>
```

</div>
<!-- .element: class="fragment" data-fragment-index="3"-->
