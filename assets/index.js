let round = 1;
let playerScore = 0;
let computerScore = 0;
let computerChoice

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  return choices[Math.floor(Math.random() * 3) + 1] 
}

function firstMessage(){
  alert(`Welcome to Rock, Paper, Scissors.`)
}

function lastMessage(){

    alert("Thank you for playing")

}

function playerTurn() {
  let player = prompt(
    `Round ${round}: Please type either Rock, Paper or Scissors:`
  );

  if (!player) return null;

  player = player.toLowerCase().trim();

  while (choices.indexOf(player) === -1) {
    console.log("Wrong input, please try again.");
    player = playerTurn();
  }
  return player;
}

function gameState() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
}

function checkWinner() {
  if (playerScore > computerScore) {
    gameState();
    return "Player wins.";
  } else if (playerScore < computerScore) {
    gameState();
    return "Computer wins.";
  } else {
    gameState();
    return "It's a draw!";
  }
}

function play(player, computer) {
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore = playerScore + 1;
    console.log(`Player wins round ${round}.`);
  } else if (
    (player === "scissors" && computer === "rock") ||
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissors")
  ) {
    console.log(`Computer wins round ${round}.`);
  } else {
    computerScore = computerScore + 1;
    console.log(`Round ${round} is a draw.`);
  }
}

function startGame() {
  firstMessage()
  for (round; round < 6; round++) {
    const computerTurn = computerPlay();
    const player = playerTurn();

    if (player === null) {
      console.log("Game exited.");
      gameState();
      return;
    }

    play(player, computerTurn);
    

  }
  alert(checkWinner());
  lastMessage()
}
alert("To begin the game please input startGame() to the console")
