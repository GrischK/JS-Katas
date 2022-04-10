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
  return Math.floor(Math.random() * 7);
}

console.log(d6());

// Ecrire une fonction qui me renvoie la somme de deux nombres passés en paramètres
function sum(a, b) {
  return a + b;
}

console.log(sum(4, 5));

// Ecris un objet littéral (sans POO) qui te représente: nom, age, sexe, loisirs, ton langage de prédilection, une fonction pour te présenter, une fonction qui récite ton elevator speech
const grischka = {
  name : "Grischka",
  age : 37,
  sex : "male",
  hobbies : ["reading", "sleddog", "running"],
  favorite_language : "Javascript",

presentation: function() { 
  return `Hello my name is ${this.name}, I'm ${this.age} years old and I like ${this.hobbies.join(",")}.`
},

elevatorSpeech: function() {
  return "En reconversion pro, je me suis inscrit à la Wild Code School afin d'apprendre les bases du code pour devenir développeur web"
},

// presentation() { 
// return `Hello my name is ${this.name}, I'm ${this.age} years old and I like ${this.hobbies.join(", ")}.`
// },

// elevatorSpeech() {
// return "En reconversion pro, je me suis inscrit à la Wild Code School afin d'apprendre les bases du code pour devenir développeur web."
// },

}

//console.log(grischka, grischka.presentation(), grischka.elevatorSpeech());
console.log(grischka);
console.log(grischka.presentation());
console.log(grischka.elevatorSpeech());
//console.log(grischka.presentation());

// Ecris une fonction fizzBuzz(num) qui te renvoie:
//   - "fizz" si num est un multiple de 3
//   - "buzz" si num est un multiple de 5
//   - "fizzbuzz" si num est un multiple de 3 et de 5
//   - num dans les autres cas
function fizzBuzz(num){
if (num %5 === 0 && num %3 === 0) {
return "fizzbuzz";
}

if (num %5 === 0) {
return "buzz";
}

if (num %3 === 0) {
return "fizz";
}

return `${num}`;
};

console.log(fizzBuzz(15));
console.log(fizzBuzz(30));
console.log(fizzBuzz(5));
console.log(fizzBuzz(3));
console.log(fizzBuzz(10));
console.log(fizzBuzz(7));


