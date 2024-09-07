function respond(answer) {
    const responseElement = document.getElementById('response');
    const noBtn = document.getElementById('noBtn');

    if (answer === 'yes') {
        responseElement.textContent = "Love you too guddu! 💖";
        noBtn.style.display = 'none'; // Hide the "No" button if "Yes" is clicked
    } else {
        responseElement.textContent = "Ahaan Pati se Hushyaari!";

        // Move the "No" button to a new random position within the window
        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;

        // Get the viewport width and height
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Ensure the button stays within the viewport boundaries
        const maxLeft = viewportWidth - buttonWidth;
        const maxTop = viewportHeight - buttonHeight;
        const randomLeft = Math.random() * maxLeft;
        const randomTop = Math.random() * maxTop;

        noBtn.style.left = randomLeft + 'px';
        noBtn.style.top = randomTop + 'px';
    }
}

// Ensure the "No" button starts within the viewport
document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    noBtn.style.position = 'absolute';
});


