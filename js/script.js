'use strict';
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode

// Récuperation du button !
const btnTest = document.getElementById('btn-test');
console.log(btnTest);

// Ecoute de l'event click !
btnTest.addEventListener('click', () => {
    console.log('Hello World ♥');
});

// Les chaines de caracteres 
// *************************
const inputTest = document.getElementById('input-test');
console.log(inputTest);

btnTest.addEventListener('click', () => {

    // Récuperation de la valeur de l'input
    const inputValue = inputTest.value;
    console.log('La valeur est :', inputValue);

    // Suppression de la valeur dans l'input
    inputTest.value = '';

    // Récuperation de la position de la lettre "e"
    const positionE = inputValue.indexOf('e');
    console.log('Index de la 1er lettre E : ', positionE);

    const positionE2 = inputValue.lastIndexOf('e');
    console.log('Index de la derniere lettre E : ', positionE2);

    // Récuperation du 2e caractere de la chaine
    const lettre1 = inputValue[1];
    const lettre2 = inputValue.charAt(1);
    console.log('Lettre en 2e position : ', lettre1, lettre2);

    // Transformation 
    //  - Modifier la casse
    const textMaj = inputValue.toUpperCase();
    const textMin = inputValue.toLowerCase();
    console.log('Modif Casse : ', textMaj, textMin);

    //  - Remplacer des valeurs
    const rep1 = inputValue.replace('a', 'i');      // (1er valeur)
    console.log('Replace [a -> i]: ', rep1);

    const rep2 = inputValue.replaceAll('a', 'i');   // (All)
    console.log('ReplaceAll [a -> i]: ', rep2);

    const rep3 = inputValue.replaceAll('a', 'i').replaceAll('o', 'i');
    console.log('ReplaceAll [a et o -> i]: ', rep3);

    const regex = /[ao]/gi;
    const rep4 = inputValue.replaceAll(regex, 'i');
    console.log('ReplaceAll [a et o -> i] (regex): ', rep4);

    //  - Découpé
    const decoupe = inputValue.slice(0, 2);
    console.log('Slice : ', decoupe); 

    // Longeur de la chaine
    const long = inputValue.length;
    console.log('Longeur de la chaine : ', long);

    // Decouper une chaine sur un délimiteur (un espace par exemple)
    const phrase = 'Bientot la fin de la journée :o';
    console.log('Phrase : ', phrase);

    const phraseDecoupe = phrase.split(' ');
    console.log('Decoupe : ', phraseDecoupe);

});