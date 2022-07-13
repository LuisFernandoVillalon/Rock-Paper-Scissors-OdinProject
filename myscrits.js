
let computerSelection = '';
let playerSelection = '';
let PW = 0;
let CW = 0;
function playRound (playerSelection, computerSelection) {
    const Selection = playerSelection;
    
    if (Selection == "rock") {
        if (computerSelection == "scissors") {
            PW = PW + 1;
            document.getElementById("results").textContent = "You win! Rock beats Scissors, you have "+PW+" wins.";
        } else if (computerSelection == "paper") {
            CW = CW + 1;
           document.getElementById("results").textContent = "You lose! Paper beats Rock, the computer has "+CW+" wins.";
        } else if (computerSelection == "rock") {
            document.getElementById("results").textContent =  "Tie! rock";
        }
    }
    if (Selection == "paper") {
        if (computerSelection == "rock") {
            PW = PW + 1;
            document.getElementById("results").textContent =  "You win! Paper beats Rock, you have "+PW+" wins.";
        } else if (computerSelection == "scissors") {
            CW = CW + 1;
           document.getElementById("results").textContent =  "You lose! Scissors beats Paper, the computer has "+CW+" wins.";
        } else  if (computerSelection == "paper"){
            document.getElementById("results").textContent =  "Tie! paper";
        }
    }
    if (Selection == "scissors") {
        if (computerSelection == "paper") {
             PW = PW + 1;
            document.getElementById("results").textContent =  "You win! Scissors beats Paper, you have "+PW+" wins.";
        } else if (computerSelection == "rock") {
            CW = CW + 1;
            document.getElementById("results").textContent =  "You lose! Rock beats Scissors, the computer has "+CW+" wins.";
        } else  if (computerSelection == "scissors") {
            document.getElementById("results").textContent =  "Tie! scissors";
        }
    }
}
function displayResults() {
    if (PW==5) { 
        document.getElementById("results").textContent = "Congrats! You got "+PW+" wins before the computer.";
        document.getElementById("rbtn").disabled = true;
        document.getElementById("pbtn").disabled = true;
        document.getElementById("sbtn").disabled = true;
    } else if (CW==5) {
        document.getElementById("results").textContent = "Game Over! The computer got "+CW+" wins before you.";
        document.getElementById("rbtn").disabled = true;
        document.getElementById("pbtn").disabled = true;
        document.getElementById("sbtn").disabled = true;
    }
}


 function game () {
    
        playRound (playerSelection, computerSelection);
        displayResults();
  }


const rbtn = document.querySelector('#rbtn');
const pbtn = document.querySelector('#pbtn');
const sbtn = document.querySelector('#sbtn');

function computerPlay () {
    const Hand = ["rock", "paper", "scissors"];
    let choise =  Hand[Math.floor(Math.random() * Hand.length)]
    return choise;
}

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




  
