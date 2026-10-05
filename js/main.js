/* ==========================================================================
   Clothes For All — main.js
   Handles: mobile navigation toggle, footer year, and a simple
   confirmation message when the Enquiry / Contact forms are submitted.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile navigation toggle ----
  // The nav is hidden on small screens (see the mobile media query in
  // css/style.css) until this button is used to reveal it.
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // ---- Footer year ----
  var yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ---- Form handling (Enquiry + Contact pages) ----
  var forms = document.querySelectorAll('.js-validate-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var statusBox = form.querySelector('#form-status');
      var isValid = form.checkValidity();

      if (!isValid) {
        form.reportValidity();
        if (statusBox) {
          statusBox.textContent = 'Please fill in all required fields correctly.';
          statusBox.className = 'error';
        }
        return;
      }

      if (statusBox) {
        statusBox.textContent = 'Thank you — your message has been received. A CFA team member will be in touch soon.';
        statusBox.className = 'success';
      }

      form.reset();
    });
  });

});
