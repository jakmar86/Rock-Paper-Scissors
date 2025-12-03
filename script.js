// 1. Caching the DOM (storing HTML elements in variables)
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const result_p = document.getElementById("result-text");
const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");
const reset_btn = document.getElementById("reset-score");

// 2. The core game logic functions

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerText = userScore;
    computerScore_span.innerText = computerScore;
    result_p.innerHTML = `You chose ${userChoice}. Comp chose ${computerChoice}. <br> <span style="color:green">You Win!</span>`;
    document.getElementById(userChoice).style.borderColor = "green";
    setTimeout(function() { document.getElementById(userChoice).style.borderColor = "#333"; }, 500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerText = userScore;
    computerScore_span.innerText = computerScore;
    result_p.innerHTML = `You chose ${userChoice}. Comp chose ${computerChoice}. <br> <span style="color:red">You Lost!</span>`;
    document.getElementById(userChoice).style.borderColor = "red";
    setTimeout(function() { document.getElementById(userChoice).style.borderColor = "#333"; }, 500);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `You both chose ${userChoice}. <br> <span style="color:gray">It's a Draw!</span>`;
    document.getElementById(userChoice).style.borderColor = "gray";
    setTimeout(function() { document.getElementById(userChoice).style.borderColor = "#333"; }, 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    
    // Logic to determine winner
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
            
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerText = 0;
    computerScore_span.innerText = 0;
    result_p.innerText = "Make your move!";
}

// 3. Adding Event Listeners (waiting for clicks)

function main() {
    rock_btn.addEventListener('click', function() {
        game("rock");
    });

    paper_btn.addEventListener('click', function() {
        game("paper");
    });

    scissors_btn.addEventListener('click', function() {
        game("scissors");
    });

    reset_btn.addEventListener('click', function() {
        resetGame();
    });
}

main();
