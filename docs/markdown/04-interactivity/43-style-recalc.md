<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 2. Perturbation du chemin de rendu critique

Qu'est-ce que le chemin de rendu critique (Critical Rendering Path / CRP) ?

<img src="./assets/images/04-interactivity/crp-schema.svg" style="width: 1200px; height: auto; display: block; margin-top: 40px;" />
<!-- .element: class="fragment" data-fragment-index="1"-->

<div style="margin-top: 80px">

Certaines instructions JavaScript peuvent perturber cette séquence :

<img src="./assets/images/04-interactivity/crp-schema-reflow.svg" style="width: 1350px; height: auto; display: block; margin-top: 40px;" />

</div>
<!-- .element: class="fragment" data-fragment-index="2"-->
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 2. Perturbation du chemin de rendu critique

Exemple (KO) :

```javascript []
function reflowExample() {
  const element = document.getElementById('element');
  element.classList.add('small');
  console.log(element.offsetHeight); // Forced reflow
}
```

<img src="./assets/images/04-interactivity/crp-reflow.png" style="width: 2600px; height: auto; display: block; margin-top: 60px;" />
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 2. Perturbation du chemin de rendu critique

Exemple (OK) :

```javascript []
function reflowExample() {
  const element = document.getElementById('element');
  console.log(element.offsetHeight);
  element.classList.add('small');
}
```

<img src="./assets/images/04-interactivity/crp-default.png" style="width: 2600px; height: auto; display: block; margin-top: 60px;" />
##++##
