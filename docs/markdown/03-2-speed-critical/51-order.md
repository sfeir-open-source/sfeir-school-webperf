<!-- .slide: class="two-column with-code" -->

# Le chemin critique

## Première étape : l'ordre de déclaration

<img src="./assets/images/common/drake-notok.png" style="width: 100px; height: auto;"  />

```html
<head>
  <script type="application/javascript" src="/footer.js"></script>
  <script type="application/javascript" src="/critical.js"></script>
  <link rel="stylesheet" href="/footer.css" />
  <link rel="stylesheet" href="/critical.css" />
</head>
```

<img src="./assets/images/common/drake-ok.png" style="width: 100px; height: auto;"  />

```html
<head>
  <link rel="stylesheet" href="/critical.css" />
  <script type="application/javascript" src="/critical.js"></script>
  <link rel="stylesheet" href="/footer.css" />
  <script type="application/javascript" src="/footer.js"></script>
</head>
```
