# 03.01 - Optimisation des ressources

## Running the lab

```
npm run dev -w 03.01
```

## Instructions

**1. Images**

La fiche produit charge 26MB d'images 😱

- Charger des résolutions d'image adaptées
- Charger uniquement les images nécessaires

Au chargement initial, la page devrait pouvoir charger moins d'1MB

**2. Ressouces**

- Nettoyer le code inutile
- Optimiser les ressources

## Conseils / Informations

La configuration du serveur accepte le redimentionnement d'images.

Exemples :

- Redimentionnement : http://localhost:3000/images/product/200/1.jpg?width=200
- Changement de la qualité d'image : http://localhost:3000/images/product/200/1.jpg?quality=10
- Redimentionnement + crop : http://localhost:3000/images/product/200/1.jpg?width=200&height=200

Si vous êtes curieux, vous pouvez jeter un oeil à `/steps/shared/imageTransformer.js`
