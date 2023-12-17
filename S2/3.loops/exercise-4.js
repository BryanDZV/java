const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

/*vuelta variable par estudiar tus objetos, toys variable a estudiar, {aqui instrucciones de la funcion a realizar aqui pones las 
  condiciones o lo que sea tipo log---....}*/

let toysincat=[]

for (const vuelta of toys) {
  if (!vuelta.name.includes(`gato`)) {toysincat.push(vuelta)
  }
}
console.log(toysincat);

