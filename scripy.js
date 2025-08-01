// Handle help form submit
document.getElementById('help-message-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});

// Handle contact form submit
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your contact request has been sent. We will reply soon.');
  this.reset();
});
