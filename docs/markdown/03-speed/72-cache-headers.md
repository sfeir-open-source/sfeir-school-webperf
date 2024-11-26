<!-- .slide: class="two-column with-code" -->

# 7. Le cache HTTP

## Les entêtes

**cache-control**

##--##

<div style="margin-top: 205px">

Requête :

```
GET /products/964663
```

Réponse :

```
200 OK
cache-control: ...
```

</div>

##==##

<!-- .slide: class="two-column with-code" -->

# 7. Le cache HTTP

## Les entêtes

**cache-control**

- max-age

_Le navigateur a le droit de cacher cette ressource pendant X secondes_

##--##

<div style="margin-top: 205px">

Requête :

```
GET /products/964663
```

Réponse :

```
200 OK
cache-control: max-age=300
date: Mon, 25 Oct 2024 22:55:08 GMT
```

</div>

##==##

<!-- .slide: class="two-column with-code" -->

# 7. Le cache HTTP

## Les entêtes

**cache-control**

- max-age
- no-cache

_Le navigateur peut mettre en cache mais doit revalider à chaque fois_

<img src="./assets/images/03-speed/cache-no-cache-wtf.png" style="width: 500px; height: auto; display: block;  margin: auto; margin-top: 50px;"  />
<!-- .element: class="fragment" data-fragment-index="1"-->

##--##

<div style="margin-top: 205px">

Requête :

```
GET /products/964663
```

Réponse :

```
200 OK
cache-control: no-cache
```

</div>

<div>

Equivalent à :

```
200 OK
cache-control: max-age=0
```

</div>
<!-- .element: class="fragment" data-fragment-index="2"-->

##==##

<!-- .slide: class="two-column with-code" -->

# 7. Le cache HTTP

## Les entêtes

**cache-control**

- max-age
- no-cache
- no-store

_Le navigateur ne peut pas mettre en cache cette ressource_

##--##

<div style="margin-top: 205px">

Requête :

```
GET /products/964663
```

Réponse :

```
200 OK
cache-control: no-store
```

</div>

##==##

<!-- .slide: class="two-column with-code" -->

# 7. Le cache HTTP

## Les entêtes

**cache-control**

- max-age
- no-cache
- no-store
- must-revalidate

_Interdit d'utiliser des ressources périmées, même en cas de serveur indisponible_

##--##

<div style="margin-top: 205px">

Requête :

```
GET /products/964663
```

Réponse :

```
200 OK
cache-control: max-age=300, must-revalidate
```

</div>

##==##

<!-- .slide: class="two-column with-code" -->

# 7. Le cache HTTP

## Les entêtes

**cache-control**

- max-age
- no-cache
- no-store
- must-revalidate
- immutable

_Le navigateur ne revalidera jamais cette ressource tant qu'elle n'est pas périmée_

##--##

<div style="margin-top: 205px">

Requête :

```
GET /main.js
```

Réponse :

```
200 OK
cache-control: public, max-age=31536000, immutable
```

</div>

##==##

<!-- .slide: class="two-column with-code" -->

# 7. Le cache HTTP

## Les entêtes

**cache-control**

- max-age
- no-cache
- no-store
- must-revalidate
- immutable

##--##

<div style="margin-top: 205px">

**Versioning / Fingerprinting**

Requête :

```
GET /main.js?version=2

GET /main-3erdoeirkmn42e4.js
```

Réponse :

```
200 OK
cache-control: public, max-age=31536000, immutable
```

</div>

##==##

<!-- .slide: class="two-column with-code" -->

# 7. Le cache HTTP

## Les entêtes

**cache-control**

- max-age
- no-cache
- no-store
- must-revalidate
- immutable
- stale-while-revalidate

_Une version périmée peut être servie pendant X secondes_
_Permettant une revalidation en tâche de fond_

##--##

<div style="margin-top: 205px">

Requête :

```
GET /products/964663
```

Réponse :

```
200 OK
cache-control: max-age=604800, stale-while-revalidate=86400
```

</div>

##==##

<!-- .slide: class="two-column with-code" -->

# 7. Le cache HTTP

## Les entêtes

**revalidation conditionnelle**

- Etag

##--##

<div style="margin-top: 205px">

Requête :

```
GET /products/964663
```

Réponse :

```
200 OK
Etag: "ab4gh6ej"
```

</div>

<div>

Requête suivante :

```
GET /products/964663
if-none-match: "ab4gh6ej"
```

Réponse :

```
304 Not Modified
Etag: "ab4gh6ej"
```

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->

##==##

<!-- .slide: class="two-column with-code" -->

# 7. Le cache HTTP

## Les entêtes

**revalidation conditionnelle**

- Etag
- Last-Modified

##--##

<div style="margin-top: 205px">

Requête :

```
GET /products/964663
```

Réponse :

```
200 OK
last-modified: Tue, 25 Oct 2024 00:30:00 GMT
```

</div>

<div>

Requête suivante :

```
GET /products/964663
if-modified-since: "Tue, 25 Oct 2024 00:30:00 GMT"
```

Réponse :

```
304 Not Modified
last-modified: Tue, 25 Oct 2024 00:30:00 GMT
```

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->
