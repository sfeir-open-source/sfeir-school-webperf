# 05.01 - Les métriques custom

## Running the lab

```
npm run dev -w 05.01
```

## Instructions

**1. Mesures custom de chargement**

- **User Timing API :** Mettre en place une mesure custom sur le chargement de la zone de conversion
- **Element Timing API :** Mesurer le chargement du contenu de la bannière principale
- Instancier un PerformanceObserver pour suivre ces deux métriques custom

**2. Mesures custom de ressources**

- **Resource Timing API** : Instancier un PerformanceObserver pour suivre le chargement des ressources de la page
- Calculer le nombre total de ressources
- Calculer le cache hit ratio de la page

## Conseils / Informations

Pour observer un type d'entrée :

```js
const obs = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

obs.observe({ type: 'resource', buffered: true });
```

Pour observer plusieurs types d'entrées à la fois (attention : on ne peut pas utiliser `buffered`):

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ entryTypes: ['measure', 'mark', 'element'] });
```
