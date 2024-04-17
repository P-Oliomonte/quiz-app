console.clear();
const buttonAnswer1 = document.querySelector('[data-js="button-answer1"]');
const answer1 = document.querySelector('[data-js="answer1"]');

const buttonAnswer2 = document.querySelector('[data-js="button-answer2"]');
const answer2 = document.querySelector('[data-js="answer2"]');

const buttonAnswer3 = document.querySelector('[data-js="button-answer3"]');
const answer3 = document.querySelector('[data-js="answer3"]');

const buttonAnswer4 = document.querySelector('[data-js="button-answer4"]');
const answer4 = document.querySelector('[data-js="answer4"]');

buttonAnswer1.addEventListener("click", () => {
  answer1.classList.toggle("answer-hide");

  if (answer1.classList.contains("answer-hide")) {
    buttonAnswer1.innerHTML =
      'Show answer<i class="bi bi-caret-down-fill button-icon"></i>';
  } else {
    buttonAnswer1.innerHTML =
      'Hide answer<i class="bi bi-caret-up-fill button-icon"></i>';
  }
});

buttonAnswer2.addEventListener("click", () => {
  answer2.classList.toggle("answer-hide");

  if (answer2.classList.contains("answer-hide")) {
    buttonAnswer2.innerHTML =
      'Show answer<i class="bi bi-caret-down-fill button-icon"></i>';
  } else {
    buttonAnswer2.innerHTML =
      'Hide answer<i class="bi bi-caret-up-fill button-icon"></i>';
  }
});

buttonAnswer3.addEventListener("click", () => {
  answer3.classList.toggle("answer-hide");

  if (answer3.classList.contains("answer-hide")) {
    buttonAnswer3.innerHTML =
      'Show answer<i class="bi bi-caret-down-fill button-icon"></i>';
  } else {
    buttonAnswer3.innerHTML =
      'Hide answer<i class="bi bi-caret-up-fill button-icon"></i>';
  }
});

buttonAnswer4.addEventListener("click", () => {
  answer4.classList.toggle("answer-hide");

  if (answer4.classList.contains("answer-hide")) {
    buttonAnswer4.innerHTML =
      'Show answer<i class="bi bi-caret-down-fill button-icon"></i>';
  } else {
    buttonAnswer4.innerHTML =
      'Hide answer<i class="bi bi-caret-up-fill button-icon"></i>';
  }
});
