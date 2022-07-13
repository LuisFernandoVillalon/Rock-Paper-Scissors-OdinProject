

function computerPlay () {
    const Hand = ["rock", "paper", "scissors"];
    let choise =  Hand[Math.floor(Math.random() * Hand.length)]
    return choise;
}

//console.log(computerPlay()) 
let computerSelection = '';
let playerSelection = '';
let PW = '';
let CW = '';
function playRound (playerSelection, computerSelection) {
    const Selection = playerSelection;
    if (Selection == "rock") {
        if (computerSelection == "scissors") {
            PW = PW + 1;
             console.log( "You win! Rock beats Scissors");
        } else if (computerSelection == "paper") {
            CW = CW + 1;
           console.log( "You lose! Paper beats Rock");
        } else if (computerSelection == "rock") {
            console.log( "Tie! rock");
        }
    }
    if (Selection == "paper") {
        if (computerSelection == "rock") {
            PW = PW + 1;
            console.log( "You win! Paper beats Rock");
        } else if (computerSelection == "scissors") {
            CW = CW + 1;
           console.log( "You lose! Scissors beats Paper");
        } else  if (computerSelection == "paper"){
            console.log( "Tie! paper");
        }
    }
    if (Selection == "scissors") {
        if (computerSelection == "paper") {
            PW = PW + 1;
            console.log( "You win! Scissors beats Paper");
        } else if (computerSelection == "rock") {
            CW = CW + 1;
            console.log( "You lose! Rock beats Scissors");
        } else  if (computerSelection == "scissors") {
            console.log( "Tie! scissors");
        }
    }
}
//console.log(playRound(playerSelection,computerSelection))
 function game () {
//     for (let i = 0; i < 5; ++i) {
//         let playerSelection = prompt('Best out of 5! Rock, Paper, Scissors! Go!');
         computerSelection = computerPlay();
         (playRound(playerSelection,computerSelection));
//     }
//     if (PW > CW) {
//         console.log("You win, you beat the computer out of 5!")
//     } else if (PW < CW) {
//         console.log("You lose, the computer beat you out of 5!")
//     } else {
//         console.log("It's a tie out of 5!")
//     }
 }
// (game())
const Results = document.querySelector('#Results');
const container = document.createElement('div');

const rbtn = document.querySelector('#rbtn');
const pbtn = document.querySelector('#pbtn');
const sbtn = document.querySelector('#sbtn');
Results.appendChild(container);
Results.appendChild(rbtn);
Results.appendChild(pbtn);
Results.appendChild(sbtn);

function assignRock () {
    playerSelection = "rock";
  }
function assignPaper() {
    playerSelection = "paper";
}
function assignScissors() {
    playerSelection = "scissors";
}
   //playerSelection = "rock";
   rbtn.onclick = () => game();

   //playerSelection = "paper";
    pbtn.addEventListener('click', game);

   //playerSelection = "scissors";
    sbtn.addEventListener('click', game);
    



    
