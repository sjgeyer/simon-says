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
  collinImg.classList.toggle("focusD");
  if(imgSarah.classList.length === 1){
    ghostSarah();
  } else if (imgMatt.classList.length === 1){
    ghostMatt();
  } else if (imgJames.classList.length === 1){
    ghostJames();
  };
}
function makeSarah(){
  var sarahInfo = 'This is where Sarah\'s info will go';
  document.getElementById("info").innerHTML = sarahInfo;
  var sarahImg = document.getElementById("imgSarah");
  sarahImg.classList.toggle("focusL");
  if (imgJames.classList.length === 1){
    ghostJames();
  } else if(imgCollin.classList.length === 1){
    ghostCollin();
  } else if(imgMatt.classList.length === 1){
    ghostMatt();
  };
}
function makeMatt(){
  var mattInfo = 'This is where Matt\'s info will go';
  document.getElementById("info").innerHTML = mattInfo;
  var imgMatt = document.getElementById("imgMatt");
  imgMatt.classList.toggle("focusU");
  if (imgJames.classList.length === 1){
    ghostJames();
  } else if (imgCollin.classList.length === 1){
    ghostCollin();
  } else if (imgSarah.classList.length === 1){
    ghostSarah();
  };
}
function makeJames(){ 
  var jamesInfo = 'When James isn\'t breaking code, he nerds out on bicycles, camping, and incomplete lists.';
  document.getElementById("info").innerHTML = jamesInfo;
  var imgJames = document.getElementById("imgJames");
  imgJames.classList.toggle("focusR");
  if (imgMatt.classList.length === 1){
    ghostMatt();
  } else if (imgSarah.classList.length === 1){
    ghostSarah();
  } else if (imgCollin.classList.length === 1){
    ghostCollin();
  };
}
function ghostMatt(){
  var imgMatt = document.getElementById("imgMatt");
  imgMatt.classList.toggle("focusU");
};
function ghostSarah(){
  var imgSarah = document.getElementById("imgSarah");
  imgSarah.classList.toggle("focusL");
};
function ghostJames(){
  var imgJames = document.getElementById("imgJames");
  imgJames.classList.toggle("focusR");
};
function ghostCollin(){
  var imgCollin = document.getElementById("imgCollin");
  imgCollin.classList.toggle("focusD");
};