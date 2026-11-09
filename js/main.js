// Clothes For All - main.js
// Updates the footer year and submits forms through the configured email service.

// Show the current year in the footer
var yearSpan = document.getElementById("current-year");
if (yearSpan) {
  var today = new Date();
  yearSpan.textContent = today.getFullYear();
}

function setFormMessage(message, text, state) {
  message.textContent = text;
  message.className = state;
}

// Submit the enquiry and contact forms through FormSubmit.
var forms = document.querySelectorAll("form");

for (var i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", async function (event) {
    event.preventDefault();

    var message = this.querySelector("#form-message");
    if (!message) {
      return;
    }

    var form = this;
    var submitButton = form.querySelector('button[type="submit"]');
    var originalButtonText = submitButton.textContent;
    var formData = new FormData(form);
    var payload = {};
    var enquiryType = form.querySelector("#enquiry-type");
    var subject;

    formData.forEach(function (value, key) {
      payload[key] = value;
    });

    if (enquiryType) {
      subject =
        "[" +
        enquiryType.options[enquiryType.selectedIndex].text +
        "] Enquiry from " +
        form.elements["full-name"].value;
      payload._replyto = form.elements.email.value;
    } else {
      subject =
        "[" +
        form.elements["message-type"].value +
        "] " +
        form.elements.subject.value;
      payload._replyto = form.elements.email.value;
    }

    payload._subject = subject;
    payload._template = "table";
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    setFormMessage(message, "Sending your message...", "pending");

    try {
      var response = await fetch(form.dataset.ajaxAction || form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });
      var result = await response.json();

      if (
        !response.ok ||
        (result.success !== true && result.success !== "true")
      ) {
        throw new Error(
          result.message || "The email service could not accept your message."
        );
      }

      if (enquiryType) {
        var responses = {
          donation:
            "The selected centre can confirm clothing drop-off arrangements; monetary donation details are not listed on this website.",
          volunteer:
            "The team can confirm current volunteer opportunities and next steps.",
          sponsor:
            "The team can discuss sponsorship options based on the support you described.",
          other:
            "The team can follow up with you about your request."
        };
        var city = form.querySelector("#city");

        setFormMessage(
          message,
          "Your enquiry was accepted for email processing. " +
            responses[enquiryType.value] +
            " Selected centre: " +
            city.options[city.selectedIndex].text +
            ".",
          "success"
        );
      } else {
        setFormMessage(
          message,
          "Your message was accepted for email processing. The organisation can reply to the email address you provided.",
          "success"
        );
      }

      form.reset();
    } catch (error) {
      setFormMessage(
        message,
        "We could not submit your message. " +
          error.message +
          " Your entries have been kept; please try again or email info@clothesforall.org.za.",
        "error"
      );
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}
