const bookmark1 = document.querySelector('[data-js="bookmark-q1"]');

bookmark1.addEventListener("click", () => {
  bookmark1.classList.toggle("bookmark-checked");
});

const bookmark2 = document.querySelector('[data-js="bookmark-q2"]');

bookmark2.addEventListener("click", () => {
  bookmark2.classList.toggle("bookmark-checked");
});

const bookmark3 = document.querySelector('[data-js="bookmark-q3"]');

bookmark3.addEventListener("click", () => {
  bookmark3.classList.toggle("bookmark-checked");
});

const bookmark4 = document.querySelector('[data-js="bookmark-q4"]');

bookmark4.addEventListener("click", () => {
  bookmark4.classList.toggle("bookmark-checked");
});
