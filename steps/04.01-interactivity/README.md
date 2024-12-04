# 04.01 - Interactivité

## Running the lab

```
npm run dev -w 04.01
```

## Instructions

**1. Au chargement**

- Inspecter le chargement de la page via les devtools
- Trouver un moyen d'éviter une tâche trop longue au chargement

**2. Interactions**

Essayez d'interragir avec la page : certaines interactions sont très lentes à répondre.

- Voir ce qu'il se passe en utilisant les devtools
- Trouver l'origine des problèmes d'interaction
- Trouver un moyen d'améliorer la réactivité

## Conseils / Informations

Cela pourra vous être utile :

Fonction debounce :

```js
const debounce = (callback, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
```

Fonction yieldToMain :

```js
const yieldToMain = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
};
```
