<!-- .slide: class="tc-multiple-columns with-code custom-21-problem" -->

##++##

<style>
  .custom-21-problem .grid-div {
    grid-template-columns: 40% 60%!important;
  }
  </style>

# Webfonts

## Le problème

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="/style.css" />
  </head>
</html>
```

```css
@font-face {
  font-family: 'FontContent';
  src: local('FontContent'), url('/font-content.woff2') format('woff2');
}

@font-face {
  font-family: 'FontTitle';
  src: local('FontTitle'), url('/font-title.woff2') format('woff2');
}
```
##++##
##++##

<img src="./assets/images/02-stability/font-waterfal-1.svg" style="width: 1200px; height: auto; display: block; margin-top: 200px;"  />
<!-- .element: class="fragment" data-fragment-index="1"-->
##++##
