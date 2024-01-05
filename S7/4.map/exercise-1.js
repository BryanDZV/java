

const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

let getnombre=users.map((vuelta) =>vuelta.name);
console.log(getnombre);

let nuevoUsers=users.map((elemento)=>{
    console.log(elemento.name);
    return elemento.name
})

console.log(nuevoUsers);