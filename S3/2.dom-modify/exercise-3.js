let primerdiv = document.createElement("div");
let padre = document.querySelector("body");
//let hijo=document.createElement('p')
padre.appendChild(primerdiv);

let misp = document.querySelectorAll(primerdiv);
let array=['<p></p>']
for (const vuelta of array) {
    let pprimera=document.createElement("<p>soy 1 </p>")
  pprimera.textContent = vuelta;
  primerdiv.appendChild(pprimera)
}
