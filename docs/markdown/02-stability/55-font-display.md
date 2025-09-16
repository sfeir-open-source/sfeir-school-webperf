<!-- .slide: class="tc-multiple-columns with-code custom-21-problem" -->

##++##

# Webfonts

## Solution : font-display

```css [4]
@font-face {
  font-family: 'FontTitle';
  src: local('FontTitle'), url('/font-title.woff2') format('woff2');
  font-display: auto;
}
```

<br/>

- <strong style="color: var(--sfeir-green)">font-display: auto;</strong>
- font-display: block;
- font-display: swap;
- font-display: fallback;
- font-display: optional;
##++##
##++##

##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code custom-21-problem" -->

##++##

# Webfonts

## Solution : font-display

```css [4]
@font-face {
  font-family: 'FontTitle';
  src: local('FontTitle'), url('/font-title.woff2') format('woff2');
  font-display: block;
}
```

<br/>

- font-display: auto;
- <strong style="color: var(--sfeir-green)">font-display: block;</strong>
- font-display: swap;
- font-display: fallback;
- font-display: optional;
##++##
##++##

<img src="./assets/images/02-stability/font-display-block.svg" style="width: 700px; height: auto; display: block; margin: auto; margin-top: 200px;"  />
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code custom-21-problem" -->

##++##

# Webfonts

## Solution : font-display

```css [4]
@font-face {
  font-family: 'FontTitle';
  src: local('FontTitle'), url('/font-title.woff2') format('woff2');
  font-display: swap;
}
```

<br/>

- font-display: auto;
- font-display: block;
- <strong style="color: var(--sfeir-green)">font-display: swap;</strong>
- font-display: fallback;
- font-display: optional;
##++##
##++##

<img src="./assets/images/02-stability/font-display-swap.svg" style="width: 700px; height: auto; display: block; margin: auto; margin-top: 200px;"  />
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code custom-21-problem" -->

##++##

# Webfonts

## Solution : font-display

```css [4]
@font-face {
  font-family: 'FontTitle';
  src: local('FontTitle'), url('/font-title.woff2') format('woff2');
  font-display: fallback;
}
```

<br/>

- font-display: auto;
- font-display: block;
- font-display: swap;
- <strong style="color: var(--sfeir-green)">font-display: fallback;</strong>
- font-display: optional;
##++##
##++##

<img src="./assets/images/02-stability/font-display-fallback.svg" style="width: 1000px; height: auto; display: block; margin: auto; margin-top: 200px;"  />
##++##


##==##

<!-- .slide: class="tc-multiple-columns with-code custom-21-problem" -->

##++##

# Webfonts

## Solution : font-display

```css [4]
@font-face {
  font-family: 'FontTitle';
  src: local('FontTitle'), url('/font-title.woff2') format('woff2');
  font-display: optional;
}
```

<br/>

- font-display: auto;
- font-display: block;
- font-display: swap;
- font-display: fallback;
- <strong style="color: var(--sfeir-green)">font-display: optional;</strong>
##++##
##++##

<img src="./assets/images/02-stability/font-display-optional.svg" style="width: 700px; height: auto; display: block; margin: auto; margin-top: 200px;"  />
##++##
