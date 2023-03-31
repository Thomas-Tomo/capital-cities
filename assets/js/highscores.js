const printHighScore = () => {

    // Retrieve highscores from local storage.
    const highScores = JSON.parse(localStorage.getItem("highscores"));

    // Sort the highscores array by score in descending order.
    highScores.sort((a, b) => b.score - a.score);

    // Get a reference to the table element.
    const table = document.getElementById("highscores");

    // Create table name row
    const nameRow = table.insertRow();
    const nameCell = nameRow.insertCell();
    nameCell.colSpan = 2;
    nameCell.innerText = "High Scores";
    nameCell.style.fontWeight = "bolder";

    // Create header row
    const headerRow = table.insertRow();
    const header1 = headerRow.insertCell();
    const header2 = headerRow.insertCell();
    header1.innerText = "Username";
    header2.innerText = "Score";
    header1.style.fontWeight = "bold";
    header2.style.fontWeight = "bold";
}

printHighScore()