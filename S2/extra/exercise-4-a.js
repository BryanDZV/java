let animales = [
    "Caracol",
    "Mosquito",
    "Salamandra",
    "Ajolote",
    "123456789012345",
  ];
  let text = "rojoazulad";
  let futbol = "ronaldomessirob";
  let copas = ["dosswaqs", "ocho", "ocho", "ocho", "ocho", "ocho"];
  
  function findArrayIndex(animales, text) {
    for (let iteracion = 0; iteracion < animales.length; iteracion++) {
      const elemento = animales[iteracion];
      console.log(elemento.length);
      if (elemento.length == text.length) {
        console.log(elemento);
      }
    }
  }
  findArrayIndex(animales, futbol);
  console.log(text.length);
  console.log(copas.length);
  console.log(futbol.length);
  