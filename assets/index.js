const playerCoice = prompt("Make your choice: ");
const playerInput = prompt("You play: ")
const computerCoice = alert("Computer plays: ");

function storeInput(playerCoice) {
    var answer = " ";
    switch(val) {
        case 1:
            answer = "rock";
            break;
        case 2:
            answer = "paper";
            break;
        case 3:
            answer = "scissors";
            break;
    }
    return answer
}