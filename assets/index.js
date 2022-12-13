let round = 1
let playerScore = 0
let computerScore = 0

const choices = ['rock', 'paper', 'scissors']

function computerTurn() {return[Math.floor(Math.random) * 3]}

function playerTurn(){
  let player = prompt(`Round ${round} of 5: Make your choice, Rock, Paper or Scissors`)

  if (!player) return null
  
  player = player.toLowerCase().trim()

  while (choices.indexOf(player) === - 1) {
    console.log("Invalid input. Please try again.")
    player = playerTurn()
  }
  return player
}

function gameState() {
  playerScore = 0
  computerScore = 0
  round = 1
}

function gameScore() {
  if (playerScore > computerScore) {
    gameState()
    return "Player wins the game!"
  } else if (playerScore < computerScore) {
    gameState()
    return "Computer wins the game"
  } else {
    gameState()
    return "The game is a draw!"
  }
}

function playGame(player, computer) {
  if (
  (computer === "rock" && player === "paper") ||
  (computer === "scissors" && player === "rock") ||
  (computer === "paper" && player === "scissors")
  )
  playerScore = playerScore + 1
  console.log(`Player wins the round ${round}`)
  
  if (
    (computer === "paper" && player === "rock") ||
    (computer === "rock" && player === "scissors") ||
    (computer === "scissors" && player === "paper")

  )
  computerScore = computerScore + 1
  console.log(`Computer wins the round ${round}`)
  if (player === computer) {
    console.log(`Round ${round} is a draw.`)
  }
}

function startGame(){
  for (round; round < 6; round++) {
    const computerChoice = computerTurn()
    const player = playerTurn()

    if (player === null) {
      console.log("Game exited.")
      gameState()
      return
    }
    playGame(player, computerChoice)
  }
  return console.log(gameScore())
}
console.log(
  "Welcome to Rock, Paper, Scissors."
);
