const numbersList = [];

function sum(a, b) {return sum
  console.log(`la suma de ${a + b}`);
}

function substract(a, b) {
  console.log(`la resta de ${a - b}`);
}

function father(a,b,callback) {
    callback(a,b)
}

father(1,9,sum)
   
console.log(numbersList);

