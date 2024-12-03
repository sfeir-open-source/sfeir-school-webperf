<!-- .slide: class="two-column with-code" -->

# Optimisation des ressources

## Nettoyer le code

##==##

<!-- .slide: class="two-column with-code" -->

# Optimisation des ressources

## Nettoyer le code

En JavaScript : le tree shaking

lib.js

```js
export function foo() {}
export function bar() {}
```

main.js

```js
import { foo } from './lib.js';
console.log(foo());
```

output.js

```js
function foo() {}
console.log(foo());
```

##--##

<div style="margin-top: 205px;">

Penser à vérifier la configuration du bundler.
Le tree shaking, c'est pas automatique

<!-- .element: class="admonition info" -->

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->

##==##

<!-- .slide: class="two-column with-code" -->

# Optimisation des ressources

## Nettoyer le code

En CSS (postcss) :

```js
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.html'],
    }),
  ],
};
```
