<!-- .slide: class="two-column with-code " -->

# Comment mesurer ?

## Les autres métriques : <br/>Time To Interactive (TTI)

Permet de mesurer l'interactivité au chargement.

Mode de calcul :

1. A partir du First Contentful Paint (FCP)
2. Avancer jusqu'à trouver une fenêtre calme :
   <br/>- Pas de tâche longue
   <br/>- Pas plus de deux appels HTTP
3. Revenir sur la dernière tâche longue
4. Le TTI le timing de fin de cette tâche <br/>(ou le FCP si aucune tâche n'est trouvée)

##--##

<img src="./assets/images/04-interactivity/tti.svg"  style="width: 1300px; height: auto; display: block; margin-top: 250px;"  />

##==##

<!-- .slide: class="two-column with-code " -->

# Comment mesurer ?

## Les autres métriques : <br/>Time To Interactive (TTI)

<img src="./assets/images/04-interactivity/tti.svg"  style="width: 1300px; height: auto; display: block; margin: auto;"  />

Notes:
