var myTurn = document.getElementById('myTurn')

function userTurn(){
  myTurn.style.display === "none";
  yourTurn.style.display === "block";

  var keyPresses = [];
  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
    case "ArrowDown":
      keyPresses +=4;
      var newArrow = document.createElement('img');
      newArrow.src = 'images/arrow-d.png';
      arrowImages.appendChild('newArrow');
      break;
    case "ArrowUp":
      keyPresses +=2;
      break;
    case "ArrowLeft":
      keyPresses +=1;
      break;
    case "ArrowRight":
      keyPresses +=3;
      break;
    default:
      return; // Quit when this doesn't handle the key event.
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);

}