<!-- .slide: class="two-column with-code" -->

# Optimisation d'images

## Device Pixel Ratio

Rapport entre la résolution physique d'un écran et la résolution logique utilisée par le navigateur.

DPR de 1 :

**1 pixel physique = 1 pixel CSS**

DPR de 2 :

**2 pixels physiques = 1 pixel CSS**

```html
<img
  src="img/adorable-otters.jpg"
  srcset="img/adorable-otters.jpg 1x, img/adorable-otters-retina.jpg 2x"
  alt="Aborable loutres>
```

<!-- .element: class="fragment" data-fragment-index="1"-->
