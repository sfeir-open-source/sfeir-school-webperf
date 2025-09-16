<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 2. Perturbation du chemin de rendu critique

Les recalculs de styles sont parfois inévitables, mais pour limiter leurs impacts :

Solutions :

- Limiter la profondeur du DOM ([Visualisation](https://www.youtube.com/watch?v=dndeRnzkJDU))
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 2. Perturbation du chemin de rendu critique

Les recalculs de styles sont parfois inévitables, mais pour limiter leurs impacts :

Solutions :

- Limiter la profondeur du DOM ([Visualisation](https://www.youtube.com/watch?v=dndeRnzkJDU))
- Connaitre et éviter les causes des recalculs : [What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 2. Perturbation du chemin de rendu critique

Les recalculs de styles sont parfois inévitables, mais pour limiter leurs impacts :

Solutions :

- Limiter la profondeur du DOM ([Visualisation](https://www.youtube.com/watch?v=dndeRnzkJDU))
- Connaitre et éviter les causes des recalculs : [What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)
- Eviter à tout prix les recalculs de styles dans les boucles

```javascript
function resizeAllElements() {
  const element = document.getElementById('test');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.width = `${element.offsetWidth}px`; // 😱😱😱
  }
}
```
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 2. Perturbation du chemin de rendu critique

Les recalculs de styles sont parfois inévitables, mais pour limiter leurs impacts :

Solutions :

- Limiter la profondeur du DOM ([Visualisation](https://www.youtube.com/watch?v=dndeRnzkJDU))
- Connaitre et éviter les causes des recalculs : [What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)
- Eviter à tout prix les recalculs de styles dans les boucles

```javascript
function resizeAllElements() {
  const element = document.getElementById('test');
  const width = element.offsetWidth;
  for (let i = 0; i < elements.length; i++) {
    // elements[i].style.width = `${element.offsetWidth}px`; // 😱😱😱
    elements[i].style.width = `${width}px`; // ✔️
  }
}
```
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 2. Perturbation du chemin de rendu critique

Les recalculs de styles sont parfois inévitables, mais pour limiter leurs impacts :

Solutions :

- Limiter la profondeur du DOM ([Visualisation](https://www.youtube.com/watch?v=dndeRnzkJDU))
- Connaitre et éviter les causes des recalculs : [What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)
- Eviter à tout prix les recalculs de styles dans les boucles
- Grouper les opérations sur les styles :

```javascript
// ❌
element.style.width = '100%';
element.style.height = 'auto';
element.style.fontSize = '2rem';

// ✔️
element.classList.add('big');
```
##++##
