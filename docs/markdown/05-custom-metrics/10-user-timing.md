<!-- .slide: class="two-column with-code " -->

# User Timing API

API navigateur qui permet de :

1. Définir des marqueurs dans le temps
2. Mesurer des durées entre ces marqueurs

##--##

<div style="margin-top: 205px;">

Exemple :

```js
const addToCart = async (item) => {
  performance.mark('addtocart:start');

  await api.addToCart(item);
  showCartValidation();

  performance.mark('addtocart:end');

  const measure = performance.measure('addtocart', 'addtocart:start', 'addtocart:end');

  console.log(measure);
};
```

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->

##==##

<!-- .slide: class="two-column with-code " -->

# User Timing API

Quel intérêt par rapport à `Date.now()` ou `performance.now()` ?

<div>

S'intègre par défaut dans les devtools :

<img src="./assets/images/05-custom-metrics/user-timing-devtools.png" style="width: 1500px; height: auto; display: block; margin-top: 20px;" />

</div>

<!-- .element: class="fragment" data-fragment-index="1"-->
