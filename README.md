# Rock Paper Scissors Lizard Spock Game

This game is for people who want to play the more complicated version of rock paper scissors from the well-known tv series "The Big Bang Theory". This game has 2 extra options: Lizard and Spock which make the game slightly less predictable and more challenging. The user will play against the computer, in a game of chance, they can win, lose or draw against the computer's randomly generated answer. This game will benefit users by becoming a source of entertainment that is easily accessible and low effort on the user's part with no prior knowledge needed.

[screenshot inserted of game on different screen sizes]


## Features

- __Title__
At the top of the page, with a white background, easily visible with enough contrast. Changes size with screen size.

 [screenshot of title]

- __Buttons__
Five buttons for each option (Rock, Paper, Scissors, Lizard, and Spock) for users to click, it has an event listener for a "click" so the console recognises when they make their choice. Identifiable using font awesome icons for each option. It's visibly clear which button is which option, text underneath the button to support this.
    - __Hover__ 
    When the cursor hovers over the button, the colour of the icon changes (becomes more opaque) so users know which button they are hovering over. The cursor also changes from an arrow to a finger point when hovering over the button or text directly below each button so users know which button they are selecting. 
    - __Active__
    When the button is clicked, the game outcome is shown, with a transition of 0.2 milliseconds, and the border of the button changes colour to signify the result (green-win, red-lose, purple-draw). The user can either click the button or the text underneath the button and the computer will acknowledge this as the user's choice. This makes it easier for a user to play the game.
    - __Icons__
    Icons from font awesome were used for each button. The icon is a visual representation of each symbol if made by their hand, which is done when the game is played in person. 

-__Computer Generated Answer__
The user's choice is then compared with the computer randomly generated choice (using Maths.random and Maths.floor functions). This can be easily added to as it's set to "choice.length" if any additional options were to be added later on in the development of the game. 

- __Generated Results__
A switch case is used to determine the outcome of the game. The user and computer results combination to win, and draw and the default setting is to lose the game if the winning or draw combinations are matched.

-__Results Text__
Results will be displayed as text at the top of the screen, with the "userOption beat computerOption" if the user wins, "computerOption beats userOption" if the computer wins, or "You both picked userOption" if it's a draw.

-__User Prompt Text__ 
Users see it when they first enter the page, positioned under the buttons. The short, easy-to-read sentence allows users to know that to start the game, they need to click an icon.

- __Increments user/computer score__
At the bottom of the screen, the results score, either gaining one to the user score if the user wins, gaining one to the computer score if the computer wins or no changes to the score made if it's a draw.

-__Buttons border change__
The border of buttons changes colour for 600 milliseconds depending on the game result. Green for a win, Red for lose, and purple for a draw. Made with constant "_animation_duration" so if in future, this was to be changed, only the constant needs to be changed and this will be applied to all game outcomes.


### Technologies
- HTML
- CSS
- JavaScript 
- HTML Validator - "https://validator.w3.org/nu/#textarea"
- CSS Validator - "https://jigsaw.w3.org/css-validator/"
- JavaScript Validator - "https://jshint.com/"
- Fontawesome - "https://fontawesome.com/"


## Testing

- This game has been tested on the browsers; Google Chrome, Safari, and Microsoft Edge, and it works.

- All of the features in this project work as intended on all differing screen sizes. The button icon colour change when the cursor hovers over the button. The buttons all work, and the correct results messages are displayed at the top of the screen. The results are shown with the colour change in the button border and the incrementation of the user and computer scores at the bottom of the page, none being incremented when the game outcome is a draw.


### Validator Testing

| Code             | Validator                    | Results                             | Validator Link     |
| -------------    | -------------                | --------                            |------------------  |     
| `HTML`           | W3C HTML validator           | `No errors were found.`             |                    |
| `CSS`            | Jigsaw CSS validator         | `No errors were found.`             |                    |    
| `JavaScript`     | Jshint javascript validator  | `No significant errors were found.` |                    |   
| `Accessibility`  | Lighthouse                   | `A score of 100 for accessibility`  |                    |  

  - __Screenshots for each validator__
    - HTML Validator

    ![html validator](https://user-images.githubusercontent.com/107180641/193662478-05b6b45e-7076-49bb-ad4a-67e065bb5ddd.png)

    - CSS Validator

    ![css validator](https://user-images.githubusercontent.com/107180641/193666697-a40b02fd-8752-4c59-9e3e-51001fd1a619.png)

    - JavaScript

    ![image](https://user-images.githubusercontent.com/107180641/192344822-5da4fdd6-2fec-4a74-9ca8-8ee118f52a0c.png)

    - Lighthouse Accessibility score

    ![image](https://user-images.githubusercontent.com/107180641/192371205-2b264f17-fc1b-49ae-85f9-27465b62e3a4.png)


### Fixed Bugs
- In the result-text the userChoice and computerChoice were "undefined", but this was resolved after adding the userChoice and computerChoice to the parameters of the won/lost/draw functions in the switch case.

- Clicking buttons sometimes displays user choice incorrectly, but changing the order of the parameters in the won/lost/draw functions fixed this so the results text always displays the correct user choice.

- The icon would only change colour depending on the outcome if the mouse is not hovering over the icon. But this was resolved when another class was added for user-win/lose/draw : hover, which then overrided the button : hover style.

### Unfixed bugs
- When using inspect tool to check the format of the game on smaller screens the button-text is present, but when the game was tested on an actual mobile device the button-text was not present.


### Deployment
This site was successfully deployed on Github.
The following steps were taken to deploy the site:

- In GitHub, navigate to 'Settings' at the top of the screen.
- Then navigate to 'Pages' on the menu to the left of the screen.
- From the Source section, select 'Deploy from a branch.'
- For Branch, select 'Main' and '/(root)'.
 
This live link to the website:
https://dhrutibhudia97.github.io/Project-2---Rock-Paper-Scissors-Lizard-Spock/

// Consider including steps for creating a local copy of the repository, through cloning and forking methods, for future developers. (comments for project 1 feedback) //


## Credits

### Content
- Icons used for the buttons in the game were taken from font awesome. - https://fontawesome.com/

- Rules for the game were taken from this site - https://www.instructables.com/How-to-Play-Rock-Paper-Scissors-Lizard-Spock/

### Coding Assistance/ Acknowledgements
- The Code Institutes Love Maths module 
    - Assisted with using JavaScript to increment user and computer scores. 
    - The styling buttons for active/hover options. 
    - CSS styling to help with media queries on smaller screens.

- Youtube tutorial - "https://www.youtube.com/watch?v=jaVNP3nIAv0&ab_channel=freeCodeCamp.org" 
    - Assisted with JavaScript switch cases for result outcome.
    - Use of random generator for computer choices. 
    - Adding function to buttons by adding event listeners.
    - Assisted with making the border colour change temporary. 
    
- Mentor meetings with Sandeep Aggarwal 
    - Assisted with reducing the size of CSS and Javascript code by reducing repeated statements, replacing the lost outcomes of the switch case with the default setting being the lost result. 

- https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#:~:text=The%20DOMContentLoaded%20event%20fires%20when,and%20subframes%20to%20finish%20loading.
    - Assisted with DOMContentLoaded code at the top of the javascript file.


