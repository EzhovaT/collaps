document.querySelectorAll(".accordion__button").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;
    button.classList.toggle("accordion__button_active");

    if (button.classList.contains("accordion__button_active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});
