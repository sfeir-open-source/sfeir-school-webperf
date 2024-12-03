<!-- .slide: class="two-column with-code" -->

# Le cache HTTP

## Le cache partagé (public)

##==##

<!-- .slide: class="two-column with-code" -->

# Le cache HTTP

## Le cache partagé (public)

<img src="./assets/images/03-speed/cache-proxy.svg" style="width: 1000px; height: auto; display: block;  margin: auto; margin-top: 50px;"  />

##==##

<!-- .slide: class="two-column with-code" -->

# Le cache HTTP

## Le cache partagé (public)

<img src="./assets/images/03-speed/cache-cdn.svg" style="width: 1000px; height: auto; display: block;  margin: auto; margin-top: 50px;"  />

##==##

<!-- .slide: class="two-column with-code" -->

# Le cache HTTP

## Le cache partagé (public)

Avantages :

- Partager le cache entre tous les utilisateurs
- Réduire les temps de réponse
- Réduire la charge sur le serveur

<br/><br/>

**Hit Ratio = HITS / MISS + HITS**

##==##

<!-- .slide: class="two-column with-code" -->

# Le cache HTTP

## Le cache partagé (public)

Le cache partagé donne l'information du son temps de stockage au navigateur (age) :

Requête

```
GET /product/964663
```

Réponse

```
200 OK
cache-control: max-age=3600
date: Tue, 25 Oct 2024 01:00:00 GMT
Age: 349
X-Cache: hit
```

##==##

<!-- .slide: class="two-column with-code" -->

# Le cache HTTP

## Le cache partagé (public)

Toutes les entêtes peuvent s'appliquer aux caches publics

- Cache-Control
  - max-age
  - no-cache
  - no-store
  - must-revalidate
  - immutable
  - stale-while-revalidate
- Etag
- Last-Modified
- ...

##==##

<!-- .slide: class="two-column with-code" -->

# Le cache HTTP

## Le cache partagé (public)

Pour interdire le cache public :

- `Cache-Control: private, max-age=300`

##==##

<!-- .slide: class="two-column with-code" -->

# Le cache HTTP

## Le cache partagé (public)

Pour interdire le cache public :

- `Cache-Control: private, max-age=300`

Pour l'autoriser explicitement :

- `Cache-Control: public, max-age=300`

##==##

<!-- .slide: class="two-column with-code" -->

# Le cache HTTP

## Le cache partagé (public)

Pour interdire le cache public :

- `Cache-Control: private, max-age=300`

Pour l'autoriser explicitement :

- `Cache-Control: public, max-age=300`

Pour distinguer cache public / cache privé :

- `Cache-Control: max-age=300, s-maxage=3600`

##==##

<!-- .slide: class="two-column with-code" -->

# Le cache HTTP

## Le cache partagé (public)

Pour interdire le cache public :

- `Cache-Control: private, max-age=300`

Pour l'autoriser explicitement :

- `Cache-Control: public, max-age=300`

Pour distinguer cache public / cache privé :

- `Cache-Control: max-age=300, s-maxage=3600`

<div style="margin-top: 100px;">

Les contenus privés ne doivent **jamais** être stockés en cache public
<br/> Attention au [web cache poisoning](https://portswigger.net/web-security/web-cache-poisoning)

<!-- .element: class="admonition warning" -->
</div>

##==##

<!-- .slide: class="two-column with-code" -->

# Le cache HTTP

## Le cache partagé (public)

**La directive Vary**

Par défaut, seuls **l'URL** et la **méthode HTTP** comptent pour la clé de cache<br/><br/>
`Vary` permet de rajouter une partie dynamique :

Réponse:

```
Vary: Accept-Language
```

##--##

<div style="margin-top: 205px;"></div>

<div>

Attention :
Vary peut être contre-productif et dégrader le **hit-ratio** lorsque beaucoup de variations existent

<!-- .element: class="admonition warning" -->

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->

<div>
Exemple :

```
Accept-Language: *
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
Accept-Language: fr-CH, fr-BE;q=0.9, *;q=0.5
Accept-Language: de;q=0.7, *;q=0.5
...
```

Ici il y'aura autant d'entrées en cache qu'il y'a de préférences de langues

</div>
<!-- .element: class="fragment" data-fragment-index="2"-->

##==##

<!-- .slide: class="two-column with-code" -->

# Le cache HTTP

## Le cache partagé (public)

**La directive Vary**

Cas courant d'utilisation de Vary :

Réponse:

```
Vary: Accept-Encoding
```
