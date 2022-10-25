/**
 * Wait for the DOM to finish loading before running the game.
 * Code from https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#:~:text=The%20DOMContentLoaded%20event%20fires%20when,and%20subframes%20to%20finish%20loading.
 */
document.addEventListener('DOMContentLoaded', (_event) => {
    console.log('DOM fully loaded');
  });
main();

// Animation duration of the border colour change.
const _ANIMATION_DURATION = 600;

const MAX_ROUNDS = 5;

let currentUserCounter = 0;

let currentComputerCounter = 0;

// The choices the computer can randomly select.
const CHOICES = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

/**
 * Computer random choice is generated. 
 * Code credited to youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0". 
 * Time of video - 39:10.
 */
function getComputerChoice() {
    const randomChoice = [Math.floor(Math.random() * CHOICES.length)];
    return CHOICES[randomChoice];
}

/**
 * User clicking each button recognised by the game.
 * Code credited to youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0".
 * Time of video - 34:35.
 */
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

/** 
 * Determines the game output.
 * Switch case used to match the user and computer choice combination and match it to a win, lose or draw result.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0&ab_channel=freeCodeCamp.org"
 * Time of video - 48.12.
 */
function game(userChoice) {
    if (currentUserCounter >= MAX_ROUNDS) {
        // Show the final result
        alert("CONGRATS! YOU BEAT THE COMPUTER :D. PRESS RESET TO PLAY AGAIN!");
        return;
      }
      if (currentComputerCounter >= MAX_ROUNDS) {
        // Show the final result
        alert("AWW! THE COMPUTER BEAT YOU THIS TIME :( PRESS RESET TO PLAY AGAIN!");
        return;
      }

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
    if (currentUserCounter === MAX_ROUNDS) {
        document.getElementById("result-text").innerHTML = `You picked ${userChoice} & the Computer picked ${computerChoice} AWW! YOU LOSE THE GAME. CLICK THE RESET BUTTON TO PLAY AGAIN`;
        return;
      }
      if (currentComputerCounter === MAX_ROUNDS) {
        document.getElementById("result-text").innerHTML = `You picked ${userChoice} & the Computer picked ${computerChoice} CONGRATS YOU WIN :D CLICK THE RESET BUTTON TO PLAY AGAIN`;
        return;
      }
    
}

/**
 * Won outcome determined, displays result-text message at the top of the screen.
 * Increments user score by one.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
 * Time of video - 56:00.
 */
function won(userChoice, computerChoice) {
    incrementUserScore();
    document.getElementById("result-text").innerHTML = `You picked ${userChoice} & the Computer picked ${computerChoice} CONGRATS YOU WIN :D`;
    
/**
 * Add style to user-win result.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
 * Time of video - 1:16:21.
 */
    document.getElementById(userChoice).classList.add("user-win");
/** 
 * Green border change animation lasts for 600 milliseconds.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
 * Time of video - 1:20:30.
 */
   // setTimeout(function() {
     //   document.getElementById(userChoice).classList.remove("user-win");
    //}, _ANIMATION_DURATION);
    animateUserSelection(userChoice, "user-win");
}

/**
 * Lost outcome determined, displays result-text message at the top of the screen.
 * Increments computer score by one.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
 * Time of video - 1:08:30.
 */
function lost(userChoice, computerChoice) {
    incrementComputerScore();
    document.getElementById("result-text").innerHTML = `You picked ${userChoice} & the Computer picked ${computerChoice} AWW YOU LOSE :(`;

/**
 * Add style to user-lose result.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
 * Time of video - 1:23:26.
 */
    document.getElementById(userChoice).classList.add("user-lose");
/** 
 * Red border change animation lasts for 600 milliseconds.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
 * Time of video - 1:23:25
 */
    //setTimeout(function() {
    //    document.getElementById(userChoice).classList.remove("user-lose");
    //}, _ANIMATION_DURATION);
    animateUserSelection(userChoice, "user-lose");
    
} 

/**
 * Draw outcome determined, displays result-text message at the top of the screen.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
 * Time of video - 1:10:30.
 */
function draw(userChoice) {
    document.getElementById("result-text").innerHTML = `You both picked ${userChoice}. IT'S A DRAW!`;

/**
 * Add style to user-draw result.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
 * Time of video - 1:23:45.
 */
    document.getElementById(userChoice).classList.add("user-draw");
/** 
 * Purple border change animation lasts for 600 milliseconds.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
 * Time of video - 1:23:45.
 */
   // animateUserSelection("user-draw");
   // setTimeout(function() {
    //    document.getElementById(userChoice).classList.remove("user-draw");
    //}, _ANIMATION_DURATION);
    animateUserSelection(userChoice, "user-draw");
}

/**
 * Animates the choice selected by the user based on whether they won/lost/draw.
 * @param animationClass
 * _ANIMATION_DURATION constant set to 600 milliseconds, at the top of the javascript file.
 */
function animateUserSelection(userChoice, animationClass) {
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove(animationClass);
    }, _ANIMATION_DURATION); 
}

/**
 * Increments the user score by 1 at the bottom of the page if the user wins. 
 * Credit to Code Institutes 'Love Maths' module.
 */
function incrementUserScore() {
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
    ++currentUserCounter;
}

/**
 * Increments the computer score by 1 at the bottom of the page if the computer wins. 
 * Credit to Code Institutes 'Love Maths' module.
 */
function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
    ++currentComputerCounter;
}
