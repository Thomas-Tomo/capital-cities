localStorage.setItem("username", ""); // Clear the value of the "username" key in local storage

// Add a click event listener to the "username-save-btn"
document.getElementById("username-save-btn").addEventListener("click", saveUsername);

function saveUsername() {
    localStorage.setItem("username", document.getElementById("username").value)
    console.log(username)
}