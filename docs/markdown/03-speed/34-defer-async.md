<!-- .slide: class="two-column with-code columns-40-60" -->
# defer et async


Exécution immédiate, indispensable pour des scripts critiques pour le rendu (par exemple, injecter un style ou un contenu avant d'afficher la page).

<!-- .element: class="fragment" data-fragment-index="1"-->

async : Priorité à la vitesse. Les scripts sont chargés dès que possible, mais leur exécution n'est pas garantie dans l'ordre, ce qui est parfait pour des scripts tiers non essentiels.

<!-- .element: class="fragment" data-fragment-index="2"-->

defer : Idéal pour les scripts nécessaires au DOM complet, mais exécutés après son parsing.

<!-- .element: class="fragment" data-fragment-index="3"-->

##--##

<img src="./assets/images/03-speed/script.svg" class="03-load" style="width: 1000px; height: auto; margin-top:200px"  />

<!-- .element: class="fragment" data-fragment-index="1"-->

<img src="./assets/images/03-speed/async.svg" class="03-load" style="width: 1000px; height: auto; margin-top:50px"  />

<!-- .element: class="fragment" data-fragment-index="2"-->

<img src="./assets/images/03-speed/defer.svg" class="03-load" style="width: 1000px; height: auto; margin-top:30px"  />

<!-- .element: class="fragment" data-fragment-index="3"-->
