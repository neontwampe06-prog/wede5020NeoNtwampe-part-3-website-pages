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

    var message = this.querySelector("#form-message");
    if (message) {
      var enquiryType = this.querySelector("#enquiry-type");

      if (enquiryType) {
        var city = this.querySelector("#city");
        var responses = {
          donation:
            "Please contact the selected centre to confirm clothing drop-off arrangements. The website does not list monetary donation or payment details.",
          volunteer:
            "Volunteer opportunities depend on current local needs. Contact the selected centre to confirm current availability and next steps.",
          sponsor:
            "Sponsorship arrangements depend on the support offered. Please include your organisation and the type of support in your message so the team can discuss suitable options.",
          other:
            "The team can advise on your request once they have the details in your message."
        };

        message.textContent =
          "Thank you, " +
          this.elements["full-name"].value +
          ". Your " +
          enquiryType.options[enquiryType.selectedIndex].text +
          " enquiry for " +
          city.options[city.selectedIndex].text +
          " is ready. " +
          responses[enquiryType.value] +
          " This demo does not send enquiries, so please contact the organisation directly to receive a reply.";
      } else {
        message.textContent = "Thank you! Your message has been received.";
      }

      message.className = "success";
    }

    // Clear the form fields
    this.reset();
  });
}
