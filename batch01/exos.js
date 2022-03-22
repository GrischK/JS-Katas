// Ecrire une variable contenant ton age (number) et une constante contenant ta date de naissance (string)
let age = 37;
const dateOfBirth = "21/01/1985";

console.log(age, dateOfBirth);
// Ecrire un code qui t'affiche ton prénom si ton âge est pair (... Quoi ? Pourquoi pas ?!)
if (age %2 === 0) {
  console.log("Ton age est pair");
} else {
  console.log("Ton age est impair");
};
// Ecrire un code qui t'affiche ton prénom si ton âge est inférieur à 27, et ton nom dans le cas contraire
const name = "Gorski";
const firstName = "Grischka";

if (age < 27) {
  console.log(firstName);
} else {
  console.log(name);
};
// Ecrire un code qui me copie 10 lignes de "Je ne copierai pas du code bêtement" (oui, c'est du recyclage d'exos :p)
for (let i = 0; i < 10; i++) {
console.log("Je ne copierai pas du code bêtement"); 
};

// Ecrire une fonction getToto qui me renvoie la string "toto"
function getToto(){
  return "Toto";
}

console.log (getToto());
// Ecrire une fonction getTotoArrow qui me renvoie la string "toto", en utilisant la syntaxe fléchée
const getTotoArrow = () => {
  return "Toto"
}

console.log(getTotoArrow());
// Ecrire une fonction d6 qui me renvoie un nombre alétoire entre 1 et 6
function d6() {
  return Math.random(1,7);
}

console.log(d6());
// Ecrire une fonction qui me renvoie la somme de deux nombres passés en paramètres

// Ecris un objet littéral (sans POO) qui te représente: nom, age, sexe, loisirs, ton langage de prédilection, une fonction pour te présenter, une fonction qui récite ton elevator speech

/* Ecris une fonction fizzBuzz(num) qui te renvoie:
  - "fizz" si num est un multiple de 3
  - "buzz" si num est un multiple de 5
  - "fizzbuzz" si num est un multiple de 3 et de 5
  - num dans les autres cas
*/
