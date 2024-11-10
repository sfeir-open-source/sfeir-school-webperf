<!-- .slide: class="two-column with-code " -->

# Interactivité

## Question

A votre avis, quelle sera la sortie console ?

```JavaScript
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

##--##

<div style="margin-top: 205px;">
La réponse :

```
4
6
1
5
2
3
```

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```






```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-empty.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```






```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-1.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [1]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```






```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-2.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```






```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-3.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [1-4]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```






```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-4.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [1-4]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```






```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-5.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```






```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-6.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [6]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```






```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-9.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [6]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```






```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-10.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```






```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-11.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [8]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4





```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-12.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4





```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-13.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [10]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4





```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-14.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [10]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4





```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-15.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [10]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4





```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-16.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [10]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4





```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-17.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4





```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-18.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [12]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6




```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-19.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6




```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-20.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6




```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-21.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6




```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-22.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6




```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-23.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [2]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1



```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-25.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1



```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-26.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [3]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1



```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-27.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [3]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1



```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-28.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [3]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1



```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-29.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [3]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1



```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-30.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [1-4]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1



```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-31.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1



```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-32.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [10]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1
5


```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-33.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1
5


```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-34.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [3]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1
5
2

```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-35.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1
5
2

```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-36.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript [6]
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1
5
2
3
```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-37.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>

##==##

<!-- .slide: class="two-column with-code columns-40-60" -->

<h1 style="margin-bottom: 40px;">Interactivité</h1>

```JavaScript []
Promise.resolve().then(() => {
  console.log(1);
  Promise.resolve().then(() => console.log(2));
});

setTimeout(() => console.log(3), 20);

console.log(4);

Promise.resolve().then(() => console.log(5));

console.log(6);
```

<small style="margin-top: 40px;">Console:</small>

```
4
6
1
5
2
3
```

##--##

<img src="./assets/images/04-interactivity/event-loop-steps/event-loop-38.svg" class="02-cls" style="width: 1000px; height: auto; display: block; margin-top: 100px;"  />

</div>
