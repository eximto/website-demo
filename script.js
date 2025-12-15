document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const message = document.getElementById("formMessage");
  message.textContent = "Thanks! We’ll get back to you shortly.";
  message.style.color = "green";

  this.reset();
});
