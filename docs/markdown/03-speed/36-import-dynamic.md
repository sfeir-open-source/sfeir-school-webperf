<!--- .element: class="two-column with-code columns-50-50" -->
# Import dynamique

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
