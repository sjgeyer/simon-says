'use strict';

var red = document.getElementById('red');
var yellow = document.getElementById('yellow');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var startButton = document.getElementById('start');
var instructions = document.getElementById('instructions');
var title = document.getElementById('title');
var nextButton = document.getElementById('next');
var submitButton = document.getElementById('submit');
var exitButton = document.getElementById('exitButton');
var volElements = document.getElementById('volElements');
var gameElements = document.getElementById('gameElements');
var myTurn = document.getElementById('myTurn');
var yourTurn = document.getElementById('yourTurn');
var arrowImages = document.getElementById('arrowImages');
var roundCounter = document.getElementById('roundCounter');
var correct = document.getElementById('correct');
var wrong = document.getElementById('wrong');
var dynamicTag = document.getElementById('dynamicTag');
var round = 1;
var userName = JSON.parse(localStorage.getItem('userName'));
var baseTime = 1000;
var jumpClass = 'jump';
var livesLeft = 4;
var healthBar = document.getElementById('lives');
var repeat = false;

var soundL = new Audio('sounds/sound-L.mp3');
var soundU = new Audio('sounds/sound-U.mp3');
var soundR = new Audio('sounds/sound-R.mp3');
var soundD = new Audio('sounds/sound-D.mp3');

var addSound;

function setVolume(num){
  soundL.volume = num/10;
  soundU.volume = num/10;
  soundR.volume = num/10;
  soundD.volume = num/10;
}

document.getElementById('headMessage').innerHTML = 'Hi ' + userName + ', can you follow my moves?';

var gameOvers = document.getElementById('gameOvers');
var gameOverGhost = document.getElementById('gameOverGhost');
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
      addJump = setTimeout(function() {red.classList.add(jumpClass);}, baseTime*i);
      removeJump = setTimeout(function() {red.classList.remove(jumpClass);}, (baseTime*i)+baseTime/2);
      addSound = setTimeout(function() {soundL.play();}, baseTime*i);
    }
    if (randoms[i] === 2) {
      addJump = setTimeout(function() {yellow.classList.add(jumpClass);}, baseTime*i);
      removeJump = setTimeout(function() {yellow.classList.remove(jumpClass);}, (baseTime*i)+baseTime/2);
      addSound = setTimeout(function() {soundU.play();}, baseTime*i);
    }
    if (randoms[i] === 3) {
      addJump = setTimeout(function() {green.classList.add(jumpClass);}, baseTime*i);
      removeJump = setTimeout(function() {green.classList.remove(jumpClass);}, (baseTime*i)+baseTime/2);
      addSound = setTimeout(function() {soundR.play();}, baseTime*i);
    }
    if (randoms[i] === 4) {
      addJump = setTimeout(function() {blue.classList.add(jumpClass);}, baseTime*i);
      removeJump = setTimeout(function() {blue.classList.remove(jumpClass);}, (baseTime*i)+baseTime/2);
      addSound = setTimeout(function() {soundD.play();}, baseTime*i);
    }
    if (i === randoms.length){
      clearInterval(iterate);
    }
  }
}

function computerTurn () {
  if (round === 1 && repeat === false){
    addRandom();
  }
  if (repeat === false){
    addRandom();
  }
  if (repeat === true){
    repeat = false;
  }
  if (round === 4){
    baseTime = 600;
    jumpClass = 'jump2x';
    dynamicTag.textContent = 'SPEED UP!';
  }
  if (round === 8){
    jumpClass = 'flip';
    baseTime = 400;
    dynamicTag.textContent = 'SPEED UP! FLIP!';
  }
  if (round === 11){
    jumpClass = 'flipFast';
    baseTime = 300;
    red.src = 'images/Spooky-Small.png';
    yellow.src = 'images/Spooky-Small.png';
    green.src = 'images/Spooky-Small.png';
    blue.src = 'images/Spooky-Small.png';
    soundL.src = 'sounds/sound-S.mp3';
    soundU.src = 'sounds/sound-S.mp3';
    soundR.src = 'sounds/sound-S.mp3';
    soundD.src = 'sounds/sound-S.mp3';
    
    dynamicTag.textContent = 'SPEED UP! FLIP! SPOOKY CHALLENGE!';
  }
  submitButton.removeEventListener('click', checkLogic);
  window.removeEventListener('keydown', computerTurn, true);
  roundCounter.textContent = 'Round ' + round;
  arrowImages.textContent = '';
  yourTurn.style.display = 'none';
  myTurn.style.display = 'block';
  startButton.style.display = 'none';
  instructions.style.display = 'none';
  title.style.display = 'none';
  submitButton.style.display = 'none';
  exitButton.style.display = 'block';
  volElements.style.display = 'block';
  nextButton.style.display = 'none';
  correct.style.display = 'none';
  wrong.style.display = 'none';
  iterate = setInterval(iterateArray, baseTime);
  userTurnTimeout = setTimeout(userTurn, (randoms.length*baseTime)+baseTime);
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
    break;
  case 'ArrowUp':
    keyPresses.push(2);
    newArrow = document.createElement('img');
    newArrow.src = 'images/Arrow-U.png';
    arrowImages.appendChild(newArrow);
    break;
  case 'ArrowLeft':
    keyPresses.push(1);
    newArrow = document.createElement('img');
    newArrow.src = 'images/Arrow-L.png';
    arrowImages.appendChild(newArrow);
    break;
  case 'ArrowRight':
    keyPresses.push(3);
    newArrow = document.createElement('img');
    newArrow.src = 'images/Arrow-R.png';
    arrowImages.appendChild(newArrow);
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

function User(name, score, current){
  this.name = name;
  this.score = score;
  this.current = current;
  User.allUsers.push(this);
}

function checkLogic(){
  window.removeEventListener('keydown', keyDown, true);
  for(var i = 0; i < randoms.length; i++) {
    if(livesLeft === 1 && randoms[i] !== keyPresses[i] || livesLeft === 1 && randoms.length !== keyPresses.length) {
      gameElements.textContent = '';

      title.style.display = 'block';
      gameOvers.style.display = 'block';
      gameOverGhost.src='images/Ghost-D.png';
      window.removeEventListener('keydown', computerTurn, true);

      scoresButton.style.display = 'block';
      localStorage.setItem('roundNumber', JSON.stringify(round));
      if (localStorage.allUsers) {
        User.allUsers = JSON.parse(localStorage.getItem('allUsers'));
      }
      for ( var j = 0; j < User.allUsers.length; j++) {
        User.allUsers[j].current = false;
      }
      if(round > 1) {
        new User(userName, round-1, true);
      }
      localStorage.setItem('allUsers', JSON.stringify(User.allUsers));
      break;
    } else if (randoms[i] !== keyPresses[i] || randoms.length !== keyPresses.length) {
      livesLeft--;
      round--;
      repeat = true;
      window.addEventListener('keydown', computerTurn, true);
      submitButton.style.display = 'none';
      nextButton.style.display = 'block';
      wrong.style.display = 'block';
      correct.style.display = 'none';
      healthBar.removeChild(healthBar.lastElementChild);
      break;
    } else {
      submitButton.style.display = 'none';
      nextButton.style.display = 'block';
      correct.style.display = 'block';
      wrong.style.display = 'none';
      window.addEventListener('keydown', computerTurn, true);
    }
  }
  round++;
}

roundCounter.textContent = 'Round ' + round;
startButton.addEventListener('click', computerTurn);
nextButton.addEventListener('click', computerTurn);