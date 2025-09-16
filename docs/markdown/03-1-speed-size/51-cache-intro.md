<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Le cache HTTP

## Qu'est-ce que le cache HTTP ?

<img src="./assets/images/03-speed/cache-1.svg" style="width: 800px; height: auto; display: block;  margin: auto; margin-top: 50px;"  />
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Le cache HTTP

## Qu'est-ce que le cache HTTP ?

<img src="./assets/images/03-speed/cache-2.svg" style="width: 800px; height: auto; display: block;  margin: auto; margin-top: 50px;"  />
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Le cache HTTP

## Qu'est-ce que le cache HTTP ?

<img src="./assets/images/03-speed/cache-3.svg" style="width: 800px; height: auto; display: block;  margin: auto; margin-top: 50px;"  />
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Le cache HTTP

## Qu'est-ce que le cache HTTP ?

<img src="./assets/images/03-speed/cache-4.svg" style="width: 800px; height: auto; display: block;  margin: auto; margin-top: 50px;"  />
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Le cache HTTP

## Qu'est-ce que le cache HTTP ?

<img src="./assets/images/03-speed/cache-5.svg" style="width: 1000px; height: auto; display: block;  margin: auto; margin-top: 50px;"  />
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Le cache HTTP

## A quoi ça sert ?

- Diminuer le temps de chargement côté client
<!-- .element: class="fragment" data-fragment-index="1"-->

- Réduire la charge sur le serveur
<!-- .element: class="fragment" data-fragment-index="2"-->

- Réduire la bande passante
<!-- .element: class="fragment" data-fragment-index="3"-->
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Le cache HTTP

## Comment ça marche ?

1. Des directives, via des entêtes HTTP
##++##
##++##

<div style="margin-top: 205px">

```
cache-control: max-age=180
etag: "caf21b03a93618b475aad1e0968fbb57"

cache-control: no-cache
etag: "caf21b03a93618b475aad1e0968fbb57"

cache-control: no-store

cache-control: max-age=300 private

cache-control: max-age=300 public

content-encoding: br
vary: accept-encoding
```

</div>
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Le cache HTTP

## Comment ça marche ?

1. Des directives, via des entêtes HTTP

2. Des sources (extension, nom de fichier, compatibilités ...)
##++##
##++##

<div style="margin-top: 205px">

```
GET /products/964663

GET /landing/1234

GET /main.js

GET /main.css

GET /main.js?v=1

GET /main-345eze4f45z.js

GET /products/964663
accept-encoding: gzip, deflate, br
```

</div>
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Le cache HTTP

## Cache navigateur

<img src="./assets/images/03-speed/cache-browser.svg" style="width: 1000px; height: auto; display: block;  margin: auto; margin-top: 50px;"  />
##++##
