var userGuess;

var guessedByUser = [];

var computerGuessArray = ["Troi", "Data", "Picard", "Riker", "Worf", "Crusher", "Enterprise", "Borg", "Caradassians", "Romulans", "Vulcans"];

var computerGuess = computerGuessArray[Math.floor(Math.random() * computerGuessArray.length)];

var guessState = [];

var wonTheGame = false;

var totalGuesses = 0;

for (i = 0; i < computerGuess.length; i++) {
    guessState.push(" _ ");
}

// Updates guess and adds it to the guessedByUser array and calls the checkGuess function
document.onkeyup = function newGuess(event) {
    userGuess = event.key;
    guessedByUser.push(userGuess);
    checkGuess(userGuess);
}

//Updates the guess state with the user's guess
function updateGuessState(index) {
    guessState[j] = userGuess;
}

//checks to see if an element passed to it equals the user's guess
function isMatching(element){
    if (element == userGuess) {
        return true;

    }
    else {
        return false;
    }
}

//Updates the guess state with the user's guess
function updateGuessState(index) {
    guessState[j] = userGuess;
    console.log(guessState);
}

//Creates an array out of the computer's guess, and cycles through it using the matching function, 
function checkGuess(letter){
    var computerGuessArray = computerGuess.split("");
    var isMatched = false;
    for (j = 0; j < computerGuess.length; j++) {
        if (isMatching(computerGuessArray[j])) {
            updateGuessState(j);
            isMatched = true
        }
        
    }
    //Checks to see if the user guess matched the computer's guess at any point, if it is still false, it updates the totalGuesses variable
    if (isMatched === false) {
        totalGuesses = totalGuesses + 1;
        console.log("You have guessed", totalGuesses);
    }

    //calles the wonGame function at the end of function to see if the game is over
    wonGame();

}
// Checks the computer's guess against the guessState to determine if user has won.
function wonGame() {
    if (computerGuess === guessState.join("")) {
        wonTheGame = true;
        console.log("You win! ")
    }
}

console.log(guessState.toString());

console.log(computerGuess);

console.log(guessedByUser);