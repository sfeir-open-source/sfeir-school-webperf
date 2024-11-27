# Différence principale entre picture et img avec srcset

| Caractéristique           | picture                                                                                       | img avec srcset et sizes                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Flexibilité               | Permet des conditions complexes (par exemple, formats et tailles différentes, media queries). | Principalement utilisé pour changer les tailles d'images selon l'écran.                           |
| Formats différents        | Permet de spécifier différents formats d'images (webp, avif, etc.).                           | Ne permet pas de changer de format (doit rester le même type).                                    |
| Media Queries spécifiques | Permet d'associer chaque image à des conditions CSS spécifiques (via media).                  | Les images sont choisies uniquement en fonction de la taille d'affichage et des valeurs de sizes. |
| Syntaxe                   | Plus complexe à écrire mais très puissante.                                                   | Plus simple et suffisante pour les cas où seul le dimensionnement compte.                         |

<!-- .element: class="fragment" data-fragment-index="1"-->
