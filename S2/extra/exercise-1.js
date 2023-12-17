const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

/*let categorias = [];

for (let movie of movies) {
  for (let category of movie.categories) {
    if (!categorias.includes(category)) {
      categorias.push(category);
    }
  }
}

console.log(categorias);*/

let comedia=[]
let aventura=[]
let acción=[]
let thriller=[]
let animación=[]

 


 let categorias=[]
for (const vuelta of movies) {if (vuelta.categories.includes("comedia")) {
    comedia.push(vuelta)}
     if(vuelta.categories.includes("aventura")){
     aventura.push(vuelta)} 
     if(vuelta.categories.includes("acción")){
        acción.push(vuelta)} 
        if(vuelta.categories.includes("thriller")){
            thriller.push(vuelta)} 
             if(vuelta.categories.includes("animación")){
                animación.push(vuelta)
            }
        } 
        categorias=categorias.concat([comedia],[aventura],{acción},{thriller},{animación}) 
        console.log(categorias);
