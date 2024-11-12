<!-- .slide: class="two-column with-code columns-40-60" -->

# Interactivité

## Le compromis : <br/> Boucle d'événements

La boucle d'événements (ou event loop) est au coeur du runtime JavaScript.

Elle permet de jouer des tâches **asynchrones** d'une manière **non blocante**.

##--##

<div style="margin-top: 80px">
  Runtime JavaScript :
  <img src="./assets/images/04-interactivity/event-loop-definition.svg" style="width: 1000px; height: auto; display: block;"  />
</div>
<!-- .element: class="fragment" data-fragment-index="1"-->

Notes:

Expliquer le concept d'event loop et tout ce qu'il y'a autour :

- la callstack
- les APIs web
- la task queue
- la microtask queue
- l'event loop lui même

Le principe d'event loop permet de faire tourner des tâches asynchrones d'une manière non blocante

(Schémas)
