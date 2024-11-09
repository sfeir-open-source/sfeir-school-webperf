# Webfonts

## Solution : Pré-charger les webfonts critiques

```html [4,5]
<!DOCTYPE html>
<html>
  <head>
    <link rel="preload" href="/font-content.woff2" as="font" type="font/woff2" />
    <link rel="preload" href="/font-title.woff2" as="font" type="font/woff2" />
    <link rel="stylesheet" href="/style.css" />
  </head>
</html>
```

<img src="./assets/images/02-stability/preload-waterfal.svg" style="width: 1400px; height: auto; display: block; margin: auto; margin-top: 50px;"  />
<!-- .element: class="fragment" data-fragment-index="1"-->
