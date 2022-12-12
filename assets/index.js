let playerScore = 0
let computerScore = 0
let round = 1

const choices = ['rock', 'paper', 'scissors']

function gameState() {
  playerScore = 0
  computerScore = 0
  round = 1
}

function computerTurn() {return[Math.floor(Math.random) * 3]}

function playerTurn(){
  let player = prompt(`Round ${round}: Make your choice, Rock, Paper or Scissors`)

  if (!player) return null
  
  player = player.toLocaleLowerCase().trim()

  while (choices.indexOf(player) === - 1) {
    console.log("Invalid input. Please try again.")
    player = playerTurn()
  }
  return player
}

function checkWinner() {
  if (playerScore > computerScore) {
    gameState();
    return "Player wins the game!";
  } else if (computerScore > playerScore) {
    gameState();
    return "Computer wins the game";
  } else {
    gameState();
    return "The game is a draw!";
  }
}

function playGame(player, computer) {
  if (
    (player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")
  ) {
    playerScore = playerScore + 1;
    console.log(`Player wins Round ${round}`);
  } else if (
    (player === "rock" && computer === "rock") || (player === "paper" && computer === "paper") || (player === "scissors" && computer === "scissors")
  ) {
    console.log(`Round ${round} is a draw`);
  } else {
    computerScore = computerScore + 1;
    console.log(`Computer wins Round ${round}`);
  }
}

function startGame(){
  for (round; round < 6; round++) {
    const computerSelection = computerTurn();
    const player = playerTurn();

    if (player === null) {
      console.log("Game exited.");
      gameState();
      return;
    }
    playGame(player, computerSelection);
  }
  return console.log(checkWinner());
}
console.log(
  "Welcome to Rock, Paper, Scissors. Please start the game by typing game() in the console"
);
