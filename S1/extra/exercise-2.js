const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];


for (let iteracion = 0; iteracion < foodSchedule.length; iteracion++) {
  const resultado = foodSchedule[iteracion];
 // console.log(resultado);
  if (resultado.isVegan==false) {resultado.isVegan=true;
    resultado.name=fruits[iteracion]
    //console.log(resultado);
  } 
}
console.log(foodSchedule);