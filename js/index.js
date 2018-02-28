'use strict';

var userForm = document.getElementById('userForm');

userForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if(event.target.input.value === 'Enter Name' || event.target.input.value === ''){
    alert('Enter Your Name');
  }
  else{
    var userName = event.target.input.value;
    localStorage.setItem('userName',JSON.stringify(userName));
    window.location.assign('game.html');
  }
});
