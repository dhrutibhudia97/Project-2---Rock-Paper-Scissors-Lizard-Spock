//Wait for the DOM to finish loading before running game.
/*document.addEventListener("DOMContentLoaded", function() {
let button = document.getElementsByTagName("button");
}) */

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomChoice = Math.floor(Math.random() * 5);
    return choice[randomChoice];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("user choice -->" + userChoice);
    console.log("computer choice -->" + computerChoice);
}


document.getElementById("rock").addEventListener("click", function() {
    game("you clicked on rock!"); 
})
document.getElementById("paper").addEventListener("click", function() {
    game("you clicked on paper!"); 
})
document.getElementById("scissors").addEventListener("click", function() {
    game("you clicked on scissors!"); 
})
document.getElementById("lizard").addEventListener("click", function() {
    game("you clicked on lizard!"); 
})
document.getElementById("spock").addEventListener("click", function() {
    game("you clicked on spock!"); 
})


