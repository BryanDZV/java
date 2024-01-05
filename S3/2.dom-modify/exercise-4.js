let div=document.createElement('div')
let padre=document.querySelector('body')
padre.appendChild(div)

let pepe=document.createElement('p')
div.appendChild(pepe)


let nota=document.createTextNode('<h>Soy dinámico jaja</h1>!') //solo añade texto no etiquetas
pepe.appendChild(nota)

let etiqueta=document.createElement('div')
let padres=document.querySelector('body')
padres.appendChild(etiqueta)

let parrafo=document.createElement('p')
etiqueta.appendChild(parrafo)
parrafo.textContent='soy dinamico'
//pepe.textContent='<h>Soy dinámico jaja!</h>' //tambien solo añade texto

let prueba=document.createElement('p1')
div.appendChild(prueba)
prueba.innerHTML='<h1>Soy dinámico jaja</h1>' //con el inerhtml puedo añadir texto pero aplica etiquetas si las pongo

