<!-- .slide: class="two-column with-code" -->

# Interactivité

## Qu'est-ce que le thread principal ?

Donc ça veut dire que JavaScript est bloquant ?

<div style="margin-top: 100px">
Que va afficher cet exemple ?

```JavaScript
  setTimeout(() => console.log(1), 5000);
  console.log(2);
```

</div>

##--##

<div style="margin-top: 360px;">

Réponse A :

```
1
2
```

Réponse B :

```
2
1
```

</div>

##==##

<!-- .slide: class="two-column with-code" -->

# Interactivité

## Qu'est-ce que le thread principal ?

Donc ça veut dire que JavaScript est bloquant ?

<div style="margin-top: 100px">
Que va afficher cet exemple ?

```JavaScript
  setTimeout(() => console.log(1), 5000);
  console.log(2);
```

</div>

##--##

<div style="margin-top: 360px;">

<strong style="color: red">❌ Réponse A :</strong>

```
1
2
```

<strong style="color: green;">✅ Réponse B :</strong>

```
2
1
```

</div>
