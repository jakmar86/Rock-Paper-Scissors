
function getComputerChoice() {
    const computerChoice = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[random]
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose: Rock, Paper or Scissors?");
    return playerChoice.toLowerCase();
}

function playRound() {
    const playerChoice = getPlayerChoice(); 
    const computerChoice = getComputerChoice(); 

    switch (playerChoice) {
        case "rock":
            if (computerChoice === "rock") {
                return "It's a draw";
            } else if (computerChoice === "paper") {
                return "You lose";
            } else {
                return "You win";
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                return "You win";
            } else if (computerChoice === "paper") {
                return "It's a draw";
            } else {
                return "You lose";
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                return "You lose";
            } else if (computerChoice === "paper") {
                return "You win";
            } else {
                return "It's a draw";
            }
            break;
        default:
            return "Invalid choice. Please choose rock, paper, or scissors.";
    }
}


function playGame() {
    let playerCounter = 0;
    let computerCounter = 0;
 

    while (playerCounter < 5 && computerCounter < 5) {
        let result = playRound();
        if (result === "You win") {
            playerCounter++;
            console.log("You win this round");
        } else if (result === "You lose") {
            computerCounter++;
            console.log("You lose this round");
        } else {
            console.log("It's a draw this round");
        }
        console.log(`Player ${playerCounter} - Computer ${computerCounter}`);

    }

    if (playerCounter > computerCounter) {
        console.log("You won the game!");
    } else if (playerCounter < computerCounter) {
        console.log("You lost the game.");
    } else {
        console.log("The game ended in a draw.");
    }
}
  

playGame()
