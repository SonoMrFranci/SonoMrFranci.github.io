let scoreTeam1 = 0;
let scoreTeam2 = 0;

function incrementScore(team) {
    if (team === 1) {
        scoreTeam1++;
        document.getElementById('score1').innerText = scoreTeam1;
    } else if (team === 2) {
        scoreTeam2++;
        document.getElementById('score2').innerText = scoreTeam2;
    }
}

function decrementScore(team) {
    if (team === 1) {
        if (scoreTeam1 > 0) {
            scoreTeam1--;
            document.getElementById('score1').innerText = scoreTeam1;
        } else {
            showError('Error: Impossibile decrementare il punteggio sotto zero');
        }
    } else if (team === 2) {
        if (scoreTeam2 > 0) {
            scoreTeam2--;
            document.getElementById('score2').innerText = scoreTeam2;
        } else {
            showError('Error: Impossibile decrementare il punteggio sotto zero');
        }
    }
}

function resetScores() {
    scoreTeam1 = 0;
    scoreTeam2 = 0;
    document.getElementById('score1').innerText = scoreTeam1;
    document.getElementById('score2').innerText = scoreTeam2;
}

function showError(message) {
    const errorElement = document.getElementById('error-message');
    errorElement.innerText = message;
    errorElement.style.display = 'block';

    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);
}


function setTeamNames() {
    var team1NameInput = document.getElementById("team1Name");
    var team2NameInput = document.getElementById("team2Name");
    var team1Label = document.getElementById("team1Label");
    var team2Label = document.getElementById("team2Label");
    var scoreboardContainer = document.querySelector(".scoreboard-container");

    if (team1NameInput.value.trim() === "" || team2NameInput.value.trim() === "") {
        document.getElementById("error-message").innerText = "Inserisci i nomi di entrambe le squadre.";
        return;
    }

    team1Label.innerText = team1NameInput.value;
    team2Label.innerText = team2NameInput.value;

    document.querySelector(".team-inputs").style.display = "none";
    document.getElementById("error-message").innerText = "";

    scoreboardContainer.style.display = "flex";
}
