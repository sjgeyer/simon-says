'use strict';

var spookyImg = document.getElementById('spooky');
var h1 = document.getElementById('title');
var div = document.getElementById('div');
var catchText = document.getElementById('catch');
var caughtText = document.getElementById('caught');
var button = document.getElementById('backHome');

spookyImg.addEventListener('click', clickSpooky);

var hide = setTimeout(hideText, 750);

function hideText () {
  catchText.hidden = true;
  h1.classList.add('hidden');
}

function clickSpooky() {
  catchText.classList.toggle('hidden');
  caughtText.classList.toggle('hidden');
  button.classList.toggle('hidden');
  spookyImg.classList.toggle('spookyMove');
  div.classList.toggle('divMove');
  h1.classList.toggle('hidden');
  console.log('clicked');
  spookyImg.removeEventListener('click', clickSpooky);
}