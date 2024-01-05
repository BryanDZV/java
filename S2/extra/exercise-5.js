function rollDicce(caras) {
    //si pongo +1 me aseguro que nunca salga cero
    //si uso condicional es lo mismo
    let numero=Math.floor(Math.random() * caras)
    if (numero>0) {
        console.log(numero);
    }
    
    return numero
}

let lotos=rollDicce(3);
console.log(lotos);