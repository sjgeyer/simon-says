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

function makeCollin(){
  var collinInfo = 'This is where Colin\'s info will go';
  document.getElementById("info").innerHTML = collinInfo;
  var collinImg = document.getElementById("imgCollin");
  collinImg.classList.toggle("focusR");
}
function makeSarah(){
  var sarahInfo = 'This is where Sarah\'s info will go';
  document.getElementById("info").innerHTML = sarahInfo;
  var sarahImg = document.getElementById("imgSarah");
  sarahImg.classList.toggle("focusL");
}
function makeMatt(){
  var mattInfo = 'This is where Matt\'s info will go';
  document.getElementById("info").innerHTML = mattInfo;
  var mattImg = document.getElementById("imgMatt");
  mattImg.classList.toggle("focusL");
}
function makeJames(){ 
  var jamesInfo = 'When James isn\'t breaking code, he nerds out on bicycles, camping, and incomplete lists.';
  document.getElementById("info").innerHTML = jamesInfo;
  var jamesImg = document.getElementById("imgJames");
  jamesImg.classList.toggle("focusR");
}