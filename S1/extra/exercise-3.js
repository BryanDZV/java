const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];
const pequeñas =[]
const medianas =[]
const grandes =[]
for (let zv = 0; zv < movies.length; zv++) {
    const element = movies[zv];
    if (element.durationInMinutes<100) {pequeñas.push(element)}
     if (element.durationInMinutes>=100 && element.durationInMinutes<200) {medianas.push(element)} 
     if (element.durationInMinutes>200){grandes.push(element)}
}
console.log(pequeñas);
console.log(medianas);
console.log(grandes);