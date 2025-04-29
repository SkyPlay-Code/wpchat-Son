// Define your secret access code
const SECRET_CODE = "ChatSoNSw25"; // <-- IMPORTANT: Change this to your desired code!

// Get references to the HTML elements
const accessScreen = document.getElementById('accessScreen');
const chatDisplay = document.getElementById('chatDisplay');
const accessCodeInput = document.getElementById('accessCodeInput');
const accessCodeButton = document.getElementById('accessCodeButton');
const errorMessage = document.getElementById('errorMessage');

// Add an event listener to the button
accessCodeButton.addEventListener('click', () => {
    const enteredCode = accessCodeInput.value;

    if (enteredCode === SECRET_CODE) {
        // Code is correct, hide access screen and show chat
        accessScreen.style.display = 'none';
        chatDisplay.style.display = 'flex'; // Use flex because .chat-container was flex
        errorMessage.textContent = ''; // Clear any previous error messages
    } else {
        // Code is incorrect, display error message
        errorMessage.textContent = "Invalid access code. Please try again.";
    }
});

// Optional: Allow pressing Enter key to submit
accessCodeInput.addEventListener('keypress', (event) => {
    // Check if the pressed key was 'Enter' (key code 13)
    if (event.key === 'Enter') {
        // Prevent the default form submission (if input was inside a form)
        event.preventDefault();
        // Trigger the button click event
        accessCodeButton.click();
    }
});