const baseUrl = "https://api.nationalize.io?name=";


getdatoasyc = async (inpu) => {
  let response = await fetch("https://api.nationalize.io?name=");
  let resjson = await response.json();
  console.log(resjson);
};

let inpu = document.querySelector("input");
inpu.addEventListener("input", function () {
  console.log(inpu.value,);
});

getdatoasyc(inpu);
let boton = document.querySelector("button");
boton.addEventListener("click", getdatoasyc);

