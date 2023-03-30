let validate = document.getElementById("validation").innerText = "";
const form = document.getElementById("user-form");
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

function initializeQuiz() {

    if (localStorage.getItem("username") === "") {
        validate = document.getElementById("validation").innerText = "Please set a username first!";
    } else {
        window.location.href = "./quiz.html";
    }
}