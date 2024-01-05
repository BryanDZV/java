let boton$=document.querySelector('button')
let input$=document.querySelector('input')
const baseUrl = 'https://api.nationalize.io?name=';

//nombre tecleo es un parametro que toma el valor de input==pasando como parametro de la api, el valor del input. 
//con el boton se llama a la funcion inicio .

let consultaNacionalidades=async(nombreTecleo)=>{
  let respuesta=await fetch(baseUrl+nombreTecleo)
  let respuestjson=await respuesta.json()
  console.log(respuestjson);
}
let valorInput=()=> {
  let InputValor=input$.value
  console.log(InputValor);
  return InputValor
 } 

 let incio=()=>{
  let tecleo=valorInput()
  let api=consultaNacionalidades(tecleo)
  return api
 }

boton$.addEventListener('click',incio)