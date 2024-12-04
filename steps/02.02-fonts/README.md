# 02.02 - Fonts

## Running the lab

```
npm run dev -w 02.02
```

## Instructions

Mettre en place une stratégie de chargement des fonts.

- Pour les textes de contenus : afficher dès que possible
- Pour les titres (Police Pixel) : attendre le chargement

Eviter de charger trop de variants

## Information / Ressources

### CSS

Font-display:

- auto
- block
- swap
- fallback
- optional

```css
/* Fallback */
@font-face {
  font-family: 'My Fallback Font';
  src: local('Arial');
  ascent-override: 93%;
  descent-override: 25%;
  size-adjust: 111%;
  line-gap-override: 105%;
}

html {
  font-family: Work Sans, My Fallback Font;
}
```
