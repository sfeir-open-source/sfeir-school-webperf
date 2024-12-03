<!-- .slide: class="two-column with-code" -->

# La compression

## La minification

- Supprime les caractères inutiles
- Raccourcit les noms de variables
- Utilise des syntaxes plus courtes
- Conserve la syntaxe : pas besoin de "dé-minifier"
- Le plus efficace

##--##

<div>

Avant :

```js
function validatePassword(password) {
  // Vérifie si le mot de passe a au moins 10 caractères
  if (password.length < 10) {
    return false;
  }
  // Vérifie si le mot de passe contient au moins une majuscule
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  // Vérifie si le mot de passe contient au moins un caractère spécial
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return false;
  }
  // Vérifie si le mot de passe contient au moins un chiffre
  if (!/[0-9]/.test(password)) {
    return false;
  }
  // Si toutes les conditions sont remplies, renvoie true
  return true;
}
```

</div>

<!-- .element: class="fragment" data-fragment-index="1"-->

<div>

Après :

```js
function validatePassword(t) {
  return !!(!(t.length < 10) && /[A-Z]/.test(t) && /[!@#$%^&*(),.?":{}|<>]/.test(t) && /[0-9]/.test(t));
}
```

</div>
<!-- .element: class="fragment" data-fragment-index="2"-->

##==##

<!-- .slide: class="two-column with-code" -->

# La compression

## La minification

- Supprime les caractères inutiles
- Raccourcit les noms de variables
- Utilise des syntaxes plus courtes
- Conserve la syntaxe : pas besoin de "dé-minifier"
- Le plus efficace

##--##

<div style="margin-top: 205px">

**Pour quels fichiers ?**

- JavaScript
- CSS
- HTML
- SVG
- JSON
</div>
