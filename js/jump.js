var red = document.getElementById('red');
var yellow = document.getElementById('yellow');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var startButton = document.getElementById('start');
var nextButton = document.getElementById('next');
var submitButton = document.getElementById('submit');
var myTurn = document.getElementById('myTurn');
var yourTurn = document.getElementById('yourTurn');
var arrowImages = document.getElementById('arrowImages');
var roundCounter = document.getElementById('roundCounter');
var round = 1;

var addJump;
var removeJump;
var iterate;

var randoms = [];
var keyPresses = [];

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
  roundCounter.textContent = 'Round ' + round;
  arrowImages.textContent = '';
  round++;
  yourTurn.style.display = 'none';
  myTurn.style.display = 'block';
  startButton.style.display = 'none';
  addRandom();
  console.log(randoms);
  iterate = setInterval(iterateArray, 1000);
  userTurn();
}

function userTurn () {
  keyPresses = [];
  myTurn.style.display = 'none';
  yourTurn.style.display = 'block';
  window.addEventListener('keydown', function (event) {
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
    default:
      return;
    }
    event.preventDefault();
  }, true);
}

function checkLogic(){
  for(var i = 0; i < randoms.length; i++) {
    if(randoms[i] !== keyPresses[i]) {
      console.log('This would link to the hi-score page');
    } else {
      console.log('All good');
    }
  }
}

roundCounter.textContent = 'Round ' + round;
startButton.addEventListener('click', computerTurn);
nextButton.addEventListener('click', computerTurn);
submitButton.addEventListener('click', checkLogic);