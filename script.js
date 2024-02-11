function getComputerChoice() {
    const computerChoice = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[random]

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "Draw";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "you lose";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "you win";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "win";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "you lose";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "you lose"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "you win";
    } else {
        return "invalid selection"
    }
}

const playerSelection = "rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));
