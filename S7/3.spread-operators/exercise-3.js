const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const arrayCombinado=[...pointsList,...pointsLis2]
console.log(arrayCombinado);

//usando destructuring y spread

const [...arrayDesySpre]=arrayCombinado
console.log(arrayDesySpre);