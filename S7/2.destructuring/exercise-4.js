const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

let {name, itv}=car
console.log(name)
console.log(itv)

let{name: coches, itv: years}=car
console.log(coches);
console.log(years);

let[year1, year2, year3] = itv;

console.log(year1);
console.log(year2);
console.log(year3);
/*let name,itv;
({name,itv}=car)
console.log(name);
console.log(itv);*/
const cars = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name:nombre, itv:tv}=cars
console.log(nombre);
console.log(tv);

const[a,b,c]=tv
console.log(a);
console.log(b);
console.log(c);