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

function makeCollin(){
  var collinInfo = 'This is where Collin\'s info will go';
  document.getElementById('info').innerHTML = collinInfo;
  document.getElementById('info').hidden = false;
  document.getElementById('info').style.borderColor = '#0000ff';
  var collinImg = document.getElementById('imgCollin');
  collinImg.classList.toggle('focusR');
}
function makeSarah(){
  var sarahInfo = 'Sarah is an environmental activist	turned coding enthusiast. She enjoys eating burritos, watching true crime documentaries, and falling asleep on other people\'s couches.';
  document.getElementById('info').innerHTML = sarahInfo;
  document.getElementById('info').hidden = false;
  document.getElementById('info').style.borderColor = '#ff0000';
  var sarahImg = document.getElementById('imgSarah');
  sarahImg.classList.toggle('focusL');
}
function makeMatt(){
  var mattInfo = 'This is where Matt\'s info will go';
  document.getElementById('info').innerHTML = mattInfo;
  document.getElementById('info').hidden = false;
  document.getElementById('info').style.borderColor = '#fff000';
  var mattImg = document.getElementById('imgMatt');
  mattImg.classList.toggle('focusL');
}
function makeJames(){ 
  var jamesInfo = 'When James isn\'t breaking code, he nerds out on bicycles, camping, and incomplete lists.';
  document.getElementById('info').innerHTML = jamesInfo;
  document.getElementById('info').hidden = false;
  document.getElementById('info').style.borderColor = '#00ff00';
  var jamesImg = document.getElementById('imgJames');
  jamesImg.classList.toggle('focusR');
}