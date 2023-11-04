/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    
    const newsletterForm = document.querySelector("form");
  
    const messageDiv = document.querySelector(".message");
  
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      const emailInput = newsletterForm.querySelector("#email").value;
  
      if (!emailInput || !isValid(emailInput)) {
        showMessage("Please enter a valid email address.");
      } else {
        showMessage(`Thank you! Your email address ${emailInput} has been added to our mailing list!`);
      }
    });
  
    function showMessage(message) {
      messageDiv.textContent = message;
    }
  
    function isValid(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });