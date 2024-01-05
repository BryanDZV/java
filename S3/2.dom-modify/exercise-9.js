let contenedor=document.body.querySelectorAll('.fn-insert-here')
console.log(contenedor);

contenedor.forEach(elemento => {
    let parrafo=document.createElement('p')
    parrafo.textContent='Voy dentro!'
    elemento.appendChild(parrafo)
    
});
