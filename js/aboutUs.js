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
  var collin = document.createElement("p");
  var collinP = document.createTextNode("Collin's info will go here");
  collin.appendChild(collinP);
  document.body.appendChild(collinP);
  //need to bind this to an element with an ID, maybe a <div> under after the <img> but in the same container?
}
function makeSarah(){
  console.log('bind sarah\'s info to the dom and append it?');
  console.log('put rest of function here manipulating images');
  var sarah = document.createElement("p");
  var sarahP = document.createTextNode("Sara's info will go here");
  sarah.appendChild(sarahP);
  document.body.appendChild(sarahP);
}
function makeMatt(){
  console.log('bind matt\'s info to the dom and append it?');
  console.log('put rest of function here manipulating images');
  var matt = document.createElement("p");
  var mattP = document.createTextNode("Matt's info will go here");
  matt.appendChild(mattP);
  document.body.appendChild(mattP);
}
function makeJames(){
  console.log('bind james\' info to the dom and append it?');
  console.log('put rest of function here manipulating images');
  var james = document.createElement("p");
  var jamesP = document.createTextNode("When James isn't breaking code, he nerds out on bicycles, camping, and incomplete lists.");
  james.appendChild(jamesP);
  document.body.appendChild(jamesP);
}
