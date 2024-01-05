const game = {
    title: "The last us 2",
    gender: ["action", "zombie", "survival"],
    year: 2020,
  };
  
  //al extraer puedo cambiar de noombrre fijate en title;;; (nombreantiguo:nuevonombre)
 //luego peudes usar esas variables en tu codigo
  const { title:person, gender, year } = game;
  console.log(person);
  console.log(gender);
  console.log(year);