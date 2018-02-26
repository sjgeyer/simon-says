var red = document.getElementById('red');
var yellow = document.getElementById('yellow');
var blue = document.getElementById('blue');
var green = document.getElementById('green');

var testArray = [1, 2, 3, 4, 1, 2, 3, 4];

var addJump;
var removeJump;

function iterateArray() {
  for (var i = 0; i <= testArray.length; i++) {
    if (testArray[i] === 1) {
      addJump = setTimeout(function() {red.classList.add('jump');}, 1000*i);
      removeJump = setTimeout(function() {red.classList.remove('jump');}, (1000*i)+1000);
    }
    if (testArray[i] === 2) {
      addJump = setTimeout(function() {yellow.classList.add('jump');}, 1000*i);
      removeJump = setTimeout(function() {yellow.classList.remove('jump');}, (1000*i)+1000);
    }
    if (testArray[i] === 3) {
      addJump = setTimeout(function() {green.classList.add('jump');}, 1000*i);
      removeJump = setTimeout(function() {green.classList.remove('jump');}, (1000*i)+1000);
    }
    if (testArray[i] === 4) {
      addJump = setTimeout(function() {blue.classList.add('jump');}, 1000*i);
      removeJump = setTimeout(function() {blue.classList.remove('jump');}, (1000*i)+1000);
    }
    if (i === testArray.length){
      clearInterval(iterate);
    }
  }
}

var iterate = setInterval(iterateArray, 1000);
