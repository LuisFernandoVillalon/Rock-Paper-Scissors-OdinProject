let computerSelection = '';
let playerSelection = '';
let PW = 0;
let CW = 0;
function playRound (playerSelection, computerSelection) {
    const Selection = playerSelection;    
    if (Selection == "rock") {
        document.getElementById("loadingImage").src = "../imgs/rock.jpg";
        if (computerSelection == "scissors") {
            PW = PW + 1;
            document.getElementById("results").textContent = "ROUND WON! Rock beats Scissors, you have "+PW+" wins.";
            document.getElementById("comp-results").textContent = "I'll get you next time! I still have "+CW+" wins.";
        } else if (computerSelection == "paper") {
            CW = CW + 1;
           document.getElementById("results").textContent = "ROUND LOST! Paper beats Rock, you have "+PW+" wins.";
           document.getElementById("comp-results").textContent = "I get stronger after every round, you fool! I have "+CW+" wins.";
        } else if (computerSelection == "rock") {
            document.getElementById("results").textContent =  "Tie, rock! No points awarded.";
            document.getElementById("comp-results").textContent = "Well this is awkward...";
        }
    }
    if (Selection == "paper") {
        document.getElementById("loadingImage").src = "../imgs/paper.jpg";
        if (computerSelection == "rock") {
            PW = PW + 1;
            document.getElementById("results").textContent =  "ROUND WON! Paper beats Rock, you have "+PW+" wins.";
            document.getElementById("comp-results").textContent = "You mave have won this round, but not the battle! I still have "+CW+" wins.";
        } else if (computerSelection == "scissors") {
            CW = CW + 1;
           document.getElementById("results").textContent =  "ROUND LOST! Scissors beats Paper, you have "+PW+" wins.";
           document.getElementById("comp-results").textContent = "You fool! Just give up it's useless! I have "+CW+" wins.";
        } else  if (computerSelection == "paper"){
            document.getElementById("results").textContent =  "Tie, paper! No points awarded.";
            document.getElementById("comp-results").textContent = "Imitation isn't flattery, it's just annoyin' me - Drizzy Drake";
        }
    }
    if (Selection == "scissors") {
        document.getElementById("loadingImage").src = "../imgs/scissors.jpg";
        if (computerSelection == "paper") {
             PW = PW + 1;
            document.getElementById("results").textContent =  "ROUND WON! Scissors beats Paper, you have "+PW+" wins.";
            document.getElementById("comp-results").textContent = "Now it's getting fun. I still have "+CW+" wins.";
        } else if (computerSelection == "rock") {
            CW = CW + 1;
            document.getElementById("results").textContent =  "ROUND LOST! Rock beats Scissors, you have "+PW+" wins.";
            document.getElementById("comp-results").textContent = "HAHAHA!!! I FEEL THE POWER FLOWING THROUGH MY CIRCUITS!! I have "+CW+" wins.";
        } else  if (computerSelection == "scissors") {
            document.getElementById("results").textContent =  "Tie, scissors!";
            document.getElementById("comp-results").textContent = "Well one of us is going to have to change...";
        }
    }
}
function displayResults() {
    if (PW==5) { 
        document.getElementById("results").textContent = "CONGRATS! You got "+PW+" wins before the computer. You have been granted official braggin rights for beating a computer in ROCK,PAPER,SCISSORS!!";
        document.getElementById("comp-results").textContent = "A WORTHY ADVERSARY...";
        document.getElementById("rbtn").disabled = true;
        document.getElementById("pbtn").disabled = true;
        document.getElementById("sbtn").disabled = true;
    } else if (CW==5) {
        document.getElementById("results").textContent = "GAME OVER! The computer got "+CW+" wins before you.";
        document.getElementById("comp-results").textContent = "I WAS JUST KIDDING ABOUT THE VIRUS. LOL! YOU SHOULD HAVE SEEN YOUR FACE.";
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
    if (choise == "rock") {
        document.getElementById("loadingEnemy").src = "../imgs/rock.jpg";
    } else if (choise == "paper") {
        document.getElementById("loadingEnemy").src = "../imgs/paper.jpg";
    } else if (choise == "scissors") {
        document.getElementById("loadingEnemy").src = "../imgs/scissors.jpg";
    }
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

    window.addEventListener("load", function(){
        setTimeout(
            function open(event){
                document.querySelector(".popup").style.display = "block";
            },
            125 
        )
    });
    document.querySelector("#close").addEventListener("click", function(){
        document.querySelector(".popup").style.display = "none";
    });