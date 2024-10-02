const words = document.querySelectorAll('.word');
        let currentIndex = 0;

        function showWord(index) {
            // Hide all words
            words.forEach(word => {
                word.classList.remove('visible');
            });
            // Show the current word
            words[index].classList.add('visible');

            // Move to the right if it's not the first word
            const translateX = index * 10; // 10px for each word
            document.querySelector('.animated-paragraph').style.transform = `translateX(${translateX}px)`;
        }

        function animateWords() {
            showWord(currentIndex);
            currentIndex++;

            // Reset index if it exceeds the number of words
            if (currentIndex >= words.length) {
                currentIndex = 0; // Reset to the first word
            }
        }

        // Start the animation and change words every 2 seconds
        setInterval(animateWords, 2000);