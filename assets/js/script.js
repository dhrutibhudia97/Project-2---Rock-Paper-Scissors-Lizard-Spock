
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
    document.getElementById("Rock").addEventListener("click", function() {
        game("Rock"); 
    });
    document.getElementById("Paper").addEventListener("click", function() {
        game("Paper"); 
    });
    document.getElementById("Scissors").addEventListener("click", function() {
        game("Scissors"); 
    });
    document.getElementById("Lizard").addEventListener("click", function() {
        game("Lizard"); 
    });
    document.getElementById("Spock").addEventListener("click", function() {
        game("Spock"); 
    });
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
        case "ScissorsScissors":
        case "PaperPaper":
        case "RockRock":
        case "LizardLizard":
        case "SpockSpock":
            draw(userChoice, computerChoice);
            break; 
        default: 
            lost(userChoice, computerChoice);
    } 
}
function won(userChoice, computerChoice) {
    /*console.log("CONGRATS. YOU WIN!");*/
    incrementUserScore();
    document.getElementById("result-text").innerHTML = ("You picked " + userChoice + " & the Computer picked " + computerChoice + ". CONGRATS YOU WIN :D");   
    document.getElementById(userChoice).classList.add("user-win");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("user-win");},600);
}

function lost(userChoice, computerChoice) {
    /*console.log("AWWW. YOU LOSE! :(");*/
    incrementComputerScore();
    document.getElementById("result-text").innerHTML = ("You picked " + userChoice + " & the Computer picked " + computerChoice + ". AWW YOU LOSE :(");
    document.getElementById(userChoice).classList.add("user-lose");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("user-lose");},600);
}

function draw (userChoice) {
    /*console.log("IT'S A DRAW."); */
    document.getElementById("result-text").innerHTML = ("You both picked " + userChoice + ". IT'S A DRAW.");
    document.getElementById(userChoice).classList.add("user-draw");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("user-draw");},600);
}


function incrementUserScore () {
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
}

function incrementComputerScore () {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}
