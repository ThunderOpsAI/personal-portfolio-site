// Contact form validation and mailto handler (FR-7.*, NFR-3.3)

function sanitizeForMailto(text) {
  return encodeURIComponent(text.replace(/\r?\n/g, '\n').trim());
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitButton = document.getElementById('contact-submit');
  const statusEl = document.getElementById('contact-status');

  if (!form || !submitButton) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validateField(input, errorEl) {
    const value = input.value.trim();
    let error = '';

    if (!value) {
      error = 'This field is required.';
    } else if (input === emailInput && !isValidEmail(value)) {
      error = 'Please enter a valid email address.';
    } else if (input === messageInput && value.length < 10) {
      error = 'Message should be at least 10 characters.';
    }

    if (errorEl) {
      errorEl.textContent = error;
    }

    return !error;
  }

  function validateForm() {
    const nameOk = validateField(nameInput, nameError);
    const emailOk = validateField(emailInput, emailError);
    const messageOk = validateField(messageInput, messageError);

    const allValid = nameOk && emailOk && messageOk;
    submitButton.disabled = !allValid;
    return allValid;
  }

  ['input', 'blur'].forEach((eventName) => {
    nameInput.addEventListener(eventName, validateForm);
    emailInput.addEventListener(eventName, validateForm);
    messageInput.addEventListener(eventName, validateForm);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    statusEl.textContent = '';

    const ok = validateForm();
    if (!ok) {
      statusEl.textContent = 'Please fix the highlighted errors before sending.';
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const subject = sanitizeForMailto(`Portfolio Contact from ${name}`);
    const body = sanitizeForMailto(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const emailLink = document.querySelector('.contact__info a[href^="mailto:"]');
    const targetEmail = emailLink
      ? emailLink.getAttribute('href').replace('mailto:', '')
      : 'you@example.com';

    const mailtoUrl = `mailto:${encodeURIComponent(
      targetEmail
    )}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    statusEl.textContent =
      'Your email client should now be open with a pre-filled message. Please review and send it there.';

    form.reset();
    submitButton.disabled = true;
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);

