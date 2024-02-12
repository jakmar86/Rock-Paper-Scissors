
function getComputerChoice() {
    const computerChoice = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[random]
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose: Rock, Paper or Scissors?");
    return playerChoice.toLowerCase();
}

function playRound(getPlayerChoice, getComputerChoice) {
    switch (getPlayerChoice) {
        case "rock":
            if (getComputerChoice == "rock") {
                return "It's a draw";
            } else if (getComputerChoice == "paper") {
                return "You lose";
            } else {
                return "You win";
            } 
            break;
        case "paper":
            if (getComputerChoice == "rock") {
                return "You win";
            } else if (getComputerChoice == "paper") {
                return "It's a draw";
            } else {
                return "You lose";
            }
            break;      
        case "scissors":
            if (getComputerChoice == "rock") {
                return "You lose";
            } else if (getComputerChoice == "paper") {
                return "you win";
            } else {
                return "It's a draw";
            }
            break;
    }
}


console.log(playRound(getPlayerChoice(), getComputerChoice()));
