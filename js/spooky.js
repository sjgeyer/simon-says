'use strict';

var spookyImg = document.getElementById('spooky');
var h1 = document.getElementById('title');
var div = document.getElementById('div');
var catchText = document.getElementById('catch');
var caughtText = document.getElementById('caught');
var button = document.getElementById('backHome');
var go = document.getElementById('go');

go.addEventListener('click', hideText);

function hideText () {
  catchText.hidden = true;
  go.hidden = true;
  h1.classList.add('hidden');
  spookyImg.classList.add('spookyMove');
  div.classList.add('divMove');
  spookyImg.addEventListener('click', clickSpooky);
}

function clickSpooky() {
  caughtText.classList.remove('hidden');
  button.classList.remove('hidden');
  spookyImg.classList.remove('spookyMove');
  div.classList.remove('divMove');
  h1.classList.remove('hidden');
  console.log('clicked');
  spookyImg.removeEventListener('click', clickSpooky);
}