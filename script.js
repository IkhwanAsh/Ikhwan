const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Web Developer", "Designer", "Computer Scientist"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 120;
const erasingSpeed = 60;
const delayBetweenWords = 1500;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (!isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex < currentWord.length) {
      setTimeout(typeEffect, typingSpeed);
    } else {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex > 0) {
      setTimeout(typeEffect, erasingSpeed);
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 300);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) setTimeout(typeEffect, 1000);
});
