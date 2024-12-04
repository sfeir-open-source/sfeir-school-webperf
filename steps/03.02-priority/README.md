# 03.02 - Le chemin critique

## Running the lab

```
npm run dev -w 03.02
```

## Instructions

**1. Les ressources**

Contrôler la priorisation des chargements. Pour cela, utiliser :

- L'ordonnancement de déclaration
- Defer / async
- éventuellement fetchpriority

**2. Les étapes bloquantes**

- Améliorer le chargement de l'image principale
- **Bonus** - Côté serveur, les avis client retardent le traitement : Trouver un moyen de reporter leur chargement

## Conseils / Informations

### Image Principale

L'implémentation de l'image principale a été gérée en JavaScript, dans la fonction `initMainImage` (`/public/scripts/main.js`)

Ne pas hésiter à visualiser le problème en utilisant les devtools

### Avis client

Pour le chargement des avis client, vous pouvez vous inspirer du chargement de la zone de conversion : `loadConversionContent` (`/public/scripts/main.js`)
