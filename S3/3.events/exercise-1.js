
let boton=document.createElement('button')
boton.textContent='boton creado'
document.body.appendChild(boton)
//console.log(boton);
boton.setAttribute('id','btnToClick')
let botoneve=document.querySelector('#btnToClick')
function EVENTOS(params) {console.log(botoneve);
    
}
botoneve.addEventListener('click',EVENTOS)



