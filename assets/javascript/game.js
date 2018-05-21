var userGuess;

var guessedByUser = [];

var computerGuessArray = ["Troi", "Data", "Picard", "Riker", "Worf", "Crusher", "Enterprise", "Borg", "Caradassians", "Romulans", "Vulcans"];

var computerGuess = computerGuessArray[Math.floor(Math.random() * computerGuessArray.length)];

var guessState = [];



for (i = 0; i < computerGuess.length; i++) {
    guessState.push(" _ ");
}

// Updates guess and adds it to the guessedByUser array
document.onkeyup = function newGuess(event) {
    userGuess = event.key;
    guessedByUser.push(userGuess);
    matchingIndex(userGuess);
}

function matching(element){
    if (element == userGuess) {
        return true;

    }
    else {
        return false;
    }
}

//Creates an array out of the computer's guess, and cycles through it using the matching function, 
function matchingIndex(letter){
    var computerGuessChangedtoArray = computerGuess.split("");
    for (j = 0; j < computerGuess.length; j++) {
        if (matching(computerGuessChangedtoArray[j])) {
            guessState[j] = " " + userGuess + " ";
            console.log(guessState)
        }
    }
}

// function updateGuessState() {
//     guessState
// }

console.log(guessState.toString());

console.log(computerGuess);

console.log(guessedByUser);