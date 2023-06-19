const stylesheet = document.documentElement.style;

const toggle = document.querySelector(".switch__input[data-theme-toggle]");
toggle.addEventListener("click", () => {
  const light = getComputedStyle(document.documentElement).getPropertyValue(
    "--light-color"
  )
  const dark = getComputedStyle(document.documentElement).getPropertyValue(
    "--black-color"
  )

  stylesheet.setProperty("--light-color", dark);
  stylesheet.setProperty("--black-color", light);
});
