# Rock Paper Scissors Lizard Spock Game

This game is for people who want to play the more complicated version of rock paper scissors from the well known tv series "The Big Bang Theory". This game has 2 extra options: lizard and spock which make the game slightly less predictable and more challenging. The user will play against the computer, in a game of chance, they can win, lose or draw against the computers randomly generated answer. This game will benefit users by becoming a source of entertainment that is easily accesible and low effort on the users part.

[screenshot inserted of game on different screen sizes]


## Features

- __Title__
At the top of the page, with a white background, easily visible with enough contrast. Changes size with screen size.

 [screenshot of title]

- __Buttons__
Five button for each option (rock, paper, scissors, lizard and spock) for users to click, has an event listener for a "click" so the console recognises when they make their choice. Identifiable using font awesome icons for each option. Its visibly clear which button is which option, text underneath button to support this.
    - __Hover__ 
    When cursor hovers over button, the colour of the icon changes (becomes more opaque) so users know which button they are hovering over. The cursor also changes from an arrow to a finger point when hovering over the button or text directly below each button so users know which button they are selecting. 
    - __Active__
    When the button is clicked, the game outcome is shown, with the transition of 0.2 milliseconds, the border of button changes colour to signify result (green-win, red-lose, purple-draw). The user can either click the button or the text underneath the button and the computer will acknowledge this as the users choice. This makes it easier for user to play the game.
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

- All of the features in this project work as intended on all differing screen sizes. The button icon colour change when the cursor hovers over the button. The buttons all work, the correct results messages are displayed at the top of the screen. The results are shown with the colour change in the button border and the incrementation of the user and computer scores at the bottom of the page, none being incremented when the game outcome is a draw.

### Validator Testing

| Code             | Validator                    | Results                             | 
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

- Button hover style over-rides the button results outcome style, the icon will only change colour depending on outcome if mouse is not hovering over the icon,  because button:hover has a higher selector specificity than user-win/lose/draw style. Tried fixing with !important added to css styling but did not resolve the issue.

- On smaller screens, when buttons are clicked the icon is not centered. Tried to resolve by reducing border size, but icon still not centralised, but stays within the button border.

- Tried to reduce repeatable javascript code for click event of buttons, attempted to add event listeners to the class button rather then each Id, but this resulted in user choice not being recognised correctly.


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
