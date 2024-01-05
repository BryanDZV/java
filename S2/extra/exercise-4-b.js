let animales = ["Caracol", "Mosquito", "Salamandra", "Ajolote", "1234"];
let text = "rojo";
let futbol = "ronaldomessirob";
let copas = ["dosswaqs", "ocho", "ocho", "ocho", "ocho", "ocho", "ocho"];

function findArrayIndex(animales, text) {
  for (let iteracion = 0; iteracion < animales.length; iteracion++) {
    //en elemento almaceno la iteracoin del array
    const elemento = animales[iteracion];
    console.log(elemento.length);
    if (elemento.length == text.length) {
      //elemento me devuelve el elemento iterando
      console.log(elemento);
      //iteracion me devuelta la posicion que esta iterando
      console.log(iteracion);
      //importante la colocaciondel return
      return iteracion;
    }
  }

}

findArrayIndex(animales, text);
console.log(text.length);
console.log(copas.length);
console.log(futbol.length);

function removeItem(animales, text) {
  let obtenerIndice = findArrayIndex(animales, text);
  console.log(obtenerIndice);
  if (obtenerIndice !== -1) {
    animales.splice(obtenerIndice, 1);
    console.log(obtenerIndice);
  }
}

removeItem(animales, text);
console.log(animales);
