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

    // Nascondi il messaggio di errore dopo 3 secondi
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);
}
