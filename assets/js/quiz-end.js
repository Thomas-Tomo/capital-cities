let mostRecentScore = localStorage.getItem("mostRecentScore");
let username = localStorage.getItem("username");
let user = document.getElementById("user");
let scoreResult = document.getElementById("score-result");

// Display quiz score to scoreResult inner text.
scoreResult.innerText = `You scored ${mostRecentScore} out of 100 points!`;

// Check how well did the user do and display appropriate message.
if (mostRecentScore >= 90) {
    user.innerText = `Amazing knowledge, ${username}!`;
} else if (mostRecentScore >= 70) {
    user.innerText = `Well done ${username}!`;
} else if (mostRecentScore >= 50) {
    user.innerText = `You can do better ${username}!`;
} else {
    user.innerText = `That was poor ${username}!`;
}

// Create an object that stores two properties.
const quizResult = {
    username: username,
    score: mostRecentScore
};

// Retrieve the existing array of objects from local storage.
let existingArray = JSON.parse(localStorage.getItem("highscores"));

// If the array doesn't exist yet, create it.
if (!existingArray) {
    existingArray = [];
}

// Check if an object with the same properties already exist in the existingArray
if (existingArray.some(item => JSON.stringify(item) === JSON.stringify(quizResult))) {
    user.innerText = `Same score again ${username}!`;
} else {
    existingArray.push(quizResult);
}

// Save the updated array to local storage.
localStorage.setItem("highscores", JSON.stringify(existingArray));