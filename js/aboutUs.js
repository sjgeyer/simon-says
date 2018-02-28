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

var ghostSarah = document.getElementById('ghostSarah');
var ghostCollin = document.getElementById('ghostCollin');
var ghostMatt = document.getElementById('ghostMatt');
var ghostJames = document.getElementById('ghostJames');
var teamImg = document.getElementById('teamImg');
var images = [ghostSarah, ghostCollin, ghostMatt, ghostJames];

function clear(ghostPic, className) {
  for (var i = 0; i < images.length; i++) {
    if(images[i].classList && images[i] !== ghostPic) {
      images[i].classList.remove('focusL');
      images[i].classList.remove('focusR');
    }
  }
  if(!ghostPic.classList.contains(className)) {
    teamImg.src = 'images/Spooky-Small.png';
    document.getElementById('info').innerHTML = 'Press the arrow keys to find out more about the developers of Spooky Says!';
    document.getElementById('info').style.borderColor = '#fff';
  }
}
function makeCollin(){
  var collinInfo = 'A creature of refined sensibilities, Collin enjoys literature, music, and melancholy introspection.';
  document.getElementById('info').innerHTML = collinInfo;
  document.getElementById('info').style.borderColor = '#0000ff';
  ghostCollin.classList.toggle('focusR');
  teamImg.src = 'images/Collin.jpg';
  clear(ghostCollin, 'focusR');
}
function makeSarah(){
  var sarahInfo = 'Sarah is an environmental activist	turned coding enthusiast. She enjoys eating burritos, watching true crime documentaries, and falling asleep on other people\'s couches.';
  document.getElementById('info').innerHTML = sarahInfo;
  document.getElementById('info').style.borderColor = '#ff0000';
  ghostSarah.classList.toggle('focusL');
  teamImg.src = 'images/sarah.jpeg';
  clear(ghostSarah, 'focusL');
}
function makeMatt(){
  var mattInfo = 'Matt is an aspiring web developer who enjoys helping people figure out what they want and then helping them get it.';
  document.getElementById('info').innerHTML = mattInfo;
  document.getElementById('info').style.borderColor = '#fff000';
  ghostMatt.classList.toggle('focusL');
  teamImg.src = 'images/matt.jpg';
  clear(ghostMatt, 'focusL');
}
function makeJames(){
  var jamesInfo = 'When James isn\'t breaking code, he nerds out on bicycles, camping, and incomplete lists.';
  document.getElementById('info').innerHTML = jamesInfo;
  document.getElementById('info').style.borderColor = '#00ff00';
  ghostJames.classList.toggle('focusR');
  teamImg.src = 'images/Ghost-R.png';
  clear(ghostJames, 'focusR');
}
