/*let borrar = document.querySelectorAll(".fn-remove-me");
let cambioArray=Array.from(borrar)
for (let iteracion = 0; iteracion < cambioArray.length; iteracion++) {
  const elemento = cambioArray[iteracion];
  console.log(elemento);
  elemento.parentNode.removeChild(elemento);
}*/
//2 forma

//ELEMENTOS ITERABLES

/*
Arrays: Son colecciones ordenadas de elementos, y son iterables por naturaleza.
javascript
const array = [1, 2, 3, 4, 5];
for (const item of array) {
    console.log(item);
}
Strings: Los strings son secuencias de caracteres y también son iterables.
javascript
const str = 'Hello';
for (const char of str) {
    console.log(char);
Map y Set: Estructuras de datos como Map y Set son iterables, lo que permite recorrer sus elementos.
javascript
const map = new Map();
map.set('a', 1);
map.set('b', 2);
for (const [key, value] of map) {
    console.log(key, value);
}
TypedArray: Son arrays con tipos de datos específicos y también son iterables.
javascript
const typedArray = new Uint8Array([1, 2, 3, 4, 5]);
for (const item of typedArray) {
    console.log(item);
}
NodeList: Es el resultado de la selección de elementos del DOM y es iterable.
javascript
const elements = document.querySelectorAll('p');
for (const element of elements) {
    console.log(element.textContent);
}*/

let borrar = document.querySelectorAll(".fn-remove-me");
borrar.forEach((elemento) => {
  elemento.remove();
});
