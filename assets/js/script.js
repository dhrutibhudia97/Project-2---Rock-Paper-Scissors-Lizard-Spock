//Wait for the DOM to finish loading before running game.
/*document.addEventListener("DOMContentLoaded", function() {
let button = document.getElementsByTagName("button");
}) */

//computer random choice is generated
function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    const randomChoice = [Math.floor(Math.random() * choice.length)];
    return choice[randomChoice];
}

 //user clicking each option recognised by console.
 function main() {
    document.getElementById("rock").addEventListener("click", function() {
        game("Rock"); 
    })
    document.getElementById("paper").addEventListener("click", function() {
        game("Paper"); 
    })
    document.getElementById("scissors").addEventListener("click", function() {
        game("Scissors"); 
    })
    document.getElementById("lizard").addEventListener("click", function() {
        game("Lizard"); 
    })
    document.getElementById("spock").addEventListener("click", function() {
        game("Spock"); 
    })
}

main();

function game(userChoice) {
    const computerChoice = getComputerChoice(); 
    switch (userChoice + computerChoice) {
        case "ScissorsPaper":
        case "ScissorsLizard":
        case "PaperRock":
        case "PaperSpock":
        case "RockScissors":
        case "RockLizard":
        case "LizardPaper":
        case "LizardSpock":
        case "SpockRock":
        case "SpockScissors":
            won(userChoice, computerChoice);
            break;
        case "ScissorsSpock":
        case "ScissorsRock":
        case "PaperScissors":
        case "PaperLizard":
        case "RockSpock":
        case "RockPaper":
        case "LizardScissors":
        case "LizardRock":
        case "SpockPaper":
        case "SpocksLizard":
            lost(userChoice, computerChoice);
            break;
        case "ScissorsScissors":
        case "PaperPaper":
        case "RockRock":
        case "LizardLizard":
        case "SpockSpock":
            draw(userChoice, computerChoice);
            break; 
    } 
}
function won(userChoice, computerChoice) {
    console.log("CONGRATS. YOU WIN!");
    incrementUserScore();
    document.getElementById("result-text").innerHTML = ("You picked " + userChoice + " & the computer picked " + computerChoice + ". CONGRATS YOU WIN :D");
    
}

function lost(computerChoice, userChoice) {
    console.log("AWWW. YOU LOSE! :(");
    incrementComputerScore();
    document.getElementById("result-text").innerHTML = ("You picked " + userChoice + " & the computer picked " + computerChoice + ". AWW YOU LOSE :(");
}

function draw (userChoice) {
    console.log("IT'S A DRAW.");
    document.getElementById("result-text").innerHTML = ("You both picked " + userChoice + ". IT'S A DRAW.");
}


function incrementUserScore () {
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
}

function incrementComputerScore () {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}
