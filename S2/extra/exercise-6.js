//funcion numero a=aleatorio

function rollDicce(caras) {
    //si pongo +1 me aseguro que nunca salga cero
    //si uso condicional es lo mismo
    let numero = Math.floor(Math.random() * 3);
    if (numero > 0) {
      console.log(numero);
    }
  
    return numero;
  }
  //let lotos = rollDicce(1);
  //console.log(lotos);
  
  
  
  //funcion intercambio
  let array = ["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"];
  function swap(array, a, b) {
    if (a >= 0 && a < array.length && b >= 0 && b < array.length) {
      let inter = array[a];
      //console.log(array[a]);
      array[a] = array[b];
      array[b] = inter;
    }
    return array;
  }
  //funcion incio controlo desde aqui los parametros
  function init(params) { 
      let loto = rollDicce();
      let caraA = Math.floor(Math.random() * array.length); // usa el rolldicce para coger otro numero aleatorio para a 
      let caraB = Math.floor(Math.random() * array.length); 
      let cambio = swap(array, caraA, caraB); // Intercambia posiciones con a y b escogido aleatoriamente
      console.log(cambio);
  }
  
  init();
  