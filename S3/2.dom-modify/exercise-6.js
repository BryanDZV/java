const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let padre=document.querySelector('body')
let divElemmento=document.createElement('div')
padre.appendChild(divElemmento)

for (let iteracion = 0; iteracion < apps.length; iteracion++) {
    let elemento=apps[iteracion]
    console.log(elemento);
    let ulLista=document.createElement('ul')
    let liLista=document.createElement('li')
    divElemmento.appendChild(ulLista)
    ulLista.appendChild(liLista)
    liLista.textContent=`${elemento}`
    
}

//otra forma con iner html ahorrando pasos en en li
for (let iteracion = 0; iteracion < apps.length; iteracion++) {
    let elemento=apps[iteracion]
    console.log(elemento);
    let ulLista=document.createElement('ul')
    divElemmento.appendChild(ulLista)
    ulLista.innerHTML=`<li>${elemento}</li>`
}