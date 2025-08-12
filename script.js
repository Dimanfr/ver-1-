document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const cta = document.getElementById("cta");

  cta.addEventListener("click", () => {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Vielen Dank für Ihre Nachricht!");
    form.reset();
  });
});
