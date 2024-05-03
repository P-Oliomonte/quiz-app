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

function textfieldInput(input, characterCount) {
  characterCount.textContent =
    input.getAttribute("maxlength") - input.value.length;
}

inputQuestion.addEventListener("input", () => {
  textfieldInput(inputQuestion, characterCounterQuestion);
});

inputAnswer.addEventListener("input", () => {
  textfieldInput(inputAnswer, characterCounterAnswer);
});

// Function to add '#'

function hashtag(data) {
  const input = data.split(" ").join("");
  if (input.startsWith("#")) {
    return input;
  } else {
    return "#" + input;
  }
}

// Here starts the function for form submission and card creation/

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // Declaring input variables

  const questionInput = data.question;
  const answerInput = data.answer;
  const tagInput = hashtag(data.tag);

  // Creating elements and appending them to the DOM

  const questionCard = document.createElement("section");
  questionCard.classList.add("question-card");

  const bookmarkContainer = document.createElement("div");
  bookmarkContainer.classList.add("bookmark-container");
  bookmarkContainer.innerHTML = `<svg
            class="bookmark"
            data-js="bookmark"
            data-name="Ebene 1"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 200 200"
          >
            <path class="cls-1" d="M197,3H3v191l97-55,97,55V3h0Z" />
          </svg>`;

  const svg = bookmarkContainer.querySelector("svg");

  // Add click event listener to each bookmark
  svg.addEventListener("click", () => {
    // Toggle the 'bookmark-checked' class on the clicked bookmark
    svg.classList.toggle("bookmark-checked");
  });

  questionCard.append(bookmarkContainer);

  const question = document.createElement("h2");
  question.classList.add("question");
  question.textContent = questionInput;

  questionCard.append(question);

  const hideShowButton = document.createElement("button");
  hideShowButton.classList.add("button");
  hideShowButton.setAttribute("data-js", "button-answer1");
  hideShowButton.innerHTML = `Show answer<i class="bi bi-caret-down-fill button-icon"></i>`;

  questionCard.append(hideShowButton);

  const answer = document.createElement("p");
  answer.classList.add("answer", "answer-hide");
  answer.setAttribute("data-js", "answer");
  answer.textContent = answerInput;

  questionCard.append(answer);

  const tagContainer = document.createElement("div");
  tagContainer.classList.add("tags-container");

  const tag = document.createElement("a");
  tag.classList.add("tag");
  tag.setAttribute("href", "#");
  tag.textContent = tagInput;

  tagContainer.append(tag);

  questionCard.append(tagContainer);

  mainContainer.append(questionCard);

  event.target.reset();
  event.target.question.focus();

  // Here is the event li

  hideShowButton.addEventListener("click", () => {
    answer.classList.toggle("answer-hide");

    if (answer.classList.contains("answer-hide")) {
      hideShowButton.innerHTML =
        'Show answer<i class="bi bi-caret-down-fill button-icon"></i>';
    } else {
      hideShowButton.innerHTML =
        'Hide answer<i class="bi bi-caret-up-fill button-icon"></i>';
    }
  });
});
