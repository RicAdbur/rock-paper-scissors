var numWins = 0;
var numLosses = 0;
var numTies = 0;

var choices = ["R", "P", "S"]

var keepPlaying = true
while (keepPlaying) {
    // Get input from Human user
    var humanChoice = prompt("Choose R, P, or S")
    console.log(humanChoice)

    // Random input generation from computer
    var randomNum = Math.floor(Math.random() * 3)
    var computerChoice = choices[randomNum]

    console.log("Human: " + humanChoice)
    console.log("Computer: " + computerChoice)


    // Compare choices
    if (
        humanChoice === "S" && computerChoice === "P" ||
        humanChoice === "R" && computerChoice === "S" ||
        humanChoice === "P" && computerChoice === "R"
    ) {
        alert("You win!")
        numWins++
    } else if (humanChoice === computerChoice) {
        alert("Round tied!")
        numTies++
    } else {
        alert("You lost!")
        numLosses++
    }

    //show score
    alert("Wins: " + numWins + "\nTies: " + numTies + "\nLosses: " + numLosses)

    // restart game
    keepPlaying = confirm("Do you want to play again?")
}

    // exit game
console.log("Play again soon!")