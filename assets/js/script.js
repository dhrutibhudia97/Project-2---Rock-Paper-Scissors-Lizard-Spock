//Wait for the DOM to finish loading before running game.
/*document.addEventListener("DOMContentLoaded", function() {
let button = document.getElementsByTagName("button");
}) */

//computer random choice is generated
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomChoice = [Math.floor(Math.random() * choice.length)];
    return choice[randomChoice];
}


function game(userChoice) {
    const computerChoice = getComputerChoice(); 
    switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "scissorslizard":
        case "paperrock":
        case "paperspock":
        case "rockscissors":
        case "rocklizard":
        case "lizardpaper":
        case "lizardspock":
        case "spockrock":
        case "spockscissors":
            won();
            break;
        case "scissorsspock":
        case "scissorsrock":
        case "paperscissors":
        case "paperlizard":
        case "rockspock":
        case "rockpaper":
        case "lizardscissors":
        case "lizardrock":
        case "spockpaper":
        case "spockslizard":
            lost();
            break;
        case "scissorsscissors":
        case "paperpaper":
        case "rockrock":
        case "lizardlizard":
        case "spockspock":
            draw();
            break; 
    } 
}
function won(userChoice, computerChoice) {
    console.log("CONGRATS. YOU WON!");
    incrementUserScore();
    document.getElementById("result-text").innerHTML = (userChoice + " beats " + computerChoice + ". CONGRATS YOU WIN!");
}

function lost() {
    console.log("AWWW. YOU LOST! :(");
    incrementComputerScore();
}

function draw () {
    console.log("IT'S A DRAW.")
}






 //user clicking each option recognised by console.
function main() {
    document.getElementById("rock").addEventListener("click", function() {
        game("rock"); 
    })
    document.getElementById("paper").addEventListener("click", function() {
        game("paper"); 
    })
    document.getElementById("scissors").addEventListener("click", function() {
        game("scissors"); 
    })
    document.getElementById("lizard").addEventListener("click", function() {
        game("lizard"); 
    })
    document.getElementById("spock").addEventListener("click", function() {
        game("lizard"); 
    })
}

main();

function incrementUserScore () {
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
}

function incrementComputerScore () {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}
