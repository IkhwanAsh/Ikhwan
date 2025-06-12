// script.js
const texts = ["Web Developer", "Frontend Enthusiast", "Tech Learner"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

(function type(){
  if(count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  typedTextSpan.textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 150);
  }
})();
