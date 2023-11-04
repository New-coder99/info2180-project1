/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const newsletterForm = document.querySelector("form");
  
    // Get the message div element
    const messageDiv = document.querySelector(".message");
  
    // Listen for the form submission event
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get the email input value
      const emailInput = newsletterForm.querySelector("#email").value;
  
      // Check if the email is empty or invalid
      if (!emailInput || !isValidEmail(emailInput)) {
        showMessage("Please enter a valid email address.");
      } else {
        showMessage(`Thank you! Your email address ${emailInput} has been added to our mailing list!`);
      }
    });
  
    // Function to display a message in the message div
    function showMessage(message) {
      messageDiv.textContent = message;
    }
  
    // Function to validate an email address using a simple regular expression
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });