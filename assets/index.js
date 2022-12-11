let playerScore = 0
let computerScore = 0
let round = 1

const choices = ['rock', 'paper', 'scissors']

function gameState() {
  playerScore = 0
  computerScore = 0
  round = 1
}

function computerTurn() {return turn[Math.floor(Math.random) * 3]}

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