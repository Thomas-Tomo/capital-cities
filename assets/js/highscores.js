const printHighScore = () => {

    // Retrieve highscores from local storage.
    const highScores = JSON.parse(localStorage.getItem("highscores"));

    // Sort the highscores array by score in descending order.
    highScores.sort((a, b) => b.score - a.score);

    // Get a reference to the table element.
    const table = document.getElementById("highscores");

    const nameRow = table.insertRow();
    const nameCell = nameRow.insertCell();
    nameCell.colSpan = 2;
    nameCell.innerText = "High Scores";
    nameCell.style.fontWeight = "bolder";

    
}

printHighScore()