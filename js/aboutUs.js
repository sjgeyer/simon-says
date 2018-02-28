'use strict';

window.addEventListener('keydown', function (event) {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
  case 'ArrowDown':
    makeCollin();
    break;
  case 'ArrowUp':
    makeMatt();
    break;
  case 'ArrowLeft':
    makeSarah();
    break;
  case 'ArrowRight':
    makeJames();
    break;
  default:
    return;
  }
  event.preventDefault();
}, true);


document.getElementById('info').hidden = true;
var sarahImg = document.getElementById('imgSarah');
var collinImg = document.getElementById('imgCollin');
var mattImg = document.getElementById('imgMatt');
var jamesImg = document.getElementById('imgJames');
var images = [sarahImg, collinImg, mattImg, jamesImg];

function clear(id) {
  for (var i = 0; i < images.length; i++) {
    if(images[i].classList && images[i] !== id) {
      images[i].classList.remove('focusL');
      images[i].classList.remove('focusR');
    }
  }
}
function makeCollin(){
  var collinInfo = 'This is where Collin\'s info will go';
  document.getElementById('info').innerHTML = collinInfo;
  document.getElementById('info').style.borderColor = '#0000ff';
  collinImg.classList.toggle('focusR');
  clear(collinImg);
  document.getElementById('info').hidden = false;
}
function makeSarah(){
  var sarahInfo = 'Sarah is an environmental activist	turned coding enthusiast. She enjoys eating burritos, watching true crime documentaries, and falling asleep on other people\'s couches.';
  document.getElementById('info').innerHTML = sarahInfo;
  document.getElementById('info').style.borderColor = '#ff0000';
  sarahImg.classList.toggle('focusL');
  clear(sarahImg);
  document.getElementById('info').hidden = false;
}
function makeMatt(){
  var mattInfo = 'This is where Matt\'s info will go';
  document.getElementById('info').innerHTML = mattInfo;
  document.getElementById('info').style.borderColor = '#fff000';
  mattImg.classList.toggle('focusL');
  clear(mattImg);
  document.getElementById('info').hidden = false;
}
function makeJames(){
  var jamesInfo = 'When James isn\'t breaking code, he nerds out on bicycles, camping, and incomplete lists.';
  document.getElementById('info').innerHTML = jamesInfo;
  document.getElementById('info').style.borderColor = '#00ff00';
  jamesImg.classList.toggle('focusR');
  clear(jamesImg);
  document.getElementById('info').hidden = false;
}