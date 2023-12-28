const users = [
  { name: "Abel", years: 43 },
  { name: "Maria", years: 18 },
  { name: "Pedro", years: 14 },
  { name: "Samantha", years: 32 },
  { name: "Raquel", years: 16 },
];
/* ${} invocar variable dentro ``
`` forma de concadenar mas simplificada imprime literalmente lo que haya en el corchete

 */
for (let index = 0; index < users.length; index++) {
  const user = users[index];

  if (user.years >= 18) {
    console.log(users[index], "usuario mayor de edad");
  } else {
    console.log(`Usuario menor de edad: ${user.name}`);
  }
}

