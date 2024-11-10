<!-- .slide: class="two-column with-code " -->

# Comment mesurer ?

## Interaction to Next Paint (INP)

Seuls ces types d'interaction sont observés :

- Clic avec la souris
- Appui sur écran tactile
- Appui sur touche de clavier (physique ou à l'écran)

##--##

<div style="margin-top: 205px;">

L'INP correspond à la plus longue interaction

<div>

| Type   | Input | Process | Render |
| ------ | ----- | ------- | ------ |
| click  | 20    | 60      | 5      |
| &nbsp; |       |         |        |
| &nbsp; |       |         |        |
| &nbsp; |       |         |        |
| &nbsp; |       |         |        |

</div>

<strong style="margin-top: 50px; display: block;">INP : <span style="color: green">85ms</span></strong>

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->

##==##

<!-- .slide: class="two-column with-code " -->

# Comment mesurer ?

## Interaction to Next Paint (INP)

Seuls ces types d'interaction sont observés :

- Clic avec la souris
- Appui sur écran tactile
- Appui sur touche de clavier (physique ou à l'écran)

##--##

<div style="margin-top: 205px;">

L'INP correspond à la plus longue interaction

<div>

| Type    | Input | Process | Render |
| ------- | ----- | ------- | ------ |
| click   | 20    | 60      | 5      |
| keydown | 100   | 120     | 20     |
| &nbsp;  |       |         |        |
| &nbsp;  |       |         |        |
| &nbsp;  |       |         |        |

</div>

<strong style="margin-top: 50px; display: block;">INP : <span style="color: orange">240ms</span></strong>

</div>

##==##

<!-- .slide: class="two-column with-code " -->

# Comment mesurer ?

## Interaction to Next Paint (INP)

Seuls ces types d'interaction sont observés :

- Clic avec la souris
- Appui sur écran tactile
- Appui sur touche de clavier (physique ou à l'écran)

##--##

<div style="margin-top: 205px;">

L'INP correspond à la plus longue interaction

<div >

| Type    | Input | Process | Render |
| ------- | ----- | ------- | ------ |
| click   | 20    | 60      | 5      |
| keydown | 100   | 120     | 20     |
| mouseup | 10    | 50      | 5      |
| &nbsp;  |       |         |        |
| &nbsp;  |       |         |        |

</div>

<strong style="margin-top: 50px; display: block;">INP : <span style="color: orange">240ms</span></strong>

</div>

##==##

<!-- .slide: class="two-column with-code " -->

# Comment mesurer ?

## Interaction to Next Paint (INP)

Seuls ces types d'interaction sont observés :

- Clic avec la souris
- Appui sur écran tactile
- Appui sur touche de clavier (physique ou à l'écran)

##--##

<div style="margin-top: 205px;">

L'INP correspond à la plus longue interaction

<div >

| Type    | Input | Process | Render |
| ------- | ----- | ------- | ------ |
| click   | 20    | 60      | 5      |
| keydown | 100   | 120     | 20     |
| mouseup | 10    | 50      | 5      |
| click   | 300   | 550     | 20     |
| &nbsp;  |       |         |        |

</div>

<strong style="margin-top: 50px; display: block;">INP : <span style="color: red">870ms</span></strong>

</div>

##==##

<!-- .slide: class="two-column with-code " -->

# Comment mesurer ?

## Interaction to Next Paint (INP)

Seuls ces types d'interaction sont observés :

- Clic avec la souris
- Appui sur écran tactile
- Appui sur touche de clavier (physique ou à l'écran)

##--##

<div style="margin-top: 205px;">

L'INP correspond à la plus longue interaction

<div>

| Type    | Input | Process | Render |
| ------- | ----- | ------- | ------ |
| click   | 20    | 60      | 5      |
| keydown | 100   | 120     | 20     |
| mouseup | 10    | 50      | 5      |
| click   | 300   | 550     | 20     |
| click   | 20    | 60      | 5      |

</div>

<strong style="margin-top: 50px; display: block;">INP : <span style="color: red">870ms</span></strong>

</div>
