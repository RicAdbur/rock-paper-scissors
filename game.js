var numWins = 0;
var numLosses = 0;
var numTies = 0;

var choices = ["R", "P", "S"]

// Both players choose R, P, S
    // Get input from Human user
var humanChoice = prompt("Choose R, P, or S")
console.log(humanChoice)

    // Random input generation from computer
var randomNum = Math.floor( Math.random() * 3 )
console.log( choices[randomNum] )


// Compare choices
    // If humanChoice is S and computerChoice is P OR
    // If humanChoice is R and computerChoice is S OR
    // If humanChoice is P and computerChoice is R
        // alert win
        // increase numWins
    //If humanChoice === computerChoice
        // alert tie
        // increase numTies
    //else
        // alert loss
        // increase numLosses

// ask user if they want to play again
    // if yes
        // restart game
    //if no
        // exit game