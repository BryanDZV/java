const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  let contenedor = document.querySelector("body");
  
  let paises = (elemento) => {
    for (const iteracion of elemento) {
      console.log(iteracion);
      let div$ = document.createElement("div");
      contenedor.appendChild(div$);
      let tituloH = document.createElement("h4");
      div$.appendChild(tituloH);
      tituloH.textContent = iteracion.title;
      let fotoImg = document.createElement("img");
      div$.appendChild(fotoImg);
      fotoImg.src = iteracion.imgUrl;
  
    }
  };
  paises(countries);
  
  let botoBorrar = document.querySelector("button");
  let borrar = (elemento) => {
    if (countries.length > 0) {
      countries.pop();
    }
    contenedor.lastChild.remove();
    //contenedor.removeChild(contenedor.lastChild);
  };
  borrar();
  
  botoBorrar.addEventListener('click',borrar)