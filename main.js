/*
const choices = ["rock", "paper", "scissors"];
let userPoints = 0;
let computerPoints = 0;

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

function game() {
   let playerSelection = window.prompt("Please choose rock, paper or scissors");

   playRound(playerSelection, computerPlay());
   
   if (playRound(playerSelection, computerPlay()) === "it's a tie!") {
      return [userPoints++, computerPoints++];
    } else if (playRound(playerSelection, computerPlay()) === "You Won!") {
      return userPoints++;
    } else {
       return computerPoints++;
  } 
}

function playGame() {
    let i = 0;
    while (i < 5) {
        game();
        i++;
    }
    if (userPoints > computerPoints) {
        console.log("Congradulations! You Won!!!");
    } else {
        console.log("awwe, looks like you lost. Better luck next time.")
    }
  }
*/
//playGame();

const playButton = document.querySelector('button');
const body = document.querySelector('body');
const titleContainer = document.getElementById('title');
const title = document.querySelector('h1');
const gameContainer = document.getElementById('game-container');
const playButtonContainer = document.getElementById('play-btn-container');
const chosenOptionContainer = document.getElementById('chosen-option');
const nextRoundBtn = document.getElementById('next-round');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', () => {
    rock.style.backgroundColor = 'red';
})

function addGameStyle() {
    body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/background.jpg)';
    titleContainer.style.backgroundColor = 'transparent';
    title.style.color = 'white';
}

function removeGameContainer() {
    playButton.style.display = 'none';
    playButtonContainer.style.display = 'none';
    gameContainer.style.display = 'block';
    chosenOptionContainer.style.display = 'none';
    nextRoundBtn.style.display = 'none';
}

playButton.addEventListener('click', () => {
    addGameStyle();
    removeGameContainer();
})