const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (const propiedad in alien) {
  /*if (Object.hasOwnProperty.call(alien, propiedad)) se puede omitir*/
  const ovni = alien[propiedad];
  /*console.log("el ovni tiene " + propiedad + ": " + alien[propiedad]); FORMA 1 DE HACERLO*/
  console.log(`el alien tiene ${propiedad} : ${ovni}`);



}

/*me recorre todos los key(clave) con sus valores dentro de un objeto*/
