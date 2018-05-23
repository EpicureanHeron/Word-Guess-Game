
// Initalizes the userGuess variable which will be assigned after a letter key is pressed
var userGuess;

// Empty array which will have userGuess added to it 
var usedLettersArr = [];

// Array from which the computer choses its mystery word
var computerGuessArray = ["Betazoid", "Troi", "Data", "Picard", "Riker", "Worf", "Crusher", "Enterprise", "Borg", "Caradassians", "Romulans", "Vulcans", "Geordi", "Wesley", "Yar", "Guinan", "Klingons"];

// Initalizes the computerGuess, which will store a value from the computerGuessArray 
var computerGuess;

//intilizes the variable guessState which will be updated to an empty array in the makeGuessPopulateGuessState() 
var guessState;

//State of the game
var wonTheGame = false;

//Will be switched to true once a guess is made, will be switched back after a defeat or a correct answer
var computerMadeGuess = false;

//Keeps track of all wrong letter guesses
var wrongGuesses = 0;

//Correct words guessed
var wordsGuessed = 0;

//array to store the correct guesses 
var computerGuessCorrect = [];

//NEEDS TO BE ADDED:
//Do not increase wrongGuesses if the guess has been made before, this might need to be another function that both checks to see if it has been guessed before, adds it to the list, and alerts you to if it has been guessed before
//Create another array to store previous computer guesses, and IF the new comptuer guess is in that array, make a new guess
//Need to create a limit to guesses
//Need to create a "reset state" function to reset after a win that chooses a new word (cannot be a previous chosen word)...not sure about reseting guesses though...need to reset the usedLettersArr array


//THINGS TO CLEAN UP
//1. Make variables and functions more unique


// Updates guess and adds it to the usedLettersArr array and calls the checkGuess function
document.onkeyup = function newGuess(event) {
//checks to see if a lowercase letter was pressed
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (computerMadeGuess === false) {
            makeGuessPopulateGuessState();
        }
        userGuess = event.key;
        //usedLettersArr.push(userGuess);
        console.log(event.keyCode);
        checkGuess(userGuess);
    }
    else {
        alert("That's not a letter!!!");
    }
}
// creates a computer guess from the array and populates the guess state. 
function makeGuessPopulateGuessState(){
    computerGuess = computerGuessArray[Math.floor(Math.random() * computerGuessArray.length)];
    console.log(computerGuess);
    guessState = [];
    for (i = 0; i < computerGuess.length; i++) {
        guessState.push(" _ ");
    }
    computerMadeGuess = true;
}

//Updates the guess state with the user's guess
function updateGuessState(index) {
    guessState[j] = userGuess;
}

//checks to see if an element passed to it equals the user's guess
function isMatching(element){
    var capsComputerLetter = element.toUpperCase();
    var capsUserGuessLetter = userGuess.toUpperCase();

    if (capsComputerLetter == capsUserGuessLetter) {
        return true;

    }
    // if (element == userGuess) {
    //     return true;
    // }
    else {
        return false;
    }
}

//Updates the guess state with the user's guess
function updateGuessState(index) {
    var computerGuessArray = computerGuess.split("");
    guessState[j] = computerGuessArray[j];
    console.log(guessState);
}

//Creates an array out of the computer's guess, and cycles through it using the matching function, 
function checkGuess(letter){
    var computerGuessArray = computerGuess.split("");
    var isMatched = false;
    validateGuess(letter);

    for (j = 0; j < computerGuess.length; j++) {
        if (isMatching(computerGuessArray[j])) {
            updateGuessState(j);
            isMatched = true
        }   
    }
    //Checks to see if the user guess matched the computer's guess at any point, if it is still false, it updates the wrongGuesses variable
    if (isMatched === false) {
        wrongGuesses = wrongGuesses + 1;
        console.log("You have guessed", wrongGuesses);
    }
    //calls the wonGame function at the end of function to see if the game is over
    wonGame();
    //calls the updatePage function
    updatePage();
}
//Checks to see if user has guessed this letter previously and adds it to the usedLetterArr if they have not, if they have used it, it lets them know
function validateGuess(element){
    if (usedLettersArr.includes(element)) {
        alert("You have used this before!")
    }
    else {
        usedLettersArr.push(userGuess);
    }
}

// Checks the computer's guess against the guessState to determine if user has won, reset variables and chose a new word.
function wonGame() {
    if (computerGuess === guessState.join("")) {
        wonTheGame = true;
        computerMadeGuess = false;
        console.log("You win! ")
        computerGuessCorrect.push(computerGuess)
        wordsGuessed = wordsGuessed + 1;
        usedLettersArr = [];
        makeGuessPopulateGuessState();
    }
}


//Updates the page with the current state of the game
function updatePage() {
    var displayGuesses = guessState.join("");
    var displayLettersGuessed = usedLettersArr.join(" ");
    var displayGuessCorrect = computerGuessCorrect.join(" ");
    // document.getElementById("computersGuess").innerHTML = computerGuess;
    document.getElementById("currentState").innerHTML =  displayGuesses;
    document.getElementById("guessedByUser").innerHTML = displayLettersGuessed;
    document.getElementById("numberOfGuesses").innerHTML = wrongGuesses;
    document.getElementById("gameStatus").innerHTML = wonTheGame;
    document.getElementById("wordsGuessed").innerHTML = wordsGuessed;
    //This should probably be nestled in an if statement checking to see if the computerGuessCorrect array is greater than 0.
    document.getElementById("correctWords").innerHTML = displayGuessCorrect;

   
}

