const products = [
    { name: "Gorra de rodilla", sellCount: 10 },
    { name: "Pantalón de pana", sellCount: 302 },
    { name: "Reloj de papel albal", sellCount: 23 },
    { name: "Inpar de zapatos", sellCount: 6 },
  ];

  let total=0
  products.forEach(resultado => {total+=resultado.sellCount / products.length
    
  });
  console.log(total);