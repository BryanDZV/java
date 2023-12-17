const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (const key in alien) {
  /*if (Object.hasOwnProperty.call(alien, key)) se puede omitir*/
  const ovni = alien[key];
  /*console.log("el ovni tiene " + key + ": " + alien[key]); FORMA 1 DE HACERLO*/
  console.log(`el alien tiene ${key} : ${alien[key]}`);



}

/*me recorre todos los key(clave) con sus valores dentro de un objeto*/
