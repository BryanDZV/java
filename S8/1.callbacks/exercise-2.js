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
//const confirmValue = confirm('Soy un texto');
//const propmt = prompt('Soy un texto');

//function promptExample(){
//propmt()
//}

/*function confirmExample(description) {
  const confirmValue = confirm("Description Hola");
  let resultado=confirm(confirmValue);
  userAnwsers.push(resultado)
}
function promptExample(){
   let resultado = prompt('Soy un promp')
     userAnwsers.push(resultado)
       
    }

function father(promptExample) {
  promptExample();
  
}



father(promptExample);
console.log(userAnwsers);*/




