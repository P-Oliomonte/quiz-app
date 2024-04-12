const body = document.querySelector("body");
const title = document.querySelector("h1");
const about = document.querySelector('[data-js="about"]');
const picAndName = document.querySelector('[data-js="pic-and-name"]');
const counterContainer = document.querySelector(
  '[data-js="counter-container"]'
);
const settingsContainer = document.querySelector(
  '[data-js="settings-container"]'
);
const settingsHeading = document.querySelector('[data-js="settings-heading"]');
const darkModeContainer = document.querySelector('[data-js="dark-mode"]');

const toggleButton = document.querySelector('[data-js="toggle-button"]');

toggleButton.addEventListener("click", () => {
  body.classList.toggle("body-dark");
  title.classList.toggle("h1-dark");
  about.classList.toggle("about-dark");
  picAndName.classList.toggle("pic-and-name-dark");
  counterContainer.classList.toggle("counter-container-dark");
  settingsContainer.classList.toggle("settings-container-dark");
  settingsHeading.classList.toggle("h3-dark");
  darkModeContainer.classList.toggle("dark-mode-dark");
});
