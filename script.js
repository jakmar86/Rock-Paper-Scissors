document.addEventListener('DOMContentLoaded', () => {
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
        result_p.innerHTML = `You chose ${userChoice}. Comp chose ${computerChoice}. <br> <span style="color:#4dcc7d">You Win!</span>`;
        document.getElementById(userChoice).style.borderColor = "#4dcc7d";
        setTimeout(function() { document.getElementById(userChoice).style.borderColor = "white"; }, 500);
    }

    function lose(userChoice, computerChoice) {
        computerScore++;
        userScore_span.innerText = userScore;
        computerScore_span.innerText = computerScore;
        result_p.innerHTML = `You chose ${userChoice}. Comp chose ${computerChoice}. <br> <span style="color:#ff5e5e">You Lost!</span>`;
        document.getElementById(userChoice).style.borderColor = "#ff5e5e";
        setTimeout(function() { document.getElementById(userChoice).style.borderColor = "white"; }, 500);
    }

    function draw(userChoice, computerChoice) {
        result_p.innerHTML = `You both chose ${userChoice}. <br> <span style="color:gray">It's a Draw!</span>`;
        document.getElementById(userChoice).style.borderColor = "gray";
        setTimeout(function() { document.getElementById(userChoice).style.borderColor = "white"; }, 500);
    }

    function game(userChoice) {
        const computerChoice = getComputerChoice();
        
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

    // 3. Adding Event Listeners
    
    // We add checks to ensure elements exist before adding listeners
    if(rock_btn) rock_btn.addEventListener('click', () => game("rock"));
    if(paper_btn) paper_btn.addEventListener('click', () => game("paper"));
    if(scissors_btn) scissors_btn.addEventListener('click', () => game("scissors"));
    
    if(reset_btn) {
        reset_btn.addEventListener('click', () => resetGame());
    } else {
        console.error("Reset button not found!");
    }
});
