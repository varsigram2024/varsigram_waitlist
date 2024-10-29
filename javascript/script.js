const texts = ["talent showcase opportunities", "centralized communication", "networking opportunities"];
let index = 0;
let charIndex = 0;
const typingSpeed = 15; 
const delayBetweenTypingAndErasing = 1000;
const clearTypingDelay = 40; 

const typewriterElement = document.getElementById("typewriter");

function typeText() {
  if (charIndex < texts[index].length) {
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
    
    setTimeout(() => {
      index = (index + 1) % texts.length;  
      typeText();  
    }, clearTypingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeText, 1000);  
});



// Waitlist form
document.getElementById("waitlistForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const submitButton = document.getElementById("submitButton");
    const formData = new FormData(this);
    const scriptURL = "https://script.google.com/macros/s/AKfycbyt5pWT8agKiN7Xm82fFPDTfeIK9sEliTFV0ZyN8nYDrPq7Xk7C5AVO2unHPRY0L4zn/exec"; 


    submitButton.disabled = true;
    submitButton.textContent = "Loading...";

    fetch(scriptURL, { method: "POST", body: formData })
        .then(response => {
            if (response.ok) {
                showSuccessMessage(); 
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





