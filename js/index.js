'use strict';

var userForm = document.getElementById('userForm');

userForm.addEventListener('submit', handleSubmit);

function handleSubmit(){
  if(event.target.input.value === 'Enter Name' || event.target.input.value === ''){
    event.preventDefault();
    alert('Enter Your Name');
    console.log('Reset');
  }
  else{
    event.preventDefault();
    var userName = event.target.input.value;
    localStorage.setItem('userName',JSON.stringify(userName));
    window.location.assign('game.html');
    console.log('Else');
  }
}