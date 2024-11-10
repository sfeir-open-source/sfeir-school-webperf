# Les causes et solutions

## 3. Les tâches bloquantes

Notes:

Montrer l'intérêt avec du rendu non prioritaire

Montrer la syntaxe avec promise :

function yieldToMain () {
return new Promise(resolve => {
setTimeout(resolve, 0);
});
}
