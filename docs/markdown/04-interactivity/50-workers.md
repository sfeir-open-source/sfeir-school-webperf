<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 5. Les workers

<img src="./assets/images/04-interactivity/workers-meme.png" style="width: 1000px; height: auto; display: block; margin-top: 20px; margin: auto;" />
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 5. Les workers

JavaScript est-il vraiment mono-threadé ?

main.js :

```JavaScript
function main() {
  const worker = new Worker('./worker.js');
  worker.addEventListener("message", event => {
    console.log(event.data);
  })
  worker.postMessage("Do something !");
}
```

worker.js :

```JavaScript
addEventListener('message', event => {
  heavyCalculation();
  postMessage("Done !");
});
```
##++##
##++##

<img src="./assets/images/04-interactivity/worker.svg" style="width: 1000px; height: auto; display: block; margin-top: 300px;" />
##++##


Notes:

Parler de la solution des workers (schéma)

##==##

<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 5. Les workers

<img src="./assets/images/04-interactivity/partytown.png" style="width: 1300px; height: auto; display: block; margin: auto;" />

<span style="display: block; text-align: center;">https://partytown.builder.io/</span>
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code " -->

##++##

# Les causes et solutions

## 5. Les workers

<img src="./assets/images/04-interactivity/worker-sceptical.png" style="width: 550px; height: auto; display: block; margin: auto;" />
##++##
