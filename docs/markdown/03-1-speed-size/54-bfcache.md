<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Le cache HTTP

## Le BFCache (ou cache amélioré)
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Le cache HTTP

## Le BFCache (ou cache amélioré)

<img src="./assets/images/03-speed/cache-bf.svg" style="width: 700px; height: auto; display: block;  margin: auto; margin-top: 50px;"  />
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Le cache HTTP

## Le BFCache (ou cache amélioré)

à la navigation dans l'historique<br/>
L'état de la page est restauré :

- Champs de formulaire
- Position de scroll
- Focus

<div>

Exemple : comment détecter une page chargée du BFCache ?

```js
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    console.log('This page was restored from the bfcache.');
  } else {
    console.log('This page was loaded normally.');
  }
});
```

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->
##++##
##++##

<div style="margin-top: 205px">

Des conditions doivent être remplies pour bénéficier du BFCache :

<!-- .element: class="admonition warning" -->

- pas d'écouteur d'événement sur `unload`
- pas de `cache-control: no-store`

</div>
<!-- .element: class="fragment" data-fragment-index="2"-->
##++##
