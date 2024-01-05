const numbersList = [];

let sum=(a,b)=>{
  let sumar=a+b
  console.log(sumar);
  return sumar
}

let substract=(a,b) =>{
  let resta=a-b
  console.log(resta);
  return resta
}

let father=(a,b,callback)=> {
  let resultado=callback(a,b)
  console.log(resultado);
  numbersList.push(resultado)
  
}

father(5, 3, sum); // Suma 5 + 3 = 8
father(10, 4, substract); // Resta 10 - 4 = 6
father(7, 2, sum); // Suma 7 + 2 = 9
console.log(father);

console.log(numbersList);