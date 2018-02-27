'use strict';

var red = document.getElementById('red');
var yellow = document.getElementById('yellow');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var startButton = document.getElementById('start');
var nextButton = document.getElementById('next');
var submitButton = document.getElementById('submit');
var gameElements = document.getElementById('gameElements');
var myTurn = document.getElementById('myTurn');
var yourTurn = document.getElementById('yourTurn');
var arrowImages = document.getElementById('arrowImages');
var roundCounter = document.getElementById('roundCounter');
var correct = document.getElementById('correct');
var round = 1;
var userName = JSON.parse(localStorage.getItem('userName'));

document.getElementById('headMessage').innerHTML = 'Hi ' + userName + ', can you follow my moves?';

var gameOver = document.createElement('img');
gameOver.src = 'images/Game-Over.png';
var scoresButton = document.getElementById('scoresButton');

var addJump;
var removeJump;
var iterate;
var userTurnTimeout;

var randoms = [];
var keyPresses = [];
User.allUsers = [{name: 'Collin', score: 10}, {name: 'James', score: 10}, {name: 'Matt', score: 10}, {name: 'Sarah', score: 10}];

function addRandom(){
  randoms.push(Math.floor(Math.random() * 4)+1);
}

function iterateArray() {
  for (var i = 0; i <= randoms.length; i++) {
    if (randoms[i] === 1) {
      addJump = setTimeout(function() {red.classList.add('jump');}, 1000*i);
      removeJump = setTimeout(function() {red.classList.remove('jump');}, (1000*i)+500);
    }
    if (randoms[i] === 2) {
      addJump = setTimeout(function() {yellow.classList.add('jump');}, 1000*i);
      removeJump = setTimeout(function() {yellow.classList.remove('jump');}, (1000*i)+500);
    }
    if (randoms[i] === 3) {
      addJump = setTimeout(function() {green.classList.add('jump');}, 1000*i);
      removeJump = setTimeout(function() {green.classList.remove('jump');}, (1000*i)+500);
    }
    if (randoms[i] === 4) {
      addJump = setTimeout(function() {blue.classList.add('jump');}, 1000*i);
      removeJump = setTimeout(function() {blue.classList.remove('jump');}, (1000*i)+500);
    }
    if (i === randoms.length){
      clearInterval(iterate);
    }
  }
}

function computerTurn () {
  submitButton.removeEventListener('click', checkLogic);
  roundCounter.textContent = 'Round ' + round;
  arrowImages.textContent = '';
  yourTurn.style.display = 'none';
  myTurn.style.display = 'block';
  startButton.style.display = 'none';
  submitButton.style.display = 'none';
  nextButton.style.display = 'none';
  correct.style.display = 'none';
  addRandom();
  console.log(randoms);
  iterate = setInterval(iterateArray, 1000);
  userTurnTimeout = setTimeout(userTurn, (randoms.length*1000)+1000);
}

function keyDown(event) {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
  case 'ArrowDown':
    keyPresses.push(4);
    var newArrow = document.createElement('img');
    newArrow.src = 'images/Arrow-D.png';
    arrowImages.appendChild(newArrow);
    console.log(keyPresses);
    break;
  case 'ArrowUp':
    keyPresses.push(2);
    newArrow = document.createElement('img');
    newArrow.src = 'images/Arrow-U.png';
    arrowImages.appendChild(newArrow);
    console.log(keyPresses);
    break;
  case 'ArrowLeft':
    keyPresses.push(1);
    newArrow = document.createElement('img');
    newArrow.src = 'images/Arrow-L.png';
    arrowImages.appendChild(newArrow);
    console.log(keyPresses);
    break;
  case 'ArrowRight':
    keyPresses.push(3);
    newArrow = document.createElement('img');
    newArrow.src = 'images/Arrow-R.png';
    arrowImages.appendChild(newArrow);
    console.log(keyPresses);
    break;
  case 'Backspace':
    keyPresses.pop();
    arrowImages.removeChild(arrowImages.lastChild);
    break;
  case 'Enter':
    checkLogic();
    break;
  default:
    return;
  }
  event.preventDefault();
}

function userTurn () {
  keyPresses = [];
  myTurn.style.display = 'none';
  yourTurn.style.display = 'block';
  submitButton.style.display = 'block';
  nextButton.style.display = 'none';
  window.addEventListener('keydown', keyDown, true);
  submitButton.addEventListener('click', checkLogic);
}

function User(name, score){
  this.name = name;
  this.score = score;
  User.allUsers.push(this);
}

function checkLogic(){
  window.removeEventListener('keydown', keyDown, true);
  for(var i = 0; i < randoms.length; i++) {
    if(randoms[i] !== keyPresses[i] || randoms.length !== keyPresses.length) {
      gameElements.textContent = '';
      gameElements.appendChild(gameOver);
      scoresButton.style.display = 'block';
      localStorage.setItem('roundNumber', JSON.stringify(round));
      if (localStorage.allUsers) {
        User.allUsers = JSON.parse(localStorage.getItem('allUsers'));
      }
      if(round > 1) {
        new User(userName, round-1);
      }
      localStorage.setItem('allUsers', JSON.stringify(User.allUsers));
      break;
    } else {
      submitButton.style.display = 'none';
      nextButton.style.display = 'block';
      correct.style.display = 'block';
    }
  }
  console.log(round);
  round++;
}

roundCounter.textContent = 'Round ' + round;
startButton.addEventListener('click', computerTurn);
nextButton.addEventListener('click', computerTurn);