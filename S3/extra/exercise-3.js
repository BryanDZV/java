const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let contenedor=document.body.querySelector('[data-function="printHere"]')
//si meto detro de una funcion con parametro variable puedo contrarlo despues para cualquier dato
let lista=(elemento) =>{
    for (const iteracion of elemento) {
        let ulLista=document.createElement('ul')
        contenedor.appendChild(ulLista)
        let liLista=document.createElement('li')
        ulLista.appendChild(liLista)
        liLista.textContent=iteracion
        
    }
    
}
lista(cars)