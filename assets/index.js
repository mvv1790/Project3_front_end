
let playerScore = 0 
let computerScore = 0
let playerChoice
let computerChoice
let round = 1

const choices = ["rock", "paper", "scissors"]

function gameState() {
    playerScore = 0
    computerScore = 0
    round = 1
}

function playerTurn() {
    let player = prompt(`Round ${round}: Make your choice: Rock, Paper or Scissors.`)


    if (!player) return null

    player = player.toLowerCase().trim()

    while (choices.indexOf(player) === -1){
        console.log("Wrong input. Please try again.")
        player = playerTurn()
    }
    return player
}

function computerTurn() {
    return computerTurn = Math.floor(Math.random() * 3)
}

function playRound() {
    switch (playerChoice + computerChoice) {
        case 'scissors_paper':
        case 'rock_scrissors':
        case 'paper_rock':
            playerScore += 1
            break
        case 'paper_scissors':
        case 'scissors_rock':
        case 'rock_paper':
            computerScore += 1
            break
        case 'scissors_scrissors':
        case 'rock_rock':
        case 'paper_paper':
            playerScore += 0
            computerScore += 0
            break
    }
}

function startGame() {
    for (round; round < 6; round ++) {
        const computerChoice = computerTurn();
        const player = playerChoice();

        if ( player === null) {
            console.log("Game exited.");
            gameState()
            return
        }

        playRound(player, computerChoice)
    }
    return console.log
}

console.log("Welcome! Please select Rock, Paper or Scissors.")