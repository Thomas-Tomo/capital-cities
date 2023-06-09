let validate = document.getElementById("validation").innerText = "";
const form = document.getElementById("user-form");
let isVisible = false;
let rules = "This quiz will put your knowledge\n" +
    "to the test by asking you to select\n" +
    "the correct capital city of the\n" +
    "country in question. Choose the\n" +
    "answer you think is correct and\n" +
    "finish the quiz by trying to get\n" +
    "all of the answers correct!";
localStorage.setItem("username", ""); // Clear the value of the "username" key in local storage.


// Add a click event listener to the "username-save-btn" element.
document.getElementById("username-save-btn").addEventListener("click", saveUsername);

/** Save the value of the "username" input to local storage. */
function saveUsername() {

    localStorage.setItem("username", document.getElementById("username").value);
}

// Add a "submit" event listener to the form element.
form.addEventListener("submit", function (event) {

    event.preventDefault(); // Prevents default submission.

    const input = document.getElementById("username");

    const highScores = JSON.parse(localStorage.getItem("highscores")) || [];

    let usernameExists = false;

    for (let i = 0; i < highScores.length; i++) {

        if (highScores[i].username === input.value) {
            usernameExists = true;
            break;
        }
    }
    // If username exists, ask user to choose a different username.
    if (usernameExists) {
        validate = document.getElementById("validation").innerText = "Please choose a different username";
    } else {
        validate = document.getElementById("validation").innerText =
            `${localStorage.getItem("username")}, you are all set!`; // Sets a validation message

        form.style.display = "none"; // When username is set,hide the form element
    }

    input.value = ""; // Clear the input value.

});

// Add a click event listener to the "start-game-btn" element.
document.getElementById("start-game-btn").addEventListener("click", initializeQuiz);

/** Checks whether the user has set a username in local storage.
 * If username is not set, display message asking the user to set a username.
 * If the username is taken ask the user to set a different username.
 * Otherwise, redirect user to the quiz page.
 */
function initializeQuiz() {

    const username = localStorage.getItem("username") || "";
    if (username === "") {
        validate = document.getElementById("validation").innerText = "Please set a username first!";
    } else {
        const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
        const usernameExists = highScores.some(score => score.username === username);

        if (usernameExists) {
            validate = document.getElementById("validation").innerText = "Please choose a different username";
        } else {
            window.location.href = './quiz.html';
        }
    }
}

// Add a click event listener to the "how-to-play-btn element".
document.getElementById("how-to-play-btn").addEventListener("click", howToPlay);

/** Toggles the visibility of the "how to play section".
 * Uses the global variable isVisible to keep track of current visibility state.
 * If "isVisible" is true hide quiz rules, otherwise display quiz rules.
 */
function howToPlay() {

    if (isVisible) {
        document.getElementById("how-to-play").innerText = "";
    } else {
        document.getElementById("how-to-play").innerText = rules;
    }
    isVisible = !isVisible; // Toggle the value of the isVisible variable.
}