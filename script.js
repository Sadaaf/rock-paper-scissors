const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.round(Math.random() * 2)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  if (computerChoice === humanChoice) {
    showResult(`It's a TIE you both choose ${humanChoice}`);
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    showResult(`You win, ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    showResult(`You lose, ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
  showScore(`-------------------
    Score Board
    Player: ${humanScore}\nComputer: ${computerScore}
    -------------------`);

  disablePlayerMoves = () =>
    buttons.forEach((button) => {
      buttons.forEach((button) => {
        button.disabled = true;
      });
    });

  enableResetButton = () => {
    const resetButtonsPlace = document.querySelector(".reset");
    const resetButton = document.createElement("button");
    resetButton.innerText = "RESET";
    resetButton.addEventListener("click", handleReset);
    resetButtonsPlace.appendChild(resetButton);
  };

  if (humanScore === 5) {
    showScore(`-------------------
    Score Board
    You WON!!! 
    Congratulations
    Score: ${humanScore}
    -------------------`);
    disablePlayerMoves();
    enableResetButton();
  } else if (computerScore == 5) {
    showScore(`-------------------
    Score Board
    Sorry, You LOST!!!!
    Score: ${humanScore}
    -------------------`);
    disablePlayerMoves();
    enableResetButton();
  }
}

//////////////
// Handlers //
/////////////
function handleClick(e) {
  playRound(e.currentTarget.value);
  playGame();
}

function handleReset(_e) {
  humanScore = 0;
  computerScore = 0;
  buttons.forEach((button) => {
    buttons.forEach((button) => {
      button.disabled = false;
    });
  });
  const resetButton = document.querySelector(".reset button");
  showResult("");
  showScore(`-------------------
    Score Board
    Score: ${humanScore}
    -------------------`);
  resetButton.remove();
}

const buttons = document.querySelectorAll(".selection button");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

/////////////
// Helpers //
////////////
const result = document.querySelector(".result");
showResult = (text) => {
  result.innerText = text;
};

score = document.querySelector(".score");
showScore = (text) => {
  score.innerText = text;
};

playGame();
