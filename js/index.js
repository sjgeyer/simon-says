'use strict';


var userForm = document.getElementById("userForm");

userForm.addEventListener("submit", function(event) {
  event.preventDefault();
  if(event.target.input.value.length < 3){
    alert("Name is too short!")
    event.target.input.value = null;
  }
  var userName = event.target.input.value;
  localStorage.setItem("user",JSON.stringify(userName));
  document.getElementById("you").innerHTML = JSON.parse(localStorage.getItem("user", JSON.stringify(userName)));
  window.location.assign("game.html")



});
