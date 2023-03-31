let mostRecentScore = localStorage.getItem("mostRecentScore");
let username = localStorage.getItem("username");
let user = document.getElementById("user");
let scoreResult = document.getElementById("score-result");

scoreResult.innerText = `You scored ${mostRecentScore} out of 100 points!`;