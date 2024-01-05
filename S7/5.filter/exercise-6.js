const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

let nuevoStreamers = streamers
  .filter((elemento) =>
    elemento.gameMorePlayed.includes("Legends") && elemento.age > 35
  )
  .map((elemento) => {
    elemento.gameMorePlayed = elemento.gameMorePlayed.toUpperCase();
    return elemento;
  });

console.log(nuevoStreamers);



    

