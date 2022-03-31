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
// ----------------------------------------------------------------------
// Affiche le nombre de personnages dans le tableau
console.log(characterNames.length);

// Affiche le nom du premier personnage
console.log(characterNames[0]);

// Affiche le nom du dernier personnage (le 7eme)
console.log(characterNames[6]);

// Affiche le nom du dernier personnage **SANS** savoir qu'il est le 7eme
console.log(characterNames[characterNames.length - 1]);

// Affiche les noms de tous les personnages
for (let i = 0; i < characterNames.length; i++) {
console.log(`${i + 1} ${characterNames[i]}`);
}

// Affiche le nom de chaque personnage accompagné du nombre de caractères qu'il contient
// Ex: Alika (5)
for (let i = 0; i < characterNames.length; i++) {
  console.log(`"${characterNames[i]}" nombre de lettres : ${characterNames[i].length}`);
  }
// Affiche le nom de chaque personnage en minuscules
for (let i = 0; i < characterNames.length; i++) {
  console.log(characterNames[i].toLowerCase());
}
// Affiche les noms des personnages dont le nom contient la lettre 'a' (minuscule ou majuscule)
for (let i = 0; i < characterNames.length; i++) {
  const characterIncludesA = characterNames[i].includes("A", "a");
  //console.log(characterNames[i]);
  if (characterIncludesA === true ) {
    console.log(`Ce nom comporte "A" ou "a" : ${characterNames[i]}`);
  };
}
// Crée une fonction `search(needle)` qui te renvoie les personnages dont le nom contient la lettre passée en paramètre
function search(needle) {
  let result =[];
  for (let i = 0; i < characterNames.length; i++) {
  if (characterNames[i].toLowerCase().includes(needle)) { 
    result.push(characterNames[i]);
  }
  }
  return result;
}

console.log(search("s"));

