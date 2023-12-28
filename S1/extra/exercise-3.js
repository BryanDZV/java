const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];
let pequeña = [];
let mediana = [];
let grande = [];
for (let iteracion = 0; iteracion < movies.length; iteracion++) {
  const resultado = movies[iteracion];
  //console.log(resultado);
  if (resultado.durationInMinutes < 100) {
    //console.log(resultado);
    pequeña.push(resultado);
  } else if (
    resultado.durationInMinutes >= 100 &&
    resultado.durationInMinutes < 200
  ) {
    mediana.push(resultado);
  }else{
    grande.push(resultado)
  }
}