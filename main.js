const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  let computerChoice = choices[Math.floor(Math.random()*choices.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
     if (playerChoice === computerSelection) {
         return "it's a tie!";
     } else if (playerChoice === "rock" && computerSelection === "paper") {
         return "You Lose!";
     }  else if (playerChoice === "paper" && computerSelection === "rock") {
         return "You Won!";
     } else if (playerChoice === "paper" && computerSelection === "scissors") {
         return "You Lose!";
     } else if (playerChoice === "scissors" && computerSelection === "paper") {
        return "You Win!";
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        return "You Win!";
    } else if (playerChoice === "scissors" && computerSelection === "rock") {
        return "You Lose!";
    } else {
       return "Oops, something went wrong!";
     }
}
