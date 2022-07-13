function computerPlay () {
    const Hand = ["rock", "paper", "scissors"];
    let choise =  Hand[Math.floor(Math.random() * Hand.length)]
    return choise;
}

let computerSelection = '';
let playerSelection = '';
let PW = '';
let CW = '';
function playRound (playerSelection, computerSelection) {
    const Selection = playerSelection;
    if (Selection == "rock") {
        if (computerSelection == "scissors") {
            PW = PW + 1;
            document.getElementById("results").textContent = "You win! Rock beats Scissors";
        } else if (computerSelection == "paper") {
            CW = CW + 1;
           document.getElementById("results").textContent = "You lose! Paper beats Rock";
        } else if (computerSelection == "rock") {
            document.getElementById("results").textContent =  "Tie! rock";
        }
    }
    if (Selection == "paper") {
        if (computerSelection == "rock") {
            PW = PW + 1;
            document.getElementById("results").textContent =  "You win! Paper beats Rock";
        } else if (computerSelection == "scissors") {
            CW = CW + 1;
           document.getElementById("results").textContent =  "You lose! Scissors beats Paper";
        } else  if (computerSelection == "paper"){
            document.getElementById("results").textContent =  "Tie! paper";
        }
    }
    if (Selection == "scissors") {
        if (computerSelection == "paper") {
            PW = PW + 1;
            document.getElementById("results").textContent =  "You win! Scissors beats Paper";
        } else if (computerSelection == "rock") {
            CW = CW + 1;
            document.getElementById("results").textContent =  "You lose! Rock beats Scissors";
        } else  if (computerSelection == "scissors") {
            document.getElementById("results").textContent =  "Tie! scissors";
        }
    }
}

 function game () {

         (playRound(playerSelection,computerSelection));
      
 }


const rbtn = document.querySelector('#rbtn');
const pbtn = document.querySelector('#pbtn');
const sbtn = document.querySelector('#sbtn');


function assignRock () {
    playerSelection = "rock";
    computerSelection = computerPlay();
   
  }
function assignPaper() {
    playerSelection = "paper";
    computerSelection = computerPlay();
    
}
function assignScissors() {
    playerSelection = "scissors";
    computerSelection = computerPlay();
 
}
   rbtn.addEventListener('click', game);

    pbtn.addEventListener('click', game);

    sbtn.addEventListener('click', game);
    


  
