// const words = document.querySelectorAll('.word');
//         let currentIndex = 0;

//         function showWord(index) {
//             // Hide all words
//             words.forEach(word => {
//                 word.classList.remove('visible');
//             });
//             // Show the current word
//             words[index].classList.add('visible');

//             // Move to the right if it's not the first word
//             const translateX = index * 10; // 10px for each word
//             document.querySelector('.animated-paragraph').style.transform = `translateX(${translateX}px)`;
//         }

//         function animateWords() {
//             showWord(currentIndex);
//             currentIndex++;

//             // Reset index if it exceeds the number of words
//             if (currentIndex >= words.length) {
//                 currentIndex = 0; // Reset to the first word
//             }
//         }

//         // Start the animation and change words every 2 seconds
//         setInterval(animateWords, 2500);




const texts = ["talent showcase opportunities", "centralized communication", "networking opportunities"];
let index = 0;
let charIndex = 0;
const typingSpeed = 15;  // Speed of typing and erasing (faster typing)
const delayBetweenTypingAndErasing = 1000; // Pause before erasing starts
const clearTypingDelay = 40; // Delay after clearing before typing starts

const typewriterElement = document.getElementById("typewriter");

function typeText() {
  if (charIndex < texts[index].length) {
    // Type letters from the center outward
    typewriterElement.textContent = texts[index].substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {


    setTimeout(eraseText, delayBetweenTypingAndErasing);
  }
}

function eraseText() {
  typewriterElement.style.transform = "scale(1)";
  typewriterElement.style.opacity = "1";

  if (charIndex > 0) {
    typewriterElement.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, typingSpeed);
  } else {
    // Add a 15 ms delay before starting to type the next word
    setTimeout(() => {
      index = (index + 1) % texts.length;  // Move to the next word
      typeText();  // Start typing the next word
    }, clearTypingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeText, 1000);  // Start typing after a brief delay
});





