// Tu as accès au jeu de données ci-dessous, mais il t'est INTERDIT de toucher au code ci-desous !
// NB: Techniquement on pourrait utiliser le mot-clé `const` pour déclrer ce tableau, même si son contenu sera modifié au cours de ce kata. Je considre par contre que c'est une mauvaise pratique, car le mot clé `const` est censé indiquer un contenu inamovible.
let people = ['Greg', 'Mary', 'Devon', 'James'];

// --------------------------------------------------------------------
// En utilisant une boucle, parcours le tableau et affiche chaque personne
const display = (arr) => {
    for (const el of arr) {
        console.log(el)
    }
}

display(people)

// Supprime "Greg" du tableau
const removeGreg = (arr) => {
    people.shift()
    console.log(people)
}

removeGreg(people)

// Supprime "James" du tableau
const removeJames = (arr) => {
    people.pop()
    console.log(people)
}

removeJames(people)

// Ajoute "Matt" en *tête* de tableau (indice 0)
const addMatt = (arr) => {
    people.unshift("Matt")
    console.log(people)
}

addMatt(people)

// Ajoute ton nom en *queue* de tableau
const addGrischka = (arr) => {
    people.push("Grischka")
    console.log(people)
}

addGrischka(people)

// En utilisant une boucle, parcours le tableau et affiche chaque personne jusque "Mary" (tu dois alors sortir de la boucle)
const stopToMary = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const person = arr[i];
        if (person === "Devon") {
            break;
        }
        console.log(person)
    }
}

stopToMary(people)

// Crée une copie du tableau dans une nouvelle variable, en utilisant la fonction `slice()`. Cette copie *ne* devra *pas* contenir "Mary" ni "Matt"

const array2 = people.slice()

const newArray = people.filter(el => el !== "Mary" && el !== "Matt" )
console.log(newArray)

// Trouve où se trouve "Mary" dans le tableau à l'aide de `indexOf()`

console.log(people.indexOf('Mary'))
// Trouve où se trouve "Foo" dans le tableau à l'aide de `indexOf()` (si tu ne t'appelles pas "Foo", la fonction devrait te retourner le nombre -1 pour t'indiquer que la valeur n'est pas présente)

console.log(people.indexOf('Foo'))
// Rends à `people` sa valeur initiale. Ensuite, en utilisant `splice()` à une seule reprise, supprime "Devon" du tableau et remplace le par "Elizabeth" et "Artie". Ton tableau devrait alors avoir cette valeur: ["Greg", "Mary", "Elizabeth", "Artie", "James"]
people = ['Greg', 'Mary', 'Devon', 'James'];
people.splice(2, 2, "Elizabeth", "Artie")
console.log(people)

// Crée une nouvelle variable `withBob` qui est une copie de `people` à laquelle on ajoute l'élément "Bob" (en une seule opération)
let withBob = [...people, "Bob"];

console.log(withBob)