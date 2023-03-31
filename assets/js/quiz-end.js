let mostRecentScore = localStorage.getItem("mostRecentScore");
let username = localStorage.getItem("username");
let user = document.getElementById("user");
let scoreResult = document.getElementById("score-result");

scoreResult.innerText = `You scored ${mostRecentScore} out of 100 points!`;

if (mostRecentScore >= 90) {
    user.innerText = `Amazing knowledge, ${username}!`;
} else if (mostRecentScore >= 70) {
    user.innerText = `Well done ${username}!`;
} else if (mostRecentScore >= 50) {
    user.innerText = `You can do better ${username}!`;
} else {
    user.innerText = `That was poor ${username}!`;
}