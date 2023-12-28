const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];


products.forEach((resultado) => {
  console.log(resultado.toLowerCase().includes("Camiseta"));
  console.log(resultado);
});

for (const resultado of products) {
  if (resultado.toLowerCase().includes("camiseta")) {
    console.log(resultado);
  }
}
//for of camiseta con pequeña con grande no me coge porque?¿