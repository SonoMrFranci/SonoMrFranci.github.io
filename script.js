function setTeamNames() {
    const team1Name = document.getElementById('team1-name').value || 'Squadra 1';
    const team2Name = document.getElementById('team2-name').value || 'Squadra 2';
    
    document.getElementById('team1-display').textContent = team1Name;
    document.getElementById('team2-display').textContent = team2Name;
    
    document.getElementById('team-names').classList.add('hidden');
    document.getElementById('scoreboard').classList.remove('hidden');
    document.getElementById('reset-button').classList.remove('hidden');
}

function incrementScore(scoreId) {
    const scoreElement = document.getElementById(scoreId);
    let currentScore = parseInt(scoreElement.textContent);
    currentScore += 1;
    scoreElement.textContent = currentScore;
    animateScore(scoreElement);
}

function decrementScore(scoreId) {
    const scoreElement = document.getElementById(scoreId);
    let currentScore = parseInt(scoreElement.textContent);
    if (currentScore > 0) {
        currentScore -= 1;
        scoreElement.textContent = currentScore;
        animateScore(scoreElement);
    }
}

function resetScores() {
    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
}

function animateScore(element) {
    element.classList.add('animate__animated', 'animate__bounce');
    element.addEventListener('animationend', () => {
        element.classList.remove('animate__animated', 'animate__bounce');
    });
}
