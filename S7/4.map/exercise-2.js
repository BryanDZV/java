const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

let nuevoUsers = users.map((elemento) => {
  console.log(elemento.name);
  if (elemento.name.startsWith("A")) {
    elemento.name = "Anacleto";
  }

  return elemento.name;
});

console.log(nuevoUsers);