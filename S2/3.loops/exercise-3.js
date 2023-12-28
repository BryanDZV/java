const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

let desechados = [];

for (let iteracion = 0; iteracion < placesToTravel.length; iteracion++) {
  const elemento = placesToTravel[iteracion];
  //console.log(elemento);
  if (elemento.id !== 11 && elemento.id !== 40) {
    desechados.push(elemento);
  } else if (elemento.id == 5) {
  }
}
console.log(desechados);
//console.log(placesToTravel);

for (let vuelta = 0; vuelta < placesToTravel.length; vuelta++) {
  const elementi = placesToTravel[vuelta];
  if (elementi.id == 11 || elementi.id == 40) {
    placesToTravel.splice(vuelta, 1);
  }
}
console.log(placesToTravel);
