const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.round(Math.random() * 2)];
}

function getHumanChoice() {
  let choice = null;
  while (!choices.includes(choice)) {
    choice = prompt("Please enter your Rock, Paper or Scissors").toLowerCase();
  }
  return choice;
}

function playRound(humanChoice) {
  computerChoice = getComputerChoice();
  const result = document.querySelector(".result");
  showResult = (text) => {
    result.innerText = text;
  };
  if (computerChoice === humanChoice) {
    showResult(`It's a TIE you both choose ${computerChoice}`);
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    showResult(`You lose, rock beats scissors`);
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    showResult(`You lose, paper beats rock`);
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    showResult(`You lose, scissors beats paper`);
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    showResult(`You win, rock beats scissors`);
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    showResult(`You win, paper beats rock`);
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    showResult(`You win, scissors beats paper`);
    humanScore++;
  }
}

function playGame() {
  score = document.querySelector(".score");
  showScore = (text) => {
    score.innerText = text;
  };

  showScore(`Player: ${humanScore}\nComputer: ${computerScore}`);

  if (humanScore === 5) {
    showScore(`You WON!!! Congratulations\nScore: ${humanScore}`);
    buttons.forEach((button) => {
      buttons.forEach((button) => {
        button.disabled = true;
      });
    });
  } else if (computerScore == 5) {
    showScore(`Sorry, You LOST!!!!\nScore: ${humanScore}`);
    buttons.forEach((button) => {
      buttons.forEach((button) => {
        button.disabled = true;
      });
    });
  }
  !humanScore &&
    !computerScore &&
    buttons.forEach((button) => {
      buttons.forEach((button) => {
        button.disabled = false;
      });
    });
}

//////////////
// Handlers //
/////////////

function handleClick(e) {
  playRound(e.target.value);
  playGame();
}

const buttons = document.querySelectorAll(".selection button");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
