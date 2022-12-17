let round = 1
let playerScore = 0
let computerScore = 0
let computerChoice

const choices = ["rock", "paper", "scissors"]

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

  if (!player) return null

  player = player.toLowerCase().trim()

  if (player === undefined && player === null) {
    console.log("Wrong input, please try again.")
    playerTurn()
  }

  while (choices.indexOf(player) === -1) {
    console.log("Wrong input, please try again.")
    player = playerTurn()
  }
  return player
}

function gameState() {
  playerScore = 0
  computerScore = 0
  round = 1
}

function checkWinner() {
  if (playerScore > computerScore) {
    gameState()
    return "Player wins."
  } else if (computerScore > playerScore) {
    gameState()
    return "Computer wins."
  } else {
    gameState()
    return "It's a draw!"
  }
}

function play(player, computer) {
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore = playerScore + 1
    console.log(`Player wins round ${round}.`)
  } else if (
    (player === "scissors" && computer === "rock") ||
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissors")
  ) {
    computerScore = computerScore + 1
    console.log(`Computer wins round ${round}.`)
  } else {
    console.log(`Round ${round} is a draw.`)
  } 
}

function terminateGame() {
  const player = playerTurn()
  if (player !== null) {
    
    playerTurn()
    return
  }
  console.log("Terminated")
  gameState()
  return
}

function startGame() {
  firstMessage()
  for (round; round < 6; round++) {
    const computerTurn = computerPlay()
    const player = playerTurn()

    if (player === null || player === undefined) {
      alert("Empty input will result in termination of the application.")
      terminateGame()
      alert("No input detected, application terminated.")
      return
    }

    play(player, computerTurn)
    

  }
  alert(checkWinner())
  lastMessage()
}
alert("To begin the game please input startGame() to the console")