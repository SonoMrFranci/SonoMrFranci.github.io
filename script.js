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
        scoreTeam1--;
        document.getElementById('score1').innerText = scoreTeam1;
    } else if (team === 2) {
        scoreTeam2--;
        document.getElementById('score2').innerText = scoreTeam2;
    }
}

function resetScores() {
    scoreTeam1 = 0;
    scoreTeam2 = 0;
    document.getElementById('score1').innerText = scoreTeam1;
    document.getElementById('score2').innerText = scoreTeam2;
}
