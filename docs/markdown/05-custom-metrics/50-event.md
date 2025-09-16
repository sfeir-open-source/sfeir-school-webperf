<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Event timing API

```js [8]
const po = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry.toJSON());
  }
});

po.observe({
  type: 'event',
  buffered: true,
});
```

Permet de récupérer les informations détaillées sur les interactions :

- startTime : moment où l'event est reçu
- processingStart : moment où le thread principal commence à traiter l'événement
- processingEnd: moment où le thread principal finit d'éxécuter les tâches synchrones
- duration: délai entre le startTime et le prochain rendu
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Event timing API

Très pratique pour mieux comprendre les interactions :

```js
const po = new PerformanceObserver((entryList) => {
  const entries = Array.from(entryList.getEntries()).forEach((entry) => {
    const inputDelay = entry.processingStart - entry.startTime;
    const processingTime = entry.processingEnd - entry.processingStart;
    const presentationDelay = entry.startTime + entry.duration - entry.processingEnd;
    const duration = entry.duration;
    const eventType = entry.name;
    const target = entry.target || '(not set)';

    console.log('----- INTERACTION -----');
    console.log(`Input delay (ms): ${inputDelay}`);
    console.log(`Event handler processing time (ms): ${processingTime}`);
    console.log(`Presentation delay (ms): ${presentationDelay}`);
    console.log(`Total event duration (ms): ${duration}`);
    console.log(`Event type: ${eventType}`);
    console.log(target);
  });
});

po.observe({ type: 'event', buffered: true, durationThreshold: 16 });
```
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Event timing API

Très pratique pour mieux comprendre les interactions :

| Page        | Selecteur        | Compteur | Type (ms) | Input Delay (ms) | Process (ms) | Render (ms) | INP (ms) |
| ----------- | ---------------- | -------- | --------- | ---------------- | ------------ | ----------- | -------- |
| /list/\*    | button#filter    | 465      | pointer   | 12               | 1233         | 144         | 1346     |
| /product/\* | button#addtocart | 986      | pointer   | 32               | 140          | 219         | 455      |
| /           | input#search     | 2549     | keyboard  | 100              | 9            | 11          | 120      |
| /product/\* | button#open      | 12       | pointer   | 56               | 3349         | 42          | 3456     |
##++##
