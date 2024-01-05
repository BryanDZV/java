const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

let input$ = document.querySelector("input");
let boton$ = document.querySelector("button");
//FUNCION buscaar y FILTRAR AL HACER CLICK
let informacion = (parametro) => {
  let buscarInput = input$.value.toLowerCase();
  console.log(buscarInput);
  let filtradoArray = streamers.filter((elemento) =>
    elemento.name.toLowerCase().includes(buscarInput)
  );
  console.log(filtradoArray);
};

boton$.addEventListener("click", informacion);
