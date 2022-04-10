// Tu as accès au jeu de données ci-dessous, mais il t'est INTERDIT de toucher au code ci-desous !
const characterNames = [
  '36AIS',
  "A'misandra",
  'Amimari',
  'Alika',
  '54B2',
  "A'merpact",
  'Amazora',
];

// Affiche le nombre de personnages dans le tableau
console.log(characterNames.length)

// Affiche le nom du premier personnage
console.log(characterNames[0])

// Affiche le nom du dernier personnage (le 7eme)
console.log(characterNames[6])

// Affiche le nom du dernier personnage **SANS** savoir qu'il est le 7eme
const last = characterNames.length -1;

console.log(characterNames[last])
// Affiche les noms de tous les personnages
characterNames.forEach(element => console.log(element))

// Affiche le nom de chaque personnage accompagné du nombre de caractères qu'il contient
characterNames.forEach(element => console.log(element, `(nombre de lettres ${element.length})`))
// Ex: Alika (5)
// Affiche le nom de chaque personnage en minuscules
characterNames.forEach(element => console.log(element.toLowerCase()))

// Affiche les noms des personnages dont le nom contient la lettre 'a' (minuscule ou majuscule)
characterNames.forEach(element => {
  if(element.toLowerCase().includes("a")){
    console.log(`Le personnage ${element} contient la lettre "a"`)
  }
})

// Crée une fonction `search(needle)` qui te renvoie les personnages dont le nom contient la lettre passée en paramètre

const search = (needle) => {
  characterNames.forEach(element => {
    if(element.toLowerCase().includes(needle)){
      console.log(element)
    }
  })  
};

console.log(search("e"))

//******

function searchBis (needle) {
  const result = [];

  characterNames.forEach((character) => {
    if (character.toLowerCase().includes(needle)) {
      result.push(character)
    }
  })
  return result;
}

console.log(searchBis("m"))
