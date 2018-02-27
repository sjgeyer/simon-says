'use-strict';

var allUsers = [];
var score = JSON.parse(localStorage.getItem('roundNumber'))-1;

if (localStorage.allUsers){
  allUsers = JSON.parse(localStorage.getItem('allUsers'));
}

/// sorting allUsers by score
allUsers.sort(function(a, b) {
  return parseFloat(b.score) - parseFloat(a.score);
});

// populate the hi-score list
var scoreOl = document.getElementById('hi-scores');

for (var i=0; i < allUsers.length; i++){
  var newLi = document.createElement('li');
  newLi.textContent = allUsers[i].name + ': '+ allUsers[i].score;
  scoreOl.appendChild(newLi);
}

// generate the title message
var messageContent = document.getElementById('message');
messageContent.textContent = 'You made it to round ' + score + '!';