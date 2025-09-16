<!-- .slide: class="tc-multiple-columns with-code" -->

##++##

# Webfonts

## Solution : Personnaliser le fallback

**Avant**

```css
body {
  font-family: 'Rubik', system-ui, sans-serif;
  line-height: 1.5;
  font-size: 1.2rem;
}
body.font-loaded {
  line-height: 0;
  font-size: 1rem;
}
```

```javascript
const font = new FontFaceObserver('Rubik', {
  weight: 400,
});

font.load().then(function () {
  document.body.classList.add('font-loaded');
});
```
##++##
##++##

<div style="margin-top: 200px"></div>

<div>

**Maintenant**

```css
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

<br/>

https://meowni.ca/font-style-matcher/

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->
##++##
