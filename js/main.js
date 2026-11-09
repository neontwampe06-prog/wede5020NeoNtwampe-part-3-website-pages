// Clothes For All - main.js
// Updates the footer year and enhances form and content interactions.

var yearSpan = document.getElementById("current-year");
if (yearSpan) {
  var today = new Date();
  yearSpan.textContent = today.getFullYear();
}

function setFormMessage(message, text, state) {
  if (!message) {
    return;
  }

  message.textContent = text;
  message.className = state;
}

function setFieldError(field, message) {
  if (!field) {
    return;
  }

  var errorTarget = document.getElementById(field.id + "-error");
  if (errorTarget) {
    errorTarget.textContent = message || "";
  }

  field.setAttribute("aria-invalid", message ? "true" : "false");
}

function clearFieldError(field) {
  setFieldError(field, "");
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePhone(value) {
  var normalised = value.replace(/[\s()-]/g, "");
  return /^(?:\+27|0)[1-9]\d{8}$/.test(normalised);
}

function validateField(field) {
  if (!field || field.type === "hidden" || field.disabled) {
    return true;
  }

  var fieldId = field.id || field.name || "";
  var value = field.value.trim();
  var hasValue = value.length > 0;
  var fieldName = (field.name || field.id || "").toLowerCase();

  if (field.required && !hasValue) {
    setFieldError(field, "This field is required.");
    return false;
  }

  if (!hasValue) {
    clearFieldError(field);
    return true;
  }

  if (
    fieldId === "full-name" ||
    fieldId === "c-name" ||
    fieldName.indexOf("name") !== -1
  ) {
    if (value.length < 2 || value.length > 80 || !/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(value)) {
      setFieldError(field, "Please enter a valid full name with 2 to 80 letters.");
      return false;
    }
  }

  if (fieldName === "email" || fieldId === "c-email") {
    if (!validateEmail(value) || value.length > 254) {
      setFieldError(field, "Please enter a valid email address.");
      return false;
    }
  }

  if (fieldName === "phone" || fieldId === "phone") {
    if (!validatePhone(value)) {
      setFieldError(field, "Please enter a valid South African phone number, for example 071 234 5678.");
      return false;
    }
  }

  if (
    fieldId === "enquiry-type" ||
    fieldId === "c-type" ||
    fieldName === "message-type"
  ) {
    if (!value) {
      setFieldError(field, "Please select a message type.");
      return false;
    }
  }

  if (
    fieldId === "message" ||
    fieldId === "c-message" ||
    fieldName === "message"
  ) {
    if (value.length < 10 || value.length > 1000) {
      setFieldError(field, "Please write between 10 and 1000 characters.");
      return false;
    }
  }

  if (
    fieldId === "subject" ||
    fieldId === "c-subject" ||
    fieldName === "subject"
  ) {
    if (value.length < 3 || value.length > 120) {
      setFieldError(field, "Please enter a subject between 3 and 120 characters.");
      return false;
    }
  }

  clearFieldError(field);
  return true;
}

function validateForm(form) {
  var fields = Array.from(form.querySelectorAll("input, select, textarea"));
  var isValid = true;

  fields.forEach(function (field) {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

// Submit the enquiry and contact forms through FormSubmit.
var forms = document.querySelectorAll("form");

for (var i = 0; i < forms.length; i++) {
  forms[i].addEventListener("input", function (event) {
    var field = event.target;
    if (field && field.tagName !== "BUTTON") {
      validateField(field);
    }
  });

  forms[i].addEventListener("change", function (event) {
    var field = event.target;
    if (field && field.tagName !== "BUTTON") {
      validateField(field);
    }
  });

  forms[i].addEventListener("submit", async function (event) {
    event.preventDefault();

    var message = this.querySelector("#form-message");
    if (!message) {
      return;
    }

    var form = this;
    if (!validateForm(form)) {
      setFormMessage(message, "Please correct the highlighted fields and try again.", "error");

      var firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

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
      Array.from(form.querySelectorAll("input, select, textarea")).forEach(function (field) {
        clearFieldError(field);
      });
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

var faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(function (faqItem) {
  var faqButton = faqItem.querySelector(".faq-question");
  if (!faqButton) {
    return;
  }

  faqButton.addEventListener("click", function () {
    var isOpen = faqItem.classList.contains("is-open");

    faqItems.forEach(function (item) {
      item.classList.remove("is-open");
      var button = item.querySelector(".faq-question");
      if (button) {
        button.setAttribute("aria-expanded", "false");
      }
    });

    if (!isOpen) {
      faqItem.classList.add("is-open");
      faqButton.setAttribute("aria-expanded", "true");
    }
  });
});

var lightbox = document.getElementById("image-lightbox");
if (lightbox) {
  var lightboxImage = document.getElementById("lightbox-image");
  var lightboxTitle = document.getElementById("lightbox-title");
  var lightboxCloseButton = document.querySelector(".lightbox-close");

  function openLightbox(imageSource, title) {
    lightboxImage.src = imageSource;
    lightboxImage.alt = title;
    lightboxTitle.textContent = title;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll(".gallery-item").forEach(function (button) {
    button.addEventListener("click", function () {
      openLightbox(button.dataset.image, button.dataset.title);
    });
  });

  if (lightboxCloseButton) {
    lightboxCloseButton.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
