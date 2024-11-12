# Les causes et solutions

## 1. évaluation des scripts au chargement

Le chargement de la page est souvent le moment le plus critique pour l'interactivité :

- C'est le moment où la majorité du JavaScript est chargé
- Le navigateur doit d'abord parser, compiler puis exécuter le code

<img src="./assets/images/04-interactivity/compiling.png" style="width: 2000px; height: auto; display: block; margin-top: 100px;" />

<br/> 
La compilation du code peut être une tâche longue à elle seule

Notes:

Montrer l'impact du chargement de la page sur l'INP
En profiter pour parler du TTI

Solution :

- Grouper les scripts
- Réduire le nombre de scripts chargés
- Faire un tri dans les scripts tiers
- Faire le plus gros du rendu côté serveur
