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

### Validator Testing
- HTML Validator
No errors were found when passed through the W3C HTML validator. 
![image](https://user-images.githubusercontent.com/107180641/192340150-4d6e3533-c8da-43e3-9f05-16231e6474ab.png)


- CSS Validator
No errors were found when passed through the Jigsaw CSS validator.
![image](https://user-images.githubusercontent.com/107180641/192340268-3689a733-60b7-4d39-a61d-364b6e8da19a.png)

- JavaScript
No significant errors when passed though the Jshint javascript validator.
![image](https://user-images.githubusercontent.com/107180641/192344822-5da4fdd6-2fec-4a74-9ca8-8ee118f52a0c.png)


- Lighthouse Accessibility score
A score of 100 for accessibility on lighthouse.
![image](https://user-images.githubusercontent.com/107180641/192371205-2b264f17-fc1b-49ae-85f9-27465b62e3a4.png)

### Fixed Bugs
- In the result-text the userChoice and computerChoice were "undefined", but this was resolved after adding the userChoice and computerChoice to the parameters of the won/lost/draw functions in the switch case.

- Clicking buttons sometimes displays user choice incorrectly, but changing the order of the parameters in the won/lost/draw functions fixed this so results text always displays the correct users choice.

### Unfixed bugs
- Plagerism is currently 47.2% when check... unsure how to decrease this significantly as some ID names e.g. rock, paper etc. would match other games like this. Also the switch case for calculating results have exact same outcome names e.g. draw - rockrock.


### Deployment
This site was successfully deployed on Github.
The following steps were taken to deploy the site:

- In Github, navigate to 'Settings' at the top of the screen.
- Then navigate to 'Pages' on the menu to the left of the screen.
- From the Source section, select 'Deploy from a branch.'
- For Branch, select 'Main' and '/(root)'.
 
This live link to the website:
https://dhrutibhudia97.github.io/Project-2---Rock-Paper-Scissors-Lizard-Spock/

## Credits

### Content

### Technologies
- HTML
- CSS
- JavaScript 
- HTML Validator - [link]
- CSS Validator - [link]
- JavaScript Validator - [link]
- Fontawesome - [link]
- CopyLeaks - [link]
### Acknowledgements
