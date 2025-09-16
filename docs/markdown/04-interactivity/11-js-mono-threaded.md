<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Interactivité

## Qu'est-ce que le thread principal ?

Par défaut, JavaScript est un langage à thread unique qui exécute des tâches sur le **thread principal**

<img src="./assets/images/04-interactivity/mainthread.svg" class="02-cls" style="width: 800px; height: auto; display: block;"  />
##++##
##++##

<div style="margin-top: 200px">

**Pourquoi ?**

- Choix historique
- Inspiration des langages de l'époque
- Simplicité pour les développeurs
- Limitations du DOM
</div>
<!-- .element: class="fragment" data-fragment-index="1"-->
##++##


Notes:

Slide pour rappeler que JavaScript est mono-threadé
Et expliquer pourquoi JavaScript est mono-threadé :

- Choix historique (JS a été dev en 10 jours pour des raisons complètement différentes de son utilisation actuelle)
- Inspiration des langages de l'époque
- Simplicité pour les développeurs : plus facile de manipuler un thread unique
- Limitations du DOM : éviter les appels concurrents sur le DOM qui lui est unique