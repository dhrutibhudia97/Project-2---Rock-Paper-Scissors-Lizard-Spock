# Rock Paper Scissors Lizard Spock Game

This game is for people who want to play the more complicated version of rock paper scissors from the well known tv series "The Big Bang Theory". This game has 2 extra options: lizard and spock which make the game slightly less predictable and more challenging. They will place against the computer...

[screenshot inserted of game on different screen sizes]

## Features

- __Title__

- __Buttons__
Five button for each option (rock, paper, scissors, lizard and spock) for users to click, has an event listener for a "click" so the console recognises when they make their choice. 
    -__Icons__
    Icons from fontawesome used for each button, so its visibly clear which button is which option, text underneath button to support this.

-__Computer Generated Answer__
This then is compared with the computers randomly generated choice (using Maths.random and Maths.floor functions). 
- __Generated Results__
A switch case is used to determined the outcome of the game. 

-__Results Text__
Results will be displayed as text at the top of the screen, with the "userOption beat computerOption" if user win, "computerOption beats userOption" if computer wins, or "You both picked userOption" if its a draw.

- __Increments user/computer score__
At the bottom of the screen the results score, either gaining one to the user score if the user wins, gaining one to the computer score if the computer wins or no changes to the score made if it's a draw.


## Testing

-Need to test on different browsers...

- Check all features work.

###Validator Testing
- HTML
- CSS
- JavaScript
- Lighthouse accessibility score

### Unfixed bugs
- In results score message, the user/computer option is noted as "undefined" in the message.
- Plagerism is currently 47.2% when check... unsure how to decrease this significantly as some ID names e.g. rock, paper etc. would match other games like this. Also the switch case for calculating results have exact same outcome names e.g. draw - rockrock.
- need to check media queries for smaller screens (seems fine when on phone - could potentially make buttons slightly smaller so user doesn't scroll down as much to view all options/score.)


### Deployment
This site was deployed on Github.
setting --> pages --> deploy from branch --> main and /root --> site deployed with live link :

