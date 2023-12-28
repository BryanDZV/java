const exams = [
  { name: "Abel Cabeza Román", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];
/*let aprobados=exams.filter((vuelta)=>vuelta.score>=5 )
console.log(aprobados);
let resultado = aprobados.reduce((acc, vuelta) =>acc+vuelta.score,0)
console.log(resultado);*/

let resultado = exams.filter((vuelta) => vuelta.score >= 5).reduce((acc,vuelta)=>acc+vuelta.score,0)
console.log(resultado);
