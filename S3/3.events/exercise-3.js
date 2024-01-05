let input$=document.querySelector('input')

let elValor=(event)=> {
    let valorInput=event.target.value
    console.log(valorInput);
    
}

input$.addEventListener('input',elValor)
