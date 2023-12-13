const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let z = 0; z < placesToTravel.length; z++) {
    const lugar = placesToTravel[z];
    if (placesToTravel[z].id==11 || placesToTravel[z].id==40) {placesToTravel.splice(z,1);
        console.log(placesToTravel);
    }
    
}

