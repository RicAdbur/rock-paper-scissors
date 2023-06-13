var numWins = 0;
var numLosses = 0;
var numTies = 0;
var choices = ["Rock", "Paper", "Scissors"]
var keepPlaying = true

while (keepPlaying) {
    // Get input from Human user
    var humanChoice = prompt("Choose Rock, Paper, or Scissors")
    console.log(humanChoice)

    if (humanChoice) {
        // Random input generation from computer
        var randomNum = Math.floor(Math.random() * 3)
        var computerChoice = choices[randomNum]

        console.log("Human: " + humanChoice)
        console.log("Computer: " + computerChoice)


        // Compare choices
        if (
            humanChoice === "Scissors" && computerChoice === "Paper" ||
            humanChoice === "Rock" && computerChoice === "Scissors" ||
            humanChoice === "Paper" && computerChoice === "Rock"
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
    } else {
        keepPlaying = false
    }
}

// exit game
console.log("Play again soon!")