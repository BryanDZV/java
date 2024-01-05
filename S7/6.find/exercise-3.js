const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];

const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

let newalien = [...aliens, ...mutations];
//console.log(newalien);

let encontrado1=aliens.find((vuelta)=>vuelta.name=='Cucushumushu')
//console.log(encontrado1);
let encontradomut=mutations.find((vuelta)=>vuelta.name=='Porompompero')
//console.log(encontradomut);

aliens[2].mutation=encontradomut
console.log(aliens);
//aliens.splice(2,0,mutation=encontradomut) esto añade ojeto no atributo
//console.log(aliens);

let alienEncontrado = aliens.find((elemento) =>
  elemento.name.includes("Cucushumushu")
);
console.log(alienEncontrado);

let mutacionEncotrada = mutations.find((elemento) =>
  elemento.name.includes("Porompompero")
);
console.log(mutacionEncotrada);

if (alienEncontrado && mutacionEncotrada) {
  alienEncontrado.mutatiOn = mutacionEncotrada;
}
console.log(aliens);


