<!-- .slide: class="two-column with-code" -->

# Optimisation des ressources

## Charger le JS utile

```js
if (window.location.pathname === '/home') {
  const script = document.createElement('script');
  script.src = 'https://cdn.abtasty.com/your-script.js';
  script.async = true;
  document.body.appendChild(script);
}
```

<!-- .element: class="fragment" data-fragment-index="1"-->

##==##

<!-- .slide: class="two-column with-code" -->

# Optimisation des ressources

## Charger dynamiquement

```js
document.getElementById('loadModule').addEventListener('click', async () => {
  const module = await import('./myModule.js');
  module.default();
});
```

<!-- .element: class="fragment" data-fragment-index="1"-->

<div style="margin-top: 100px;">

Tips :

- Avec Webpack, les importations dynamiques créent automatiquement des chunks distincts.

```js
import('./myModule.js').then((module) => {
  module.default();
}.catch((err) => {
  console.error('Failed to load the module', err);
});
```

</div>

<!-- .element: class="fragment" data-fragment-index="2"-->

##--##

<div style="margin-top: 480px;">

Ce que Webpack génère :

- Un fichier myModule.[hash].js contenant le module.
- Chargé automatiquement lorsque l'importation est déclenchée.

</div>

<!-- .element: class="fragment" data-fragment-index="3"-->
