localStorage.setItem("username", ""); // Clear the value of the "username" key in local storage
let username = document.getElementById("username").value; // Save username in a variable
console.log(username)

// Add a click event listener to the "username-save-btn"
document.getElementById("username-save-btn").addEventListener("click", saveUsername);

function saveUsername() {
    
}