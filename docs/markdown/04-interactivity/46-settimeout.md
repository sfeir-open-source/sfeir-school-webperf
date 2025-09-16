<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 3. Les tâches longues

Un moyen de découper ces tâches longues consiste à céder la main au thread principal :

```JavaScript
function main() {
  longTask1();
  setTimeout(() => {
    longTask1();
    longTask3();
    longTask4();
  }, 0);
}
```

<div style="margin-top: 50px;">

Conséquence :

<img src="./assets/images/04-interactivity/longtask-timeout.svg" style="width: 1000px; height: auto; display: block; margin-top: 20px;" />

</div>
##++##


Notes:

Montrer le setTimeout en application (code + schéma)