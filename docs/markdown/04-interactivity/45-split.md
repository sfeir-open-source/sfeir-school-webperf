<!-- .slide: class="two-column with-code " -->

# Les causes et solutions

## 3. Les tâches longues

On pourrait penser que pour découper les tâches longues, il faut découper nos fonctions :

```JavaScript
function main() {
  longTask1();
  longTask1();
  longTask3();
  longTask4();
}
```

<div style="margin-top: 50px;">

Mais ces fonctions font partie de la même callstack, et donc de la même tâche :

<img src="./assets/images/04-interactivity/longtask-before.svg" style="width: 1000px; height: auto; display: block; margin-top: 20px;" />

</div>

<!-- .element: class="fragment" data-fragment-index="1"-->

Notes:

Expliquer que le découpage de fonctions n'a pas d'influence sur le découpage des tâches
