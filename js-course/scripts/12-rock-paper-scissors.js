let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
};
updateScore();

function updateScore() {
    document.querySelector(
        ".js-score"
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

let isAutoPlaying = false;
let intervalID;

function autoPlay() {
    let autoPlayButton = document.querySelector(".js-auto-play");
    if (!isAutoPlaying) {
        autoPlayButton.innerHTML = "Stop Playing";
        intervalID = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        autoPlayButton.innerHTML = "Auto Play";
        clearInterval(intervalID);
        isAutoPlaying = false;
    }
}

document.body.addEventListener("keydown", (event) => {
    key = event.key;
    if (key === "r") {
        playGame("rock");
    } else if (key === "p") {
        playGame("paper");
    } else if (key === "s") {
        playGame("scissors");
    } else if (key === "a") {
        autoPlay();
    } else if (key === "Backspace") {
        resetScore();
    }
});

document.querySelector(".js-rock-btn").addEventListener("click", () => {
    playGame("rock");
});
document.querySelector(".js-scissors-btn").addEventListener("click", () => {
    playGame("scissors");
});
document.querySelector(".js-paper-btn").addEventListener("click", () => {
    playGame("paper");
});

document.querySelector(".js-auto-play").addEventListener("click", () => {
    autoPlay();
});

document.querySelector(".js-reset-score").addEventListener("click", () => {
    resetScore();
});

function resetScore() {
    let confirmationDiv = document.querySelector(".js-reset-score-confirm");
    console.log("ehello");
    confirmationDiv.innerHTML = `Are you sure you want to reset the score? 
    <button class="reset-score js-yes-btn">Yes</button>
    <button class="reset-score js-no-btn">No</button>`;
    console.log("ehello");

    document.querySelector(".js-yes-btn").addEventListener("click", () => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem("score");
        updateScore();
        confirmationDiv.innerHTML = "";
    });

    document.querySelector(".js-no-btn").addEventListener("click", () => {
        confirmationDiv.innerHTML = "";
    });
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = "";

    if (playerMove === "scissors") {
        if (computerMove === "rock") {
            result = "You lose.";
        } else if (computerMove === "paper") {
            result = "You win.";
        } else if (computerMove === "scissors") {
            result = "Tie.";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            result = "You win.";
        } else if (computerMove === "paper") {
            result = "Tie.";
        } else if (computerMove === "scissors") {
            result = "You lose.";
        }
    } else if (playerMove === "rock") {
        if (computerMove === "rock") {
            result = "Tie.";
        } else if (computerMove === "paper") {
            result = "You lose.";
        } else if (computerMove === "scissors") {
            result = "You win.";
        }
    }

    if (result === "You win.") {
        score.wins += 1;
    } else if (result === "You lose.") {
        score.losses += 1;
    } else if (result === "Tie.") {
        score.ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScore();

    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(".js-moves").innerHTML = `You
    <img class="move-icon" src="images/${playerMove}-emoji.png" alt="" />
    <img class="move-icon" src="images/${computerMove}-emoji.png" alt="" />
    Computer`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "scissors";
    }

    return computerMove;
}
