const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const equipos = ["d", "f", "w", "1", "2","jola"];
let contenedor = document.querySelector("body");
let paises = (elemento) => {
  for (const iteracion of elemento) {
    let lista = document.createElement("ul")
    contenedor.appendChild(lista);
    let liLista = document.createElement("li");
    liLista.textContent=iteracion
    lista.appendChild(liLista);
  }
};
paises(countries);