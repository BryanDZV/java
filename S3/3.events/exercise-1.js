
let boton=document.createElement('button')
boton.textContent='boton creado'
document.body.appendChild(boton)
//console.log(boton);
boton.setAttribute('id','btnToClick')
let botoneve=document.querySelector('#btnToClick')
function EVENTOS(botoneve) {console.log(botoneve);
    
}
botoneve.addEventListener('click',EVENTOS)


let botones = document.createElement("button");
botones.textContent = "soy un boton";
botones.setAttribute('id','btnToClick')
let padre = document.querySelector("body");
padre.appendChild(botones);

let informacion = function info(Event) {
  console.log('soy la informacion del evento click:',Event);
};
botones.addEventListener('click',informacion)





