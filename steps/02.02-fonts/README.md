# 02.01 - Fonts

## Running the lab

```
npm run start -w 02.02
```

## Instructions

- Afficher le texte de contenu des que possible
- Pour les titres attendre la font pour l'afficher
- Eviter de charger trop de variants

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
