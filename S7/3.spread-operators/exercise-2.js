const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copiaToy={...toy}
console.log(copiaToy);

//USANDO DESTRUCTURIN Y SPREAD

const {...propiedades}=toy
console.log(propiedades);