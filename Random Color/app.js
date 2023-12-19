
for (let i = 0; i < 9; i++) {
 const box  = document.createElement('div')
 box.classList.add('box');
 document.querySelector('.container').appendChild(box)
 
}
const btn = document.querySelector('.button-24');
const randomColorPicker = document.querySelectorAll('.box');

function randomColorCode() {
 var chars = '0123456789abcdef';
 var colorLength = 6;
 var color = '';
 for (let i = 0; i < colorLength; i++) {
  var randomColor = Math.floor(Math.random()* chars.length);
  color += chars.substring(randomColor , randomColor+1);
 }
 return '#' + color;
}
function addColor() {
 randomColorPicker.forEach(e =>{
  var newColor = randomColorCode();
  e.style.background = newColor;
  e.innerHTML = newColor;
 })
}
window.onload = function(){
  addColor();
}