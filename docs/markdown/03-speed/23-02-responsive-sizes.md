# Images responsives - srcset and sizes

- Gérer des tailles d'images selon l'écran

<!-- .element: class="fragment" data-fragment-index="1"-->
<div style="margin-top: 50px; margin-bottom: 100px">

```html
<img
  src="img/adorable-otters-medium.jpg"
  alt="Aborable loutres"
  sizes="(max-width: 799px) 100vw,
         (min-width: 800px) 50vw"
  srcset="img/adorable-otters-small.jpg 480w, img/adorable-otters-medium.jpg 800w, img/adorable-otters-large.jpg 1200w"
/>
```

</div>
<!-- .element: class="fragment" data-fragment-index="2"-->
