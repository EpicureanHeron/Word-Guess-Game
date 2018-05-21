var userGuess;

var guessedByUser;

var computerGuessArray = ["Troi", "Data", "Picard", "Riker", "Worf", "Crusher", "Enterprise", "Borg", "Caradassians", "Romulans", "Vulcans"];

var computerGuess = computerGuessArray[Math.floor(Math.random() * computerGuessArray.length)];

var guessState = [];

for (i = 0; i < computerGuess.length; i++) {
    guessState.push(" _ ");

}

console.log(guessState.toString());

console.log(computerGuess);