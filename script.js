const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Web Developer", "Designer", "Computer Sains"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 60;
let newWordDelay = 1500;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(type, erasingDelay);
    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, newWordDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) setTimeout(type, newWordDelay);
});
