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
    input.value = ""; // Clear the input value.

    validate = document.getElementById("validation").innerText =
        `${localStorage.getItem("username")}, you are all set!`; // Sets a validation message

    form.style.display = "none"; // When username is set,hide the form element
});

// Add a click event listener to the "start-game-btn" element.
document.getElementById("start-game-btn").addEventListener("click", initializeQuiz);

/** Checks whether the user has set a username in local storage.
 * If username is not set, display message asking the user to set a username.
 * Otherwise, redirect user to the quiz page.
 */
function initializeQuiz() {

    if (localStorage.getItem("username") === "") {
        validate = document.getElementById("validation").innerText = "Please set a username first!";
    } else {
        window.location.href = "./quiz.html";
    }
}

// Add a click event listener to the "how-to-play-btn element".
document.getElementById("how-to-play-btn").addEventListener("click", howToPlay);

function howToPlay() {

    if (isVisible) {
        document.getElementById("how-to-play").innerText = "";
    } else {
        document.getElementById("how-to-play").innerText = rules;
    }
    isVisible = !isVisible; // Toggle the value of the isVisible variable.
}