<!-- .slide: class="two-column with-code " -->

# Les causes et solutions

## 1. évaluation des scripts au chargement

Solutions

- Faire le maximum de rendu du côté serveur

##--##

<div style="margin-top: 70px">

<small>Client-side rendering :</small>
<img src="./assets/images/04-interactivity/load-csr.svg" style="width: 2000px; height: auto; display: block;" />

</div>

<!-- .element: class="fragment" data-fragment-index="1"-->

##==##

<!-- .slide: class="two-column with-code " -->

# Les causes et solutions

## 1. évaluation des scripts au chargement

Solutions

- Faire le maximum de rendu du côté serveur

##--##

<div style="margin-top: 70px">

<small>Server-side rendering :</small>
<img src="./assets/images/04-interactivity/load-ssr.svg" style="width: 2000px; height: auto; display: block;" />

</div>

##==##

<!-- .slide: class="two-column with-code " -->

# Les causes et solutions

## 1. évaluation des scripts au chargement

Solutions

- Faire le maximum de rendu du côté serveur
- Découper les scripts (code splitting)

<div style="margin-top: 200px;">

Pour un bon compromis entre compression, temps de téléchargement et durée d'évaluation, Google recommande une limite de taille de <strong>100Ko</strong> par script

<!-- .element: class="admonition info" -->
</div>

##--##

<img src="./assets/images/04-interactivity/load-split.svg" style="width: 2000px; height: auto; display: block; margin-top: 140px;" />

##==##

<!-- .slide: class="two-column with-code " -->

# Les causes et solutions

## 1. évaluation des scripts au chargement

Solutions

- Faire le maximum de rendu du côté serveur
- Découper les scripts (code splitting)
- Charger uniquement l'essentiel

##--##
