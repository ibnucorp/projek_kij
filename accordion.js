function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("svg");

  // Toggle content visibility
  content.classList.toggle("hidden");
  content.classList.toggle("block");

  // Rotate icon
  icon.classList.toggle("rotate-180");

  const allContents = document.querySelectorAll(".p-6");
  const allIcons = document.querySelectorAll(".w-5.h-5");
  allContents.forEach((item) => {
    if (item !== content && item.classList.contains("block")) {
      item.classList.remove("block");
      item.classList.add("hidden");
    }
  });
  allIcons.forEach((item) => {
    if (item !== icon && item.classList.contains("rotate-180")) {
      item.classList.remove("rotate-180");
    }
  });
}
