# __Smarty Pants Quiz Game - Brian Stritch 2021 Project-2__

Smarty Pants is a quiz game tailored for multiple age groups and is intended to be an entertaining and informative quiz game. The quiz is a 10 question multiple choice game where the user is asked a question and offered four possible answers to choose from. There are three game types to choose from to allow the user a variety of choice.

The first selection within the game contains content from the popular children's animated show, Peppa Pig, which caters for the younger users and allows them to challenge their knowledge about all their favourite characters of the show. 

The second selection within the game contains content relating to the hit RTE Crime Drama Love/Hate which is aimed towards the more mature users and allows the user to challenge their knowledge about their favourite crime drama.

The third selection within the game is a general music trivia quiz aimed towards all ages which allows the user to challenge their musical trivia knowledge and musical related general knowledge.

## __Table of Contents__

<!-- Table of contents -->

* [What does it look like](#what-does-it-look-like)           
* [Features](#features)
* [Technologies](#technologies)
	* [Languages used](#languages-used)
	* [Other Technologies](#other-technologies)
	* [Existing features](#existing-features)
	  * [Social media](#social-media)	
	* [Features left to implement](#features-left-to-implement)
* [Testing](#testing)
* [Validator testing](#validator-testing)
	* [W3C HTML Code validator](#w3c-html-code-validator)
	* [W3C CSS Jigsaw validator](#w3c-css-jigsaw-validator)
	* [Accessibility Lighthouse](#accessibility-lighthouse)
  * [JSHint](#jshint)
* [Unfixed Bugs](#unfixed-bugs)
* [Deployment](#deployment)
* [Credits](#credits)
* [Content](#content)
* [Media](#media)
* [UX](#ux)
	* [Scope](#scope)
	* [Strategy](#strategy)
	* [Structure](#structure)
	* [Skeleton](#skeleton)


<!-- End table of contents -->

## __What does it look like__
![Responsive Mockup](assets/readme/readme-images/am-i-responsive.JPG )
<a href="https://brianstritch.github.io/BrianStritch-P2-QuizzGame/" target="_blank">Click Here</a> to access the site.

## __Features__ 
1. The User is greeted with a sleek modern Quiz game entry page where the user can view the rules of the game and can progress into the game selection screen.

2. The game selection screen offers the user the choice of three games, a beginner level Peppa Pig quiz, which allows the users to test their knowledge about their favourite characters in the popular children's animated television series Peppa Pig, an intermediate level quiz based on the hit RTE Crime Drama Love/Hate, and is aimed at the more mature users and allows the user to test their knowledge relating to their favourite television show. The last game is an intermediate level music related trivia quiz, which would be suited for all ages, and allows the user to test their music trivia knowledge.

3. On entering the game of choice the backdrop is chosen to reflect the game choice, and the choice of colours used in the design of the quiz game area is complimented by the colours within the backdrop, without distracting the users focus from the game. 

4. When the user selects the start game button, the questions are prompted in a random order and the user is never prompted with the same line-up of questions should they have played the quiz previously. The user is asked the randomly chosen question and is prompted with a choice of four possible answers.

5. On selecting their answer the user is immediately notified of their result as the correct answer button changes to green and the incorrect answer buttons change to red, and an informative message is displayed to the user which relates to the question and the correct answer.

6. The user is displayed their current correct and incorrect answer scores during the game at the lower left and right of the screen.

7. At the end of the ten questions the user is directed to an end game screen with a new backdrop to differentiate the game screen from the end of game screen, and the user is congratulated and a message is displayed to the user notifying them of their score out of ten.

8. At the end game screen the user has the option to restart the current game or can exit and is redirected to the game selection screen.

## __Technologies__
### __Languages used__
  The following languages were used to create the website:
  1. HTML
  2. CSS
  3. JavaScript

### __Other technologies__

  1. Balsamiq Wireframes
    * To create the wireframes and mock ups.
  2. Gitpod
    * Platform used to develop and test site.
  3. Github
    * Platform used to host repository and deployed site.
  4. Google Fonts
    * Used for text choice for the game.
  5. Font Awesome
    * Used for social media Icons in the footer
  6. Microsoft Powerpoint
    * Used to design a visual version of the game in order to quicky establish the layout and styling of the game.

### __Existing Features__

#### __Social Media__

  - I have added links in the footer of the game which allows the user to follow me on github and linked in should they wish to do so. 


### __Features Left to Implement__

- Addition of new game types
- Username entry
- High score logging  

## __Testing__ 

 - All aspects of the game have been tested and appear to be working as intended. The user should be able to achieve their goal as the game intends, depending on whichever game they choose to play when they visit. 

 - I have used Developer tools in Google Chrome to test the responsiveness of the site on different devices small and large and the site appears to render well on different screen sizes, however some issues were noted. see bugs below.

 - I have tested the site out on Google Chrome and Android, Edge, Safari however it has not been tested on IOS.

 - Social Media
    - Social media link testing    
        - Click on Linked-in icon and verify that the correct page opens in a new tab.
        - Click on Gitpod icon and verify that the correct page opens in a new tab.
    

### __Validator Testing__ 
##### __W3C HTML Code Validator:__
  - The code for the html index.html page was entered into the validator and all aspects of the page passed.
  - No errors or warnings were returned when passing through the official W3 HTML validator.
     ![Smarty Pants Quiz game HTML validator results](/assets/readme/readme-images/html-validator-results.JPG)

##### __W3C CSS Jigsaw Validator:__
  - The code for the stylesheet.css was entered into the validator and passed.
  - No errors or warnings were returned when passing through the official w3 CSS validator.
     ![Smarty Pants Quiz game CSS validator results](/assets/readme/readme-images/css-validator-results.JPG)

#### __Accessibility lighthouse:__
  - The game site was entered tested using lighthouse in chrome developer tools and passed with 100% in all areas.
     ![Smarty Pants Quiz game Lighthouse test results](/assets/readme/readme-images/lighthouse-test-results.JPG)

#### __JSHint:__
  - The code for the script.js file was entered into the JSHint validator and passed.
  - Some minor warnings were noted relating to functions which were declared within loops referencing outer scoped variables, however this was the intention of declaring said variables, that they could be manipulated by functions to alter the stored values in order to influence the outcome of other functions depending on the values stored when the variables are passed into the functions. Some notifications were prompted relating to unused variables, however the variables which have been noted directly relate to the statements above where the variables are designed to be manipulated by functions in order for the game to operate effectively. No errors were returned when passing through the JSHint validator.
  
    ![Smarty Pants Quiz game JSHint results](/assets/readme/readme-images/jshint-results.JPG)


### __Unfixed Bugs__

While many bugs have been found during the development phase, such as layout issues,
font size issues, and links not working when committed to GitHub. Numerous bugs were noted when writing the JavaScript file however these bugs have been eradicated and no bugs appear to remain. 
 - During the testing phase of the game it was noted that one such bug was evident, which required a function to be written to delay the next button following the user answering the question, as this would cause the function to execute prior to its predecessor function completing and thus causing the answer buttons of the next question to disappear, leaving the user on a screen with no buttons to progress. 
 - During the course of writing the javascript file numerous small bugs were found and the issues resolved and no further issues appear to be evident in the current version of the game. 

- In relation to the CSS styling of the game application some minor issues were noted with responsiveness on different size devices and a happy medium had to be achieved as I could not get the site to appear uniform on all different types of media devices due to the time constraints of submitting this project and these issues have not been fully addressed and could be addressed in a future update of the game.

## __Deployment__

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - In settings select pages on the menu along left hand side.
  - Select branch in the source section and change setting to main
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found <a href="https://brianstritch.github.io/BrianStritch-P2-QuizzGame/" target="_blank">here</a>.


## __Credits__ 
- I would like to thank my mentor Spencer Barriball for the guidance throughout the project.
- I would like to thank all my family and friends for the help in testing the game and searching for errors and bugs.


### __Content__ 

- The questions used for the Peppa Pig quiz game were obtained from an online quiz found at the link below:
  - https://www.funtrivia.com/en/ForChildren/Peppa-Pig-21189.html.
- The questions used for the Love/Hate quiz game were obtained from an online quiz found at the link below:
  - https://www.joe.ie/quiz/quiz-how-well-do-you-remember-lovehate-658499
- The questions for the Music quiz game were obtained from an android application "Trivial music", available for download for on the Google APP store.
- The icons in the footer were obtained from [Font Awesome](https://fontawesome.com/)
- The Modal on the Entry screen was obtained from W3Schools website.

### __Media__

- The images used in the initial game entry screen and game selector screen backgrounds were obtained from Pexels.com and are to the best of my knowledge unlicenced free images.
- The image used in the Peppa Pig game selector was obtained from an internet search and sourced from Twitter via The Guardian.
- The image used in the Love/Hate game selector was obtained from the RTE One official website.
- The image used in the Music game selector was obtained from an internet search and appears across numerous social media platforms and the source of which is unknown. The source that this image was obtained from for this game was from "Online tech tips".
- The images used in the Peppa Pig game and end screen were obtained from the official Peppa Pig Twitter account.
- The Images used in the Love/Hate game screen and end screens were obtained from the RTE One official website .
- The images used in the Music game screen and end screens were obtained from an internet search and the game screen image was obtained from the New Yorker Website and the end screen image was from "Dothill Primary School" and appears to have been drawn by a student.

 ## __UX__

- ### __Scope__
   - #### __From Why to What!__
     - ##### __What they say they need:__
        -	A fun and educational quiz game.
        -	A quiz with a variety of levels of difficulty.
        -	A quiz that tracks and displays the users score.

      - ##### __What they actually need:__
        -	A fun quiz based game that is easy to navigate and enjoyable for the user.
        -	A quiz game that offers multiple game type choices, to appeal to a multitude of user age groups. 


      - ##### __What they don’t know they need:__ 
        -	A quiz to cater for multiple age groups.
        -	A Quiz to challenge and entertain the user.
        -	Links to social media 


  - #### __Features and Content__
    - __Example__: A user wishes pass time and enjoy an entertaining quiz game. 
      - ![scope Diagram](/assets/readme/readme-images/scope.JPG)
    

- ### __Strategy__
    -	To create an entertaining quiz game for the user.
    - The ability to select different game types depending on interests and age.
    - The aim is to offer an entertaining and informative quiz game that caters for a multitude of user types.
    - To offer an enticing Peppa Pig quiz game for young children with an interest in Peppa Pig.
    - To offer an interesting quiz game based on the hit RTE crime drama Love/Hate for adolescents and adults with an interest in   the Love/Hate crime drama.
    - To offer an enticing Music trivia quiz game for all ages of users with an interest in Music.
    - To provide the users with facts relating to the relevant questions asked and the correct answers for these questions.

  - #### __Relevance of Content__
      - The content will be relevant, as the game types offered to the user are directly related to the game types. The game will be easy to navigate, it will be click and go to where you want to get to. The majority of the game will be structured on the one page with the content required being showed and the unused content hidden, until required by the user or at differing intervals of the relevant game types.

  - #### __Why is it special?__    
      - This quiz game is special in that it offers an easy-to-use platform which is easy to navigate through and is both entertaining and educational.
  Future Developments of the game could include the addition of game types to expand the platform. 
  - #### __Why would you want this?__
    - As the game content is limited the user may grow tired of the available questions or the content available and the addition of new content in future updates will help to keep the content relevant to the user and may keep the user interacting with the game. 

  - #### __What makes a great experience__
    -	The ability to view all your favourite games in the one place. 
    -	Having the personal choice of which game you want to play. 
    -	The ability to view the current scores as you play the game. 
    -	Having the correct answer highlighting and an informative message displaying content relative data pertaining to the questions asked. 
    -	The ability to add more game types in future updates of the game to offer the user more content and keep the quiz game relevant to the user. 
  
  - #### __What can a user expect?__
      - __Does it offer me what I want__
            - Yes, to have the ability to view all your favourite games on offer.  
      - __As a user I expect to see__
            - Visually, the game screen backgrounds are decorated with images relating to the current game selection.
      - __Can I contact somebody?__ 
            - Yes, there are social media links found in the footer to contact the developer. 
      - __What can I learn?__ 
            - Each question has an informative message displayed relating to its correct answer. 


- ### __Structure__ 
  
  #### __Information Architecture (IA)__ 
    ##### A basic tree structure layout . 
     ![Structure layout](/assets/readme/readme-images/structure.JPG)

    - __Interaction Design (IXD)__ 
      - The first area the user will encounter is the quiz Entry screen, where an enter button and rules button are located at the lower central area of the page. On clicking the enter button the user will be displayed a choice of game types. On clicking the rules button, a modal is displayed containing the rules of the game.
      - The game selection screen displays large images of the game types and a button to select the game type is located below each image. 
      - Once the user selects which game type they wish to play, the relevant game background and styles are applied and a display box which housed the question box and answer buttons is displayed in the central area of the page. A start button is displayed for the user to initiate the game start function to display a question and the four possible answers relating to the question.   
      - On clicking the selected answer the correct answer button changes to green and the incorrect answer buttons change to red to give the user an immediate indication of the truth of their answer choice, and the game displays an informative message to the user relating to the question asked and the correct answer. The answer buttons then disappear to reveal the next button to take the user to the next question. 
      - A correct and incorrect answer tally is displayed in the lower right and left areas of the screen respectively which increments the answer tally depending on whether the user answers correctly or incorrectly.
      - Should the user wish to leave the game an exit button is located on the lower central area of the screen which redirects the user to the entry screen where the user can begin their navigation through the game again.
      - On completing the quiz an end screen is displayed with an alternative background image and displays a message to the user displaying the correct score out of 10.
      - The user can then decide whether they wish to restart the current game or exit to the game selectors screen to choose a different game.
      - The buttons throughout the game feature a hover feature so the user can instantly see their current selection prior to clicking the selected button.
      - Each social media link also has a hover effect so the user knows the link is active and it will take the user to the relevant platform requested. 

  
 
 - ### __Skeleton__

    - Below is a set of wireframes created on balsamiq illustrating the Entry screen, game selection screen, Peppa pig game screen, Peppa Pig game end screen, Love/Hate game screen, Love/Hate game end screen, Music game screen, and Music game end screen.
      - The Initial Game Entry screen
         ![Entry Screen Wireframe from Balsamiq](/assets/readme/wireframe/entry-screen.JPG)
      - The Game selection screen
         ![Selectors screen Wireframe from Balsamiq](/assets/readme/wireframe/selectors-screen.JPG)
      - The Peppa Pig Game Screen
         ![Peppa Pig Game Screen Wireframe from Balsamiq](/assets/readme/wireframe/peppa-game-screen.JPG)
      - The Peppa Pig Game End Screen
         ![Peppa Pig End Game Screen Wireframe from Balsamiq](/assets/readme/wireframe/peppa-game-end-screen.JPG)
      - The Love/Hate Game Screen
         ![Love/Hate Game Screen Wireframe from Balsamiq](/assets/readme/wireframe/love-hate-game-screen.JPG)
      - The Love/Hate Game End Screen
         ![Love/Hate Game End Screen Wireframe from Balsamiq](/assets/readme/wireframe/love-hate-game-end-screen.JPG)
      - The Music Game Screen
         ![Music Game Screen Wireframe from Balsamiq](/assets/readme/wireframe/music-game-screen.JPG)
      - The Music Game End Screen
         ![Music Game Screen Wireframe from Balsamiq](/assets/readme/wireframe/music-game-end-screen.JPG)
 




