# Capital Cities

Capital Cities is an engaging online quiz game that allows users to create a username and participate in a quiz where they are asked to identify the capital city of a given country. Upon completion of the quiz, the user's score is saved into a highscore table, which adds a competitive element to the game.

The game's focus on identifying capital cities is an effective way to test users' knowledge of geography and world events, helping them to learn about different countries and their capital cities. Additionally, by tracking their scores over time, users can challenge themselves to improve their performance and continue learning.

![Am I responsive](/assets/images/am-i-responsive.PNG)

[View Capital Cities live project here](https://thomas-tomo.github.io/capital-cities/)
- - -
## Table of Contents

---
## User Experience (UX)

Capital Cities quiz provides an enjoyable and educational experience that challenges users to test their knowledge of geography. With its easy-to-use interface and leaderboard feature, this quiz is sure to keep users engaged and coming back for more.

### User Stories

* First-time visitor goals
    * Understand the main purpose of the website, that its a quiz game.
    * Creating a username.
    * Taking the quiz.
    * Checking their score in the High Scores Table.
    * Enjoying the overall experience.

* Returning visitor goals
    * Improving their score.
    * Exploring new features.
    * Checking high scores.
    * Continuing to enjoy the overall experience.

* Frequent user goals
    * Aim to master the quiz by achieving a perfect score.
    * Competing with other users in their local enviroment.
    * Exploring new features.
    * Continuing to enjoy the overall experience.

---

## Features

* Main objective is to provide an engaging and interactive platform for users to test and improve their knowledge of world geography.
* High Scores table that displays high scores from different players in the local enviroment
* Responsive design that is optimized for different devices, such as desktop computers, tablets, and smartphones.

### Existing Features

* Capital Cities Logo and Heading
    * It is prominently displayed at the top of the page, ensuring that users can easily locate and identify the game. Upon visiting the website, the user's attention will be immediately drawn to the game's name, which is displayed in a clear and visible manner.
    
![Logo and Heading](/assets/images/capital-cities-logo.PNG)

* Quiz landing page
    * User profile section for setting up a username and saving it.
    * Start game button, which only can be accesed if the user has set a username.
    * High scores button for displaying top scores of players.
    * How to play button with detailed game instructions.

![Interface](/assets/images/interface.PNG)

* High Scores
    * High Scores page is designed to encourage friendly competition and motivate users to improve their scores. The unlock feature ensures that users can only access the high scores table after they have played the quiz, adding an element of challenge and engagement to the game.

![High Scores locked](/assets/images/locked-table.PNG)

* How to Play 
    * Toggle button that displays detailed game instructions.

![How to Play](/assets/images/rules.PNG)

* Quiz interface
    * Question counter.
    * Score counter.
    * Question and three options to choose from.

![Quiz interface](/assets/images/quiz-interface.PNG)

* Quiz Result
    * User's username and quiz performance: This feature displays the user's username and how well they performed in the quiz, giving them a sense of achievement and satisfaction.
    * Score display: This feature displays the user's final score, reflecting their performance in the quiz.
    * Play again button: This button allows users to play the quiz again.
    * High scores button: This button allows users to view the high scores table.

![Quiz Result](/assets/images/quiz-result.PNG)

* High Scores table
    * Username column: This column will display the usernames of different players who have achieved high scores.
    * Score column: This column will display the scores achieved by each player, sorted from best to worst score.
    *High Scores table is designed to showcase top performers and encourage friendly competition among players. It includes essential information such as usernames and scores, allowing users to compare their performance and track their progress over time.
    * This table will only include players from local enviroment, meaning from the same device.

![High Score table](/assets/images/unlocked-table.PNG)

* Footer
    * Holds the name of the developer.

![Footer](/assets/images/footer.PNG)

## Features Left to Implement

* Additional questions might be available
* Additional quiz types:
    * Capital Cities of Countries quiz can be divided into different versions based on the continent
* The quiz interface can include a timer feature to add an element of urgency to the game. 

---

## Design

 * Colour Scheme
    * Primary colors used on the website: ![Color Scheme](/assets/images/color-scheme.PNG)

 * Typography
    * Domine font is the main font used throughout the website with serif as its fallback font.

 * Wireframes
    * Pen and paper in the notebook: simple and effective.

---

## Technologies Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
* To handle data in my JavaScript code, I used [JSON](https://en.wikipedia.org/wiki/JSON) as a data format.

---

## Frameworks, Libraries & Programs Used

* [Gitpod](https://www.gitpod.io/)
    * To write the code.
* [Git](https://git-scm.com/)
    * for vesion control.
* [Github](https://github.com/)
    * Deployment of the website and storing the files online.
* [Google Fonts](https://fonts.google.com/)
    * Import main font the website.
* [Am I Responsive](https://ui.dev/amiresponsive)
    * Mockup picture for the README file.

---

## Testing

The W3C Markup Validator, W3C CSS Validator and JSHint, a JavaScript Code Quality Tool were used to validate every html, css, and js file to ensure there were no errors.

* [W3C Markup Validator](https://validator.w3.org/)
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
* [JSHint](https://jshint.com/)

### Validation results

<details>
<summary>HTML files, no errors were returned when passing through the official W3C Markup Validator.
</summary>

![Home Page validation result](/assets/images/html-validation.PNG)
</details>

<details>
<summary>CSS file, No errors were found when passing through the official W3C CSS Validator. 
</summary>

![Home Page validation result](/assets/images/css-validation.PNG)
</details>

### JSHint results

<details>
<summary>index.js, No errors were found when passing through the official Jshint validator.
</summary>

![Home Page validation result](/assets/images/index-js.PNG)
</details>

<details>
<summary>quiz.js, No errors were found when passing through the official Jshint validator.
</summary>

![Home Page validation result](/assets/images/quiz-js.PNG)
</details>

<details>
<summary>quiz-end.js, No errors were found when passing through the official Jshint validator.
</summary>

![Home Page validation result](/assets/images/quiz-end-js.PNG)
</details>

<details>
<summary>highscores.js, No errors were found when passing through the official Jshint validator.
</summary>

![Home Page validation result](/assets/images/highscores-js.PNG)
</details>

### Manual Testing 

* The website was tested on Google Chrome, Microsoft Edge, and Opera browsers.
* The website was viewed on a desktop computer, laptop, tablet, and a variety of mobile phones, such as Samsung Galaxy A52.
* A large amount of testing was done to ensure links between pages are working correctly on all pages.
* Family and friends were asked to review the website for a better understanding of the user experience.
* Family and friends were asked to play the quiz and give feedback.
* Dev Tools was used to test how the site looks on various screen sizes.
* Dev Tools Console was used to find any bugs that were not spotted.
* Dev Tools Application's local storage used to track is the code functioning as intended.
* Manually navigating to specific HTML pages by typing the URL of the page and checking the console and local storage.
* JSHint was used to check quality of the code and any errors missed by the developer.

### Fixed Bugs

* By manually navigating to specific HTML pages by typing the URL of the page and checking the console and local storage
* By manually navigating to quiz-end.html there was a bug displaying null value of the username and score variables that were stored it the local storage.
* Bug was fixed with window.location.href, if a user tries to navigate to the quiz-end.html manually it redirects them to the index.html page because they didin't play the quiz yet.
* The code checks if the mostRecentScore is -1 and that is how it triggers the redirect to index.html page
* If somebody decided to clear all key, value properties from the local storage they still would not be able to start the quiz.
* The website is protected from users starting the game without a username.

### Lighthouse Report

#### Mobile analysis
<details>
<summary>Performance
</summary>

![Home Page lighthouse report](/assets/images/lighthouse-report-mobile.PNG)
</details>

#### Desktop analysis

<details>
<summary>Performance
</summary>

![Home Page lighthouse report](/assets/images/lighthouse-report-desktop.PNG)
</details>

## Deployment

### GitHub Pages

GitHub Pages used to deploy live version of the website.
1. Log in to GitHub and locate [GitHub Repository capital-cities](https://github.com/Thomas-Tomo/capital-cities)
2. At the top of the Repository(not the main navigation) locate "Settings" button on the menu.
3. Scroll down the Settings page until you locate "GitHub Pages".
4. Under "Source", click the dropdown menu "None" and select "Main" and click "Save".
5. The page will automatically refresh.
6. Scroll back to locate the now-published site [link](https://thomas-tomo.github.io/capital-cities/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the repository, we make a copy of the original repository on our GitHub account to view and change without affecting the original repository by using these steps:

1. Log in to GitHub and locate [GitHub Repository capital-cities](https://github.com/Thomas-Tomo/capital-cities)
2. At the top of the Repository(under the main navigation) locate "Fork" button.
3. Now you should have a copy of the original repository in your GitHub account.

### Local Clone

1. Log in to GitHub and locate [GitHub Repository capital-cities](https://github.com/Thomas-Tomo/capital-cities)
2. Under the repository name click "Clone or download"
3. Click on the code button, select clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone` and then paste The URL copied in the step 3.
7. Press Enter and your local clone will be created.

---

