# Largest contentful paint (LCP)

## Calcul

- Idenifier l'élément le plus grand de la page.
- L'élément ayant la plus grande taille de pixel dans le viewport est sélectionné.
- Une fois le plus grand élément identifié :
- Le LCP est défini par le timestamp (en millisecondes) de l'instant où cet élément est entièrement rendu et affichée à l'écran.

## Exemple

LCP : 1,720 ms

| Phase        | % of LCP | Timing |
| ------------ | -------- | ------ |
| TTFB         | 17%      | 290 ms |
| Load Delay   | 44%      | 760 ms |
| Load Time    | 7%       | 120 ms |
| Render Delay | 32%      | 550 ms |

// image de rendu d'une page avec le LCP
