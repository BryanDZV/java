fetch("https://api.agify.io/?name=michael")
  .then((response) => response.json()) //promesa y trasformar a formato json con el 1 then

  .then((resjson) => console.log(resjson)); //con el 2 then resuelvo la promesa de response.json y ya puedo ver mis datos
//puedo ver los datos haciendo el log

let datosObtenidos = async () => {
  let respuestaPromesa = await fetch(
    `https://dragonball-api.com/api/characters?limit=60`
  );

  let resjson = await respuestaPromesa.json();
  console.log(resjson);
};
datosObtenidos();
