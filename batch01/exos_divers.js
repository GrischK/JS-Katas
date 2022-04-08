// Exos cours JS 

const double = (number) => 2;
console.log(double());


const logParamsAndReturnAddition = (a, b) => {
  console.log(a, b); 
  return a + b;
};
console.log(logParamsAndReturnAddition(4, 6));


const roundMap = (numbers) => {
  const result = [];
  for (const number of numbers) {
    result.push(Math.round(number));
  }
  return result;
};
console.log(roundMap([2.5, 3.11124, 5.12]))

// Exos spread operator

const dogs = ["Leila", "Gatsby", "Dynia"];
const dogs2 = ["Gaston", "Gabelou", "Gadou"];
const listOfDogs = [...dogs, ...dogs2];

console.log(listOfDogs);

const concat = (array1, array2) => {
  result = [];

  for (const item of array1) {
    result.push(item);
  }

  for (const item of array2) {
    result.push(item);
  }

  return result
};

console.log(concat(dogs, dogs2));


// **************************************************

// Savoir si le mot est présent dans la phrase
let phrase = "Mon vélo tourne mal, je suis un nouveau piéton"

const isPresent = (sentence, word) => {
    if(sentence.indexOf(word) != -1) {
        console.log(`Le mot ${word} est bien présent`)
    }

}

isPresent(phrase, "mal")

//*************************

function caracterPresent (sentence, word) {
    if (sentence.includes(word)) {
        console.log(`Le mot "${word}" est bien dans la phrase`)
    }
    console.log(`${word}, n'est pas dans cette phrase`)
}

caracterPresent(phrase, 'husky')

//*************************

const tab = [23, 25, 87, -5, 52];

console.log(tab.find((nombre => nombre < 0)))

//*************************

const salariés = [
    {
        name : "Ced",
        salaire : 2000
    },

    {
        name : "Titi",
        salaire : 1800
    },

    {
        name : "Coralie",
        salaire : 1200
    },

    {
        name : "Nina",
        salaire : 1300
    },

    {
        name : "Max",
        salaire : 900
    },

    {
        name : "Abdou",
        salaire : 1400
    },

    {
        name : "Oz",
        salaire : 3100
    },

    {
        name : "Isis",
        salaire : 2300
    },
]

console.log(salariés.find(salarié => salarié.salaire > 2000));
console.log(salariés.findIndex(salarié => salarié.salaire < 1000));

//*************************
