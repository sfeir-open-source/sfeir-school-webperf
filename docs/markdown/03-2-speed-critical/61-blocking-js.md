<!-- .slide: class="two-column with-code" -->

# Les étapes bloquantes

## JavaScript

<br>
<br>

```js
const loadImg = (src) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Product image';
  return img;
};

if (product.sale) {
  loadImg('/images/product/sale.jpg');
} else {
  loadImg('/images/product/normal.jpg');
}
```

##==##

# Les étapes bloquantes

## JavaScript

<img src="./assets/images/03-speed/js-blocking.svg" style="width: 1800px; height: auto;"   />
```
