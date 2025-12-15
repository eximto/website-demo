document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const msg = document.getElementById("formMessage");
  msg.textContent = "Thank you! We’ll get back to you shortly.";
  msg.style.color = "green";

  this.reset();
});
