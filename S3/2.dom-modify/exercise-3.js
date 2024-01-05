let etiqueta=document.createElement('div')
let padre=document.querySelector('body')
padre.appendChild(etiqueta)

for (let iteracion = 0; iteracion <= 6; iteracion++) {
    let parrafo=document.createElement('p')
    etiqueta.appendChild(parrafo)
    parrafo.textContent=`Parrafo: [${iteracion}]`
    
}