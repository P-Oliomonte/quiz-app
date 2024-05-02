console.clear();

const form = document.querySelector('[data-js="question-form"]');
const mainContainer = document.querySelector("main");
const inputQuestion = document.querySelector('[data-js="question-form-input"]');
const characterCounterQuestion = document.querySelector(
  '[data-js="character-counter-question"]'
);
const inputAnswer = document.querySelector('[data-js="answer-form-input"]');
const characterCounterAnswer = document.querySelector(
  '[data-js="character-counter-answer"]'
);

inputQuestion.focus();

// This is the function for the character counters

function characterCounter(input, counter) {
  input.addEventListener("input", () => {
    charactersLeft = 150 - input.value.length;
    counter.textContent = charactersLeft;
  });
}

characterCounter(inputQuestion, characterCounterQuestion);
characterCounter(inputAnswer, characterCounterAnswer);

// Here starts the function for form submission and card creation/

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.target.question.focus();

  const question = data.question;
  const answer = data.answer;
  const tag = data.tag.split(" ").join("");

  const newQuestionCard = document.createElement("section");
  newQuestionCard.classList.add("question-card");

  newQuestionCard.innerHTML = `<div class="bookmark-container">
  <svg
    class="bookmark"
    data-js="bookmark"
    data-name="Ebene 1"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 200 200"
  >
    <path class="cls-1" d="M197,3H3v191l97-55,97,55V3h0Z" />
  </svg>
</div>
<h2 class="question">${question}</h2>

<button class="button" data-js="button-answer1">
  Show answer<i class="bi bi-caret-down-fill button-icon"></i>
</button>

<p class="answer answer-hide" data-js="answer1">
  ${answer}
</p>

<div class="tags-container">
  <a class="tag" href="#">#${tag}</a>
</div>`;

  mainContainer.append(newQuestionCard);

  event.target.reset();

  // Here starts the bookmark and answer toggle functionality

  const bookmarks = document.querySelectorAll("[data-js='bookmark']");

  bookmarks.forEach((bookmark) => {
    // Add click event listener to each bookmark
    bookmark.addEventListener("click", () => {
      // Toggle the 'bookmark-checked' class on the clicked bookmark
      bookmark.classList.toggle("bookmark-checked");
    });
  });

  const buttonAnswer1 = document.querySelector('[data-js="button-answer1"]');
  const answer1 = document.querySelector('[data-js="answer1"]');

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
});
