# Rock Paper Scissors Lizard Spock Game

This game is for people who want to play the more complicated version of rock paper scissors from the well known tv series "The Big Bang Theory". This game has 2 extra options: lizard and spock which make the game slightly less predictable and more challenging. The user will play against the computer, in a game of chance, they can win, lose or draw against the computers randomly generated answer. This game will benefit users by becoming a source of entertainment that is easily accesible and low effort on the users part.

[screenshot inserted of game on different screen sizes]

## Features

- __Title__
At the top of the page, with a white background, easily visible with enough contrast. Changes size with screen size.

 [screenshot of title]

- __Buttons__
Five button for each option (rock, paper, scissors, lizard and spock) for users to click, has an event listener for a "click" so the console recognises when they make their choice. Identifiable using font awesome icons for each option. Its visibly clear which button is which option, text underneath button to support this.
    - __Icons__
    Icons from fontawesome used for each button.The icon being a visual representation of each symbol if made by their hand, which is done when the game is played in person. 

-__Computer Generated Answer__
This then is compared with the computers randomly generated choice (using Maths.random and Maths.floor functions). This can be easily added to as its set to "choice.length" if any additional options were to be added later on. 

- __Generated Results__
A switch case is used to determined the outcome of the game. The user and computer results combination to win, and draw and the default setting is to lose the game if the winning or draw combinations are matched.

-__Results Text__
Results will be displayed as text at the top of the screen, with the "userOption beat computerOption" if user win, "computerOption beats userOption" if computer wins, or "You both picked userOption" if its a draw.

-__User Prompt Text__ 
Users see it when they first enter the page, positioned under the buttons. Short, easy to read sentence that allows users to know that to start the game, they need to click an icon.

- __Increments user/computer score__
At the bottom of the screen the results score, either gaining one to the user score if the user wins, gaining one to the computer score if the computer wins or no changes to the score made if it's a draw.

-__Buttons border change__
Border of buttons change colour for 600 milliseconds depending on game result. Green for win, Red for lose and purple for draw. Made with constant "_animation_duration" so if in future, this were to be changed, only the constant needs to be changed and this will be applied to all game outcomes.



## Testing

- This game has been tested on the browsers; Google Chrome, Safari and Microsoft Edge and it works.


- Check all features work....

### Validator Testing

| Code             | Validator                    | Results   
| -------------    | -------------                | --------                            |
| `HTML`           | W3C HTML validator           | `No errors were found.`             |
| `CSS`            | Jigsaw CSS validator         | `No errors were found.`             |
| `JavaScript`     | Jshint javascript validator  | `No significant errors were found.` |
| `Accessibility`  | Lighthouse                   | `A score of 100 for accessibility`  |

  - __Screenshots for each validator__
    - HTML Validator

    ![image](https://user-images.githubusercontent.com/107180641/192340150-4d6e3533-c8da-43e3-9f05-16231e6474ab.png)


    - CSS Validator

    ![image](https://user-images.githubusercontent.com/107180641/192340268-3689a733-60b7-4d39-a61d-364b6e8da19a.png)

    - JavaScript

    ![image](https://user-images.githubusercontent.com/107180641/192344822-5da4fdd6-2fec-4a74-9ca8-8ee118f52a0c.png)


    - Lighthouse Accessibility score

    ![image](https://user-images.githubusercontent.com/107180641/192371205-2b264f17-fc1b-49ae-85f9-27465b62e3a4.png)

### Fixed Bugs
- In the result-text the userChoice and computerChoice were "undefined", but this was resolved after adding the userChoice and computerChoice to the parameters of the won/lost/draw functions in the switch case.

- Clicking buttons sometimes displays user choice incorrectly, but changing the order of the parameters in the won/lost/draw functions fixed this so results text always displays the correct users choice.

### Unfixed bugs
- Plagerism is currently 39.1% for javascript file when checked... unsure how to decrease this significantly as some ID names e.g. rock, paper etc. would match other games like this. Also the switch case for calculating results have exact same outcome names e.g. draw - rockrock.
- Button hover style over-rides the button results outcome style, the icon will only change colour depending on outcome if mouse is not hovering over the icon,  because button:hover has a higher selecto specificity than user-win/lose/draw style. Tried fixing with !important added to css styling but did not resolve the issue.


### Deployment
This site was successfully deployed on Github.
The following steps were taken to deploy the site:

- In Github, navigate to 'Settings' at the top of the screen.
- Then navigate to 'Pages' on the menu to the left of the screen.
- From the Source section, select 'Deploy from a branch.'
- For Branch, select 'Main' and '/(root)'.
 
This live link to the website:
https://dhrutibhudia97.github.io/Project-2---Rock-Paper-Scissors-Lizard-Spock/

// Consider including steps for creating a local copy of the repository, through cloning and forking methods, for future developers. (comments for project 1 feedback)

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
