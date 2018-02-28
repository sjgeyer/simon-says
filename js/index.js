'use strict';

var userForm = document.getElementById('userForm');

userForm.addEventListener('submit', function(event) {
  event.preventDefault();


  if(event.target.input.value.length < 2 ){
    console.log("x");
    console.log(event.target.input.value);
    alert('Name is too short!');
    window.location.reload();
    event.target.input.value = null;
  } else if (event.target.input.value == null){
    console.log("y");
    console.log(event.target.input.value);
    alert('Name is too short!');
    window.location.reload();
    event.target.input.value = null;
  } else{
    var userName = event.target.input.value;
    console.log("z");
    localStorage.setItem('userName',JSON.stringify(userName));
    window.location.assign('game.html');
}
});
