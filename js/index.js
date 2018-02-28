'use strict';

var userForm = document.getElementById('userForm');
var matt = document.getElementById('matt');
var james = document.getElementById('james');

userForm.addEventListener('submit', handleSubmit);

function handleSubmit(){
  if(event.target.input.value === 'Enter Name' || event.target.input.value === ''){
    event.preventDefault();
    alert('Enter Your Name');
  }
  else{
    event.preventDefault();
    var userName = event.target.input.value;
    localStorage.setItem('userName',JSON.stringify(userName));
    window.location.assign('game.html');
  }
}

matt.addEventListener('dblclick', function(){
  window.location.assign('yellowgreen.html');
});

james.addEventListener('dblclick', function(){
  window.location.assign('yellowgreen.html');
});