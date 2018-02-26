'use-strict';

User.allUsers = [];

if (localStorage.allUsers){
User.allUsers = JSON.parse(localStorage.getItem('allUsers'))
}

// creating new 'User' object

function User(name, score){
  this.name = name;
  this.score = score;
  User.allUsers.push(this);
}

// 'userName' and 'score' from local storage, pushed by game.html javascript

var userName = localStorage.getItem(userName);
var score = JSON.parse(localStorage.getItem(roundNumber))

new User(userName, score);

// update local storage

localStorage.setItem('allUsers',JSON.stringify(User.allUsers));

/// sorting allUsers by score

User.allUsers.sort(function(a, b) {
  return parseFloat(b.score) - parseFloat(a.score);
});

// populate the hi-score list

var scoreOl = document.getElementById('hi-scores');

for (var i=0; i < User.allUsers.length; i++){
    var newLi = document.createElement('li');
    newLi.textContent = User.allUsers[i].name + ': '+ User.allUsers[i].score;
    scoreOl.appendChild(newLi);
}

// generate the title message

var messageContent = document.getElementById('message');
messageContent.textContent = 'You made it to round ' + roundNumber + '!';


