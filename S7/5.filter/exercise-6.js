const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

let jugadores = streamers.filter((vuelta) =>vuelta.gameMorePlayed.includes('Legends'))
//console.log(jugadores);

let mayusculas=streamers.filter((vuelta)=>vuelta.age>35 && vuelta.gameMorePlayed.includes('Legends')?vuelta.gameMorePlayed=vuelta.gameMorePlayed.toUpperCase():'')
console.log(mayusculas);


/*let jugadores=streamers.filter((vuelta)=vuelta.gameMorePlayed.includes('Legends')&& vuelta.age>35 && vuelta.gameMorePlayed=vuelta.gameMorePlayed.toUpperCase())
console.log(jugadores);*/




    

