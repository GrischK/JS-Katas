// Ecrire une variable contenant ton age (number) et une constante contenant ta date de naissance (string)
let age = 37;
const dateOfBirth = "21 janvier 1985";

console.log(age, dateOfBirth)

// Ecrire un code qui t'affiche ton prénom si ton âge est pair (... Quoi ? Pourquoi pas ?!)
if (age % 2 === 0) {
  console.log("Grischka");
} else {
  console.log("Ton âge n'est pas un nombre pair, dommage...")
};

// Ecrire un code qui t'affiche ton prénom si ton âge est inférieur à 27, et ton nom dans le cas contraire
if (age < 27) {
  console.log("Grischka")
} 
console.log("Gorski");

// Ecrire un code qui me copie 10 lignes de "Je ne copierai pas du code bêtement" (oui, c'est du recyclage d'exos :p)
for(let i = 0; i <= 10; i++){
  console.log("Je ne copierai pas du code bêtement");
}

// Ecrire une fonction getToto qui me renvoie la string "toto"
const getToto = () => {
  return "toto";
}

console.log(getToto())
// Ecrire une fonction getTotoArrow qui me renvoie la string "toto", en utilisant la syntaxe fléchée
const getTotoArrow = () => {
  return "toto en mode fléchée"
}

console.log(getTotoArrow())

// Ecrire une fonction d6 qui me renvoie un nombre alétoire entre 1 et 6
const d6 = (max) => {
  return Math.floor(Math.random() * max);  
}

console.log(d6(9))
// Ecrire une fonction qui me renvoie la somme de deux nombres passés en paramètres
const somme = (a, b) => {
  return a * b
}

console.log(somme(10, 10))
// Ecris un objet littéral (sans POO) qui te représente: nom, age, sexe, loisirs, ton langage de prédilection, une fonction pour te présenter, une fonction qui récite ton elevator speech
const grischka = {
  nom : "Gorski",
  prenom : "Grischka",
  age : 37,
  sexe : "masculin",
  loisirs : ["course à pied", "chiens de traineau", "lecture", "ukulélé"],
  langage : ["CSS", "JS"],
  presentMyself : function () {
    return `Salut je m'appelle ${this.nom} ${this.prenom}. Mon langage de prédilection est ${this.langage}. Mes loisirs sont : ${this.loisirs}.`
  },

  elevatorSpeech : function () {
    return "blablabla"
  }
}

console.log(grischka)
console.log(grischka.nom, grischka.prenom)
console.log(grischka.presentMyself())
// Ecris une fonction fizzBuzz(num) qui te renvoie:
//   - "fizz" si num est un multiple de 3
//   - "buzz" si num est un multiple de 5
//   - "fizzbuzz" si num est un multiple de 3 et de 5
//   - num dans les autres cas
const fizzBuzz = (num) => {
  if(num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz"
  } 

  else if (num % 3 === 0) {
    return "fizz"
  }

  else if (num % 5 === 0) {
    return "buzz"
  }

  else {
    return num
  }
}

console.log(fizzBuzz(9))
console.log(fizzBuzz(7))
console.log(fizzBuzz(10))
console.log(fizzBuzz(15))