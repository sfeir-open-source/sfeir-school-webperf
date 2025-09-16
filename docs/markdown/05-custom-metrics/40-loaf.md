<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Long Animation Frames API

Mesure les périodes entre :

- Une éxécution de tâche
- Une mise à jour du rendu (ou le moment ou le navigateur décide qu'il n'y a rien à mettre à jour)

Périodes > 50ms

<div>

```js [8]
const po = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry.toJSON());
  }
});

po.observe({
  type: 'long-animation-frame',
  buffered: true,
});
```

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->

<div>
##++##
##++##

<div style="margin-top: 205px;">

Exemple de retour :

```json
{
  "name": "long-animation-frame",
  "entryType": "long-animation-frame",
  "startTime": 3422.9000000059605,
  "duration": 1002,
  "renderStart": 4421.100000023842,
  "styleAndLayoutStart": 4421.100000023842,
  "firstUIEventTimestamp": 0,
  "blockingDuration": 9,
  "scripts": [
    {
      "name": "script",
      "entryType": "script",
      "startTime": 3423.300000011921,
      "duration": 55,
      "invoker": "TimerHandler:setTimeout",
      "invokerType": "user-callback",
      "windowAttribution": "self",
      "executionStart": 3423.300000011921,
      "forcedStyleAndLayoutDuration": 0,
      "pauseDuration": 0,
      "sourceURL": "https://www.googletagmanager.com/gtm.js?id=GTM-MW4Z6VP",
      "sourceFunctionName": "",
      "sourceCharPosition": -1
    },
    {
      "name": "script",
      "entryType": "script",
      "startTime": 3480.7000000178814,
      "duration": 12,
      "invoker": "https://prod.transcript.decathlon.net/csm/1.16.0/tracker.v2.prod.min.js",
      "invokerType": "classic-script",
      "windowAttribution": "self",
      "executionStart": 3480.7000000178814,
      "forcedStyleAndLayoutDuration": 0,
      "pauseDuration": 0,
      "sourceURL": "https://prod.transcript.decathlon.net/csm/1.16.0/tracker.v2.prod.min.js",
      "sourceFunctionName": "",
      "sourceCharPosition": 0
    }
  ]
}
```

</div>
<!-- .element: class="fragment" data-fragment-index="2"-->
##++##
