// Clothes For All - main.js
// Simple script to show a thank you message when a form is submitted,
// and to display the current year in the footer.

// Show the current year in the footer
var yearSpan = document.getElementById("current-year");
if (yearSpan) {
  var today = new Date();
  yearSpan.textContent = today.getFullYear();
}

// Handle the enquiry and contact forms
var forms = document.querySelectorAll("form");

for (var i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", function (event) {
    // Stop the form from actually submitting, since there is no server
    event.preventDefault();

    // Show the thank you message
    var message = this.querySelector("#form-message");
    if (message) {
      message.textContent = "Thank you! Your message has been received.";
      message.className = "success";
    }

    // Clear the form fields
    this.reset();
  });
}
