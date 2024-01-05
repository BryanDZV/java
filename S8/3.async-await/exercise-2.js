let getCharacters= async()=> {
    let respuesta= await fetch("https://rickandmortyapi.com/api/character")
    let resjson=await respuesta.json()
    console.log(resjson);
  }
  
  getCharacters();
  