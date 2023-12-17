let sel$$=document.querySelectorAll('div')[1];
let p$$=document.createElement('p');
p$$.textContent='Voy en medio';
document.body.insertBefore(p$$,sel$$);
console.log(sel$$);
//se puede usar document.body.y de mas pero normalmente solo se ataca al body porque si haces con otro y hay muchos de la misma clase solo te va a devolver el primero y talvez el q quieras no.