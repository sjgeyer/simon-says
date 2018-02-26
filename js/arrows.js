var keyPresses = [];
var randoms = [];
function go(){addRandom()};
function addRandom(){
  randoms += Math.floor((Math.random() * 4)+1);
  console.log(randoms);
};
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
  case "ArrowDown":
    keyPresses +=4;
    console.log(keyPresses);
    break;
  case "ArrowUp":
    keyPresses +=2;
    console.log(keyPresses);
    break;
  case "ArrowLeft":
    keyPresses +=1;
    console.log(keyPresses);
    break;
  case "ArrowRight":
    keyPresses +=3;
    console.log(keyPresses);
    break;
  case "Enter":
    checkLogic();
    break;
  default:
    return;
  }
  event.preventDefault();
}, true);

function checkLogic(){
  if (randoms === keyPresses){
    keyPresses = [];
    addRandom();
  } else {
    return console.log('This would link to the hi-score page');
  };
} 