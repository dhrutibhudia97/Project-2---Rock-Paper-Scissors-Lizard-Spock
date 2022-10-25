# Rock Paper Scissors Lizard Spock Game

This game is for people who want to play the more complicated version of rock paper scissors from the well-known tv series "The Big Bang Theory". This game has 2 extra options: Lizard and Spock which make the game less predictable and more challenging. The user will play against the computer, in a game of chance, they can win, lose or draw against the computer's randomly generated answer. This game will benefit users by becoming a source of entertainment that is easily accessible and low effort on the user's part with no prior knowledge needed.

![responsive screen design](https://user-images.githubusercontent.com/107180641/194763273-a2e11c04-fcc6-45aa-96de-5c3c7d12547a.png)


## Features

- __Header__

    At the top of the page, with a white background, easily visible to the user with enough colour contrast. Changes size with screen size. The user will easily be able to see the name of the game.

![title](https://user-images.githubusercontent.com/107180641/194577471-0da71221-8da3-4f45-b2ae-f93778b292ad.png)

- __Buttons__

    Five buttons for each option (Rock, Paper, Scissors, Lizard, and Spock) for users to click, it has an event listener for a "click" so the console recognises when they make their choice. Identifiable using font awesome icons for each option. It's visibly clear to the user which button is which option, text underneath the button supports this.

![buttons](https://user-images.githubusercontent.com/107180641/194577844-fee2e61f-39f7-44cb-858e-5d24625ca680.png)

- __Button Hover__ 
    
    When the cursor hovers over the button, the colour of the icon changes (becomes more opaque) so users know which button they are hovering over. The cursor also changes from an arrow to a finger point when hovering over the button or text directly below each button so users know which button they are selecting. 

![button hover](https://user-images.githubusercontent.com/107180641/194578255-974ca262-04fd-48d0-86ff-56b439b3b49e.png)

- __Button Active__

    When the button is clicked, the game outcome is shown, with a transition of 0.2 milliseconds, and the border of the button changes colour to signify the result (green-win, red-lose, purple-draw). The user can either click the button or the text underneath the button and the computer will acknowledge this as the user's choice. This makes it easier for a user to play the game.

![button active](https://user-images.githubusercontent.com/107180641/194578574-457c5c03-c31f-4f20-9091-e46eab07461f.png)

- __Icons__

    Icons from font awesome were used for each button. The icon is a visual representation of each symbol if made by their hand, which is done when the game is played in person. 

- __Buttons border change__

    The border of the selected button changes colour temporarily for 0.6 seconds depending on the game result. Green for a win, Red for lose, and purple for a draw.

![result with border colour](https://user-images.githubusercontent.com/107180641/194708337-a4a2da9b-caf1-499d-aaaf-0d789c4f786c.png)
![results after border colour change](https://user-images.githubusercontent.com/107180641/194708346-9ac76101-e189-40f7-a6a9-2e2d393266c8.png)

- __Reset Button__

    Reset button placed below scores on the screen. The user can click on this at any point in the game to refresh the page and start game again as the scores are reset to 0. They are prompted to do so after either the user or computer reaches a score of 5, in the alert message and in the results-text message. Game can only continue after this if the user clicks the reset button. This allows users to reach a definite end point of the game.

![reset button](https://user-images.githubusercontent.com/107180641/197827228-935c158f-cb62-4e90-a5c5-dd84bd6a413d.png)


- __Alert Message__

    The alert message shows up on the screen when either the user or computer reaches a score of 5. This alerts the user who won the overall game and notifies them that to continue to play they need to click the reset button. If the user tries to continue the game after a score of 5 is reached, the alert message will repeatedly pop up to remind them to click the reset button.
    
![end game alert win](https://user-images.githubusercontent.com/107180641/197830702-aad3309b-d299-49cf-a706-ab2c35daa4b0.png)
![end game alert lose](https://user-images.githubusercontent.com/107180641/197830726-7e309781-8e46-4f70-9cb7-48cb2f3eac4d.png)


- __Computer Generated Answer__

The user's choice is then compared with the computer's randomly generated choice out of the 5 options available.

- __Generated Results__

A switch case is used to determine the outcome of the game. The user and computer results combination to win, and draw are stated in the switch case and the default setting is to lose the game if the winning or draw combinations aren't matched.

- __Results Text__

Results will be displayed as text at the top of the screen. Displays the user's choice and the computer's choice and whether they win/lose or draw. This stays on the screen until the user clicks another button, allowing the user to know the result of the game even after the border colour change reverts back.
When either the user or computer reaches a score of 5, the results-text notifies the user who won the overall game (out of 5) and they are notified that to continue the game they will need to click the reset button.

![result text win](https://user-images.githubusercontent.com/107180641/194585170-e92a98c3-bf16-4efb-b0e9-969c1f96f5d9.png)
![results text](https://user-images.githubusercontent.com/107180641/194580365-848bbd40-f4b0-4843-a435-b2899f69f5a4.png)
![results text draw](https://user-images.githubusercontent.com/107180641/194584910-71beb946-1628-46d0-8dbc-56e09631eb70.png)
![end game results win](https://user-images.githubusercontent.com/107180641/197829102-8689448d-f2e1-42f1-94c1-0ee348061a53.png)
![end game results lose](https://user-images.githubusercontent.com/107180641/197829119-53f991db-835a-45f2-b222-2a511c4da2c8.png)

- __User Prompt Text__ 

Users see it when they first enter the page, positioned under the buttons. The short, easy-to-read sentence allows users to know that to start the game, they need to click an icon.

![user prompt](https://user-images.githubusercontent.com/107180641/194579645-edc9e3e1-16c6-4ca3-9b27-f20a29479bc1.png)

- __Increments user/computer score__

At the bottom of the screen, the results score, either gaining 1 to the user score if the user wins, gaining 1 to the computer score if the computer wins or no changes to the score made if it's a draw. Allows the user to keep track of their current score.

![user and computer score](https://user-images.githubusercontent.com/107180641/194581111-52ad3a95-4dc3-45df-a1cd-70487d3a524f.png)

- __Rules__
At the bottom of the screen in the footer are the rules of the game. The white background helps differentiate it from the game area. The rules will benefit the user as they will help them understand how the game works and how to win or explain why they lost. The user will benefit to know what option beats what.

![rules](https://user-images.githubusercontent.com/107180641/194763145-b558d573-10ea-4212-bfb7-c9a947f9191f.png)



### Technologies
- HTML
- CSS
- JavaScript 
- HTML Validator - "https://validator.w3.org/nu/#textarea"
- CSS Validator - "https://jigsaw.w3.org/css-validator/"
- JavaScript Validator - "https://jshint.com/"
- Fontawesome - "https://fontawesome.com/"


## Testing
- This game has been tested and works on the browsers; Google Chrome, Safari, and Microsoft Edge.

- All of the features in this project work as intended on all differing screen sizes: desktops (1024px), tablets (768px), and smartphones (480px and lower). The text font size and button size decrease on smaller screens.

- The button icon's colour changes when the cursor hovers over the button. 

- The buttons all work, and the correct results messages are displayed at the top of the screen. 

- The results are shown with the correct colour change in the button border and the incrementation of the user or computer scores at the bottom of the page, none being incremented when the game outcome is a draw.


### Validator Testing

| Code        | Validator         | Results                                      | Validator Link |
| ------------| ------------------| ---------------------------------------------|------------------|     
| `HTML`           | W3C HTML validator           | `No errors were found.`             | https://validator.w3.org/nu/?doc=https%3A%2F%2Fdhrutibhudia97.github.io%2FProject-2---Rock-Paper-Scissors-Lizard-Spock%2F                 |
| `CSS`            | Jigsaw CSS validator         | `No errors were found.`             | https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdhrutibhudia97.github.io%2FProject-2---Rock-Paper-Scissors-Lizard-Spock%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en                    |    
| `JavaScript`     | Jshint JavaScript validator  | `No significant errors were found. Only warnings if not using the esversion:6. The following metrics were returned: There are 19 functions in this file. Function with the largest signature take 2 arguments, while the median is 0. Largest function has 5 statements in it, while the median is 1. The most complex function has a cyclomatic complexity value of 16 while the median is 1.`                          | https://jshint.com/                   |   
| `Accessibility`  | Lighthouse                   | `A score of 100 for accessibility.`                 |                    |  

  - __Screenshots for each Validator__
    - HTML Validator
    
    ![html validator](https://user-images.githubusercontent.com/107180641/194571516-6577692a-a36c-4150-bf24-15a999e44ae6.png)

    - CSS Validator

    ![css validator](https://user-images.githubusercontent.com/107180641/194572138-39a81199-2376-4db5-a70d-45d049b82e8d.png)

    - JavaScript

    ![javascript validator](https://user-images.githubusercontent.com/107180641/194573481-c4cddcde-ffd9-4097-a664-1d042a1af397.png)

    - Lighthouse Accessibility score

    ![light house score](https://user-images.githubusercontent.com/107180641/194574413-bc7d29de-9324-4c97-abf9-5fd6c8667f10.png)


### Fixed Bugs
- In the result text the user's choice and the computer's choice were "undefined", but this was resolved after adding the user's/computer's choice to the parameters of the won/lost/draw functions in the switch case.

- Clicking buttons sometimes displays user choice incorrectly, but changing the order of the parameters in the won/lost/draw functions fixed this so the results text always displays the correct user choice.

- The icon would only change colour depending on the outcome if the mouse is not hovering over the icon. But this was resolved when another class was added for user-win/lose/draw : hover, which then overrode the button : hover style.


### Unfixed bugs
- When using inspect tool to check the format of the game on smaller screens the button text is present, but when the game was tested on an actual mobile device the button text was not present.


### Deployment
This site was successfully deployed on Github.
The following steps were taken to deploy the site:
- In GitHub, navigate to 'Settings' at the top of the screen.
- Then navigate to 'Pages' on the menu to the left of the screen.
- From the Source section, select 'Deploy from a branch.'
- For Branch, select 'Main' and '/(root)'.
 
This live link to the website:
https://dhrutibhudia97.github.io/Project-2---Rock-Paper-Scissors-Lizard-Spock/


## Credits

### Content
- The icons used for the buttons in the game were taken from font awesome. - https://fontawesome.com/

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
    - Adding the animation duration function to the button border colour change style. 

- https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#:~:text=The%20DOMContentLoaded%20event%20fires%20when,and%20subframes%20to%20finish%20loading.
    - Assisted with DOMContentLoaded code at the top of the javascript file.