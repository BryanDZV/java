/*Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.*/

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];
let contador = 0;//es para cada iteracion 
for (let iteracion = 0; iteracion < alumns.length; iteracion++) {
  const resultado = alumns[iteracion];
  if (resultado.T1 == true) {
      contador += 1;
  } else if (resultado.T2 == true) {
      contador+=1
  } else if (resultado.T3 == true) {
      contador+=1
    }
    resultado.isApproved=contador>=2
}
console.log(alumns);
