<!-- .slide: class="two-column with-code" -->

# Et les autres éléments ?

## Avant : Le "hack" du padding-top

```html
<div class="video-container">
  <iframe class="video" src="https://embed-video/marmotte" title="Video player"></iframe>
</div>
```

css :

```css
.video-container {
  position: relative;
  width: 100%;
  padding-top: 80%; // Ratio 5:4
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

##--##

<img src="./assets/images/02-stability/cls-iframe.png" style="width: 800px; height: auto; display: block; margin: auto; margin-top: 220px;"  />
