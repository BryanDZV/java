/*Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.*/

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

let contador=0
  for (let vuelta = 0; vuelta <alumns.length; vuelta++) {
    const mialumno =alumns[vuelta];
    if (mialumno.T1==true) {contador+=1; /*si pongo contaador++=contador+=1 */
    }
    if (mialumno.T2==true) {contador+=1;
    }
    if (mialumno.T2==true) {contador+=1;
    }
    mialumno.isApproved=contador>=2
}


console.log(alumns);