let boton$ = document.querySelector("button");
let input$ = document.querySelector("input");
let body$ = document.querySelector("body");
const baseUrl = "https://api.nationalize.io?name=";

//nombre tecleo es un parametro que toma el valor de input==pasando como parametro de la api, el valor del input.
//con el boton se llama a la funcion inicio .

let consultaNacionalidades = async (nombreTecleo) => {
  let respuesta = await fetch(baseUrl + nombreTecleo);
  let respuestjson = await respuesta.json();
  console.log(respuestjson);
  return respuestjson;
};

let valorInput = () => {
  let inputValor = input$.value;
  console.log(inputValor);
  return inputValor;
};

let porcentaje = (country) => {
  let valorPorcentaje = country.country[0].probability * 100;
  return valorPorcentaje;
};

let countryId = (country) => {
  let idCountry = country.country[0].country_id;
  return idCountry;
};
let parrafosDinamicos = (nombresTecleo, porcentajeTecleo, paisTecleo) => {
  let creacion$ = document.createElement("p");
  creacion$.textContent = `El nombre ${nombresTecleo} tiene un y ${porcentajeTecleo}% de ser de ${paisTecleo}`;
  body$.appendChild(creacion$);
  let crearBorrar$ = document.createElement("button");
  crearBorrar$.textContent = "eliminame";
  creacion$.appendChild(crearBorrar$);
  crearBorrar$.addEventListener('click',function(params) {
    creacion$.remove()
  })
};

let incio = async () => {
  let tecleo = valorInput();
  let api = await consultaNacionalidades(tecleo);
  let probabilidad = porcentaje(api);
  let paisId = countryId(api);
  let parrafos = parrafosDinamicos(tecleo, probabilidad, paisId);
  return api;
};


boton$.addEventListener("click", incio);
