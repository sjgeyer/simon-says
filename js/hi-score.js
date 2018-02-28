'use-strict';

var score = JSON.parse(localStorage.getItem('roundNumber'));

// generate the title message
var messageContent = document.getElementById('message');
messageContent.textContent = 'You made it to round ' + score + '!';

if (localStorage.allUsers){
  var allUsers = JSON.parse(localStorage.getItem('allUsers'));
}

/// sorting allUsers by score
allUsers.sort(function(a, b) {
  return parseFloat(b.score) - parseFloat(a.score);
});

function makeElement(type, content, parent) {
  var newEl = document.createElement(type);
  newEl.textContent = content;
  parent.appendChild(newEl);
}

// populate the hi-score list
var tableHeader = ['Rank', 'Name', 'Score'];
var scoreTable = document.getElementById('hi-scores');
var trEl = document.createElement('tr');
for (var i = 0; i < tableHeader.length; i++) {
  makeElement('th', tableHeader[i], trEl);
}
scoreTable.appendChild(trEl);
for (var j = 0; j < 10; j++){
  trEl = document.createElement('tr');
  makeElement('td', j+1, trEl);
  makeElement('td', allUsers[j].name, trEl);
  makeElement('td', allUsers[j].score*100, trEl);
  scoreTable.appendChild(trEl);
  if (allUsers[j].name === JSON.parse(localStorage.getItem('userName')) && allUsers[j].score === JSON.parse(localStorage.getItem('roundNumber'))-1) {
    trEl.classList.add('current');
  }
}