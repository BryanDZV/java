const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];


let total=0;
for (let i = 0; i < products.length; i++) {
   let resultado= products[i].sellCount;
   total+=resultado
  
}

console.log("el total es:", total);


let potales=0
products.forEach(porresultado => {potales+=porresultado.sellCount
  
});
console.log(potales);

let todo=0
for (const iteracion of products) {
  todo+=iteracion.sellCount
  
}
console.log(todo);