var keyPresses = [];
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "ArrowDown":
        console.log('arrowdown');
        keyPresses +=4;
        console.log(keyPresses);
        break;
      case "ArrowUp":
        console.log('arrowup');
        keyPresses +=2;
        console.log(keyPresses);
        break;
      case "ArrowLeft":
        console.log('arrowleft');
        keyPresses +=1;
        console.log(keyPresses);
        break;
      case "ArrowRight":
        console.log('arrowright');
        keyPresses +=3;
        console.log(keyPresses);
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);