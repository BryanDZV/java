const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let vuelta = 0; vuelta < placesToTravel.length; vuelta++) {
    const lugar = placesToTravel[vuelta];
    if (placesToTravel[vuelta].id==11 || placesToTravel[vuelta].id==40) {placesToTravel.splice(vuelta,1);
        
    }
    
}console.log(placesToTravel);

