const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
let vistname=cities.map((vuelta)=>vuelta.isVisited==true?vuelta.name.concat(' Visitado'):vuelta.name.concat(' no visitado'))
console.log(vistname);