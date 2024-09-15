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

function playRound() {
  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  if (computerChoice === humanChoice) {
    alert(`It's a TIE you both choose ${computerChoice}`);
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    alert(`You lose, rock beats scissors`);
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    alert(`You lose, paper beats rock`);
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    alert(`You lose, scissors beats paper`);
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    alert(`You win, rock beats scissors`);
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    alert(`You win, paper beats rock`);
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    alert(`You win, scissors beats paper`);
    humanScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (humanScore > computerScore) {
    alert(`You WON!!! Congratulations\nScore: ${humanScore}`);
  } else if (humanScore < computerScore) {
    alert(`Sorry, You LOST!!!!\nScore: ${humanScore}`);
  }
}

playGame();
