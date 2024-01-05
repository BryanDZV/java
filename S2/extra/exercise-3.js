const users = [
    {
      name: "Manolo el del bombo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Mortadelo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Super Lopez",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "El culebra",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
  let waves = 0;
  let rain = 0;
  let shower = 0;
  let wind = 0;
  let firecamp = 0;
  let train = 0;
  let cuenta = {};
  for (const iteracion of users) {
    let elemento = iteracion.favoritesSounds;
    //console.log(elemento);
    for (const propiedad in elemento) {
      console.log(propiedad);
      if (propiedad.includes("waves")) {
        waves++;
      }
      if (propiedad == "rain") {
        rain++;
      }
      propiedad == "firecamp" ? firecamp++ : "";
      propiedad == "shower" ? shower++ : "";
      propiedad == "wind" ? wind++ : "";
      propiedad == "train" ? train++ : "";
  //estA es otra forma mas corta, es hacer lo mismo pero para todos en un codigo
      if (cuenta[propiedad]) {
        cuenta[propiedad]++;
      } else {
        cuenta[propiedad] = 1;
      }
    }
  }
  console.log(cuenta);
  console.log(waves);
  console.log(rain);
  console.log(firecamp);
  console.log(shower);
  console.log(train);
  console.log(wind);
  