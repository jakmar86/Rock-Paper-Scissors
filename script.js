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
        return "invalid selection";
    }
}

function playGame() {
    let games == 0;
    let player == 0;
    let computer == 0;
    if (playRound("rock", getComputerChoice()) == "you lose") {
        games++;
        computer++;
        console.log(`Player ${player} - ${computer} Computer`);
    } else if (playRound("rock", getComputerChoice()) == "you win") {
        games++;
        player++;
        console.log(`Player ${player} - ${computer} Computer`);
    } else if (playRound("rock", getComputerChoice()) == "draw") {
        games++;
        console.log(`Player ${player} - ${computer} Computer`);
    }
    if (playRound("rock", getComputerChoice()) == "you lose") {
        games++;
        computer++;
        console.log(`Player ${player} - ${computer} Computer`);
    } else if (playRound("rock", getComputerChoice()) == "you win") {
        games++;
        player++;
        console.log(`Player ${player} - ${computer} Computer`);
    } else if (playRound("rock", getComputerChoice()) == "draw") {
        games++;
        console.log(`Player ${player} - ${computer} Computer`);
    }
    if (playRound("rock", getComputerChoice()) == "you lose") {
        games++;
        computer++;
        console.log(`Player ${player} - ${computer} Computer`);
    } else if (playRound("rock", getComputerChoice()) == "you win") {
        games++;
        player++;
        console.log(`Player ${player} - ${computer} Computer`);
    } else if (playRound("rock", getComputerChoice()) == "draw") {
        games++;
        console.log(`Player ${player} - ${computer} Computer`);
    }
    if (playRound("rock", getComputerChoice()) == "you lose") {
        games++;
        computer++;
        console.log(`Player ${player} - ${computer} Computer`);
    } else if (playRound("rock", getComputerChoice()) == "you win") {
        games++;
        player++;
        console.log(`Player ${player} - ${computer} Computer`);
    } else if (playRound("rock", getComputerChoice()) == "draw") {
        games++;
        console.log(`Player ${player} - ${computer} Computer`);
    }
    if (playRound("rock", getComputerChoice()) == "you lose") {
        games++;
        computer++;
        console.log(`Player ${player} - ${computer} Computer`);
    } else if (playRound("rock", getComputerChoice()) == "you win") {
        games++;
        player++;
        console.log(`Player ${player} - ${computer} Computer`);
    } else if (playRound("rock", getComputerChoice()) == "draw") {
        games++;
        console.log(`Player ${player} - ${computer} Computer`);
    }

}



const playerSelection = "rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));
