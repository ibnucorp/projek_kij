// Mobile menu toggle functionality
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("svg");

  // Toggle content visibility
  content.classList.toggle("hidden");

  // Rotate icon
  icon.classList.toggle("rotate-180");
}
