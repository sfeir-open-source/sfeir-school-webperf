<!-- .slide: class="two-column with-code " -->

# Comment mesurer ?

## Les autres métriques : <br/>Total Blocking Time (TBT)

Cumul des temps de blocage du thread principal.

Calcul : somme des délais dépassant 50ms, jusqu'au Time To Interactive (TTI)

##--##

<div style="margin-top: 220px">

<img src="./assets/images/04-interactivity/tbt.svg"  style="width: 1300px; height: auto; display: block; margin: auto; margin-bottom: 50px;"  />

<div style="font-size: 30px">

| Tâche                                | Durée totale | Temps de blocage     |
| ------------------------------------ | ------------ | -------------------- |
| 1                                    | 250          | 200                  |
| 2                                    | 90           | 40                   |
| 3                                    | 35           | 0                    |
| 4                                    | 30           | 0                    |
| 5                                    | 155          | 105                  |
| <strong>Total Blocking time</strong> |              | <strong>345</strong> |

</div>

</div>

Notes:
