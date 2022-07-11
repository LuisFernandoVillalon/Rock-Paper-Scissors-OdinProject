function computerPlay () {
    const Hand = ["rock", "paper", "scissors"];
    let choise =  Hand[Math.floor(Math.random() * Hand.length)]
    return choise;
}
//console.log(computerPlay()) 
let computerSelection = '';
let PW = '';
let CW = '';
function playRound (playerSelection, computerSelection) {
    const Selection = playerSelection.toLowerCase();
    if (Selection == "rock") {
        if (computerSelection == "scissors") {
            PW = PW + 1;
            return "You win! Rock beats Scissors";
        } else if (computerSelection == "paper") {
            CW = CW + 1;
            return "You lose! Paper beats Rock";
        } else {
            return "Tie!";
        }
    }
    if (Selection == "paper") {
        if (computerSelection == "rock") {
            PW = PW + 1;
            return "You win! Paper beats Rock";
        } else if (computerSelection == "scissors") {
            CW = CW + 1;
            return "You lose! Scissors beats Paper";
        } else {
            return "Tie!";
        }
    }
    if (Selection == "scissors") {
        if (computerSelection == "paper") {
            PW = PW + 1;
            return "You win! Scissors beats Paper";
        } else if (computerSelection == "rock") {
            CW = CW + 1;
            return "You lose! Rock beats Scissors";
        } else {
            return "Tie!";
        }
    }
}
//console.log(playRound(playerSelection,computerSelection))
function game () {
    for (let i = 0; i < 5; ++i) {
        let playerSelection = prompt('Best out of 5! Rock, Paper, Scissors! Go!');
        computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection))
    }
    if (PW > CW) {
        console.log("You win, you beat the computer out of 5!")
    } else if (PW < CW) {
        console.log("You lose, the computer beat you out of 5!")
    } else {
        console.log("It's a tie out of 5!")
    }
}
(game())
