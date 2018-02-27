'use strict';

window.addEventListener('keydown', function (event) {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
  case 'ArrowDown':
    console.log('down arrow');
    makeCollin();
    break;
  case 'ArrowUp':
    console.log('up arrow');
    makeMatt();
    break;
  case 'ArrowLeft':
    console.log('left arrow');
    makeSarah();
    break;
  case 'ArrowRight':
    console.log('right arrow');
    makeJames();
    break;
  default:
    return;
  }
  event.preventDefault();
}, true);

function makeCollin(){
  console.log('bind collin\'s info to the dom and append it?');
  console.log('put rest of function here manipulating images');
}
function makeSarah(){
  console.log('bind sarah\'s info to the dom and append it?');
  console.log('put rest of function here manipulating images');
}
function makeMatt(){
  console.log('bind matt\'s info to the dom and append it?');
  console.log('put rest of function here manipulating images');
}
function makeJames(){
  console.log('bind james\' info to the dom and append it?');
  console.log('put rest of function here manipulating images');
}