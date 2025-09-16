<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 3. Les tâches longues

Un cas d'usage très concrêt concerne le tracking :

```JavaScript
function handleOpenMenu() {
  openMenu();
  setTimeout(() => {
    trackOpenMenu();
  }, 0);
}
```

<div style="margin-top: 50px;">

<img src="./assets/images/04-interactivity/task-tracking.svg" style="width: 1000px; height: auto; display: block; margin-top: 20px;" />

</div>
##++##
##++##

<div style="margin-top: 205px">

Mais cela concerne toutes les opérations couteuses en général :

```javascript
textBox.addEventListener('input', (inputEvent) => {
  updateTextBox(inputEvent);

  setTimeout(() => {
    const text = textBox.textContent;
    updateWordCount(text);
    saveChanges(text);
  }, 0);
});
```

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->
##++##
