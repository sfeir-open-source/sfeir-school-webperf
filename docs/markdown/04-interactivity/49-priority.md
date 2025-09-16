<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 4. La priorisation des tâches

Inconvénients du setTimeout :

- La tâche est toujours ajoutée en fin de file d'attente
- Pas de possibilité de prioriser l'ordre d'appel par la boucle d'événements

<div style="margin-top: 80px;">

Solution : l'API <strong>Scheduler</strong>

- scheduler.yield()
- scheduler.postTask(callback, options);

https://caniuse.com/?search=posttask

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->
##++##
##++##

<div style="margin-top: 205px;">

Exemple :

```JavaScript
async function handleMenuOpen() {
  openMenu();
  await scheduler.yield();
  trackOpenMenu();
}
```

</div>
<!-- .element: class="fragment" data-fragment-index="2"-->

<div>

```JavaScript
textBox.addEventListener('input', async (inputEvent) => {
  updateTextBox(inputEvent);

  await scheduler.postTask(() => {
    const text = textBox.textContent;
    updateWordCount(text);
    saveChanges(text);
  }, { priority: "user-visible" });
});
```

</div>
<!-- .element: class="fragment" data-fragment-index="3"-->
##++##


Notes:
https://web.dev/articles/optimize-long-tasks?hl=fr#scheduler-api