<!-- .slide: class="two-column with-code" -->

# Optimisation des ressources

## Découper le code

/product/92348 :

```html
<head>
  <script src="/scripts/common.js"></script>
  <script src="/scripts/product.js"></script>
  <script src="/scripts/product-reviews.js"></script>
</head>
```

/list :

```html
<head>
  <script src="/scripts/common.js"></script>
  <script src="/scripts/list.js"></script>
  <script src="/scripts/facets.js"></script>
</head>
```

##==##

<!-- .slide: class="two-column with-code" -->

# Optimisation des ressources

## Découper le code

Les Frameworks intègrent souvent le code splitting.

##--##

Exemple avec Next.js :

<img src="./assets/images/03-speed/next-build.png" style="width: 1300px; height: auto; display: block; margin: auto;"  />

##==##

<!-- .slide: class="two-column with-code" -->

# Optimisation des ressources

## Découper le code

Avec les bundlers, possibilité de définir plusieurs points d'entrée

Exemple avec Webpack :

```js
module.exports = {
  entry: {
    app: './src/common.js',
    product: './src/product.js',
    reviews: './src/product-reviews.js',
    list: './src/list.js',
    facets: './src/facets.js',
  },
};
```
