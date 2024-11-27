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

##==##

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

##==##

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

##==##

# Différence principale entre picture et img avec srcset

| Caractéristique           | picture                                                                                       | img avec srcset et sizes                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Flexibilité               | Permet des conditions complexes (par exemple, formats et tailles différentes, media queries). | Principalement utilisé pour changer les tailles d'images selon l'écran.                           |
| Formats différents        | Permet de spécifier différents formats d'images (webp, avif, etc.).                           | Ne permet pas de changer de format (doit rester le même type).                                    |
| Media Queries spécifiques | Permet d'associer chaque image à des conditions CSS spécifiques (via media).                  | Les images sont choisies uniquement en fonction de la taille d'affichage et des valeurs de sizes. |
| Syntaxe                   | Plus complexe à écrire mais très puissante.                                                   | Plus simple et suffisante pour les cas où seul le dimensionnement compte.                         |

<!-- .element: class="fragment" data-fragment-index="1"-->
