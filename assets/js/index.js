localStorage.setItem("username", ""); // Clear the value of the "username" key in local storage

// Add a click event listener to the "username-save-btn"
document.getElementById("username-save-btn").addEventListener("click", saveUsername);

/** Save the value of the "username" input to local storage */
function saveUsername() {

    localStorage.setItem("username", document.getElementById("username").value);
}