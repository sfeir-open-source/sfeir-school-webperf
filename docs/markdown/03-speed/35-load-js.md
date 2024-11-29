# Charger les js utiles

```js
if (window.location.pathname === '/home') {
  const script = document.createElement('script');
  script.src = 'https://cdn.abtasty.com/your-script.js';
  script.async = true;
  document.body.appendChild(script);
}
```

<!-- .element: class="fragment" data-fragment-index="1"-->
