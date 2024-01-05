const userAnwsers = [];

function confirmExample(description){
    return confirm(description)
}

function promptExample(description){
    return propmt(description)
}

function father(description,callback){
  userAnwsers.push(callback(description))

}

father('hoy dia 19 de diciembre?',confirmExample)
father('que dia vas a salir',promptExample)

console.log(userAnwsers);
/////////////////////////////



let description='hola'

let confirmExample=(description)=>{
  let confirmValue=confirm(description)
  return confirmValue
}
//el confir y el prom son nativas de navegador, por eso salen si definir pero deberia funcionar en el navegador
let promptExample=(description)=>{
  let propmtValue=prompt(description)
  return propmtValue
}
let father=(description,callback)=>{
  let resultado=callback(description)
  userAnwsers.push(resultado)

}
father(description,promptExample)
father('holassss',promptExample)
father('sd',confirmExample)
father('yyrt',promptExample)
console.log(userAnwsers);