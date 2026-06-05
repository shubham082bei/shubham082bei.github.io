const colorButton = document.querySelector('#color');
const hoverButton = document.querySelector('#hover');

const hero = document.querySelector('.hero');
colorButton.addEventListener('click', function(){
  hero.style.backgroundColor = 'green';
  console.log("button color changed");});
hoverButton.addEventListener('mouseover',function(){
hoverButton.style.backgroundColor = "blue";
console.log("hover button clicked");
});
hoverButton.addEventListener('mouseout',function(){
  hoverButton.style.backgroundColor = "darkred";
  console.log("hover button mouse out");
});
//test
const countButton = document.querySelector('#countbutton');
const clicks = document.querySelector('#clicks');
let clickcount = 0;
countButton.addEventListener('click', function(){
clickcount+=1;
clicks.textContent = `No. of clicks = ${clickcount}`;
});

const themeButton = document.querySelector('#theme');
const body = document.querySelector('body');
themeButton.addEventListener('click', function(){
body.classList.toggle('dark-mode');
console.log("theme button clicked");
});