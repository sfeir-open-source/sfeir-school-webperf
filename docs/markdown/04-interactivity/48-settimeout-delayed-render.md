<!-- .slide: class="two-column with-code " -->

# Les causes et solutions

## 3. Les tâches longues

Pour éviter de manipuler des callbacks, on peut utiliser des Promises :

```JavaScript
function yieldToMainThread () {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}
```

Utilisation :

```JavaScript
async function handleMenuOpen() {
  openMenu();
  await yieldToMainThread();
  trackOpenMenu();
}
```

Notes:

Montrer l'intérêt avec du rendu non prioritaire

Montrer la syntaxe avec promise :
