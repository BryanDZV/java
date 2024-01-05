const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
let vistname=cities.map((vuelta)=>vuelta.isVisited==true?vuelta.name.concat(' Visitado'):vuelta.name.concat(' no visitado'))
console.log(vistname);
console.log(cities);

/////abajo devuelve todo el array con la modificacion

// de esta forma se modifica el array original 
let nuevoCities=cities.map((elemento)=>{
  console.log(elemento.name);
if (elemento.isVisited===true) {elemento.name+=' Visitado'
  
}
return elemento
})

console.log(nuevoCities);
console.log(cities);

//de esta forma no se modifica el array original usando una copia de los objetos

//de esta forma no se modifica el array original usando una copia de los objetos
const citiesr = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

let nuevoCitiess=citiesr.map((elemento)=>{
  console.log(elemento);
  let copiaArrayObjetos={...elemento}
  if (copiaArrayObjetos.isVisited==true) {
    copiaArrayObjetos.name+=' Visitado'
  }
  return copiaArrayObjetos

});

console.log(citiesr);
console.log(nuevoCitiess);


