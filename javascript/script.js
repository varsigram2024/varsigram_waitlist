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



// Waitlist form
document.getElementById("waitlistForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const submitButton = document.getElementById("submitButton");
    const formData = new FormData(this);
    const scriptURL = "https://script.google.com/macros/s/AKfycbxFJo6iuHM3YRPeVmVQjBHj6hI9QmVv9J5yj8rqMYcGPehNU3WlaxSxjNnVkJay2SNdqg/exec"; // Replace with your Apps Script Web App URL

    // Change button text to "Loading..."
    submitButton.disabled = true;
    submitButton.textContent = "Loading...";

    fetch(scriptURL, { method: "POST", body: formData })
        .then(response => {
            if (response.ok) {
                showSuccessMessage(); // Show success message
            } else {
                alert("There was a problem submitting the form. Please try again.");
            }
        })
        .catch(error => console.error("Error!", error.message))
        .finally(() => {
            // Revert button text after submission completes
            submitButton.disabled = false;
            submitButton.textContent = "Submit";
        });
});

function showSuccessMessage() {
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block"; // Show the success message

    // Hide the success message after a few seconds
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000); // Adjust time as needed (3000ms = 3 seconds)
}





