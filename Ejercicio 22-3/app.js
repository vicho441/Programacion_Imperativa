let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
let noPelicula = [];

function Mayusculas(e) {
    for (let i = 0; i < e.length; i++) {
        let paso2 = e[0].toUpperCase();
        e.shift();
        e.push(paso2);
    }
    return e;
}

function unirArrays(a1, a2) {
    for (let i = 0; i < a2.length; i++) {
        a1.push(a2[i]);
    }
    noPelicula = a1.pop();
    return a1;
}

function comparar(a1, a2) {
    for (let i = 0; i < a2.length; i++) {

        if (a1[i] == a2[i]) {
            console.log(`La calificación de la película correspondiente a la posición ${i} es igual tanto en Asia como en Europa`);
        } else {
            console.log(`La calificación de la película correspondiente a la posición ${i}  no es igual tanto en Asia como en Europa`);
        }
    }
}

console.log(Mayusculas(peliculas));
console.log(Mayusculas(peliculasAnimadas));
console.log(unirArrays(peliculas, peliculasAnimadas));
console.log(noPelicula);
comparar(asiaScores, euroScores);