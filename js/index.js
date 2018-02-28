'use strict';

var userForm = document.getElementById('userForm');
var matt = document.getElementById('matt');
var james = document.getElementById('james');

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

matt.addEventListener('dblclick', function(){
  window.location.assign('yellowgreen.html');
});

james.addEventListener('dblclick', function(){
  window.location.assign('yellowgreen.html');
});



//   if(event.target.input.value.length < 2 ){
//     console.log("x");
//     console.log(event.target.input.value);
//     alert('Name is too short!');
//     window.location.reload();
//     event.target.input.value = null;
//   } else if (event.target.input.value == null){
//     console.log("y");
//     console.log(event.target.input.value);
//     alert('Name is too short!');
//     window.location.reload();
//     event.target.input.value = null;
//   } else{
//     var userName = event.target.input.value;
//     console.log("z");
//     localStorage.setItem('userName',JSON.stringify(userName));
//     window.location.assign('game.html');
// }
