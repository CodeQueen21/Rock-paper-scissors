const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  let computerChoice = choices[Math.floor(Math.random()*choices.length)];
  return computerChoice;
}


