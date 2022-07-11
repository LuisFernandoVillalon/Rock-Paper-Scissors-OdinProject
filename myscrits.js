const Hand = ["rock", "paper", "scissors"];
function computerPlay (Hand) {
    let choise =  Hand[Math.floor(Math.random() * Hand.length)]
    return choise;
}

