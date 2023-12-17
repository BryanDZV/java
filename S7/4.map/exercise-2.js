const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

let nombreanacleto = users.map((vuelta) => vuelta.name.includes('A')? 'Anacleto': vuelta.name)

console.log(nombreanacleto);





/*

metodo if ternario arrriba
los dos usan map.
    if (vuelta.name.includes("A")) {
        return "Anacleto";
      } else {
        return vuelta.name;
      }
    });
    console.log(nombreanacleto);*/







