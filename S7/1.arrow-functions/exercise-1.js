a = 10;
b = 5;
//let suma=10+5
//let pepe=5-1
//console.log(suma);
//let flecha=(suma,pepe)=>{console.log(suma,pepe)}
//flecha(suma,pepe)
let flecha=(a=10,b=5)=>{return a+b;}
console.log(flecha())
console.log(flecha(2))
console.log(flecha(6,5))
//
z = 10
r = 5

let comando = (z=10,r=5) => {
 let operacion = z + r;
 return operacion
};


console.log(comando());
console.log(comando(1));
console.log(comando(5,2));
