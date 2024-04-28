document.getElementById('team-generator').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var participants = document.getElementById('participants').value.split('\n').map(function(participant) {
      return participant.trim();
    }).filter(function(participant) {
      return participant !== '';
    });
  
    var numTeams = document.getElementById('num-teams').value;
  
    if (numTeams > participants.length) {
      alert('The number of teams cannot be greater than the number of participants.');
      return;
    }
  
    var teams = [];
    for (var i = 0; i < numTeams; i++) {
      teams.push([]);
    }
  
    for (var i = 0; i < participants.length; i++) {
      teams[i % numTeams].push(participants[i]);
    }
  
    var teamsDiv = document.getElementById('teams');
    teamsDiv.innerHTML = '';
    for (var i = 0; i < teams.length; i++) {
      var teamDiv = document.createElement('div');
      teamDiv.textContent = 'Team ' + (i + 1) + ': ' + teams[i].join(', ');
      teamsDiv.appendChild(teamDiv);
    }
  });
