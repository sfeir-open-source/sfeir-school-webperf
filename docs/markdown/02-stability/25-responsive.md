<!-- .slide: class="with-code" -->

# Images

## Balises responsives

Cela s'applique aussi aux images responsives :

```html
<img
  src="/loutre.png"
  srcset="/loutre-400w.png 400w, /loutre-800w.png 800w, /loutre-1200w.png 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Image d'une loutre"
  width="640"
  height="360"
/>
```

<div>
Et également aux images adaptatives :

```html
<picture>
  <source media="(max-width: 799px)" srcset="loutre-480w-cropped.jpg" width="480" height="400" />
  <source media="(min-width: 800px)" srcset="loutre-800w.jpg" width="800" height="400" />
  <img src="loutre-800w.jpg" alt="Une belle loutre" width="800" height="400" />
</picture>
```

</div>

<!-- .element: class="fragment" data-fragment-index="1"-->
