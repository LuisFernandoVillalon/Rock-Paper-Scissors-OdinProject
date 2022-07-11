function computerPlay () {
    const Hand = ["rock", "paper", "scissors"];
    let choise =  Hand[Math.floor(Math.random() * Hand.length)]
    return choise;
}
//console.log(computerPlay()) 
const playerSelection = "Rock";
const computerSelection = computerPlay();
function playRound (playerSelection, computerSelection) {
    const Selection = playerSelection.toLowerCase();
    if (Selection == "rock") {
        if (computerSelection == "scissors") {
            return "You win! Rock beats Scissors";
        } else if (computerSelection == "paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "Tie!";
        }
    }
    if (Selection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats Rock";
        } else if (computerSelection == "scissors") {
            return "You lose! Scissors beats Paper";
        } else {
            return "Tie!";
        }
    }
    if (Selection == "scissors") {
        if (computerSelection == "paper") {
            return "You win! Scissors beats Paper";
        } else if (computerSelection == "rock") {
            return "You lose! Rock beats Scissors";
        } else {
            return "Tie!";
        }
    }
}
//console.log(playRound(playerSelection,computerSelection))

