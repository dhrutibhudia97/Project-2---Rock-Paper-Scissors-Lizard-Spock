//Wait for the DOM to finish loading before running game.
document.addEventListener("DOMContentLoaded", function() {
let button = document.getElementsByTagName("button");
})

document.getElementById("rock").addEventListener("click", function() {
    console.log("you clicked on rock!") 
})
document.getElementById("paper").addEventListener("click", function() {
    console.log("you clicked on paper!") 
})
document.getElementById("scissors").addEventListener("click", function() {
    console.log("you clicked on scissors!") 
})
document.getElementById("lizard").addEventListener("click", function() {
    console.log("you clicked on lizard!") 
})
document.getElementById("spock").addEventListener("click", function() {
    console.log("you clicked on spock!") 
})