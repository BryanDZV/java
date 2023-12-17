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
