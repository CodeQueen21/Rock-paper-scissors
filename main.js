//Used as refference for this project
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
const roundResultsContainer = document.getElementById('roundResults')
const roundResults = document.getElementById('roundResults').querySelector('h2');
const resultsContainer = document.getElementById('chosen-option');
const userScore = document.getElementById('userPoints').querySelector('p');
const roundNum = document.getElementById('roundPoints').querySelector('p');
const opponentScore = document.getElementById('opponentPoints').querySelector('p');
let userPoints = 0;
let computerPoints = 0;
let round = 1;
let options = document.getElementById('options');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let playerSelection;
let computerSelection;
const choices = ["rock", "paper", "scissors"];
const yourResults = document.getElementById('your-choice').querySelector('p');
const opponentResults = document.getElementById('opponent-choice').querySelector('p');
const nextRoundBtn = document.getElementById('next-round').querySelector('button');
const gameResultsContainer = document.getElementById('gameResultsContainer');
const gameResults = document.getElementById('gameResults')
const playAgainBtn = document.getElementById('playAgainBtn');

function addGameStyle() {
    body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/background.jpg)';
    titleContainer.style.backgroundColor = 'transparent';
    title.style.color = 'white';
}

function removeGameContainer() {
    playButton.style.display = 'none';
    playButtonContainer.style.display = 'none';
    gameContainer.style.display = 'block';
    roundResultsContainer.style.display = 'none'
    resultsContainer.style.display = 'none';
    nextRoundBtn.style.display = 'none';
}

function computerPlay() {
    let selected = choices[Math.floor(Math.random()*choices.length)];
    return selected;
  }

  computerSelection = computerPlay();

  function playRound(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (player === "rock" && computer === "paper") {
        return "You Lose!";
    }  else if (player === "paper" && computer === "rock") {
        return "You Win!";
    } else if (player === "paper" && computer === "scissors") {
        return "You Lose!";
    } else if (player === "scissors" && computer === "paper") {
       return "You Win!";
   } else if (player === "rock" && computer === "scissors") {
       return "You Win!";
   } else if (player === "scissors" && computer === "rock") {
       return "You Lose!";
   } else {
      return "Oops, something went wrong!";
    }
}

function playGame() {
    rock.addEventListener('click', () => {
        playerSelection = 'rock';
        opponentResults.textContent = computerSelection;
        playRound(playerSelection, computerSelection)
        scoreCalc();
        paper.style.display = 'none';
        scissors.style.display = 'none';
        userScore.textContent = userPoints;
        opponentScore.textContent = computerPoints;
        resultsContainer.style.display = 'block';
        yourResults.textContent = 'rock';
        nextRoundBtn.style.display = 'block';
        roundResultsContainer.style.display = 'block'
        roundResults.textContent = playRound(playerSelection, computerSelection)
    })
    
    paper.addEventListener('click', () => {
       playerSelection = 'paper';
       opponentResults.textContent = computerSelection;
       playRound(playerSelection, computerSelection)
       scoreCalc();
       userScore.textContent = userPoints;
       opponentScore.textContent = computerPoints;
       rock.style.display = 'none';
       scissors.style.display = 'none';
       resultsContainer.style.display = 'block';
       yourResults.textContent = 'paper';
       nextRoundBtn.style.display = 'block';
       roundResultsContainer.style.display = 'block';
       roundResults.textContent = playRound(playerSelection, computerSelection)
    })
    
    scissors.addEventListener('click', () => {
       playerSelection = 'scissors';
       playRound(playerSelection, computerSelection)
       scoreCalc();
       userScore.textContent = userPoints;
       opponentScore.textContent = computerPoints;
       rock.style.display = 'none';
       paper.style.display = 'none';
       resultsContainer.style.display = 'block';
       yourResults.textContent = 'scissors';
       opponentResults.textContent = computerSelection;
       nextRoundBtn.style.display = 'block';
       roundResultsContainer.style.display = 'block'
       roundResults.textContent = playRound(playerSelection, computerSelection)
    })
}

function scoreCalc() {
    playRound(playerSelection, computerSelection);
    
    if (playRound(playerSelection, computerSelection) === "It's a tie!") {
       return [userPoints++, computerPoints++];
     } else if (playRound(playerSelection, computerSelection) === "You Win!") {
       return userPoints++;
     } else {
        return computerPoints++;
   } 
}

playButton.addEventListener('click', () => {
    addGameStyle();
    removeGameContainer();
    playGame();
})
















 










