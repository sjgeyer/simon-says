'use strict';

var userForm = document.getElementById('userForm');

userForm.addEventListener('submit', handleSubmit);


  var emptStr = "";
  for(var i=0; i<event.target.input.value.length; i++){
    emptStr += event.target.input.value[i];
  }

  if(emptStr.length < 2 ){
    console.log(emptStr);
    alert('Name is too short!');
    window.location.reload();
    emptStr = null;
  }else if (emptStr != "Enter name"){
    var userName = emptStr;
    console.log("z");
    localStorage.setItem('userName',JSON.stringify(userName));
    window.location.assign('game.html');
  }
});

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
